const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const fontCarrier = require('font-carrier');
const _ = require('lodash');

// 读取渲染模板
const TEMPLATE_STR = fs.readFileSync(path.join(__dirname, 'css.template'));
// 获取
const fontMeta = JSON.parse(fs.readFileSync(path.join(__dirname, 'fontMeta.json'), {encoding: 'utf-8'}));
const codePoints = fontMeta.codePoints || {};
const unicodeMapSvg = fontMeta.unicodeMapSvg || {};
let startCodePoint = parseInt(fontMeta.startCodePoint, 16);

const updateFontMeta = (fontMeta) => fs.writeFileSync(path.join(__dirname, 'fontMeta.json'), JSON.stringify(fontMeta, null, 4));
// 0xF101
const getUnicodeMapSvg = (filePath) => {
  if(unicodeMapSvg[filePath]){
    return unicodeMapSvg[filePath];
  }

  unicodeMapSvg[filePath] = '&#x' + (startCodePoint).toString(16) + ';';
  codePoints[path.parse(filePath).name] = startCodePoint.toString(16);
  startCodePoint = (startCodePoint + 1);

  return unicodeMapSvg[filePath];
};

const generateFont = (options) => {
  if(!options.svgsPath) {
    const throwError = `"svgsPath" required is ${options.svgsPath}`;
    throw throwError;
  }
  const svgs = glob.sync(path.join(process.cwd(), options.svgsPath));
  // 创建一个空字体文件
  const font = fontCarrier.create();
  // 获取 svg icon
  svgs.forEach(svg => {
    // 设置字体的 Glyphs
    font.setSvg(getUnicodeMapSvg(svg), fs.readFileSync(svg).toString());
  });
  // 更新 font meta
  console.log(startCodePoint, codePoints, unicodeMapSvg);

  startCodePoint = startCodePoint.toString(16);
  updateFontMeta({startCodePoint, codePoints, unicodeMapSvg});
  options = _.extend(options, {startCodePoint, codePoints, unicodeMapSvg});
  // 输出字体文件
  const pathDir = path.join(process.cwd(), options.outputPath);
  fs.ensureDirSync(pathDir);
  font.output({
    path: path.join(pathDir, options.fontName)
  });
};

const generateCSS = (options) => {
  const timeStamp = (new Date()).getTime();
  const outputFontFiles = glob.sync(path.join(process.cwd(), options.outputPath, '*'));
  outputFontFiles.forEach(fontFile => {
    const metas = path.parse(fontFile);
    const ext = metas.ext.slice(1);
    if(ext === 'woff2'){
      options[ext] = fs.readFileSync(fontFile).toString('base64');
    } else {
      options[ext] = `${/\/$/.test(options.cssPath) ? options.cssPath : `${options.cssPath}/`}${metas.base}?t=${timeStamp}`;
    }
  });
  fs.writeFileSync(path.join(process.cwd(), options.outputPath, /\.\w*$/.test(options.cssFileName) ? options.cssFileName : `${options.cssFileName}.css`), _.template(TEMPLATE_STR)(options));
};

module.exports = {
  generateFont,
  generateCSS
};


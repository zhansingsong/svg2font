const { generateFont, generateCSS} = require('./generate');
const _ = require('lodash');
const path = require('path');

const getAbsolutePath = (p) => path.isAbsolute(p) ? p : path.join(process.cwd(), p);
const init = (options) => {
  // 默认配置
  const defaults = {
    // svgs 路径，https://github.com/isaacs/node-glob
    svgPath: null,
    // 输出 css 文件名
    cssFileName: 'iconfont',
    // 字体名
    fontName: 'iconfont',
    // 引用 icon 类名的前缀
    iconClassPrefix: 'icon',
    // 基类名
    baseClass: 'iconfont',
    // 字体和 css 文件输出目录
    outputPath: 'output',
    // css 中字体的引用路径
    stylePath: '.',
    // 设置伪类
    pseudo: 'before',
    // 是否追加
    append: false,
  };
  options = _.assignInWith(defaults, options, (objValue, srcValue) => !srcValue ? objValue : srcValue);
  if(_.isObject(options.outputPath)){
    options.fontOutputPath = options.outputPath.font || 'output';
    options.cssOutputPath = options.outputPath.css || 'output';
  } else {
    options.fontOutputPath = options.outputPath;
    options.cssOutputPath = options.outputPath;
  }
  options.svgPath = getAbsolutePath(options.svgPath);
  options.fontOutputPath = getAbsolutePath(options.fontOutputPath);
  options.cssOutputPath = getAbsolutePath(options.cssOutputPath);
  generateFont(options);
  generateCSS(options);
};

module.exports = init;

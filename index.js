const { generateFont, generateCSS} = require('./generate');
const _ = require('lodash');

const init = (options) => {
  // 默认配置
  const defaults = {
    // 输出 css 文件名
    cssFileName: 'iconfont',
    // 字体名
    fontName: 'iconfont',
    // 引用 icon 的前缀
    iconPrefix: 'icon',
    // 基类名
    baseSelector: 'iconfont',
    // 字体和 css 文件输出目录
    outputPath: 'output',
    // css 中自己的引用路径
    cssPath: '.',
  };
  options = _.extend(defaults, options);
  generateFont(options);
  generateCSS(options);
};

init();

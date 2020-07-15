const svg2font = require('../index');
const path = require('path');
svg2font({
    // svgs 路径，参考 https://github.com/isaacs/node-glob
    svgPath: path.join(__dirname, 'svgs', '*.svg'),
    // 输出 css 文件名
    cssFileName: '_iconfont.scss',
    // 字体名
    fontName: 'iconfont',
    // 引用 icon 类名的前缀
    iconClassPrefix: 'icon',
    // 基类名
    baseClass: 'iconfont',
    // 字体和 css 文件输出目录
    outputPath: {
      font: 'font',
      css: 'css'
    },
    // css 中字体的引用路径
    stylePath: '.',
    // 设置伪类
    pseudo: 'after'
});
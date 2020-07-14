const svg2font = require('../index');
svg2font({
    // svgs 路径，参考 https://github.com/isaacs/node-glob
    svgsPath: 'svgs/*',
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
});
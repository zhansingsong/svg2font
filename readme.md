# svg2font

一个将 SVG icon 转换为 font icons 实用小工具！


## 快速入门

- 安装

```bash
npm install @zhansingsong/svg-to-font
```

- 引用

```js
const svg2font = require('@zhansingsong/svg-to-font');
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
```


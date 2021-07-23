# svg2font

一个将 SVG icon 转换为 font icons 实用小工具！

## 快速入门

- 安装

```bash
npm install @zhansingsong/svg2font
```

- 引用

```js
const svg2font = require('@zhansingsong/svg-to-font');
svg2font({
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
    outputPath: {
      font: 'font/path/to/dir',
      css: 'css/path/to/dir'
    }
    // css 中字体的引用路径
    stylePath: '.',
    // 设置伪类
    pseudo: 'before',
    // 是否进行追加。 取值 false 时，每次都会重新生成
    append: true,
});
```

## 命令行

```bash
Usage: svg2font <svgPath> [options]

<svgPath>: path to svg icons

Options:
  -v, --version                              output the version number
  -c, --css-file-name [cssFileName]          set css file name. https://github.com/isaacs/node-glob
  -f, --font-name [fontName]                 set font name
  -i, --icon-class-prefix [iconClassPrefix]  set class prefix
  -b, --base-class [baseClass]               set base class
  -o, --output-path [outputPath]             set output path to fonts
  -of, --output-path-font [outputPathFont]   set output font path to fonts
  -oc, --output-path-css [outputPathCss]     set output css path to fonts
  -s, --style-path [stylePath]               set output path to fonts
  -p, --pseudo [pseudo]                      set pseudo
  -a, --append [append]                      set append
  -h, --help                                 display help for command

Examples:

  $ svg2font /path/to/svg/*.svg
  $ svg2font /path/to/svg/*.svg -c iconfont -f customFont
```


#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const path = require('path');
const pkg = require('../package.json');
const svg2font = require('../index');

program.version(pkg.version, '-v, --version')
  .arguments('<svgPath>')
  .action((svgPath) => {
    program.svgPath = svgPath;
  })
  .usage(`${chalk.green('<svgPath>')} [options]`)
  .description(`${chalk.green('<svgPath>')}: path to svg icons`)
  .option('-c, --css-file-name [cssFileName]', 'set css file name. https://github.com/isaacs/node-glob')
  .option('-f, --font-name [fontName]', 'set font name')
  .option('-i, --icon-class-prefix [iconClassPrefix]', 'set class prefix')
  .option('-b, --base-class [baseClass]', 'set base class')
  .option('-o, --output-path [outputPath]', 'set output path to fonts')
  .option('-of, --output-path-font [outputPathFont]', 'set output font path to fonts')
  .option('-oc, --output-path-css [outputPathCss]', 'set output css path to fonts')
  .option('-s, --style-path [stylePath]', 'set output path to fonts')
  .option('-p, --pseudo [pseudo]', 'set pseudo')
  .option('-a, --append [append]', 'set append')
  .on('--help', () => {
    console.log(`\n${chalk.bold('Examples:')}\n`);
    console.log(`  ${chalk.bold.yellow('$')} svg2font /path/to/svg/*.svg`);
    console.log(`  ${chalk.bold.yellow('$')} svg2font /path/to/svg/*.svg -c iconfont -f customFont`);
    console.log();
  });

program.parse(process.argv);

let {svgPath, cssFileName, fontName, iconClassPrefix, outputPath, outputPathFont, outputPathCss, stylePath, pseudo, append} = program;
// https://stackoverflow.com/questions/3954750/parsing-command-line-arguments-as-wildcards
svgPath = svgPath.replace(/@/g, '*');

if(!outputPath){
  outputPath = {
    font: outputPathFont,
    css: outputPathCss
  }
}

svg2font({
  svgPath, cssFileName, fontName, iconClassPrefix, outputPath, stylePath, pseudo, append
});
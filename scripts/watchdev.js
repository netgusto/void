var webpack = require('webpack');
var webpackconfig = require('../webpack.config');
var chalk = require('chalk');

webpackconfig.output.path = __dirname + '/../devbuild';

var compiler = webpack(webpackconfig);

compiler.watch({}, function(err, stats) {
  if(err) { throw err; }
  console.log('');
  console.log(chalk.grey(stats.toString()));
  console.log('');
  console.log(chalk.green('Compiled.'));
  console.log('');
});
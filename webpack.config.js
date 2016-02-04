module.exports = {
  entry: {
    app: [__dirname + '/src/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  plugins: [],
};

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'none',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
    ],
  },
};

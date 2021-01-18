const path = require('path');

const main = {
  mode: 'development',
  target: 'electron-main',

  entry: path.resolve(__dirname, 'src/index'),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },

  node: {
    __dirname: false,
    __filename: false,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },

  devtool: 'source-map',
};

const renderer = {
  mode: 'development',
  target: 'electron-main',

  entry: path.resolve(__dirname, 'src/renderer/index'),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/scripts"),
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: [
          'ts-loader'
        ],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules'),
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.tsx', '.jsx', '.css', '.json',
    ],
  },
};

module.exports = [
  main, renderer
];

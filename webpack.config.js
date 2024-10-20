const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development', // O 'production' si estás en producción
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map', // Cambiado para evitar 'eval'
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Usa "static" en lugar de "contentBase"
    },
    compress: true,
    port: 9000,
    hot: false, // Desactivar Hot Module Replacement (HMR)
  },
};

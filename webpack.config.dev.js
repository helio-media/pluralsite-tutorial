import webpack from 'webpack';
import path from 'path';

export default {
   devtool: 'inline-source-map',
   entry: [path.resolve(__dirname, 'src/index.js')],
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   mode: 'development',
   plugins: [
      new webpack.LoaderOptionsPlugin({
         debug: true,
         noInfo: false
      })
   ],
   module: {
      rules: [
         { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader"}},
         { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
      ]
   }
};

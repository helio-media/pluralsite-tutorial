import webpack from 'webpack';
import path from 'path';

export default {
   devtool: 'source-map',
   entry: [path.resolve(__dirname, 'src/index.js')],
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   mode: 'development',
   plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': '"production"'
     })
   ],
   module: {
      rules: [
         { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader"}},
         { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
      ]
   }
};

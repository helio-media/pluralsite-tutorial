/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackconfig from '../webpack.config.prod';
import chalk from 'chalk';

//babel and other plugins look for this variable to determine how to build
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for prod. This will take a moment...'))

webpack(webpackconfig).run((err, stats) => {
   if(err){
      console.log(chalk.red(err));
      return 1;
   }

   const jsonStats = stats.toJson();

   if(jsonStats.hasErrors){
      return jsonStats.errors.map(error => console.log(chalk.red(error)));
   }

   if(jsonStats.hasWarning){
      console.log(chalk.yellow('webpack generatd the following warnings: '));
      jsonStats.warnings.map(w => console.log(chalk.yellow(w)));
   }
   console.log(`Webpack stats: ${stats}`);

   // if we get this far the build succeeded.
   console.log(chalk.green('Your app has been built for production and written to /dist!'))
   return 0;
});

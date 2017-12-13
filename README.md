Webpack Foo
===========

This is just a dummy project to experiment with webpack and its loaders.


 - Added config.
 
 Use require to resolve the path and then bootstrap.
 env is a flag that goes in package.json's npm script
 
 Also removed the IIFE's.
 This is how the config file looks like:
 
 ```
 const resolve = require('path').resolve;
 module.exports = function(env){
     return {
         context:resolve('src'),
         entry:'./bootstrap.js',
         output:{
             path: resolve('dist'),
             filename:'bundle.js',
             pathinfo: !!env.prod
         },
         devtool:env.prod ? 'source-map' : 'eval',
     }
 }
 ```

 - Added CSS and LESS loaders

 Adding module:{loaders} inside the configuration file helps us tell webpack to use loaders.
 Currently, we have a less file, and an orphan CSS file. The less file is loaded in memory,
 transpiled into css and then goes through the `style-loader` to wrap the compiled CSS into <style> tags
 which then is injected into the index.html.

 ```
 const resolve = require('path').resolve;
 module.exports = function(env){
     return {
         context:resolve('src'),
         entry:'./bootstrap.js',
         output:{
             path: resolve('dist'),
             filename:'bundle.js',
             pathinfo: !env.prod
         },
         module:{
             loaders:[
                 {test:/\.less$/, loaders:['style-loader', 'css-loader', 'less-loader']}
             ]
         },
         devtool:env.prod ? 'source-map' : 'eval',
     }
 }
 ```
 
 - A Separate CSS file
 
 using `extract-text-webpack-plugin` we can easily tell webpack to transpile the LESS file into css and then have 
 it stored in a separate CSS file.
 The config now becomes:
 
 
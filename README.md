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
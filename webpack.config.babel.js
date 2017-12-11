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
        devtool:env.prod ? 'source-map' : 'eval',
    }
}
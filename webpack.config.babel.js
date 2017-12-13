const resolve = require('path').resolve;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env){
    const extractLess = new ExtractTextPlugin({
        filename: "stuff.css",
        /*disable: !env.prod //use style-loader when in development*/
    });
    return {
        context:resolve('src'),
        entry:'./bootstrap.js',
        output:{
            path: resolve('dist'),
            filename:'bundle.js',
            pathinfo: !env.prod
        },
        module:{
            rules:[{
                test:/\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }],
        },
        devtool:env.prod ? 'source-map' : 'eval',
        plugins:[
            extractLess
        ]

    }
}
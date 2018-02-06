const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry:{
       home:path.resolve(__dirname,'src/js/index.js'),
    },
    output:{
        path: path.resolve(__dirname,'../public'),
        filename:'js/[name].js'
    },
    module:{
        rules:[
           {
               test:/\.css$/,
               use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
           } 
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
        new ExtractTextPlugin("css/[name].css")
      ]
}
const path = require("path");
var React = require('react');
const TerserPlugin = require("terser-webpack-plugin");
module.exports ={
    entry:'./src/index.jsx',
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,'public'),
    },
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    /*
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    */
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase: './public',
    },
    optimization :{
        minimize: true,
        minimizer:[new TerserPlugin({
            extractComments:false
        })]
    }
  
}
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    debug: true,
    devtool: "#eval-source-map",
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                 presets: ['es2015', 'react']
               }
            }
        ]
    }
};

module.exports = config;
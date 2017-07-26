//var webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: /*__dirname + */{ 
        'App':__dirname + '/app/assets/scripts/App.js',
        'Vendor':__dirname + '/app/assets/scripts/Vendor.js'
    },
    output:
        {
            path:__dirname + "/app/temp.styles/scripts",
            filename: "[name].js"
        },

    module:
        {
            loaders: 
            [
                {
                    loader: 'babel-loader',
                    query:
                        {
                            presets: ['es2015']
                        },
                    test: /\.js$/,
                    exclude: /node_modules/
                }
            ]
        }
}
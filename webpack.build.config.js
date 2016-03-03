var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './app.js',
    },
    devtool: false,
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css')
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=6000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            minimize: true,
            compress: {
                warnings: false
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify("production")},
            '__DEV__': false
        }),

        new CopyWebpackPlugin([
            {from: './app/index.html', to: '/'},
            {from: './app/img', to: './img'},
        ]),
    ]
};
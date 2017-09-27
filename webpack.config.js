/**
 * Created by lantu on 2017/9/27.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname,'src/index.js')
    ],
    output: {
        path: path.join(__dirname,'/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node.modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        extensions: ['.js','.jsx','.json']
    }
}


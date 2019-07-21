const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './source/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: true }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{ loader: 'file-loader', options: { outputPath: 'images' } }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: './source/index.js',
        port: 9000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}

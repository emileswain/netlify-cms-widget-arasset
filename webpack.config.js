const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require(path.join(process.cwd(), 'package.json'));
const developmentConfig = {
    mode: 'development',
    entry: './dev/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devtool: 'eval-source-map',
}

const productionConfig = {
    mode: 'production',
    target: 'web',
    entry: './src/',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `main.js`,
        library: 'netlifyCmsWidgetArasset',
        libraryTarget: 'umd',
        libraryExport: 'netlifyCmsWidgetArasset',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
}

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const env = require('dotenv').config();

module.exports = env => {
    return {
        entry: './src/app.js',
        mode: 'production',
        node: {
            fs: "empty"
        },
        output: {
            filename: 'app.min.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins:[
            new webpack.EnvironmentPlugin(['PASSTHROUGH']),
            new CopyPlugin([
                { from: './index.html', to: '../404.html' },
            ]),
        ],
    }
};
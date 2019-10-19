const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules:[
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}
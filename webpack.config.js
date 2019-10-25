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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    devtool: 'eval',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}
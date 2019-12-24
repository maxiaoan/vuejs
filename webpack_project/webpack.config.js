const path = require('path');

module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: "dist/"
        },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpeg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }]
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                use:["vue-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            // runing-complier
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions: ['.js','.css','.vue']

    }
};
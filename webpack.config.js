var path = require('path');

var APP_PATH        = path.join(__dirname),
    DIST_PATH       = path.join(APP_PATH, '/public/'),
    FRONTEND_PATH   = path.join(APP_PATH, '/src/');

module.exports = {
    entry: {
        main: [
            path.join(FRONTEND_PATH, 'main.js')
        ]
    },
    output: {
        path: DIST_PATH,
        publicPath: 'public/',
        filename: '[name].js'
    },
    resolve: {
        root: FRONTEND_PATH,
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'react-hot',
                    'jsx',
                    'babel?optional[]=es7.classProperties&optional[]=es7.objectRestSpread',
                    'eslint'
                ],
                exclude: /node_modules/
            },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};

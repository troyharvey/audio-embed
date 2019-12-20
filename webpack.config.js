const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    entry: './src/widget.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'widget.js'
    }
};

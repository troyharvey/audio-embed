const path = require('path');

module.exports = {
    entry: './src/widget.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'widget.js'
    }
};

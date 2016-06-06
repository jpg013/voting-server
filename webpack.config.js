module.exports = {
    entry: [
        './client/src/test.js'
    ],
    output: {
        path: __dirname + '/client/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './client/dist'
    }
};

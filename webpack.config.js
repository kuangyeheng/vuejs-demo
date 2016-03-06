module.exports = {
    entry: 'main.js',
    output:{
        path: './src',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.css']
    }
};

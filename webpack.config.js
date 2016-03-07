var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        public: './public',
        main: './main'
    },
    output:{
        path: './src',
        filename: '[name].js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    resolve: {
        alias:{
            jQuery:'./bower_components/jquery/dist/jquery.min',
            Vue:'./bower_components/vue/dist/vue.min',
            bootstrap: './bower_components/bootstrap/dist/css/bootstrap.min',
            'bootstrap-theme': './bower_components/bootstrap/dist/css/bootstrap-theme.min',
            'bootstrap-js': './bower_components/bootstrap/dist/js/bootstrap.min'
        },
        // you can now require('file') instead of require('file.coffee')
        extensions: ['','.js','.css']
    },
    plugins: [
        new ExtractTextPlugin('main.css') // 文件名规则 for css, 限定hash长度20
    ]
};

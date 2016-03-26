var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require('fs');
// var path = require('path');
var fileList = fs.readdirSync('./entryjs');
var entryArr = [];
fileList = fileList.map(function (item, i) {
    var returnVal='';
    item.replace(/demo\d+/, function (item) {
        entryArr.push('./entryjs/'+item);
    });
    return returnVal;
});

delete fileList;
// console.dir(entryArr);
// return;
module.exports = {
    entry: {
        public: './entryjs/public',
        main: entryArr
    },
    output:{
        filename: '[name].[chunkhash].js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: [ 'es2015']
                }
            },
            {test:/\.(css|scss)$/,loader:ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    resolve: {
        alias:{
            jQuery: __dirname + '/bower_components/jquery/dist/jquery.min',
            Vue: __dirname + '/bower_components/vue/dist/vue.min',
            bootstrap:  __dirname + '/bower_components/bootstrap/dist/css/bootstrap.min',
            'bootstrap-theme':  __dirname + '/bower_components/bootstrap/dist/css/bootstrap-theme.min',
            'bootstrap-js':  __dirname + '/bower_components/bootstrap/dist/js/bootstrap.min'
        },
        // you can now require('file') instead of require('file.coffee')
        extensions: ['','.js','.css']
    },
    plugins: [
        new ExtractTextPlugin('main.css') // 文件名规则 for css, 限定hash长度20
    ]
};

const path = require('path')

module.exports = {
    //在开发环境下
    mode:'development',
    //入口
    entry:{
        app:"./src/index.js"
    },
    //出口
    output:{
        //虚拟打包路径，就是说文件见不会真正生成，而是在8080端口虚拟生成
        // publicPath:'xuni',

        path:path.resolve(__dirname,'dist'),
        //打包出来的文件名
        filename:'bundle.js'
    },
}
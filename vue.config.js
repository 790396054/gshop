module.exports = {
  //  代理相关配置
  devServer: {
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }
  }
}

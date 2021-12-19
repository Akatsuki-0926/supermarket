module.exports = {
  configureWebpack: {
   resolve: {
     alias: {
       'assets': '@/assets'
     }
   }
  },
  outputDir: 'supermarket', //打包完之后的文件夹名称
  publicPath: '/supermarket/',//该路径要和outputDir一样
  assetsDir:'static'
}

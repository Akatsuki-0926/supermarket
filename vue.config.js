module.exports = {
  configureWebpack: {
   resolve: {
     alias: {
       'assets': '@/assets'
     }
   }
  },
  outputDir: 'supermarket', //打包完之后的文件夹名称
  assetsDir:'static',
  publicPath:'./'
}

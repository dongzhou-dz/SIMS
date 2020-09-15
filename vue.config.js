const path = require('path')


function resolve(dir){
  return path.resolve(__dirname, dir)
}


const devConfig = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        "@": resolve('src')
      }
    }
  }
}

const buildConfig = {

}

module.exports = process.NODE_ENV === 'development' ? devConfig : buildConfig
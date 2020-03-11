//var fs = require('fs')
//var appBasePath = './Scripts/app/'

// var jsEntries = {}
// // We search for index.js files inside basePath folder and make those as entries
// fs.readdirSync(appBasePath).forEach(function (name) {
//     var indexFile = appBasePath + name + '/main.js'
//     if (fs.existsSync(indexFile)) {
//         jsEntries[name] = indexFile
//     }
// })
module.exports = {
  outputDir: "content/dist",
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
  chainWebpack(config) {
    config.output.filename("js/[name].js"); //watch mode output
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
    },
    vue: {
        // entry for the page
        entry: "src/View/Vue/main.js",
      }
  }
};

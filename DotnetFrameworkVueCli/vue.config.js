var fs = require("fs");
var appBasePath = "./src/Views/";

var jsEntries = {};

generator(appBasePath);

jsEntries["index"] = "./src/main.js";

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
  pages: jsEntries

  //   pages: {
  //     index: {
  //       entry: "src/main.js",
  //     },
  //     vue: {
  //         entry: "src/View/Vue/main.js",
  //       }
  //   }
};

function generator(basePath) {
    fs.readdirSync(basePath).forEach(function(name) {
        if (!fs.lstatSync(basePath + name).isFile()) {
          var indexFile = basePath + name + "/main.js";
          if (fs.existsSync(indexFile)) {
            jsEntries[name] = { entry: indexFile };
          }

          generator(basePath + name + "/");
        }
      
      });
}

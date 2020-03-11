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
    config.output.filename("js/[name].js");
  }
};

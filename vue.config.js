module.exports = {
  publicPath: "./",

  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "",
  //       changeOrigin: true
  //     }
  //   }
  // },
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete("prefetch");
  }
};

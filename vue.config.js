module.exports = {
  publicPath: "./",

  devServer: {
    proxy: {
      "/v3": {
        target: "https://api.spacexdata.com",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete("prefetch");
  }
};

module.exports = {
  publicPath: "./",

  devServer: {
    proxy: {
      "/api": {
        target: "https://baidu.com",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete("prefetch");
  }
};

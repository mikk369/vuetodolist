module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:4111",
        changeOrigin: true,
      },
    },
  },
};

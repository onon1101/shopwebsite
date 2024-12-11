const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/shopwebsite/",
  configureWebpack: {
    resolve: {
      alias: {
        "@Layouts": path.resolve(__dirname, "src/components/Layouts/"),
        "@Inputs": path.resolve(__dirname, "src/components/Input/"),
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
});

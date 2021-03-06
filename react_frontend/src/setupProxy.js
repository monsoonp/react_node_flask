const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/node",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
  app.use(
    "/flask",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true
    })
  );
};

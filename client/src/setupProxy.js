const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://workoutapi-v3lm.onrender.com', // Your backend URL
      changeOrigin: true,
    })
  );
};

const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
// Create Express Server
const app = express();

// Configuration
const API_SERVICE_URL = "https://api.hypixel.net";

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Proxy endpoints
app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/`]: '',
    },
}));

// Start the Proxy
app.listen(8080, () => {
    console.log(`Starting Proxy`);
 });
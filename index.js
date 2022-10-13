const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
// Create Express Server
const app = express();

const API_SERVICE_URL = "https://astra.datastax.com/";

app.use(morgan('dev'));

app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/`]: '',
    },
}));

app.listen(8080, () => {
    console.log(`Starting Proxy`);
 });
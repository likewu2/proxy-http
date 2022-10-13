const ProxyChain = require('proxy-chain');
const morgan = require("morgan");

const server = new ProxyChain.Server({ port:3128, verbose:true });

server.listen(() => {
    console.log(`Proxy server is listening on port ${3128}`);
});

server.on('requestFailed', ({ request, error }) => {
    console.log(`Request ${request.url} failed`);
    console.error(error);
});
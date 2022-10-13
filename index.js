const http = require('http');
const setup = require('proxy');
const finalhandler = require('finalhandler')
const morgan = require("morgan");

var logger = morgan('combined')

let cs = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  logger(req, res, function (err) {
    if (err) return done(err)
 
    // respond to request
    res.setHeader('content-type', 'text/plain')
    res.end('hello, world!')
  })
})

var server = setup(cs);
server.listen(3128, function () {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});


/*
$ proxy --authenticate 'if \
    [ "$PROXY_AUTH_USERNAME" = "foo" ] && \
    [ "$PROXY_AUTH_PASSWORD" = "bar" ]; \
      then exit 0; \
    fi; \
    exit 1;'*/
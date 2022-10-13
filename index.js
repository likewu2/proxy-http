const http = require('http');
const setup = require('proxy');
const morgan = require("morgan");

var server = setup(http.createServer());
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
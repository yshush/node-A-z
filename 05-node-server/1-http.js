const http = require('http');
const fs = require('fs');
// const http2 = require('http2');  // https

//console.log(http.STATUS_CODES);
//console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  if (url === '/') {
    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }
});

server.listen(8080);

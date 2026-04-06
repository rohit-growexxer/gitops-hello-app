const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitOps 🚀");
}).listen(3000);

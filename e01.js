const http = require('http');
function startServeur(port){
    const hostname = '127.0.0.1';
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.end('<h1>Hello World</h1>');
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://sxdzcec:${port}/`);
    });
}
const port = process.argv[2];
startServeur(port);
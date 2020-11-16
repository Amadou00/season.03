const http = require('http');

function startServer(port){
    const hostname = '127.0.0.1';
    if(!port){
        console.log('usage : node ex02.js <PORT>')
        process.exit(0)
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        if (req.method === "GET"){
            res.write('<h1>Hello World</h1>\n');
        }
        else if(req.method === "POST"){
            res.write('Heisenberg\n');
        }
        res.end();
    });
    server.listen(4242, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });
}

const port = process.argv[2]; 
startServer(port);
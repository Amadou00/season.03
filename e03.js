const http = require('http');
const fs = require('fs');

//Permet d'afficher un fichier
function displayFile(file){
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

function startServer(port = 4242){
    const hostname = 'index.html';
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        if (req.method === "GET"){
            displayFile('index.html');
        }
        else if(req.method === "POST"){
            displayFile('index.html');
        }
        res.end();
        
    });
    server.listen(port, hostname, () => {
          console.log(`Server running at port ${port}/`);
    });
}
const port = process.argv[2];
startServer()
const http = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./home.html');
const services = fs.readFileSync('./service.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req.url);

    res.setHeader('Content-type', 'text/html');
    if (req.url == '/') {
        res.end(home);
    } else if (req.url == "/about") {
        res.end(about);
    } else if (req.url == "/contact") {
        res.end(contact)
    } else if (req.url == "/services") {
        res.end(services);
    }
})

server.listen(port, () => {
    console.log("Server is listening on port 3000");
})

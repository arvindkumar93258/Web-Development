const express = require('express');


const fs = require('fs');

const htmlFileContent = fs.readFileSync("index.html");

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(htmlFileContent);
})

app.listen(80, () => {
    console.log("Server is running on port 80");
})

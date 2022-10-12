const http = require('http');

const server = http.createServer((req,res) => {
    res.write(`<h1>HTML Format:Hi Arpana!!</h1>`);
    res.write(JSON.stringify(["Arpana",23,"Female"]));
})

server.listen(9000);

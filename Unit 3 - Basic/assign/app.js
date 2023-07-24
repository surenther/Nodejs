const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/users') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>User</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>');
        return res.end();        
    };
    if (url === '/creat-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=') [1];
            console.log (message);
        });        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    };
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from Node</h1></body>')
    res.write('<body><form action="/creat-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000)


const http = require('http');
const server = http.createServer((req, res)=>{
    res.write('anusha is studying FSD Lab Programms');
    res.end();
});
server.listen(3000, ()=>{
    console.log('Server is runing in the port 3000...');
})
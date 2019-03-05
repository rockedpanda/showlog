const config = require('config.json');
const http = require('http');
const { spawn } = require('child_process');
const logStream = spawn('tail', ['-f', `${config.filePath}`]);

const server = http.createServer((req, res) => {
    res.setHeader('Transfer-Encoding','chunked');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    if(req.url.startsWith('/log')){
        logStream.stdout.pipe(res);
    }else{
        res.write('请使用UTF-8编码查看日志, 访问路径 /log');
    }
});
server.listen(config.port);
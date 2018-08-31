const express = require('express');
const path = require('path');
const server = express();
server.use(express.static('./www'));
server.get('/',(req,res)=>{
	res.sendFile(
		path.resolve('./www/xiaomi.html')
		);
})
server.listen(80);
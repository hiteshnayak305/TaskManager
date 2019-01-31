var express = require('express');
var serveStatic = require('serve-static');
process.env.NODE_ENV='production';
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
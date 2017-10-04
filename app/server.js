var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
// });

//New lines!
app.get('/api/',function(req,res) {
	res.send('Working');
});

app.use(express.static('public'));

// require('./routes')(app);

console.log("Start listen: ", port);
app.listen(port);

exports = module.exports = app;

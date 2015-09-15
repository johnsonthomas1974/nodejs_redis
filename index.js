var express = require('express');
var redis = require('redis');
var client = redis.createClient(6379,"172.17.42.1");
client.on('connect', function() {
    console.log('connected');
});
// Constants
var PORT = 8080;
// App
var app = express();
app.get('/', function (req, res) {
var param_name = req.query.param_name;
var param_value = req.query.param_value;
console.log(param_name);
console.log(param_value);
console.log(req.query);
client.set(param_name,param_value, function(err, reply) {
  console.log(reply);
});
  res.send('++++ Hello world ++++ \n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

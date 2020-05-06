var express = require('express')
var bodyParser = require('body-parser');
var rabbitConn = require('./connection.js');
var app = express();
var router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)

router.route('/chat').post(function(req, res){
	rabbitConn(function(conn){
		conn.createChannel(function(err, channel) {
			if (err) {
				console.log(JSON.stringify(err));
				throw new Error(err)
			}
			let queue = 'chat';
			let msg = req.body.message;
			channel.assertQueue(queue, {
				durable: true
			});
			channel.sendToQueue(queue, Buffer.from(msg), {
				persistent: true
			});
			console.log("Sent '%s'", msg);
		})
	})
})

app.use(express.static('public'))

app.listen(3030, '0.0.0.0',function() {
		console.log('Chat at localhost:3030')
	})
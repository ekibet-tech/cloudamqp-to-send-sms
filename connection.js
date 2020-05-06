var join = require('path').join
var rfs = require('fs').readFileSync
var amqp = require('amqplib/callback_api');

module.exports = function(cb) {
amqp.connect('amqp://localhost', function(err, conn) {
    if (err) {
      throw new Error(err)
    }
    //console.log(conn)
    conn.close()
})
}
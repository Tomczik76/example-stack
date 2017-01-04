const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.json())


var couchbase = require('couchbase')
var cluster = new couchbase.Cluster('couchbase://162.243.11.71:8091/');
var bucket = cluster.openBucket('default');
var N1qlQuery = couchbase.N1qlQuery;


app.post('/signup',  function (req, res) {

  bucket.get('users', function (err, doc) {
    console.log(JSON.stringify(doc))
    
    doc.value.data.push(req.body)

    bucket.upsert('users', doc.value , function(err, result) {
      if (err) throw err;
      res.sendStatus(200)
    }); 
  }) 
})

app.get('/users', function (req, res) {
  bucket.get('users', function (err, result) {
      res.send(JSON.stringify(result.value.data));
  }) 
})

app.listen(3030)

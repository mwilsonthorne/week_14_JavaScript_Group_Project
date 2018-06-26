const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const castleRouter = require('./castle_router.js');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('castles');
  const castleInfo = db.collection('castleInfo');
  router.use('/api/castleInfo', castleRouter(castleInfo));
});


module.exports = router;

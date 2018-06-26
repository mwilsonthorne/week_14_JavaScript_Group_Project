const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const castleRouter = function (castleInfo){
  router.get('/', (req,res) => {
    castleInfo
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });
  return router;
};

module.exports = castleRouter;

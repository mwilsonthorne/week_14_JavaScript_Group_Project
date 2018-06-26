const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

// // TODO: add in parameter to take the map api here later.
const Castles = function(){
  this.castleData = null;
};

Castles.prototype.subscribeToFormView = function () {
  PubSub.subscribe('FormView:Receive-Data-From-Form', (evt) => {
    console.log('In the model:', evt.detail);
    this.getDataAndReturnFromOurCastleAPI();
  })
};

Castles.prototype.getDataAndReturnFromOurCastleAPI = function () {
  const url = 'http://localhost:3000/api/castleInfo';
  const request = new Request(url);
  request.get()
  .then((allCastleData) => {
    console.log('Returned from server:', allCastleData);
    this.castleData = allCastleData;
    this.publishAllCastleData();
  })
};

Castles.prototype.publishAllCastleData = function () {
  console.log('Checking what is in castle data', this.castleData);
  PubSub.publish('Castles:publish-all-castle-data', this.castleData);
};




module.exports = Castles;

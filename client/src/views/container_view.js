const PubSub = require('../helpers/pub_sub.js');
const ResultView = require('./results_view.js');
const MapView = require('./map_view.js');


const ContainerView = function (container){
  this.container = container;
  this.userLocation = null;
};

ContainerView.prototype.bindEvents = function () {
  this.addLatLngListener();
  this.subscribeToAllCastleData();


};

ContainerView.prototype.subscribeToAllCastleData = function () {
  // subscribe to castle data
  PubSub.subscribe('Castles:publish-all-castle-data', (evt) => {
    console.log('Container View:', evt.detail);
    // We want to clear the HTMl element on submit so we don't create duplicates.
    this.container.innerHTML = '';
    // We want to call render on the container once the container has received the castle data.
    this.renderResultView(evt.detail);
    this.renderMapView(evt.detail);
  });

  // console log out castle data
};

ContainerView.prototype.renderResultView = function (allCastleData) {
  // Surrender to the render.

  // We want to create the result_view div inside container view.
  const resultViewDiv = document.createElement('div');

  // We want to assign an ID of 'result_view'.
  resultViewDiv.id = 'result-view';

  // New up a result_view view and hand in the castleData and result_view div as arguments.
  const resultView = new ResultView(resultViewDiv);
  resultView.renderListViewDiv(allCastleData);

  // After calling the render we want to append the result_view div to the container div.
  this.container.appendChild(resultViewDiv);

  console.log('from render resultview method:', allCastleData);
};

ContainerView.prototype.renderMapView = function (allCastleData) {
  const mapViewDiv = document.createElement('div');
  const userLocation = this.userLocation;
  console.log("render Map View",userLocation);
  const zoomLevel = 7.25;
  mapViewDiv.id = 'mapid';
  const mapView = new MapView(mapViewDiv, userLocation, zoomLevel, allCastleData);
  //TO DO add allCastleData.
  this.container.appendChild(mapViewDiv);
  mapView.renderMap();

  console.log('from render mapview method', allCastleData);
};

ContainerView.prototype.addLatLngListener = function () {
  PubSub.subscribe('FormView:Receive-Data-From-Form', (evt) => {
    console.log(evt.detail);
    this.userLocation = evt.detail;
  })
};


module.exports = ContainerView;

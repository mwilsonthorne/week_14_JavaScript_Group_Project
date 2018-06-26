const PubSub = require('../helpers/pub_sub.js');


const FormView = function(form) {
  this.form = form;
};

FormView.prototype.setUpFormListener = function () {
  this.form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('Listen', [parseFloat(evt.target.user_lat.value), parseFloat(evt.target.user_lng.value)]);
    const inputLatLngData = [parseFloat(evt.target.user_lat.value), parseFloat(evt.target.user_lng.value)];

    PubSub.publish('FormView:Receive-Data-From-Form', inputLatLngData);

  });
};

module.exports = FormView;


const DetailView = function(castle){
  this.castle = castle;
};

DetailView.prototype.renderDetailView = function () {
  listItem = document.createElement('div');
  listItem.id = this.castle.name;

  listItemHeading = document.createElement('h3');
  listItemHeading.textContent = this.castle.name;
  listItem.appendChild(listItemHeading);

  listItemPrice = document.createElement('p');
  listItemPrice.textContent = this.castle.description;
  listItem.appendChild(listItemPrice);

  return listItem;
};

module.exports = DetailView;

const DetailView = require('./detail_view.js');

const ResultView = function(resultListDiv){
  this.resultListDiv = resultListDiv;
}

ResultView.prototype.renderListViewDiv = function (allCastleData) {
  this.renderListViewHeading();
  this.renderListOfDetailViews(allCastleData);
};

ResultView.prototype.renderListViewHeading = function () {
  // Create a heading and for the result view container.
  const resultListHeading = document.createElement('h2');
  resultListHeading.id = "result-view-title";
  resultListHeading.textContent = "Results List:";
  this.resultListDiv.appendChild(resultListHeading);
};

ResultView.prototype.renderListOfDetailViews = function (allCastleData) {

    // Create an ordered list called result-list-view
    const resultList = document.createElement('div');
    resultList.id = "result-view-list";

    // Create a a list item by newing up a nested view of resultDetailItem for every castle in the castle data array.
    const castlesArray = allCastleData;
    castlesArray.forEach((castle) => {
      const detailView = new DetailView(castle);
      resultList.appendChild(detailView.renderDetailView());
    });

    this.resultListDiv.appendChild(resultList);
};

module.exports = ResultView;

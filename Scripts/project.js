

var projects = [];

function Project (prop) {

  this.title = prop.title;
  this.link = prop.link;
  this.date = prop.date;
  this.year = prop.year;
  this.body = prop.body;
}

Project.prototype.toHtml = function() {

  var template = Handlebars.compile($('#project-template').text());

  return template(this);

};


Project.loadAll = function(rawData) {

  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });


  Project.all = rawData.map(function(ele) {
    return new Project(ele);
  });
};


Project.fetchAll = function() {

  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    $.getJSON('Scripts/ProjectData.json', function(rawData) {
      Project.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      projectView.initIndexPage();

    });
  }
};



// rawData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// rawData.forEach(function(ele) {
//   projects.push(new Project(ele));
// });

projects.forEach(function(a){
  console.log('foreach');
  $('#projects').append(a.toHtml());
});

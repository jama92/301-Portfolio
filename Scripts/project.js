

var projects = [];

function Project(prop) {

  Object.keys(prop).forEach(function(e, index, keys) {

    this[e] = prop[e];
  }, this);

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


Project.numWordsAll = function() {

  return Project.all.map(function(project) {

    return project.body.match(/\b\w+/g).length;

  }).reduce(function(a, b) {

    return a + b;
  });

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

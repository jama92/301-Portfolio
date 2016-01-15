

var projects = [];

function Project (prop) {

  this.title = prop.title;
  this.projectUrl = prop.authorUrl;
  this.date = prop.date;
  this.body = prop.body;
}

Project.prototype.toHtml = function() {

  var $newProject = $('article.template').clone();

  $newProject.removeClass('template');


  $newProject.attr('year', parseInt(this.date));


  $newProject.find('.projectTitle').html(this.title);
  $newProject.find('.projectUrl').attr('href', this.projectUrl);
  $newProject.find('.projectUrl').html('Link');


  $newProject.find('.projectDate').attr('year', parseInt(this.date));


  $newProject.find('.projectDate').attr('date', this.date);
  $newProject.find('.projectDate').html(parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');

  $newProject.find('.projectBody').html(this.body);

  $newProject.append('<hr>');
  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

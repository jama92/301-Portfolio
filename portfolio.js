

var Project = function(project) {

  this.title = project.title;
  this.date = project.date;
  this.projectUrl = project.projectUrl;

};

Project.prototype.toHTML = function() {

  var $newProject = $('projects.template').clone();


  $newProject.find('projectTitle').html(this.title);
  $newProject.find('projectDate').html(this.date);
  $newProject.find('projectLink').attr('href', this.projectUrl);

};

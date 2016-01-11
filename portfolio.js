

var projects = [];

function Project (prop) {

  this.title = prop.title;
  this.projectUrl = prop.authorUrl;
  this.date = prop.date;
}

Project.prototype.toHtml = function() {

  var $newArticle = $('article.template').clone();

  $newArticle.removeClass('template');
  $newArticle.addClass('draft');


  $newArticle.find('.projectTitle').html(this.title);
  $newArticle.find('.projectUrl').attr('href', this.projectUrl);

  $newArticle.find('.projectDate').attr('datetime', this.date);
  $newArticle.find('.projectDate').attr('title', this.date);
  $newArticle.find('.projectDate').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');

  return $newArticle;
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

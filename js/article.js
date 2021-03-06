var articles = [];

function Article(options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.image = options.image;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};

Article.prototype.toHtml = function() {
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  var blogTemplate = $('#blog-template').html();
  var renderTemplate = Handlebars.compile(blogTemplate);
  return renderTemplate(this);
};

articleData.sort(function(a,b) {
  return (new Date(a.publishedOn)) - new Date(b.publishedOn);
});

articleData.forEach(function(element) {
  articles.push(new Article(element));
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});

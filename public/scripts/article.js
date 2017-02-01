'use strict';

var articles = [];

function Article (options) {
  this.body = options.body;
  this.category = options.category;
  this.img = options.img;
  this.name = options.name;
  this.url = options.url;
  this.publishedOn = options.publishedOn;
}

Article.prototype.toHtml = function() {
 var source = $('#article-template').html();
 var templateRender = Handlebars.compile(source);
 return templateRender(this);
};

projects.forEach(function(ele){
  articles.push(new Article(ele));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});

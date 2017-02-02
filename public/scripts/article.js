'use strict';

(function(module) {

function Article (options) {
  this.body = options.body;
  this.category = options.category;
  this.img = options.img;
  this.name = options.name;
  this.url = options.url;
  this.publishedOn = options.publishedOn;
}

Article.all = [];

Article.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};


// .map to make a list of names and list of categories

  Article.listCategory = function () {
    return Article.all.map(function(article){
      return article.name;
    })
  .join(', ');
  }

// .reduce to make a list of projects

  Article.allCategories = function() {
    return Article.all.map(function(article){
      return article.category
    })
    .reduce(function(categories, category){
      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
      return categories;
    }, []).join(', ');
  }

Article.loadArticles = function (parsedData) {
  parsedData.forEach(function(ele) {
    Article.all.push (new Article(ele));
  });
}

// JSON Loading HTML with AJAX

Article.fetchAll = function () {
  if (localStorage.rawData) {
    var parsedData = JSON.parse(localStorage.rawData);
    Article.loadArticles(parsedData);
    articleView.initIndexPage();
  } else {
    $.getJSON('data/projectinfo.json')
    .done (function(data, message, xhr) {
      localStorage.setItem('rawData', JSON.stringify(data));
      Article.loadArticles(data);
      articleView.initIndexPage();
    })
    .fail (function(err)
    {
      console.error(err);
    })
  }
}

module.Article = Article;

}(window));

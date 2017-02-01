'use strict';

Article.all = [];

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

Article.loadArticles = function (parsedData) {
  parsedData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
}

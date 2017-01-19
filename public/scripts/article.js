'use strict';

Article.all = [];

// This is our Model constructor. It will take in
//    our source data from blogArticles and instantiate a
//    new Object according to this new definition. options is
//    a placeholder for the object that will ultimately be
//    passed in. Use all of the properties in blogArticles
//    to populate the new Article data that we'll use.  */

function Article (options) {
  this.body = options.body;
  this.category = options.category;
  this.img = options.img;
  this.name = options.name;
  this.url = options.url;
  this.publishedOn = options.publishedOn;
}

Article.prototype.toHtml = function() {
  console.log('toHtml ran')
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('.body').html(this.body);
  $newArticle.find('.category').text( this.category);
  $newArticle.find('.img').attr('src', this.img);
  $newArticle.find('h1').text(this.name);
  $newArticle.find('.project-url').attr('href', this.url);
  $newArticle.find('.time').text(this.publishedOn);
  return $newArticle;
};

projects.forEach(function(indProject) {
  Article.all.push(new Article (indProject));
});

function handleNavClick () {
  $('.tab').on('click', function() {
    $('article').hide();
    var tempDataName = $(this).data('name');
    $('#' + tempDataName).fadeIn();
  });
  $('.tab:first').click();
}

function handleHamburgerClick () {
  $('nav ul').on('click', function() {
    // var tempDisplay = $(this).find().css('display');
    // console.log(tempDisplay);
    $(this).addClass('menu');
  });
}

handleNavClick();
handleHamburgerClick();

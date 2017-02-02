'use strict';

(function (module){

  var articleView = {};

articleView.handleMainNav = function () {
  articleView.toggleArticleBody();
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();//this is going to hide the tab content because the user clicked on a tab.
    var thingClicked = $(this).attr('data-content');
    $('#' + thingClicked).fadeIn();
  });
  $('.main-nav .tab:first').click();//this is what makes it so that when you go to the page, it shows the articles -- that's the first tab
  //
};

articleView.toggleArticleBody = function () {
  $('.article-body').hide();
  $('#articles h2, #articles h3').hide();
  $('.image').on('click', function(){
    $(this).siblings('h1, .article-body').toggle();
  });
}

  articleView.summaries = function () {
    $('.articleSummary').append((Article.listName()));
    $('.categorySummary').append((Article.listCategories()));
  }

articleView.initIndexPage = function () {
  Article.all.forEach(function(article) {
    $('#articles').append(article.toHtml());
  });
  articleView.handleMainNav();
  articleView.summaries();
}

  module.articleView = articleView;

})(window);

'use strict';

const articleView = {};
viewModule.articleView = articleView;

articleView.populateFilters = function() {
  $('ul.proj').each(function() {
    var val = $(this).attr('data-category');
    var optionTag = `<option value="${val}">${val}</option>`;
    if ($(`#category-filter option[value="${val}"]`).length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('ul.article').hide();
      $(`ul[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('ul.article').fadeIn();
    }
  });
};

articleView.setTeasers = function() {
  $('p *:nth-of-type(n+1)').hide();
  var readOn = 'read more';
  var showLess = 'show less';
  $('.read-on').text(readOn);
  $('#projects').on('click', '.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() == readOn) $(this).text(showLess).siblings('p').find('*').fadeIn();
    else $(this).text(readOn).siblings('p').find('*').fadeOut();
  });
};


articleView.initIndexPage = function() {

  Article.all.forEach(function(article) {
    console.log('log article', article)
    $('#articles').append(article.toHtml())
  });

  // articleView.populateFilters();
  // articleView.handleCategoryFilter();
  // articleView.handleMainNav();
  // articleView.setTeasers();
};

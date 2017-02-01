'use strict';

function articleView = () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();//this is going to hide the tab content because the user clicked on a tab.
    var thingClicked = $(this).attr('data-content');
    $('#' + thingClicked).fadeIn();
  });
  $('.main-nav .tab:first').click();//this is what makes it so that when you go to the page, it shows the articles -- that's the first tab
  //
};

articleView();

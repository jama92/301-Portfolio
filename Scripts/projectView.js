

var articleView = {};

articleView.populateFilters = function() {

  $('article').each(function() {

    if (!$(this).hasClass('template')) {

      val = $(this).attr('year');
      optionTag = '<option value="' + val + '">' + val + '</option>';

      if ($('#year-filter option[value="' + val + '"]').length === 0) {

        $('#year-filter').append(optionTag);

      }

      console.log(val);

    }
  });
};

articleView.handleYearFilter = function() {

  $('#year-filter').on('change', function() {

    if ($(this).val()) {

      $('article').hide();
      $('article[year="' + $(this).val() + '"]').fadeIn();

    }

    else {

      $('article').fadeIn();
      $('article.template').hide();
    }

  });
};


articleView.handleMainNav = function() {

  $('.main-nav').on('click', '#projectsTab', function() {

    $('.tab-projects').show();
    $('.tab-aboutMe').hide();

  });

  $('.main-nav').on('click', '#aboutTab', function() {

    $('.tab-aboutMe').show();
    $('.tab-projects').hide();

  });

  $('.main-nav #projectsTab').click();

};



$(document).ready(function() {

  articleView.populateFilters();

  articleView.handleYearFilter();

  articleView.handleMainNav();

});

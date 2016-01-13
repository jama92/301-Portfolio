

var articleView = {};

articleView.populateFilters = function() {

  $('article').each(function() {

    if (!$(this).hasClass('template')) {

      var val = $(this).attr('date');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#year-filter').append(optionTag);

    }
  });
};

articleView.handleYearFilter = function() {

  $('#year-filter').on('change', function() {

    if ($(this).val()) {

      $('article').hide();
      $('article[date="' + $(this).val() + '"]').fadeIn();

    }

    else {

      $('article').fadeIn();
      $('article.template').hide();
    }

    $('#year-filter').val('');

  });
};



$(document).ready(function() {

  articleView.populateFilters();

  articleView.handleYearFilter();

});

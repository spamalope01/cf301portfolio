var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var value = $(this).attr('data-category');
      console.log(value);
      var optionTag = '<option value="' + value + '">' + value + '</option>';
      console.log(optionTag);
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.manageCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      var $selection = $(this).val();
      $('article').hide();
      $('article[data-category="' + $selection + '"]').fadeIn(1000);
      $('#category-filter option:eq(0)').text('-- Show all --');

    } else {
      $('article').fadeIn(1000);
      $('#category-filter option:eq(0)').text('-- Filter by Category --');
    }
    $('article.template').hide();
  });
};

articleView.manageMainNav = function() {
  $('.top-nav').on('click','.tab:eq(0)', function(){
    $('#articles').fadeIn(1000);
    $('#about').hide();
  });
  $('.top-nav').on('click','.tab:eq(1)', function(){
    $('#about').fadeIn(1000);
    $('#articles').hide();
  });

  $('.top-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.populateFilters();
articleView.manageCategoryFilter();
articleView.manageMainNav();
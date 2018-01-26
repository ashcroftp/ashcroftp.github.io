/* Numbering for publications */
$('.publications .years ol').each(function() {
  var val = parseFloat($(this).attr("start")) + 1;
  $(this).css('counter-reset', 'c ' + val);
});

/* Scroll includes buffer to avoid top-menu-bar */
$(window).on("hashchange", function() {
  window.scrollTo(window.scrollX, window.scrollY - 120);
});

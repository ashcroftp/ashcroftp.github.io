var main = function() {
    /* Push the body and the nav over by 200px over */
    $('.icon-menu-open').mouseenter(function() {
	$('body').animate({left: "200px"}, 200);
	$('.menu').animate({left: "0px"}, 200).css("z-index","101");
    });

    /* Then push them back */
    $('.menu').mouseleave(function() {
	$('.menu').animate({left: "-200px"}, 200).css("z-index","99");
	$('body').animate({left: "0px"}, 200);
    });
};


$(document).ready(main);

/* Scroll includes buffer to avoid top-menu-bar */
$(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 53);
});


$('.publications .years ol').each(function() {
    var val=parseFloat($(this).attr("start")) + 1;
    $(this).css('counter-reset','c '+ val);
});

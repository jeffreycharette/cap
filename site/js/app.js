$(function() {
	$('nav ul li').hoverIntent(
	  function () {
	    $(this).find('ul').slideDown(100);
	  },
	  function () {
	    $(this).find('ul').slideUp(400);
	  }
	);
	$('header p > span a, nav ul > li, nav ul > li a, nav ul > li > ul > li, #section-nav a, footer a').hover(
	  function () {
	    $(this).addClass('hover');
	  },
	  function () {
	    $(this).removeClass('hover');
	  }
	);
});
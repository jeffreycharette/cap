$(function() {
	$('nav ul li').hoverIntent(
	  function () {
	    $(this).find('ul').slideDown(100);
	  },
	  function () {
	    $(this).find('ul').slideUp(400);
	  }
	);
});
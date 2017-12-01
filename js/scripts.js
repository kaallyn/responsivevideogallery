$(document).ready(function() {
	console.log("sup");

// show more vieos function below
	$('.loadMore').on('click', function (e) {
	  e.preventDefault();
	  console.log("clicked button");

	  // $(this).text('changed button text');
	  $(this).addClass('hideItems')

	  // $(this).parent('.second').siblings('.fourth').slideToggle('showItems');
	  $('.fourth').slideToggle();
	  		// $(this).children('.line').toggleClass('active');

			    // $(this).parent('.menuCategory').siblings('.menuItems').slideToggle('showItems')


	});

});
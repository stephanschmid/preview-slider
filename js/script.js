jQuery(document).ready(function($){

	/* ========== Carousel IDs ========== */
	$('.carousel').each(function(i) {
		$(this).attr('id', 'carousel-'+(i+1));
		$(this).find('.carousel-control').attr('href', '#carousel-'+(i+1));
	});


	$('.carousel').each(function(carousel)
	{
		/* ========== Carousel ========== */
		$(this).carousel('pause');

		/* ========== Counter ========== */
		var totalItems = $(this).find('.item, .slider_for_tiles--item').length;
		var currentIndex = $(this).find('div.active').index() + 1;

		$(this).find('.slider_carousel_count').html('' + currentIndex + ' | ' + totalItems + '');
		$(this).find('.slider_for_tiles--carousel_count-large').html('' + currentIndex);
		$(this).find('.slider_for_tiles--carousel_count-small').html(' / ' + totalItems + '');

		$(this).bind('slid.bs.carousel', function() {
			currentIndex = $(this).find('div.active').index() + 1;
			$(this).find('.slider_carousel_count').html('' + currentIndex + ' | ' + totalItems + '');
		});

		/* ========== Clone ========== */
		$(this).find('.item, .slider_for_tiles--item').each(function(){
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			if (next.next().length>0) {
				next.next().children(':first-child').clone().appendTo($(this));
			}
			else {
				$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			}
		});
	});

	/* ========== Swipe ========== */
	$(".carousel, #carousel_for_tiles").swiperight(function() {
		$(this).carousel('prev');
	});
	$(".carousel, #carousel_for_tiles").swipeleft(function() {
		$(this).carousel('next');
	});

});
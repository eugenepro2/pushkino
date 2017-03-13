$(function() {
  $( "#tabs" ).tabs();
  $( "#tabs-doc" ).tabs();

	var swiper = new Swiper('.slider', {
	  pagination: '.swiper-pagination',
	  paginationClickable: true,
	  nextButton: '.swiper-button-next',
	  prevButton: '.swiper-button-prev',
	  spaceBetween: 30
	});
	var swiper = new Swiper('.review-slider', {
	    slidesPerView: 2,
	    nextButton: '.swiper-button-next',
	 		prevButton: '.swiper-button-prev'
	});

	baguetteBox.run('.gallery', {
    // Custom options
	});

	$('select').select2();

});


// var slideout = new Slideout({
//     'panel': document.getElementById('panel'),
//     'menu': document.getElementById('menu'),
//     'padding': 256,
//     'tolerance': 70
//   });

// document.querySelector('.menu-open').addEventListener('click', function() {
//   slideout.toggle();
// });
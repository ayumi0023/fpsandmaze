var mySwiper = new Swiper('.swiper-container', {
	loop: true,
    speed: 3000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

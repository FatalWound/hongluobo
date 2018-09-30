$(window).load(function(){
	
	$(".tuijian-gallery .prev-Btn").click(function(){
	  tuijian_swiper.slidePrev();
	});
	$(".tuijian-gallery .next-Btn").click(function(){
	  tuijian_swiper.slideNext();
	});
});



var tuijian_swiper = new Swiper('.tuijian-swiper', {
		    slidesPerView: 3,
            spaceBetween: 29.5,
            autoplay: 3000
		});


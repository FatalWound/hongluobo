$(window).load(function(){

  autoSize();
  
  $(".my-video-swiper .prev-Btn").click(function(){
  	my_video_swiper.slidePrev();
  });
  $(".my-video-swiper .next-Btn").click(function(){
  	my_video_swiper.slideNext();
  });
  
  
  $(".my-video-swiper").on("mouseenter",function(){
      $(".my-video-swiper .page-Btn").css("display","block");
  });
  $(".my-video-swiper").on("mouseleave",function(){
      $(".my-video-swiper .page-Btn").css("display","none");
  });
  
  
  $(".my-about-banner .prev-Btn").click(function(){
  	   $(".controls .item-prev").click();
  });
  $(".my-about-banner .next-Btn").click(function(){
  	   $(".controls .item-next").click();
  });
  
//   $('#slide3d').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover'});
  
  
  $(".my-page-btn .prev-Btn").click(function(){
	  
  	my_product_show_swiper.slidePrev();
  });
  $(".my-page-btn .next-Btn").click(function(){
  	my_product_show_swiper.slideNext();
  });
  
  
  $(".my-product-show-swiper").on("mouseenter",".swiper-slide",function(){
      $(this).find('.cover').css("display","block");
  });
  
  $(".my-product-show-swiper").on("mouseleave",".swiper-slide",function(){
      $(this).find('.cover').css("display","none");
  });
  	  
    $(".tuijian-gallery .prev-Btn").click(function () {
        tuijian_swiper.slidePrev();
    });
    $(".tuijian-gallery .next-Btn").click(function () {
        tuijian_swiper.slideNext();
    });
   
    $('.mobile-btn').on('click',function(){
        $('.header-navBar').toggleClass("d-none");;
    })

    // function Mplguin(params){
    //     if(typeof params != 'object'){
    //         return;
    //     }
    //     var options = {
    //         speed:1000,
    //         btn:true,
    //         slides:6,
    //         center:true,
    //         btnName:['next','prev']
    //     }
    //     var userOPtion = $.extend(false,options,params)
    //    this.getparams=function(){
    //        console.table(userOPtion);
    //    }
    // }
    // var Fslider = new Mplguin({
    //     speed:3000,
    //     btnName:['myNext','myPrev']
    // }) 
    // Fslider.getparams();
});
	




function autoSize(){

}



var my_product_swiper = new Swiper('.my-case-swiper', {
	        pagination: '.my-product-pagination',
	        paginationClickable: true,
		    spaceBetween: 10,
		    slidesPerView: 3,
            autoplay: 3000,
            prevButton: '.case-prev',
            nextButton: '.case-next',
            breakpoints: {
                //当宽度小于等于320
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                //当宽度小于等于640
                640: {
                    slidesPerView: 2,
                    spaceBetween: 12
                },
                1100:{
                    slidesPerView: 2,
                    spaceBetween: 30
                },
            }
		});

		
var my_news_swiper = new Swiper('.my-news-swiper', {
	        pagination: '.my-product-pagination',
	        paginationClickable: true,
		    slidesPerView: 3,
		    spaceBetween: 15,
		    // loop:true,
            autoplay: 4000,
            prevButton: '.news-prev',
            nextButton: '.news-next',
            breakpoints: {
                //当宽度小于等于320
                322: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                //当宽度小于等于640
                640: {
                    slidesPerView: 2,
                    spaceBetween: 12
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }
		});



var tuijian_swiper = new Swiper('.my-tuijian-swiper', {
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 29.5,
    pagination:'.my-tuijian-swiper-pagination',
    autoplay: 3000,
    breakpoints: {
        //当宽度小于等于320
        322: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        //当宽度小于等于640
        1100: {
            slidesPerView: 2,
            spaceBetween: 30
        },
    }
});
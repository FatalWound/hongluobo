$(window).load(function(){
		

		/*导航栏开始*/
			// 下载的title,点击事件
			$('.mtitle').click(function(){
				$(this).siblings('ul').toggle();
				$(".my-dealers-navbar .one-Item").removeClass("active");
				$(".my-two-navbar .two-Item").removeClass("active");
				$(".my-three-navbar .three-Item").removeClass("active");
			})


        /*第一级*/
       	$(".my-dealers-navbar").on('click','.one-Item',function(){
			$(this).siblings(".my-two-navbar").toggle();
			$(".my-dealers-navbar .one-Item").removeClass("active");
			$(".my-two-navbar .two-Item").removeClass("active");
			$(".my-three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");	
			
            $(this).find('a').first().addClass("active");
            $(this).next().find('a').first().next().find('a').first().addClass("active");
				 
		});
		/*第二级*/
		$(".my-two-navbar").on('click','.two-Item',function(){
			$(this).siblings(".my-three-navbar").toggle();
			
			$(".my-dealers-navbar .one-Item").removeClass("active");
			$(".my-two-navbar .two-Item").removeClass("active");
			$(".my-three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");			
			if ($(this).siblings(".my-three-navbar").css("display") == "block") {

				$(this).find(".sign").css("transform", "rotate(0deg)").text("-");
			}
			else {
				$(this).find(".sign").css("transform", "rotate(90sdeg)").text("+");
			}
			$(this).next().find('a').first().addClass("active");
			$(this).parents(".my-two-navbar").siblings(".one-Item").addClass("active");

		});	
    	/*第三级*/
		$(".my-three-navbar").on('click','.three-Item',function(){  
			$(".my-dealers-navbar .one-Item").removeClass("active");
			$(".my-two-navbar .two-Item").removeClass("active");
			$(".my-three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");	
			
			$(this).parents(".my-three-navbar").siblings(".two-Item").addClass("active");
			$(this).parents(".my-three-navbar").siblings(".two-Item").parents(".my-two-navbar").siblings(".one-Item").addClass("active");
		});
		
        /*导航栏结束*/

        
        /*遍历*/
//      $.each($(".sidebar-navbar .one-Item"),function (index,domEle){
//      	if($(this).siblings(".sidebar-navbar .two-navbar").css("display")=="block"){
//				$(this).find('.sign').css({"transform":"rotate(90deg)","padding-left":"0px","padding-right":"0px"});
//				if($(this).is($(".sidebar-navbar li:last-child .one-Item"))){
//					$(this).css({"border-bottom":"1px solid #dcdcdc"});
//				}	
//			}
//			else{
//				$(this).find('.sign').css({"transform":"rotate(0deg)","padding-left":"2px","padding-right":"0px"});
//				if($(this).is($(".sidebar-navbar li:last-child .one-Item"))){
//					$(this).css({"border-bottom":"0px solid #dcdcdc"});
//				}
//			}
//      });
//     
//       
//      $.each($(".three-navbar"),function (index,domEle){
//		   if($(this).css("display")=="block"){
//		   	 $(this).siblings(".two-Item").css({"border-bottom": "0px solid #dcdcdc"});
//		   }else{
//		   	 $(this).siblings(".two-Item").css({"border-bottom": "1px solid #dcdcdc"});
//		   }
//		});
		/*导航栏结束*/
		    
			   
		 
       
                       
	});
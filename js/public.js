	$(window).load(function(){
		
		
		autoHeight();
		
        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        $(".collect").click(function(){	
        	var url = window.location.href;
        	AddFavorite('红萝卜官网',url);
        });
		$(".home-Btn").click(function () {
			var url = window.location.href;
			SetHome(this, url);
		});
        
        $(".search-Btn").click(function(){	
            $(".my-serach-bar").slideToggle();
        });
        
        
        $(".inside-tabbar").on("click","li",function(){
        	$(".inside-tabbar li").removeClass("active");
			$(this).addClass("active");
			
			// 联系我们部分的点击事件
			try {
				contact_tabbar_swiper.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
			} catch (error) {
				
			}
        });
		
		var contact_tabbar_swiper = null;
		contact_tabbar_swiper = new Swiper('.contact-tabbar-swiper', {
			spaceBetween: 1,
			slidesPerView: 1,
			simulateTouch: false,
		});	


		// 招商信息点击事件
		$('.join-list').on('click','li',function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
		
       	
       	/*导航栏开始*/
        /*第一级*/
       	$(".sidebar-navbar").on('click','.one-Item',function(){
			$(this).siblings(".sidebar-navbar .two-navbar").toggle();
			
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
            $(this).next().find('.two-Item').first().addClass("active");
            $(this).next().find('.two-Item').first().next().find('.three-Item').first().addClass("active");
			
			if ($(this).siblings(".two-navbar").css("display") == "block") {
				$(this).find(".sign").css("transform", "rotate(0deg)").text("-");
			}
			else {
				$(this).find(".sign").css("transform", "rotate(90sdeg)").text("+");
			}
//			if($(this).siblings(".two-navbar").css("display")=="block"){
//				$(this).parents(".one-li").css("padding-bottom","25px");
//				$(this).css("border-bottom","1px solid rgba(245,245,245,1)");
//				$(this).find(".line").css("display","block");
//			}
//			else{
//				$(this).parents(".one-li").css("padding-bottom","0px");
//				$(this).css("border-bottom","1px soild rgba(0,0,0,0)");
//				$(this).find(".line").css("display","none");
//			}
			 
		});
		/*第二级*/
		$(".two-navbar").on('click','.two-Item',function(){
			$(this).siblings(".sidebar-navbar .three-navbar").toggle();
			
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
			$(this).next().find('.three-Item').first().addClass("active");
			$(this).parents(".two-navbar").siblings(".one-Item").addClass("active");
			if ($(this).siblings(".three-navbar").css("display") == "block") {
				$(this).find(".sign").css("transform", "rotate(0deg)").text("-");
			}
			else {
				$(this).find(".sign").css("transform", "rotate(90sdeg)").text("+");
			}
//			if($(this).siblings(".three-navbar").css("display")=="block"){
//				$(this).find(".line").css("display","block");
//			}
//			else{
//				$(this).find(".line").css("display","none");
//			}
//			
			
		});	
    	/*第三级*/
		$(".three-navbar").on('click','.three-Item',function(){  
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			
			$(this).addClass("active");
			$(this).parents(".three-navbar").siblings(".two-Item").addClass("active");
			$(this).parents(".three-navbar").siblings(".two-Item").parents(".two-navbar").siblings(".one-Item").addClass("active");
		});
		
        /*导航栏结束*/

        
        /*遍历*/
        $.each($(".sidebar-navbar .one-Item"),function (index,domEle){
//      	if($(this).siblings(".two-navbar").css("display")=="block"){
//				$(this).parents(".one-li").css("padding-bottom","25px");
//				$(this).css("border-bottom","1px solid rgba(245,245,245,1)");
//			}
//			else{
//				$(this).parents(".one-li").css("padding-bottom","0px");
//				$(this).css("border-bottom","1px soild rgba(0,0,0,0)");
//			}

             /*只开第一个*/
             if($(this).siblings().length>0){
             	$(this).click();
             	return false;
             }
        });
        
        /*遍历*/
//      $.each($(".sidebar-navbar .two-Item"),function (index,domEle){
//      	if($(this).siblings(".three-navbar").css("display")=="block"){
//				$(this).find(".line").css("display","block");
//			}
//			else{
//				$(this).find(".line").css("display","none");
//			}
//      });

		/*导航栏结束*/
		
		// 产品详情图片选项
		// 默认选中第一个
		$('#product-show-img').attr("src", $('.show-product-list').find('img').eq(0).attr("src"))
		// 点击事件
		$('.show-product-list').on("click", '.swiper-slide', function () {
			$('#product-show-img').attr("src", $(this).find('img').attr("src"))
			$(this).addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active')
		})

	   
		
                       
	});
	
	function autoHeight(){

	};
	
	
		//监听窗口改变事件
		$(window).resize(function(){		
		autoHeight();
		});
	
		//加入收藏
		function AddFavorite(title, url) {
			try {
				window.external.addFavorite(url, title);
			}
			catch (e) {
				try {
					window.sidebar.addPanel(title, url, "");
				}
				catch (e) {
					alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
				}
			}
		};
		
		// 设置为主页
		function SetHome(obj, vrl) {
			try {
				obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
			}
			catch (e) {
				if (window.netscape) {
					try {
						netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
					}
					catch (e) {
						alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
					}
					var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
					prefs.setCharPref('browser.startup.homepage', vrl);
				} else {
					alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
				}
			}
		};
	
		var banner_swiper = new Swiper('.banner-swiper', {
			pagination: '.banner-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
		var inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 1,
		    slidesPerView: 8.3
		});	
		
		var pro_detail_swiper = new Swiper('.detail-pro-swiper', {
			slidesPerView: 6,
			// slidesPerGroup: 1,
			spaceBetween: 5,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next',

		})

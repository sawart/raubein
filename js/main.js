// JavaScript Document

/*
$(document).ready(function(){
	$(".hburger").on("click", function(){
		$(".navEffect").toggleClass("active").fadeIn();
		if($(".navEffect").hasClass("active")){
			$(".search").css("display", "block");
			$(".login").css("display", "block");
		} else {
			$(".search").css("display", "none");
			$(".login").css("display", "none");
		}
	});
});

*/

$(window).resize(function(){

       if ($(window).width() <= 1024) {  

				$(document).ready(function() {
	
					// INITIATE THE FOOTER
				  siteFooter();
					// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
					$(window).resize(function() {
						siteFooter();
					}); 
					
				

					function siteFooter() {
						var siteContent = $('.siteContent');
						var siteContentHeight = siteContent.height();
						var siteContentWidth = siteContent.width();

						var siteFooter = $('.siteFooter');
						var siteFooterHeight = siteFooter.height();
						var siteFooterWidth = siteFooter.width();

						console.log('Content Height = ' + siteContentHeight + 'px');
						console.log('Content Width = ' + siteContentWidth + 'px');
						console.log('Footer Height = ' + siteFooterHeight + 'px');
						console.log('Footer Width = ' + siteFooterWidth + 'px');

						siteContent.css({
							"margin-bottom" : siteFooterHeight + 50
						});
					}
				});
			}
});


if($(window).innerWidth() >= 1280) {
	$(document).ready(function(){
	$("nav ul li:first-child").mouseenter(function(){
		$(".dropdownContent").fadeIn(500);
	})
	
	$(".dropdownContent").mouseleave(function(){
		$(".dropdownContent").fadeOut(500);
	})
})
}



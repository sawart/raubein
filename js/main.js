// JavaScript Document



if($(window).innerWidth() < 1280) {
	(function($) {
		  $(function() {
			$('.hburger').click(function() {
			  $('.navEffect').toggleClass('openNav');
				if($(".navEffect").hasClass("openNav")){
					$(".search").css("display", "block");
					$(".login").css("display", "block");
				} else {
					$(".search").css("display", "none");
					$(".login").css("display", "none");
				}
			});
		  });
		})(jQuery);

		(function($) {
		  $(function() {
			$('.subNav').click(function() {
			  $('.dropdownContent').toggleClass('openSubNav');
			});
		  });
		})(jQuery);
}


if($(window).innerWidth() >= 1280) {
	$("nav ul li:first-child").hover(
	
		function(){
			$(".dropdownContent", this).fadeIn();
		}, 
		
		function(){
			$(".dropdownContent", this).fadeOut();
		}
	);
}

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





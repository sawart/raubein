// JavaScript Document

$(window).resize(function(){

       if ($(window).width() <= 1024) {  


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



$(document).ready(function(){
	$(".hburger").on("click", function(){
		$("nav ul").toggleClass("active");
	});
});

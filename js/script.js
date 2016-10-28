$(document).ready(function() {

//Preloader
var hidePreloader = function() {
    $("#loader").fadeOut();
    $("#loader-wrapper").delay(200).fadeOut("slow");
};
    hidePreloader();

//change color of triangle in submenu on hover
$('.nav_main ul li>ul>li>a:first').hover(function(){
	$('.triangle').css('border-bottom-color', '#FA9623');
	}, function(){
	$('.triangle').css('border-bottom-color', '#F36F21');	
});
		
//show/hide submenu on hover
$('.nav_main>ul>li').mouseenter(function(){      
	if ($(window).width() >= 768)
	$(this).find('ul').stop().slideDown(300);
});
$('.nav_main>ul>li').mouseleave(function(){
	if ($(window).width() >= 768)
	$(this).find('ul').stop().slideUp(300);
});

//show/hide submenu on click	
$('.nav_main>ul>li').click(function(){ 
	$('ul', this).stop().slideToggle(300);
});
	
//show/hide menu by click on menu button (768)
$('a.nav-opener').click(function(){
	if ($('body').width() < 768)
		$(this).toggleClass('nav-active');
		$('.nav_main>ul').slideToggle(300);	
});

//show menu after resize from 768 to higher resolution (>768)
$(window).resize(function() {         
    if ($(window).width() >= 768)
		$('.nav_main>ul').css("display","block");
		$('.nav_main>ul>li>ul').css("display","none");
	if ($(window).width() < 768) 
	$('.nav_main>ul').css("display","none");
	$('a.nav-opener').removeClass('nav-active');
});

//animate on scrolling (>768)
var h = $(window).height();
	if ($(window).width() >= 768)
    $(window).scroll(function(){
    	if ($('section').hasClass("about_text")) {
        	if ( ($(window).scrollTop()+h) >= $(".about_text").offset().top) {
            	$(".about_text article").css({visibility:"visible"});
            	$(".about_text article").addClass('animated slideInLeft');
        	}
        	if ( $(window).scrollTop() == 0 ) {
            	$(".about_text article").each(function(){
            		$(this).removeClass('animated slideInLeft').css({visibility:"hidden"});
            	});
        	}
        }
        else
        if ($('section').hasClass("dms_main")) {
        	if ( ($(window).scrollTop()+h) >= $(".dms_main").offset().top) {
            	$(".dms_main article").css({visibility:"visible"});
            	$(".dms_main article").addClass('animated slideInUp');
        	}
        	if ($('section').hasClass("dms_content1")) {
        		if ( ($(window).scrollTop()+h) >= $(".dms_content1").offset().top) {
            		$(".dms_content1 article h1, .dms_content1 article ol").css({visibility:"visible"});
            		$(".dms_content1 article h1, .dms_content1 article ol").addClass('animated slideInLeft');
        		}
        	}
        	if ($('section').hasClass("dms_content2")) {
        		if ( ($(window).scrollTop()+h) >= $(".dms_content2").offset().top) {
            		$(".dms_content2 article h1, .dms_content2 article ol").css({visibility:"visible"});
            		$(".dms_content2 article h1, .dms_content2 article ol").addClass('animated slideInRight');
        		}
        	}
        	if ($('section').hasClass("dms_content3")) {
        		if ( ($(window).scrollTop()+h) >= $(".dms_content3").offset().top) {
            		$(".dms_content3 article h1, .dms_content3 article ol").css({visibility:"visible"});
            		$(".dms_content3 article h1, .dms_content3 article ol").addClass('animated slideInLeft');
        		}
        	}
        	if ($('section').hasClass("dms_content4")) {
        		if ( ($(window).scrollTop()+h) >= $(".dms_content4").offset().top) {
            		$(".dms_content4 article h1, .dms_content4 article ol").css({visibility:"visible"});
            		$(".dms_content4 article h1, .dms_content4 article ol").addClass('animated slideInRight');
        		}
        	}
        	if ($('section').hasClass("pm_content")) {
        		if ( ($(window).scrollTop()+h) >= $(".pm_content").offset().top) {
            		$(".pm_content h1, .pm_content ol").css({visibility:"visible"});
            		$(".pm_content h1, .pm_content ol").addClass('animated slideInLeft');
        		}
        	}
        	if ($('section').hasClass("ss_content1")) {
        		if ( ($(window).scrollTop()+h) >= $(".ss_content1").offset().top) {
            		$(".ss_content1 article h1, .ss_content1 article ol").css({visibility:"visible"});
            		$(".ss_content1 article h1, .ss_content1 article ol").addClass('animated slideInLeft');
        		}
        	}
        	if ($('section').hasClass("ss_content2")) {
        		if ( ($(window).scrollTop()+h) >= $(".ss_content2").offset().top) {
            		$(".ss_content2 article h1, .ss_content2 article ol").css({visibility:"visible"});
            		$(".ss_content2 article h1, .ss_content2 article ol").addClass('animated slideInRight');
        		}
        	}
        	if ( $(window).scrollTop() == 0 ) {
            	$(".dms_main article, .dms_content1 article h1, .dms_content1 article ol, .dms_content2 article h1, .dms_content2 article ol, .dms_content3 article h1, .dms_content3 article ol, .dms_content4 article h1, .dms_content4 article ol, .pm_content h1, .pm_content ol, .ss_content1 article h1, .ss_content1 article ol, .ss_content2 article h1, .ss_content2 article ol").each(function(){
            		$(this).removeClass('animated slideInUp slideInLeft slideInRight').css({visibility:"hidden"});
            	});
        	}
        }
        else
        if ($('section').hasClass("keep_in_touch")) {
        	if ( ($(window).scrollTop()+h) >= $(".keep_in_touch").offset().top) {
            	$(".keep_in_touch h1, .keep_in_touch .contacts, .keep_in_touch .form_wrapper").css({visibility:"visible"});
            	$(".keep_in_touch h1").addClass('animated slideInUp');
            	$(".keep_in_touch .contacts").addClass('animated slideInLeft');
            	$(".keep_in_touch .form_wrapper").addClass('animated slideInRight');
        	}
        	if ( $(window).scrollTop() == 0 ) {
            	$(".keep_in_touch h1, .keep_in_touch .contacts, .keep_in_touch .form_wrapper").each(function(){
            		$(this).removeClass('animated slideInUp slideInLeft slideInRight').css({visibility:"hidden"});
            	});
        	}
        }

    });


});


$(document).ready(function() {

$('.nav_main ul li>ul>li>a:first').hover(function(){     /*---change color of triangle in submenu on hover---*/
	$('.triangle').css('border-bottom-color', '#FA9623');
	}, function(){
	$('.triangle').css('border-bottom-color', '#F36F21');	
});
		

$('.nav_main>ul>li').mouseenter(function(){        /*---show/hide submenu on hover---*/
	if ($(window).width() >= 768)
	$(this).find('ul').stop().slideDown(300);
});
$('.nav_main>ul>li').mouseleave(function(){
	if ($(window).width() >= 768)
	$(this).find('ul').stop().slideUp(300);
});

	
$('.nav_main>ul>li').click(function(){       /*---show/hide submenu on click---*/
	/*if ($(window).width() >= 768)*/
	$('ul', this).stop().slideToggle(300);
});
	

$('body').click(function(e){                   /*---hide menu by click out of menu and menu button (768)---*/
	if  (($('body').width() < 768) && ($(e.target).closest('.nav_main>ul, a.nav-opener').length == 0))
		 $('.nav_main>ul').css("display", "none");
});


$('a.nav-opener').click(function(){    /*---show/hide menu by click on menu button (768)---*/
	if ($('body').width() < 768)
	$(this).toggleClass('nav-active');
	/*$('.nav_main>ul>li>ul').css("display", "none");*/
	$('.nav_main>ul').slideToggle(300);	
});
	

/*$('.nav_main ul li').click(function(){     /*---show/hide submenu by click on menu (768)---*/
/*	if ($(window).width() < 768)    
	$(this).find('ul').toggle();	
});*/


$(window).resize(function() {              /*---show menu after resize from 768 to higher resolution (>768)---*/
    if ($(window).width() >= 768)
		$('.nav_main>ul').css("display","block");
		$('.nav_main>ul>li>ul').css("display","none");
	if ($(window).width() < 768) 
	$('.nav_main>ul').css("display","none");
});


$('input,textarea').focus(function(){       /*---delete placeholder from input and textarea on focus---*/
	$(this).data('placeholder',$(this).attr('placeholder'))
	$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});






});


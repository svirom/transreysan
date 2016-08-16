$(document).ready(function() {

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


});


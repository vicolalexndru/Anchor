//-------------------------- Start Preloader --------------------------//

$(window).load(function() { 

jQuery(".preloader_title").fadeOut();	
   $("#preloader").delay(300).fadeOut("slow");

});

//---------------------------- End Preloader --------------------------//



$(document).ready(function(){

//------------------------ Start Toggle Menu --------------------------//

$(".nav-btn,.toggle").click(function(){
    $(".toggle_header").slideToggle(800);
});    

//------------------------- End Toggle Menu --------------------------// 



//-------------------- Start Smooth-Scroll Navigation ----------------//

$('a.toggle').smoothScroll({
    speed: 1500,
    offset: 0
});

//--------------------- End Smooth-Scroll Navigation -----------------//



//------------------------Start Wow Master----------------------------// 

wow = new WOW({ 
    animateClass: 'animated',
    offset:       100
});
   
wow.init();

//----------------------- End Wow Master-----------------------------// 



//-------------------------- Start Fit Text -------------------------//

$(".fittext_title").fitText(1.1, { minFontSize: '36px', maxFontSize: '60px'});
$(".fittext_studio").fitText(1.1, { minFontSize: '24px', maxFontSize: '36px'});
$(".fittext_slogan").fitText(1.1, { minFontSize: '32px', maxFontSize: '74px'});

//-------------------------- End Fit Text ---------------------------//



//----------------------- Start Text Rotator -----------------------// 

$(".animate_text").textrotator({ 
    separator: ",",
    speed: 2500
});

//----------------------- End Text Rotator ------------------------//



//--------------------------- Swipebox ----------------------------//

 $(".swipebox").swipebox();  

//--------------------------End Swipebox --------------------------//


});
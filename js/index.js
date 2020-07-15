$(document).ready(function(){
    $(window).on("scroll",function(){
        var st =$(window).scrollTop();
        console.log(st);
        if(st < 316){
            $(".home_link").css("color","white");
        }
        else{
            $(".home_link").css("color","#999999")
        }
        if(st > 316 && st < 2483){
            $(".classes-link").css("color","white");
        }
        else{
            $(".classes-link").css("color","#999999")
        }
        if(st > 2483 && st < 3019){
            $(".about_link").css("color","white");
        }
        else{
            $(".about_link").css("color","#999999")
        }
        
        if(st > 3019 && st < 3636){
            $(".event_link").css("color","white");
        }
        else{
            $(".event_link").css("color","#999999")
        }
        
        if(st > 3636 && st < 4789){
            $(".gallery_link").css("color","white");
        }
        else{
            $(".gallery_link").css("color","#999999")
        }
        
        if(st > 4789 ){
            $(".contact_link").css("color","white");
        }
        else{
            $(".contact_link").css("color","#999999")
        }
    /***********************Right_nav*********************************************/
        if(st < 316){
            $(".home_link2").css("color","#6610f2");
        }
        else{
            $(".home_link2").css("color","#999999")
        }
        if(st > 316 && st < 2483){
            $(".classes-link2").css("color","#6610f2");
        }
        else{
            $(".classes-link2").css("color","#999999")
        }
        if(st > 2483 && st < 3019){
            $(".about_link2").css("color","#6610f2");
        }
        else{
            $(".about_link2").css("color","#999999")
        }
        
        if(st > 3019 && st < 3636){
            $(".event_link2").css("color","#6610f2");
        }
        else{
            $(".event_link2").css("color","#999999")
        }
        
        if(st > 3636 && st < 4789){
            $(".gallery_link2").css("color","#6610f2");
        }
        else{
            $(".gallery_link2").css("color","#999999")
        }
        
        if(st > 4789 ){
            $(".contact_link2").css("color","#6610f2");
        }
        else{
            $(".contact_link2").css("color","#999999")
        }
        /*****************************************************************************************/
        
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////
  /* $(".pages").hover(
    function(){
        $(".dropdown-content").animate({
            top: '54px' ,
            opacity : '1'
            } , 500);
    } ,
    function(){
        $(".dropdown-content").animate({
            top:'100px' ,
            opacity : '0'
            });
    });
    //////////////////////////////
    $(".inner_links").hover(
        function(){
        $(".dropdown-content-inner").animate(
            {right: '-142px' ,
             top: '122px',
             opacity:'1'     
            },500);
        
        
        }  ,
        function(){
         $(".dropdown-content-inner").animate(
            {right: '-142px' ,
             top: '122px',
             opacity:'0'     
            },500);
        
    }
    );*/
    
    $(".allb").click(function(){
        $("div").filter(".all").fadeIn(300);
        $(this).css({
              "background-color" : "rgba(255,255,255,0)" ,
              "color" : "black"});
        $(".classb , .internb , .trainingb").css({
           "background-color": "#510BC4" ,
           "color" : "white"
       });
        
    });
    $(".classb").click(function(){
        $("div").filter(".all").fadeOut(100);
        $("div").filter(".all_classes").fadeIn(300);
       $(this).css({
              "background-color" : "rgba(255,255,255,0)" ,
              "color" : "black"});
       $(".allb , .internb , .trainingb").css({
           "background-color": "#510BC4" ,
           "color" : "white"
       });
        
    });
    $(".internb").click(function(){
        $("div").filter(".all").fadeOut(100);
        $("div").filter(".all_inter").fadeIn(300);
        $(this).css({
              "background-color" : "rgba(255,255,255,0)" ,
              "color" : "black"});
       $(".allb , .classb , .trainingb").css({
           "background-color": "#510BC4" ,
           "color" : "white"
       });
        
    });
    $(".trainingb").click(function(){
        $("div").filter(".all").fadeOut(100);
        $("div").filter(".all_train").fadeIn(300);
        $(this).css({
              "background-color" : "rgba(255,255,255,0)" ,
              "color" : "black"});
       $(".allb , .classb , .internb").css({
           "background-color": "#510BC4" ,
           "color" : "white"
       });
        
    });
    
  
    //////////////////////////////////////////////////
    $(".togg_btn").click(function(){
        $(".nav_right").fadeIn();
    })
    $(".close_nav").click(function(){
        $(".nav_right").fadeOut();
    });
    
    $(".home_link2 , .classes-link2 , .about_link2 , .event_link2 , .gallery_link2 , .contact_link2").click(function(){
         $(".nav_right").fadeOut();
        
    });
   
});

$(function() {
    var header = $(".fixed_nav");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 55) {
            header.addClass("scrolled").css( "position" , "fixed");
        } else {
            header.removeClass("scrolled").css( "position" , "relative");
        }
    });
  
});
$(function() {
    var header = $(".fixed_nav"); 
        var scroll = $(window).scrollTop();
        if (scroll >= 55) {
            header.addClass("scrolled").css( "position" , "fixed");
        } else {
            header.removeClass("scrolled").css( "position" , "relative");
        }
  
});

 /////////////////////////////////////////////////
    /*$(".contain_img").hover(
        function(){
            $(".visibl").css("display","block");
        } ,
        function(){
            $(".visibl").css("display","none");
        }
    
    
    
    );*/

///////////////////////////////////////////////////
  /* $(".contain_img").click(function(){
         $(".image_show").fadeIn();
        $(".photo").html($(".imag1"));
                      
    });
    
    $(".close_img").click(function(){
        $(".image_show").fadeOut();
                      
    });*/


////////////////////////////////
    
   /* $(".circl").click(function(){
        $(".video_play").fadeIn();
                      
    });
    
    $(".close_video").click(function(){
        $(".video_play").fadeOut();
                      
    });*/
    
$(document).ready(function(){
    "use strict";
    alert("hello world");
   $(".carousel-item").hover(function(){
       $(".carousel-caption").slideDown(2000);
   },
    function(){
       $(".carousel-caption").slideUp(2000);}
                            );
    
    
    
    
    
});
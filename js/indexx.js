$(document).ready(function () {
    

   $(".hasdatepicker").datepicker();
    
    
    
    
    $('.owl-carousel').owlCarousel({
            center: true,
            items:1,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            singleItem: true,
            autoplayHoverPause:true ,
            responsive:{
                0 : {
                    items:1
                    },
                480 : {
                    items:1
                },
                768 : {
                    items:1 
                }
            }
        
});









});
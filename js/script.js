$(document).ready(function(){
    $('#logo-slider').owlCarousel({
        loop:true,
        margin:18,
        nav:true,
        dots: false,
        autoWidth:true, 
        navText : ["<i class='fa-regular fa-arrow-left-long'></i>","<i class='fa-regular fa-arrow-right-long'></i>"],  
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:false,
            },
            992:{
                
            },
            1400:{
                
            },
            1600:{
               
               
            }
        }
    })
    $('#gallery-slider').owlCarousel({
        loop:true,
        margin:45,
        nav:true,
        dots: true,   
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:true,
                dots: true,   
                nav:false,
            },
            768:{
                autoWidth:true,
                nav:false,
                dots: true,   
            },
            992:{
                items:2,
                loop:false,
                nav:false,
                dots: true,   
            }
        }
    })
    $('#refer-slider').owlCarousel({
        loop:true,
        margin:45,
        nav:true,
        dots: true,   
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:true,
                dots: true,   
                nav:false,
            },
            768:{
                autoWidth:true,
                nav:false,
                dots: true,   
            },
            992:{
                items:3,
                loop:false,
                nav:false,
                dots: true,   
            }
        }
    })

});
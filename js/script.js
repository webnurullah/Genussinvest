$(document).ready(function(){
    $('#logo-slider').owlCarousel({
        margin:18,
        loop:true,
        nav:true,
        dots: false,
        autoWidth:true, 
        navText : ["<i class='fa-regular fa-arrow-left-long'></i>","<i class='fa-regular fa-arrow-right-long'></i>"],  
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
                margin:30,
                loop:false,
            },
            768:{
                nav:false,
                margin:30,
                loop:false,
            },
            992:{
                nav:false,
                loop:true,
            },
            1400:{

            },
            1600:{
               
               
            }
        }
    })
    $('#gallery-slider').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        dots: false,   
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:true,
                margin:20,
            },
            768:{
                items:1,
                autoWidth:true,
                margin:20,
            },
            992:{
                items:2,
                loop:false,
            }
        }
    })
    $('#refer-slider').owlCarousel({
        loop:false,
        margin:46,
        nav:true,
        dots: false,  
        navText : ["<i class='fa-regular fa-arrow-left-long'></i>","<i class='fa-regular fa-arrow-right-long'></i>"],   
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:true,
                nav:false,
                margin:20,
            },
            768:{
                items:2,
                nav:false,
                margin:20,
            },
            992:{
                items:2,
                nav:false,
                margin:30,
            },
            1400:{
                items:3,
                nav:true,
            }
        }
    })

});
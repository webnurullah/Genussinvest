
$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        margin:48,
        loop:false,
        nav:false,
        dots: false,
        autoWidth:true, 
        responsiveClass:true,
        responsive:{
            0:{
                margin:16,              
            },
            768:{
                margin:20,              
            },
            992:{
                margin:30,              
            },
            1400:{
                margin:40,   
            },
            1600:{
               
            }
        }
    })
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
                loop:true,
                nav:false,
            },
            1200:{
                nav:true,
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
                margin:16,
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
        nav:false,
        dots: false,  
        navText : ["<i class='fa-regular fa-arrow-left-long'></i>","<i class='fa-regular fa-arrow-right-long'></i>"],   
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
                autoWidth:true,
                margin:16,
              
            },
            400:{
                nav:false,
                autoWidth:true,
                margin:20,
            },
            768:{
                nav:false,
                autoWidth:true,
                margin:20,
              
            },
            992:{
                nav:false,
                autoWidth:true,
                margin:30,
               
            },
            1401:{
                nav:true,
                items:3,
                margin:30,
            }
        }
    })
    $('#index-project-slider').owlCarousel({
        loop:false,
        margin:46,
        nav:false,
        dots: false,  
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:true,
                margin:16,
            },
            400:{
                autoWidth:true,
                margin:20,
            },
            768:{
                autoWidth:true,
                margin:20,
            },
            992:{
                autoWidth:true,
                margin:30,
            },
            1401:{
                items:3,
                margin:30,
            }
        }
    })

});

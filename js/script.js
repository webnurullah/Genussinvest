$(document).ready(function(){
    $('#logo-slider').owlCarousel({
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
            },
            1400:{
                items:6,
                loop:false,
                nav:true,
                dots: true,   
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
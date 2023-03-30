$(function (){

    let searchBtn = $('.searchBtn');
    let searchBar = $ ('.search');
    let closeBtn = $(".closeBtn");
    let navbar = $ ('nav');
    let navbarTop = Math.ceil(navbar.offset().top);

    console.log(navbarTop)
    $(window).scroll( function ()
    {
        let scrTop = Math.ceil($(window).scrollTop());
        
        if (scrTop > navbarTop){
            navbar.css({
                position: "fixed",
                top: 0
            });
        }
        else{
            navbar.css({
                position:"static"
            });
        }
    })

    searchBtn.click( function(){
        searchBar.fadeIn(350);
        $(this).hide()
        closeBtn.css({
            "opacity": 1,
            "visibility" : 'visible'
        });
    })
    closeBtn.click( function(){


        searchBar.fadeOut();
        $(this).css({
            "opacity": 0,
            "visibility" : 'hidden'
        });
        searchBtn.fadeIn()
    })
    
    $("#Photoshop").goalProgress({
    goalPercentage: 100,
    currentPercentage: 90,
    speed: 1000,
    float: 'right',
    textAfter: '%'
    });
    $("#Illustrator").goalProgress({
        goalPercentage: 100,
        currentPercentage: 85,
        speed: 1000,
        float: 'right',
        textAfter: '%'
        });
    $("#DreamWeaver").goalProgress({
         goalPercentage: 100,
         currentPercentage: 75,
         speed: 1000,
         float: 'right',
         textAfter: '%'
    });
     $("#AfterEffects").goalProgress({
        goalPercentage: 100,
        currentPercentage: 80,
        speed: 1000,
        float: 'right',
        textAfter: '%'
        });
   




    });



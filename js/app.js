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




    });



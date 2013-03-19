$(document).ready(function(){
    var nav=$('.header');
    
    $(window).scroll(function(){
        if($(this).scrollTop()>65){
            nav.addClass("header-scrolled");
        }
        else
            {
                nav.removeClass("header-scrolled");
            }
    });
});



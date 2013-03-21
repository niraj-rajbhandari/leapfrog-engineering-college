$(document).ready(function() {
    var nav = $('.header');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 65) {
            nav.addClass("header-scrolled");
        }
        else
        {
            nav.removeClass("header-scrolled");
        }
    });
    $('.btn-show').click(function() {
        $('.btn-hide').show();
        $('.btn-show').hide();
       
    });
    $('.btn-hide').click(function() {
        $('.btn-show').show();
        $('.btn-hide').hide();
    });
    $('.btn-show2').click(function() {
        $('.btn-hide2').show();
        $('.btn-show2').hide();
        
    });
    $('.btn-hide2').click(function() {
        $('.btn-show2').show();
        $('.btn-hide2').hide();
    });
     $('.btn-show3').click(function() {
        $('.btn-hide3').show();
        $('.btn-show3').hide();
       
    });
    $('.btn-hide3').click(function() {
        $('.btn-show3').show();
        $('.btn-hide3').hide();
    });

});
function changeContent() {
    document.getElementById('One').style.display = 'block';

}

function loadNull() {
    document.getElementById('One').style.display = 'none';
}
function changeContentShow() {
    document.getElementById('Two').style.display = 'block';

}

function loadNullValue() {
    document.getElementById('Two').style.display = 'none';
}
function changeContentShowAgain() {
    document.getElementById('Three').style.display = 'block';

}

function loadNullValueAgain() {
    document.getElementById('Three').style.display = 'none';
}
function loadInitial() {
    document.getElementById('One').style.display = 'none';
    document.getElementById('Two').style.display = 'none';
    document.getElementById('Three').style.display = 'none';

}
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
function changeContent(){
   document.getElementById('One').style.display = 'block'; 
     
    }

function loadNull(){
   document.getElementById('One').style.display = 'none';  
}
function changeContentShow(){
   document.getElementById('Two').style.display = 'block'; 
     
    }

function loadNullValue(){
   document.getElementById('Two').style.display = 'none';  
}
function changeContentShowAgain(){
   document.getElementById('Three').style.display = 'block'; 
     
    }

function loadNullValueAgain(){
   document.getElementById('Three').style.display = 'none';  
}
function loadInitial(){
    document.getElementById('One').style.display = 'none';  
     document.getElementById('Two').style.display = 'none'; 
      document.getElementById('Three').style.display = 'none';
     
}
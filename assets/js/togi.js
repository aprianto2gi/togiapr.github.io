/**
* Template Name: DevFolio - v2.3.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0))))};

    function disableSelection(e){if(typeof e.onselectstart!="undefined")e.onselectstart=function(){return false};else if(typeof e.style.MozUserSelect!="undefined")e.style.MozUserSelect="none";else e.onmousedown=function(){return false};e.style.cursor="default"}window.onload=function(){disableSelection(document.body)} 

    document.oncontextmenu=function(e){var t=e||window.event;var n=t.target||t.srcElement;if(n.nodeName!="A")return false}; document.ondragstart=function(){return false}; 

    window.addEventListener("keydown",function(e){if(e.ctrlKey&&(e.which==65||e.which==66||e.which==67||e.which==70||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){e.preventDefault()}});document.keypress=function(e){if(e.ctrlKey&&(e.which==65||e.which==66||e.which==70||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){}return false} 
    /* Untuk mac kita perlu cek metakey */ window.addEventListener("keydown",function(e){if( event.metaKey&&(e.which==65||e.which==66||e.which==67||e.which==70||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){e.preventDefault()}});document.keypress=function(e){if(e.ctrlKey&&(e.which==65||e.which==66||e.which==70||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){}return false} 

    document.onkeydown=function(e){e=e||window.event;if(e.keyCode==123||e.keyCode==18){return false}}

    $('img').mousedown(function (e) {
        if(e.button == 2) { // right click
            return false; // do nothing!
        }
    });

    $(document).on("click",".mfp-img",function(){
        alert('test');
    });
    
    $('.a_s_1').click(function(){
      var newUrl = "assets/img/sertifikat/Sertifikat HTML.png";
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/Sertifikat HTML.png"){
          $(".a_s_1").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 2000);
    });
    
    $('.a_s_2').click(function(){
      var newUrl = "assets/img/sertifikat/Sertifikat PHP Fundamental.png";
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/Sertifikat PHP Fundamental.png"){
          $(".a_s_2").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 1000);
    });
    
    $('.a_s_3').click(function(){
      var newUrl = "assets/img/sertifikat/Sertifikat PHP Advanced.png";
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/Sertifikat PHP Advanced.png"){
          $(".a_s_3").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 1000);
    });
    
    $('.a_s_4').click(function(){
      var newUrl = "assets/img/sertifikat/Sertifikat Codeigniter.png";
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/Sertifikat Codeigniter.png"){
          $(".a_s_4").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 1000);
    });

    $('.a_s_5').click(function(){
      var newUrl = "assets/img/sertifikat/Sertifikat Javascript Dasar.png";
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/Sertifikat Javascript Dasar.png"){
          $(".a_s_5").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 1000);
    });
    
    $('.a_s_6').click(function(){
      var newUrl = "assets/img/sertifikat/Sertifikat NodeJS.jpg"
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/Sertifikat NodeJS.jpg"){
          $(".a_s_6").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 1000);
    });
    $('.a_s_7').click(function(){
      var newUrl = "assets/img/sertifikat/postgresql.jpg"
      $(this).attr("href", newUrl); var url=$(this).attr("href");
      setTimeout(function(){
        if(url=="assets/img/sertifikat/postgresql.jpg"){
          $(".a_s_6").attr("href", "http://i.stack.imgur.com/smHPA.png");
        }
      }, 1000);
    });   

})(jQuery);
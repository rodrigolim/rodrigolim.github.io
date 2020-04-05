/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });




    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    
    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor:'#FFFFFF',
                trackColor:'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function () {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });


    }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
      $('.image-link').magnificPopup({

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'

      });

    }());



    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());



    // -------------------------------------------------------------
    // Vidio auto play
    // -------------------------------------------------------------
    (function () {
    
    /* Vimeo API: http://developer.vimeo.com/player/js-api */
    
        var iframe = document.getElementById('nofocusvideo');
        // $f == Froogaloop
        var player = $f(iframe);

        $('.modal').on('hidden.bs.modal', function () {
        player.api('pause');
        })

        $('.modal').on('shown.bs.modal', function () {
        player.api('play');
        })
    }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function() {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());

    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

   /* (function () {
       var myLatlng = new google.maps.LatLng(-22.9083, -43.19771);

            var styles = [
                {
                    featureType: "landscape",
                    stylers: [
                        { color: '#f7f7f7' }
                    ]
                },{
                    featureType: "natural",
                    stylers: [
                        { hue: '#00ffe6' }
                    ]
                },{
                    featureType: "road",
                    stylers: [
                        { hue: '#fff' },
                        { saturation: -70 }
                    ]
                },{
                    featureType: "building",
                    elementType: "labels",
                    stylers: [
                        { hue: '' }
                    ]
                },{
                    featureType: "poi", //points of interest
                    stylers: [
                        { hue: '' }
                    ]
                }
            ];

            var mapOptions = {
                zoom: 6,
                scrollwheel: false,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                styles: styles
            }
            var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Rio de Janeiro - Brazil'
            });

            var contentString = '' +
                    '' +
                    '';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

    }()); */

          /*********** Formulário de Contato ************/
        $("input, textarea").css("background-color","transparent");
        $("input, textarea").css("border","1px solid #ccc");
    
        $("input, textarea").click(function(){
    $(this).css("border", "0.05em solid #5EA58C");
    $(this).css("box-shadow", "0px 0px 10px #5EA58C");
});
$("input, textarea").blur(function(){
    $(this).css("border","1px solid #ccc");
    $(this).css("box-shadow", "0px 0px 0px #08A20F");
});

});


    function escondeResposta(){
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");
    $("#resposta-email").fadeOut();
}

function validMessage(){
    var name = $("#name");
    var email = $("#email");
    var subject = $("#subject");
    var message = $("#message");
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(name.val().length <=3){
      name.css("border", "1px solid #f99090");
      name.css("box-shadow", "0px 0px 10px #f99090");
    }
    else if(!regex.test(email.val())){
      email.css("border", "1px solid #f99090");
      email.css("box-shadow", "0px 0px 10px #f99090");
  
    }
     else if(subject.val().length <=3){
      subject.css("border", "1px solid #f99090");
      subject.css("box-shadow", "0px 0px 10px #f99090");
  
    }
    else if(message.val().length <25 || message.val().length > 300){
      message.css("border", "1px solid #f99090");
      message.css("box-shadow", "0px 0px 10px #f99090");
    }
    else{
        var dados={
            name:name.val(),
            email:email.val(),
            subject:subject.val(),
            message:message.val()
            
        };
        //console.log("Dados que serão enviados: "+JSON.stringify(dados));
         $("#resposta-email").html("<img  src='assets/images/preloader.gif' style='width: 32px; height: 32px;'/> &nbsp; I am sending message, wait please.");
         $("#resposta-email").fadeIn();
        jQuery.ajax({
                      url : "email/envia.php",
                      type: 'POST',
                      dataType : "json",
                      data: JSON.stringify(dados),
                      success:function(data) {
                          console.log(data.resposta); 
                          if(data.resposta){
                          $("#resposta-email").css("color", "#036d05");
                          $("#resposta-email").html("Message sent successfully!");
                          $("#resposta-email").fadeIn();
                          setTimeout(escondeResposta, 3000);
                          }else{
                          $("#resposta-email").css("color", "#FF0000");
                          $("#resposta-email").html("Could not send the message. Try later.");    
                          $("#resposta-email").fadeIn();
                          setTimeout(escondeResposta, 3000);
                          }
                      },
                      error: function(data) {   
                          console.log(data);
                         $("#resposta-email").css("color", "#FF0000"); 
                         $("#resposta-email").html("Could not send the message. Try later.");     
                         $("#resposta-email").fadeIn();
                         setTimeout(escondeResposta, 3000);
                      }
                     });
    }
} 





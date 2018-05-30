$(function() {
    
    
    // hide mobile menu
    
    $(function() {
        if (($(window).width() <= 800)) {
            $('.mobilemenu2').hide();
        } else {
            $('.mobilemenu2').show();
        }
    });
    
    // open menu when user clicks on menu (mobile only)
    
    $('.mobilemenu1').on('click',function(){
        if (($(window).width() <= 800)){
            $('.mobilemenu2').slideToggle();
        }
     else {
         // Do nothing
        }
    });
    
    // close menu when you click on item (mobile only)
    
    $('.menuitem').on('click',function(){
        if (($(window).width() <= 800)){
            $('.mobilemenu2').slideToggle();
        }
     else {
         // Do nothing
        }
    });
    
    // slow scroll to page sections
    
     $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top -30
                }, 1000);
                return false;
              }
            }
          });
    
    
    // scroll to top
    
    $("#scrollToBottom").click(function () {
        $('html, body').animate({ scrollTop: window.screen.height }, 600);
    });
    
    $("#scrollToTop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
    
    // When user scrolls to x px from top, the scroll to top button shows up
    // Window has to be at least 992 wide to do this
    
    $(window).scroll(function() {
        if (($(window).scrollTop() >= 600) && ($(window).width() >= 700)) {
            $('.btn').css("display", "inline");
        } else {
            $('.btn').css("display", "none");
        }
    });
    
    $('.btn').hover(function() {
        $(this).toggleClass('opacityfull');
    });
    
    
    // ////////////////////////////////////////////////////// Videos and confetti
    
    
   function makeRandom (v) {
    return Math.floor(Math.random() * v)
}

var colors = ['#ff1838', '#f1ff4b', '#ffb612'];

function scatterConfetti (i, el) {
    $(el).css({
          top: makeRandom(window.innerHeight),
          left: makeRandom(window.innerWidth),
          backgroundColor: colors[makeRandom(colors.length)]
    });
}

    $('video').on('ended', function(e) {        
        var currentIndex = $(e.target).attr('data-video-index');        
        var newIndex = (
            currentIndex === '5' 
                ? 1 
                : +currentIndex + 1
        );
        $('video[data-video-index="' + newIndex + '"]')[0].play();
    });
    
    for (var i = 0; i < 20; i++) {
        $('.confetti-wrapper').append($('<div />', {
            class: 'confetti confetti-' + i % 2
        }))
    }
    
    
    
    $('.confetti-0').each(scatterConfetti);
    
    setInterval(function () {
        $('.confetti-1').each(scatterConfetti);
    }, 3000 + makeRandom(3000))
    
    setInterval(function () {
        $('.confetti-0').each(scatterConfetti);
    }, 4000 + makeRandom(5000));
    
    

function scatterConfetti_small (i, el) {
    $(el).css({
          top: makeRandom(document.getElementByClassName('confetti-wrapper_small').innerHeight),
          left: makeRandom(document.getElementByClassName('confetti-wrapper_small').innerWidth),
          backgroundColor: colors[makeRandom(colors.length)]
    });
}
    
    for (var i = 0; i < 20; i++) {
        $('confetti-wrapper_small').append($('<div />', {
            class: 'confetti confetti-' + i % 2
        }))
    }
    
    $('.confetti-0').each(scatterConfetti);
    
    setInterval(function () {
        $('.confetti-1').each(scatterConfetti);
    }, 3000 + makeRandom(3000))
    
    setInterval(function () {
        $('.confetti-0').each(scatterConfetti);
    }, 4000 + makeRandom(5000));


    

    
    // ////////////////////////////////////////////////////// Participants
    
    // make sophomore, junior, senior labels light opacity on page load
    
    $('.juniorsclick, .seniorsclick, .sophomoresclick').addClass('opacitylight');
    
    $('.juniorsclick, .seniorsclick, .sophomoresclick').hover(function() {
        $(this).toggleClass('opacityfull');
    });
    
    $('.allstudentsclick').hover(function() {
        $(this).toggleClass('opacityfull');
    });
    
    // make sophomore, junior, senior, all student labels full opacity on click
    
    $('.allstudentsclick').click(function() {
    $('.junior, .sophomore, .senior').show(); 
    $('.allstudentsclick').addClass('opacityfull');
    $('.allstudentsclick').removeClass('opacitylight');
    $('.juniorsclick, .seniorsclick, .sophomoresclick').addClass('opacitylight');
    });
    
    $('.seniorsclick').click(function() {
    $('.junior, .sophomore').hide();
    $('.senior').show();  
    $('.seniorsclick').addClass('opacityfull');
    $('.seniorsclick').removeClass('opacitylight');
    $('.juniorsclick, .allstudentsclick, .sophomoresclick').addClass('opacitylight');
    });
    
    $('.juniorsclick').click(function() {
    $('.senior, .sophomore').hide();
    $('.junior').show();  
    $('.juniorsclick').addClass('opacityfull');
    $('.juniorsclick').removeClass('opacitylight');
    $('.allstudentsclick, .seniorsclick, .sophomoresclick').addClass('opacitylight');
    });
    
    $('.sophomoresclick').click(function() {
    $('.junior, .senior').hide();
    $('.sophomore').show();
    $('.sophomoresclick').addClass('opacityfull');
    $('.sophomoresclick').removeClass('opacitylight');
    $('.juniorsclick, .seniorsclick, .allstudentsclick').addClass('opacitylight');
    });
    
    
    // ////////////////////////////////////////////////////// Participants // Bio
    
    $('.bio').addClass('shownone');
    
//    $('.partipantname').click(function() {
//    $(this).next().toggleClass('shownone');
//    $(this).next().toggleClass('showbio');
//    });

    
});
    
    

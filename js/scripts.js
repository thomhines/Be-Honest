$(function() {
    
    // hide mobile menu
    
    $(function() {
        if (($(window).width() <= 700)) {
            $('.mobilemenu2').hide();
        } else {
            $('.mobilemenu2').show();
        }
    });
    
    // open menu when user clicks on menu (mobile only)
    
    $('.mobilemenu1').on('click',function(){
        if (($(window).width() <= 700)){
            $('.mobilemenu2').slideToggle();
        }
     else {
         // Do nothing
        }
    });
    
    // close menu when you click on item (mobile only)
    
    $('.menuitem').on('click',function(){
        if (($(window).width() <= 700)){
            $('.mobilemenu2').slideToggle();
        }
     else {
         // Do nothing
        }
    });
    
    // slow scroll to page sections
    
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 600);    
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
    
    $('.partipantname').click(function() {
    $(this).next().toggleClass('shownone');
    $(this).next().toggleClass('showbio');
    });

    
});
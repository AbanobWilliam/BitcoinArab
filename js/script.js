$(document).ready(function () {
    $('.search').click(function (e) {
        e.preventDefault();
        $('.search-box').slideToggle(100);
    });
    $("#breaking-news").ticker({
        effect: "slideDown",
        interval: 2000,
        duration: 800
    });
    $('.menu-item-has-children').click(function(){
        $(this).children('ul').slideToggle(150);
        $(this).toggleClass('opened');
    });
    $('.mobile-button').click(function(e){
        e.preventDefault();
        $('.mobile-menu').addClass('opened');
        $('.menu-overlay').fadeIn(300);
    });
    $('.close-mobile-menu').click(function(e){
        e.preventDefault();
        $('.mobile-menu').removeClass('opened');
        $('.menu-overlay').fadeOut(300);
    });
    $('.menu-overlay').click(function(){
        $('.mobile-menu').removeClass('opened');
        $(this).fadeOut(300);
    });
    $('.go-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    var darkmoodcheckcheck = localStorage.getItem('darkmood');
    if(darkmoodcheckcheck === 'null'){
        $('body').removeClass('dark-theme');
        $('.dark').removeClass('flip');
    }
    if(darkmoodcheckcheck === 'dark'){
        $('body').addClass('dark-theme');
        $('.dark').addClass('flip');
    }
    $('.dark').click(function(e){
        e.preventDefault();
        var darkmoodcheck = localStorage.getItem('darkmood');
        if(darkmoodcheck == 'null'){
            localStorage.setItem('darkmood','dark');
            $('body').addClass('dark-theme');
            $(this).addClass('flip');
        }else if(darkmoodcheck == 'dark'){
            localStorage.setItem('darkmood','null');
            $('body').removeClass('dark-theme');
            $(this).removeClass('flip');
        }
    });
    $('.loading').fadeOut(300);
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 300) {
        $(".sticky-social").addClass("sticky");
    }else{
        $(".sticky-social").removeClass("sticky");
    }
    if (scroll >= 600) {
        $(".go-to-top").fadeIn(300);
    }else{
        $(".go-to-top").fadeOut(300);
    }
});



$(function() {
    $( document ).ready(function() {
      $('body').fadeIn('slow');
    });

    var loc = window.location.href;

    if(/best-of-semplice/.test(loc)) {
        $('body').addClass('bos');
        $('body').removeClass('home');
        $('body').addClass('case-study-page');
    }
    if(/contact/.test(loc)) {
        $('body').removeClass('home');
        $('body').addClass('contact');
    }
    if(/logo-design/.test(loc)) {
        $('body').addClass('logo-design');
        $('body').removeClass('home');
        $('body').addClass('case-study-page');
    }
    if(/mind-trucks/.test(loc)) {
        $('body').addClass('mt');
        $('body').removeClass('home');
        $('body').addClass('case-study-page');
    }
    if(/poster-design/.test(loc)) {
        $('body').addClass('poster-design');
        $('body').removeClass('home');
        $('body').addClass('case-study-page');
    }
    if(/semplice-knowledgebase/.test(loc)) {
        $('body').addClass('sk');
        $('body').removeClass('home');
        $('body').addClass('case-study-page');
    }
    if(/tshirt-design/.test(loc)) {
        $('body').addClass('tshirt-design');
        $('body').removeClass('home');
        $('body').addClass('case-study-page');
    }
});
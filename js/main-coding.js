

$(document).ready(function () {
    'use strict';

    var url = new URL(window.location.href);
    var page = url.searchParams.get('page');

    if(page === 'home') {
        $('#home').addClass('active').siblings('li').removeClass('active');
    }else if(page === 'about') {
        $('#about').addClass('active').siblings('li').removeClass('active');
    }else if(page === 'contact') {
        $('#contact').addClass('active').siblings('li').removeClass('active');
    }else if(page === 'services') {
        $('#services').addClass('active').siblings('li').removeClass('active');
    }else if(page === 'gallery') {
        $('#gallery').addClass('active').siblings('li').removeClass('active');
    }
    
});
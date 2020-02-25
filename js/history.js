/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#scrollTop').fadeIn();
    } else {
        $('#scrollTop').fadeOut();
    }
});
$(document).ready(function() {
    $("#scrollTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

particlesJS.load('particles-bg', '../assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
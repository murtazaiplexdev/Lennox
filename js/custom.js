$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >50) {
        $("header").addClass("darkHeader");
    }
    else{
        $("header").removeClass("darkHeader");
    }
});
$(document).ready(function () {
    $(".checkbox-img").click(function () {
        $(".view-box").css("display", "flex");
        return false;
    });
    $(".close-box").click(function () {
        $(".view-box").css("display", "none");
        return false;
    });
    
});
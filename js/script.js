$(document).ready(function () {
    $("#design img").show();
    $("#design").click(function () {
        $("#design p").toggle();
       
    });
});
$(document).ready(function () {
    $("#development").show();
    $("#development").click(function () {
        $("#development p").toggle();

    });
});
$(document).ready(function () {
    $("#product").show();
    $("#product").click(function () {
        $("#product p").toggle();
     
    });
});

$(document).ready(function() {
    $('.text').hide();
    $('img').animate({
        opacity:1
        
    });

    $('img').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text').fadeOut();
    });


});
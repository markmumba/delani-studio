$(document).ready(function () {
    $("#design img").show();
    $("#design").click(function () {
        $("#design p").toggle();

    });

    $("#development").show();
    $("#development").click(function () {
        $("#development p").toggle();

    });

    $("#product").show();
    $("#product").click(function () {
        $("#product p").toggle();

    });

    $(".button").click(function () {
        var alert = $(".alert");
        for (i = 0; i < 1; i++) {
            alert.slideToggle();
        }
    });
});
$(document).ready(function () {
    $("#design").hide();
    $("#design").click(function () {
        $("#design p").toggle();
        $("#design img").toggle();
    });
});
$("#development").click(function () {
    $("#development p").toggle();
    $("#development img").toggle();
});
$("#producct").click(function () {
    $("#product p").toggle();
    $("#product img").toggle();
});
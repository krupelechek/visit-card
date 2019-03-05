$('.button__submit').on('click', function() {
    var $name = $('#username').val();
    $('.hello-card').text($name);

    $('.user-form').css("display", "none");
    $('.hello-card').css("display", "block");
});
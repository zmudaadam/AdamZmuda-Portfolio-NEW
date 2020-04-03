
if($.cookie(options.cookie) != 'true') {
    var wrapper = $('<div/>').addClass('cookiepolicy').appendTo('body');
    $('<span/>').html(options.info).appendTo(wrapper);
    $('<a/>').addClass('button').html(options.close).appendTo(wrapper)
        .on('click', function(e) {
            e.preventDefault();
            $.cookie(options.cookie, true);
            $(this).parents('.cookiepolicy').remove();
        });
}
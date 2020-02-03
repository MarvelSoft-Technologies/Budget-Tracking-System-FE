$('.field-toAdd').each(function() {

    var $wrapper = $('.each-field', this);

    $(".addNewItem", $(this)).click(function(e) {
        $('.single-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
    });

    $('.single-field .remove-field', $wrapper).click(function() {
        if ($('.single-field', $wrapper).length > 1)
            $(this).parent('.single-field').remove();
    });
});
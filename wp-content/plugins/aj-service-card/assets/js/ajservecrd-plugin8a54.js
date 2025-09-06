jQuery(document).ready(function($){
    $('.faq-answer').hide(); // Hide all answers by default

    $('.faq-question').on('click', function() {
        var parentItem = $(this).closest('.faq-item');

        if (parentItem.hasClass('active')) {
            parentItem.removeClass('active');
            parentItem.find('.faq-answer').slideUp();
        } else {
            $('.faq-item').removeClass('active');
            $('.faq-answer').slideUp();

            parentItem.addClass('active');
            parentItem.find('.faq-answer').slideDown();
        }
    });
});
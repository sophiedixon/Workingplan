$(function() {
    var $accordionItems = $('#accordion div');
    var $scrolls = $('#accordion .scroll');
    var $imgs = $scrolls.find('img');
    
    function resize(){
        var height = window.innerHeight;
        height = height - ($('#accordion a').outerHeight() * $('#accordion a').length);
        $accordionItems.height(height);
        $scrolls.height(height);
        $imgs.height(height);
    }
    
    $(window).on('resize', function() {
        resize();
    });
    
    resize();
    
    // display the first div by default.
    $("#accordion div").first().css('display', 'block');

    // Get all the links.
    var link = $("#accordion a");

    // On clicking of the links do something.
    link.on('click', function(e) {

        e.preventDefault();
        
        var $a = $(this);

        var divId = $a.attr("href");

        $(divId).slideDown('fast');
        
        $a.removeClass('closed').addClass('open');

        $("#accordion div").not(divId).slideUp('fast');
        
        $('#accordion a').not($a).removeClass('open').addClass('closed');
        
    });
});
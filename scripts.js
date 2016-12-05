$(function() {
    
    $('img[usemap]').rwdImageMaps();

    var $accordionItems = $('#accordion div');
    var $links = $("#accordion a");
    var $scrolls = $('.scroll');
    var $imgs = $scrolls.find('img');
    
    function openItem($a){
        var divId = $a.attr("href");   
        $a.removeClass('closed').addClass('open');
        // close all other items
        $links.not("[href='" + divId + "']").each(function(index, a){
            closeItem($(a));
        });
        $(divId).slideDown('fast', function(){
            $(window).trigger('resize');
        });  
    }
    
    function closeItem($a){
        var divId = $a.attr("href");
        $(divId).slideUp('fast');
        $a.removeClass('open').addClass('closed');
    }

    $links.on('click', function(e) {

        e.preventDefault();
        
        var $a = $(this);
        
        if ($a.hasClass('closed')){
            openItem($a);
        } else {
            closeItem($a);
        }
    });
    
    function scaleImages(){
        var height = window.innerHeight;
        height = height - ($('#accordion a').outerHeight() * $('#accordion a').length);
        $accordionItems.height(height);
        $scrolls.height(height);
        $imgs.height(Math.floor(height - 17));
    }
    
    $(window).on('resize', function() {
        scaleImages();
    });
    
    $(window).trigger('resize');

    // display the first item by default
    openItem($("#accordion a").first());

    $scrollTo = $('#scrollTo');

    $('html, body').stop().animate({
        scrollLeft: $scrollTo.offset().left
    }, 1000);
});
$(function() {
    var $accordionItems = $('#accordion div');
    var $links = $("#accordion a");
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

    function openItem($a){
        var divId = $a.attr("href");
        $(divId).slideDown('fast');        
        $a.removeClass('closed').addClass('open');
        // close all other items
        $links.not("[href='" + divId + "']").each(function(index, a){
            closeItem($(a));
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
    
    // display the first item by default
    openItem($("#accordion a").first());
});
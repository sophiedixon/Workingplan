$(function() {
    var $scroll = $('#scroll');
    var $img = $scroll.find('img');
    
    function resize(){
        var height = window.innerHeight;
        $scroll.height(height);
        $img.height(height);
    }
    
    $(window).on('resize', function() {
        resize();
    });
    
    resize();
});
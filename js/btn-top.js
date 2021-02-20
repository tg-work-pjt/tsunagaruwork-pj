jQuery(function() {
    let pagetop = $('.pagetop>a');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {  //200pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 3000); //3秒かけてトップへ移動
        return false;
    });
		

});
$(function(){
  function starImg() {
    var wScoll = $(window).scrollTop();
    $('.pic').each(function(){
      if ($(this).offset().top - $(window).height()*2/3 < wScoll) {
        $(this).addClass('lazyIn');
      }
    });
  }

  function menuClick(t){
    var className = $(t).text()
    $('.menus li').each(function(){
      $(this).removeClass('active');
    });
    $(t).addClass('active');
    if (className == 'All') {
      $('.pic').css({
        "width": "50%",
      });
    }else{
      $('.pic').css({
        "width": "0",
      });
      $("." + className).css({
        "width": "50%",
      });
    }
  }



  $('.portfolio').addClass('active');
  $('.pic').lazy({
    delay: 100,
    effect: 'fadeIn',
    effectTime: 800,
    threshold: 0,
    visibleOnly: true,
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
  });

  $('.menus li').each(function(){
    $(this).click(function(){
      menuClick($(this));
    });
  });

  $(window).scroll(function(){
    starImg();
  });
});

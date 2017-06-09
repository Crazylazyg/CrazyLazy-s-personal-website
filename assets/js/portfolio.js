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
      $('.pic').removeClass('pic-hidden');
    }else{
      $('.pic').addClass('pic-hidden');
      $("." + className).each(function(i,e){
        if (i < 2) {
          $(this).addClass('lazyIn');
        }
        $(this).removeClass('pic-hidden');
      })
    }
  }

  $('.portfolio').addClass('active');
    threshold: 0,
  // $('.pic').lazy({
  //   delay: 0,
  //   threshold: 0,
  //   onError: function(element) {
  //       console.log('error loading ' + element.data('src'));
  //   }
  // });

  $('.menus li').each(function(){
    $(this).click(function(){
      menuClick($(this));
    });
  });

  $(window).scroll(function(){
    starImg();
  });
});

$(function(){
  $('.home').addClass('active');
  $('nav').css({
    'position':'fixed',
  });

  var $scrollTime = 560,
      $blackNext = $('.next'),
      $body = $('html, body');

  function onBlackAClick (e) {
    var $this = $(this),
        href = $this.attr('href'),
        $target = $(href);

    if ($target.length > 0) {
      event.preventDefault();
      var $targetPosition = $target.offset().top - 120;
      $body.animate({
        scrollTop: $targetPosition
      }, $scrollTime);
    }
  }
  function starMovein() {
    var wScoll = $(window).scrollTop();
    $('.pic1').each(function(){
      if ($(this).offset().top - $(window).height()/3 < wScoll) {
        $(this).addClass('movein');
      }
    });
  }

  $(document).ready(function () {
    $blackNext.on('click', onBlackAClick);
    $(window).scroll(function(){
      starMovein();
    });
  });
});

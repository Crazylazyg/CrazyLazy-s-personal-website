$(function(){
  mentoringBubbleClick();
  setInterval(function() {articleTade()}, 4200);
  designBgStuff();
});

//code
(function($){
  "use strict"
  var $mobileNavBtn = $('.mobile-nav-toggle'),
      $blackATags = $('a[href^="#"]'),
      $body = $('html, body'),
      settings = {
        duration: 800
      };


  function onBtnClick (e) {
    var $this = $(this),
        $selectors = $('.mobile-nav');

    $this.toggleClass('opend');
    $selectors.toggleClass('is-open');
  }

  function onBlackAClick (e) {
    var $this = $(this),
        href = $this.attr('href'),
        $target = $(href);

    if ($target.length > 0) {
      event.preventDefault();
      $body.animate({
        scrollTop: $target.offset().top
      }, settings.duration);
    }
  }

  $(document).ready(function () {
    $mobileNavBtn.on('click', onBtnClick);
    $blackATags.on('click', onBlackAClick);
  });

})(jQuery);
// function mobileNavClick() {
//   $('.mobile-nav-toggle').on('click', function(){
//     $('.mobile-nav-toggle').toggleClass('opend');
//     $('.mobile-nav').toggleClass('is-open');
//   });
// }

function designBgStuff() {
  //.design-img hover
  $('.design-img').hover(function() {
    //find a color > apply the color to the bg
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function() {
    //of revert the color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('color-orig'));
  });
}

function articleTade() {
  var randNum = Math.floor(Math.random() * $('.articles-thumb').length) + 1;
  $('.articles-thumb').eq(randNum).addClass('is-emph').siblings().removeClass('is-emph');
}

function mentoringBubbleClick() {
  $('.face').on('click',function(){
    var $this = $(this),
        faceTop = $this.position().top,
        vertMatch = -1 * (faceTop - 252),
        faceLeft = $this.position().left,
        leftMatch = 0 - faceLeft;
    if($(window).width() > 640) {
      $this.parent().css('top', + vertMatch + "px");
    }else{
      if($this.hasClass('back-btn')) {
        mentoringNarrowStart();
      }else {
        $this.parent().css('left', + leftMatch + "px");
      }
    }
    if(!$this.hasClass('back-btn')){
      $this.addClass('bubble-open')
        .siblings().removeClass('bubble-open');
    }
  });

//When I click a face
//get the distance of the face from its parent
// move the whole container u up 115px + the  count
// add bubble-open class to the face, pop the balloon
}


$(window).scroll(function(){
  youtubeVidscroll();
  starMentoring();
  starArticles();
});

function youtubeVidscroll() {
  var wScoll = $(window).scrollTop();
  $('.pic-strip').css('background-position','center -' + wScoll +'px');
}

function starMentoring() {
  var wScoll = $(window).scrollTop();
  if ($('section.mentoring').offset().top - $(window).height()/2 < wScoll) {
    if($(window).width() > 640) {
      $('.faces').addClass('launched');
      if(!$('.face').hasClass('bubble-open')) {
        setTimeout(function(){
          $('.face:nth-child(4)').addClass('bubble-open');
        },400);
      }
    }else{
      if(!$('.face').hasClass('bubble-open')){
        mentoringNarrowStart();
      }
    }
  }
}

function starArticles() {
  var wScoll = $(window).scrollTop();

  if ($('section.articles').offset().top - $(window).height()/2 < wScoll) {
    $('.articles-thumb').each(function(i){
      setTimeout(function() {
        $('.articles-thumb').eq(i).addClass('is-visible');
      }, 280*i);
    });
  }

}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0',
    'left': '0'
  });
  $('.face:nth-child(4)').addClass('bubble-open').siblings().removeClass('bubble-open');
}

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '280px',
    'left': '0'
  });
  $('.face').first().addClass('bubble-open').siblings().removeClass('bubble-open');

}

$(window).resize(function(){
  if($(window).width() > 640) {
    mentoringWideStart();
  }else{
    mentoringNarrowStart();
  }
});

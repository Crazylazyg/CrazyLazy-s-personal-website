$(function(){
  mentoringBubbleClick();
});

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
});

function youtubeVidscroll() {
  var wScoll = $(window).scrollTop();
  $('.pic-strip').css('background-position','center -' + wScoll +'px');
}

function starMentoring() {
  var wScoll = $(window).scrollTop();
  if ($('section.mentoring').offset().top - 400 < wScoll) {
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

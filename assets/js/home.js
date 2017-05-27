$(function(){
  $('.home').addClass('active');

  var scrollTime = 900;
  $('.be1').click(function(){
    $('#be2').ScrollTo({
      duration: $(scrollTime),
    }
    );
  });

  $('.be2').click(function(){
    $('#be3').ScrollTo({
      duration: $(scrollTime),
    });
  });

  $('.be3').click(function(){
    $('#be1').ScrollTo({
      duration: $(scrollTime),
    });
  });
});

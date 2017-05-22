$(function(){
  var myVideo = document.getElementsByTagName("video");
  function playPause() {
      if (myVideo.paused)
          myVideo.play();
      else
          myVideo.pause();
  }
  // $(".hero").click(function(){
  //   playPause();
  // });
});

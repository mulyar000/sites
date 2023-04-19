jQuery(document).ready(function ($) {
      let lastSlide = 0;
      $('.mobile_menu').append($('header .container .nav').clone())
      $('.mobile_menu li').click(() => {
        $('.mobile_menu').removeClass('active')
      })
      $('.mobile_btn').click(e => $('.mobile_menu').addClass('active'))
      setInterval(function () {
         if((Date.now() - lastSlide) <= 5000) return
         if (document.hidden) return
          moveRight();
      }, 5000);
      $('.slider_prev').click(() => {
        lastSlide = Date.now()
        moveLeft()
      })
      $('.slider_next').click(() => {
        lastSlide = Date.now()
        moveRight()
      })
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
      var videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.addEventListener('click', function(){
        $('.play_btn').hide();
        this.play()
      })
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 500, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 500, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  
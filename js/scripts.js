$(window).load(function(){
  $('#splash').fadeOut(700);
  setTimeout(function(){
    $('.main').fadeTo(700, 1); 
  }, 1000);
});

$(function(){
    $(".loadType").typed({
        strings: [".^700.^700.^700."],
        typeSpeed: 0,
        backDelay: 0,
        loop: false
    });
});

$(function(){
  $(window).resize(function(){
    if($(window).innerWidth() < 761){
      $('.window-contain').css({'left': '0', 'top': '0'});
    }
  });
});

// $(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
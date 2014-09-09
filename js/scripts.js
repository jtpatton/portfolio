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

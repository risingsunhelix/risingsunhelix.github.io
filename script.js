$(function(){

  //humburger menu//
  $(".p-navBtn").on("click", function(){
       if($(this).hasClass("js-open")) {
           $(".c-navBtn").removeClass("js-open");
           $(".p-navBtn").removeClass("js-open");
           $(".p-nav--slide").removeClass("js-open");
       } else {
           // メニューを開いたら次回クリック時は閉じた状態になるよう設定
           $(".c-navBtn").addClass("js-open");
           $(".p-navBtn").addClass("js-open");
           $(".p-nav--slide").addClass("js-open");

       }
   });

//menu bgcolor control//
   $(window).scroll(function(){
  if($(this).scrollTop()<=300){
    $(".p-headerWrapper").removeClass("js-bgBlack");
    $(".js-menu--about").removeClass("js-colorNaivy");
    $(".js-menu--services").removeClass("js-colorNaivy");
    $(".js-menu--works").removeClass("js-colorNaivy");
    $(".js-menu--contact").removeClass("js-colorNaivy");
  }else if($(this).scrollTop()<600){
    $(".p-headerWrapper").addClass("js-bgBlack");
    $(".js-menu--about").addClass("js-colorNaivy");
    $(".js-menu--services").removeClass("js-colorNaivy");
    $(".js-menu--works").removeClass("js-colorNaivy");
    $(".js-menu--contact").removeClass("js-colorNaivy");
  }else if((this).scrollTop()<900){
    $(".js-menu--about").removeClass("js-colorNaivy");
    $(".js-menu--works").removeClass("js-colorNaivy");
    $(".js-menu--contact").removeClass("js-colorNaivy");
    $(".js-menu--services").addClass("js-colorNaivy");
  }else{
    $(".js-menu--about").removeClass("js-colorNaivy");
    $(".js-menu--services").removeClass("js-colorNaivy");
    $(".js-menu--works").removeClass("js-colorNaivy");
    $(".js-menu--contact").addClass("js-colorNaivy");
  }
});

//menu scroll//
  $('.js-siteLogo').click(function(){
  var about =$('.js-section--top').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  $(this).addClass("js-colorNaivy");
  $(".js-menu--about").removeClass("js-colorNaivy");
  $(".js-menu--services").removeClass("js-colorNaivy");
  $(".js-menu--works").removeClass("js-colorNaivy");
  $(".js-menu--contact").removeClass("js-colorNaivy");
  return false;
  });
  $('.js-menu--about').click(function(){
  var about =$('.js-section--about').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  $(".js-siteLogo").removeClass("js-colorNaivy");
  $(this).addClass("js-colorNaivy");
  $(".js-menu--services").removeClass("js-colorNaivy");
  $(".js-menu--works").removeClass("js-colorNaivy");
  $(".js-menu--contact").removeClass("js-colorNaivy");
  return false;
  });
  $('.js-menu--services').click(function(){
  var about =$('.js-section--services').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  $(".js-menu--siteLogo").removeClass("js-colorNaivy");
  $(this).addClass("js-colorNaivy");
  $(".js-menu--about").removeClass("js-colorNaivy");
  $(".js-menu--works").removeClass("js-colorNaivy");
  $(".js-menu--contact").removeClass("js-colorNaivy");
  return false;
  });
  $('.js-menu--works').click(function(){
  var about =$('.js-section--works').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  $(".js-siteLogo").removeClass("js-colorNaivy");
  $(this).addClass("js-colorNaivy");
  $(".js-menu--about").removeClass("js-colorNaivy");
  $(".js-menu--services").removeClass("js-colorNaivy");
  $(".js-menu--contact").removeClass("js-colorNaivy");
  return false;
  });
  $('.js-menu--contact').click(function(){
  var about =$('.js-section--contact').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  $(".js-siteLogo").removeClass("js-colorNaivy");
  $(this).addClass("js-colorNaivy");
  $(".js-menu--about").removeClass("js-colorNaivy");
  $(".js-menu--services").removeClass("js-colorNaivy");
  $(".js-menu--works").removeClass("js-colorNaivy");
  return false;
  });


});

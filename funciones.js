// funcion para menu responsive
$("#iconomenu").click(function(){
  $(".contenedor_menu").slideToggle();
});

// funcion para boton subir

$(document).ready(function(){
  $('.ir_arriba').click(function(){
      $('body, html').animate({
          scrollTop: '0px'
      }, 1000);
  });
});

// funcion para las anclas

$(function () {
  $(".btn_ancla").click(function (e) {
      e.preventDefault();
      var ancla = $(this).attr("href");
      $('html,body').animate({
          scrollTop: $(ancla).offset().top
      }, 2000);
  });
})
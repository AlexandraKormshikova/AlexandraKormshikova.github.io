$('.multiple-items').slick({
slidesToShow: 4, //сколько слайдов показывать в карусели
slidesToScroll: 1, // сколько слайдов прокручивать за раз
responsive: [
  {
    breakpoint: 900,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,}
 },{
     breakpoint: 640,
     settings: {
      slidesToShow: 2,
      slidesToScroll: 1}
 },{
     breakpoint: 440,
     settings: {
      slidesToShow: 1,
      slidesToScroll: 1
 }
}]
});

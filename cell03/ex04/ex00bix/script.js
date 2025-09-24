$(function () {
  $('#btn').on('click', function () {
   
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

   
    $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
  });
});

$(document).ready(function() {
  // all code goes in here
  // $('.box').on('click', function() {
  //   $(this).toggleClass('white');
  // })
  var color = 'white';
  var colors = 'white green red blue yellow';

  // color pixel
  $('.box').on('mouseenter', function() {
    $(this).addClass(color);
  })

  // reset pixel
  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })

  // reset button
  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })

  // colorbuttons
  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })




  })
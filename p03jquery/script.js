$(document).ready(() => {
  $('td').click(function (event) {
    alert('Sekarang Kamu berada di' + $(this).html() + '!');
  });
  $('th').click(function (event) {
    alert('Sekarang Kamu berada di' + $(this).html() + '!');
  });
});

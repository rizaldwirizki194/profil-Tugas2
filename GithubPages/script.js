$(document).ready(function () {
  var currentSection = 0;
  $('#banner').hide();
  $('li a').click(function () {
    $('li a').removeClass('menu');
    $(this).addClass('menu');

    var href = $(this).attr('href');
    $('#nagviation>div').hide();

    $(href).show();

    if (currentSection == 0) {
      $('#banner').slideToggle(200);
      currentSection = href;
    } else if (currentSection == href) {
      $('#banner').slideToggle(200);
      currentSection = 0;
    } else {
      currentSection = href;
    }
    return false;
  });
});

$(document).ready(function () {
  $('#icon').click(function () {
    $('ul').toggleClass('show');
  });
});

//open
let menuOpenBtn = document.querySelector('.navbar .fa-bars');
let closeOpenBtn = document.querySelector('.na-menu .fa-times');
let naMenu = document.querySelector('.na-menu');

menuOpenBtn.addEventListener('click', () => {
  naMenu.style.left = '0';
});
closeOpenBtn.addEventListener('click', () => {
  naMenu.style.left = '-100%';
});
//pweb
let downpweb = document.querySelector('down-pweb');
downpweb.addEventListener('click', () => {
  naMenu.classList.toggle('show1');
});

//jquery for bars

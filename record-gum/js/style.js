document.getElementById('mob_menu').onclick = function() {
  document.getElementById('mob_menu_body').classList.remove('none');
}

document.getElementById('mob_menu_close').onclick = function() {
  document.getElementById('mob_menu_body').classList.add('none');
}

window.addEventListener('scroll', function() {
  pageYOffset >= 80 ?
    document.getElementById('header').classList.add('header_black') :
    document.getElementById('header').classList.remove('header_black');
});

window.addEventListener('scroll', function() {
  let width = document.body.clientWidth;
  pageYOffset >= 400 && (width > 820) ?
    document.getElementById('over_header').classList.add('over_header_hidden') :
    document.getElementById('over_header').classList.remove('over_header_hidden');
});

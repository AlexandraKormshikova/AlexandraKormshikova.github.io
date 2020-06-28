document.getElementById('mob_menu').onclick = function() {
  document.getElementById('header_mob').classList.toggle('none');
}

document.getElementById('type_list_cols').onclick = function() {
  document.getElementById('search').classList.add('search2');
  document.getElementById('search').classList.remove('search1');
}

document.getElementById('type_list_rows').onclick = function() {
  document.getElementById('search').classList.add('search1');
  document.getElementById('search').classList.remove('search2');
}
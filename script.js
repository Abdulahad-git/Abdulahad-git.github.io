function closeNav(){
  document.getElementById("sidenav").classList.remove('side-nav')
var a = document.getElementById("sidenav").classList.toggle('side-nav-none')
console.log(a);
}

function openNav(){
  var a = document.getElementById("sidenav").classList.remove('side-nav-none')
  document.getElementById("sidenav").classList.toggle('side-nav')
  console.log(a);
  }
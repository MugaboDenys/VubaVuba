var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
if(window.pageYOffset > 100){
    nav.classList.add('bg-success', 'shadow');
}
else{
    nav.classList.remove('bg-success', 'shadow');
}
})


var modal = document.getElementById("exampleModal");

var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

// span.onclick = function() {
//   modal.style.display = "none";
// }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
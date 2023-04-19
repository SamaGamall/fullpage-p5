

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}
window.addEventListener("scroll",function(){
   var header =this.document.querySelector("header");
   header.classList.toggle("sticky",this.window.scrollY>0);
})
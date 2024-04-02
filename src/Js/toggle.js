
const menuBtn = document.getElementById("menuBtn")
const sideNav = document.getElementById("sideNav")
const menu = document.getElementById("menu")

sideNav.style.right = "-350px";

menuBtn.onclick = function() {
   if(sideNav.style.right == "-350px") {
      sideNav.style.right = "0";
      // menu.src = "../assets/close.png";
   }
   else {
      sideNav.style.right = "-350px";
      // menu.src = "../assets/menu.png";
   }
}


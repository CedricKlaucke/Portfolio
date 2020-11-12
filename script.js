// code for the sidebar
const mediaQuery = window.matchMedia('(min-width: 800px)')

function openNav() {
  document.getElementById("side-menu").style.width = "200px";
  if (mediaQuery.matches) {
    document.getElementById("content-wrap").style.marginRight = "200px";
  }
}

function closeNav() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("content-wrap").style.marginRight= "0";
}

// code for the dropdown
function myFunction() {
  document.getElementById("lang-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

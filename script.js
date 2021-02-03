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

// code for the language dropdown
function langDropdownbtn() {
  document.getElementById("lang-dropdown").classList.toggle("show");
}

window.addEventListener("click", function(event) {
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
});

// code for the sidemenu dropdown
function sideDropdownbtn() {
  document.getElementById("side-dropdown").classList.toggle("show");
}

window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("side-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

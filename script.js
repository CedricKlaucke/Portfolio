// code for the sidebar
const mediaQuery = window.matchMedia('(min-width: 600px)')

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  if (mediaQuery.matches) {
    document.getElementById("content-wrap").style.marginRight = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("content-wrap").style.marginRight= "0";
}

// code for the dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
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

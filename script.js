// Opens and closes the sidemenu
const mediaQuery = window.matchMedia('(min-width: 800px)')

function openNav() {
  document.getElementById("sideMenu").style.width = "200px";
  if (mediaQuery.matches) {
    document.getElementById("content-wrap").style.marginRight = "200px";
  }
}

function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("content-wrap").style.marginRight= "0";
}

// Opens and closes the language dropdown
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

// Opens and closes the sidemenu dropdown
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

// Opens and closes the databases dropdowns
document.addEventListener("DOMContentLoaded", function(){
  var coll = document.getElementsByClassName("databases-box");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

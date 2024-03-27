
var myMobileNavbar = document.getElementById("myMobileNavbar");
var darkenWebsite = document.getElementById("darkenWebsite");


document.getElementById("myNavBurger").addEventListener("click", function() {
  if (myMobileNavbar.style.top != "0px") {
      myMobileNavbar.style.top = "0px";
      darkenWebsite.style.visibility = "visible"
  } else {
    myMobileNavbar.style.top = "-300px";
    darkenWebsite.style.visibility = "hidden"
  }  
});


document.getElementById("darkenWebsite").addEventListener("click", function() {
    myMobileNavbar.style.top = "-300px";
    darkenWebsite.style.visibility = "hidden"
});


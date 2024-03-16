document.getElementById("toggleMenu").addEventListener("click", function() {
  var navMenu = document.getElementById("navMenu");
  var dotBigMenu = document.getElementById("dotBigMenu");
  var dotSmallMenu = document.getElementById("dotSmallMenu");
  var darkenWebsite = document.getElementById("darkenWebsite");
  
  if (navMenu.style.left === "10px") { // Überprüfen Sie, ob das Div bereits ausgeblendet ist
    navMenu.style.left = "-1000px"; // Setzen Sie die Endposition des einfliegenden Divs auf 0 (links)
    dotBigMenu.style.opacity = "0";
    dotSmallMenu.style.opacity = "0";
    darkenWebsite.style.opacity = "0";
  } else {
    navMenu.style.left = "10px"; // Setzen Sie die Startposition des einfliegenden Divs zurück
    dotBigMenu.style.opacity = "1";
    dotSmallMenu.style.opacity = "1";
    darkenWebsite.style.opacity = "0.4";
  }  
});


document.getElementById("darkenWebsite").addEventListener("click", function() {
  var darkenWebsite = document.getElementById("darkenWebsite");
  
  if (navMenu.style.left === "10px") { // Überprüfen Sie, ob das Div bereits ausgeblendet ist
    navMenu.style.left = "-1000px"; // Setzen Sie die Endposition des einfliegenden Divs auf 0 (links)
    dotBigMenu.style.opacity = "0";
    dotSmallMenu.style.opacity = "0";
    darkenWebsite.style.opacity = "0";
  } 
});


var myMobileNavbar = document.getElementById("myMobileNavbar");


document.getElementById("myNavBurger").addEventListener("click", function() {
  
  if (myMobileNavbar.style.top != "0px") { // Überprüfen Sie, ob das Div bereits ausgeblendet ist
    myMobileNavbar.style.top = "0px"; // Setzen Sie die Endposition des einfliegenden Divs auf 0 (links)
	console.log("jsdklfjlsd");
  } else {
    myMobileNavbar.style.top = "-300px"; // Setzen Sie die Startposition des einfliegenden Divs zurück

  }  
});

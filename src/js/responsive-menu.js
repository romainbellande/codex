// ==== RESPONSIVE NAVIGATION MENU ==== //

// Menu toggle script adapted from _s: https://github.com/Automattic/_s
;(function() {
  // Fonction exécutée au redimensionnement
function redimensionnement() {
  var result = document.getElementById('result');
  if("matchMedia" in window) { // Détection
    if(window.matchMedia("(min-width:620px)").matches) {
      desktop();
    } else {
      mobile();
    }
  }
}
// launch at loading
redimensionnement();
// On lie l'événement resize à la fonction
window.addEventListener('resize', redimensionnement, false);


function desktop(){
  console.log("Desktop rendering");
}

function mobile(){
  console.log("Mobile rendering");
}

} )();

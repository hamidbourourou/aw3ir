function validation() {
    
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.display = "block";
    
    document.getElementById("resultat").style.display = "none";

    if (document.getElementById("nom").value.length < 5) {
         document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
      } 
      else if (document.getElementById("prenom").value.length < 5) {
         document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
      } 
      else if (document.getElementById("Adresse").value.length < 5) {
         document.getElementById("error").innerHTML = "La saisie de l'Adresse postale est obligatoire";
      } 
      else if (document.getElementById("mail").value.length < 5) {
         document.getElementById("error").innerHTML = "La saisie de l'email est obligatoire";
      } 
      else {
        document.getElementById("error").style.display = "none";
        document.getElementById("resultat").style.display = "block";

         document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;;
        }            
  }
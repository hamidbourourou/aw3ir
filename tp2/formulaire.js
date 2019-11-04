function validation() {
    if (document.getElementById("nom").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";;
      } 
      else if (document.getElementById("prenom").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";;
      } 
      else if (document.getElementById("Adress").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie de l'Adresse postale est obligatoire";;
      } 
      else if (document.getElementById("mail").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie de l'email est obligatoire";;
      } 
      else {
        return document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;;
        }            
  }
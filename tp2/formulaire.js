function validation() {
    if (document.getElementById("nom").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";;
      } 
      if (document.getElementById("prenom").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";;
      } 
      if (document.getElementById("Adress").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie de l'Adresse postale est obligatoire";;
      } 
      if (document.getElementById("mail").value.length < 5) {
        return document.getElementById("error").innerHTML = "La saisie de l'email est obligatoire";;
      } 
      if (document.getElementById("nom").value.length >= 5 && document.getElementById("prenom").value.length >= 5 && document.getElementById("Adress").value.length >= 5 && document.getElementById("mail").value.length >= 5 ) {
        return document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;;
      


                  }            // Function returns the product of a and b
  }
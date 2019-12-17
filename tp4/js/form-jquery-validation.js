document.getElementById("form1").addEventListener("submit", function (e) {
e.preventDefault;
    var y = "https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#adresse").val() + "&zoom=12&size=200x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"
    var erreur;
    var nom = document.getElementById("name");
    var prenom = document.getElementById("firstname");
    var Adresse = document.getElementById("adresse");
    var Email = document.getElementById("mail");
    var Birth = document.getElementById("birth");

    if (!nom.value) {
        erreur = "Veuillez entrer votre nom !"
    }
    if (!prenom.value) {
        erreur = "Veuillez entrer votre prenom !"
    }
    if (!Birth.value) {
        erreur = "Veuillez entrer votre date de naissance !"
    }
    if (!Adresse.value) {
        erreur = "Veuillez entrer votre Adresse !"
    }
    if (!Email.value) {
        erreur = "Veuillez entrer votre Email !"
    }

    if (erreur) {
e.preventDefault;
document.getElementById("erreur").innerHTML=erreur; 

    }
    else {

        alert("formulaire envoyé ")



    }


}

)
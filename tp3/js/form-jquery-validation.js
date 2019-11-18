$(document).ready(function () {
    $("#mainForm").validate({
        rules: {
            "nom": {
                "required": true,
                "minlength": 3,
                "maxlength": 60000
            },
            "email": {
                "required":true,
                "email": true,
                "maxlength": 255
            },
            "prenom": {
                "required": true,
                "minlength":3
            },
            "adresse":{
                "required": true,
                "minlength":8

            },
            "date":{


            }
        },
        messages: {
            nom: <div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!
</div>,
            prenom: "Veuillez fournir un prenom d'au moins trois lettres",
            email: "L'email est incorrect",
            adresse: " Veuillez fournir une adresse valide"
        }
    })
});

jQuery(document).ready(function () {
    jQuery("#monFormulaire").validate({
        rules: {
            "nom": {
                "required": true,
                "minlength": 2,
                "maxlength": 60000
            },
            "email": {
                "email": true,
                "maxlength": 255
            },
            "prenom": {
                "required": true,
                "minlength":2
            }
        }
    })
});

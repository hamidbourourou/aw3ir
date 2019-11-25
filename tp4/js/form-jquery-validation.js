$(document).ready(function () {



    $("#form1").on("submit", function (event) {

        event.preventDefault();





        var y = "https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#adresse").val() + "&zoom=12&size=200x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"

        var x = 0;



        if ($("#name").val() == "") {

            $(".hello").text("Veuillez saisir votre Name");

            $('#myModal').modal('show');

            x = x + 1;

        }

        if ($("#firstname").val() == "") {

            $(".hello").text("Veuillez saisir votre Firstname");

            $('#myModal').modal('show');

            x = x + 1;

        }

        if ($("#birth").val() == "") {

            $(".hello").text("Veuillez saisir votre birthday");

            $('#myModal').modal('show');

            x = x + 1;



        }

        if ($("#adresse").val() == "") {

            $(".hello").text("Veuillez saisir votre Address");

            $('#myModal').modal('show');

            x = x + 1;
        }



        if (x == 0) {

            $(".modal-title").text("Welcome" + " " + $("#name").val());



            $(".modal-body").html("Vous etes nés le" + " " + $(" #birth").val() + " " + "et vous habitez" + '<img src="' + y + '"  />');



            //$(".modal-body").css('border','5px black solid') ;



            $('#myModal').modal('show');
        }









    });



    console.log("DOM ready!");





});

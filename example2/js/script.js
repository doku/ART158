$(document).ready(function(){ // Detects of the page is "ready"
<<<<<<< HEAD

=======
    
>>>>>>> master
    // Panorama effect
    $(".panorama").panorama_viewer({
        repeat: true,
        direction: "horizontal",
        animationTime: 700,
        easing: "ease-out",
        overlay: true
    });
<<<<<<< HEAD

    // Assigns a click function to anything with the the ID #pan-btn-a
    $("#pan-btn-a").click(function() {

        // Changes an attribute of an image that has the ID #pan-image
        $('#pan-image').attr('src','images/panorama1.jpg');
    });

     $("#pan-btn-b").click(function() {
        $('#pan-image').attr('src','images/panorama2.jpg');
    });
    var panImage = "images/panorama3.jpg";

    $('#pan-btn-c').click(function() {
      $('#pan-image').attr('src', panImage);

    });
    $('#pan-btn-d').click(function() {
      $('#pan-image').attr('src', "images/panorama4.jpg");

    });


});
=======
    
    // Assigns a click function to anything with the the ID #pan-btn-a
    $("#pan-btn-a").click(function() {
        
        // Changes an attribute of an image that has the ID #pan-image
        $('#pan-image').attr('src','images/panorama1.jpg');
    })
    
     $("#pan-btn-b").click(function() {
        $('#pan-image').attr('src','images/panorama2.jpg');
    })
});
>>>>>>> master

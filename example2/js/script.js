
// assignment use jquery addClass().
// use fadeIn() class
// use fadeOut() class



var panoArray= ['panorama1.jpg', 'panorama2.jpg', 'panorama3.jpg', 'panorama4.JPG'];

var callback;
$(document).ready(function(){ // Detects of the page is "ready"

    // Panorama effect
    $(".panorama").panorama_viewer({
        repeat: true,
        direction: "horizontal",
        animationTime: 700,
        easing: "ease-out",
        overlay: true
    });

    var panoArray= ['panorama1.jpg', 'panorama2.jpg', 'panorama3.jpg', 'panorama4.JPG'];

    var newPan = function(i){
      //console.log("test" + i);
      $('#pan-image').attr('src', 'images/' + panoArray[i]);


    };
    function newPan2(i){
      console.log("teststs");

    };

    callback = $.Callbacks();
    callback.add(newPan);

    var book = {
        title: "title",
        chapters: ['chapter1', "chapter2", 'chapter3', 'chapter4', 'chapter5'],
        author: "Author",
        published_date: 2001,
        publisher: "The bublisher",
        print_info: function(){
            console.log("Title: " + this.title + "\n" + "Author: " + this.author + "\n Published by: " + this.publisher);

        }
    }

    book.print_info();


/*
    //console.log(panoArray.length);
    //console.log('asdfa' + panoArray[2]);
    for(var i =0; i< panoArray.length; i++){

      console.log('image/' + panoArray[i]);
      $("#pan-btn-" + i.toString()).click(function(var i) {

        $('#pan-image').attr('src', 'images/' + panoArray[i]);
        //console.log('images/' + i + ' '  + panoArray[i]);
      });

    }

    */

    // Assigns a click function to anything with the the ID #pan-btn-a

/*
    $("#pan-btn-0").click(function() {

        // Changes an attribute of an image that has the ID #pan-image
        $('#pan-image').attr('src','images/panorama1.jpg');
    });

     $("#pan-btn-1").click(function() {
        $('#pan-image').attr('src','images/panorama2.jpg');
    });
    var panImage = "images/panorama3.jpg";

    $('#pan-btn-2').click(function() {
      $('#pan-image').attr('src', panImage);

    });
    $('#pan-btn-3').click(function() {
      $('#pan-image').attr('src', "images/panorama4.JPG");

    });
*/


});

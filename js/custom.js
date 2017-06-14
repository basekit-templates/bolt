// Makes the whole ecom product tiles clickable
$(document).ready(function() {

    $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });

    $('.product-item').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });

    // Adds variation class when there is only one product image

    if($(".ecomproduct__product-gallery").length == 0)
    {
       $("body").addClass("product-one-image");
    }

    // Next Button for ecom gallery
    $('.product-gallery').each(function() {
      var max = 5;
      if ($(this).find("li.gallery-item").length > max) {
        $(this).addClass("hiding");

        $(this)
            .find('li.gallery-item:gt('+max+')')
            .hide()
            .end()
            .append(
                $('<li class="ecom-view-more" id="ecomscroll" href="#">&gt;</li>').click( function(){
                $(this).siblings(':hidden').show().end();
            })
            );
      }
    });
});

// Toggles class open to display/hide the whole navigation
$( ".nav-toggle" ).click(function() {
    $( "body" ).toggleClass( "nav-open" );
});

function closeEverything() {
    $( ".widget__extendednavigation" ).removeClass( "open" );;
    $( "body" ).removeClass( "basket-open" );
    $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
    $( ".navigation-item.folder" ).removeClass( "open" );
}


// On ESC key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeEverything();
    }
};
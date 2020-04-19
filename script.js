window.onscroll = function () {
    myFunction();
};

function set() {
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementsByTagName("HTML")[0];
    x.style.overflow = "hidden";
    y.style.overflow = "hidden";
    specs();
}
function myFunction() {
    var nav = document.getElementById("nav");
    var offset = $("#apex").offset();
    var g = offset.top;
    nav.style.transition = "all 1s";
    if (window.pageYOffset > 90) {
        nav.style.bottom = "0px"
    } else {
        nav.style.bottom = "-100px"
    }
}
function sho() {
    var $all_msg = $('#welcome_msg');

    var $wordList = $('#welcome_msg').text().split("");

    $('#welcome_msg').text("");

    $.each($wordList, function (idx, elem) {
        var newEL = $("<span/>").text(elem).css({
            opacity: 1
        });

        newEL.appendTo($all_msg);

        newEL.delay(idx * 70);

        newEL.animate({
            opacity: 1
        }, 1100);

    });
}
// $.fn.hScroll = function( options )
//  {
//    function scroll( obj, e )
//    {
//      var evt = e.originalEvent;
//      var direction = evt.detail ? evt.detail * (-120) : evt.wheelDelta;

//      if( direction > 0)
//      {
//         direction =  $(obj).scrollLeft() - 120;
//      }
//      else
//      {
//         direction = $(obj).scrollLeft() + 120;
//      }

//      $(obj).scrollLeft( direction );

//      e.preventDefault();
//    }

//    $(this).width( $(this).find('div').width() );

//    $(this).bind('DOMMouseScroll mousewheel', function( e )
//    {
//     scroll( this, e );
//    });
// }
// $(document).ready(function(){
//     $('#scrolla').hScroll(); // You can pass (optionally) scrolling amount
// });
window.addEventListener("load", function () {
    document.getElementById("mata").innerHTML = "Loaded";
    $("#shapes").hide(1000);
    var fg = document.getElementById("foot")
    fg.style.transition = "all 0.5s";
    fg.style.bottom = "45vh";
    document.getElementById("foot").innerHTML = "Loaded";
    setTimeout(function () {
        $("#loading").css('transform', 'scale(15)').hide(1000);
    }, 1000);
})
function specs() {
    var s = document.getElementById('sp');
    var d = document.getElementById('dev');
    d.style.display = "none";
    // $(s).show(1000)
    s.style.display = "inline"; 
}
function dev() {
    var s = document.getElementById('sp');
    var d = document.getElementById('dev');
    // $(d).show(4000)
    d.style.display = "inline";
    s.style.display = "none";
}
function start() {
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementsByTagName("HTML")[0];

    y.style.overflow = "auto";
    if (document.getElementById("click").innerHTML === "Play") {
        var x = document.getElementsByTagName("BODY")[0];
        var y = document.getElementsByTagName("HTML")[0];

        y.style.overflow = "scroll";
        document.getElementById("click").style.transition = "all 0.5s";
        document.getElementById("click").innerHTML = "Scroll Unlocked!";
        if ($('#achiv').css('opacity') == 0) {
            $('#achiv').css('opacity', 1);
            setTimeout(function () {
                $('#icon').css('opacity', 1);
            }, 500);
            setTimeout(function () {
                $('#text').append(" Scroll Unlocked").slideDown(1000);
            }, 1000);
        }
        setTimeout(() => {
            $('#achiv').css('opacity', 0);
        }, 2000);
        // scroll()
    }

}
function scroll() {
    var offset = $("#apex").offset();
    var g = offset.top;
    setTimeout(() => {
        window.scrollTo({
            top: g,
            behavior: 'smooth',
        })
    }, 2000);
    action();
}
function action() {

}

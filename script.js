window.onscroll = function () {
    myFunction();
};

function set() {
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementsByTagName("HTML")[0];
    x.style.overflow = "hidden";
    y.style.overflow = "hidden";
}
function myFunction() {
    var nav = document.getElementById("nav");
    var offset = $("#apex").offset();
    var g = offset.top;
    nav.style.transition= "all 1s";
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
function start() {
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementsByTagName("HTML")[0];

    y.style.overflow = "scroll";
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
                $('#text').append(" Achivement Unlocked").slideDown(1000);
            }, 1000);
        }
        setTimeout(() => {
            $('#achiv').css('opacity', 0);
        }, 2000);
        scroll()
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

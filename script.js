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
    var gpad = document.getElementById("#game");


    if (window.pageYOffset > 1) {


    } else {
        document.getElementById("navis").style.transition = "all 0.5s";
        document.getElementById("ncons").style.transition = "all 0.5s";
        document.getElementById("ncon2s").style.transition = "all 0.5s";
        document.getElementById("navis").style.top = "-100px";
        document.getElementById("ncons").style.top = "-100px";
        document.getElementById("ncon2s").style.top = "-100px";
    }
}

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
        // document.getElementById('text').style.transition = "all 1s";
        // document.getElementById('text').innerHTML += " Achivement Unlocked";

        // $('#text').delay(1000).append(" Achivement Unlocked").fadeIn(1000);
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

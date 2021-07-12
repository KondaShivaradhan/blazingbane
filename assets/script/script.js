function set() {
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementsByTagName("HTML")[0];
    x.style.overflow = "hidden";
    y.style.overflow = "hidden";
}


function start() {
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementsByTagName("HTML")[0];
    if (document.getElementById("click").innerHTML === "Play") {
        var x = document.getElementsByTagName("BODY")[0];
        var y = document.getElementsByTagName("HTML")[0];
        y.style.overflow = "scroll";
        document.getElementById("click").style.transition = "all 0.5s";
        document.getElementById("click").innerHTML = "Scroll Unlocked!";
        if ($('#achiv').css('opacity') == 0) {
            $('#achiv').css('opacity', 1);
            setTimeout(function() {
                $('#icon').css('opacity', 1);
            }, 100);
            setTimeout(function() {
                $('#text').append(" Scroll Activated").slideDown(1000);
            }, 500);
        }

    }
}
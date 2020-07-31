window.onscroll = function() {
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
    var text = document.getElementById("check")
        // var s = window.pageYOffset
    var tt = $(text).offset();
    var f = $("#footer").offset();
    var temp = $("#temp").offset();
    var bf = $('#battlefield').offset();
    var specs = $('#apex').offset();
    // console.log('foter starts at ' + f.top + " calculated scroll is " + (f.top - (tt.top)) + " scroll is at " + s)

    if ((bf.top - tt.top) < 0) {
        text.innerHTML = "Battlefield"
    } else {
        text.innerHTML = "Intro"
    }
    if ((specs.top - tt.top) < 0) {
        text.innerHTML = "Specs"
    }
    if ((temp.top - tt.top) < 0) {
        text.innerHTML = "temp"
    }
    if ((f.top - tt.top) < 0) {
        text.innerHTML = "footer"
    }
}


window.addEventListener("load", function() {
    document.getElementById("mata").innerHTML = "Loaded";
    setTimeout(function() {
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
            setTimeout(function() {
                $('#icon').css('opacity', 1);
            }, 500);
            setTimeout(function() {
                $('#text').append(" Scroll Activated").slideDown(1000);
            }, 1000);
        }
        setTimeout(() => {
            $('#achiv').css('opacity', 0);
        }, 2000);
    }
}
let header_container = $("#container")
setInterval(function() {
    if (jQuery(window).scrollTop() <= 500) {
        document.getElementById("container").style.background = "transparent"
        document.getElementById("container").style.boxShadow = "none"
        document.getElementById("container").style.transition = "0.5s"
    } else {
        document.getElementById("container").style.background = "#fff"
        document.getElementById("container").style.boxShadow = "0px 7px 30px #76767680"
        document.getElementById("container").style.transition = "0.5s"
    }
}, 30)
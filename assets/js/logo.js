let d = document.getElementById("d")
let k = document.getElementById("k")
let logo = document.getElementById("logo")

function update_sizes() {
    logo.style.height = logo.clientWidth + "px";
    root.style.setProperty("--logo-font-size", (logo.clientWidth / 2.1) + "px")
        // d.style.fontSize = (logo.clientWidth / 2.1) + "px";
        // d.style.textShadow = (logo.clientWidth / 10) + " " + (logo.clientWidth / 10) + " " + (logo.clientWidth / 12) + "#9191916b";
        // k.style.fontSize = (logo.clientWidth / 2.1) + "px";
        // k.style.textShadow = (logo.clientWidth / 10) + " " + (logo.clientWidth / 10) + " " + (logo.clientWidth / 12) + "#9191916b";
}


let logo_size_interval = setInterval(function() {
    update_sizes();
}, 300);
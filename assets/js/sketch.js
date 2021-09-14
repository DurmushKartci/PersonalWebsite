let header_container = document.getElementById("container")
let header_title = document.getElementById("title")
let header_media = document.getElementById("media")
let header_menu = document.getElementById("menu")
let header_links = document.querySelectorAll("li")
let titles_h1 = document.querySelectorAll("h1")
let theme_button = document.getElementById("theme")
let theme_icon = document.getElementById("theme_icon")
let main_color_button = document.getElementById("main-color")
let point = document.getElementById("point")
let body = document.querySelector("body")
let main_color_changer_red = document.getElementById("red")
let main_color_changer_green = document.getElementById("green")
let main_color_changer_blue = document.getElementById("blue")
let cursor = document.getElementById("cursor")

//true --> dark || false --> light
let theme_state = true;
let root = document.documentElement;


///////////////////// MAİN /////////////////////////// 

window.addEventListener("mousemove", update_cursor)
header_links.forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("link-grow")
        point.style.border = "0.5px solid var(--theme-font-color)";
    })
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("link-grow")
        point.style.background = "var(--main-color)";
        point.style.border = "none";

    })
})
titles_h1.forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("link-grow")
        point.style.border = "0.5px solid var(--theme-font-color)";

    })
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("link-grow")
        point.style.background = "var(--main-color)";
        point.style.border = "none";
    })
})

set_theme_dark(root, "#010409", "#f0f6fc")
theme_button.onclick = function() {
    if (theme_state == true) {
        set_theme_dark(root, "#010409", "#f0f6fc")
        theme_state = false;
    } else if (theme_state == false) {
        set_theme_light(root, "#fff", "#000")
        theme_state = true;
    } else {
        alert("TEMA ERROR CODE : ER0000 ")
    }
}

main_color_changer_red.oninput = () => {
    set_main_color(root, main_color_changer_red.value, main_color_changer_green.value, main_color_changer_blue.value);
}

main_color_changer_blue.oninput = () => {
    set_main_color(root, main_color_changer_red.value, main_color_changer_green.value, main_color_changer_blue.value);
}

main_color_changer_green.oninput = () => {
    set_main_color(root, main_color_changer_red.value, main_color_changer_green.value, main_color_changer_blue.value);
}



/////////////////////* MAİN ///////////////////////////

///////////////////// FUNCTIONS /////////////////////////// 

function set_main_color(root, red, green, blue) {
    root.style.setProperty("--main-color", "rgb(" + red + "," + green + "," + blue + ")")
}

function update_cursor(e) {
    cursor.style.top = (e.clientY - cursor.clientHeight / 2) + "px";
    cursor.style.left = (e.clientX - cursor.clientWidth / 2) + "px";
    point.style.top = (e.clientY - point.clientHeight / 2) + "px";
    point.style.left = (e.clientX - point.clientWidth / 2) + "px";
}

function set_theme_light(root, theme_color, font_color) {
    theme_icon.className = "fas fa-moon"
    root.style.setProperty("--theme-color", theme_color);
    root.style.setProperty("--theme-font-color", font_color);
}

function set_theme_dark(root, theme_color, font_color) {
    theme_icon.className = "fas fa-sun"
    root.style.setProperty("--theme-color", theme_color);
    root.style.setProperty("--theme-font-color", font_color);
}

function set_slider_background_img(div, image_url) {
    div.style.background = 'url("' + image_url + '")';
    div.style.backgroundSize = "contain"
    div.style.backgroundPosition = "center";
    div.style.backgroundRepeat = "no-repeat"
}

/////////////////////* FUNCTIONS /////////////////////////// 

setInterval(function() {
    if (jQuery(window).scrollTop() <= 100) {
        header_container.style.background = "transparent"
        header_container.style.boxShadow = "none"
        header_container.style.transition = "0.5s"
        header_title.style.opacity = "0"
        header_title.style.transition = "0.5s"
        header_media.style.opacity = "1"
        header_media.style.transition = "1.5s"
        header_menu.style.opacity = "1"
        header_menu.style.transition = "1.5s"
    } else if (jQuery(window).scrollTop() <= 500) {
        header_container.style.background = "transparent"
        header_container.style.boxShadow = "none"
        header_container.style.transition = "0.5s"
        header_title.style.opacity = "0"
        header_title.style.transition = "0.5s"
        header_media.style.opacity = "0"
        header_media.style.transition = "0.5s"
        header_menu.style.opacity = "0"
        header_menu.style.transition = "0.5s"
    } else {
        header_container.style.background = "var(--theme-color)"
        header_container.style.boxShadow = "0px 7px 30px #76767680"
        header_container.style.transition = "0.5s"
        header_title.style.opacity = "1"
        header_title.style.transition = "1.5s"
        header_media.style.opacity = "1"
        header_media.style.transition = "1.5s"
        header_menu.style.opacity = "1"
        header_menu.style.transition = "1.5s"
    }
}, 30)
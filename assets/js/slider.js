let slider_image_div = document.getElementById("slider-image-div");
let images_urls = ["./assets/images/slider/zuko.png", "./assets/images/slider/dragon.png"]
let image_index = 0;
setInterval(() => {
    if (images_urls[image_index].includes("/assets/images/slider/dragon"))
        slider_image_div.style.transform = "scaleX(-1)"
    else
        slider_image_div.style.transform = "scaleX(1)"
    set_slider_background_img(slider_image_div, images_urls[image_index])
    image_index += 1;
    if (image_index + 1 > images_urls.length)
        image_index = 0
}, 5000)
let slider_image_div = document.getElementById("slider-image-div");
let images_urls = ["./assets/images/slider/zuko.png", "./assets/images/slider/dragon.png"]
let image_index = 0;
setInterval(() => {
    set_slider_background_img(slider_image_div, images_urls[image_index])
    image_index += 1;
    if (image_index + 1 > images_urls.length)
        image_index = 0
}, 10000)
let intIndex = 0;

function showImage() {
    intIndex++;

    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");

    for (let n = 0; n < images.length; n++) {
        images[n].style.display = "none";
        dots[n].classList.remove("active");
    }

    if (intIndex > images.length - 1) {
        intIndex = 0;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].classList.add("active");
}

window.onload = function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
    setInterval(showImage, 5000);
}

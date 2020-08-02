
var create_carousel = (function (window) {

    var init = function () {
        var i;
        var slides = document.getElementsByClassName("carousel_img");
        var dots = document.getElementsByClassName("carousel_dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" carousel_active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " carousel_active";
        setTimeout(init, 2000); // Change image every 2 seconds
    }

    // Expose methods.
    return {
        init: init
    };

})(window);

// Kickstart Demo.
window.onload = create_carousel.init;

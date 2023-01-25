const config = {
    //autoload off type: boolean
    autoload: false,
    //Visible elements type: number
    itemsToBeVisible: 3,
};

//Entry point
function start() {
    window.onload = function () {
        const nextSlideButton = document.getElementById("next-slide");

        nextSlideButton.addEventListener("click", () => {
            navigate("forward", config);
        });
    };
}

//Performs the sliding behavior of items.
function navigate(position, config) {
    const carouselEl = document.getElementById("carousel");
    const slideContainerEl = carouselEl.querySelector(".carousel__container");
    const slideEl = carouselEl.querySelector(".carousel__slide");
    let slideWidth = slideEl.offsetWidth;
    slideContainerEl.scrollLeft = this.getNewScrollPosition(
        position,
        slideContainerEl,
        slideWidth,
        config
    );
}

//new scroll position.
function getNewScrollPosition(position, slideContainerEl, slideWidth, config) {
    const maxScrollLeft =
        slideContainerEl.scrollWidth - slideWidth * config.itemsToBeVisible;
    if (position === "forward") {
        const x = slideContainerEl.scrollLeft + slideWidth;
        return x <= maxScrollLeft ? x : 0;
    } else {
        const x = slideContainerEl.scrollLeft - slideWidth;
        return x >= 0 ? x : maxScrollLeft;
    }
}

start();

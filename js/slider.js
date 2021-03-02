document.addEventListener('DOMContentLoaded', function () {

    const cb = function (element, isIntersecting) {
        if(isIntersecting) {
            element.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.title-slider', cb,{once:true});
});

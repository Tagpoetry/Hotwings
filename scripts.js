// active carousel navigation
@for $i from 1 through map_get($css-carousel, slides) {
    #carousel-#{$i}:checked ~ .carousel-nav label[for="carousel-#{$i}"] {
        background-color: #fff;
    }
}
 
// active carousel slides
@for $i from 1 through map_get($css-carousel, slides) {
    #carousel-#{$i}:checked ~ .carousel-slides .carousel-inner {
        margin-left: (-100% * ($i - 1));
    }
}









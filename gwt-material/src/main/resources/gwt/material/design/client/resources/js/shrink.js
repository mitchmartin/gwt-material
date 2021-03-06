function initShrink(selector, offset) {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = offset;
    if (distanceY > shrinkOn) {
      $(selector).addClass("smaller");
    } else {
      if ($(selector).hasClass("smaller")) {
        $(selector).removeClass("smaller");
      }
    }
  });
}
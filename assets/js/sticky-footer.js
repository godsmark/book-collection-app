  // sticky footer
$(document).ready(function() {
 
 var docHeight = $(window).height();
 var footerHeight = $('footer').height();
 var footerTop = $('footer').position().top + footerHeight;
 
 if (footerTop < docHeight) {
  $('footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
 }

});

// masonry 
var container = document.querySelector('.books-index');

var msnry = new Masonry( container, {
  // options
  "gutter": 0
});
         
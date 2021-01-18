function anchorFix(x) {
  if (x.matches) {
      (function($, window) {
          var adjustAnchor = function() {
              var $anchor = $(':target'),
              fixedElementHeight = 54;
              if ($anchor.length > 0) {
                  window.scrollTo(0, $anchor.offset().top - fixedElementHeight);
              }
          };
          $(window).on('hashchange load', function() {
              adjustAnchor();
          });
      })(jQuery, window);
  } else {
      (function($, window) {
          var adjustAnchor = function() {
              var $anchor = $(':target'),
              fixedElementHeight = 4;
              if ($anchor.length > 0) {
                  window.scrollTo(0, $anchor.offset().top - fixedElementHeight);
              }
          };
          $(window).on('hashchange load', function() {
              adjustAnchor();
          });
      })(jQuery, window);
    }
}
var x = window.matchMedia("(max-width: 992px)")
anchorFix(x)
x.addListener(anchorFix)

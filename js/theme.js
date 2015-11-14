(function ($) {
  /**
   * Swap out svg files for PNGs on unsupporting devices. Modrnizr determines
   * what an unsupporting device is by adding the .no-svg class to the html
   * tag.
   */
  function svgToPng() {
    $('.no-svg .js__svg-image').each(function() {
      var src = $(this).attr('src');
      src = src.replace("svg", "png");
      $(this).attr('src', src);
    });
  }

  /**
   * Gives each bootstrap tab a unique URL.
   */
  var hash = document.location.hash;
  var prefix = "tab-";
  if (hash) {
    $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
  }
  // Change hash for page-reload
  $('.nav-tabs a').on('shown.bs.tab', function(e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
    var width = $(window).width();
    navHeight(width);
  });

  /**
   * Stuff to run immediately upon page load
   */
  svgToPng();

  /**
   * Stuff to run on resize.
   */
  $(window).resize(function() {
    waitForFinalEvent(function() {
      var width = $(window).width();
      // Place functions here
    }, 500, "");
  });

  /**
   * Stuff to run after page load is complete.
   */
  $(document).ready(function() {
    // Place functions here
  });

  /**
   * Helper function to delay firing resize events until the user actually
   * stops resizing their browser.
   */
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

}(jQuery));


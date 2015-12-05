window.common = (function({ common = { init: [] }}) {

  common.lockTop = function lockTop() {
    var magiVal;

    if ($(window).width() >= 990) {
      if ($('.editorScrollDiv').html()) {

        magiVal = $(window).height() - $('.navbar').height();

        if (magiVal < 0) {
          magiVal = 0;
        }
        $('.editorScrollDiv').css('height', magiVal - 85 + 'px');
      }

      magiVal = $(window).height() - $('.navbar').height();

      if (magiVal < 0) {
        magiVal = 0;
      }

      $('.scroll-locker')
        .css('min-height', $('.editorScrollDiv').height())
        .css('height', magiVal - 50);
    } else {
      $('.editorScrollDiv').css('max-height', 500 + 'px');

      $('.scroll-locker')
        .css('position', 'inherit')
        .css('top', 'inherit')
        .css('width', '100%')
        .css('max-height', '100%');
    }
  };

  common.init.push(function($) {
    // fakeiphone positioning hotfix
    if (
      $('.iphone-position').html() ||
      $('.iphone').html()
    ) {
      var startIphonePosition = parseInt(
        $('.iphone-position')
          .css('top')
          .replace('px', ''),
        10
      );

      var startIphone = parseInt(
        $('.iphone')
          .css('top')
          .replace('px', ''),
        10
      );

      $(window).on('scroll', function() {
        var courseHeight = $('.courseware-height').height();
        var courseTop = $('.courseware-height').offset().top;
        var windowScrollTop = $(window).scrollTop();
        var phoneHeight = $('.iphone-position').height();

        if (courseHeight + courseTop - windowScrollTop - phoneHeight <= 0) {
          $('.iphone-position').css(
            'top',
            startIphonePosition +
              courseHeight +
              courseTop -
              windowScrollTop -
              phoneHeight
          );

          $('.iphone').css(
            'top',
            startIphonePosition +
              courseHeight +
              courseTop -
              windowScrollTop -
              phoneHeight +
              120
          );
        } else {
          $('.iphone-position').css('top', startIphonePosition);
          $('.iphone').css('top', startIphone);
        }
      });
    }

    if ($('.scroll-locker').html()) {

      if ($('.scroll-locker').html()) {
        common.lockTop();
        $(window).on('resize', function() {
          common.lockTop();
        });
        $(window).on('scroll', function() {
          common.lockTop();
        });
      }

      var execInProgress = false;

      // why is this not $???
      document
        .getElementById('scroll-locker')
        .addEventListener(
          'previewUpdateSpy',
          function(e) {
            if (execInProgress) {
              return null;
            }
            execInProgress = true;
            setTimeout(function() {
              if (
                $($('.scroll-locker').children()[0]).height() - 800 > e.detail
              ) {
                $('.scroll-locker').scrollTop(e.detail);
              } else {
                var scrollTop = $($('.scroll-locker').children()[0]).height();

                $('.scroll-locker').animate({ scrollTop: scrollTop }, 175);
              }
              execInProgress = false;
            }, 750);
          },
          false
        );
    }
  });

  return common;
}(window));

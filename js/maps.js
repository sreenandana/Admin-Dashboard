if ($("#map").length) {
    var map;
  
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: -34.397,
          lng: 150.644
        },
        zoom: 8
      });
    }
  }
/*hoverable collapse */
  (function($) {
    'use strict';
    $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function (ev) {
        var body = $('body');
        var sidebarIconOnly = body.hasClass("sidebar-icon-only");
        if(!('ontouchstart' in document.documentElement)) {
          if(sidebarIconOnly) {
            var $menuItem = $(this),
            $menuTitle = $('.menu-title', $menuItem),
            $submenuWrapper = $('> .collapse', $menuItem);
            if(ev.type === 'mouseenter') {
              $menuTitle.addClass('show');
              $submenuWrapper.addClass('show');
            }
            else {
              $menuTitle.removeClass('show');
              $submenuWrapper.removeClass('show');
            }
          }
        }
  
    });
  })(jQuery);
    /*misc */
    (function($) {
        'use strict';
        $(function() {
          // $('#sidebar .nav').perfectScrollbar();
          $('.container-scroller').perfectScrollbar( {suppressScrollX: true});
          $('[data-toggle="minimize"]').on("click", function () {
            $('body').toggleClass('sidebar-icon-only');
          });
        });
      
        $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
      })(jQuery);

        /*off canvas */
        (function($) {
            'use strict';
            $(function() {
              $('[data-toggle="offcanvas"]').on("click", function () {
                $('.row-offcanvas').toggleClass('active')
              });
            });
          })(jQuery);
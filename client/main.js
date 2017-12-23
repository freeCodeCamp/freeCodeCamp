var main = window.main || {};

main.ga = window.ga || function() {};

main = (function(main, global) {
  const { Mousetrap } = global;

  // should be set before gitter script loads
  ((window.gitter = {}).chat = {}).options = {
    disableDefaultChat: true
  };
  // wait for sidecar to load

  main.chat = {};
  main.chat.isOpen = false;
  main.chat.createHelpChat = function createHelpChat() {
    throw new Error('Sidecar chat has not initialized');
  };

  document.addEventListener('gitter-sidecar-ready', function(e) {
    main.chat.GitterChat = e.detail.Chat;

    main.chat.createHelpChat = function(room, helpChatBtnClass, roomTitle) {
      // room is always in PascalCase
      roomTitle = room
        .replace(/([A-Z])/g, ' $1')
        .replace('Java Script', 'JavaScript');

      $('body').append(
        '<aside id="chat-embed-help" class="gitter-chat-embed is-collapsed" />'
      );

      main.chat.helpChat = new main.chat.GitterChat({
        room: `freecodecamp/${room}`,
        activationElement: false,
        targetElement: $('#chat-embed-help')
      });

      $(helpChatBtnClass).on('click', function() {
        // is button already pressed?
        // no? open chat
        // yes? close chat
        var shouldChatBeOpen = !$(this).hasClass('active');
        main.chat.helpChat.toggleChat(shouldChatBeOpen);
        if (shouldChatBeOpen) {
          $(helpChatBtnClass).addClass('active');
        }
      });

      var helpTitleAdd = false;
      $('#chat-embed-help').on('gitter-chat-toggle', function(e) {
        var shouldButtonBePressed = !!e.originalEvent.detail.state;

        if (!helpTitleAdd) {
          helpTitleAdd = true;
          $('#chat-embed-help > .gitter-chat-embed-action-bar').prepend(
            '<div class="chat-embed-main-title">' +
              '<span>' +
                roomTitle +
              '</span>' +
            '</div>'
          );
        }

        if (shouldButtonBePressed) {
          return $(helpChatBtnClass).addClass('active');
        }
        return $(helpChatBtnClass).removeClass('active');
      });
    };

    $('body').append(
      '<aside id="chat-embed-main" class="gitter-chat-embed is-collapsed" />'
    );

    main.chat.mainChat = new main.chat.GitterChat({
      room: 'freecodecamp/freecodecamp',
      activationElement: false,
      targetElement: $('#chat-embed-main')
    });

    var mainChatTitleAdded = false;
    $('#chat-embed-main').on('gitter-chat-toggle', function() {
      if (mainChatTitleAdded) {
        return null;
      }
      mainChatTitleAdded = true;
      if ($('body').hasClass('night')) {
        $('#chat-embed-main').addClass('night');
      }
      $('#chat-embed-main > .gitter-chat-embed-action-bar').prepend(
        '<div class="chat-embed-main-title">' +
          '<span>Free Code Camp\'s Main Chat</span>' +
        '</div>'
      );
      return null;
    });


    $('#nav-chat-btn').on('click', function(event) {
      if (!(event.ctrlKey || event.metaKey)) {
          toggleMainChat();
      }
      window.ga('send', 'event', 'Nav', 'clicked', 'Nav chat opened');
  });

    function showMainChat() {
      if (!main.chat.isOpen) {
        main.chat.mainChat.toggleChat(true);
      }
    }

    function collapseMainChat() {
      $('#chat-embed-main').addClass('is-collapsed');
      document.activeElement.blur();
    }

    function toggleMainChat() {
      var isCollapsed = $('#chat-embed-main').hasClass('is-collapsed');

      if (isCollapsed) {
        showMainChat();
      } else {
        collapseMainChat();
      }
    }

    // keyboard shortcuts: open main chat
    Mousetrap.bind('g c', toggleMainChat);
  });

  return main;
}(main, window));

$(document).ready(function() {

  const { Observable } = window.Rx;
  var CSRF_HEADER = 'X-CSRF-Token';

  var setCSRFToken = function(securityToken) {
    jQuery.ajaxPrefilter(function(options, _, xhr) {
      if (!xhr.crossDomain) {
        xhr.setRequestHeader(CSRF_HEADER, securityToken);
      }
    });
  };

  setCSRFToken($('meta[name="csrf-token"]').attr('content'));

  $('img').error(function() {
    $(this)
      .unbind('error')
      .attr(
        'src',
        'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png'
      );
  });

  $.each($('.sr-only'), function(i, span) {
    if ($(span).text() === ' Complete') {
      $(span).parents('p').addClass('manip-hidden');
    }
  });

  function addAlert(message = '', type = 'alert-info') {
    return $('.flashMessage').append($(`
      <div class='alert ${type}'>
        <button class='close' type='button', data-dismiss='alert'>
          <span class='ion-close-circled' />
        </Button>
        <div>${message}</div>
      </div>
    `));
  }

  function toggleNightMode() {
    if (!main.userId) {
      return addAlert('You must be logged in to use our themes.');
    }
    const iframe$ = document.getElementById('map-aside-frame');
    const body$ = $('body');
    if (iframe$) {
      iframe$.src = iframe$.src;
    }
    body$.hide();
    let updateThemeTo;
    if (body$.hasClass('night')) {
      body$.removeClass('night');
      updateThemeTo = 'default';
    } else {
      body$.addClass('night');
      updateThemeTo = 'night';
    }
    body$.fadeIn('100');
    const options = {
      url: `/api/users/${main.userId}/update-theme`,
      type: 'POST',
      data: { theme: updateThemeTo },
      dataType: 'json'
    };
    return $.ajax(options)
      .success(() => console.log('theme updated successfully'))
      .fail(err => {
        let message;
        try {
          message = JSON.parse(err.responseText).error.message;
        } catch (error) {
          return null;
        }
        if (!message) {
          return null;
        }
        return addAlert(message);
      });
  }

  Observable.merge(
    Observable.fromEvent($('#night-mode'), 'click'),
    Observable.create(observer => {
      window.Mousetrap.bind('g t n', () => observer.onNext());
    })
  )
    .debounce(500)
    .subscribe(toggleNightMode, err => console.error(err));

  // Hot Keys
  window.Mousetrap.bind('g n n', () => {
    // Next Challenge
    window.location = '/challenges/next-challenge';
  });
  window.Mousetrap.bind('g n m', () => {
    // Map
    window.location = '/map';
  });
  window.Mousetrap.bind('g n a', () => {
    // About
    window.location = '/about';
  });
  window.Mousetrap.bind('g n s', () => {
    // Shop
    window.location = '/shop';
  });
  window.Mousetrap.bind('g n o', () => {
    // Settings
    window.location = '/settings';
  });
  window.Mousetrap.bind('g n r', () => {
    // Repo
    window.location = 'https://github.com/freecodecamp/freecodecamp/';
  });

  (function getFlyer() {
    const flyerKey = '__flyerId__';
    $.ajax({
      url: '/api/flyers/findOne',
      method: 'GET',
      dataType: 'JSON',
      data: { filter: { order: 'id DESC' } }
    })
    // log error
    .fail(err => console.error(err))
    .done(flyer => {
      const lastFlyerId = localStorage.getItem(flyerKey);
      if (
        !flyer ||
        !flyer.isActive ||
        lastFlyerId === flyer.id
      ) {
        return;
      }
      $('#dismiss-bill').on('click', () => {
        localStorage.setItem(flyerKey, flyer.id);
      });
      $('#bill-content').html(flyer.message);
      $('#bill-board').fadeIn();
    });
  }());
});

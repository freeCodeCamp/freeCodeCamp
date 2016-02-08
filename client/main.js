var main = window.main || {};

main.mapShareKey = 'map-shares';

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

      $('#chat-embed-main > .gitter-chat-embed-action-bar').prepend(
        '<div class="chat-embed-main-title">' +
          '<span>Free Code Camp\'s Main Chat</span>' +
        '</div>'
      );
    });


    $('#nav-chat-btn').on('click', toggleMainChat);

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

var lastCompleted = typeof lastCompleted !== 'undefined' ?
  lastCompleted :
  '';

main.getMapShares = function getMapShares() {
  var alreadyShared = JSON.parse(
    localStorage.getItem(main.mapShareKey) ||
    '[]'
  );

  if (!alreadyShared || !Array.isArray(alreadyShared)) {
    localStorage.setItem(main.mapShareKey, JSON.stringify([]));
    alreadyShared = [];
  }
  return alreadyShared;
};

main.setMapShare = function setMapShare(id) {
  var alreadyShared = main.getMapShares();
  var found = false;
  alreadyShared.forEach(function(_id) {
    if (_id === id) {
      found = true;
    }
  });
  if (!found) {
    alreadyShared.push(id);
  }
  localStorage.setItem(main.mapShareKey, JSON.stringify(alreadyShared));
  return alreadyShared;
};

$(document).ready(function() {

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

  function upvoteHandler(e) {
    e.preventDefault();
    var upvoteBtn = this;
    var id = upvoteBtn.id;
    var upVotes = $(upvoteBtn).data().upVotes;
    var username = typeof username !== 'undefined' ? username : '';
    var alreadyUpvoted = false;
    for (var i = 0; i < upVotes.length; i++) {
      if (upVotes[i].upVotedBy === username) {
        alreadyUpvoted = true;
        break;
      }
    }
    if (!alreadyUpvoted) {
      $.post('/stories/upvote', { id: id })
        .fail(function() {
          $(upvoteBtn).bind('click', upvoteHandler);
        })
        .done(function(data) {
          $(upvoteBtn)
            .text('Upvoted!')
            .addClass('disabled');

          $('#storyRank').text(data.rank + ' points');
        });
    }
  }

  $('#story-list').on('click', 'button.btn-upvote', upvoteHandler);

  var storySubmitButtonHandler = function storySubmitButtonHandler() {

    if (!$('#story-submission-form')[0].checkValidity()) {
      return null;
    }

    var link = $('#story-url').val();
    var headline = $('#story-title').val();
    var description = $('#description-box').val();
    var data = {
      data: {
        link: link,
        headline: headline,
        timePosted: Date.now(),
        description: description,
        storyMetaDescription: main.storyMetaDescription,
        rank: 1,
        image: main.storyImage
      }
    };

    $('#story-submit').unbind('click');
    $.post('/stories/', data)
      .fail(function() {
        $('#story-submit').bind('click', storySubmitButtonHandler);
      })
      .done(function({ storyLink, isBanned }) {
        if (isBanned) {
          window.location = '/news';
          return null;
        }
        window.location = '/stories/' + storyLink;
      });
  };

  $('#story-submit').on('click', storySubmitButtonHandler);


  // map sharing
  var alreadyShared = main.getMapShares();

  if (lastCompleted && alreadyShared.indexOf(lastCompleted) === -1) {
    $('div[id="' + lastCompleted + '"]')
      .parent()
      .parent()
      .removeClass('hidden');
  }

  // on map view
  $('.map-challenge-block-share').on('click', function(e) {
    e.preventDefault();
    var challengeBlockName = $(this).children().attr('id');
    var challengeBlockEscapedName = challengeBlockName.replace(/\s/, '%20');
    var username = typeof window.username !== 'undefined' ?
      window.username :
      '';

    var link = 'https://www.facebook.com/dialog/feed?' +
      'app_id=1644598365767721' +
      '&display=page&' +
      'caption=I%20just%20completed%20the%20' +
      challengeBlockEscapedName +
      '%20section%20on%20Free%20Code%20Camp%2E' +
      '&link=http%3A%2F%2Ffreecodecamp%2Ecom%2F' +
      username +
      '&redirect_uri=http%3A%2F%2Ffreecodecamp%2Ecom%2Fmap';

    main.setMapShare(challengeBlockName);
    window.ga('send', 'event', 'FB_LINK', 'SHARE', 'Facebook map share');
    window.location.href = link;
  });

  function expandCaret(item) {
    $(item)
      .prev().find('.fa-caret-right')
      .removeClass('fa-caret-right').addClass('fa-caret-down');
  }

  function collapseCaret(item) {
    $(item)
      .prev().find('.fa-caret-down')
      .removeClass('fa-caret-down').addClass('fa-caret-right');
  }

  function expandBlock(item) {
    $(item).addClass('in').css('height', '100%');
    expandCaret(item);
  }

  function collapseBlock(item) {
    $(item).removeClass('in').css('height', '100%');
    collapseCaret(item);
  }

  $.each($('.sr-only'), function(i, span) {
    if ($(span).text() === ' Complete') {
      $(span).parents('p').addClass('manip-hidden');
    }
  });

  $.each($('.map-collapse'), function(i, div) {
    if ($(div).find('.manip-hidden').length ===
        $(div).find('p').length) {
      collapseBlock(div);
      $(div).prev('h3').addClass('faded');
      $(div).prev('h2').addClass('faded');
    }
  });

  var scrollTo, dashedName = localStorage.getItem('currentDashedName'),
    elemsToSearch = $('p.padded-ionic-icon a'), currOrLastChallenge;
  if (!dashedName && $('.sr-only').length) {
    elemsToSearch = $('.sr-only');
  }

  currOrLastChallenge = elemsToSearch.filter(function() {
    if (dashedName) {
      return $(this).attr('href').match(dashedName);
    }
    return $(this).text() === ' Complete';
  });

  if (currOrLastChallenge.length) {
    currOrLastChallenge = currOrLastChallenge[currOrLastChallenge.length - 1];
    scrollTo = $(currOrLastChallenge).offset().top - 380;
    $('html, body, .map-accordion').scrollTop(scrollTo);
  }

  if (String(window.location).match(/\/map$/ig)) {
    $('.map-fixed-header').css('top', '50px');
  }

  // map global selectors
  var mapFilter = $('#map-filter');
  var mapShowAll = $('#showAll');

  $('#nav-map-btn').on('click', toggleMap);

  $('.map-aside-action-collapse').on('click', collapseMap);

  function showMap() {
    if (!main.isMapAsideLoad) {
      var mapAside = $('<iframe>');
      mapAside.attr('src', '/map-aside');
      $('.map-aside').append(mapAside);
      main.isMapAsideLoad = true;
    }
    $('.map-aside').removeClass('is-collapsed');
  }

  function collapseMap() {
    $('.map-aside').addClass('is-collapsed');
    document.activeElement.blur();
  }

  function toggleMap() {
    var isCollapsed = $('.map-aside').hasClass('is-collapsed');

    if (isCollapsed) {
      showMap();
    } else {
      collapseMap();
    }
  }

  $('#accordion').on('show.bs.collapse', function(e) {
    expandCaret(e.target);
    if ($('a[data-toggle=collapse]').length === $('.fa-caret-down').length) {
      mapShowAll.text('Collapse all challenges');
      mapShowAll.addClass('active');
    }
  }).on('hide.bs.collapse', function(e) {
    collapseCaret(e.target);
    if ($('a[data-toggle=collapse]').length === $('.fa-caret-right').length) {
      mapShowAll.text('Expand all challenges');
      mapShowAll.removeClass('active');
    }
  });

  mapShowAll.on('click', () => {
    var mapExpanded = mapShowAll.hasClass('active');
    if (!mapExpanded) {
      $.each($('.map-collapse:not(".in")'),
      function(i, div) {
        expandBlock(div);
      });
      mapShowAll.text('Collapse all challenges');
      return mapShowAll.addClass('active');
    } else {
      $.each($('.map-collapse.in'), function(i, div) {
        collapseBlock(div);
      });
      mapShowAll.text('Expand all challenges');
      return mapShowAll.removeClass('active');
    }
  });

  // Map live filter
  mapFilter.on('keyup', () => {
    if (mapFilter.val().length > 0) {
      var regex = new RegExp(mapFilter.val().replace(/ /g, '.'), 'i');

      // Hide/unhide challenges that match the regex
      $('.challenge-title').each((index, title) => {
        if (regex.test($(title).attr('name'))) {
          expandBlock($(title).closest('.chapterBlock'));
          expandBlock($(title).closest('.certBlock'));
          $(title).removeClass('hidden');
        } else {
          $(title).addClass('hidden');
        }
      });

      // Hide/unhide blocks with no matches
      $.each($('.chapterBlock'), function(i, div) {
        if ($(div).find('.hidden').length ===
          $(div).find('p').length) {
          $(div).addClass('hidden');
          $(div).prev('h3').addClass('hidden');
        } else {
          $(div).removeClass('hidden');
          $(div).prev('h3').removeClass('hidden');
        }
      });

      // Hide/unhide superblocks with no matches
      $.each($('.certBlock'), function(i, div) {
        if ($(div).children('#nested').children('h3.hidden').length ===
          $(div).children('#nested').children('h3').length) {
          $(div).prev('h2').addClass('hidden');
        } else {
          $(div).prev('h2').removeClass('hidden');
        }
      });

      // Display "Clear Filter" element
      if (mapFilter.next().children().hasClass('fa-search')) {
        mapFilter.next()
          .children()
          .removeClass('fa-search')
          .addClass('fa-times');
        mapFilter.next().addClass('filled');
        // Scroll to the top of the page
        $('html, body, .map-accordion').scrollTop(0);
      }
    } else {
      clearMapFilter();
    }

    // Display not found if everything is hidden
    if ($.find('.certBlock').length ===
        $('.map-accordion').children('.hidden').length) {
      $('#noneFound').show();
    } else {
      $('#noneFound').hide();
    }
  });

  // Give focus to the search box by default
  mapFilter.focus();

  // Clicking the search button or x clears the map
  $('.map-buttons .input-group-addon').on('click', clearMapFilter);

  function clearMapFilter() {
    mapFilter.val('');
    mapFilter.next().children().removeClass('fa-times').addClass('fa-search');
    mapFilter.next().removeClass('filled');
    $('.map-accordion').find('.hidden').removeClass('hidden');
    $('#noneFound').hide();
  }

  // Clear the search on escape key
  mapFilter.on('keydown', (e) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      clearMapFilter();
    }
  });

  window.Mousetrap.bind('esc', clearMapFilter);

  // keyboard shortcuts: open map
  window.Mousetrap.bind('g m', toggleMap);
});

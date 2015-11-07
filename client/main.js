var main = window.main || {};

main.mapShareKey = 'map-shares';

main.ga = window.ga || function() {};

main.challengeTypes = {
  'HTML_CSS_JQ': '0',
  'JAVASCRIPT': '1',
  'VIDEO': '2',
  'ZIPLINE': '3',
  'BASEJUMP': '4',
  'BONFIRE': '5'
};

main = (function(main) {

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
      roomTitle = roomTitle || 'Waypoint Help';

      $('body').append(
        '<aside id="chat-embed-help" class="gitter-chat-embed is-collapsed" />'
      );

      main.chat.helpChat = new main.chat.GitterChat({
        room: room,
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


    $('#nav-chat-btn').on('click', function() {
      if (!main.chat.isOpen) {

        main.chat.mainChat.toggleChat(true);
      }
    });
  });

  return main;
}(main));

main.lockTop = function lockTop() {
  var magiVal;

  if ($(window).width() >= 990) {
    if ($('.editorScrollDiv').html()) {

      magiVal = $(window).height() -
        $('.navbar').height() +
        $('.footer').height();

      if (magiVal < 0) {
        magiVal = 0;
      }
      $('.editorScrollDiv').css('height', magiVal - 85 + 'px');
    }

    magiVal = $(window).height() -
      $('.navbar').height() +
      $('.footer').height();

    if (magiVal < 0) {
      magiVal = 0;
    }

    $('.scroll-locker')
      .css('min-height', $('.editorScrollDiv').height())
      .css('height', magiVal - 185);
  } else {
    $('.editorScrollDiv').css('max-height', 500 + 'px');

    $('.scroll-locker')
      .css('position', 'inherit')
      .css('top', 'inherit')
      .css('width', '100%')
      .css('max-height', '85%');
  }
};

var lastCompleted = typeof lastCompleted !== 'undefined' ?
  lastCompleted :
  '';

function getMapShares() {
  var alreadyShared = JSON.parse(
    localStorage.getItem(main.mapShareKey) ||
    '[]'
  );

  if (!alreadyShared || !Array.isArray(alreadyShared)) {
    localStorage.setItem(main.mapShareKey, JSON.stringify([]));
    alreadyShared = [];
  }
  return alreadyShared;
}

function setMapShare(id) {
  var alreadyShared = getMapShares();
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
}

$(document).ready(function() {


  var challengeName = typeof challengeName !== 'undefined' ?
    challengeName :
    '';

  if (challengeName) {
    ga('send', 'event', 'Challenge', 'load', challengeName);
  }

  if (typeof editor !== 'undefined') {
    $('#reset-button').on('click', window.resetEditor);
  }

  var CSRF_HEADER = 'X-CSRF-Token';

  var setCSRFToken = function(securityToken) {
    jQuery.ajaxPrefilter(function(options, _, xhr) {
      if (!xhr.crossDomain) {
        xhr.setRequestHeader(CSRF_HEADER, securityToken);
      }
    });
  };

  setCSRFToken($('meta[name="csrf-token"]').attr('content'));

  $('.checklist-element').each(function() {
    var checklistElementId = $(this).attr('id');
    if (localStorage[checklistElementId]) {
      $(this).children().children('li').addClass('faded');
      $(this).children().children('input').trigger('click');
    }
  });

  $('.start-challenge').on('click', function() {
    $(this).parent().remove();
    $('.challenge-content')
      .removeClass('hidden-element')
      .addClass('animated fadeInDown');
  });

  $('.challenge-list-checkbox').on('change', function() {
    var checkboxId = $(this).parent().parent().attr('id');
    if ($(this).is(':checked')) {
      $(this).parent().siblings().children().addClass('faded');
      if (!localStorage || !localStorage[checkboxId]) {
        localStorage[checkboxId] = true;
      }
    }

    if (!$(this).is(':checked')) {
      $(this).parent().siblings().children().removeClass('faded');
      if (localStorage[checkboxId]) {
        localStorage.removeItem(checkboxId);
      }
    }
  });

  $('img').error(function() {
    $(this)
      .unbind('error')
      .attr(
        'src',
        'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png'
      );
  });

  function reBindModals() {
    if (!window.common) {
      throw new Error('common framework should be loaded.');
    }
    var common = window.common;

    $('.close-modal').unbind('click');
    $('.close-modal').on('click', function() {
      setTimeout(function() {
          $('.close-modal').parent().parent().parent().parent().modal('hide');
      }, 200);
    });

    $('#search-issue').unbind('click');
    $('#search-issue').on('click', function() {
      var queryIssue = window.location.href.toString();
      window.open(
        'https://github.com/FreeCodeCamp/FreeCodeCamp/issues?q=' +
        'is:issue is:all ' +
        (common.challengeName) +
        ' OR ' +
        queryIssue
          .substr(queryIssue.lastIndexOf('challenges/') + 11)
          .replace('/', ''), '_blank');
    });

    $('#gist-share').unbind('click');
    $('#gist-share').on('click', function() {
      var gistWindow = window.open('', '_blank');

      $('#gist-share')
        .attr('disabled', 'true')
        .removeClass('btn-danger')
        .addClass('btn-warning disabled');

      function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ('withCredentials' in xhr) {
          xhr.open(method, url, true);
        } else if (typeof XDomainRequest !== 'undefined') {
          xhr = new XDomainRequest();
          xhr.open(method, url);
        } else {
          xhr = null;
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        return xhr;
      }

      var request = createCORSRequest('post', 'https://api.github.com/gists');
      if (request) {
        request.onload = function() {
          if (request.readyState === 4 &&
              request.status === 201 &&
              request.statusText === 'Created') {
            gistWindow.location.href = JSON.parse(request.responseText)['html_url'];
          }
        };
        var data = {
          description: (username ? 'http://www.freecodecamp.com/' + username +
          ' \'s s' : 'S') + 'olution for ' + (challenge_Name || challengeName),
          public: true,
          files: {}
        },
        queryIssue = window.location.href.toString().split('#?')[0],
        filename = queryIssue
        .substr(queryIssue.lastIndexOf('challenges/') + 11)
        .replace('/', '') + '.js';
        data['files'][filename] = {
          content: '// ' + (challenge_Name || challengeName) + '\n' +
          (username ? '// Author: @' + username + '\n' : '') +
          '// Challenge: ' + queryIssue + '\n' +
          '// Learn to Code at Free Code Camp (www.freecodecamp.com)' +
          '\n\n' + editor.getValue().trim()
        };

        request.send(JSON.stringify(data));
      }
    });

    $('#help-ive-found-a-bug-wiki-article').unbind('click');
    $('#help-ive-found-a-bug-wiki-article').on('click', function() {
      window.open(
        'https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/' +
          "Help-I've-Found-a-Bug",
        '_blank'
      );
    });

    $('#report-issue').unbind('click');
    $('#report-issue').on('click', function() {
      var textMessage = [
        'Challenge [',
        (common.challengeName || window.location.href),
        '](',
        window.location.href,
        ') has an issue.\n',
        'User Agent is: <code>',
        navigator.userAgent,
        '</code>.\n',
        'Please describe how to reproduce this issue, and include ',
        'links to screenshots if possible.\n\n'
      ].join('');

      if (
        window.editor &&
        typeof window.editor.getValue === 'function' &&
        window.editor.getValue().trim()
      ) {
        var type;
        switch (common.challengeType) {
          case main.challengeTypes.HTML_CSS_JQ:
            type = 'html';
            break;
          case main.challengeTypes.JAVASCRIPT:
          case main.challengeTypes.BONFIRE:
            type = 'javascript';
            break;
          default:
            type = '';
        }

        textMessage += [
          'My code:\n```',
          type,
          '\n',
          window.editor.getValue(),
          '\n```\n\n'
        ].join('');
      }

      textMessage = encodeURIComponent(textMessage);

      $('#issue-modal').modal('hide');
      window.open(
        'https://github.com/freecodecamp/freecodecamp/issues/new?&body=' +
        textMessage, '_blank'
      );
    });

    $('#completed-courseware').unbind('click');
    $('#completed-courseware').on('click', function() {
        $('#complete-courseware-dialog').modal('show');
    });

    $('#completed-courseware-editorless').unbind('click');
    $('#completed-courseware-editorless').on('click', function() {
        $('#complete-courseware-editorless-dialog').modal('show');
    });

    $('#trigger-pair-modal').unbind('click');
    $('#trigger-pair-modal').on('click', function() {
        $('#pair-modal').modal('show');
    });

    $('#trigger-reset-modal').unbind('click');
    $('#trigger-reset-modal').on('click', function() {
        $('#reset-modal').modal('show');
    });

    $('#trigger-help-modal').unbind('click');
    $('#trigger-help-modal').on('click', function() {
        $('#help-modal').modal('show');
    });

    $('#trigger-issue-modal').unbind('click');
    $('#trigger-issue-modal').on('click', function() {
        $('#issue-modal').modal('show');
    });

    $('#completed-zipline-or-basejump').unbind('click');
    $('#completed-zipline-or-basejump').on('click', function() {
        $('#complete-zipline-or-basejump-dialog').modal('show');
    });

    $('#next-courseware-button').unbind('click');
    $('#next-courseware-button').on('click', function() {
      $('#next-courseware-button').unbind('click');
      if ($('.signup-btn-nav').length < 1) {
        var data;
        var completedWith;
        var publicURL;
        switch (common.challengeType) {
          case main.challengeTypes.HTML_CSS_JQ:
          case main.challengeTypes.JAVASCRIPT:
          case main.challengeTypes.VIDEO:
            data = {
              challengeInfo: {
                challengeId: common.challengeId,
                challengeName: common.challengeName
              }
            };
            $.post('/completed-challenge/', data)
              .success(function(res) {
                if (!res) {
                  return;
                }
                window.location.href = '/challenges/next-challenge?id=' +
                  common.challengeId;
              })
              .fail(function() {
                window.location.href = '/challenges';
              });

            break;
          case main.challengeTypes.ZIPLINE:
            completedWith = $('#completed-with').val() || null;
            publicURL = $('#public-url').val() || null;
            data = {
              challengeInfo: {
                challengeId: common.challengeId,
                challengeName: common.challengeName,
                completedWith: completedWith,
                publicURL: publicURL,
                challengeType: common.challengeType
              }
            };

            $.post('/completed-zipline-or-basejump/', data)
              .success(function() {
                window.location.href = '/challenges/next-challenge?id=' +
                  common.challengeId;
              })
              .fail(function() {
                window.location.href = '/challenges';
              });
            break;

          case main.challengeTypes.BASEJUMP:
            completedWith = $('#completed-with').val() || null;
            publicURL = $('#public-url').val() || null;
            var githubURL = $('#github-url').val() || null;
            data = {
              challengeInfo: {
                challengeId: common.challengeId,
                challengeName: common.challengeName,
                completedWith: completedWith,
                publicURL: publicURL,
                githubURL: githubURL,
                challengeType: common.challengeType,
                verified: false
              }
            };
            $.post('/completed-zipline-or-basejump/', data)
              .success(function() {
                window.location.href = '/challenges/next-challenge?id=' +
                  common.challengeId;
              })
              .fail(function() {
                window.location.replace(window.location.href);
              });
            break;

          case main.challengeTypes.BONFIRE:
            window.location.href = '/challenges/next-challenge?id=' +
              common.challengeId;
            break;

          default:
            console.log('Happy Coding!');
            break;
          }
      }
    });

    $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
      window.editor.focus();
    });

    $('#complete-zipline-or-basejump').on('hidden.bs.modal', function() {
      window.editor.focus();
    });
  }

  $(window).resize(function() {
    reBindModals();
  });

  reBindModals();

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
      .done(function(data) {
        window.location = '/stories/' + data.storyLink;
      });
  };

  $('#story-submit').on('click', storySubmitButtonHandler);

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
      main.lockTop();
      $(window).on('resize', function() {
        main.lockTop();
      });
      $(window).on('scroll', function() {
        main.lockTop();
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


  // map sharing
  var alreadyShared = getMapShares();

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

    setMapShare(challengeBlockName);
    main.ga('send', 'event', 'FB_LINK', 'SHARE', 'Facebook map share');
    window.location.href = link;
  });
});

var profileValidation =
  window.angular.module('profileValidation', ['ui.bootstrap']);

profileValidation.controller(
  'profileValidationController',
  [
    '$scope',
    '$http',
    function($scope, $http) {
      $http.get('/account/api').success(function(data) {
        $scope.user = data.user;

        $scope.user.username = $scope.user.username ?
          $scope.user.username.toLowerCase() :
          null;

        $scope.storedUsername = data.user.username;
        $scope.storedEmail = data.user.email;
        $scope.user.email = $scope.user.email ?
          $scope.user.email.toLowerCase() :
          null;

        $scope.user.twitterHandle = $scope.user.twitterHandle ?
          $scope.user.twitterHandle.toLowerCase() :
          null;

        $scope.asyncComplete = true;
      });
    }
  ]
);

profileValidation.controller(
  'pairedWithController',
  [
    '$scope',
    function($scope) { $scope.existingUser = null; }
  ]
);

profileValidation.controller('emailSignUpController', function() {});

profileValidation.controller('emailSignInController', function() {});

profileValidation.controller('URLSubmitController', function() {});

profileValidation.controller('nonprofitFormController', function() {});

profileValidation.controller(
  'doneWithFirst100HoursFormController',
  function() {}
);

profileValidation.controller('submitStoryController', function() {});

profileValidation.directive(
  'uniqueUsername',
  [
    '$http',
    function($http) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {

          element.bind('keyup', function() {

            ngModel.$setValidity('unique', true);
            var username = element.val();
            if (username) {
              var config = { params: { username: username } };
              $http
                .get('/api/users/exists', config)
                .success(function(result) {
                  if (username === scope.storedUsername) {
                    ngModel.$setValidity('unique', true);
                  } else if (result.exists) {
                    ngModel.$setValidity('unique', false);
                  }
                });
            }
          });
        }
      };
    }
  ]
);

profileValidation.directive('existingUsername',
  [
    '$http',
    function($http) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {

          element.bind('keyup', function() {

            if (element.val().length > 0) {
              ngModel.$setValidity('exists', false);
            } else {
              element.removeClass('ng-dirty');
              ngModel.$setPristine();
            }

            var username = element.val();
            if (username) {
              var config = { params: { username: username } };
              $http
                .get('/api/users/exists', config)
                .success(function(result) {
                  ngModel.$setValidity('exists', result.exists);
                });
            }
          });
        }
      };
  }]);

profileValidation.directive(
  'uniqueEmail',
  [
    '$http',
    function($http) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function getUnique(scope, element, attrs, ngModel) {
          element.bind('keyup', function() {
            ngModel.$setValidity('unique', true);
            var email = element.val();
            if (email) {
              var config = { params: { email: email } };
              $http
                .get('/api/users/exists', config)
                .success(function(result) {
                  if (email === scope.storedEmail) {
                    ngModel.$setValidity('unique', true);
                  } else if (result.exists) {
                    ngModel.$setValidity('unique', false);
                  }
                });
            }
          });
        }
      };
    }
  ]
);

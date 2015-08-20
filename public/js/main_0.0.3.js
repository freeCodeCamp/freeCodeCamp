$(document).ready(function() {
  var challengeName = typeof challengeName !== undefined ? challengeName : 'Untitled';
  if (challengeName) {
    ga('send', 'event',  'Challenge', 'load', challengeName);
  }

  $(document).ready(function() {
    if (typeof editor !== 'undefined') {
      $('#reset-button').on('click', resetEditor);
    }
  });

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
    if(!!localStorage[checklistElementId]) {
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
    if ($(this).is(":checked")) {
      $(this).parent().siblings().children().addClass('faded');
      if (!localStorage || !localStorage[checkboxId]) {
        localStorage[checkboxId] = true;
      }
    }
    if (!$(this).is(":checked")) {
      $(this).parent().siblings().children().removeClass('faded');
      if (localStorage[checkboxId]) {
        localStorage.removeItem(checkboxId);
      }
    }
  });

  $("img").error(function () {
    $(this).unbind("error").attr("src", "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png");
  });

  function reBindModals(){

      $('#i-want-help').unbind('click');
      $('#i-want-help').on('click', function() {
          $('#help-modal').modal('hide');
          var editorValue = editor.getValue();
          var currentLocation = window.location.href;
          $.post(
              '/get-help',
              {
                  payload: {
                      code: editorValue,
                      challenge: currentLocation
                  }
              },
              function(res) {
                  if (res) {
                      window.open('https://gitter.im/FreeCodeCamp/Help', '_blank')
                  }
              }
          );
      });

      $('#i-want-help-editorless').unbind('click');
      $('#i-want-help-editorless').on('click', function() {
          $('#help-editorless-modal').modal('hide');
          var currentLocation = window.location.href;
          $.post(
              '/get-help',
              {
                  payload: {
                      challenge: currentLocation
                  }
              },
              function(res) {
                  if (res) {
                      window.open('https://gitter.im/FreeCodeCamp/Help', '_blank')
                  }
              }
          );
      });

      $('#report-issue').unbind('click');
      $('#report-issue').on('click', function() {
          $('#issue-modal').modal('hide');
          window.open('https://github.com/freecodecamp/freecodecamp/issues/new?&body=Challenge '+ window.location.href +' has an issue. Please describe how to reproduce it, and include links to screenshots if possible.', '_blank')
      });

      $('#i-want-help').unbind('click');
      $('#i-want-to-pair').on('click', function() {
          $('#pair-modal').modal('hide');
          var currentLocation = window.location.href;
          $.post(
              '/get-pair',
              {
                  payload: {
                      challenge: currentLocation
                  }
              },
              function(res) {
                  if (res) {
                      window.open('https://gitter.im/FreeCodeCamp/LetsPair', '_blank')
                  }
              }
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
              switch (challengeType) {
                  case challengeTypes.HTML_CSS_JQ:
                  case challengeTypes.JAVASCRIPT:
                  case challengeTypes.VIDEO:
                      $.post(
                          '/completed-challenge/',
                          {
                              challengeInfo: {
                                  challengeId: challenge_Id,
                                  challengeName: challenge_Name
                              }
                          }).success(
                          function(res) {
                              if (res) {
                                  window.location.href = '/challenges/next-challenge';
                              }
                          }).fail(
                          function() {
                              window.location.href="/challenges";
                          }
                      );
                      break;
                  case challengeTypes.ZIPLINE:
                      var didCompleteWith = $('#completed-with').val() || null;
                      var publicURL = $('#public-url').val() || null;
                      $.post(
                          '/completed-zipline-or-basejump/',
                          {
                              challengeInfo: {
                                  challengeId: challenge_Id,
                                  challengeName: challenge_Name,
                                  completedWith: didCompleteWith,
                                  publicURL: publicURL,
                                  challengeType: challengeType
                              }
                          }).success(
                          function() {
                              window.location.href = '/challenges/next-challenge';
                          }).fail(
                          function() {
                              window.location.href = '/challenges';
                          });
                      break;
                  case challengeTypes.BASEJUMP:
                      var didCompleteWith = $('#completed-with').val() || null;
                      var publicURL = $('#public-url').val() || null;
                      var githubURL = $('#github-url').val() || null;
                      $.post(
                          '/completed-zipline-or-basejump/',
                          {
                              challengeInfo: {
                                  challengeId: challenge_Id,
                                  challengeName: challenge_Name,
                                  completedWith: didCompleteWith,
                                  publicURL: publicURL,
                                  githubURL: githubURL,
                                  challengeType: challengeType,
                                  verified: false
                              }
                          }).success(function() {
                              window.location.href = '/challenges/next-challenge';
                          }).fail(function() {
                              window.location.replace(window.location.href);
                          });
                      break;
                  case challengeTypes.BONFIRE:
                      window.location.href = '/challenges/next-challenge';
                  default:
                      break;
              }
          }
      });

      $('.next-challenge-button').unbind('click');
      $('.next-challenge-button').on('click', function() {
          l = location.pathname.split('/');
          window.location = '/challenges/' + (parseInt(l[l.length - 1]) + 1);
      });

      // Bonfire instructions functions
      $('#more-info').unbind('click');
      $('#more-info').on('click', function() {
          ga('send', 'event',  'Challenge', 'more-info', challengeName);
          $('#brief-instructions').hide();
          $('#long-instructions').show().removeClass('hide');

      });
      $('#less-info').unbind('click');
      $('#less-info').on('click', function() {
          $('#brief-instructions').show();
          $('#long-instructions').hide();
      });

      $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
          editor.focus();
      });

      $('#complete-zipline-or-basejump').on('hidden.bs.modal', function() {
          editor.focus();
      });
  };



    $(window).resize(function(){
        reBindModals();
    });

    reBindModals();

  var challengeTypes = {
    'HTML_CSS_JQ': '0',
    'JAVASCRIPT': '1',
    'VIDEO': '2',
    'ZIPLINE': '3',
    'BASEJUMP': '4',
    'BONFIRE': '5'
  };

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
        .fail(function(xhr, textStatus, errorThrown) {
          $(upvoteBtn).bind('click', upvoteHandler);
        })
        .done(function(data, textStatus, xhr) {
          $(upvoteBtn).text('Upvoted!').addClass('disabled');

          $('#storyRank').text(data.rank + " points");
        });
    }
  };
  $('#story-list').on('click', 'button.btn-upvote', upvoteHandler);

  var storySubmitButtonHandler = function storySubmitButtonHandler() {

    var link = $('#story-url').val();
    var headline = $('#story-title').val();
    var description = $('#description-box').val();

    $('#story-submit').unbind('click');
    $.post('/stories/',
      {
        data: {
          link: link,
          headline: headline,
          timePosted: Date.now(),
          description: description,
          storyMetaDescription: storyMetaDescription,
          rank: 1,
          image: storyImage
        }
      })
      .fail(function (xhr, textStatus, errorThrown) {
        $('#story-submit').bind('click', storySubmitButtonHandler);
      })
      .done(function(data, textStatus, xhr) {
        window.location = '/stories/' + data.storyLink;
      });
  };

  $('#story-submit').on('click', storySubmitButtonHandler);
    //fakeiphone positioning hotfix
    if($('.iphone-position').html() !==undefined || $('.iphone').html() !== undefined){
        var startIphonePosition = parseInt($('.iphone-position').css('top').replace('px', ''));
        var startIphone = parseInt($('.iphone').css('top').replace('px', ''));
        $(window).on('scroll', function(){
            if((($('.courseware-height').height() + $('.courseware-height').offset().top)-$(window).scrollTop()-$('.iphone-position').height()) <= 0){
                $('.iphone-position').css('top', startIphonePosition+(($('.courseware-height').height() + $('.courseware-height').offset().top)-$(window).scrollTop()-$('.iphone-position').height()));
                $('.iphone').css('top', startIphonePosition+(($('.courseware-height').height() + $('.courseware-height').offset().top)-$(window).scrollTop()-$('.iphone-position').height())+120);
            }
            else{
                $('.iphone-position').css('top', startIphonePosition);
                $('.iphone').css('top', startIphone);
            }
        });
    }
   if($('.scroll-locker').html() != undefined){
        function lockTop(){
            if ($(window).width() >= 990) {
                if($('.editorScrollDiv').html() !== 'undefined'){
                    var magiVal = $(window).height()-($('.navbar').height()+$('.footer').height());
                    if(magiVal < 0){
                        magiVal = 0;
                    }
                    $('.editorScrollDiv').css("height", (magiVal-85) + "px");
                }
                magiVal = $(window).height()-($('.navbar').height()+$('.footer').height());
                if(magiVal < 0){
                    magiVal = 0;
                }

                $('.scroll-locker').css("min-height", $('.editorScrollDiv').height()).css("height",magiVal-185);
            }
            else {
                $('.editorScrollDiv').css("max-height", 500 + "px");
                $('.scroll-locker').css('position', 'inherit').css('top', 'inherit').css('width', '100%').css('max-height', '85%');
            }
        }
        if ($('.scroll-locker').html()){
            lockTop();
            $(window).on('resize', function(){
              lockTop();
            });
            $(window).on('scroll', function() {
              lockTop();
            });
        }
       var execInProgress = false;
       document.getElementById('scroll-locker').addEventListener('previewUpdateSpy', function(e){
           if (!execInProgress){
               execInProgress = true;
               setTimeout(function(){
                   if($($('.scroll-locker').children()[0]).height()-800 > e.detail){
                       $('.scroll-locker').scrollTop(e.detail);
                   }
                   else {
                       $('.scroll-locker').animate({"scrollTop":$($('.scroll-locker').children()[0]).height()}, 175);
                   }
                   execInProgress = false;
               }, 750);
           }
       }, false);
    }
});

function defCheck(a){
    if(a !== 'undefined'){return(true);}else{return(false);}
}

var profileValidation = angular.module('profileValidation',
  ['ui.bootstrap']);
profileValidation.controller('profileValidationController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/account/api').success(function(data) {
      $scope.user = data.user;
      $scope.user.username = $scope.user.username ? $scope.user.username.toLowerCase() : undefined;
      $scope.storedUsername = data.user.username;
      $scope.storedEmail = data.user.email;
      $scope.user.email = $scope.user.email ? $scope.user.email.toLowerCase() : undefined;
      $scope.user.twitterHandle = $scope.user.twitterHandle ? $scope.user.twitterHandle.toLowerCase() : undefined;
      $scope.asyncComplete = true;
    });
  }
]);

profileValidation.controller('pairedWithController', ['$scope',
  function($scope) {
    $scope.existingUser = null;
  }
]);

profileValidation.controller('emailSignUpController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('emailSignInController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('URLSubmitController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('nonprofitFormController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('doneWithFirst100HoursFormController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('submitStoryController', ['$scope',
  function($scope) {

  }
]);

profileValidation.directive('uniqueUsername', ['$http', function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
        ngModel.$setValidity('unique', true);
        var username = element.val();
        if (username) {
          var config = { params: { username: username } };
          $http
            .get('/api/users/exists', config)
            .success(function (result) {
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
}]);

profileValidation.directive('existingUsername',
  ['$http', function($http) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        element.bind('keyup', function (event) {
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

profileValidation.directive('uniqueEmail', ['$http', function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function getUnique (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
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
        };
      });
    }
  }
}]);

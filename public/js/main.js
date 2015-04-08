$(document).ready(function() {
  var challengeName = typeof challengeName !== undefined ? challengeName : 'Untitled';
  if (challengeName) {
    ga('send', 'event',  'Challenge', 'load', challengeName);
  }

  // When introducing a new announcement, change the localStorage attribute
  // and the HTML located in the footer
  if (!localStorage || !localStorage.nodeSchoolAnnouncement) {
    $('#announcementModal').modal('show');
    localStorage.fccShowAnnouncement = "true";
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

  $('.start-challenge').on('click', function() {
    $(this).parent().remove();
    $('.challenge-content')
      .removeClass('hidden-element')
      .addClass('animated fadeInDown');
  });

  function completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash, bonfireName) {
    $('#complete-bonfire-dialog').modal('show');
    // Only post to server if there is an authenticated user
    if ($('.signup-btn-nav').length < 1) {
      $.post(
        '/completed-bonfire',
        {
          bonfireInfo: {
            completedWith: didCompleteWith,
            solution: bonfireSolution,
            bonfireHash: thisBonfireHash,
            bonfireName: bonfireName
          }
        },
        function(res) {
          if (res) {
            window.location.href = '/bonfires'
          }
        });
    }
  }

  function completedWiki(wikiId) {
    if ($('.signup-btn-nav').length < 1) {
      $.post(
        '/completed-wiki',
        {
          wikiInfo: {
            wikiId: wikiId
          }
        },
        function(res) {
          if (res) {
            window.location.href = '/wiki'
          }
        });
    }
  }

  $('.next-bonfire-button').on('click', function() {
    var bonfireSolution = myCodeMirror.getValue();
    var thisBonfireHash = passedBonfireHash || null;
    var bonfireName = $('#bonfire-name').text();
    var didCompleteWith = $('#completed-with').val() || null;
    completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash, bonfireName);

  });

  $('.next-wiki-button').on('click', function() {
    var wikiId = $('#wikiId').text();
    completedWiki(wikiId);
  });

  $("img").error(function () {
    $(this).unbind("error").attr("src", "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png");
  });

  $('#completed-courseware').on('click', function() {
    $('#complete-courseware-dialog').modal('show');
  });

  $('#completed-zipline-or-basejump').on('click', function() {
    $('#complete-zipline-or-basejump-dialog').modal('show');
  });

  $('#complete-bonfire-dialog').on('hidden.bs.modal', function() {
    editor.focus();
  });

  $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
    editor.focus();
  });
  $('#next-courseware-button').on('click', function() {
    console.log(passedCoursewareHash);
    if ($('.signup-btn-nav').length < 1) {
      switch (challengeType) {
        case 0:
        case 1:
        case 2:
          $.post(
            '/completed-courseware/',
            {
              coursewareInfo: {
                coursewareHash: passedCoursewareHash,
                coursewareName: passedCoursewareName
              }
            }).success(
            function(res) {
              if (res) {
                window.location.href = '/challenges';
              }
            }
          );
          break;
        case 3:
          var didCompleteWith = $('#completed-with').val() || null;
          var publicURL = $('#public-url').val() || null;
          $.post(
            '/completed-zipline-or-basejump/',
            {
              coursewareInfo: {
                coursewareHash: passedCoursewareHash,
                coursewareName: passedCoursewareName,
                completedWith: didCompleteWith,
                publicURL: publicURL,
                challengeType: challengeType
              }
            }).success(
            function() {
              window.location.href = '/challenges';
            }).fail(
            function() {
              window.location.href = '/challenges';
            });
          break;
        case 4:
          var didCompleteWith = $('#completed-with').val() || null;
          var publicURL = $('#public-url').val() || null;
          var githubURL = $('#github-url').val() || null;
          $.post(
            '/completed-zipline-or-basejump/',
            {
              coursewareInfo: {
                coursewareHash: passedCoursewareHash,
                coursewareName: passedCoursewareName,
                completedWith: didCompleteWith,
                publicURL: publicURL,
                githubURL: githubURL,
                challengeType: challengeType,
                verified: false
              }
            }).success(function() {
              window.location.href = '/challenges';
            }).fail(function() {
              window.location.replace(window.location.href);
            });
          break;
        default:
          break;
      }

    }
  });


  $('.all-challenges').on('click', function() {
    $('#show-all-dialog').modal('show');
  });

  $('#showAllButton').on('click', function() {
    $('#show-all-dialog').modal('show');
  });

  $('.next-challenge-button').on('click', function() {
    l = location.pathname.split('/');
    window.location = '/challenges/' + (parseInt(l[l.length - 1]) + 1);
  });


// Bonfire instructions functions
  $('#more-info').on('click', function() {
    ga('send', 'event',  'Challenge', 'more-info', challengeName);
    $('#brief-instructions').hide();
    $('#long-instructions').show().removeClass('hide');

  });
  $('#less-info').on('click', function() {
    $('#brief-instructions').show();
    $('#long-instructions').hide();
  });

  var upvoteHandler = function () {
    var _id = storyId;
    $('#upvote').unbind('click');
    var alreadyUpvoted = false;
    for (var i = 0; i < upVotes.length; i++) {
      if (upVotes[i].upVotedBy === user._id) {
        alreadyUpvoted = true;
        break;
      }
    }
    if (!alreadyUpvoted) {
      $.post('/stories/upvote',
        {
          data: {
            id: _id,
            upVoter: user
          }
        })
        .fail(function (xhr, textStatus, errorThrown) {
          $('#upvote').bind('click', upvoteHandler);
        })
        .done(function (data, textStatus, xhr) {
          $('#upvote').text('Upvoted!').addClass('disabled');

          $('#storyRank').text(data.rank + " points");
        });
    }
  };
  $('#upvote').on('click', upvoteHandler);


  var storySubmitButtonHandler = function storySubmitButtonHandler() {

    var link = $('#story-url').val();
    var headline = $('#story-title').val();
    var description = $('#description-box').val();
    var userDataForUpvote = {
      upVotedBy: user._id,
      upVotedByUsername: user.profile.username
    };
    $('#story-submit').unbind('click');
    $.post('/stories/',
      {
        data: {
          link: link,
          headline: headline,
          timePosted: Date.now(),
          description: description,
          storyMetaDescription: storyMetaDescription,
          originalStoryAuthorEmail: user.email,
          rank: 1,
          upVotes: [userDataForUpvote],
          author: {
            picture: user.profile.picture,
            email: user.email,
            userId: user._id,
            username: user.profile.username
          },
          comments: [],
          image: storyImage
        }
      })
      .fail(function (xhr, textStatus, errorThrown) {
        $('#story-submit').bind('click', storySubmitButtonHandler);
      })
      .done(function (data, textStatus, xhr) {
        window.location = '/stories/' + JSON.parse(data).storyLink;
      });

  };

  $('#story-submit').on('click', storySubmitButtonHandler);

  var commentSubmitButtonHandler = function commentSubmitButtonHandler() {
    $('comment-button').unbind('click');
    var data = $('#comment-box').val();

    $('#comment-button').attr('disabled', 'disabled');
    $.post('/stories/comment/',
      {
        data: {
          associatedPost: storyId,
          originalStoryLink: originalStoryLink,
          originalStoryAuthorEmail: originalStoryAuthorEmail,
          body: data,
          author: {
            picture: user.profile.picture,
            userId: user._id,
            username: user.profile.username,
            email: user.email
          }
        }
      })
      .fail(function (xhr, textStatus, errorThrown) {
        $('#comment-button').attr('disabled', false);
      })
      .done(function (data, textStatus, xhr) {
        window.location.reload();
      });
  };

  $('#comment-button').on('click', commentSubmitButtonHandler);
});

var profileValidation = angular.module('profileValidation',['ui.bootstrap']);
profileValidation.controller('profileValidationController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/account/api').success(function(data) {
      $scope.user = data.user;
      $scope.user.profile.username = $scope.user.profile.username ? $scope.user.profile.username.toLowerCase() : undefined;
      $scope.storedUsername = data.user.profile.username;
      $scope.storedEmail = data.user.email;
      $scope.user.email = $scope.user.email ? $scope.user.email.toLowerCase() : undefined;
      $scope.user.profile.twitterHandle = $scope.user.profile.twitterHandle ? $scope.user.profile.twitterHandle.toLowerCase() : undefined;
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

profileValidation.directive('uniqueUsername',['$http',function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
        ngModel.$setValidity('unique', true);
        if (element.val()) {
          $http.get("/api/checkUniqueUsername/" + element.val()).success(function (data) {
            if (element.val() == scope.storedUsername) {
              ngModel.$setValidity('unique', true);
            } else if (data) {
              ngModel.$setValidity('unique', false);
            }
          });
        }
      });
    }
  }
}]);

profileValidation.directive('existingUsername', ['$http', function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
        if (element.val().length > 0) {
          ngModel.$setValidity('exists', false);
        } else {
          element.removeClass('ng-dirty');
          ngModel.$setPristine();
        }
        if (element.val()) {
          $http
            .get("/api/checkExistingUsername/" + element.val())
            .success(function (data) {
              ngModel.$setValidity('exists', data);
            });
        }
      });
    }
  }
}]);

profileValidation.directive('uniqueEmail', ['$http', function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function getUnique (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
        ngModel.$setValidity('unique', true);
        if (element.val()) {
          $http.get("/api/checkUniqueEmail/" + encodeURIComponent(element.val())).success(function (data) {
            if (element.val() == scope.storedEmail) {
              ngModel.$setValidity('unique', true);
            } else if (data) {
              ngModel.$setValidity('unique', false);
            }
          });
        };
      });
    }
  }
}]);

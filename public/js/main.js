$(document).ready(function() {
    if (bonfireName !== undefined) {
        ga('send', 'event',  'Bonfire', 'load', bonfireName + ':' + Math.floor(Date.now() / 1000));
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

    $('.completed-challenge').on('click', function() {
        $('#complete-challenge-dialog').modal('show');
        // Only post to server if there is an authenticated user
        if ($('.signup-btn-nav').length < 1) {
            l = location.pathname.split('/');
            cn = l[l.length - 1];
            $.ajax({
                type: 'POST',
                data: {challengeNumber: cn},
                url: '/completed-challenge/'
            });
        }
    });



    function completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash) {
        $('#complete-bonfire-dialog').modal('show');
        // Only post to server if there is an authenticated user
        if ($('.signup-btn-nav').length < 1) {

            $.post(
                '/completed-bonfire',
                {
                    bonfireInfo: {
                        completedWith : didCompleteWith,
                        solution: bonfireSolution,
                        bonfireHash: thisBonfireHash
                    }
                },
                function(res) {
                if (res) {
                    window.location.href = '/bonfires'
                }
            })
        }
    }

    $('.next-bonfire-button').on('click', function() {
        var bonfireSolution = myCodeMirror.getValue();
        var thisBonfireHash = passedBonfireHash || null;
        var didCompleteWith = $('#completed-with').val() || null;
        completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash);

    });

    $('.all-challenges').on('click', function() {
        $('#all-challenges-dialog').modal('show');
    });

    $('.all-bonfires').on('click', function() {
        $('#all-bonfires-dialog').modal('show');
    });

    $('.next-challenge-button').on('click', function() {
        l = location.pathname.split('/');
        window.location = '/challenges/' + (parseInt(l[l.length - 1]) + 1);
    });



    // Bonfire instructions functions
    $('#more-info').on('click', function() {
        ga('send', 'event',  'Bonfire', 'more-info', bonfireName);
        $('#brief-instructions').hide();
        $('#long-instructions').show().removeClass('hide');

    });
    $('#less-info').on('click', function() {
        $('#brief-instructions').show();
        $('#long-instructions').hide();
    });
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

profileValidation.controller('nonprofitFormController', ['$scope',
    function($scope) {

    }
]);

profileValidation.controller('doneWithFirst100HoursFormController', ['$scope',
    function($scope) {

    }
]);

profileValidation.directive('uniqueUsername', function($http) {
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
});
// TODO: FIX THIS
profileValidation.directive('existingUsername', function($http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            element.bind("keyup", function (event) {
                if (element.val().length > 0) {
                    ngModel.$setValidity('exists', false);
                } else {
                    ngModel.$setPristine();
                }
                if (element.val()) {
                    $http.get("/api/checkExistingUsername/" + element.val() + ' ').success(function (data) {
                        if (element.val() == scope.existingUsername) {
                            ngModel.$setValidity('exists', false);
                        } else if (data) {
                            ngModel.$setValidity('exists', true);
                        }
                    });
                }
            });
        }
    }
});

profileValidation.directive('uniqueEmail', function($http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
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
});
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

  $('.start-challenge').on('click', function() {
      $(this).parent().remove();
      $('.challenge-content')
        .removeClass('hidden-element')
        .addClass('animated fadeInDown');
  });

  $('.completed-challenge').on('click', function() {
      $('#complete-dialog').modal('show');

      l = location.pathname.split('/');
      cn = l[l.length - 1];
      console.log(cn);
      $.ajax({
          type: 'POST',
          data: {challengeNumber: cn},
          url: '/completed_challenge/'
      });
  });

  $('.skip-challenge').on('click', function() {
      $('#skip-dialog').modal('show');
  });

  $('.next-button').on('click', function() {
      l = location.pathname.split('/');
      window.location = '/challenges/' + (parseInt(l[l.length - 1]) + 1);
  });
});

var profileValidation = angular.module('profileValidation',['ui.bootstrap']);
profileValidation.controller('profileValidationController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('/account/api').success(function(data) {
            $scope.user = data.user;
        });
    }
]);
profileValidation.filter('anyInvalidDirtyFields', function () {
  return function(form) {
    for(var prop in form) {
      if(form.hasOwnProperty(prop)) {
        if(form[prop].$invalid && form[prop].$dirty) {
          return true; 
        }
      }
    }
    return false;
  };
});


---
title: Get Information About the Current User in Angularjs
---
You may have noticed if you opened up **/client/app/admin/admin.controller.js** that it calls the _Auth_ module like so:

    .controller('AdminCtrl', function ($scope, $http, Auth …

You can include Auth in your other controllers the same way. It's pretty useful to have _Auth_ available in your controller to detect if a user is logged in, or to get information about the current user. In the body of your controller you can add

    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;

And then you can use _isLoggedIn()_ or _getCurrentUser()_ in the HTML view for your controller!
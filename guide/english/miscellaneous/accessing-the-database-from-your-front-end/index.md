---
title: Accessing the Database from Your Front End
---
You must have noticed in **main.controller.js** how _things_ were retrieved from the database and displayed:

    $http.get('/api/things').success(function(awesomeThings){  
        $scope.awesomeThings = awesomeThings;  
    });

What this does is call the api with a "get" request, which is then routed by **/server/api/things/index.js** to the _exports.index_ function in **things.controller.js**. You'll also notice in **main.controller.js** that there are included examples of _$http.post_ and _$http.delete_ functions too! How nice!
---
title: Keep Data in Sync in Angular
---
Say you want something to show up on the user view when you add it to the database. A new _thing_ object will instantly show up in an _ng-repeat_ loop in your HTML view if you simply add it to your local array with

    $scope.awesomeThings.push(newThing);

But you'll still need to add it to your database collection. Add it to your collection with

    $http.post('/api/things', newThing);

But wait! You'll soon realize that while all the other things in your _$scope.awesomeThings_ array have unique ids assigned by MongoDB (under the _thing._id_ property), your _newThing_ object will not, which will make it hard for you at some point to make database actions on it (deleting it from your database requires you to use its _._id_ property). So what you'll want to do after you add it to your _$scope.awesomeThings_ array (because we want it to show up on the user's page immediately). Altogether, your code to add a newThing to your local array and database will look like:

    $scope.awesomeThings.push(newThing);
    $http.post('/api/things', newThing).success(function(thatThingWeJustAdded) {
        $scope.awesomeThings.pop(); // let's lose that id-lacking newThing 
        $scope.awesomeThings.push(thatThingWeJustAdded); // and add the id-having newThing!
    };

This updates the local array for seemingly instant results for your user and then syncs it to your database and updates the local array in the background with the database's version of your _newThing_ object, unique _._id_ and all. Notice the callback we pass to the _success_ function receives the new _thing_ back from the database as an argument! This way you can easily add it back to your local scope without too much overhead.
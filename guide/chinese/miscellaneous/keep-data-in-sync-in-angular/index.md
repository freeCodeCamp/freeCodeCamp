---
title: Keep Data in Sync in Angular
localeTitle: 以角度保持数据同步
---
假设您希望在将用户视图添加到数据库时显示某些内容。如果您只是将其添加到本地数组中，则新_的_对象将立即显示在HTML视图的_ng-repeat_循环中
```
$scope.awesomeThings.push(newThing); 
```

但是你仍然需要将它添加到数据库集合中。用它添加到你的收藏中
```
$http.post('/api/things', newThing); 
```

可是等等！你很快就会明白，虽然你的_$ scope.awesomeThings_阵列中的所有其他东西都通过MongoDB的分配唯一的ID（的_东西_下_。ID\__属性），您_newThing_对象不会，这将使你很难在某个点就它的数据库操作（从数据库中删除它需要你使用它_。ID\__属性）。那么在将它添加到_$ scope.awesomeThings_数组后你想要做什么（因为我们希望它立即出现在用户的页面上）。总而言之，将newThing添加到本地数组和数据库的代码如下所示：
```
$scope.awesomeThings.push(newThing); 
 $http.post('/api/things', newThing).success(function(thatThingWeJustAdded) { 
    $scope.awesomeThings.pop(); // let's lose that id-lacking newThing 
    $scope.awesomeThings.push(thatThingWeJustAdded); // and add the id-having newThing! 
 }; 
```

这会为您的用户更新本地数组以获得看似即时的结果，然后将其同步到您的数据库，并使用数据库版本的_newThing_对象更新本地数组，该数据是唯一的_。_ id\_和所有。请注意，我们传递给_success_函数的回调接收来自数据库的新_东西_作为参数！这样，您可以轻松地将其添加回本地范围，而无需太多开销。
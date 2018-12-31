---
title: Chain Search Query Helpers to Narrow Search Results
---
## Chain Search Query Helpers to Narrow Search Results

1. To create but not execut a find query
```javascript
Model.find( {name: 'Leah'} )
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

2. To store the find query into a variable for later use:
```javascript
var findQuery = YourModel.find( {name: 'Leah'} )
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

3. To sort an array:<br>
```javascript
yourArray.sort( {age: 1} )  // Here: 1 for ascending	order and -1 for descending order.
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
4. To limit an array's size:
```javascript
yourArray.limit(5)  // return array which has 5 items in it.
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

5. To hide certain property from the result:
```javascript
yourArray.select( {name: 0, age: 1} ) // Here: 0 means false and thus hide name property; 1 means true so age property will show.
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

6. To exec this query, you can either:</br>
&nbsp;&nbsp;1) Callback:
```javascript
YourQuery.exec(function(err, docs) {
    //do something here
})
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or 2) Promise
```javascript
YourQuery.exec.then(function(err, docs) {
    //do something here
})
```

7. Chain it all together:
```javascript
Person.find({age: 55}).sort({name: -1}).limit(5).select( {favoriteFoods: 0} ).exec(function(error, people) {
  //do something here
})
```
</br>
</br>

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/mongodb-and-mongoose/chain-search-query-helpers-to-narrow-search-results/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

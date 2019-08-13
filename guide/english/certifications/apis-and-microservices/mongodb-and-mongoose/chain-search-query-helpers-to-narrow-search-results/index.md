---
title: Chain Search Query Helpers to Narrow Search Results
---
# Chain Search Query Helpers to Narrow Search Results


---
## Hints

### Hint 1
To create but not execute a find query
```javascript
Model.find({ name: "Leah" });
```

### Hint 2
To store the find query into a variable for later use:
```javascript
var findQuery = YourModel.find({ name: "Leah" });
```

### Hint 3
To sort an array:<br>
```javascript
yourArray.sort({ age: 1 }); // Here: 1 for ascending	order and -1 for descending order.
```

### Hint 4
To limit an array's size:
```javascript
yourArray.limit(5); // return array which has 5 items in it.
```

### Hint 5
To hide certain property from the result:
```javascript
yourArray.select({ name: 0, age: 1 }); // Here: 0 means false and thus hide name property; 1 means true so age property will show.
```
### Hint 6
To execute this query, you can either:
1. Callback:
```javascript
YourQuery.exec(function(err, docs) {
  //do something here
});
```
### Hint 7
Or

2. Promise
```javascript
YourQuery.exec.then(function(err, docs) {
  //do something here
});
```

### Hint 8
Chain it all together:
```javascript
Person.find({ age: 55 })
  .sort({ name: -1 })
  .limit(5)
  .select({ favoriteFoods: 0 })
  .exec(function(error, people) {
    //do something here
  });
```

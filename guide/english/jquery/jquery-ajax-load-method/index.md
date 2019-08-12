---
title: jQuery load() Method
---

## jQuery load() Method

The load() method loads data from a server and puts the returned data into the selected element.

**Note:** There is also a jQuery Event method called load. Which one is called, depends on the parameters.

### Example
```javascript
$("button").click(function(){
    $("#div1").load("demo_test.txt");
});
```


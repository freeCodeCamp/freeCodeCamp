---
title: Declare JavaScript Objects as Variables
---
This has a simple format. You declare your variable and have it equal to an object in the form `{ key: value}`

    var car = {
      "wheels":4,
      "engines":1,
      "seats":5
    };
    
You can access the object's properties using dot notation or bracket notation.

Using dot notation:

```javascript
console.log(car.wheels); // 4
```

Using bracket notation:
```javascript
console.log(car["wheels"]); // 1
```

Using dynamic bracket notation:
```javascript
var seatsProperty = "seats";
console.log(car[seatsProperty]); // 5
```

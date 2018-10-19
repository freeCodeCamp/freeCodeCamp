---
title: Manipulate JavaScript Objects
---
There are a couple ways to manipulate object properties, dot notation and bracket notation.

Adding properties to objects with dot notation:

    myObject.myProperty = "myValue";
    
Adding properties to objects using bracket notation:
```javascript
myObject['myProperty'] = "myValue";
```

Using bracket notation, we can utilize variables as property names:

```javascript
var dynamicProperty = "myProperty";
myObject[dynamicProperty] = "myValue";
```

We can also delete them like this:

    delete(myObject.myProperty);

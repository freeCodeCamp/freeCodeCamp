---
title: Add New Properties to a JavaScript Object
---

You can add new properties to existing JavaScript objects the same way you would modify them.

There are two different syntaxes, dot notation and bracket notation. Dot notation is generally preferred for readability but properties must be a valid identifier.

Here is how using dot notation:

    myDog.bark = "woof-woof";

Here is how using bracket notation:
```javascript
myObject['bark'] = "woof-woof";
```

Using bracket notation, we can utilize variables as property names:

```javascript
var dynamicProperty = "bark";
myObject[dynamicProperty] = "woof-woof";
```

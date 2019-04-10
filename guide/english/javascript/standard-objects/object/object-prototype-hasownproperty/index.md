---
title: Object.prototype.hasOwnProperty
---
## Object.prototype.hasOwnProperty

### Syntax


`Object.hasOwnProperty(prop)`


### Description


The **hasOwnProperty()** method returns a <a href='https://developer.mozilla.org/en-US/docs/Glossary/Boolean' target='_blank' rel='nofollow'>boolean</a> indicating if the object owns the specified property.


This is a convenient method to check if an object has the specified property or not; returning true/false accordingly.


### Parameters

##### prop
A <a href='https://developer.mozilla.org/en-US/docs/Glossary/String' target='_blank' rel='nofollow'>string</a> or <a href='https://developer.mozilla.org/en-US/docs/Glossary/Symbol' target='_blank' rel='nofollow'>symbol</a> to test.


### Examples

using **hasOwnProperty()** to test if a property exist or not in a given object:

```js
var course = {
  name: 'freeCodeCamp',
  feature: 'is awesome',
}

var student = {
  name: 'enthusiastic student',
}

course.hasOwnProperty('name');  // returns true
course.hasOwnProperty('feature');   // returns true

student.hasOwnProperty('name');  // returns true
student.hasOwnProperty('feature'); // returns false
```

#### links

<a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>MDN hasOwnProperty</a>

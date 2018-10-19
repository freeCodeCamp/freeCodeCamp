---
title: Object Assign
---
## Object Assign

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/object/object-assign/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The `Object.assign()` method is used to 1) add properties and values to an existing object, 2) make a new copy of an existing object, or 3) combine multiple existing objects into a single object. The `Object.assign()` method requires one targetObject as a parameter and can accept an unlimited number of sourceObjects as additional parameters.

Important to note here is that the targetObject parameter will always be modified. If that parameter points to an existing object, then that object will be both modified and copied. If, however, you wish to create a copy of an object without modifying that original object, you can pass an empty object `{}` as the first (or targetObject) parameter and the object to be copied as the second (or sourceObject) parameter.

If objects passed as parameters into `Object.assign()` share the same properties (or keys), property values that come later in the parameters list will overwrite those which came earlier. 

**Syntax**

```javascript
Object.assign(targetObject, ...sourceObject)
```
**Return Value**

`Object.assign()` returns the targetObject.

**Examples**

_Modifying and Copying targetObject_
```javascript
let obj = {name: 'Dave', age: 30};

let objCopy = Object.assign(obj, {coder: true});

console.log(obj); // returns { name: 'Dave', age: 30, coder: true }
console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true }
```

_Copying targetObject Without Modification_
```javascript
let obj = {name: 'Dave', age: 30};

let objCopy = Object.assign({}, obj, {coder: true});

console.log(obj); // returns { name: 'Dave', age: 30 }
console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true }
```

_Objects With Same Properties_
```javascript
let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'};

let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'});

console.log(obj); // returns { name: 'Dave', age: 30, favoriteColor: 'blue' }
console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true }
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">MDN</a><br />
<a href="https://youtu.be/vM7Tif98Dlo">Intro to Object.assign in ES6 (Video)</a>


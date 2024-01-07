---
id: cf1111c1c11feddfaeb7bdef
title: Ein Array in ein anderes Array einbetten
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

Du kannst auch Arrays innerhalb anderer Arrays einbetten, wie unten gezeigt:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Dies wird auch als <dfn>Mehrdimensionales Array</dfn> bezeichnet.

# --instructions--

Erstelle ein verschachteltes Array mit dem Namen `myArray`.

# --hints--

`myArray` sollte mindestens ein Array in einem anderen Array eingebettet haben.

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```

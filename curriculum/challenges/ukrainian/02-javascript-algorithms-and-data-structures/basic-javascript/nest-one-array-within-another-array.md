---
id: cf1111c1c11feddfaeb7bdef
title: Вкладіть один масив всередину іншого масиву
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

Ви також можете вкладати масиви всередину інших масивів, як це показано нижче:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Це також називається <dfn>багатовимірний масив</dfn>.

# --instructions--

Створіть вкладений масив під назвою `myArray`.

# --hints--

`myArray` повинен мати щонайменше один масив, вкладений в інший масив.

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

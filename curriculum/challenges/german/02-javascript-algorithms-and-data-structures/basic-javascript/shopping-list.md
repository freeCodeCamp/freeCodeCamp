---
id: 56533eb9ac21ba0edf2244bc
title: Einkaufsliste
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Erstelle eine Einkaufsliste in der Variable `myList`. Die Liste sollte ein mehrdimensionales Array sein, das mehrere Subarrays enthält.

Das erste Element in jedem Subarray sollte einen String mit dem Namen des Elements enthalten. Das zweite Element sollte eine Zahl sein, welche die Menge repräsentiert, d.h.

```js
["Chocolate Bar", 15]
```

Es sollten mindestens 5 Subarrays in der Liste sein.

# --hints--

`myList` sollte ein Array sein.

```js
assert(isArray);
```

Die ersten Elemente in jedem deiner Subarrays sollten alle Strings sein.

```js
assert(hasString);
```

Die zweiten Elemente in jedem deiner Subarrays sollten alle Zahlen sein.

```js
assert(hasNumber);
```

Du solltest mindestens 5 Elemente in deiner Liste haben.

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```

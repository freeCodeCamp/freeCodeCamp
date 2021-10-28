---
id: 56533eb9ac21ba0edf2244bc
title: Lista della spesa
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Crea una lista della spesa nella variabile `myList`. L'elenco dovrebbe essere un array multidimensionale contenente diversi sotto-array.

Il primo elemento in ogni sotto-array dovrebbe contenere una stringa con il nome dell'elemento. Il secondo elemento dovrebbe essere un numero che rappresenta la quantità, per esempio

```js
["Chocolate Bar", 15]
```

Ci dovrebbero essere almeno 5 sotto-array nella lista.

# --hints--

`myList` dovrebbe essere un array.

```js
assert(isArray);
```

Il primo elemento in ciascuno dei sotto-array dovrebbe essere una stringa.

```js
assert(hasString);
```

Il secondo elemento in ciascuno dei sotto-array dovrebbe essere un numero.

```js
assert(hasNumber);
```

Dovresti avere almeno 5 articoli nella lista.

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

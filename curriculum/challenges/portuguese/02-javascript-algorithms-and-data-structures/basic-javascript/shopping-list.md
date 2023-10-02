---
id: 56533eb9ac21ba0edf2244bc
title: Criar lista de compras
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Crie uma lista de compras na variável `myList`. A lista deve ser um array multidimensional contendo diversos sub-arrays.

O primeiro elemento em cada sub-array deve conter uma string com o nome do item. O segundo elemento deve ser um número representando a quantidade, ou seja,

```js
["Chocolate Bar", 15]
```

Deve haver pelo menos 5 sub-arrays na lista.

# --hints--

`myList` deve ser um array.

```js
assert(isArray);
```

Os primeiros elementos em cada um dos seus sub-arrays devem ser todos strings.

```js
assert(hasString);
```

Os segundos elementos em cada um de seus sub-arrays devem ser todos números.

```js
assert(hasNumber);
```

Você deve ter pelo menos 5 items na sua lista.

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

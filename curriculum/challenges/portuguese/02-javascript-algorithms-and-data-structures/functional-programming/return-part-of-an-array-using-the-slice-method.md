---
id: 587d7b90367417b2b2512b65
title: Retornar parte de um array usando o método slice
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

O método `slice` retorna uma fatia de elementos de um array. Ele pode receber dois argumentos, sendo o primeiro o índice de onde começar a fatiar e o segundo de onde terminar. O índice de fim não é inclusivo. Se os argumentos não forem providenciados, o padrão é começar pelo início e terminar no fim, ou seja, é uma forma simples de criar uma cópia do array inteiro. O método `slice` retorna um novo array sem modificar o original.

Exemplo:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` terá o valor `["Dog", "Tiger"]`.

# --instructions--

Use o método `slice` na função `sliceArray` para retornar parte do array `anim` dado os índices `beginSlice` e `endSlice` providenciados. A função deve retornar um array.

# --hints--

Você deve usar o método `slice`.

```js
assert(code.match(/\.slice/g));
```

A variável `inputAnim` não deve ser alterada.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` deve retornar `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` deve retornar `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` deve retornar `["Dog", "Tiger", "Zebra"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```

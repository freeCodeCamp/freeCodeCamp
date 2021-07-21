---
id: 56592a60ddddeae28f7aa8e1
title: Acessar arrays multidimensionais com índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

Uma maneira de pensar em um array <dfn>multi-dimensional</dfn> é como um *array de arrays*. Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se refere às entradas no array mais exterior (o primeiro nível), e cada par adicional de colchetes refere-se ao próximo nível de entradas interno.

**Exemplo**

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
```

`arr[3]` é `[[10, 11, 12], 13, 14]`, `arr[3][0]` é `[10, 11, 12]`, e `arr[3][0][1]` é `11`.

**Nota:** Não deve haver nenhum espaço entre o nome do array e os colchetes como `array [0][0]` e até mesmo `array [0] [0]` não é permitido. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

# --instructions--

Utilizando notação de colchetes selecione um elemento de `myArray` de forma que `myData` seja igual a `8`.

# --hints--

`myData` deve ser igual a `8`.

```js
assert(myData === 8);
```

Você deve usar notação de colchetes para ler o valor correto de `myArray`.

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[0][0];
```

# --solutions--

```js
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```

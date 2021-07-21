---
id: cf1111c1c11feddfaeb8bdef
title: Modificar dados de array com índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

Diferente de strings, as entradas de um array são <dfn>mutáveis</dfn> e pode ser modificadas livremente.

**Exemplo**

```js
var ourArray = [50,40,30];
ourArray[0] = 15;
```

`ourArray` agora tem o valor `[15, 40, 30]`.

**Nota:** Não deve ter espaços entre o nome do array e os colchetes, como `array [0]`. Embora JavaScript é capaz de processar isso corretamente, isso pode causar confusão em outros programadores lendo o seu código.

# --instructions--

Modifique o dado armazenado no índice `0` de `myArray` para um valor de `45`.

# --hints--

`myArray` agora deve ser `[45,64,99]`.

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Você deve usar o índice correto para modificar o valor em `myArray`.

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
var myArray = [18,64,99];

// Only change code below this line
```

# --solutions--

```js
var myArray = [18,64,99];
myArray[0] = 45;
```

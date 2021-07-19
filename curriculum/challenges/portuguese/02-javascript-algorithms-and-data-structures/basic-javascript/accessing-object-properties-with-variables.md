---
id: 56533eb9ac21ba0edf2244c9
title: Acessando Propriedades de Objetos com Variáveis
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Outro uso de notação de colchetes em objetos é para acessar a propriedade a qual está armazenada como o valor de uma variável. Isso pode ser muito útil para iterar através das propriedades de um objeto ou quando acessando uma tabela de pesquisa.

Aqui está um exemplo de usar uma variável para acessar uma propriedade:

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
```

A string `Doberman` seria exibida no console.

Outra forma de você usar esse conceito é quando o nome da propriedade é coletado dinamicamente, durante a execução do programa, da seguinte forma:

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` teria o valor da string `propName` e a string `John` seria exibida no console.

Observe que *não* usamos aspas em torno do nome da variável ao usá-la para acessar a propriedade, porque estamos usando o *valor* da variável, e não o *nome*.

# --instructions--

Defina a variável `playerNumber` para ser `16`. Então, use a variável para procurar o nome do jogador e atribuí-la a `player`.

# --hints--

`playerNumber` deve ser um número

```js
assert(typeof playerNumber === 'number');
```

A variável `player` deve ser uma string

```js
assert(typeof player === 'string');
```

O valor de `player` deve ser a string `Montana`

```js
assert(player === 'Montana');
```

Você deve usar a notação de colchetes para acessar `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

Você não deve usar o valor `Montana` diretamente para a variável `player`.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Você deve estar usando a variável `playerNumber` na sua notação de colchetes

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line
```

# --solutions--

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```

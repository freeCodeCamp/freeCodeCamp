---
id: 5a2efd662fb457916e1fe604
title: Iterar com laços do...while em JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

O próximo tipo de laço que você aprenderá é chamado de laço `do...while`. O laço `do...while` é chamado assim porque primeiro fará algo (`do`) ou executará algo uma vez dentro do bloco de código, não importando o que acontecer. Em seguida, continuará a executar o laço enquanto (`while`) a condição for `true`.

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

O exemplo acima se comporta de forma similar a outros tipos de laços, e o array resultante se parecerá com `[0, 1, 2, 3, 4]`. No entanto, o que torna o laço `do...while` diferente de outros laços é como ele se comporta quando uma condição falha na primeira verificação. Vamos ver isso na prática. Aqui está um laço comum `while` que rodará o código no laço enquanto `i < 5`:

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Nesse exemplo, inicializamos o valor de `ourArray` como um array vazio e o valor de `i` sendo 5. Quando executamos o laço `while`, a condição é igual a `false` porque `i` não é menor que 5, portanto nós não executamos o código dentro do laço. O resultado é que `ourArray` terminará sem valores adicionados a ele, e ainda se parecerá com `[]` quando todas as linhas do código no exemplo acima forem completamente executadas. Agora, dê uma olhada no laço `do...while`:

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

Nesse caso, nós inicializamos o valor de `i` para 5, assim como fizemos com o laço `while`. Quando chegamos na próxima linha, não há condição a ser analisada, então nós vamos ao código dentro das chaves e o executamos. Nós adicionaremos um único elemento ao array e então incrementamos `i` antes de chegarmos à verificação da condição. Quando nós finalmente temos o resultado da condição `i < 5` na última linha, nós notamos que `i` agora é 6, o que não cumpre a verificação da condição, então nós saímos do laço e terminamos. Ao final do exemplo acima, o valor de `ourArray` é `[5]`. Essencialmente, um laço `do...while` garante que o código dentro do laço será executado pelo menos uma vez. Vamos tentar fazer um laço `do...while` funcionar inserindo valores em um array.

# --instructions--

Altere o laço `while` no código para um laço `do...while` para que o laço adicione apenas o número `10` no `myArray` e `i` será igual a `11` quando seu código terminar de rodar.

# --hints--

Você deve usar um laço `do...while` nesse exercício.

```js
assert(code.match(/do/g));
```

`myArray` deve ser igual a `[10]`.

```js
assert.deepEqual(myArray, [10]);
```

`i` deve ser igual a `11`

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```

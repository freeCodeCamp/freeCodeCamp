---
id: 565bbe00e9cc8ac0725390f4
title: Contar cartas
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

No jogo de casino Blackjack, um jogador pode determinar se tem uma vantagem sobre a próxima mão da casa, mantendo o número relativo de cartas altas e baixas restantes no baralho. Isso se chama "contar as cartas".

Ter cartas mais altas restantes no baralho favorece o jogador. A cada carta é atribuído um valor de acordo com a tabela abaixo. Quando o contador for positivo, o jogador deve apostar alto. Quando a contagem for zero ou negativa, o jogador deverá apostar baixo.

<table class='table table-striped'><thead><tr><th>Mudança na contagem</th><th>Cartas</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

Você vai escrever uma função de contagem de cartas. A função receberá um parâmetro `card`, que pode ser um número ou uma string, e incrementar ou decrementar a variável global `count` de acordo com o valor da carta (veja a tabela). Em seguida, a função retornará a string com o valor atual de contagem (variável count) e a string `Bet` se a contagem for positiva, ou `Hold` se a contagem for zero ou negativa. A contagem atual e a decisão do jogador (`Bet` ou `Hold`) deve ser separado por um único espaço.

**Exemplo de saída:** `-3 Hold` ou `5 Bet`

**Dica**  
NÃO redefina o valor de `count` para 0 quando o valor for 7, 8, ou 9. Não retorne um array.  
Não inclua aspas (simples ou duplas) na saída.

# --hints--

A função deve retornar um valor para a contagem e o texto (`Bet` ou `Hold`) com um caractere de espaço entre eles.

```js
assert(//
  (function () {
    count = 0;
    let out = cc(10);
    const hasSpace = /-?\d+ (Bet|Hold)/.test('' + out);
    return hasSpace;
  })()
);
```

A sequência de cartas 2, 3, 4, 5, 6 deve retornar a string `5 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(3);
    cc(4);
    cc(5);
    var out = cc(6);
    if (out === '5 Bet') {
      return true;
    }
    return false;
  })()
);
```

A sequência de cartas 7, 8, 9 deve retornar a string `0 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(7);
    cc(8);
    var out = cc(9);
    if (out === '0 Hold') {
      return true;
    }
    return false;
  })()
);
```

A sequência de cartas 10, J, Q, K, A deve retornar a string `-5 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(10);
    cc('J');
    cc('Q');
    cc('K');
    var out = cc('A');
    if (out === '-5 Hold') {
      return true;
    }
    return false;
  })()
);
```

A sequência de cartas 3, 7, Q, 8, A deve retornar a string `-1 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(7);
    cc('Q');
    cc(8);
    var out = cc('A');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

A sequência de cartas 2, J, 9, 2, 7 deve retornar a string `1 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc('J');
    cc(9);
    cc(2);
    var out = cc(7);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

A sequência de cartas 2, 2, 10 deve retornar a string `1 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(2);
    var out = cc(10);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

A sequência de cartas 3, 2, A, 10, K deve retornar a string `-1 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(2);
    cc('A');
    cc(10);
    var out = cc('K');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

# --seed--

## --seed-contents--

```js
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

# --solutions--

```js
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

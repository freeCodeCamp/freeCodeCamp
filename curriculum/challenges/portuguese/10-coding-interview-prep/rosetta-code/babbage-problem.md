---
id: 594db4d0dedb4c06a2a4cefd
title: Problema de Babbage
challengeType: 1
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

Charles Babbage, olhando com antecedência para o tipo de problemas que sua Máquina Analítica poderia resolver, deu este exemplo:

<blockquote>
  Qual é o menor inteiro positivo cujo quadrado termina nos dígitos 269.696?
  <footer style='margin-left: 2em;'>Babbage, em carta ao Lord Bowden, 1837; veja Hollingdale e Tootill, <i>Electronic Computers</i>, segunda edição, 1970, p. 125.</footer>
</blockquote>

Ele acreditava que a resposta seria 99.736, cujo quadrado é 9.947.269.696, mas ele não tinha certeza.

A tarefa é descobrir se Babbage achou a resposta certa.

# --instructions--

Implemente uma função que retorna o menor inteiro que satisfaça o problema de Babbage. Se Babbage estava certo, retorne o número de Babbage.

# --hints--

`babbage` deve ser uma função.

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` não deve retornar 99736 (existe uma resposta menor).

```js
assert.equal(babbage(babbageAns, endDigits), answer);
```

# --seed--

## --after-user-code--

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;
```

## --seed-contents--

```js
function babbage(babbageNum, endDigits) {

  return true;
}
```

# --solutions--

```js
function babbage(babbageAns, endDigits) {
  const babbageNum = Math.pow(babbageAns, 2);
  const babbageStartDigits = parseInt(babbageNum.toString().replace('269696', ''));
  let answer = 99736;

  // count down from this answer and save any sqrt int result. return lowest one
  for (let i = babbageStartDigits; i >= 0; i--) {
    const num = parseInt(i.toString().concat('269696'));
    const result = Math.sqrt(num);
    if (result === Math.floor(Math.sqrt(num))) {
      answer = result;
    }
  }

  return answer;
}
```

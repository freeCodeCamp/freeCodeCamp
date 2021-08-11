---
id: cf1111c1c12feddfaeb1bdef
title: Gerar números inteiros aleatórios com JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se usarmos isso para gerar números inteiros aleatórios.

<ol><li>Use <code>Math.random()</code> para gerar um decimal aleatório.</li><li>Multiplique o decimal aleatório por <code>20</code>.</li><li>Use outra função, <code>Math.floor()</code> para arredondar o número para baixo para o número inteiro mais próximo.</li></ol>

Lembre-se de que `Math.random()` pode nunca retornar um `1` e, por estarmos arredondando, é impossível também receber `20`. Essa técnica nos dará um número inteiro entre `0` e `19`.

Juntando tudo, é assim que nosso código se parece:

```js
Math.floor(Math.random() * 20);
```

Nós estamos chamando `Math.random()`, multiplicando o resultado por 20, e em seguida passando o valor para a função `Math.floor()` para arredondar o valor para o número inteiro mais próximo abaixo.

# --instructions--

Use essa técnica para gerar e retornar um número inteiro aleatório entre `0` e `9`.

# --hints--

O resultado de `randomWholeNum` deve ser um número inteiro.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Você deve usar `Math.random` para gerar um número aleatório.

```js
assert(code.match(/Math.random/g).length >= 1);
```

Você deve ter multiplicado o resultado de `Math.random` por 10 para torná-lo um número que está entre zero e nove.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Você deve usar `Math.floor` para remover a parte decimal do número.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

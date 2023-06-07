---
id: cf1111c1c12feddfaeb1bdef
title: Gerar números inteiros aleatórios com JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Você pode gerar números decimais aleatórios com `Math.random()`, mas, às vezes, você precisa gerar números naturais aleatórios. O processo a seguir fornecerá um número natural aleatório menor que `20`:

1. Use `Math.random()` para gerar um número decimal aleatório.
2. Multiplique o número decimal aleatório por `20`.
3. Use `Math.floor()` para arredondar o número para baixo para o número natural mais próximo.

Lembre-se de que `Math.random()` nunca pode retornar um `1`. Então, é impossível realmente obter `20`, já que você está arredondando para baixo com `Math.floor()`. Esse processo fornece um número natural aleatório no intervalo de `0` até `19`.

Juntando tudo, essa é a aparência do código:

```js
Math.floor(Math.random() * 20);
```

Estamos chamando `Math.random()`, multiplicando o resultado por 20 e passando o valor para a função `Math.floor()` para arredondar o valor para o número natural mais próximo abaixo.

# --instructions--

Use essa técnica para gerar e retornar um número natural aleatório entre `0` e `9`.

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

Você deve ter multiplicado o resultado de `Math.random` por 10 para torná-lo um número entre zero e nove.

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
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

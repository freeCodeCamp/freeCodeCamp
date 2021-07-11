---
id: 56533eb9ac21ba0edf2244ad
title: Decremente um Número com JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

Você pode facilmente <dfn>decrementar</dfn> ou diminuir uma variável por um com o operador `--`.

```js
i--;
```

é o equivalente a

```js
i = i - 1;
```

**Nota:** A linha inteira torna-se `i--;`, eliminando a necessidade para o sinal de igual (atribuição).

# --instructions--

Altere o código para usar o operador `--` na variável `myVar`.

# --hints--

`myVar` deve ser igual a `10`.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` deve ser alterado.

```js
assert(
  /var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

Você deve usar o operador `--` na variável `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

Você não deve alterar o código acima do comentário especificado.

```js
assert(/var myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
var myVar = 11;
myVar--;
```

---
id: 587d7b83367417b2b2512b37
title: Entender a diferença entre o console do freeCodeCamp e do navegador
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Você pode ter percebido que alguns dos desafios do freeCodeCamp incluem seu próprio console. Este console se comporta um pouco diferente do console do navegador.

Existem muitos métodos para usar no `console` para exibir mensagens. `log`, `warn` e `clear` são alguns deles. O console do freeCodeCamp só produzirá mensagens de `log`. Já o console do navegador mostrará todas as mensagens. Quando você fizer alterações em seu código, ele será executado e mostrará automaticamente os logs. O console do freeCodeCamp é limpo cada vez que o código é executado.

# --instructions--

Primeiro, abra o console do navegador para poder ver os registros (logs). Para fazer isso, clique com o botão direito na barra de navegação do freeCodeCamp, na parte superior, e clique em `inspect` na maioria dos navegadores. Em seguida, encontre a aba `console` na janela que é aberta.

Depois disso, use `console.log` para registrar a variável `output`. Veja os dois consoles para ver o log. Por fim, use `console.clear` depois do registro para limpar o console do navegador. Veja a diferença entre os dois consoles.

# --hints--

Você deve usar `console.log()` para imprimir a variável `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

Você deve usar `console.clear()` para limpar o console do navegador.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Você deve limpar o console após o registro (log).

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```

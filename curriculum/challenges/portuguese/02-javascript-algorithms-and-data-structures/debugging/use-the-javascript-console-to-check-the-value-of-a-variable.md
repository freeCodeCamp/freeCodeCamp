---
id: 587d7b83367417b2b2512b33
title: Usar o console do JavaScript para verificar o valor de uma variável
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

O Chrome e o Firefox possui excelentes consoles JavaScript, também conhecidos como DevTools, para depurar seu JavaScript.

Você pode encontrar as Developer tools no menu do seu Chrome ou Web Console no menu do Firefox. Se você estiver usando um navegador diferente, ou um telefone móvel, recomendamos fortemente mudar para o Firefox ou Chrome Desktop.

O método `console.log()`, o qual "imprime" a saída do que está nos seus parênteses no console, provavelmente será a ferramenta de debug mais útil. Colocá-lo em pontos estratégicos no seu código pode mostrar a você os valores intermediários de variáveis. É uma boa prática ter uma ideia do que deveria ser a saída antes de olhar o que é. Ter pontos de verificação para ver o status de seus cálculos ao longo do seu código ajudará a encontrar onde o problema está.

Aqui está um exemplo para imprimir a string `Hello world!` no console:

```js
console.log('Hello world!');
```

# --instructions--

Use o método `console.log()` para imprimir o valor da variável `a` aonde anotou no código.

# --hints--

O código deve usar `console.log()` para verificar o valor da variável `a`.

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```

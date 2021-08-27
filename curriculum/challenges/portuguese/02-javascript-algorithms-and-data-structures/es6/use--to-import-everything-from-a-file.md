---
id: 587d7b8c367417b2b2512b57
title: Usar * para importar tudo de um arquivo
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Suponha que você tem um arquivo e deseja importar todo o conteúdo dele no arquivo atual. Isso pode ser feito com a sintaxe `import * as`. Aqui está um exemplo onde todo o conteúdo de um arquivo chamado `math_function.js` é importado em um arquivo no mesmo diretório:

```js
import * as myMathModule from "./math_functions.js";
```

A instrução `import` acima criará um objeto chamado `myMathModule`. Esse nome é totalmente arbitrário. Você pode escolher qualquer outro nome que seja apropriado para sua aplicação. O objeto conterá todas as exportações do arquivo `math_functions.js`. Dessa forma, você pode acessar as funções exportadas da mesma forma que você acessa as propriedades de um objeto. Aqui está um exemplo de como você pode usar as funções `add` e `subtract` que foram importadas:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

O código nesse desafio requer o conteúdo do arquivo: `string_functions.js`, o qual está no mesmo diretório que o arquivo atual. Use a sintaxe `import * as` para importar tudo do arquivo em um objeto chamado `stringFunctions`.

# --hints--

Você deve usar a sintaxe `import * as`.

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

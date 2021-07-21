---
id: 587d7b87367417b2b2512b3f
title: Diferenciar entre as palavras-chave var e let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Um dos maiores problemas ao declarar variáveis com a palavra-chave `var` é que você pode sobrescrever a declaração da variável sem perceber.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

Aqui o console irá exibir a string `David`.

Como você pode ver no código acima, a variável `camper` é originalmente declarada com o valor `James` e então substituída pelo valor `David`. Em uma aplicação pequena, você pode não encontrar esse tipo de problema, mas quando seu código se tornar maior, você pode acidentalmente sobrescrever uma variável que você não tinha a intenção. Como esse comportamente não lança nenhum erro, procurar e corrigir bugs se torna mais difícil.  
Para resolver esse potencial problema com a palavra-chave `var`, uma nova palavra-chave chamada `let` foi introduzida no ES6. Se você tentar substituir `var` por `let` nas declarações de variável do código acima, o resultado será um erro.

```js
let camper = 'James';
let camper = 'David';
```

Esse erro pode ser visto no console do seu navegador. Então, diferente de `var`, ao usar `let`, uma variável com o mesmo nome só pode ser declarada uma única vez. Note o `"use strict"`. Isso habilita o Modo Estrito, o qual captura erros de codificação comum e ações "não seguras". Por exemplo:

```js
"use strict";
x = 3.14;
```

O ´codigo acima irá exibir o erro: `x is not defined`.

# --instructions--

Atualize o código para que apenas a palavra-chave `let` seja usada.

# --hints--

A palavra-chave `var` não deve existir no código.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

A variável `catName` deve ser uma string de valor `Oliver`.

```js
assert(catName === 'Oliver');
```

A variável `quote` deve ser uma string de valor `Oliver says Meow!`

```js
assert(quote === 'Oliver says Meow!');
```

# --seed--

## --seed-contents--

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

# --solutions--

```js
let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();
```

---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: Explore as diferenças entre as palavras-chave var e let
---

## Description
<section id='description'>
Um dos maiores problemas com a declaração de variáveis com a palavra-chave <code>var</code> é que você pode sobrescrever declarações de variáveis sem um erro.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// retorna 'David'
```

Como você pode ver no código acima, a variável `camper` é declarada originalmente como `James` e, em seguida, sobrescrita como sendo `David`.
Em um aplicativo pequeno, você pode não encontrar esse tipo de problema, mas quando seu código se torna maior, você pode sobrescrever acidentalmente uma variável que não pretendia sobrescrever.
Como esse comportamento não gera um erro, a pesquisa e a correção de erros se tornam mais difíceis.
Uma nova palavra-chave chamada <code>let</code> foi introduzida no ES6 para resolver esse possível problema com a palavra-chave <code>var</code>.
Se você substituísse <code>var</code> por <code>let</code> nas declarações de variáveis do código acima, o resultado seria um erro.

```js
let camper = 'James';
let camper = 'David'; // gera um erro
```

Este erro pode ser visto no console do seu navegador. 
Portanto, ao contrário de <code>var</code>, ao usar <code>let</code>, uma variável com o mesmo nome só pode ser declarada uma vez.
Observe o <code>"use strict"</code>. Isso habilita o Modo Estrito, que detecta erros comuns de codificação e ações "inseguras". Por exemplo:

```js
"use strict";
x = 3.14; // gera um erro porque x não está declarado
```

</section>

## Instructions
<section id='instructions'>
Atualize o código para que ele use apenas a palavra-chave <code>let</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> não existe no código.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>catName</code> deve ser <code>Oliver</code>.
    testString: assert(catName === "Oliver");
  - text: <code>quote</code> deve ser <code>"Oliver says Meow!"</code>
    testString: assert(quote === "Oliver says Meow!");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>

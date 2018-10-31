---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: Explore as diferenças entre o var e deixe
---

## Description
<section id="description"> Um dos maiores problemas com a declaração de variáveis ​​com a palavra-chave <code>var</code> é que você pode sobrescrever declarações de variáveis ​​sem um erro. <blockquote> var camper = &#39;James&#39;; <br> var camper = &#39;David&#39;; <br> console.log (campista); <br> // loga &#39;David&#39; </blockquote> Como você pode ver no código acima, a variável <code>camper</code> é originalmente declarada como <code>James</code> e, em seguida, sobrescrita como sendo <code>David</code> . Em um aplicativo pequeno, você pode não encontrar esse tipo de problema, mas quando o código se torna maior, você pode acidentalmente sobrescrever uma variável que não pretende sobrescrever. Como esse comportamento não gera um erro, a pesquisa e a correção de erros se tornam mais difíceis. <br> Uma nova palavra-chave chamada <code>let</code> foi introduzida no ES6 para resolver esse possível problema com a palavra-chave <code>var</code> . Se você fosse substituir <code>var</code> com <code>let</code> nas declarações de variáveis ​​do código acima, o resultado seria um erro. <blockquote> deixe campista = &#39;James&#39;; <br> deixe campista = &#39;David&#39;; // lança um erro </blockquote> Este erro pode ser visto no console do seu navegador. Portanto, ao contrário de <code>var</code> , ao usar <code>let</code> , uma variável com o mesmo nome só pode ser declarada uma vez. Observe o <code>&quot;use strict&quot;</code> . Isso habilita o Modo Estrito, que detecta erros comuns de codificação e ações &quot;inseguras&quot;. Por exemplo: <blockquote> &quot;use strict&quot;; <br> x = 3,14; // lança um erro porque x não está declarado </blockquote></section>

## Instructions
<section id="instructions"> Atualize o código para que ele use apenas a palavra-chave <code>let</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> não existe no código.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: <code>catName</code> deve ser <code>Oliver</code> .
    testString: 'assert(catName === "Oliver", "<code>catName</code> should be <code>Oliver</code>.");'
  - text: <code>quote</code> deve ser <code>&quot;Oliver says Meow!&quot;</code>
    testString: 'assert(quote === "Oliver says Meow!", "<code>quote</code> should be <code>"Oliver says Meow!"</code>");'

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
// solution required
```
</section>

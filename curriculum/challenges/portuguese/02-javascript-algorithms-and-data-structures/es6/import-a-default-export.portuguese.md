---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
videoUrl: ''
localeTitle: Importar uma exportação padrão
---

## Description
<section id="description"> No último desafio, você aprendeu sobre <code>export default</code> e seus usos. É importante observar que, para importar uma exportação padrão, você precisa usar uma sintaxe de <code>import</code> diferente. No exemplo a seguir, temos uma função, <code>add</code> , que é a exportação padrão de um arquivo, <code>&quot;math_functions&quot;</code> . Aqui está como importá-lo: <blockquote> import add from &quot;math_functions&quot;; <br> add(5,4); // retornará 9 </blockquote> A sintaxe difere em um local de chave - o valor importado, <code>add</code> , não é cercado por chaves, <code>{}</code> . Ao contrário dos valores exportados, o método primário de importar uma exportação padrão é simplesmente escrever o nome do valor após a <code>import</code> . </section>

## Instructions
<section id="instructions"> No código a seguir, por favor, importe a exportação padrão, <code>subtract</code> , do arquivo <code>&quot;math_functions&quot;</code> , encontrado no mesmo diretório que este arquivo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Importa corretamente <code>export default</code> método <code>export default</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+subtract\s+from\s+"math_functions"/g), "Properly imports <code>export default</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
subtract(7,4);

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'math_functions') {
return function(a, b) {
return a - b;
}}};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

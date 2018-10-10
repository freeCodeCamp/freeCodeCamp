---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
videoUrl: ''
localeTitle: Use * para importar tudo de um arquivo
---

## Description
<section id="description"> Suponha que você tenha um arquivo que você deseja importar todo o seu conteúdo para o arquivo atual. Isso pode ser feito com a sintaxe <dfn>import *</dfn> . Aqui está um exemplo onde o conteúdo de um arquivo chamado <code>&quot;math_functions&quot;</code> é importado para um arquivo no mesmo diretório: <blockquote> import * como myMathModule de &quot;math_functions&quot;; <br> myMathModule.add (2,3); <br> myMathModule.subtract (5,3); </blockquote> E quebrando esse código: <blockquote> import * como object_with_name_of_your_choice de &quot;file_path_goes_here&quot; <br> object_with_name_of_your_choice.imported_function </blockquote> Você pode usar qualquer nome após a <code>import * as</code> parte da declaração. Para utilizar esse método, é necessário um objeto que receba os valores importados. A partir daqui, você usará a notação de ponto para chamar seus valores importados. </section>

## Instructions
<section id="instructions"> O código abaixo requer o conteúdo de um arquivo, <code>&quot;capitalize_strings&quot;</code> , encontrado no mesmo diretório, importado. Adicione a instrução de <code>import *</code> apropriada ao topo do arquivo, usando o objeto fornecido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Usa corretamente a <code>import * as</code> sintaxe.
    testString: 'assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), "Properly uses <code>import * as</code> syntax.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'capitalize_strings') {
return {
capitalize: str => str.toUpperCase(),
lowercase: str => str.toLowerCase()
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

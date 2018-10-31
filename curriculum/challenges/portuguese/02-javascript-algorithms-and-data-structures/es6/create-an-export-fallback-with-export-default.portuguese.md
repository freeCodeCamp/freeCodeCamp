---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
videoUrl: ''
localeTitle: Criar um retorno de exportação com padrão de exportação
---

## Description
<section id="description"> Na lição de <code>export</code> , você aprendeu sobre a sintaxe conhecida como <dfn>exportação nomeada</dfn> . Isso permitiu que você disponibilizasse várias funções e variáveis ​​para uso em outros arquivos. Há outra sintaxe de <code>export</code> você precisa conhecer, conhecida como <dfn>padrão de exportação</dfn> . Normalmente, você usará essa sintaxe se apenas um valor estiver sendo exportado de um arquivo. Também é usado para criar um valor de fallback para um arquivo ou módulo. Aqui está um exemplo rápido de <code>export default</code> : <blockquote> função padrão de exportação add (x, y) { <br> return x + y; <br> } </blockquote> Nota: Como <code>export default</code> é usado para declarar um valor de fallback para um módulo ou arquivo, você pode ter apenas um valor como uma exportação padrão em cada módulo ou arquivo. Além disso, você não pode usar <code>export default</code> com <code>var</code> , <code>let</code> ou <code>const</code> </section>

## Instructions
<section id="instructions"> A seguinte função deve ser o valor de fallback para o módulo. Por favor, adicione o código necessário para fazer isso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adequado usado de fallback de <code>export</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+default\s+function\s+subtract\(x,y\)\s+{return\s+x\s-\s+y;}/g), "Proper used of <code>export</code> fallback.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
function subtract(x,y) {return x - y;}

```

</div>

### Before Test
<div id='js-setup'>

```js
window.exports = function(){};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

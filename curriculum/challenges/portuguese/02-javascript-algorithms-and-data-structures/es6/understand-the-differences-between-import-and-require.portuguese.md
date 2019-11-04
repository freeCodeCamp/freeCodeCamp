---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
challengeType: 1
videoUrl: ''
localeTitle: Entenda as diferenças entre importar e exigir
---

## Description
<section id="description"> No passado, a função <code>require()</code> seria usada para importar as funções e o código em arquivos e módulos externos. Embora seja prático, isso apresenta um problema: alguns arquivos e módulos são bastante grandes e você pode precisar apenas de determinados códigos desses recursos externos. O ES6 nos fornece uma ferramenta muito útil, conhecida como <dfn>importação</dfn> . Com ele, podemos escolher quais partes de um módulo ou arquivo carregar em um determinado arquivo, economizando tempo e memória. Considere o seguinte exemplo. Imagine que <code>math_array_functions</code> tenha cerca de 20 funções, mas eu só preciso de um, <code>countItems</code> , no meu arquivo atual. A antiga abordagem <code>require()</code> me forçaria a trazer todas as 20 funções. Com essa nova sintaxe de <code>import</code> , posso trazer apenas a função desejada, assim: <blockquote> import {countItems} from &quot;math_array_functions&quot; </blockquote> Uma descrição do código acima: <blockquote> import {function} from &quot;file_path_goes_here&quot; <br> // Também podemos importar variáveis ​​da mesma maneira! </blockquote> Existem algumas maneiras de escrever uma declaração de <code>import</code> , mas o acima é um caso de uso muito comum. <strong>Nota</strong> <br> O espaço em branco ao redor da função dentro das chaves é uma prática recomendada - facilita a leitura da declaração de <code>import</code> . <strong>Nota</strong> <br> As lições desta seção tratam de recursos que não são do navegador. <code>import</code> , e as declarações que introduzimos no restante dessas lições, não funcionarão diretamente em um navegador. No entanto, podemos usar várias ferramentas para criar código a partir disso para que funcione no navegador. <strong>Nota</strong> <br> Na maioria dos casos, o caminho do arquivo requer um <code>./</code> antes dele; caso contrário, o nó procurará no diretório <code>node_modules</code> primeiro tentando carregá-lo como uma dependência. </section>

## Instructions
<section id="instructions"> Adicione a declaração de <code>import</code> apropriada que permitirá que o arquivo atual use a função <code>capitalizeString</code> . O arquivo onde esta função reside é chamado <code>&quot;string_functions&quot;</code> , e está no mesmo diretório que o arquivo atual. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: declaração de <code>import</code> válida
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|")string_functions\1/g), "valid <code>import</code> statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
capitalizeString("hello!");

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function (str) {
if (str === 'string_functions') {
return {
capitalizeString: str => str.toUpperCase()
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

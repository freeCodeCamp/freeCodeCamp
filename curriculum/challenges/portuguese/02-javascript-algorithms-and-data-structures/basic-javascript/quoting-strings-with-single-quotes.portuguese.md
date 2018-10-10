---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: ''
localeTitle: Citando Strings com Citações Únicas
---

## Description
<section id="description"> Valores de <dfn>string</dfn> em JavaScript podem ser escritos com aspas simples ou duplas, contanto que você comece e termine com o mesmo tipo de cotação. Ao contrário de algumas outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript. <blockquote> doubleQuoteStr = &quot;Esta é uma string&quot;; <br> singleQuoteStr = &#39;Esta também é uma string&#39;; </blockquote> A razão pela qual você pode querer usar um tipo de citação sobre o outro é se você quer usar ambos em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e colocar a conversa entre aspas. Outro uso para isso seria salvar uma tag <code>&lt;a&gt;</code> com vários atributos entre aspas, tudo dentro de uma string. <blockquote> conversation = &#39;Finn exclama a Jake, &quot;Algébrico!&quot;&#39;; </blockquote> No entanto, isso se torna um problema se você precisar usar as cotas mais externas dentro dele. Lembre-se, uma string tem o mesmo tipo de citação no começo e no fim. Mas se você tiver a mesma cotação em algum lugar no meio, a string parará antes e lançará um erro. <blockquote> goodStr = &#39;Jake pergunta a Finn: &quot;Ei, vamos em uma aventura?&quot;&#39;; <br> badStr = &#39;Finn responde: &quot;Vamos!&quot;&#39;; // lança um erro </blockquote> No <dfn>goodStr</dfn> acima, você pode usar as <dfn>duaspas</dfn> com segurança usando a barra invertida <code>\</code> como um caractere de escape. <strong>Nota</strong> <br> A contrabarra <code>\</code> não deve ser confundida com a barra <code>/</code> . Eles não fazem a mesma coisa. </section>

## Instructions
<section id="instructions"> Altere a string fornecida para uma string com aspas simples no início e no final e sem caracteres de escape. Agora, a tag <code>&lt;a&gt;</code> na string usa aspas duplas em todos os lugares. Você precisará alterar as aspas externas para aspas simples para poder remover os caracteres de escape. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Remova todas as <code>backslashes</code> ( <code>\</code> )
    testString: 'assert(!/\\/g.test(code) && myStr.match("\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*"), "Remove all the <code>backslashes</code> (<code>\</code>)");'
  - text: 'Você deve ter duas aspas simples <code>&#39;</code> e quatro aspas duplas <code>&quot;</code>'
    testString: 'assert(code.match(/"/g).length === 4 && code.match(/"/g).length === 2, "You should have two single quotes <code>&#39;</code> and four double quotes <code>&quot;</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

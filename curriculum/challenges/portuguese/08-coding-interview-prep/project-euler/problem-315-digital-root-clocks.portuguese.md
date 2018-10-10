---
id: 5900f4a71000cf542c50ffba
challengeType: 5
title: 'Problem 315: Digital root clocks'
videoUrl: ''
localeTitle: 'Problema 315: Relógios Raiz Digitais'
---

## Description
<section id="description"> Sam e Max são convidados a transformar dois relógios digitais em dois relógios &quot;raiz digital&quot;. Um relógio de raiz digital é um relógio digital que calcula as raízes digitais passo a passo. <p> Quando um relógio é alimentado com um número, ele irá mostrá-lo e então iniciará o cálculo, mostrando todos os valores intermediários até chegar ao resultado. Por exemplo, se o relógio for alimentado com o número 137, ele mostrará: &quot;137&quot; → &quot;11&quot; → &quot;2&quot; e depois ficará preto, aguardando o próximo número. </p><p> Cada número digital consiste em alguns segmentos de luz: três horizontais (superior, intermediário, inferior) e quatro verticais (superior esquerdo, superior direito, inferior esquerdo, inferior direito). O número &quot;1&quot; é constituído por vertical superior direito e inferior direito, o número &quot;4&quot; é formado por meio horizontal e vertical superior esquerdo, superior direito e inferior direito. Número &quot;8&quot; acende todos eles. </p><p> Os relógios consomem energia apenas quando os segmentos são ligados / desligados. Ativar um &quot;2&quot; custará 5 transições, enquanto um &quot;7&quot; custará apenas 4 transições. </p><p> Sam e Max construíram dois relógios diferentes. </p><p> O relógio de Sam é alimentado, por exemplo, número 137: o relógio mostra &quot;137&quot;, o painel é desligado, o próximo número (&quot;11&quot;) é ligado, o painel é desligado novamente e finalmente o último número (&quot;2 &quot;) está ligado e, depois de algum tempo, desligado. Para o exemplo, com o número 137, o relógio de Sam requer: &quot;137&quot;: (2 + 5 + 4) × 2 = 22 transições (&quot;137&quot; ligado / desligado). &quot;11&quot;: (2 + 2) × 2 = 8 transições (&quot;11&quot; ligado / desligado). &quot;2&quot;: (5) × 2 = 10 transições (&quot;2&quot; ligado / desligado). </p><p> Para um total de 40 transições. </p><p> O relógio de Max funciona de maneira diferente. Em vez de desligar todo o painel, é inteligente o suficiente para desativar apenas os segmentos que não serão necessários para o próximo número. Para o número 137, o clock de Max requer: &quot;137&quot;: 2 + 5 + 4 = 11 transições (&quot;137&quot; on) 7 transições (para desativar os segmentos que não são necessários para o número &quot;11&quot;). &quot;11&quot;: 0 transições (o número &quot;11&quot; já está ligado corretamente) 3 transições (para desativar o primeiro &quot;1&quot; e a parte inferior do segundo &quot;1&quot;; a parte superior é comum com o número &quot;2&quot;) . &quot;2&quot;: 4 transições (para ligar os restantes segmentos para obter um &quot;2&quot;) 5 transições (para desativar o número &quot;2&quot;). </p><p> Para um total de 30 transições. </p><p> É claro que o relógio de Max consome menos energia que o de Sam. Os dois relógios são alimentados com todos os números primos entre A = 107 e B = 2 × 107. Encontre a diferença entre o número total de transições necessárias pelo relógio de Sam e o necessário para o de Max. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler315()</code> deve retornar 13625242.
    testString: 'assert.strictEqual(euler315(), 13625242, "<code>euler315()</code> should return 13625242.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler315() {
  // Good luck!
  return true;
}

euler315();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

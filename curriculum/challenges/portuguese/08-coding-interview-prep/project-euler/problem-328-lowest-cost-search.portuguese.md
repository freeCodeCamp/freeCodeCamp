---
id: 5900f4b41000cf542c50ffc7
challengeType: 5
title: 'Problem 328: Lowest-cost Search'
videoUrl: ''
localeTitle: 'Problema 328: Pesquisa de custo mais baixo'
---

## Description
<section id="description"> Estamos tentando encontrar um número oculto selecionado do conjunto de inteiros {1, 2, ..., n} fazendo perguntas. Cada número (pergunta) que pedimos tem um custo igual ao número pedido e obtemos uma das três respostas possíveis: &quot;Seu palpite é menor do que o número oculto&quot;, ou &quot;Sim, é isso!&quot; Ou &quot;Seu palpite é maior que o número oculto &quot;. Dado o valor de n, uma estratégia ótima minimiza o custo total (ou seja, a soma de todas as perguntas feitas) para o pior caso possível. Por exemplo <p> Se n = 3, o melhor que podemos fazer é obviamente perguntar o número &quot;2&quot;. A resposta nos levará imediatamente a encontrar o número oculto (a um custo total = 2). </p><p> Se n = 8, podemos decidir usar um tipo de estratégia de &quot;pesquisa binária&quot;: nossa primeira pergunta seria &quot;4&quot; e se o número oculto for maior que 4, precisaremos de uma ou duas perguntas adicionais. Deixe nossa segunda pergunta ser &quot;6&quot;. Se o número escondido ainda for maior que 6, precisaremos de uma terceira pergunta para discriminar entre 7 e 8. Assim, nossa terceira pergunta será &quot;7&quot; e o custo total para esse cenário de pior caso será 4 + 6. + 7 = 17. </p><p> Podemos melhorar consideravelmente o custo do pior caso para n = 8, fazendo &quot;5&quot; como nossa primeira pergunta. Se nos disserem que o número oculto é maior que 5, nossa segunda pergunta será &quot;7&quot;, então saberemos com certeza qual é o número oculto (para um custo total de 5 + 7 = 12). Se nos disserem que o número oculto é menor que 5, nossa segunda pergunta será &quot;3&quot; e se o número oculto for menor que 3, nossa terceira pergunta será &quot;1&quot;, dando um custo total de 5 + 3 + 1 = 9 Desde 12&gt; 9, o custo de pior caso para esta estratégia é 12. Isso é melhor do que o que alcançamos anteriormente com a estratégia de &quot;pesquisa binária&quot;; também é melhor ou igual a qualquer outra estratégia. Então, de fato, acabamos de descrever uma estratégia ótima para n = 8. </p><p> Seja C (n) o pior custo possível alcançado por uma estratégia ótima para n, como descrito acima. Assim, C (1) = 0, C (2) = 1, C (3) = 2 e C (8) = 12. Similarmente, C (100) = 400 e C (n) = 17575. </p><p> Encontre C (n). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler328()</code> deve retornar 260511850222.
    testString: 'assert.strictEqual(euler328(), 260511850222, "<code>euler328()</code> should return 260511850222.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler328() {
  // Good luck!
  return true;
}

euler328();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

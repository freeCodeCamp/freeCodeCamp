---
id: 5900f4bd1000cf542c50ffcf
challengeType: 5
title: 'Problem 336: Maximix Arrangements'
videoUrl: ''
localeTitle: 'Problema 336: Acordos Maximix'
---

## Description
<section id="description"> Um trem é usado para transportar quatro carros na ordem: ABCD. No entanto, às vezes, quando o trem chega para pegar as carruagens, elas não estão na ordem correta. Para reorganizar as carruagens, todas são empurradas para uma grande plataforma rotativa. Depois que as carruagens são desacopladas em um ponto específico, o trem se afasta da plataforma giratória, puxando as carruagens ainda presas a ela. Os carrinhos restantes são girados 180 graus. Todas as carruagens são então reunidas e este processo é repetido tantas vezes quantas as necessárias para obter o menor número de utilizações do prato rotativo. Alguns arranjos, como o ADCB, podem ser resolvidos facilmente: os vagões são separados entre A e D, e depois que o DCB é girado, a ordem correta é alcançada. <p> No entanto, Simple Simon, o motorista do trem, não é conhecido por sua eficiência, então ele sempre resolve o problema inicialmente obtendo o carro A no lugar correto, depois o carro B, e assim por diante. </p><p> Usando quatro carruagens, os piores arranjos possíveis para Simon, que chamaremos de arranjos maximix, são o DACB e o DBAC; cada um exigindo-lhe cinco rotações (embora, usando a abordagem mais eficiente, elas pudessem ser resolvidas usando apenas três rotações). O processo que ele usa para o DIBICA é mostrado abaixo. </p><p> Pode-se verificar que existem 24 arranjos maximix para seis vagões, dos quais o décimo arranjo maximix lexicográfico é DFAECB. </p><p> Encontre o 2011º arranjo lixicográfico de maximix para onze carruagens. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler336()</code> deve retornar CAGBIHEFJDK.
    testString: 'assert.strictEqual(euler336(), CAGBIHEFJDK, "<code>euler336()</code> should return CAGBIHEFJDK.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler336() {
  // Good luck!
  return true;
}

euler336();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

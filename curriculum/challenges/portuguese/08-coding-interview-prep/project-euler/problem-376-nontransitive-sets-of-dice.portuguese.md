---
id: 5900f4e51000cf542c50fff7
challengeType: 5
title: 'Problem 376: Nontransitive sets of dice'
videoUrl: ''
localeTitle: 'Problema 376: Conjuntos Não-Transversais de Dados'
---

## Description
<section id="description"> Considere o seguinte conjunto de dados com pips fora do padrão: <p> Die A: 1 4 4 4 4 4 Die B: 2 2 2 5 5 5 Die C: 3 3 3 3 3 6 </p><p> Um jogo é jogado por dois jogadores pegando um dado e rolando. O jogador que rola o maior valor ganha. </p><p> Se o primeiro jogador escolher o dado A e o segundo escolher o dado B, obtemos P (o segundo jogador ganha) = 7/12&gt; 1/2 </p><p> Se o primeiro jogador escolher o dado B e o segundo escolher o dado C, ganhamos P (o segundo jogador ganha) = 7/12&gt; 1/2 </p><p> Se o primeiro jogador escolher o dado C e o segundo escolher o dado A, obtemos P (o segundo jogador ganha) = 25/36&gt; 1/2 </p><p> Então, qualquer que seja a morte do primeiro jogador, o segundo jogador pode escolher outro dado e ter mais de 50% de chance de ganhar. Um conjunto de dados com essa propriedade é chamado de um conjunto de dados não-transitório. </p><p> Queremos investigar quantos conjuntos de dados não-transitivos existem. Vamos assumir as seguintes condições: Existem três dados de seis lados com cada lado tendo entre 1 e N pips, inclusive. Dados com o mesmo conjunto de pips são iguais, independentemente de qual lado do dado os pips estão localizados. O mesmo valor de pip pode aparecer em vários dados; se ambos os jogadores jogarem o mesmo valor, nenhum jogador ganha. Os conjuntos de dados {A, B, C}, {B, C, A} e {C, A, B} são o mesmo conjunto. </p><p> Para N = 7, encontramos 9780 desses conjuntos. Quantos há por N = 30? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler376()</code> deve retornar 973059630185670.
    testString: 'assert.strictEqual(euler376(), 973059630185670, "<code>euler376()</code> should return 973059630185670.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler376() {
  // Good luck!
  return true;
}

euler376();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

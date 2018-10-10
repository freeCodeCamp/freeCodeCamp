---
id: 5900f4d31000cf542c50ffe6
challengeType: 5
title: 'Problem 359: Hilbert"s New Hotel'
videoUrl: ''
localeTitle: 'Problema 359: Novo Hotel de Hilbert'
---

## Description
<section id="description"> Um número infinito de pessoas (numeradas 1, 2, 3, etc.) estão alinhadas para conseguir um quarto no mais novo hotel infinito de Hilbert. O hotel contém um número infinito de andares (numerados 1, 2, 3, etc.) e cada andar contém um número infinito de quartos (numerados 1, 2, 3, etc.). <p> Inicialmente o hotel está vazio. Hilbert declara uma regra sobre como a enésima pessoa é designada uma sala: a pessoa n obtém a primeira sala vazia no andar com o número mais baixo satisfazendo qualquer um dos seguintes: o chão está vazio, o chão não está vazio e se a última pessoa ocupar um quarto nesse andar é pessoa m, então m + n é um quadrado perfeito </p><p> A pessoa 1 recebe o quarto 1 no piso 1, pois o piso 1 está vazio. A pessoa 2 não recebe o quarto 2 no piso 1, pois 1 + 2 = 3 não é um quadrado perfeito. Em vez disso, a pessoa 2 ocupa o quarto 1 no piso 2, pois o piso 2 está vazio. A pessoa 3 recebe o quarto 2 no piso 1, pois 1 + 3 = 4 é um quadrado perfeito. </p><p> Eventualmente, cada pessoa na fila recebe um quarto no hotel. </p><p> Defina P (f, r) para ser n se a pessoa n ocupar a sala r no piso f e 0 se nenhuma pessoa ocupar a sala. Aqui estão alguns exemplos: P (1, 1) = 1 P (1, 2) = 3 P (2, 1) = 2 P (10, 20) = 440 P (25, 75) = 4863 P (99, 100) = 19454 </p><p> Encontre a soma de todos os P (f, r) para todos os fe positivos r tais que f × r = 71328803586048 e dê os últimos 8 dígitos como sua resposta. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler359()</code> deve retornar 40632119.
    testString: 'assert.strictEqual(euler359(), 40632119, "<code>euler359()</code> should return 40632119.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler359() {
  // Good luck!
  return true;
}

euler359();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

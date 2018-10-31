---
id: 5900f5151000cf542c510028
challengeType: 5
title: 'Problem 425: Prime connection'
videoUrl: ''
localeTitle: 'Problema 425: Conexão Prime'
---

## Description
<section id="description"> Dois números positivos A e B são considerados conectados (denotados por &quot;A ↔ B&quot;) se uma dessas condições for válida: (1) A e B têm o mesmo comprimento e diferem em exatamente um dígito; por exemplo, 123 ↔ 173. (2) Adicionar um dígito à esquerda de A (ou B) torna B (ou A); por exemplo, 23 ↔ 223 e 123 ↔ 23. <p> Chamamos um par primo de P a 2 se existe uma cadeia de primos conectados entre 2 e P e nenhum primo na cadeia excede P. </p><p> Por exemplo, 127 é um parente de 2. Uma das cadeias possíveis é mostrada abaixo: 2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127 Entretanto, 11 e 103 não são parentes de 2. </p><p> Seja F (N) a soma dos primos ≤ N que não são parentes de 2. Podemos verificar que F (103) = 431 e F (104) = 78728. </p><p> Encontre F (107). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler425()</code> deve retornar 46479497324.
    testString: 'assert.strictEqual(euler425(), 46479497324, "<code>euler425()</code> should return 46479497324.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler425() {
  // Good luck!
  return true;
}

euler425();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

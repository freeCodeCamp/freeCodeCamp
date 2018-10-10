---
id: 5900f48a1000cf542c50ff9c
challengeType: 5
title: 'Problem 285: Pythagorean odds'
videoUrl: ''
localeTitle: 'Problema 285: Odds pitagóricas'
---

## Description
<section id="description"> Albert escolhe um inteiro positivo k, então dois números reais a, b são escolhidos aleatoriamente no intervalo [0,1] com distribuição uniforme. A raiz quadrada da soma (k · a + 1) 2 + (k · b + 1) 2 é então computada e arredondada para o inteiro mais próximo. Se o resultado for igual a k, ele pontuará k pontos; caso contrário ele não ganha nada. <p> Por exemplo, se k = 6, a = 0,2 eb = 0,85, então (k · a + 1) 2 + (k · b + 1) 2 = 42,05. A raiz quadrada de 42,05 é 6,484 ... e quando arredondada para o inteiro mais próximo, ela se torna 6. Isso é igual a k, então ele marca 6 pontos. </p><p> Pode ser demonstrado que se ele jogar 10 turnos com k = 1, k = 2, ..., k = 10, o valor esperado de sua pontuação total, arredondado para cinco casas decimais, é 10,20914. </p><p> Se ele toca 105 voltas com k = 1, k = 2, k = 3, ..., k = 105, qual é o valor esperado de sua pontuação total, arredondado para cinco casas decimais? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler285()</code> deve retornar 157055.80999.
    testString: 'assert.strictEqual(euler285(), 157055.80999, "<code>euler285()</code> should return 157055.80999.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler285() {
  // Good luck!
  return true;
}

euler285();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

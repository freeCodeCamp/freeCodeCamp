---
id: 5
localeTitle: 5900f5461000cf542c510058
challengeType: 5
title: 'Problem 473: Phigital number base'
---

## Description
<section id='description'> 
Sea $ \ varphi $ la proporción áurea: $ \ varphi = \ frac {1+ \ sqrt {5}} {2}. $ 
Notablemente, es posible escribir cada entero positivo como una suma de potencias de $ \ varphi $ incluso si requerimos que cada poder de $ \ varphi $ se use como máximo una vez en esta suma. 
Incluso entonces esta representación no es única. 
Podemos hacerlo único al requerir que no se utilicen potencias con exponentes consecutivos y que la representación sea finita. 
Ej .: 
$ 2 = \ varphi + \ varphi ^ {- 2} $ y $ 3 = \ varphi ^ {2} + \ varphi ^ {- 2} $ 


Para representar esta suma de potencias de $ \ varphi $ usamos una cadena de 0 y 1 con un punto para indicar dónde comienzan los exponentes negativos. 
Llamamos a esto la representación en la base numérica digital. 
Entonces $ 1 = 1 _ {\ varphi} $, $ 2 = 10.01 _ {\ varphi} $, $ 3 = 100.01 _ {\ varphi} $ y $ 14 = 100100.001001 _ {\ varphi} $. 
Las cadenas que representan 1, 2 y 14 en la base numérica digital son palindrómicas, mientras que la cadena que representa 3 no lo es. (El punto figital no es el carácter medio). 


La suma de los enteros positivos que no exceden 1000 cuya representación figital es palindrómica es 4345. 


Halla la suma de los enteros positivos que no exceda de $ 10 ^ {10} $ cuya representación figital es palindrómica. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler473()</code> debe devolver 35856681704365.
    testString: 'assert.strictEqual(euler473(), 35856681704365, "<code>euler473()</code> should return 35856681704365.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler473() {
  // Good luck!
  return true;
}

euler473();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

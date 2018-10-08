---
id: 5
localeTitle: 5900f54c1000cf542c51005f
challengeType: 5
title: 'Problem 480: The Last Question'
---

## Description
<section id='description'> 
Considere todas las palabras que pueden formarse seleccionando letras, en cualquier orden, de la frase: 
thereisasyetinsufficientdataforameaningfulanswer 
Supongamos que las que tienen 15 letras o menos se enumeran en orden alfabético y se numeran secuencialmente a partir de 1. 
La lista incluiría: 
1: a 
2: aa 
3: aaa 
4: aaaa 
5: aaaaa 
6: aaaaaa 
7: aaaaaac 
8: aaaaaacd 
9: aaaaaacde 
10: aaaaaacdee 
11: aaaaaacdeee 
12: aaaaaacdeeee 
13: aaaaaacdeeee 
13: aaaaaacdeeeee 
14: aaaaaacdeeeeee 
15: aaaaaacdeeeeeef 
16: aaaaaacdeeeeeeg 
17: aaaaaacdeeeeeeh 
... 
28: aaaaaacdeeeeeey 
29: aaaaaacdeeeeef 
30: aaaaaacdeeeeefe 
... 
115246685191495242: euleoywuttttsss 
115246685191495243: Euler 
115246685191495244: eulera 
... 
525069350231428029: ywuuttttssssrrrDefine P (w) como la posición de la palabra w. 
Define W (p) como la palabra en la posición p. 
Podemos ver que P (w) y W (p) son inversos: P (W (p)) = p y W (P (w)) = w. 
Ejemplos: 
W (10) = aaaaaacdee 
P (aaaaaacdee) = 10 
W (115246685191495243) = Euler 
P (Euler) = 115246685191495243Find W (P (legionario) + P (calorímetros) - P (aniquilan) + P ( orquestado) - P (aleteo)). 
Da tu respuesta usando caracteres en minúscula (sin puntuación ni espacio). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler480()</code> debe devolver turnthestarson.
    testString: 'assert.strictEqual(euler480(), turnthestarson, "<code>euler480()</code> should return turnthestarson.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler480() {
  // Good luck!
  return true;
}

euler480();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

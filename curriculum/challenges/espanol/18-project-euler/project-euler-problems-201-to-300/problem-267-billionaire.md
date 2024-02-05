---
id: 5900f4771000cf542c50ff8a
title: 'Problema 267: Billonario'
challengeType: 1
forumTopicId: 301916
dashedName: problem-267-billionaire
---

# --description--

You are given a unique investment opportunity.

Empezando con 1£ de capital, puedes elegir una proporción fija, $f$, de tu capital para apostar a un lanzamiento justo de moneda repetidamente hasta 1000 lanzamientos.

Si sale cara, tu devolución será el doble de tu apuesta, y si sale cruz, perderás tu apuesta.

Por ejemplo, si $f = \frac{1}{4}$, para el primer lanzamiento apuestas 0,25£, y si sale cara ganas 0,5£, y así, tener 1,5£. Entonces, apuestas 0,375£ y si en el segundo lanzamiento sale cruz, tienes 1,125£.

Eligiendo $f$ para maximizar tus probabilidades de tener al menos 1.000.000.000£ después de 1.000 lanzamientos, ¿cuál sería la probabilidad de que te convirtieras en un multimillonario?

Se asume que todos los cálculos son exactos (no redondeados), pero da tu respuesta redondeada a 12 dígitos detrás del punto decimal en la forma 0.abcdefghijkl.

# --hints--

`billionaire()` debería devolver `0.999992836187`.

```js
assert.strictEqual(billionaire(), 0.999992836187);
```

# --seed--

## --seed-contents--

```js
function billionaire() {

  return true;
}

billionaire();
```

# --solutions--

```js
// solution required
```

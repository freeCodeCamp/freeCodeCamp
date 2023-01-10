---
id: 5900f4f11000cf542c510003
title: 'Problema 387: Números de Harshad'
challengeType: 1
forumTopicId: 302051
dashedName: problem-387-harshad-numbers
---

# --description--

Um número de Harshad ou número de Niven é um número divisível pela soma de seus algarismos.

201 é um número de Harshad, pois é divisível por 3 (a soma de seus algarismos).

Quando truncamos o último algarismo de 201, obtemos 20, que é um número de Harshad.

Quando truncamos o último algarismo de 20, obtemos 2, que também é um número de Harshad.

Vamos chamar um número de Harshad que, embora truncando recursivamente o último algarismo, sempre resulte em um número de Harshad, de um número de Harshad corretamente truncável.

Além disso:

$\frac{201}{3} = 67$, que é um número primo.

Vamos chamar um número de Harshad que, quando dividido pela soma de seus algarismos, resulte em um número primo, de número de Harshad forte.

Vejamos agora o número 2011, que é um número primo. Quando truncamos o último algarismo dele chegamos em 201, um número forte de Harshad, que também é corretamente truncável. Vamos chamar esses números primos e fortes de números primos de Harshad corretamente truncáveis.

Você é informado de que a soma dos números primos de Harshad corretamente truncáveis e fortes inferiores a 10000 é de 90619.

Encontre a soma dos números primos de Harshad corretamente truncáveis e fortes inferiores a ${10}^{14}$.

# --hints--

`harshadNumbers()` deve retornar `696067597313468`.

```js
assert.strictEqual(harshadNumbers(), 696067597313468);
```

# --seed--

## --seed-contents--

```js
function harshadNumbers() {

  return true;
}

harshadNumbers();
```

# --solutions--

```js
// solution required
```

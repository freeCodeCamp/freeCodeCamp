---
id: 5900f4dd1000cf542c50ffef
title: 'Problema 368: Uma série semelhante à de Kempner'
challengeType: 1
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

A série harmônica $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ é conhecido por ser divergente.

No entanto, se omitirmos desta série todos os termos em que o denominador tem um 9, a série converge consideravelmente para aproximadamente 22,9206766193. Esta série harmônica modificada é chamada de série de Kempner.

Consideremos agora outra série harmônica modificada, omitindo da série harmônica todos os termos em que o denominador tem 3 ou mais algarismos iguais consecutivos. Pode-se verificar que, dos primeiros 1200 termos da série harmônica, apenas 20 termos serão omitidos.

Estes 20 termos omitidos são:

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

Esta série também converge.

Encontre o valor para o qual a série converge. Dê sua resposta arredondada para 10 casas depois da vírgula.

# --hints--

`kempnerLikeSeries()` deve retornar `253.6135092068`.

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

# --seed--

## --seed-contents--

```js
function kempnerLikeSeries() {

  return true;
}

kempnerLikeSeries();
```

# --solutions--

```js
// solution required
```

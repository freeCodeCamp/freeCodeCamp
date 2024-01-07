---
id: 5900f5411000cf542c510053
title: 'Problema 469: Cadeiras vazias'
challengeType: 1
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

Em uma sala, $N$ cadeiras são colocadas ao redor de uma mesa redonda.

Cavaleiros entram na sala um por um e escolhem aleatoriamente uma cadeira vazia disponível.

Para ter espaço suficiente, os cavaleiros sempre deixam pelo menos uma cadeira vazia entre eles.

Quando não sobrar nenhuma cadeira apropriada, a fração $C$ de cadeiras vazias é determinada. Também definimos $E(N)$ como o valor esperado de $C$.

Podemos verificar que $E(4) = \frac{1}{2}$ e $E(6) = \frac{5}{9}$.

Encontre $E({10}^{18})$. Arredonde sua resposta para até catorze casas decimais usando o formato 0.abcdefghijklmn.

# --hints--

`emptyChairs()` deve retornar `0.56766764161831`.

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

# --seed--

## --seed-contents--

```js
function emptyChairs() {

  return true;
}

emptyChairs();
```

# --solutions--

```js
// solution required
```

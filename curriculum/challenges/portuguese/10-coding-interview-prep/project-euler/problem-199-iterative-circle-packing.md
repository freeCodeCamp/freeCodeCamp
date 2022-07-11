---
id: 5900f4341000cf542c50ff46
title: 'Problema 199: Embalagem de círculos iterativa'
challengeType: 1
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

Três círculos de raio igual são colocados dentro de um círculo maior, de tal forma que cada par de círculos é tangente entre si e os círculos internos não se sobrepõem. Há quatro "lacunas" descobertas que devem ser preenchidas iterativamente com mais círculos tangentes.

<img class="img-responsive center-block" alt="um diagrama de círculos não sobrepostos" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;" />

A cada iteração, um círculo de tamanho máximo é colocado em cada lacuna, o que cria mais lacunas para a próxima iteração. Após 3 iterações (na figura), há 108 lacunas e a fração da área que não é coberta pelos círculos é de 0, 6790342, arredondado para oito casas decimais.

Qual fração da área não é coberta pelos círculos depois de `n` iterações? Arredonde sua resposta para até oito casas decimais usando o formato x.xxxxxxxx.

# --hints--

`iterativeCirclePacking(10)` deve retornar um número.

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` deve retornar `0.00396087`.

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` deve retornar `0.06790342`.

```js
assert.strictEqual(iterativeCirclePacking(3), 0.06790342);
```

# --seed--

## --seed-contents--

```js
function iterativeCirclePacking(n) {

  return true;
}

iterativeCirclePacking(10);
```

# --solutions--

```js
function iterativeCirclePacking(n) {
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, n);
  a1 += getArea(k1, k1, k1, n);
  let final = ((a0 - a1) / a0).toFixed(8);

  return parseFloat(final);
  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
```

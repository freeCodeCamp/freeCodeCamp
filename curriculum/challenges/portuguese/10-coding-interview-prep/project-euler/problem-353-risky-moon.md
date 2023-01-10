---
id: 5900f4cd1000cf542c50ffe0
title: 'Problema 353: Lua perigosa'
challengeType: 1
forumTopicId: 302013
dashedName: problem-353-risky-moon
---

# --description--

Uma lua poderia ser descrita pela esfera $C(r)$ com centro (0, 0, 0) e raio $r$.

Há estações na lua em pontos na superfície de $C(r)$ com coordenadas em números inteiros. A estação em (0, 0, $r$) é chamada de estação do Polo Norte, enquanto a estação em (0, 0, $-r$) é chamada de estação do Polo Sul.

Todas as estações estão ligadas entre si através da estrada mais curta no grande arco que passa pelas estações. Uma jornada entre duas estações é arriscada. Se $d$ é o comprimento da estrada entre duas estações, $\{\left(\frac{d}{πr}\right)}^2$ é uma medida para o risco da jornada (vamos chamá-la de risco da estrada). Se a viagem inclui mais de duas estações, o risco da viagem é a soma dos riscos das estradas utilizadas.

Uma jornada direta da estação do Polo Norte para a estação do Polo Sul tem o comprimento $πr$ e o risco 1. A viagem da estação do Polo Norte para a estação do Polo do Sul via (0, $r$, 0) tem o mesmo comprimento, mas um risco menor:

$${\left(\frac{\frac{1}{2}πr}{πr}\right)}^2+{\left(\frac{\frac{1}{2}πr}{πr}\right)}^2 = 0.5$$

O risco mínimo de uma jornada da estação do Polo Norte até a estação do Polo Sul em $C(r)$ é $M(r)$.

Você é informado que $M(7) = 0.1784943998$ arredondado para 10 casas depois da vírgula.

Encontre $\displaystyle\sum_{n = 1}^{15} M(2^n - 1)$.

Arredonde sua resposta para até 10 casas depois da vírgula usando o formato a.bcdefghijk.

# --hints--

`riskyMoon()` deve retornar `1.2759860331`.

```js
assert.strictEqual(riskyMoon(), 1.2759860331);
```

# --seed--

## --seed-contents--

```js
function riskyMoon() {

  return true;
}

riskyMoon();
```

# --solutions--

```js
// solution required
```

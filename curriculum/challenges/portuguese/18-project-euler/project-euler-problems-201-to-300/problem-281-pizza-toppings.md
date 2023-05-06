---
id: 5900f4861000cf542c50ff98
title: 'Problema 281: Coberturas de pizza'
challengeType: 1
forumTopicId: 301932
dashedName: problem-281-pizza-toppings
---

# --description--

Você recebe uma pizza (círculo perfeito) que foi cortada em $m·n$ peças iguais e você quer ter exatamente um sabor em cada fatia.

Considere $f(m,n)$ como o número de maneiras de ter coberturas de pizza com $m$ sabores diferentes ($m ≥ 2$), usando cada cobertura em exatamente $n$ fatias ($n ≥ 1$). Reflexões são consideradas distintas, mas as rotações não são.

Assim, por exemplo, $f(2,1) = 1$, $f(2,2) = f(3,1) = 2$ e $f(3,2) = 16$. $f(3,2)$ é mostrado abaixo:

<img class="img-responsive center-block" alt="animação com 16 maneiras de ter 3 coberturas diferentes em 2 fatias cada" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;" />

Encontre a soma de todos os $f(m,n)$, tal que $f(m,n) £ {10}^{15}$.

# --hints--

`pizzaToppings()` deve retornar `1485776387445623`.

```js
assert.strictEqual(pizzaToppings(), 1485776387445623);
```

# --seed--

## --seed-contents--

```js
function pizzaToppings() {

  return true;
}

pizzaToppings();
```

# --solutions--

```js
// solution required
```

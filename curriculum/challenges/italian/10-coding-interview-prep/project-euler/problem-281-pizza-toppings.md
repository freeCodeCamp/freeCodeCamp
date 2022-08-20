---
id: 5900f4861000cf542c50ff98
title: 'Problema 281: Topping per Pizza'
challengeType: 1
forumTopicId: 301932
dashedName: problem-281-pizza-toppings
---

# --description--

Ti viene data una pizza (cerchio perfetto) che è stata tagliata in $m·n$ pezzi uguali e si desidera avere esattamente un condimento su ogni fetta.

Sia $f(m, n)$ il numero di modi in cui puoi avere condimenti sulla pizza con $m$ condimenti diversi ($m ≥ 2$), usando ogni topping su esattamente $n$ fette ($n ≥ 1$). Le riflessioni sono considerate distinte, le rotazioni non lo sono.

Così, per esempio, $f(2,1) = 1$, $f(2,2) = f(3,1) = 2$ e $f(3,2) = 16$. $f(3,2)$ è mostrato sotto:

<img class="img-responsive center-block" alt="animazione con 16 modi per avere 3 condimenti diversi su 2 fette ciascuno" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;" />

Trova la somma di tutte le $f(m,n)$ in modo tale che $f(m,n) ≤ {10}^{15}$.

# --hints--

`pizzaToppings()` dovrebbe restituire `1485776387445623`.

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

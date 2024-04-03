---
id: 5900f3e81000cf542c50fefb
title: 'Problem 124: Geordnete Wurzeln'
challengeType: 1
forumTopicId: 301751
dashedName: problem-124-ordered-radicals
---

# --description--

Die Wurzel von $n$, $rad(n)$, ist das Produkt der verschiedenen Primfaktoren von $n$. Zum Beispiel: $504 = 2^3 × 3^2 × 7$, somit $rad(504) = 2 × 3 × 7 = 42$.

Berechnet man $rad(n)$ für $1 ≤ n ≤ 10$, sortiert sie nach $rad(n)$ und sortiert nach $n$, wenn die Wurzelwerte gleich sind, erhält man:

<div style="text-align: center;">
  <table cellpadding="2" cellspacing="0" border="0" align="center">
    <tbody>
      <tr>
        <td colspan="2">$Unsorted$</td>
        <td></td>
        <td colspan="3">$Sorted$</td>
      </tr>
      <tr>
        <td>$n$</td>
        <td>$rad(n)$</td>
        <td></td>
        <td>$n$</td>
        <td>$rad(n)$</td>
        <td>$k$</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td></td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td></td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>
        <td></td>
        <td>4</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>2</td>
        <td></td>
        <td>8</td>
        <td>2</td>
        <td>4</td>
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>
        <td></td>
        <td>3</td>
        <td>3</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>6</td>
        <td></td>
        <td>9</td>
        <td>3</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>7</td>
        <td></td>
        <td>5</td>
        <td>5</td>
        <td>7</td>
      </tr>
      <tr>
        <td>8</td>
        <td>2</td>
        <td></td>
        <td>6</td>
        <td>6</td>
        <td>8</td>
      </tr>
      <tr>
        <td>9</td>
        <td>3</td>
        <td></td>
        <td>7</td>
        <td>7</td>
        <td>9</td>
      </tr>
      <tr>
        <td>10</td>
        <td>10</td>
        <td></td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
      </tr>
    </tbody>
  </table>
</div><br>

Lasse $E(k)$ das $k$th Element in der geordneten $n$ Spalte sein; zum Beispiel, $E(4) = 8$ und $E(6) = 9$. Wenn $rad(n)$ für $1 ≤ n ≤ 100000$ geordnet ist, findest du $E(10000)$.

# --hints--

`orderedRadicals()` sollte `21417` zurückgeben.

```js
assert.strictEqual(orderedRadicals(), 21417);
```

# --seed--

## --seed-contents--

```js
function orderedRadicals() {

  return true;
}

orderedRadicals();
```

# --solutions--

```js
// solution required
```

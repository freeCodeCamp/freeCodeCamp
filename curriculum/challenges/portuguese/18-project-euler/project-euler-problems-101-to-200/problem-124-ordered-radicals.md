---
id: 5900f3e81000cf542c50fefb
title: 'Problema 124: Radicais ordenados'
challengeType: 1
forumTopicId: 301751
dashedName: problem-124-ordered-radicals
---

# --description--

O radical de $n$, $rad(n)$, é o produto dos fatores primos distintos de $n$. Por exemplo, $504 = 2^3 × 3^2 × 7$, então $rad(504) = 2 × 3 × 7 = 42$.

Se calcularmos $rad(n)$ para $1 ≤ n ≤ 10$ e, em seguida, ordená-los em $rad(n)$, e ordená-los novamente em $n$ se os valores dos radicais forem iguais, obtemos:

<div style="text-align: center;">
  <table cellpadding="2" cellspacing="0" border="0" align="center">
    <tbody>
      <tr>
        <td colspan="2">$Nao ordenados$</td>
        <td></td>
        <td colspan="3">$Ordenados$</td>
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

Considere $E(k)$ como o $k$-ésimo elemento na coluna de ordenados $n$; por exemplo, $E(4) = 8$ e $E(6) = 9$. Se $rad(n)$ estiver ordenado para $1 ≤ n ≤ 100000$, encontre $E(10000)$.

# --hints--

`orderedRadicals()` deve retornar `21417`.

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

---
id: 5900f3e81000cf542c50fefb
title: 'Завдання 124: впорядковані радикали'
challengeType: 1
forumTopicId: 301751
dashedName: problem-124-ordered-radicals
---

# --description--

Радикалом числа $n$ — $rad(n)$ — називають добуток простих множників $n$. Наприклад, $504 = 2^3 × 3^2 × 7$, тому $rad(504) = 2 × 3 × 7 = 42$.

Якщо обчислити $rad(n)$ за умови $1 ≤ n ≤ 10$ та впорядкувати їх за $rad(n)$ й $n$, якщо значення радикалів однакові, ми отримаємо:

<div style="text-align: center;">
  <table cellpadding="2" cellspacing="0" border="0" align="center">
    <tbody>
      <tr>
        <td colspan="2">$Невпорядковано$</td>
        <td></td>
        <td colspan="3">$Впорядковано$</td>
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

Нехай $E(k)$ є $k$-ним елементом у впорядкованому стовпці $n$, наприклад, $E(4) = 8$ та $E(6) = 9$. Знайдіть $E(10000)$, якщо $rad(n)$ впорядковано за умови $1 ≤ n ≤ 100000$.

# --hints--

`orderedRadicals()` має повернути `21417`.

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

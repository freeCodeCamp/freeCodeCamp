---
id: 5900f4751000cf542c50ff87
title: 'Завдання 264: Центри трикутників'
challengeType: 1
forumTopicId: 301913
dashedName: problem-264-triangle-centres
---

# --description--

Розглянемо всі трикутники, що мають:

- Усі їх вершини в точках решітки.
- Окружний центр у координаті О.
- Ортоцентр у точці H(5, 0).

Існує дев’ять таких трикутників, які мають $\text{perimeter} ≤ 50$.

Перелічені та показані у порядку зростання їхнього периметра, вони:

<table>
  <tbody>
    <tr>
      <td>
A(-4, 3), B(5, 0), C(4, -3)<br>
A(4, 3), B(5, 0), C(-4, -3)<br>
A(-3, 4), B(5, 0), C(3, -4)<br>
<br><br>
A(3, 4), B(5, 0), C(-3, -4)<br>
A(0, 5), B(5, 0), C(0, -5)<br>
A(1, 8), B(8, -1), C(-4, -7)<br>
<br><br>
A(8, 1), B(1, -8), C(-4, 7)<br>
A(2, 9), B(9, -2), C(-6, -7)<br>
A(9, 2), B(2, -9), C(-6, 7)<br>
      </td>
      <td><img class="img-responsive center-block" alt="дев'ять трикутників ABC з периметром ≤ 50" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-centres.gif" style="background-color: white; padding: 10px;"></td>
    </tr>
  </tbody>
</table>

Сума їхніх периметрів, округлена до чотирьох знаків після коми, дорівнює 291.0089.

Знайдіть усі такі трикутники з $\text{perimeter} ≤ {10}^5$. У відповідь введіть суму їхніх периметрів, округлену до чотирьох знаків після коми.

# --hints--

`triangleCentres()` має повернути `2816417.1055`.

```js
assert.strictEqual(triangleCentres(), 2816417.1055);
```

# --seed--

## --seed-contents--

```js
function triangleCentres() {

  return true;
}

triangleCentres();
```

# --solutions--

```js
// solution required
```

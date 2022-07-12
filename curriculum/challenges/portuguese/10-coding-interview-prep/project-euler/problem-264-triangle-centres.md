---
id: 5900f4751000cf542c50ff87
title: 'Problema 264: Centros dos triângulos'
challengeType: 1
forumTopicId: 301913
dashedName: problem-264-triangle-centres
---

# --description--

Considere todos os triângulos que têm:

- Todos os seus vértices em pontos da rede.
- Circuncentro na origem O.
- Ortocentro no ponto H(5, 0).

Há nove triângulos desse tipo tendo um $\text{perímetro} ≤ 50$.

Listados e mostrados em ordem ascendente de perímetro, eles são:

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
      <td><img class="img-responsive center-block" alt="nove triângulos ABC com o perímetro ≤ 50" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-centres.gif" style="background-color: white; padding: 10px;"></td>
    </tr>
  </tbody>
</table>

A soma dos seus perímetros, arredondada para quatro casas decimais, é 291,0089.

Encontre todos os triângulos desse tipo com um $\text{perímetro} ≤ {10}^5$. Insira como resposta a soma dos seus perímetros, arredondada para quatro casas decimais.

# --hints--

`triangleCentres()` deve retornar `2816417.1055`.

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

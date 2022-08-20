---
id: 5900f4f71000cf542c510009
title: 'Problema 394: Comendo tortas'
challengeType: 1
forumTopicId: 302059
dashedName: problem-394-eating-pie
---

# --description--

Jeff come uma torta de maneira incomum.

A torta é circular. Ele começa cortando uma fatia inicial da torta ao longo de seu raio.

Enquanto houver ao menos uma fração $F$ determinada da torta restando, ele realiza o seguinte procedimento:

- Ele faz duas fatias a partir do centro da torta até qualquer ponto do que resta da borda, qualquer ponto na borda restante da torta sendo igualmente provável. Isso dividirá o restante da torta em três pedaços.
- Indo no sentido anti-horário a partir do corte inicial, ele pega os dois primeiros pedaços da torta e os come.

Quando menos que uma fração $F$ da torta restar, ele para de repetir esse procedimento. Em vez disso, ele come toda a torta que resta.

<img class="img-responsive center-block" alt="animação do procedimento do corte da torta em fatias" src="https://cdn.freecodecamp.org/curriculum/project-euler/eating-pie.gif" style="background-color: white; padding: 10px;" />

Para $x ≥ 1$, considere $E(x)$ como o número esperado de vezes que Jeff repetirá o procedimento acima com $F = \frac{1}{x}$. Pode-se verificar que $E(1) = 1$, $E(2) ≈ 1,2676536759$, e $E(7,5) ≈ 2,1215732071$.

Encontre $E(40)$ arredondado para 10 casas decimais depois da vírgula.

# --hints--

`eatingPie()` deve retornar `3.2370342194`.

```js
assert.strictEqual(eatingPie(), 3.2370342194);
```

# --seed--

## --seed-contents--

```js
function eatingPie() {

  return true;
}

eatingPie();
```

# --solutions--

```js
// solution required
```

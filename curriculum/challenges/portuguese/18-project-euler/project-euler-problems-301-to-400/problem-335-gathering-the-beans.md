---
id: 5900f4bd1000cf542c50ffce
title: 'Problema 335: Juntando feijões'
challengeType: 1
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

Sempre que Peter se sente entediado, coloca algumas tigelas, contendo um feijão em cada, em um círculo. Depois disso, ele tira todos os feijões de uma determinada tigela e os coloca um a um nos copos indo no sentido horário. Ele repete isso, começando pela tigela em que deixou cair o último feijão, até que a situação inicial volte a aparecer. Por exemplo, com 5 tigelas, ele age da seguinte forma:

<img class="img-responsive center-block" alt="animação de mover feijões em 5 tigelas" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;" />

Assim, com 5 tigelas, é preciso que Peter faça 15 movimentos para regressar à situação inicial.

Considere $M(x)$ como a representação do número de movimentos necessários para retornar à situação inicial, começando com $x$ tigelas. Assim, $M(5) = 15$. Pode-se verificar que $M(100) = 10920$.

Encontre $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$. Dê sua resposta modulo $7^9$.

# --hints--

`gatheringTheBeans()` deve retornar `5032316`.

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

# --seed--

## --seed-contents--

```js
function gatheringTheBeans() {

  return true;
}

gatheringTheBeans();
```

# --solutions--

```js
// solution required
```

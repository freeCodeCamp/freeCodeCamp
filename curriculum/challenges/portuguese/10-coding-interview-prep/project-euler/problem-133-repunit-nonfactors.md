---
id: 5900f3f21000cf542c50ff04
title: 'Problema 133: Não fatores repunit'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

Em inglês, um número que consiste apenas de 1s é chamado de repunit. Definiremos $R(k)$ como sendo um repunit de comprimento $k$. Por exemplo, $R(6) = 111111$.

Vamos considerar os repunits no formato $R({10}^n)$.

Embora $R(10)$, $R(100)$ ou $R(1000)$ não sejam divisíveis por 17, $R(10000)$ é. No entanto, não há valor de n para o qual $R({10}^n)$ seja divisível por 19. Curiosamente, 11, 17, 41 e 73 são os únicos quatro primos abaixo de cem que podem ser um fator de $R({10}^n)$.

Encontre a soma de todos os primos abaixo de cem mil que nunca serão um fator de $R({10}^n)$.

# --hints--

`repunitNonfactors()` deve retornar `453647705`.

```js
assert.strictEqual(repunitNonfactors(), 453647705);
```

# --seed--

## --seed-contents--

```js
function repunitNonfactors() {

  return true;
}

repunitNonfactors();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4031000cf542c50ff16
title: 'Problema 151: Folhas de papel de tamanhos padrão: um problema de valor esperado'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

Uma gráfica executa 16 lotes (tarefas) toda semana e cada lote requer uma folha de papel especial de tamanho A5 para a prova de cores.

Todas as segundas de manhã, o coordenador abre um novo envelope, contendo uma grande folha do papel especial com tamanho A1.

Ele, então, prossegue reduzindo-a ao meio e obtendo, assim, duas folhas de tamanho A2. Depois, corta uma delas pela metade para obter duas folhas de tamanho A3 e assim por diante até obter a folha A5 necessária para o primeiro lote da semana.

Todas as folhas não utilizadas são colocadas de volta no envelope.

<img class="img-responsive center-block" alt="Folha de tamanho A1 dividida em: A2, A3, A4 e duas folhas A5" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;" />

No início de cada lote subsequente, ele tira uma folha de papel do envelope aleatoriamente. Se ela for de tamanho A5, ele a usa. Se for maior, ele repete o procedimento de "cortar pela metade" até ter o que precisa. Todas as folhas restantes são sempre colocadas de volta no envelope.

Excluindo o primeiro e último lote da semana, encontre o número esperado de vezes (durante cada semana) em que o coordenador encontrará uma única folha de papel no envelope.

Arredonde sua resposta para até seis casas decimais usando o formato `x.xxxxxx`.

# --hints--

`expectedValueProblem()` deve retornar `0.464399`.

```js
assert.strictEqual(expectedValueProblem(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function expectedValueProblem() {

  return true;
}

expectedValueProblem();
```

# --solutions--

```js
// solution required
```

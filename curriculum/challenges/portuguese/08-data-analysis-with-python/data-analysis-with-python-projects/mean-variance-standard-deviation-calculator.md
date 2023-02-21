---
id: 5e46f7e5ac417301a38fb928
title: Calculadora de média, variância e desvio padrão
challengeType: 10
forumTopicId: 462366
dashedName: mean-variance-standard-deviation-calculator
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-mean-variance-standard-deviation-calculator" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


Ainda estamos desenvolvendo a parte instrucional interativa do currículo Python. Por enquanto, aqui estão alguns vídeos no canal do freeCodeCamp.org do YouTube que ensinarão tudo o que você precisa saber para completar este projeto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python em vídeo para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Como analisar dados em Python com o Pandas</a> (10 horas)

# --instructions--

Crie uma função chamada `calculate()` em `mean_var_std.py` que use o Numpy para produzir a média, variância, desvio-padrão, máximo, mínimo e soma das linhas, colunas e elementos em uma matriz de 3 x 3.

A entrada da função deve ser uma lista com 9 algarismos. A função deve converter a lista em um array 3 x 3 do Numpy e, em seguida, retornar um dicionário contendo a média, variância, desvio padrão, máximo, mínimo e soma ao longo de ambos os eixos e para a matriz nivelada.

O dicionário retornado deve seguir esse formato:

```py
{
  'mean': [axis1, axis2, flattened],
  'variance': [axis1, axis2, flattened],
  'standard deviation': [axis1, axis2, flattened],
  'max': [axis1, axis2, flattened],
  'min': [axis1, axis2, flattened],
  'sum': [axis1, axis2, flattened]
}
```

Se uma lista que contiver menos de 9 elementos for passada para a função, ela deve criar uma exceção `ValueError` com a mensagem: "List must contain nine numbers." (A lista deve conter nove números). Os valores do dicionário retornado devem ser listas e não matrizes do Numpy.

Por exemplo, `calculate([0,1,2,3,4,5,6,7,8])` deve retornar:

```py
{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}
```

Os testes unitários para este projeto estão em `test_module.py`.

## Desenvolvimento

Para o desenvolvimento, você pode usar `main.py` para testar sua função `calculate()`. Clique no botão "Run" e `main.py` será executado.

## Testes

Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run".

## Envio

Copie o URL do seu projeto e envie-o para o freeCodeCamp.

# --hints--

Ele deve passar em todos os testes do Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

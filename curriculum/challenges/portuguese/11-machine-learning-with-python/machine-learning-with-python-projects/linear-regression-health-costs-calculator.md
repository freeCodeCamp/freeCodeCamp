---
id: 5e46f8edac417301a38fb930
title: Calculadora de custos de saúde de regressão linear
challengeType: 10
forumTopicId: 462379
dashedName: linear-regression-health-costs-calculator
---

# --description--

Você <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-linear-regression-health-costs-calculator/blob/master/fcc_predict_health_costs_with_regression.ipynb" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com Google Colaboratory</a>.

Depois de acessar esse link, crie uma cópia do notebook em sua própria conta ou localmente. Depois que você completar o projeto e que ele passar pelo teste (incluído nesse link), envie o link do projeto abaixo. Se você estiver enviando um link do Google Colaboratory, certifique-se de ativar o compartilhamento de links para "qualquer um que tenha o link".

Ainda estamos desenvolvendo o conteúdo instrucional interativo do currículo de aprendizagem de máquina. Por enquanto, você pode ver os desafios de vídeo desta certificação. Você também pode ter que procurar recursos adicionais de aprendizagem, do mesmo modo que você faria ao trabalhar em um projeto do mundo real.

# --instructions--

Neste desafio, você preverá os custos de saúde usando um algoritmo de regressão.

Você recebe um conjunto de dados que contém informações sobre diferentes pessoas, incluindo seus custos de saúde. Use os dados para prever custos de saúde com base em novos dados.

As duas primeiras células deste caderno importam bibliotecas e dados.

Certifique-se de converter os dados categorizados em números. Use 80% dos dados como o `train_dataset` e 20% dos dados como o `test_dataset`.

Use `pop` para a coluna "expenses" (despesas) destes conjuntos de dados para criar novos conjuntos de dados chamados `train_labels` e `test_labels`. Use essas etiquetas ao treinar o seu modelo.

Crie um modelo e treine com o `train_dataset`. Execute a célula final neste caderno para verificar o seu modelo. A célula final usará o `test_dataset` não visto para verificar se o modelo generaliza bem.

Para passar no desafio, `model.evaluate` deve retornar um erro médio absoluto de menos de 3500. Isto significa que prevê o custo correto dos cuidados de saúde na faixa de $3500.

A célula final também preverá despesas usando o `test_dataset` e colocará os resultados em gráficos.

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

---
id: 5e46f7e5ac417301a38fb929
title: Analisador de dados demográficos
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


Ainda estamos desenvolvendo a parte instrucional interativa do currículo Python. Por enquanto, aqui estão alguns vídeos no canal do freeCodeCamp.org do YouTube que ensinarão tudo o que você precisa saber para completar este projeto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python em vídeo para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Como analisar dados em Python com o Pandas</a> (10 horas)

# --instructions--

Neste desafio você deve analisar dados demográficos usando o Pandas. Você receberá um conjunto de dados relativos aos dados demográficos que foram extraídos do banco de dados do censo de 1994. Aqui está um exemplo de como os dados ficariam:

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

Você deve usar o Pandas para responder as seguintes questões:

- Quantas pessoas de cada raça estão representadas neste dataset? Esta deve ser uma série Pandas com nomes das raças como rótulos de índice. (coluna `race`)
- Qual é a média de idade dos homens?
- Qual é a porcentagem de pessoas que têm um diploma de bacharel?
- Qual é a porcentagem de pessoas com educação superior (`Bachelors`, `Masters`, ou `Doctorate` - graduados, mestres e doutores, respectivamente) que ganham mais de 50 mil?
- Qual é a porcentagem de pessoas sem educação superior que ganham mais de 50 mil?
- Qual é o número mínimo de horas que uma pessoa trabalha por semana?
- Qual é a porcentagem das pessoas que trabalham o número mínimo de horas por semana e que têm um salário superior a 50 mil?
- Qual país tem a maior porcentagem de pessoas que ganham > 50mil e qual é essa porcentagem?
- Identifique a ocupação mais popular entre aqueles que ganham > 50 mil na Índia.

Use o código inicial do arquivo `demographic_data_analyzer`. Atualize o código para que todas as variáveis definidas como "None" sejam definidas com o cálculo ou código apropriado. Arredonde todos os números decimais para o décimo mais próximo.

Os testes unitários foram escritos para você no `test_module.py`.

## Desenvolvimento

Para o desenvolvimento, você pode usar `main.py` para testar suas funções. Clique no botão "Run" e `main.py` será executado.

## Testes

Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run".

## Envio

Copie o URL do seu projeto e envie-o para o freeCodeCamp.

## Fonte do dataset

Dua, D. e Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repository</a>. Irvine, CA: University of California, School of Information and Computer Science.

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

---
id: 5e46f7f8ac417301a38fb92a
title: Visualizador de dados médicos
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-medical-data-visualizer/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Ainda estamos desenvolvendo a parte instrucional interativa do currículo Python. Por enquanto, aqui estão alguns vídeos no canal do freeCodeCamp.org do YouTube que ensinarão tudo o que você precisa saber para completar este projeto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python em vídeo para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Como analisar dados em Python com o Pandas</a> (10 horas)

# --instructions--

In this project, you will visualize and make calculations from medical examination data using `matplotlib`, `seaborn`, and `pandas`. Os valores do dataset foram coletados durante exames médicos.

## Descrição dos dados

As linhas do dataset representam os pacientes e as colunas representam informações como as medições corporais, os resultados de várias análises de sangue e escolhas de estilo de vida. Você usará o dataset para explorar a relação entre a doença cardíaca, medição corporal, marcadores sanguíneos e escolhas de estilo de vida.

Nome do arquivo: medical_examination.csv

|                  Funcionalidade                  | Tipo de variável  |   Variável    |                     Tipo de valor                     |
|:------------------------------------------------:|:-----------------:|:-------------:|:-----------------------------------------------------:|
|                      Idade                       | Recurso objetivo  |     `age`     |                      int (dias)                       |
|                      Altura                      | Recurso objetivo  |   `height`    |                       int (cm)                        |
|                       Peso                       | Recurso objetivo  |   `weight`    |                      float (kg)                       |
|                      Gênero                      | Recurso objetivo  |   `gender`    |                   código categórico                   |
|            Pressão arterial sistólica            | Recurso de exame  |    `ap_hi`    |                          int                          |
|           Pressão arterial diastólica            | Recurso de exame  |    `ap_lo`    |                          int                          |
|                    Colesterol                    | Recurso de exame  | `cholesterol` | 1: normal, 2: acima do normal, 3: bem acima do normal |
|                     Glicose                      | Recurso de exame  |    `gluc`     | 1: normal, 2: acima do normal, 3: bem acima do normal |
|                      Fumar                       | Recurso subjetivo |    `smoke`    |                        binário                        |
|                Consumo de álcool                 | Recurso subjetivo |    `alco`     |                        binário                        |
|                 Atividade física                 | Recurso subjetivo |   `active`    |                        binário                        |
| Presença ou ausência de doenças cardiovasculares |   Variável alvo   |   `cardio`    |                        binário                        |

## Tarefas

Create a chart similar to `examples/Figure_1.png`, where we show the counts of good and bad outcomes for the `cholesterol`, `gluc`, `alco`, `active`, and `smoke` variables for patients with `cardio=1` and `cardio=0` in different panels.

Use os dados para completar as seguintes tarefas em `medical_data_visualizer.py`:

- Adicione uma coluna de `overweight` (excesso de peso) aos dados. Para determinar se uma pessoa tem excesso de peso, primeiro calcule sua IMC dividindo seu peso em quilogramas pelo quadrado de sua altura em metros. Se esse valor é > 25, a pessoa está com excesso de peso. Use the value `0` for NOT overweight and the value `1` for overweight.
- Normalize the data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is `1`, make the value `0`. If the value is more than `1`, make the value `1`.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using `seaborn`'s `catplot()`. The dataset should be split by `Cardio` so there is one chart for each `cardio` value. O gráfico deve parecer com `examples/Figure_1.png`.
- Limpe os dados. Filtrar os seguintes segmentos de pacientes que representam dados incorretos:
  - pressão diastólica é maior do que a sistólica (Manter os dados corretos com `(df['ap_lo'] <= df['ap_hi'])`)
  - a altura é menor que o percentil 2,5 (Manter os dados corretos com `(df['height'] >= df['height'].quantile(0.025))`)
  - a altura é maior que o percentil 97,5
  - o peso é menor que o percentil 2,5
  - o peso é maior que o percentil 97,5
- Crie uma matriz de correlação usando o dataset. Plot the correlation matrix using `seaborn`'s `heatmap()`. Mascare o triângulo superior. O gráfico deve parecer com `examples/Figure_2.png`.

Quando uma variável for definida como `None`, certifique-se de configurá-la com o código correto.

Unit tests are written for you under `test_module.py`.

## Instructions
By each number in the `medical_data_visualizer.py` file, add the code from the associated instruction number below.

1. Import the data from `medical_examination.csv` and assign it to the `df` variable
2. Create the `overweight` column in the `df` variable
3. Normalize data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is 1, set the value to `0`. If the value is more than `1`, set the value to `1`.
4. Draw the Categorical Plot in the `draw_cat_plot` function
5. Create a DataFrame for the cat plot using `pd.melt` with values from `cholesterol`, `gluc`, `smoke`, `alco`, `active`, and `overweight` in the `df_cat` variable.
6. Group and reformat the data in `df_cat` to split it by `cardio`. Show the counts of each feature. You will have to rename one of the columns for the `catplot` to work correctly.
7. Convert the data into `long` format and create a chart that shows the value counts of the categorical features using the following method provided by the seaborn library import : `sns.catplot()`
8. Get the figure for the output and store it in the `fig` variable
9. Do not modify the next two lines
10. Draw the Heat Map in the `draw_heat_map` function
11. Clean the data in the `df_heat` variable by filtering out the following patient segments that represent incorrect data:
    - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
    - height is more than the 97.5th percentile
    - weight is less than the 2.5th percentile
    - weight is more than the 97.5th percentile
12. Calculate the correlation matrix and store it in the `corr` variable
13. Generate a mask for the upper triangle and store it in the `mask` variable
14. Set up the `matplotlib` figure
15. Plot the correlation matrix using the method provided by the `seaborn` library import: `sns.heatmap()`
16. Do not modify the next two lines

## Desenvolvimento

Write your code in `medical_data_visualizer.py`. For development, you can use `main.py` to test your code.

## Testes

The unit tests for this project are in `test_module.py`. Importamos os testes de `test_module.py` em `main.py` para a sua conveniência.

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

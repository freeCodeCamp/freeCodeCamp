---
id: 5e46f7f8ac417301a38fb92a
title: Visualizador de dados médicos
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Você <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-medical-data-visualizer/" target="_blank" rel="noopener noreferrer nofollow">trabalhará nesse projeto com o nosso código inicial do Gitpod </a>.

Ainda estamos desenvolvendo a parte instrucional interativa do currículo Python. Por enquanto, aqui estão alguns vídeos no canal do freeCodeCamp.org do YouTube que ensinarão tudo o que você precisa saber para completar este projeto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de Python em vídeo para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Como analisar dados em Python com o Pandas</a> (10 horas)

# --instructions--

Neste projeto, você vai visualizar e fazer cálculos a partir de dados dos exames médicos usando o `matplotlib`, o `seaborn` e o `pandas`. Os valores do dataset foram coletados durante exames médicos.

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

Crie um gráfico semelhante a `examples/Figure_1.png`, onde mostramos a contagem de resultados bons e ruins para as variáveis `cholesterol`, `gluc`, `alco`, `active` e `smoke` para pacientes com `cardio=1` e `cardio=0` em painéis diferentes.

Use os dados para completar as seguintes tarefas em `medical_data_visualizer.py`:

- Adicione uma coluna de `overweight` (excesso de peso) aos dados. Para determinar se uma pessoa tem excesso de peso, primeiro calcule sua IMC dividindo seu peso em quilogramas pelo quadrado de sua altura em metros. Se esse valor é > 25, a pessoa está com excesso de peso. Use o valor `0` para NÃO ter excesso de peso e o valor `1` para tê-lo.
- Normalize os dados, tornando `0` sempre bom e `1` sempre ruim. Se o valor de `cholesterol` ou de `gluc` for `1`, torne o valor `0`. Se o valor for maior que `1`, torne o valor `1`.
- Converta os dados em um formato long e crie uma tabela que mostra as contagens de valor dos recursos categóricas usando o `catplot()` do `seaborn`. O dataset deve ser dividido por `Cardio`, de modo que haja uma tabela para cada valor de `cardio`. O gráfico deve parecer com `examples/Figure_1.png`.
- Limpe os dados. Filtrar os seguintes segmentos de pacientes que representam dados incorretos:
  - pressão diastólica é maior do que a sistólica (Manter os dados corretos com `(df['ap_lo'] <= df['ap_hi'])`)
  - a altura é menor que o percentil 2,5 (Manter os dados corretos com `(df['height'] >= df['height'].quantile(0.025))`)
  - a altura é maior que o percentil 97,5
  - o peso é menor que o percentil 2,5
  - o peso é maior que o percentil 97,5
- Crie uma matriz de correlação usando o dataset. Faça o gráfico da matriz de correlação usando o `heatmap()` do `seaborn`. Mascare o triângulo superior. O gráfico deve parecer com `examples/Figure_2.png`.

Quando uma variável for definida como `None`, certifique-se de configurá-la com o código correto.

Os testes unitários foram escritos para você no `test_module.py`.

## Instruções
Para cada número do arquivo `medical_data_visualizer.py`, adicione o código do número de instrução associado abaixo.

1. Importe os dados de `medical_examination.csv` e atribua-os à variável `df`
2. Crie a coluna `overweight` na variável `df`
3. Normalize os dados, tornando `0` sempre bom e `1` sempre ruim. Se o valor de `cholesterol` ou de `gluc` for 1, defina o valor como `0`. Se o valor for maior que `1`, defina o valor como `1`.
4. Desenhe o gráfico categórico na função `draw_cat_plot`
5. Crie um DataFrame para o gráfico de categorias usando `pd.melt` com valores de `cholesterol`, `gluc`, `smoke`, `alco`, `active` e `overweight` na variável `df_cat`.
6. Agrupe e reformate os dados em `df_cat` para dividi-los por `cardio`. Mostre as contagens de cada recurso. Você terá que renomear uma das colunas para que o `catplot` funcione corretamente.
7. Converta os dados para um formato `long` e crie um gráfico que mostre os valores dos recursos categóricos, usando o seguinte método fornecido pela importação de biblioteca seaborn: `sns.catplot()`
8. Obtenha o valor para a saída e armazene-o na variável `fig`
9. Não modifique as próximas duas linhas
10. Desenhe o mapa de calor na função `draw_heat_map`
11. Limpe os dados na variável `df_heat` filtrando os seguintes segmentos de pacientes que representam dados incorretos:
    - a altura é menor que o percentil 2,5 (Manter os dados corretos com `(df['height'] >= df['height'].quantile(0.025))`)
    - a altura é maior que o percentil 97,5
    - o peso é menor que o percentil 2,5
    - o peso é maior que o percentil 97,5
12. Calcule a matriz de correlação e armazene-a na variável `corr`
13. Gere uma máscara para o triângulo superior e armazene-a na variável `mask`
14. Configure o valor de `matplotlib`
15. Faça o gráfico da matriz de correlação usando o método fornecido pela biblioteca `seaborn` importando: `sns.heatmap()`
16. Não modifique as próximas duas linhas

## Desenvolvimento

Escreva o seu código em `medical_data_visualizer.py`. Para o desenvolvimento, você pode usar `main.py` para testar seu código.

## Testes

Os testes unitários para este projeto estão em `test_module.py`. Importamos os testes de `test_module.py` em `main.py` para a sua conveniência.

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

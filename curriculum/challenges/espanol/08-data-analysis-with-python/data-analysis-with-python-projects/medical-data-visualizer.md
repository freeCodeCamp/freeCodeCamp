---
id: 5e46f7f8ac417301a38fb92a
title: Visualizador de datos médicos
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-medical-data-visualizer/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por ahora, aquí hay algunos vídeos en nuestro canal de YouTube freeCodeCamp.org que te enseñará todo lo que necesitas saber para completer este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso en Vídeo de Python para Todos</a> (Duración: 14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Como analizar datos con Python Pandas</a> (10 horas)

# --instructions--

In this project, you will visualize and make calculations from medical examination data using `matplotlib`, `seaborn`, and `pandas`. Los valores del conjunto de datos (dataset) se recogieron durante los exámenes médicos.

## Descripción de datos

Las filas del conjunto de datos representan a los pacientes y las columnas representan información como medidas corporales, resultados de varios análisis de sangre y opciones de estilo de vida. Utilizarás el conjunto de datos para explorar la relación entre enfermedades cardiacas, medidas del cuerpo, indicadores sanguíneos y opciones de estilo de vida.

Nombre del archivo: medical_examination.csv

|                    Característica                     |      Tipo de variable      |   Variable    |                            Tipo de unidad                             |
|:-----------------------------------------------------:|:--------------------------:|:-------------:|:---------------------------------------------------------------------:|
|                         Edad                          |  Característica objetivo   |     `age`     |                              int (días)                               |
|                        Altura                         |  Característica objetivo   |   `height`    |                               int (cm)                                |
|                         Peso                          |  Característica objetivo   |   `weight`    |                              float (kg)                               |
|                         Sexo                          |  Característica objetivo   |   `gender`    |                          código de categoría                          |
|              Presión arterial sistólica               | Características del examen |    `ap_hi`    |                                  int                                  |
|              Presión arterial diastólica              | Característica del examen  |    `ap_lo`    |                                  int                                  |
|                      Colesterol                       | Característica del examen  | `cholesterol` | 1: normal, 2: por encima de lo normal, 3: muy por encima de lo normal |
|                        Glucosa                        | Característica del examen  |    `gluc`     | 1: normal, 2: por encima de lo normal, 3: muy por encima de lo normal |
|                        Fumador                        |  Característica subjetiva  |    `smoke`    |                                binario                                |
|                  Consumo de alcohol                   |  Característica subjetiva  |    `alco`     |                                binario                                |
|                   Actividad física                    |  Característica subjetiva  |   `active`    |                                binario                                |
| Presencia o ausencia de enfermedades cardiovasculares |     Variable objetivo      |   `cardio`    |                                binario                                |

## Tareas

Create a chart similar to `examples/Figure_1.png`, where we show the counts of good and bad outcomes for the `cholesterol`, `gluc`, `alco`, `active`, and `smoke` variables for patients with `cardio=1` and `cardio=0` in different panels.

Utiliza los datos para completar las siguientes tareas en `medical_data_visualizer.py`:

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value `0` for NOT overweight and the value `1` for overweight.
- Normalize the data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is `1`, make the value `0`. If the value is more than `1`, make the value `1`.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using `seaborn`'s `catplot()`. The dataset should be split by `Cardio` so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using `seaborn`'s `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

Cada vez que una variable está establecida en `Ninguno`, asegúrese de establecerla en el código correcto.

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

## Desarrollo

Write your code in `medical_data_visualizer.py`. For development, you can use `main.py` to test your code.

## Pruebas

The unit tests for this project are in `test_module.py`. Hemos importado las pruebas de `test_module.py` a `main.py` para tu conveniencia.

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

# --hints--

Debería pasar todas las pruebas de Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

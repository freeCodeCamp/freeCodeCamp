---
id: 5e46f7f8ac417301a38fb92a
title: Visualizador de datos médicos
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código de inicio Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Todavía estamos desarrollando la parte interactiva del currículo de Python. Por ahora, aquí hay algunos vídeos en nuestro canal de YouTube freeCodeCamp.org que te enseñará todo lo que necesitas saber para completer este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

En este proyecto, visualizarás y harás algunos cálculos a partir de datos de exámenes médicos utilizando matplotlib, seabron y pandas. Los valores del conjunto de datos (dataset) se recogieron durante los exámenes médicos.

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

Crear un gráfico similar a `ejemplos/Figure_1. ng`, donde mostramos las cifras de resultados buenos y malos para las variables `colesterol`, `gluc`, `alco`, `activo` y `humo` en los pacientes con cardio=1 y cardio=0 en diferentes paneles.

Utiliza los datos para completar las siguientes tareas en `medical_data_visualizer.py`:

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value 0 for NOT overweight and the value 1 for overweight.
- Normalize the data by making 0 always good and 1 always bad. If the value of `cholesterol` or `gluc` is 1, make the value 0. If the value is more than 1, make the value 1.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `catplot()`. The dataset should be split by 'Cardio' so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using seaborn's `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

Cada vez que una variable está establecida en `Ninguno`, asegúrese de establecerla en el código correcto.

Las pruebas unitarias están escritas en `test_module.py`.

## Desarrollo

Para el desarrollo, puedes usar `main.py` para probar tus funciones. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Hemos importado las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run".

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

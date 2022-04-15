---
id: 5e46f7f8ac417301a38fb92a
title: Visualizador de datos médicos
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Estarás [trabajando en este proyecto con nuestro código inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer).

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por ahora, aquí hay algunos vídeos en nuestro canal de YouTube freeCodeCamp.org que te enseñará todo lo que necesitas saber para completer este proyecto:

- [Curso: Python para todos](https://www.freecodecamp.org/news/python-for-everybody/) (14 horas)
- [Curso: Aprende Python](https://www.freecodecamp.org/news/learn-python-video-course/) (10 horas)

# --instructions--

En este proyecto, visualizarás y harás algunos cálculos a partir de datos de exámenes médicos utilizando matplotlib, seabron y pandas. Los valores del conjunto de datos (dataset) se recogieron durante los exámenes médicos.

## Descripción de datos

Las filas del conjunto de datos representan a los pacientes y las columnas representan información como medidas corporales, resultados de varios análisis de sangre y opciones de estilo de vida. Utilizarás el conjunto de datos para explorar la relación entre enfermedades cardiacas, medidas del cuerpo, indicadores sanguíneos y opciones de estilo de vida.

Nombre del archivo: medical_examination.csv

|                    Característica                     |      Tipo de variable      |  Variable  |                            Tipo de unidad                             |
|:-----------------------------------------------------:|:--------------------------:|:----------:|:---------------------------------------------------------------------:|
|                         Edad                          |  Característica objetivo   |    edad    |                              int (días)                               |
|                        Altura                         |  Característica objetivo   |   altura   |                               int (cm)                                |
|                         Peso                          |  Característica objetivo   |    peso    |                              float (kg)                               |
|                         Sexo                          |  Característica objetivo   |   género   |                          código de categoría                          |
|              Presión arterial sistólica               | Características del examen |   ap_hi    |                                  int                                  |
|              Presión arterial diastólica              | Característica del examen  |   ap_lo    |                                  int                                  |
|                      Colesterol                       | Característica del examen  | colesterol | 1: normal, 2: por encima de lo normal, 3: muy por encima de lo normal |
|                        Glucosa                        | Característica del examen  |  glúcido   | 1: normal, 2: por encima de lo normal, 3: muy por encima de lo normal |
|                        Fumador                        |  Característica subjetiva  |    humo    |                                binario                                |
|                  Consumo de alcohol                   |  Característica subjetiva  |    alco    |                                binario                                |
|                   Actividad física                    |  Característica subjetiva  |   activo   |                                binario                                |
| Presencia o ausencia de enfermedades cardiovasculares |     Variable objetivo      |  cardiaco  |                                binario                                |

## Tareas

Crear un gráfico similar a `ejemplos/Figure_1. ng`, donde mostramos las cifras de resultados buenos y malos para las variables `colesterol`, `gluc`, `alco`, `activo` y `humo` en los pacientes con cardio=1 y cardio=0 en diferentes paneles.

Utiliza los datos para completar las siguientes tareas en `medical_data_visualizer.py`:

- Agrega una columna de `sobrepeso` a los datos. Para determinar si una persona tiene sobrepeso, primero calcule su IMC dividiendo su peso en kilogramos por el cuadrado de su altura en metros. Si ese valor es > 25 entonces la persona tiene sobrepeso. Utilice el valor 0 para NO sobrepeso y el valor 1 para el sobrepeso.
- Normaliza los datos haciendo 0 siempre bueno y 1 siempre malo. Si el valor de `cholesterol` o `gluc` es 1, haga que el valor 0. Si el valor es mayor que 1, haga el valor 1.
- Convierte los datos en formato largo y crea un gráfico que muestre el recuento de valores de las características categóricas usando `catplot()` de seaborn. El conjunto de datos debe dividirse por 'Cardio', así que hay un gráfico por cada valor de `cardio`. El gráfico debería verse como `examples/Figure_1.png`.
- Limpia los datos. Filtrar los siguientes segmentos de pacientes que representan datos incorrectos:
  - la presión diastólica es más alta que la máxima (Mantén los datos correctos con `(df['ap_lo'] <= df['ap_hi'])`)
  - la altura es menor que el 2.5º percentil (Mantén los datos correctos con `(df['height'] >= df['height'].quantile(0.025))`)
  - la altura es superior al 97,5º percentil
  - el peso es menor que el 2,5º percentil
  - el peso es superior al 97,5º percentil
- Crear una matriz de correlación usando el conjunto de datos. Grafica la matriz de correlación usando la función `heatmap()` de seaborn. Enmascarar el triángulo superior de la matriz. El gráfico debería verse como `examples/Figure_2.png`.

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

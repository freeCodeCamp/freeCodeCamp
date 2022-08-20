---
id: 5e4f5c4b570f7e3a4949899f
title: Pronosticador del nivel del mar
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

Estarás [trabajando en este proyecto con nuestro código inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor).

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por ahora, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- [Python para Todos Curso en Video](https://www.freecodecamp.org/news/python-for-everybody/) (14 horas)
- [Aprende Python Curso en Video](https://www.freecodecamp.org/news/learn-python-video-course/) (10 horas)

# --instructions--

Analizará un conjunto de datos sobre el cambio del nivel medio del mar a nivel mundial desde 1880. Utilizarás los datos para predecir el cambio del nivel del mar hasta el año 2050.

Utiliza los datos para completar las siguientes tareas:

- Utiliza Pandas para importar los datos de `epa-sea-level.csv`.
- Usa matplotlib para crear un diagrama de dispersión usando la columna "Year" como el eje x y la columna "CSIRO Adjusted Sea Level" como el eje y.
- Usa la función `linregress` de `scipy.stats` para obtener la pendiente e intersección con el eje y de la línea de mejor encaje. Dibuja la línea de mejor encaje sobre el diagrama de dispersión. Haz que la línea pase por el año 2050 para predecir el aumento del nivel del mar en ese año.
- Traza una nueva línea de mejor encaje utilizando datos del año 2000 hasta el año más reciente del conjunto de datos. Haz que la línea pase también por el año 2050 para predecir la subida del nivel del mar en 2050 si el ritmo de subida continúa como desde el año 2000.
- La etiqueta del eje x debe ser "Year", la etiqueta del eje y debe ser "Sea Level (inches)", y el título debe ser "Rise in Sea Level".

Las pruebas unitarias están escritas para en `test_module.py`.

El boilerplate también incluye los comandos para guardar y devolver la imagen.

## Desarrollo

Para el desarrollo, puedes utilizar `main.py` para probar tus funciones. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Importamos las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run".

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

## Fuente de datos
[Global Average Absolute Sea Level Change](https://datahub.io/core/sea-level-rise), 1880-2014 de la Agencia de Protección Ambiental de los Estados Unidos utilizando datos de CSIRO, 2015; NOAA, 2015.


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

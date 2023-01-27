---
id: 5e444136903586ffb414c94d
title: Calculadora de tiempo
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

# --instructions--

Escribe una función llamada `add_time` que tome dos parámetros requeridos y un parámetro opcional:

- a start time in the 12-hour clock format (ending in AM or PM)
- a duration time that indicates the number of hours and minutes
- (optional) a starting day of the week, case insensitive

La función debe agregar la duración a la hora de inicio y devolver el resultado.

Si el resultado es el día siguiente, debería mostrar `(next day)` después de la hora. Si el resultado es más de un día después, debería mostrar `(n days later)` después del tiempo, donde "n" es el número de días más tarde.

Si a la función se le da el parámetro opcional de día de la semana, entonces la salida debe mostrar el día de la semana del resultado. El día de la semana en la salida debe aparecer después de la hora y antes del número de días después.

A continuación se muestran algunos ejemplos de casos diferentes que la función debe manejar. Preste atención a los espacios y la puntuación de los resultados.

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

No importes ninguna librería Python. Asume que las horas de inicio son horas válidas. Los minutos en el tiempo de duración serán un número entero inferior a 60, pero la hora puede ser cualquier número entero.

## Desarrollo

Escribe tu código en `time_calculator.py`. Para el desarrollo, puedes usar `main.py` para probar tu función `time_calculator()`. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Las pruebas unitarias para este proyecto están en `test_module.py`. Importamos las pruebas de `test_module.py` a `main.py` para tu comodidad. Las pruebas se ejecutarán automáticamente cada vez que presiones el botón "run".

## Envío

Copia el URL de tu proyecto y envíalo a freeCodeCamp.

# --hints--

Debe calcular correctamente las probabilidades y pasar todas las pruebas.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

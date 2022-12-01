---
id: 5e44414f903586ffb414c950
title: Calculadora de probabilidad
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

Supongamos que hay un sombrero que contiene 5 bolas azules, 4 bolas rojas y 2 bolas verdes. ¿Cuál es la probabilidad de que un sorteo aleatorio de 4 bolas contenga al menos 1 bola roja y 2 bolas verdes? Mientras que sería posible calcular la probabilidad usando matemáticas avanzadas, una manera más fácil es escribir un programa para realizar un gran número de experimentos para estimar una probabilidad aproximada.

Para este proyecto, usted escribirá un programa para determinar la probabilidad aproximada de dibujar ciertas bolas al azar de un sombrero.

Primero, crea una clase `Hat` en `prob_calculator.py`. La clase debe tomar un número variable de argumentos que especifiquen el número de bolas de cada color que están en el sombrero. Por ejemplo, un objeto de clase puede ser creado de cualquiera de estas maneras:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Siempre se creará un sombrero con al menos una pelota. Los argumentos pasados al objeto sombrero al crear deben ser convertidos a una variable de instancia de `contents`. `contents` debe ser una lista de cadenas que contenga un elemento por cada bola del sombrero. Cada elemento de la lista debe ser un nombre de color que represente una sola bola de ese color. Por ejemplo, si su sombrero es `{"red": 2, "blue": 1}`, `contents` debería ser `["red", "red", "blue"]`.

La clase `Hat` debe tener un método `draw` que acepte un argumento que indique el número de bolas a sacar del sombrero. Este método debe eliminar bolas al azar de `contents` y devolver esas bolas como una lista de cadenas. Las bolas no deben volver a introducirse en el sombrero durante el sorteo, de forma similar a un experimento de urna sin sustitución. Si el número de bolas a extraer supera la cantidad disponible, devuelve todas las bolas.

A continuación, crea una función `experiment` en `prob_calculator.py` (no dentro de la clase `Hat`). Esta función debe aceptar los siguientes argumentos:

- `hat`: A hat object containing balls that should be copied inside the function.
- `expected_balls`: An object indicating the exact group of balls to attempt to draw from the hat for the experiment. For example, to determine the probability of drawing 2 blue balls and 1 red ball from the hat, set `expected_balls` to `{"blue":2, "red":1}`.
- `num_balls_drawn`: The number of balls to draw out of the hat in each experiment.
- `num_experiments`: The number of experiments to perform. (The more experiments performed, the more accurate the approximate probability will be.)

La función `experiment` debe devolver una probabilidad.

Por ejemplo, digamos que quieres determinar la probabilidad de obtener al menos 2 bolas rojas y 1 bola verde cuando dibujas 5 bolas de un sombrero que contiene 6 negras, 4 rojos y 3 verdes. Para hacer esto, realizarás `N` experimentos, contarás cuantas `M` veces obtienes al menos 2 bolas rojas y 1 bola verde, y estimarás la probabilidad como `M/N`. Cada experimento consiste en comenzar con un sombrero que contiene las bolas especificadas, dibujar una serie de bolas, y comprobar si conseguimos las bolas que estábamos tratando de dibujar.

Así es como se llamaría la función de `experiment` basada en el ejemplo anterior con 2000 experimentos:

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

Dado que esto se basa en tablas aleatorias, la probabilidad será ligeramente diferente cada vez que se ejecuta el código.

*Sugerencia: Considere usar los módulos que ya se importan en la parte superior de `prob_calculator.py`. No inicialice semilla aleatoria dentro de `prob_calculator.py`.*

## Desarrollo

Escribe tu código en `prob_calculator.py` Para el desarrollo, puedes usar `main.py` para probar tu código. Haz clic en el botón "run" y se ejecutará `main.py`.

La placa utiliza la declaración `import` para importar los módulos `copy` y `random`. Considere el uso de estos en su proyecto.

## Pruebas

Las pruebas unitarias para este proyecto están en `test_module.py`. Hemos importado las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automaticamente cada vez que presione el botón de "run".

## Envío

Copia la URL de tu proyecto y envíalo a freeCodeCamp.

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

---
id: 5e44414f903586ffb414c950
title: Calculadora de probabilidad
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Supongamos que hay un sombrero que contiene 5 bolas azules, 4 bolas rojas y 2 bolas verdes. ¿Cuál es la probabilidad de que un sorteo aleatorio de 4 bolas contenga al menos 1 bola roja y 2 bolas verdes? Mientras que sería posible calcular la probabilidad usando matemáticas avanzadas, una manera más fácil es escribir un programa para realizar un gran número de experimentos para estimar una probabilidad aproximada.

Para este proyecto, usted escribirá un programa para determinar la probabilidad aproximada de dibujar ciertas bolas al azar de un sombrero.

First, create a `Hat` class in `main.py`. La clase debe tomar un número variable de argumentos que especifiquen el número de bolas de cada color que están en el sombrero. Por ejemplo, un objeto de clase puede ser creado de cualquiera de estas maneras:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Siempre se creará un sombrero con al menos una pelota. Los argumentos pasados al objeto sombrero al crear deben ser convertidos a una variable de instancia de `contents`. `contents` debe ser una lista de cadenas que contenga un elemento por cada bola del sombrero. Cada elemento de la lista debe ser un nombre de color que represente una sola bola de ese color. Por ejemplo, si su sombrero es `{"red": 2, "blue": 1}`, `contents` debería ser `["red", "red", "blue"]`.

La clase `Hat` debe tener un método `draw` que acepte un argumento que indique el número de bolas a sacar del sombrero. Este método debe eliminar bolas al azar de `contents` y devolver esas bolas como una lista de cadenas. Las bolas no deben volver a introducirse en el sombrero durante el sorteo, de forma similar a un experimento de urna sin sustitución. Si el número de bolas a extraer supera la cantidad disponible, devuelve todas las bolas.

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). Esta función debe aceptar los siguientes argumentos:

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

The output would be something like this:

```bash
>>> 0.356
```

Dado que esto se basa en tablas aleatorias, la probabilidad será ligeramente diferente cada vez que se ejecuta el código.

_Hint: Consider using the modules that are already imported at the top. Do not initialize random seed within the file._


# --hints--

Creation of `hat` object should add correct contents.

```js
({
  test: () => {
    pyodide.FS.writeFile("/home/pyodide/probability_calculator.py", code);
    pyodide.FS.writeFile(
      "/home/pyodide/test_module.py",
      `
import unittest
import probability_calculator
from importlib import reload

reload(probability_calculator)

probability_calculator.random.seed(95)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_hat_class_contents(self):
        hat = probability_calculator.Hat(red=3,blue=2)
        actual = hat.contents
        expected = ["red","red","red","blue","blue"]
        self.assertEqual(actual, expected, 'Expected creation of hat object to add correct contents.')
        `
    );
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  },
});
```

The `draw` method in `hat` class should reduce number of items in contents.


```js
({
  test: () => {
    pyodide.FS.writeFile("/home/pyodide/probability_calculator.py", code);
    pyodide.FS.writeFile(
      "/home/pyodide/test_module.py",
      `
import unittest
import probability_calculator
from importlib import reload

reload(probability_calculator)

probability_calculator.random.seed(95)
def test_hat_draw(self):
        hat = probability_calculator.Hat(red=5,blue=2)
        actual = hat.draw(2)
        expected = ['blue', 'red']
        self.assertEqual(actual, expected, 'Expected hat draw to return two random items from hat contents.')
        actual = len(hat.contents)
        expected = 5
        self.assertEqual(actual, expected, 'Expected hat draw to reduce number of items in contents.')
        `
    );
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  },
});
```

The `experiment` method should return a different probability.


```js
({
  test: () => {
    pyodide.FS.writeFile("/home/pyodide/probability_calculator.py", code);
    pyodide.FS.writeFile(
      "/home/pyodide/test_module.py",
      `
import unittest
import probability_calculator
from importlib import reload

reload(probability_calculator)

probability_calculator.random.seed(95)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def test_prob_experiment(self):
        hat = probability_calculator.Hat(blue=3,red=2,green=6)
        probability = probability_calculator.experiment(hat=hat, expected_balls={"blue":2,"green":1}, num_balls_drawn=4, num_experiments=1000)
        actual = probability
        expected = 0.272
        self.assertAlmostEqual(actual, expected, delta = 0.01, msg = 'Expected experiment method to return a different probability.')
        hat = probability_calculator.Hat(yellow=5,red=1,green=3,blue=9,test=1)
        probability = probability_calculator.experiment(hat=hat, expected_balls={"yellow":2,"blue":3,"test":1}, num_balls_drawn=20, num_experiments=100)
        actual = probability
        expected = 1.0
        self.assertAlmostEqual(actual, expected, delta = 0.01, msg = 'Expected experiment method to return a different probability.')
        `
    );
    const testCode = `
from unittest import main
import test_module
from importlib import reload

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  },
});
```

# --seed--

## --seed-contents--

```py
import copy
import random

class Hat:
    pass

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    pass
```

# --solutions--

```py
import copy
import random

class Hat:
    def __init__(self, **hat):
        self.hat = hat
        contents = []
        for i in hat:
            for j in range(hat[i]):
                contents.append(i)           
        self.contents = contents


    def draw(self, number): 
        drawn = []
        if number >= len(self.contents):
            return self.contents
        else:
            for i in range(number):
                drawn.append(
                    self.contents.pop(random.randrange(len(self.contents)))
                )                
        return drawn

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):

    expected_balls_list = []
    drawn_list = []
    success = 0
    for i in expected_balls:
        for j in range(expected_balls[i]):
            expected_balls_list.append(i)
    for j in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        drawn_list.append(hat_copy.draw(num_balls_drawn))        
        exp_ball_list_copy = expected_balls_list[:]
        for k in range(len(drawn_list[j])):
            try:
                ind = exp_ball_list_copy.index(drawn_list[j][k])
                exp_ball_list_copy.pop(ind)
            except:
                continue
        if len(exp_ball_list_copy) == 0:
            success += 1




    probability = success/num_experiments

    return probability
```

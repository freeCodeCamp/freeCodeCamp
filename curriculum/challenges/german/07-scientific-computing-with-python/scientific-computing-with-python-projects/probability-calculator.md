---
id: 5e44414f903586ffb414c950
title: Wahrscheinlichkeitsrechner
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Angenommen, es gibt einen Hut mit 5 blauen Kugeln, 4 roten Kugeln und 2 grünen Kugeln. Was ist die Wahrscheinlichkeit, dass bei einer zufälligen Ziehung von 4 Kugeln mindestens 1 rote Kugel und 2 grüne Kugeln gezogen werden? Es wäre zwar möglich, die Wahrscheinlichkeit mit Hilfe fortgeschrittener Mathematik zu berechnen, aber einfacher ist es, ein Programm zu schreiben, das eine große Anzahl von Experimenten durchführt, um eine ungefähre Wahrscheinlichkeit zu schätzen.

Für dieses Projekt wirst du ein Programm schreiben, dass die ungefähre Wahrscheinlichkeit bestimmen soll, bestimmte Kugeln aus einem Hut zu ziehen.

First, create a `Hat` class in `main.py`. Die Klasse sollte eine variable Anzahl von Argumenten verwenden, die die Anzahl der Kugeln jeder Farbe angibt, die im Hut enthalten sind. Zum Beispiel könnte ein Klassenobjekt auf diese Weise erstellt werden:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Ein Hut wird immer mit mindestens einer Kugel erstellt. Die Argumente, die beim Erstellen an das Hut-Objekt übergeben werden, sollten in eine `contents` Instanzvariable konvertiert werden. `contents` sollte eine Liste von Strings sein, die jeweils ein Element für jede Kugel im Hut enthalten. Jedes Element in der Liste sollte ein Farbname sein, der eine einzelne Kugel dieser Farbe darstellt. Zum Beispiel, wenn dein Hut `{"red": 2, "blue": 1}` enthält, sollte `contents` `["red", "red", "blue"]` beinhalten.

Die `Hat`-Klasse sollte eine `draw`-Methode haben, die ein Argument akzeptiert, dass die Anzahl der Kugeln angibt, die aus dem Hut gezogen werden. Diese Methode sollte Kugeln zufällig aus `contents` entfernen und diese Kugeln als eine Liste von String zurückgeben. Die Kugeln sollten während des Ziehens nicht wieder in den Hut zurückkehren, wie ein Urnen-Experiment ohne Zurücklegen. Wenn die Anzahl der zu ziehenden Kugeln die verfügbare Menge übersteigt, gib alle Kugeln zurück.

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). Diese Funktion sollte die folgenden Argumente akzeptieren:

- `hat`: Ein Hut-Objekt, das Bälle enthält, das innerhalb der Funktion kopiert werden soll.
- `expected_balls`: Ein Objekt, das die genaue Gruppe von Bällen angibt, die für das Experiment aus dem Hut gezogen werden sollen. Setze zum Beispiel `expected_balls` auf `{"blue":2, "red":1}`, um die Wahrscheinlichkeit zu bestimmen, dass 2 blaue Kugeln und 1 rote Kugel aus dem Hut gezogen werden.
- `num_balls_drawn`: Die Anzahl der Bälle, die in jedem Experiment aus dem Hut gezogen werden sollen.
- `num_experiments`: Die Anzahl der durchzuführenden Experimente. (Je mehr Experimente durchgeführt werden, desto genauer wird die ungefähre Wahrscheinlichkeit sein.)

Die `experiment`-Funktion sollte eine Wahrscheinlichkeit zurückgeben.

Wenn du zum Beispiel die Wahrscheinlichkeit bestimmen willst, dass du mindestens zwei rote Kugeln und eine grüne Kugel bekommst, wenn du fünf Kugeln aus einem Hut ziehst, der sechs schwarze, vier rote und drei grüne enthält. Um dies zu tun, wirst du `N` Experimente durchführen, zähle wie viele Male `M` du erhältst. Mindestens zwei rote Bälle und einen grünen Ball und bestimme die Wahrscheinkeit mit `M/N`. Jedes Experiment besteht darin, dass man mit einem Hut beginnt, der die angegebenen Kugeln enthält, mehrere Kugeln zieht und überprüft, ob man die Kugeln, die man zu ziehen versucht hat, auch bekommen hat.

So würdest du die `experiment`-Funktion, basierend auf dem obigen Beispiel von 2000 Experimenten durchführen:

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

Da dies auf zufälligen Ziehungen basiert, wird die Wahrscheinlichkeit jedes Mal, wenn der Code ausgeführt wird, etwas anders sein.

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

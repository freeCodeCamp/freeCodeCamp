---
id: 5e44414f903586ffb414c950
title: Calcolatore delle probabilità
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Supponiamo che ci sia un cappello contenente 5 palline blu, 4 palline rosse e 2 palline verdi. Qual è la probabilità che una pescata casuale di 4 palline contenga almeno 1 pallina rossa e 2 palline verdi? Mentre sarebbe possibile calcolare la probabilità utilizzando la matematica avanzata, un modo più facile è quello di scrivere un programma per eseguire un gran numero di esperimenti per stimare una probabilità approssimativa.

Per questo progetto, scriverai un programma per determinare la probabilità approssimativa di pescare a caso determinate palline da un cappello.

First, create a `Hat` class in `main.py`. La classe deve prendere un numero variabile di argomenti che specificano il numero di palline di ogni colore che sono nel cappello. Ad esempio, un oggetto di classe potrebbe essere creato in uno qualsiasi di questi modi:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Un cappello sarà sempre creato con almeno una pallina. Gli argomenti passati all'oggetto cappello alla creazione dovrebbero essere convertiti in una variabile di istanza `contents`. `contents` dovrebbe essere una lista di stringhe contenente un elemento per ogni pallina nel cappello. Ogni elemento nella lista dovrebbe essere il nome del colore che rappresenti una singola sfera di quel colore. Ad esempio, se il tuo cappello è `{"red": 2, "blue": 1}`, `contents` dovrebbe essere `["red", "red", "blue"]`.

La classe `Hat` dovrebbe avere un metodo `draw` che accetta un argomento che indica il numero di palline da prelevare dal cappello. Questo metodo dovrebbe rimuovere palline a caso da `contents` e restituire quelle palline come un elenco di stringhe. Le palle non devono tornare nel cappello durante il pescaggio, simile all'esperimento con un'urna senza sostituzione. Se il numero di palline da pescare supera la quantità disponibile, restituisci tutte le palline.

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). Questa funzione dovrebbe accettare i seguenti argomenti:

- `hat`: Un oggetto cappello contenente palline che dovrebbero essere copiate all'interno della funzione.
- `expected_balls`: Un oggetto che indica il gruppo esatto di palline che tentiamo di attingere dal cappello per l'esperimento. Ad esempio, per determinare la probabilità di pescare 2 palline blu e 1 pallina rossa dal cappello, imposta `expected_balls` a `{"blue":2, "red":1}`.
- `num_balls_drawn`: Il numero di palline da pescare dal cappello in ogni esperimento.
- `num_experiments`: Il numero di esperimenti da eseguire. (Più esperimenti eseguiti, più precisa sarà la probabilità approssimativa.)

La funzione `experiment` dovrebbe restituire una probabilità.

Per esempio, se vuoi determinare la probabilità di ottenere almeno due palline rosse e una verde quando estrai cinque palline da un cappello contenente sei palline nere, quattro rosse, e tre verdi. Per fare ciò, esegui `N` esperimenti, conti il numero `M` di estrazioni in cui ottieni almeno due palline rosse e una verde, e stimi la probabilità come `M/N`. Ogni esperimento consiste nell'iniziare con un cappello che contiene le palle specificate, estraendo svariate palline, e controllando se hai ottenuto le palle che stati cercando di ottenere.

Ecco come verrebbe chiamata la funzione `experiment` basata sull'esempio sopra con 2000 esperimenti:

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

Poiché questo è basato su pescaggi casuali, la probabilità sarà leggermente diversa ogni volta che il codice viene eseguito.

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

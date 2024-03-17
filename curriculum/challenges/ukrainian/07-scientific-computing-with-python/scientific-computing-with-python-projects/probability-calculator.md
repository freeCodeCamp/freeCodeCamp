---
id: 5e44414f903586ffb414c950
title: Калькулятор вірогідностей
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Уявімо, що у капелюсі лежить 5 синіх, 4 червоні та 2 зелені кульки. Яка вірогідність того, що з 4 кульок, які ви витягнете, принаймні 1 буде червоною та 2 зеленими? І хоча можливо прорахувати вірогідність за допомогою вищої математики, легше буде написати програму для виконання великої кількості експериментів, щоб оцінити приблизну вірогідність.

У цьому проєкті напишіть програму, яка визначатиме вірогідність випадкового діставання певних кульок із капелюха.

First, create a `Hat` class in `main.py`. Клас має прийняти змінну кількість аргументів, що вказують кількість кульок усіх кольорів із капелюха. Наприклад, об’єкт класу можна створити такими способами:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Капелюх завжди створюється з принаймні однією кулькою. Аргументи, які передаються в об’єкт-капелюх, під час створення мають конвертуватися в поле класу `contents`. `contents` має бути списком рядків, де один елемент дорівнює кожній кульці у капелюсі. Кожний елемент списку має бути назвою кольору, яка позначає кульку певного кольору. Наприклад, якщо ваш капелюх `{"red": 2, "blue": 1}`, то `contents` має бути `["red", "red", "blue"]`.

Клас `Hat` повинен мати метод `draw`, який приймає аргумент з позначенням кількості кульок, які можна витягти з капелюха. Цей метод має випадково витягати кульки з `contents` та повертати ці кульки списком рядків. Кульки не повинні повертатися до капелюха після того, як їх витягли (як в експерименті з урною без заміни). Якщо кількість кульок, які треба витягти, перевищує доступну кількість, поверніть усі кульки.

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). Ця функція повинна приймати наступні аргументи:

- `hat`: об’єкт-капелюх з кульками, що потрібно скопіювати у функцію.
- `expected_balls`: об’єкт, який вказує на точну кількість кульок, які треба вийняти з капелюха для експерименту. Наприклад, щоб визначити вірогідність того, що ви витягнете 2 сині та 1 червону кульки з капелюха, встановіть `expected_balls` на `{"blue":2, "red":1}`.
- `num_balls_drawn`: кількість кульок, які треба витягти з капелюха в кожному експерименті.
- `num_experiments`: кількість експериментів, які треба провести. (Чим більше експериментів було проведено, тим точнішою буде вірогідність.)

Функція `experiment` повинна повертати вірогідність.

Допустимо, якщо ви хочете визначити вірогідність витягти щонайменше 2 червоні кульки та одну зелену, коли витягаєте п’ять кульок з капелюха, де лежить шість чорних, чотири червоні та три зелені кульки. Для цього вам треба виконати `N` експериментів, порахувати скільки `M` разів ви можете витягти принаймні дві червоні кульки та одну зелену кульку та вирахувати вірогідність як `M/N`. Кожен експеримент складається з капелюха (з певними кульками), витягування декількох кульок та перевірки, чи ви витягли необхідні кульки.

Ось так ви можете викликати функцію `experiment`, базуючись на прикладі зверху з 2000 експериментами:

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

Оскільки все базується на випадкових витяганнях, то вірогідність буде злегка відрізнятися з кожним новим запуском коду.

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

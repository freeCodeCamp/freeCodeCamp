---
id: 5e44414f903586ffb414c950
title: Build a Probability Calculator Project
challengeType: 23
forumTopicId: 462364
dashedName: build-a-probability-calculator-project
---

# --description--

Suppose there is a hat containing 5 blue balls, 4 red balls, and 2 green balls. What is the probability that a random draw of 4 balls will contain at least 1 red ball and 2 green balls? While it would be possible to calculate the probability using advanced mathematics, an easier way is to write a program to perform a large number of experiments to estimate an approximate probability.

For this project, you will write a program to determine the approximate probability of drawing certain balls randomly from a hat.

First, create a `Hat` class in `main.py`. The class should take a variable number of arguments that specify the number of balls of each color that are in the hat. For example, a class object could be created in any of these ways:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

A hat will always be created with at least one ball. The arguments passed into the hat object upon creation should be converted to a `contents` instance variable. `contents` should be a list of strings containing one item for each ball in the hat. Each item in the list should be a color name representing a single ball of that color. For example, if your hat is `{'red': 2, 'blue': 1}`, `contents` should be `['red', 'red', 'blue']`.

The `Hat` class should have a `draw` method that accepts an argument indicating the number of balls to draw from the hat. This method should remove balls at random from `contents` and return those balls as a list of strings. The balls should not go back into the hat during the draw, similar to an urn experiment without replacement. If the number of balls to draw exceeds the available quantity, return all the balls.

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). This function should accept the following arguments:

- `hat`: A hat object containing balls that should be copied inside the function.
- `expected_balls`: An object indicating the exact group of balls to attempt to draw from the hat for the experiment. For example, to determine the probability of drawing 2 blue balls and 1 red ball from the hat, set `expected_balls` to `{'blue':2, 'red':1}`.
- `num_balls_drawn`: The number of balls to draw out of the hat in each experiment.
- `num_experiments`: The number of experiments to perform. (The more experiments performed, the more accurate the approximate probability will be.)

The `experiment` function should return a probability.

For example, if you want to determine the probability of getting at least two red balls and one green ball when you draw five balls from a hat containing six black, four red, and three green. To do this, you will perform `N` experiments, count how many times `M` you get at least two red balls and one green ball, and estimate the probability as `M/N`. Each experiment consists of starting with a hat containing the specified balls, drawing several balls, and checking if you got the balls you were attempting to draw.

Here is how you would call the `experiment` function based on the example above with 2000 experiments:

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={'red':2,'green':1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

The output would be something like this:

```bash
0.356
```

Since this is based on random draws, the probability will be slightly different each time the code is run.

_Hint: Consider using the modules that are already imported at the top. Do not initialize random seed within the file._

Note: open the browser console with F12 to see a more verbose output of the tests.

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
    const out = runPython(testCode);
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

class UnitTests(unittest.TestCase):
    maxDiff = None
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
    const out = runPython(testCode);
    assert(out);
  },
});
```

The `draw` method should behave correctly when the number of balls to extract is bigger than the number of balls in the hat.

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
    def test_hat_draw_2(self):
        hat = probability_calculator.Hat(yellow=5,red=1,green=3,blue=9,test=1)
        actual = sorted(hat.draw(20))
        expected = sorted(['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'red', 'green', 'green', 'green', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'test'])
        self.assertEqual(actual, expected, 'Expected hat draw to return all items from hat contents.')
        actual = len(hat.contents)
        expected = 0
        self.assertEqual(actual, expected, 'Expected hat draw to leave no items in contents.')
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
    const out = runPython(testCode);
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
    const out = runPython(testCode);
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
            drawn.extend(self.contents)
            self.contents = []
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

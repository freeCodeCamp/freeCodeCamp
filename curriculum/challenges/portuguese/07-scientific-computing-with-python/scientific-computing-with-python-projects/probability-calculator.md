---
id: 5e44414f903586ffb414c950
title: Calculadora de probabilidade
challengeType: 23
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Suponha que haja um chapéu contendo 5 bolas azuis, 4 bolas vermelhas e 2 bolas verdes. Qual é a probabilidade de um sorteio aleatório de 4 bolas conter pelo menos 1 bola vermelha e 2 bolas verdes? Embora seja possível calcular a probabilidade usando matemática avançada, uma maneira mais fácil é escrever um programa para realizar um grande número de experimentos para estimar uma probabilidade aproximada.

Para este projeto, escreva um programa para determinar a probabilidade aproximada de retirar certas bolas aleatoriamente de um chapéu.

First, create a `Hat` class in `main.py`. A classe deve ter um número variável de argumentos que especificam o número de bolas de cada cor que estão no chapéu. Por exemplo, um objeto da classe poderia ser criado de qualquer uma dessas maneiras:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Um chapéu será sempre criado com pelo menos uma bola. Os argumentos passados para o objeto de chapéu após a criação devem ser convertidos em uma variável de instância `contents`. `contents` deve ser uma lista de strings contendo um item para cada bola no chapéu. Cada item da lista deve ser um nome de cor que representa uma única bola dessa cor. Por exemplo, se sua instância de Hat for `{"red": 2, "blue": 1}`, `contents` deve ser `["red", "red", "blue"]`.

A classe `Hat` deve ter um método `draw` que aceita um argumento indicando o número de bolas a serem retiradas do chapéu. Este método deve remover bolas aleatoriamente de `contents` e retornar essas bolas como uma lista de strings. As bolas não devem voltar ao chapéu durante a retirada, à semelhança de uma experiência sem substituição. Se o número de bolas a serem retiradas exceder a quantidade disponível, retorne todas as bolas.

Next, create an `experiment` function in `main.py` (not inside the `Hat` class). Esta função deve aceitar os seguintes argumentos:

- `hat`: Um objeto de chapéu contendo bolas que devem ser copiadas dentro da função.
- `expected_balls`: Um objeto indicando o grupo exato de bolas que se tentará retirar do chapéu para o experimento. Por exemplo, para determinar a probabilidade de retirar 2 bolas azuis e 1 bola vermelha do chapéu, defina `expected_balls` como `{"blue":2, "red":1}`.
- `num_balls_drawn`: O número de bolas a serem retiradas do chapéu em cada experimento.
- `num_experiments`: O número de experimentos a serem realizados. Quanto mais experimentos realizados, mais precisa será a probabilidade aproximada.

A função `experiment` deve retornar uma probabilidade.

Por exemplo, se você quer determinar a probabilidade de obter pelo menos duas bolas vermelhas e uma bola verde ao retirar cinco bolas de um chapéu contendo seis bolas pretas, quatro vermelhas e três verdes. Para fazer isso, você realiza `N` experimentos, conta quantas vezes `M` você obtém pelo menos duas bolas vermelhas e uma bola verde e estima a probabilidade como `M/N`. Cada experimento consiste em começar com um chapéu contendo as bolas especificadas, retirar várias bolas e verificar se retirou as bolas que estava tentando retirar.

Veja como você chamaria a função `experiment` com base no exemplo acima de 2.000 experimentos:

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

Como isto é baseado em sorteios aleatórios, a probabilidade será ligeiramente diferente cada vez que o código for executado.

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

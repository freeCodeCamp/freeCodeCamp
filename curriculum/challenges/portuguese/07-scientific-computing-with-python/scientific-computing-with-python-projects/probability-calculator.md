---
id: 5e44414f903586ffb414c950
title: Calculadora de probabilidade
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


# --instructions--

Suponha que haja um chapéu contendo 5 bolas azuis, 4 bolas vermelhas e 2 bolas verdes. Qual é a probabilidade de um sorteio aleatório de 4 bolas conter pelo menos 1 bola vermelha e 2 bolas verdes? Embora seja possível calcular a probabilidade usando matemática avançada, uma maneira mais fácil é escrever um programa para realizar um grande número de experimentos para estimar uma probabilidade aproximada.

Para este projeto, escreva um programa para determinar a probabilidade aproximada de retirar certas bolas aleatoriamente de um chapéu.

Primeiro, crie uma classe `Hat` em `prob_calculator.py`. A classe deve ter um número variável de argumentos que especificam o número de bolas de cada cor que estão no chapéu. Por exemplo, um objeto da classe poderia ser criado de qualquer uma dessas maneiras:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Um chapéu será sempre criado com pelo menos uma bola. Os argumentos passados para o objeto de chapéu após a criação devem ser convertidos em uma variável de instância `contents`. `contents` deve ser uma lista de strings contendo um item para cada bola no chapéu. Cada item da lista deve ser um nome de cor que representa uma única bola dessa cor. Por exemplo, se sua instância de Hat for `{"red": 2, "blue": 1}`, `contents` deve ser `["red", "red", "blue"]`.

A classe `Hat` deve ter um método `draw` que aceita um argumento indicando o número de bolas a serem retiradas do chapéu. Este método deve remover bolas aleatoriamente de `contents` e retornar essas bolas como uma lista de strings. As bolas não devem voltar ao chapéu durante a retirada, à semelhança de uma experiência sem substituição. Se o número de bolas a serem retiradas exceder a quantidade disponível, retorne todas as bolas.

Em seguida, crie uma função`experiment`em `prob_calculator.py` (não dentro da classe `Hat`). Esta função deve aceitar os seguintes argumentos:

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

Como isto é baseado em sorteios aleatórios, a probabilidade será ligeiramente diferente cada vez que o código for executado.

*Dica: Considere usar os módulos que já estão importados na parte superior de `prob_calculator.py`. Não inicialize uma seed aleatória dentro de `prob_calculator.py`.*

## Desenvolvimento

Escreva seu código em `prob_calculator.py`. Para o desenvolvimento, você pode usar `main.py` para testar seu código. Clique no botão "Run" e `main.py` será executado.

O boilerplate inclui declarações de `import` para os módulos `copy` e `random`. Considere usá-los no seu projeto.

## Testes

Os testes unitários para este projeto estão em `test_module.py`. Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run".

## Envio

Copie o URL do seu projeto e envie-o para o freeCodeCamp.

# --hints--

Ele deve calcular as probabilidades corretamente e passar em todos os testes.

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

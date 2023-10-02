---
id: 5e444147903586ffb414c94f
title: Calculadora de área de polígono
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Você <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com nosso código inicial do Replit</a>.

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.


# --instructions--

Neste projeto, você usará programação orientada a objetos para criar a classe Rectangle, para um retângulo, e a classe Square, para um quadrado. A classe Square deve ser uma subclasse da classe Rectangle e herdar métodos e atributos.

## Classe do retângulo

Quando um objeto de retângulo é criado, ele deve ser inicializado com atributos `width` (largura) e `height` (altura). A classe também deve conter os seguintes métodos:

- `set_width`
- `set_height`
- `get_area`: retorna a área (`width * height`)
- `get_perimeter`: retorna o perímetro (`2 * width + 2 * height`)
- `get_diagonal`: retorna a diagonal (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: retorna uma string que representa a forma usando as linhas de "\*". O número de linhas deve ser igual à altura e o número de "\*" em cada linha deve ser igual à largura. Deve haver uma nova linha (`\n`) no final de cada linha. Se a largura ou altura for maior do que 50, é preciso retornar a string: "Too big for picture." (Muito grande para a imagem).
- `get_amount_inside`: Pega outra forma (quadrado ou retângulo) como um argumento. Retorna o número de vezes que a forma passada como argumento poderia caber dentro da forma (sem rotações). Por exemplo, um retângulo com uma largura de 4 e uma altura de 8 poderia caber em dois quadrados com lados de 4.

Além disso, se uma instância de um retângulo for representada como uma string, ela deve ter a seguinte aparência: `Rectangle(width=5, height=10)`

## Classe do quadrado

A classe Square (Quadrado) deve ser uma subclasse de Rectangle (Retângulo). Quando um objeto Square é criado, um único comprimento lateral é passado. O método `__init__` deve armazenar o comprimento do lado nos atributos `width` e `height` da classe Rectangle.

A classe Square deve ser capaz de acessar os métodos da classe Rectangle, mas também deve conter um método `set_side`. Se uma instância de Square for representada como uma string, ela deve ter a seguinte aparência: `Square(side=9)`

Além disso, os métodos `set_width` e `set_height` na classe Square devem definir a largura e a altura.

## Exemplo de uso

```py
rect = shape_calculator.Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = shape_calculator.Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))
```

Esse código deve retornar:

```bash
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8
```

Os testes unitários para este projeto estão em `test_module.py`.

## Desenvolvimento

Escreva seu código em `shape_calculator.py`. Para o desenvolvimento, você pode usar `main.py` para testar sua função `shape_calculator()`. Clique no botão "Run" e `main.py` será executado.

## Testes

Importamos os testes de `test_module.py` em `main.py` para a sua conveniência. Os testes serão executados automaticamente sempre que você clicar no botão "Run".

## Envio

Copie o URL do seu projeto e envie-o para o freeCodeCamp.

# --hints--

Ele deve criar uma classe Rectangle e uma classe Square e passar em todos os testes.

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

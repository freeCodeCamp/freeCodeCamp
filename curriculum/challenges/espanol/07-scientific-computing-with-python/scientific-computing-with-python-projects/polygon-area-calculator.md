---
id: 5e444147903586ffb414c94f
title: Calculador de área de polígonos
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

En este proyecto usarás programación orientada a objetos para crear una clase Rectangle y una clase Square. La clase Square debe ser una subclase de Rectangle y heredar métodos y atributos.

## Clase Rectángulo

Cuando se crea un objeto Rectangle, debe ser inicializado con los atributos `width` y `height`. La clase debe contener también los siguientes métodos:

- `set_width`
- `set_height`
- `get_area`: Returns area (`width * height`)
- `get_perimeter`: Returns perimeter (`2 * width + 2 * height`)
- `get_diagonal`: Returns diagonal (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: Returns a string that represents the shape using lines of "\*". The number of lines should be equal to the height and the number of "\*" in each line should be equal to the width. There should be a new line (`\n`) at the end of each line. If the width or height is larger than 50, this should return the string: "Too big for picture.".
- `get_amount_inside`: Takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.

Además, si una instancia de un Rectángulo se representa como una cadena, debería verse como: `Rectangle(width=5, height=10)`

## Clase Square

La clase Square debería ser una subclase de Rectangle. Cuando se crea un objeto de Square, se pasa una longitud de un solo lado. El método `__init__` debería almacenar la longitud lateral en ambos atributos `width` y `height` de la clase Rectangle.

La clase Square debería ser capaz de acceder a los métodos de la clase Rectangle, pero también debería contener un método `set_side`. Si una instancia de un Square se representa como una cadena, debería verse como: `Square(side=9)`

Además, los métodos `set_width` y `set_height` en la clase Square deben establecer tanto el ancho como la altura.

## Ejemplo de uso

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

Ese código debería retornar:

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

Las pruebas unitarias para este proyecto están en `test_module.py`.

## Desarrollo

Escribe tu código en `shape_calculator.py`. Para el desarrollo, puedes usar `main.py` para probar tu función `shape_calculator()`. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Importamos las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run".

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

# --hints--

Debería crear una clase Rectangle y una clase Square y pasar todas las pruebas.

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

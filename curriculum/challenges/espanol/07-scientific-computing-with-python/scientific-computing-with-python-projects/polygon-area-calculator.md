---
id: 5e444147903586ffb414c94f
title: Calculador de área de polígonos
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Estarás [trabajando en este proyecto con nuestro código inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator).

# --instructions--

En este proyecto usarás programación orientada a objetos para crear una clase Rectangle y una clase Square. La clase Square debe ser una subclase de Rectangle y heredar métodos y atributos.

## Clase Rectángulo

Cuando se crea un objeto Rectangle, debe ser inicializado con los atributos `width` y `height`. La clase debe contener también los siguientes métodos:

- `set_width`
- `set_height`
- `get_area`: Retorna area (`width * height`)
- `get_perimeter`: Retorna el perímetro (`2 * width + 2 * height`)
- `get_diagonal`: Retorna diagonal (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: Retorna una cadena que representa la figura usando líneas de "\*". El número de líneas deberá ser igual a la altura y el número de "\*" en cada línea deberá ser igual al ancho. Debería haber una nueva línea (`\n`) al final de cada línea. Si el ancho o el alto es mayor que 50, esto debería devolver la cadena: "Demasiado grande para la imagen.".
- `get_amount_inside`: Toma otra forma (cuadrado o rectángulo) como un argumento. Devuelve el número de veces que la figura pasada podría caber dentro de la figura (sin rotaciones). Por ejemplo, un rectángulo con un ancho de 4 y un alto de 8 podría caber en dos cuadrados con lados de 4.

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

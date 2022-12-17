---
id: 5e444147903586ffb414c94f
title: Polygon-Flächenrechner
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

In diesem Projekt wirst du mit Hilfe der objektorientierten Programmierung eine Rectangle-Klasse und eine Square-Klasse erstellen. Die Square-Klasse sollte eine Unterklasse von Rechtecke sein und Methoden und Attribute erben.

## Rechteck-Klasse

Es sollte mit den Attributen `width` und `height` initialisiert werden, wenn ein Rechteck-Objekt erstellt wird. Die Klasse sollte ebenfalls folgende Methoden enthalten:

- `set_width`
- `set_height`
- `get_area`: Returns area (`width * height`)
- `get_perimeter`: Returns perimeter (`2 * width + 2 * height`)
- `get_diagonal`: Returns diagonal (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: Returns a string that represents the shape using lines of "\*". The number of lines should be equal to the height and the number of "\*" in each line should be equal to the width. There should be a new line (`\n`) at the end of each line. If the width or height is larger than 50, this should return the string: "Too big for picture.".
- `get_amount_inside`: Takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.

Er sollte außerdem, wenn eine Instanz eines Rechtecks als String dargestellt wird, wie folgt aussehen: `Rectangle(width=5, height=10)`

## Quadrat-Klasse

Die Quadrat-Klasse sollte eine Unterklasse von Rechtecke sein. Bei der Erstellung eines Quadrat-Objekts wird eine einzelne Seitenlänge angegeben. Die `__init__`-Methode sollte die Seitenlänge in den beiden Attributen `width` und `height` der Rechteck-Klasse speichern.

Die Quadrat-Klasse sollte auf die Methoden der Rechteck-Klasse zugreifen können, aber auch eine `set_side`-Methode enthalten. Es sollte wie folgt aussehen, wenn eine Instanz eines Quadrats als String dargestellt wird: `Square(side=9)`

Außerdem sollten die Methoden `set_width` und `set_height` der Quadrat-Klasse sowohl die Breite als auch die Höhe festlegen.

## Beispiel für die Verwendung

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

Dieser Code sollte zurückgeben:

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

Die Unit-Tests für dieses Projekt befinden sich in `test_module.py`.

## Entwicklung

Schreibe deinen Code in `shape_calculator.py`. Für die Entwicklung kannst du `main.py` verwenden, um deine `shape_calculator()`-Funktion zu testen. Klicke aus den "Run"- Button und `main.py` wird ausgeführt.

## Prüfung

Wir haben die Tests von `test_module.py` in `main.py` importiert, um dir die Arbeit zu erleichtern. Die Tests werden automatisch ausgeführt, sobald du auf den "Run" - Button klickst.

## Absenden

Kopiere die URL deines Projekts und sende sie an freeCodeCamp.

# --hints--

Es sollte eine Rechteck-Klasse und eine Quadrat-Klasse erstellen und alle Tests bestehen.

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

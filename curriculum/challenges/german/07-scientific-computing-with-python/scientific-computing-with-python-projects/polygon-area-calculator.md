---
id: 5e444147903586ffb414c94f
title: Polygon-Flächenrechner
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

-   Beginne, indem du das Projekt in Replit importierst.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` aus und klicke auf die `Done`-Schaltfläche.


# --instructions--

In diesem Projekt wirst du mit Hilfe der objektorientierten Programmierung eine Rectangle-Klasse und eine Square-Klasse erstellen. Die Square-Klasse sollte eine Unterklasse von Rechtecke sein und Methoden und Attribute erben.

## Rechteck-Klasse

Es sollte mit den Attributen `width` und `height` initialisiert werden, wenn ein Rechteck-Objekt erstellt wird. Die Klasse sollte ebenfalls folgende Methoden enthalten:

- `set_width`
- `set_height`
- `get_area`: Gibt den Bereich (`width * height`) zurück
- `get_perimeter`: Gibt den Umfang (`2 * width + 2 * height`) zurück
- `get_diagonal`: Gibt die Diagonale (`(width ** 2 + height ** 2) ** .5`) zurück
- `get_picture`: Gibt eine Zeichenfolge zurück, die die Form mit Hilfe von Zeilen aus "\*" darstellt. Die Anzahl der Zeilen sollte der Höhe und die Anzahl der "\*" in jeder Zeile sollte der Breite entsprechen. Am Ende jeder Zeile sollte eine neue Zeile (`\n`) stehen. Wenn die Breite oder Höhe größer als 50 ist, sollte dies die Zeichenfolge zurückgeben: "Zu groß für das Bild.".
- `get_amount_inside`: Nimmt eine andere Form (Quadrat oder Rechteck) als Argument. Gibt die Anzahl der Male zurück, die die übergebene Form in die Form passen könnte (ohne Drehungen). Zum Beispiel könnte ein Rechteck mit einer Breite von 4 und einer Höhe von 8 in zwei Quadrate mit 4 Seiten passen.

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

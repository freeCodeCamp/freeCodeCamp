---
id: 5e44414f903586ffb414c950
title: Wahrscheinlichkeitsrechner
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

-   Beginne mit dem Importieren des Projekts in Replit.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.


# --instructions--

Angenommen, es gibt einen Hut mit 5 blauen Kugeln, 4 roten Kugeln und 2 grünen Kugeln. Was ist die Wahrscheinlichkeit, dass bei einer zufälligen Ziehung von 4 Kugeln mindestens 1 rote Kugel und 2 grüne Kugeln gezogen werden? Es wäre zwar möglich, die Wahrscheinlichkeit mit Hilfe fortgeschrittener Mathematik zu berechnen, aber einfacher ist es, ein Programm zu schreiben, das eine große Anzahl von Experimenten durchführt, um eine ungefähre Wahrscheinlichkeit zu schätzen.

Für dieses Projekt wirst du ein Programm schreiben, dass die ungefähre Wahrscheinlichkeit bestimmen soll, bestimmte Kugeln aus einem Hut zu ziehen.

Zuerst erstellen wir eine `Hat`-Klasse in `prob_calculator.py`. Die Klasse sollte eine variable Anzahl von Argumenten verwenden, die die Anzahl der Kugeln jeder Farbe angibt, die im Hut enthalten sind. Zum Beispiel könnte ein Klassenobjekt auf diese Weise erstellt werden:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Ein Hut wird immer mit mindestens einer Kugel erstellt. Die Argumente, die beim Erstellen an das Hut-Objekt übergeben werden, sollten in eine `contents` Instanzvariable konvertiert werden. `contents` sollte eine Liste von Strings sein, die jeweils ein Element für jede Kugel im Hut enthalten. Jedes Element in der Liste sollte ein Farbname sein, der eine einzelne Kugel dieser Farbe darstellt. Zum Beispiel, wenn dein Hut `{"red": 2, "blue": 1}` enthält, sollte `contents` `["red", "red", "blue"]` beinhalten.

Die `Hat`-Klasse sollte eine `draw`-Methode haben, die ein Argument akzeptiert, dass die Anzahl der Kugeln angibt, die aus dem Hut gezogen werden. Diese Methode sollte Kugeln zufällig aus `contents` entfernen und diese Kugeln als eine Liste von String zurückgeben. Die Kugeln sollten während des Ziehens nicht wieder in den Hut zurückkehren, wie ein Urnen-Experiment ohne Zurücklegen. Wenn die Anzahl der zu ziehenden Kugeln die verfügbare Menge übersteigt, gib alle Kugeln zurück.

Erstelle nun eine `experiment`-Funktion in `prob_calculator.py` (nicht innerhalb der `Hat`-Klasse). Diese Funktion sollte die folgenden Argumente akzeptieren:

- `hat`: Ein Hut-Objekt, das Bälle enthält, das innerhalb der Funktion kopiert werden soll.
- `expected_balls`: Ein Objekt, das die genaue Gruppe von Bällen angibt, die für das Experiment aus dem Hut gezogen werden sollen. For example, to determine the probability of drawing 2 blue balls and 1 red ball from the hat, set `expected_balls` to `{"blue":2, "red":1}`.
- `num_balls_drawn`: Die Anzahl der Bälle, die in jedem Experiment aus dem Hut gezogen werden sollen.
- `num_experiments`: Die Anzahl der durchzuführenden Experimente. (The more experiments performed, the more accurate the approximate probability will be.)

Die `experiment`-Funktion sollte eine Wahrscheinlichkeit zurückgeben.

Wenn du zum Beispiel die Wahrscheinlichkeit bestimmen willst, dass du mindestens zwei rote Kugeln und eine grüne Kugel bekommst, wenn du fünf Kugeln aus einem Hut ziehst, der sechs schwarze, vier rote und drei grüne enthält. Um dies zu tun, wirst du `N` Experimente durchführen, zähle wie viele Male `M` du erhältst. Mindestens zwei rote Bälle und einen grünen Ball und bestimme die Wahrscheinkeit mit `M/N`. Jedes Experiment besteht darin, dass man mit einem Hut beginnt, der die angegebenen Kugeln enthält, mehrere Kugeln zieht und überprüft, ob man die Kugeln, die man zu ziehen versucht hat, auch bekommen hat.

So würdest du die `experiment`-Funktion, basierend auf dem obigen Beispiel von 2000 Experimenten durchführen:

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

Da dies auf zufälligen Ziehungen basiert, wird die Wahrscheinlichkeit jedes Mal, wenn der Code ausgeführt wird, etwas anders sein.

*Hinweis: Ziehe in Erwägung, die Module, die bereits in `prob_calculator.py` importiert wurden, zu benutzen. Initialisiere keinen zufälligen Seed innerhalb `prob_calculator.py`.*

## Entwicklung

Schreibe deinen Code in `prob_calculator.py`. Für die Entwicklung kannst du `main.py` verwenden, um deinen Code zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

Der Boilerplate-Code enthält `import` Anweisungen für die `copy` und `random` Module. Überlege, ob du diese in deinem Projekt verwenden möchtest.

## Testen

Die Unit-Tests für dieses Projekt sind in `test_module.py`. Wir haben die Tests von `test_module.py` zu `main.py` bereits für dich importiert. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst.

## Absenden

Kopiere die URL deines Projekts und sende sie an freeCodeCamp.

# --hints--

Es sollte die Wahrscheinlichkeiten korrekt berechnen und alle Tests bestehen.

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

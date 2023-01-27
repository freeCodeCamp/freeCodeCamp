---
id: 5e44412c903586ffb414c94c
title: Arithmetischer Formatierer
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

-   Beginne mit dem Importieren des Projekts in Replit.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.


# --instructions--

Schüler der Grundschule stellen oft arithmetische Probleme vertikal auf, um sie leichter lösen zu können. Zum Beispiel wird "235 + 52" zu:

```py
  235
+  52
-----
```

Erstelle eine Funktion, die eine Liste von Strings mit artihmetischen Problem empfängt und die angeordneten Probleme vertikal und nebeneinander zurückgibt. Optional sollte die Funktion ein zweites Argument verwenden. Wenn das zweite Argument auf `True` gesetzt ist, sollten die Antworten gezeigt werden.

## Beispiel

Function-Call:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Output:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Function-Call:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Output:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Regeln

Die Funktion gibt die korrekte Konvertierung zurück, wenn die übergebenen Probleme richtig formatiert sind. Andernfalls **gibt** er einen **String** zurück, der einen für den Benutzer aussagekräftigen Fehler beschreibt.


- Situationen, die einen Fehler zurückgeben:
  - Wenn **too many problems** an die Funktion übermittelt werden. Das Limit liegt bei **fünf**, alles weitere wird `Error: Too many problems.` zurückgeben
  - Die entsprechenden Operatoren, die die Funktion akzeptieren wird, sind **Addition** und **Subtraktion**. Multiplikation und Division geben einen Fehler zurück. Andere Operatoren, die nicht in diesem Punkt erwähnt werden, müssen nicht getestet werden. Der zurückgegebene Fehler lautet: `Error: Operator must be '+' or '-'.`
  - Jede Zahl (Operand) sollte nur Ziffern enthalten. Andernfalls wird die Funktion zurückgegeben: `Error: Numbers must only contain digits.`
  - Jeder Operand (d. h. die Zahl auf jeder Seite des Operators) ist maximal vier Stellen breit. Andernfalls lautet die zurückgegebene Fehlerzeichenfolge: `Error: Numbers cannot be more than four digits.`
- Wenn der Nutzer das richtige Format der Probleme angegeben hat, wird die von dir zurückgegebene Konvertierung diesen Regeln folgen:
  - Zwischen dem Operator und dem längsten der beiden Operanden sollte ein einzelnes Leerzeichen stehen, der Operator steht in derselben Zeile wie der zweite Operand, beide Operanden stehen in derselben Reihenfolge wie angegeben (der erste ist der oberste, der zweite der unterste).
  - Zahlen sollten rechts-ausgerichtet sein.
  - Zwischen den einzelnen Aufgaben sollten vier Leerzeichen stehen.
  - Am Ende jeder Aufgabe sollten Bindestriche stehen. Die Bindestriche sollten sich über die gesamte Länge der einzelnen Aufgaben erstrecken. (Das obige Beispiel zeigt, wie dies aussehen sollte.)

## Entwicklung

Schreibe deinen Code in `arithmetic_arranger.py`. Für die Entwicklung kannst du `main.py` verwenden, um die `arithmetic_arranger()` Funktion zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

## Testen

Die Unit-Tests für dieses Projekt sind in `test_module.py`. Wir haben die Tests von `test_module.py` zu `main.py` bereits für dich importiert. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst. Alternativ können die Tests auch ausgeführt werden, indem du `pytest` in die Konsole eingibst.

## Absenden

Kopiere die URL deines Projekts und sende sie an freeCodeCamp.

# --hints--

Es sollte ein arithmetisches Problem korrekt formatieren und alle Tests bestehen.

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

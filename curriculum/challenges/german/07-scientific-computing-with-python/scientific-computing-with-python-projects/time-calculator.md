---
id: 5e444136903586ffb414c94d
title: Zeitrechner
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">an diesem Projekt mit unserem Replit-Startercode arbeiten</a>.

-   Beginne, indem du das Projekt in Replit importierst.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.

# --instructions--

Erstelle eine Funktion namens `add_time`, die zwei notwendige Parameter und einen optionalen Parameter enthält:

- eine Startzeit im 12-Stunden-Format (endend mit AM oder PM)
- eine Zeitdauer, die die Anzahl der Stunden und Minuten angibt
- (optional) ein Anfangstag der Woche, Groß- und Kleinschreibung wird nicht berücksichtigt

Die Funktion sollte die Zeitdauer zur Startzeit hinzufügen und das Ergebnis zurückgeben.

Wenn das Ergebnis am nächsten Tag ist, sollte es `(next day)` nach der Zeit anzeigen. Wenn das Ergebnis mehr als einen Tag später ist, sollte es `(n days later)` hinter der Zeit anzeigen, wobei "n" die Anzahl der Tage ist.

Wenn die Funktion den optionalen Starttag des Wochen-Parameters erhalten hat, dann sollte die Ausgabe den Wochentag des Ergebnisses anzeigen. Der Wochentag in der Ausgabe sollte nach der Zeit und vor der Anzahl der Tage später erscheinen.

Unten findest du einige Beispiele für verschiedene Fälle, die deine Funktion bearbeiten soll. Achte auf den Abstand und auf die Satzzeichen der Ergebnisse.

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

Importiere keine Python-Bibliotheken. Nimm an, dass die Startzeiten gültige Zeiten sind. Die Minuten in der Zeitdauer werden als ganze Zahl, kleiner als 60 angezeigt. Die Stunde kann aber jede ganze Zahl sein.

## Entwicklung

Schreibe deinen Code in `time_calculator.py`. Für die Entwicklung kannst du `main.py` verwenden, um die `time_calculator()` Funktion zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

## Testen

Die Unit-Tests für dieses Projekt sind in `test_module.py`. Wir haben die Tests von `test_module.py` zu `main.py` bereits für dich importiert. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst.

## Absenden

Kopiere die URL deines Projekts und sende sie an freeCodeCamp.

# --hints--

Es sollte die Zeiten korrekt hinzufügen und alle Tests bestehen.

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

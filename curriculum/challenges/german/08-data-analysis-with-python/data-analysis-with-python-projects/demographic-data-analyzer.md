---
id: 5e46f7e5ac417301a38fb929
title: Demografischer Datenanalysator
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">an diesem Projekt mit unserem Replit-Startercode arbeiten</a>.

-   Beginne, indem du das Projekt in Replit importierst.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.


Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind erstmal einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Videokurs: Python für jedermann</a> (14 Stunden)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Wie man Daten mit Python-Pandas analysiert </a> (10 Stunden)

# --instructions--

Bei dieser Aufgabe musst du demographische Daten mit Hilfe von Pandas analysieren. Du erhälst einen Datensatz von demographischen Daten, die aus der Datenbank der Volkszählung 1994 gewonnen wurden. Hier ist ein Beispiel dafür, wie die Daten aussehen:

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

Du musst Pandas verwenden, um die folgenden Fragen zu beantworten:

- Wie viele Personen jeder ethnischen Gruppe sind in diesem Datensatz vertreten? Dies sollte eine Pandas-Reihe mit den Namen der verschiedenen Ethnien als Indexbezeichnungen sein. (`race` Spalte)
- Wie hoch ist das Durchschnittsalter der Männer?
- Wie hoch ist der Prozentsatz von Menschen, die einen Bachelorabschluss haben?
- Wie hoch ist der Prozentsatz der Menschen mit einer weiterführenden Bildung (`Bachelors`, `Masters`, oder `Doctorate`), die mehr als 50K verdienen?
- Wie hoch ist der Prozentsatz der Menschen ohne weiterführende Bildung, die mehr als 50K verdienen?
- Wie hoch ist die Mindestanzahl an Arbeitsstunden, die eine Person pro Woche arbeitet?
- Wie hoch ist der Prozentsatz von Menschen, die die Mindestarbeitszeit arbeiten und mehr als 50K verdienen?
- Welches Land hat den höchsten Prozentsatz an Menschen, die >50K verdienen und wie viel Prozent sind es?
- Ermittle den bekanntesten Beruf für diejenigen, die in Indien >50K verdienen.

Benutze den Starter-Code in der Datei `demographic_data_analyzer`. Aktualisiere den Code, damit alle Variablen, die auf "Keine" gesetzt sind, auf die entsprechende Berechnung oder den entsprechenden Code gesetzt werden. Runde alle Dezimalstellen auf die nächste Zehnerstelle.

Unit-Tests werden für dich unter `test_module.py` geschrieben.

## Entwicklung

Für die Entwicklung kannst du `main.py` verwenden, um deinen Code zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

## Testen

Wir haben die Tests von `test_module.py` zu `main.py` bereits für dich importiert. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst.

## Absenden

Kopiere die URL deines Projekts und übermittle sie an freeCodeCamp.

## Datensatzquelle

Dua, D. and Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repository</a>. Irvine, CA: University of California, School of Information and Computer Science.

# --hints--

Es sollte alle Python-Tests bestehen.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

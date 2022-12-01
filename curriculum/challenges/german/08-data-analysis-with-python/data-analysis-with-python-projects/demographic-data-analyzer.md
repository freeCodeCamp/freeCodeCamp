---
id: 5e46f7e5ac417301a38fb929
title: Demografischer Datenanalysator
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">an diesem Projekt mit unserem Replit-Startercode arbeiten</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind erstmal einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

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

- How many people of each race are represented in this dataset? This should be a Pandas series with race names as the index labels. (`race` column)
- What is the average age of men?
- What is the percentage of people who have a Bachelor's degree?
- What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
- What percentage of people without advanced education make more than 50K?
- What is the minimum number of hours a person works per week?
- What percentage of the people who work the minimum number of hours per week have a salary of more than 50K?
- What country has the highest percentage of people that earn >50K and what is that percentage?
- Identify the most popular occupation for those who earn >50K in India.

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

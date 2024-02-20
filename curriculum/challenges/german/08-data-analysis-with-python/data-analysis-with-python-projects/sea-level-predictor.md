---
id: 5e4f5c4b570f7e3a4949899f
title: Meeresspiegelvorhersage
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-sea-level-predictor/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Wir sind noch dabei, den interaktiven Teil des Python-Lehrplans zu entwickeln. Zurzeit kannst du dir lediglich einige Videos auf unserem YouTube-Channel für freeCodeCamp.org ansehen – diese bringen dir alles bei, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Wie man Daten mit Python-Pandas analysiert </a> (10 Stunden)

# --instructions--

Du analysierst einen Datensatz über die durchschnittliche Veränderung des globalen Meeresspiegels seit 1880. Diese Daten benutzt du, um die Veränderungen des Meeresspiegels bis zum Jahr 2050 vorherzusagen.

Benutze die Daten, um folgende Aufgaben abzuschließen:

- Verwende Pandas, um die Daten aus `epa-sea-level.csv` zu importieren.
- Use matplotlib to create a scatter plot using the `Year` column as the x-axis and the `CSIRO Adjusted Sea Level` column as the y-axis.
- Verwende die `linregress` Funktion aus `scipy.stats`, um die Steigerung und den y-Achsenabschnitt der Mittelwertsgerade zu erhalten. Zeichne die Linie der besten Anpassung über das Streudiagramm. Lass die Linie durch das Jahr 2050 verlaufen, um den Meeresspielanstieg im Jahr 2050 vorherzusagen.
- Zeichne eine neue Linie der besten Passform nur mit den Daten vom Jahr 2000 bis zum jüngsten Jahr im Datensatz. Lass die Linie auch durch das Jahr 2050 laufen, um den Anstieg des Meeresspiegels im Jahr 2050 vorherzusagen, wenn die Anstiegsrate weiterhin so verläuft wie seit dem Jahr 2000.
- Die x-Beschriftung sollte `Year`, die y-Beschriftung sollte `Sea Level (inches)` und der Titel sollte `Rise in Sea Level` lauten.

Die Boilerplate enthält auch Befehle zum Speichern und Zurückgeben des Bildes.

## Entwicklung

Write your code in `sea_level_predictor.py`. For development, you can use `main.py` to test your code.

## Prüfung

The unit tests for this project are in `test_module.py`. Wir haben die Tests von `test_module.py` nach `main.py` importiert, um Ihnen die Arbeit zu erleichtern.

## Submitting

Kopiere die URL deines Projekts und sende es an freeCodeCamp.

## Datenquelle

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">Absolute globale durchschnittliche Meeresspiegelveränderung</a>, 1880-2014 von der US-Umweltschutzbehörde unter Verwendung von Daten von CSIRO, 2015; NOAA, 2015.


# --hints--

Er sollte alle Python-Tests bestehen.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

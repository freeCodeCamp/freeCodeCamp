---
id: 5e46f802ac417301a38fb92b
title: Page View Time Series Visualizer
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode</a> an diesem Projekt arbeiten.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.


Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind erstmal einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Videokurs: Python für jedermann</a> (14 Stunden)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Für dieses Projekt visualisierst du die Daten der Zeitserie mit Hilfe eines Liniendiagramms, Balkendiagramms und eines Boxplots. Du wirst Pandas, Matplotlib und Seaborn verwenden, um einen Datensatz zu visualisieren, der die Anzahl der täglichen FreeCodeCamp Seitenaufrufe vom 2016-05-09 bis 2019-12-03 enthält. Die Datenvisualisierungen wird dir helfen, die Muster bei Besuchen zu verstehen sowie das jährliche und monatliche Wachstum zu ermitteln.

Benutze die Daten, um die folgenden Aufgaben abzuschließen:

- Verwende Pandas, um die Daten aus "fcc-forum-pageviews.csv" zu importieren. Setze den Index auf die Spalte `date`.
- Bereinige die Daten, indem du die Tage herausfilterst, an denen die Seitenaufrufe in den oberen 2,5 % des Datensatzes oder den unteren 2,5 % des Datensatzes lagen.
- Erstelle eine `draw_line_plot` Funktion, die Matplotlib verwendet, um ein Liniendiagramm ähnlich wie in "examples/Figure_1.png" zu zeichnen. Der Titel sollte `Daily freeCodeCamp Forum Page Views 5/2016-12/2019` sein. Die Beschriftung der x-Achse sollte `Date` und die Beschriftung auf der y-Achse sollte `Page Views` lauten.
- Erstelle eine `draw_bar_plot` Funktion, die ein Balkendiagramm ähnlich wie in "examples/Figure_2.png" zeichnet. Es sollte die durchschnittlichen täglichen Seitenaufrufe für jeden Monat, gruppiert nach Jahr, anzeigen. Die Legende sollte Monatsbezeichnungen zeigen und den Titel `Months` haben. Im Diagramm sollte die Beschriftung auf der x-Achse `Years` und die Beschriftung auf der y-Achse `Average Page Views` sein.
- Erstelle eine `draw_box_plot`-Funktion, die Seaborn verwendet, um zwei angrenzende Boxplots, ähnlich wie "examples/Figure_3.png" zu zeichnen. Diese Boxplots sollen zeigen, wie die Werte innerhalb eines bestimmten Jahres oder Monats verteilt sind und wie sie sich im Zeitvergleich darstellen. Der Titel des ersten Diagramms sollte `Year-wise Box Plot (Trend)` und der des zweiten Diagramms sollte `Month-wise Box Plot (Seasonality)` lauten. Vergewissere dich, dass die Monatsbeschriftungen unten mit `Jan` beginnen und die x- und y-Achse korrekt beschriftet sind. Die Boilerplate enthält Befehle zur Vorbereitung der Daten.

Bitte verwende für jedes Diagramm eine Kopie des Dataframes. Unit-Tests werden für dich unter `test_module.py` geschrieben.

Der Boilerplate-Code enthält auch Befehle zum Speichern und Übermitteln des Bildes.

## Entwicklung

Für die Entwicklung kannst du `main.py` verwenden, um deinen Code zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

## Testen

Wir haben die Tests von `test_module.py` zu `main.py` bereits für dich importiert. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst.

## Absenden

Kopiere die URL deines Projekts und übermittle sie an freeCodeCamp.

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

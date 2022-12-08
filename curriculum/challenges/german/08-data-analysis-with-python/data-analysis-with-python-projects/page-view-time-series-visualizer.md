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
-   Select `Use run command` and click the `Done` button.


Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind erstmal einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Für dieses Projekt visualisierst du die Daten der Zeitserie mit Hilfe eines Liniendiagramms, Balkendiagramms und eines Boxplots. Du wirst Pandas, Matplotlib und Seaborn verwenden, um einen Datensatz zu visualisieren, der die Anzahl der täglichen FreeCodeCamp Seitenaufrufe vom 2016-05-09 bis 2019-12-03 enthält. Die Datenvisualisierungen wird dir helfen, die Muster bei Besuchen zu verstehen sowie das jährliche und monatliche Wachstum zu ermitteln.

Benutze die Daten, um die folgenden Aufgaben abzuschließen:

- Use Pandas to import the data from "fcc-forum-pageviews.csv". Set the index to the `date` column.
- Clean the data by filtering out days when the page views were in the top 2.5% of the dataset or bottom 2.5% of the dataset.
- Create a `draw_line_plot` function that uses Matplotlib to draw a line chart similar to "examples/Figure_1.png". The title should be `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`. The label on the x axis should be `Date` and the label on the y axis should be `Page Views`.
- Create a `draw_bar_plot` function that draws a bar chart similar to "examples/Figure_2.png". It should show average daily page views for each month grouped by year. The legend should show month labels and have a title of `Months`. On the chart, the label on the x axis should be `Years` and the label on the y axis should be `Average Page Views`.
- Create a `draw_box_plot` function that uses Seaborn to draw two adjacent box plots similar to "examples/Figure_3.png". These box plots should show how the values are distributed within a given year or month and how it compares over time. The title of the first chart should be `Year-wise Box Plot (Trend)` and the title of the second chart should be `Month-wise Box Plot (Seasonality)`. Make sure the month labels on bottom start at `Jan` and the x and y axis are labeled correctly. The boilerplate includes commands to prepare the data.

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

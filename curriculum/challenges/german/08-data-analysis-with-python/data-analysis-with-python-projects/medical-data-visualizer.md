---
id: 5e46f7f8ac417301a38fb92a
title: Medizinischer Datenvisualisierer
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-medical-data-visualizer/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind erstmal einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Wie man Daten mit Python-Pandas analysiert </a> (10 Stunden)

# --instructions--

In this project, you will visualize and make calculations from medical examination data using `matplotlib`, `seaborn`, and `pandas`. Die Datensatzwerte wurden bei medizinischen Untersuchungen gesammelt.

## Datenbeschreibung

Die Zeilen des Datensatzes repräsentieren Patienten und die Spalten stellen Informationen wie Körpermessungen, Ergebnisse verschiedener Bluttests und Lebensweisen dar. Du wirst den Datensatz verwenden, um die Beziehung zwischen Herzkrankheiten, Körpermessungen, Blutmarkern und Lebensweisen zu erforschen.

Dateiname: medical_examination.csv

|                 Merkmal                  |    Variablentyp     |   Variable    |                        Wert                         |
|:----------------------------------------:|:-------------------:|:-------------:|:---------------------------------------------------:|
|                  Alter                   |  Objective Feature  |     `age`     |                     int (Tage)                      |
|                  Größe                   |  Objective Feature  |   `height`    |                      int (cm)                       |
|                 Gewicht                  |  Objective Feature  |   `weight`    |                     float (kg)                      |
|                Geschlecht                |  Objective Feature  |   `gender`    |                   Kategorie-Code                    |
|          Systolischer Blutdruck          | Examination Feature |    `ap_hi`    |                         int                         |
|         Diastolischer Blutdruck          | Examination Feature |    `ap_lo`    |                         int                         |
|               Cholesterin                | Examination Feature | `cholesterol` | 1: normal, 2: höher als normal, 3: weit über normal |
|                 Glucose                  | Examination Feature |    `gluc`     | 1: normal, 2: höher als normal, 3: weit über normal |
|                 Rauchen                  | Subjective Feature  |    `smoke`    |                        binär                        |
|              Alkoholkonsum               | Subjective Feature  |    `alco`     |                        binär                        |
|          Körperliche Aktivität           | Subjective Feature  |   `active`    |                        binär                        |
| Leiden unter Herz-Kreislauf-Erkrankungen |    Zielvariable     |   `cardio`    |                        binär                        |

## Aufgaben

Create a chart similar to `examples/Figure_1.png`, where we show the counts of good and bad outcomes for the `cholesterol`, `gluc`, `alco`, `active`, and `smoke` variables for patients with `cardio=1` and `cardio=0` in different panels.

Verwende die Daten um die folgenden Aufgaben in `medical_data_visualizer.py` abzuschließen:

- Füge eine `overweight`-Spalte zu den Daten hinzu. Um festzustellen, ob eine Person übergewichtig ist, berechnet man zunächst ihren BMI, indem man ihr Gewicht in Kilogramm durch das Quadrat ihrer Körpergröße in Metern teilt. Wenn dieser Wert > 25 ist, dann ist die Person übergewichtig. Use the value `0` for NOT overweight and the value `1` for overweight.
- Normalize the data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is `1`, make the value `0`. If the value is more than `1`, make the value `1`.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using `seaborn`'s `catplot()`. The dataset should be split by `Cardio` so there is one chart for each `cardio` value. Das Diagramm sollte wie `examples/Figure_1.png` aussehen.
- Bereinige die Daten. Filtere die folgenden Patientensegmente heraus, die fehlerhafte Daten darstellen:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - die Größe liegt über dem 97,5. Perzentil
  - das Gewicht liegt unter dem 2,5. Perzentil
  - das Gewicht liegt über dem 97,5. Perzentil
- Erstelle eine Korrelationsmatrix unter Verwendung des Datensatzes. Plot the correlation matrix using `seaborn`'s `heatmap()`. Decke das obere Dreieck ab. Das Diagramm sollte wie folgt aussehen `examples/Figure_2.png`.

Immer wenn eine Variable `None` ist, musst du sicherstellen, dass es auf den korrekten Code gesetzt wird.

Unit tests are written for you under `test_module.py`.

## Instructions
By each number in the `medical_data_visualizer.py` file, add the code from the associated instruction number below.

1. Import the data from `medical_examination.csv` and assign it to the `df` variable
2. Create the `overweight` column in the `df` variable
3. Normalize data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is 1, set the value to `0`. If the value is more than `1`, set the value to `1`.
4. Draw the Categorical Plot in the `draw_cat_plot` function
5. Create a DataFrame for the cat plot using `pd.melt` with values from `cholesterol`, `gluc`, `smoke`, `alco`, `active`, and `overweight` in the `df_cat` variable.
6. Group and reformat the data in `df_cat` to split it by `cardio`. Show the counts of each feature. You will have to rename one of the columns for the `catplot` to work correctly.
7. Convert the data into `long` format and create a chart that shows the value counts of the categorical features using the following method provided by the seaborn library import : `sns.catplot()`
8. Get the figure for the output and store it in the `fig` variable
9. Do not modify the next two lines
10. Draw the Heat Map in the `draw_heat_map` function
11. Clean the data in the `df_heat` variable by filtering out the following patient segments that represent incorrect data:
    - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
    - height is more than the 97.5th percentile
    - weight is less than the 2.5th percentile
    - weight is more than the 97.5th percentile
12. Calculate the correlation matrix and store it in the `corr` variable
13. Generate a mask for the upper triangle and store it in the `mask` variable
14. Set up the `matplotlib` figure
15. Plot the correlation matrix using the method provided by the `seaborn` library import: `sns.heatmap()`
16. Do not modify the next two lines

## Entwicklung

Write your code in `medical_data_visualizer.py`. For development, you can use `main.py` to test your code.

## Testen

The unit tests for this project are in `test_module.py`. We imported the tests from `test_module.py` to `main.py` for your convenience.

## Absenden

Kopiere die URL deines Projekts und sende sie an freeCodeCamp.

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

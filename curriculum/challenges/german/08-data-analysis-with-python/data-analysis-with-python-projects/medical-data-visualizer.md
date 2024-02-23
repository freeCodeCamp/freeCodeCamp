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

In diesem Projekt wirst du mit Hilfe von matplotlib, seaborn und pandas Berechnungen aus medizinischen Untersuchungsdaten visualisieren und durchführen. Die Datensatzwerte wurden bei medizinischen Untersuchungen gesammelt.

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

Erstelle ein Diagramm, ähnlich wie `examples/Figure_1.png`, in dem wir die guten und schlechten Ergebnisse für `cholesterol`, `gluc`, `alco`, `active`, und `smoke`-Variablen der Patienten mit cardio=1 und cardio=0 in verschiedenen Panels anzeigen.

Verwende die Daten um die folgenden Aufgaben in `medical_data_visualizer.py` abzuschließen:

- Füge eine `overweight`-Spalte zu den Daten hinzu. Um festzustellen, ob eine Person übergewichtig ist, berechnet man zunächst ihren BMI, indem man ihr Gewicht in Kilogramm durch das Quadrat ihrer Körpergröße in Metern teilt. Wenn dieser Wert > 25 ist, dann ist die Person übergewichtig. Verwende den Wert 0 für NICHT übergewichtig und den Wert 1 für übergewichtig.
- Normalisiere die Daten, indem du 0 immer für gut und 1 immer für schlecht verwendest. Wenn der Wert von `cholesterol` oder `gluc` 1 ist, wird der Wert auf 0 gesetzt. Wenn der Wert größer als 1 ist, setze den Wert auf 1.
- Konvertiere die Daten in ein Langformat und erstelle ein Diagramm, das die Anzahl der Werte der kategorischen Merkmale mit seaborns `catplot()` darstellt. Der Datensatz sollte nach "Kardio" aufgeteilt werden, sodass es für jeden `cardio`-Wert ein Diagramm gibt. Das Diagramm sollte wie `examples/Figure_1.png` aussehen.
- Bereinige die Daten. Filtere die folgenden Patientensegmente heraus, die fehlerhafte Daten darstellen:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - die Größe liegt über dem 97,5. Perzentil
  - das Gewicht liegt unter dem 2,5. Perzentil
  - das Gewicht liegt über dem 97,5. Perzentil
- Erstelle eine Korrelationsmatrix unter Verwendung des Datensatzes. Zeichne die Korrelationsmatrix mit seaborn's `heatmap()`. Decke das obere Dreieck ab. Das Diagramm sollte wie folgt aussehen `examples/Figure_2.png`.

Immer wenn eine Variable `None` ist, musst du sicherstellen, dass es auf den korrekten Code gesetzt wird.

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

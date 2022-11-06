# Wie du bei Videoaufgaben helfen kannst

Videoaufgaben sind eine neue Art von Aufgaben im freeCodeCamp-Studienplan.

Eine Videoaufgabe ist ein kleiner Abschnitt eines Videokurses in voller Länge zu einem bestimmten Thema. Eine Videoaufgabenseite bettet ein YouTube-Video ein. Jede Aufgabenseite enthält eine Multiple-Choice-Frage zum Video. Der/die Nutzer/in muss die Frage richtig beantworten, bevor er/sie zur nächsten Videoaufgabe des Kurses übergehen kann.

Die Videoaufgabenseiten werden von Mitgliedern des freeCodeCamp-Teams erstellt. YouTube-Videos werden auch von Mitgliedern des freeCodeCamp-Teams hochgeladen. Viele der Videoaufgaben sind noch nicht mit Fragen verknüpft.

Du kannst helfen, indem du Multiple-Choice-Fragen zu den Videoabschnitten erstellst und die Fragen zu den Markdown-Dateien für die Videoaufgabe hinzufügst.

## Vorlage für Aufgaben

Unten siehst du eine Vorlage, wie die Markdown-Dateien für die Aufgaben aussehen.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>example code</div>
````

# --question--

Diese Felder werden derzeit für die Multiple-Choice-Aufgaben in Python verwendet.

## --text--

Der Fragetext gehört hierher.

## --answers--

Antwort 1

---

Antwort 2

---

Mehr Antworten

## --video-solution--

Die Anzahl der richtigen Antworten gehört hierher.
````

## Erstelle Fragen für Videoaufgaben

### Zugriff auf die Markdown-Dateien der Videoaufgaben

Du findest die Markdown-Dateien für die Videoaufgaben auf den folgenden Seiten im Studienplan:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Wähle eine Aufgaben-Markdown-Datei aus den obigen Optionen aus.

### Überfliege das Video, das mit der Aufgabe verbunden ist, und erstelle eine Multiple-Choice-Frage.

Finde zunächst die `videoId`.

Im folgenden Code aus der Kopfzeile einer Video-Challenge-Markdown-Datei lautet die `videoId` beispielsweise "nVAaxZ34khk". Auf GitHub sollten die Informationen in einem Tabellenformat dargestellt werden.

````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Als Nächstes rufst du das YouTube-Video mit dieser Video-ID auf. Die URL für das Video lautet dann:
https://www.youtube.com/watch?v=[videoId] (Ersetze `videoId` in der URL durch die ID des Videos - ohne eckige Klammern`.)

Im obigen Beispiel lautet die URL https://www.youtube.com/watch?v=nVAaxZ34khk

Überfliege das YouTube-Video mit dieser `videoId` und überlege dir eine Multiple-Choice-Frage, die auf dem Inhalt des Videos basiert.

### Füge die Frage zur Markdown-Datei hinzu.

Du kannst die Frage lokal oder über die Benutzeroberfläche von GitHub hinzufügen. Um die Frage lokal hinzuzufügen, musst du [freeCodeCamp lokal einrichten](how-to-setup-freecodecamp-locally.md). Du kannst die Datei auch auf GitHub finden und auf den Button "Bearbeiten" klicken, um die Frage direkt in deinem Browser hinzuzufügen.

Wenn eine Frage noch nicht zu einer bestimmten Videoaufgabe hinzugefügt wurde, wird sie mit der folgenden Standardfrage versehen:

```md
# --question--

## ``---text--

Text der Frage

## --answers--

Antwort 1

---

Antwort 2

---
```

Füge den Fragetext unter dem angezeigten Teil hinzu bzw. aktualisiere ihn:

```
# --question--

## --text--
```

Füge Antworten (`Answer 1`, `Answer 2`, und so weiter) unter `## --answers--` hinzu bzw. aktualisiere sie. Achte darauf, dass du die Nummer unter `## --video-solution--` mit der richtigen Antwortnummer aktualisierst. Du kannst weitere mögliche Antworten hinzufügen, indem du das gleiche Format verwendest. Die Fragen und Antworten können in Anführungszeichen gesetzt werden.

### Fragebeispiele

````md
# --question--

## --text--

Was wird mit diesem JavaScript-Code auf der Konsole ausgegeben?

```js
console.log('hello world');
````

## --answers--

hello _world_

---

**hello** world

---

hello world

---

## --video-solution--

3
````

````md
# --question--

## --text--

Was wird nach der Ausführung dieses Codes ausgedruckt:


```py
width = 15
height = 12.0
print(height/3)
````

## --answers--

39

---

4

---

4.0

---

5.0

---

5

## --video-solution--

3 ````

Für weitere Beispiele kannst du dir die Markdown-Dateien für den folgenden Videokurs ansehen. Zu allen Aufgaben gibt es bereits Fragen: [Python für Jedermann Kurs](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Öffne einen Pull-Request

Nachdem du eine oder mehrere Fragen erstellt hast, kannst du die Änderungen in einem neuen Branch übertragen und [einen Pull-Request](how-to-open-a-pull-request.md) öffnen.

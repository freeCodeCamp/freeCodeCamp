# Wie man bei Videoherausforderungen hilft

Video-Herausforderungen sind eine neue Art von Herausforderung im FreeCodeCamp Lehrplan.

Eine Videoherausforderung ist ein kleiner Abschnitt eines Videokurses zu einem bestimmten Thema. Eine Video-Challenge-Seite fügt ein YouTube-Video ein. Jede Challenge-Seite hat eine einzige Multiple-Choice-Frage im Zusammenhang mit dem Video. Ein Benutzer muss die Frage richtig beantworten, bevor er die nächste Videoherausforderung im Kurs fortsetzt.

Die Seiten zur Videoherausforderung werden von Mitgliedern des FreeCodeCamp-Teams erstellt. YouTube-Videos werden auch von Mitgliedern des FreeCodeCamp-Teams hochgeladen. Viele der Video-Herausforderungen haben noch keine Fragen damit verbunden.

Sie können helfen, indem Sie Fragen zu verschiedenen Optionen im Zusammenhang mit Video-Abschnitten erstellen und die Fragen zu den Markdown-Dateien für die Video-Challenge hinzufügen.


## Herausforderungsvorlage

Unten ist eine Vorlage dafür, wie die Challenge-Markdown-Dateien aussehen.

````md
---
id: Eindeutige Kennung (alphanumerisch, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
--- ## Beschreibung

<section id='description'>
Eine optionale Beschreibung mit hilfreichen Informationen im Zusammenhang mit dem Video.
</section>

## Tests

<section id='tests'>



 ```yml
Frage:
  Text: 'Frage'
  Antworten:
    -
````

</section>
````

## Erstellen von Fragen für Video-Challenge

### Zugriff auf die Video-Challenge-Markdown Dateien

Sie finden die Markdown Dateien für Video-Challenge an den folgenden Stellen im Lehrplan:

- [Datenanalyse mit Python-Kurse](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/german/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/tree/master/curriculum/challenges/gerish/08-data-analysis-with-python/numpy)
- [How Neurral Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Wählen Sie eine Datei aus den obigen Optionen. ### Skim durch das Video, das mit der Challenge verbunden ist, und erstellen Sie eine mehrfache Frage

Zuerst finden Sie die videoID.

### Skim durch das Video, das mit der Challenge verbunden ist, und erstellen Sie eine mehrfache Frage

Zuerst finden Sie die videoID.

Zum Beispiel, im folgenden Code aus dem Header einer Video-Challenge-Markdown-Datei, die videoId ist "nVAaxZ34khk". Auf GitHub sollten die Informationen in einem Tabellenformat angelegt werden.
````
---
id: 5e9a093a74c4063ca6f7c14d Titel: Datenanalyse Beispiel A ChallgeType: 11
videoId: nVAaxZ34khk
---
```

Als nächstes greifen Sie mit dieser VideoID auf das YouTube-Video zu. Die URL für das Video lautet:
https://www.youtube. om/watch?v=[videoId]    (videoId zur URL ohne eckige Klammern hinzufügen)

Im obigen Beispiel ist die URL https://www. outube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that videoId and think of a multiple choice question based on the content of the video.

### Fügen Sie die Frage zur Markierungsdatei

hinzu. Sie können die Frage lokal oder direkt über das GitHub-Interface hinzufügen. Um die Frage lokal hinzuzufügen, musst du [FreeCodeCamp lokal einrichten](how-to-setup-freecodecamp-locally.md). Sie können auch die Datei auf GitHub finden und klicken Sie auf die Schaltfläche Bearbeiten, um die Frage direkt in Ihrem Browser hinzuzufügen.

Wenn eine Frage noch nicht zu einer bestimmten Videoherausforderung hinzugefügt wurde, es wird die folgende Standardfrage:

```yml
question:
  text: |
    Frage
  Antworten:
    - |
      ein
    - |
      zwei
    - |
      drei
  Lösung: 3
```

Aktualisieren Sie das Wort „Frage“ mit Ihrer Frage. Aktualisieren Sie das „ein“, „zwei“ und „drei“ mit den möglichen Antworten. Achten Sie darauf, die Lösungsnummer zu aktualisieren, mit der die Antwort korrekt ist. Sie können mehr mögliche Antworten im gleichen Format hinzufügen. Die Frage und die Antworten können mit Anführungszeichen umgeben.

#### Verwenden Sie Markdown um Ihre Frage zu formatieren

Der Text in der Frage wird als Markdown geparst. Der einfachste Weg, um sicherzustellen, dass die Frage korrekt formatiert ist, ist die Frage mit dem `Text zu starten: |`, wie folgt:

```yml
Frage:
  Text: |
    Frage
```

Dann müssen Sie sicherstellen, dass Ihre Frage in einer neuen Zeile ist und eine Ebene mehr als `Text eingerückt hat: |`.

Der gleiche Ansatz kann für die Antworten verwendet werden, so dass die gesamte Frage wird

```yml
Frage:
  Text: |
    Frage
  beantwortet:
  - |
    Erste Antwort
  - |
    Zweite
  - |
    Dritte
  Lösung: 2
```

Vergewissern Sie sich, dass jede Antwort plausibel ist, aber es gibt nur eine richtige Antwort.

#### Verwendung von HTML

Fragen und Antworten können bestimmte HTML-Tags wie `<br>` für eine neue Zeile enthalten. HTML-Tags sollten sparsam verwendet werden, wenn Fragen ohne sie nicht ausgedrückt werden können.

### Fragebeispiele

#### Beispiele ohne HTML

````yml
Frage:
  Text: |
    Was protokolliert dieser JavaScript-Code zur Konsole?
    ```js
    console.log('Hallo Welt');
    ````


    Wähle eine Antwort!
  antworten:
    - | Hallo *Welt*
    - | **Hallo** Welt
    - | Hallo Welt Lösung: 3
````

``yml
Frage:
  text: |
    Was wird nach dem Ausführen dieses Codes ausgeben:
    ```py
    Breite = 15
    Höhe = 12. Drucken (Höhe/3)
    ````
  antworten:
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 Lösung: 3
````

#### Beispiel mit HTML

```yml
Frage:
  text: |
    Was wird nach dem Ausführen dieses Codes ausgegeben:
    <pre><code>Breite = 15<br>Höhe = 12.<br>print(height/3)<code></pre>
  Antworten:
    - |
      39
    - |
      4
    - |
      4. |
      5. |
      5
  Lösung: 3
````

Das letzte Beispiel zeigt, dass HTML verwendet werden kann, dass es aber nicht so lesbar ist wie die Version ohne es.

Für weitere Beispiele können Sie sich die Markdown Dateien für den folgenden Video-Kurs ansehen. Alle Herausforderungen haben bereits Fragen: [Python für jeden Kurs](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Pull-Request öffnen

Nach dem Erstellen einer oder mehrerer Fragen können Sie die Änderungen zu einem neuen Zweig übertragen und [öffnen Sie einen Pull-Request](how-to-open-a-pull-request.md).

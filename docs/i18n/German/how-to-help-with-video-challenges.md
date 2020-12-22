# How to help with video challenges

Video challenges are a new type of challenge in the freeCodeCamp curriculum.

A video challenge is a small section of a full-length video course on a particular topic. A video challenge page embeds a YouTube video. Each challenge page has a single multiple-choice question related to the video. A user must answer the question correctly before moving on the the next video challenge in the course.

The video challenge pages are created by members of the freeCodeCamp team. YouTube videos are also uploaded by members of the freeCodeCamp team. Many of the video challenges do not yet have questions associated with them.

You can help by creating multiple choice questions related to video sections and adding the questions to the markdown files for the video challenges.


## Challenge Template

Below is a template of what the challenge markdown files look like.

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

### Skim through the video associated with the challenge and create a mutiple choice question

First, find the videoId.

For example, in the following code from the header of a video challenge markdown file, the videoId is "nVAaxZ34khk". On GitHub, the information should be layed out in a table format.
````
---
id: 5e9a093a74c4063ca6f7c14d Titel: Datenanalyse Beispiel A ChallgeType: 11
videoId: nVAaxZ34khk
---
```

Next, access the YouTube video with that videoId. The url for the video will be:
https://www.youtube.com/watch?v=[videoId]    (add videoId to the URL without square brackets)

In the example above, the url is https://www.youtube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that videoId and think of a multiple choice question based on the content of the video.

### Add the question to the markdown file

You can add the question locally or directly throught the GitHub interface. To add the question locally, you need to [set up freeCodeCamp locally](how-to-setup-freecodecamp-locally.md). You can also find the file on GitHub and click the edit button to add the question right in your browser.

If a question has not yet been added to a particular video challenge, it will have the following default question:

```yml
question:
  text: |
    Question
  answers:
    - |
      one
    - |
      two
    - |
      three
  solution: 3
```

Update the word “Question” with your question. Update the “one”, “two”, and “three” with the possible answers. Make sure to update the solution number with which answer is correct. You can add more possible answers using the same format. The question and answers can be surrounded with quotation marks.

#### Use markdown to format your question

The text in the question is parsed as markdown. The simplest way to ensure that it is formatted correctly is to start the question with `text: |`, like this:

```yml
question:
  text: |
    Question
```

Then you need to make sure that your question is on a new line and indented one level more than `text: |`.

The same approach can be used for the answers, so the entire question becomes

```yml
question:
  text: |
    Question
  answers:
  - |
    First answer
  - |
    Second
  - |
    Third
  solution: 2
```

Make sure each answer is plausible but there is only one correct answer.

#### Use of HTML

Questions and answers can contain certain HTML tags like `<br>` for a new line. HTML tags should be used sparingly, when questions cannot be expressed without them.

### Question examples

#### Examples without HTML

````yml
question:
  text: |
    What does this JavaScript code log to the console?
    ```js
    console.log('hello world');
    ````


    Select an answer!
  answers:
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
  answers:
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

The final example demonstrates that HTML can be used, but that it is not as readable as the version without it.

For more examples, you can look at the markdown files for the following video course. All the challenges already have questions: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Open a pull request

After creating one or more questions, you can commit the changes to a new branch and [open a pull request](how-to-open-a-pull-request.md).

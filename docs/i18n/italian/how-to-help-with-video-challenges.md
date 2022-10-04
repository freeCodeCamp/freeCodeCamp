# Come aiutare con le sfide video

Le sfide video sono un nuovo tipo di sfida nel programma di studi freeCodeCamp.

Una sfida video è una piccola sezione di un corso interamente su video su un argomento particolare. Una pagina di sfida video incorpora un video di YouTube. Ogni pagina di sfida ha una singola domanda a scelta multipla relativa al video. Un utente deve rispondere alla domanda correttamente prima di poter passare alla sfida video successiva nel corso.

Le pagine della sfida video sono create dai membri del team freeCodeCamp. Anche i video di YouTube sono caricati dai membri del team freeCodeCamp. Molte delle sfide video non hanno ancora domande ad esse associate.

Puoi aiutare creando domande a scelta multipla legate a sezioni del video e aggiungendo le domande ai file markdown per le sfide video.

## Template delle sfide

Di seguito è riportato un modello di come appaiono i file markdown delle sfide.

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

Questi campi sono usati attualmente per le domande a scelta multipla nelle sfide di Python.

## --text--

Il testo della domanda va qui.

## --answers--

Risposta 1

---

Risposta 2

---

Altre risposte

## --video-solution--

Il numero della risposta corretta va qui.
````

## Creare domande per le sfide video

### Accedi al file markdown della sfida video

Puoi trovare i file markdown per le sfide video alle seguenti posizioni nel curriculum:

- [Analisi di dati con Python](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [Corso su TensorFlow 2.0](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Corso su Numpy](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [Corso su come funzionano le reti neurali](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Scegli un file markdown dalle opzioni sopra.

### Skim through the video associated with the challenge and create a multiple-choice question

First, find the `videoId`.

For example, in the following code from the header of a video challenge markdown file, the `videoId` is "nVAaxZ34khk". Su GitHub, le informazioni dovrebbero essere visibili in una tabella.

````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Come cosa successiva, accedi al video YouYube con quel `videoId`. The URL for the video will be:
https://www.youtube.com/watch?v=[videoId] (replace `videoId` in the URL with the video's ID - without square brackets)

In the example above, the URL is https://www.youtube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that `videoId` and think of a multiple-choice question based on the content of the video.

### Aggiungere la domanda al file markdown

Puoi aggiungere la domanda localmente o usando l'interfaccia di GitHub. Per aggiungere la domanda localmente, è necessario [impostare freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Puoi anche trovare il file su GitHub e fare clic sul pulsante Modifica per aggiungere la domanda nel tuo browser.

Se una domanda non è ancora stata aggiunta a una sfida video, avrà la seguente domanda di default:

```md
# --question--

## --text--

Question text

## --answers--

Answer 1

---

Answer 2

---

More answers

## --video-solution--

1
```

Aggiungi/Cambia il testo della domanda sotto la parte che dice:

```
# --question--

## --text--
```

Add/Update answers (`Answer 1`, `Answer 2`, and so on) sotto `## --answers--`. Assicurati di aggiornare il numero sotto `## --video-solution--` con il numero della risposta corretta. Puoi aggiungere altre possibili domande seguendo lo stesso formato. Le domande e le risposte possono essere racchiuse tra virgolette.

### Esempi di domande

````md
# --question--

## --text--

What does this JavaScript code log to the console?

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

Cosa verrà visualizzato dopo l'esecuzione di questo codice:

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

Per altri esempi, puoi guardare i file markdown dei seguenti corsi video. Tutte le sfide che hanno già domande: [Corso Python per tutti](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Aprire una pull request

Dopo aver creato una o più domande, puoi fare un commit delle tue modifiche su un nuovo ramo e [aprire una pull request](how-to-open-a-pull-request.md).

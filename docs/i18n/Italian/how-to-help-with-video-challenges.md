# Come aiutare con le sfide del video

Le sfide del video sono un nuovo tipo di sfida nel programma di studi freeCodeCamp.

Una sfida video è una piccola sezione di un corso video a tutta lunghezza su un argomento particolare. Una pagina di sfida video incorpora un video di YouTube. Ogni pagina di sfida ha una singola domanda a scelta multipla relativa al video. Un utente deve rispondere correttamente alla domanda prima di passare alla prossima videosfida del corso.

Le pagine della sfida video sono create dai membri del team freeCodeCamp. I video di YouTube sono anche caricati dai membri del team freeCodeCamp. Molte delle sfide video non hanno ancora domande ad esse associate.

Si può aiutare creando domande a scelta multipla relative alle sezioni video e aggiungendo le domande ai file markdown per le sfide del video.


## Template Sfida

Di seguito è riportato un modello di come appaiono i file markdown della sfida.

````md
---
id: Identificatore unico (alfanumerico, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
---

## Descrizione

<section id='description'>
Una descrizione opzionale con informazioni utili relative al video.
</section>

## Test

<section id='tests'>

```yml
domanda:
  testo: 'Domanda'
  risposte:
    - 'Rispondi uno'
    - 'Rispondi due'
    - 'Rispondi tre'
  soluzione: 3
````

</section>
````

## Creare domande per le sfide video

### Accedere ai file di markdown della sfida video

Nel curriculum puoi trovare i file di markdown per le sfide video nelle seguenti posizioni:

- [Analisi dei dati con il corso Python](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Scegli un file di sfida dalle opzioni qui sopra.

### Skim attraverso il video associato alla sfida e crea una domanda a scelta mutua

Per prima cosa, trova l'Id.

Ad esempio, nel seguente codice dall'intestazione di un file di markdown di sfida video, l'Id video è "nVAaxZ34khk".

Ad esempio, nel seguente codice dall'intestazione di un file di markdown di sfida video, l'Id video è "nVAaxZ34khk". Su GitHub, le informazioni devono essere disposte in un formato di tabella.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Analisi dei dati Esempio A challengeType: 11
videoId: nVAaxZ34khk
---
```

Successivamente, accedi al video YouTube con quel videoId. L'url per il video sarà:
https://www.youtube. om/watch?v=[videoId]    (aggiungi videoId all'URL senza parentesi quadre)

Nell'esempio sopra, l'url è https://www. outube.com/watch?v=nVAaxZ34khk

Skim il video di YouTube con quel videoId e pensare a una domanda a scelta multipla basata sul contenuto del video.

### Aggiungere la domanda al file markdown

È possibile aggiungere la domanda localmente o direttamente attraverso l'interfaccia GitHub. Per aggiungere la domanda localmente, è necessario [impostare freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Puoi anche trovare il file su GitHub e fare clic sul pulsante Modifica per aggiungere la domanda nel tuo browser.

Se una domanda non è ancora stata aggiunta a una determinata sfida video, avrà la seguente domanda predefinita:

````yml
domanda:
  testo: <unk>
    Domanda
  risposte:
    - <unk>
      uno
    - <unk>
      due
    - <unk>
      tre
  soluzione: 3
```

Aggiorna la parola “Domanda” con la tua domanda. Aggiornare il “uno”, “due” e “tre” con le possibili risposte. Assicurarsi di aggiornare il numero di soluzione con cui la risposta è corretta. È possibile aggiungere più risposte possibili utilizzando lo stesso formato. La domanda e le risposte possono essere circondate da virgolette.

#### Usa markdown per formattare la tua domanda

Il testo della domanda è interpretato come contrassegno. Il modo più semplice per garantire che sia formattato correttamente è iniziare la domanda con `testo: <unk>`, come questo:

```yml
domanda:
  testo: <unk>
    Domanda
```

Allora devi assicurarti che la tua domanda sia su una nuova linea e che un livello sia tornato più di `testo: <unk>`.

Lo stesso approccio può essere utilizzato per le risposte, così l'intera domanda diventa

```yml
domanda:
  testo: <unk>
    Domanda
  risposte:
  - <unk>
    Prima risposta
  - <unk>
    Seconda
  - <unk>
    Terza soluzione
  : 2
```

Assicurarsi che ogni risposta sia plausibile, ma c'è solo una risposta corretta.

#### Uso di HTML

Domande e risposte possono contenere alcuni tag HTML come `<br>` per una nuova riga. I tag HTML dovrebbero essere usati con parsimonia, quando le domande non possono essere espresse senza di esse.

### Esempi di domande

#### Esempi senza HTML

````yml
domanda:
  testo: <unk>
    Che cosa fa questo JavaScript code log alla console?
    ```js
    console.log('ciao worldd');
    ````


    Seleziona una risposta!
  risposte:
    - ciao *mondo*
    - **ciao** mondo
    - ciao mondo soluzione: 3
````

````yml
domanda:
  testo: <unk>
    Cosa stamperà dopo aver eseguito questo codice:
    ```py
    larghezza = 15
    altezza = 12. stampa(altezza/3)
    ````
  risposte:
    - | 39
    - | 4
    - 4.0
    - 5.0
    - 5 : 3
````

#### Esempio con HTML

```yml
domanda:
  testo: <unk>
    Cosa stamperà dopo aver eseguito questo codice:
    <pre><code>larghezza = 15<br>altezza = 12.<br>print(height/3)<code></pre>
  risposte:
    - <unk>
      39
    - <unk>
      4
    - <unk>
      4.
````

L'esempio finale dimostra che l'HTML può essere usato, ma che non è così leggibile come la versione senza di esso.

Per ulteriori esempi, è possibile guardare i file markdown per il seguente corso video. Tutte le sfide hanno già domande: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Apri una pull request

Dopo aver creato una o più domande, è possibile eseguire il commit delle modifiche a un nuovo ramo e [aprire una pull request](how-to-open-a-pull-request.md).

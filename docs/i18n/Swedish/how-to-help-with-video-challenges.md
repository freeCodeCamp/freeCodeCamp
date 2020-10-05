# Hur man kan hjälpa till med videoutmaningar

Video utmaningar är en ny typ av utmaning i freeCodeCamps läroplan.

En video utmaning är en liten del av en fullängds video kurs om ett visst ämne. En video utmaningssida inbäddar en YouTube-video. Varje utmaningssida har en enda flervalsfråga relaterad till videon. En användare måste svara rätt på frågan innan han går vidare till nästa videoutmaning på kursen.

Videoutmaningssidorna skapas av medlemmar i freeCodeCamp-teamet. YouTube-videor laddas också upp av medlemmar i freeCodeCamp-teamet. Många av videoutmaningarna har ännu inte frågor som är förknippade med dem.

Du kan hjälpa till genom att skapa flervalsfrågor relaterade till videosektioner och lägga till frågor till markdown filer för videoutmaningar.


## Utmaningsmall

Nedan följer en mall för hur utmaningens markdown-filer ser ut.

````md
---
id: Unik identifierare (alfanumeriska, MongoDB_id)
titel: Utmaningstitel
challengeTyp: 11
videoId: 'YouTube videoId for video challenge'
---

## Beskrivning

<section id='description'>
En valfri beskrivning med hjälpsam information om videon.
</section>

## Tester

<section id='tests'>

```yml
fråga:
  text: 'Fråga'
  svar:
    - 'Svar ett'
    - 'Svar två'
    - 'Svar tre'
  lösning: 3
````

</section>
````

## Skapa frågor för videoutmaningar

### Få tillgång till markdown videofiler

Du kan hitta markdown filerna för videoutmaningar på följande platser i läroplanen:

- [Dataanalys med Pythonkursen](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/läroplan/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Välj en utmaningsfil från alternativen ovan.

### Skim igenom videon som är associerad med utmaningen och skapa en mutiple choice question

Bestäm först videoId.

Till exempel, i följande kod från huvudet på en video utmaning markdown fil, videoId är "nVAaxZ34khk". På GitHub ska informationen läggas ut i tabellformat.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Exempel A challengeTyp: 11
videoId: nVAaxZ34khk
---
```

Kom sedan åt YouTube-videon med det videoId. Url för videon kommer att vara:
https://www.youtube. om/watch?v=[videoId]    (lägg till videoId till URL utan hakparenteser)

I exemplet ovan är webbadressen https://www. outube.com/watch?v=nVAaxZ34khk

Skim YouTube-videon med det videoId och tänk på en fråga om flera val baserat på innehållet i videon.

### Lägg till frågan i markdown-filen

Du kan lägga till frågan lokalt eller direkt genom GitHub-gränssnittet. För att lägga till frågan lokalt, måste du [ställa in freeCodeCamp lokal](how -to-setup-freecodecamp-locally.md). Du kan också hitta filen på GitHub och klicka på redigeringsknappen för att lägga till frågan direkt i din webbläsare.

Om en fråga ännu inte har lagts till en viss video utmaning, den kommer att ha följande standardfråga:

```yml
fråga:
  text: <unk>
    Fråga
  svar:
    - <unk>
      en
    - <unk>
      två
    - <unk>
      tre
  lösning: 3
```

Uppdatera ordet “Fråga” med din fråga. Uppdatera “en”, “två” och “tre” med möjliga svar. Se till att uppdatera lösningsnumret med vilket svar som är rätt. Du kan lägga till fler möjliga svar med samma format. Frågan och svaren kan omges med citationstecken.

#### Använd markdown för att formatera din fråga

Texten i frågan tolkas som markdown. Det enklaste sättet att se till att den formateras korrekt är att starta frågan med `text: <unk>`, så här:

```yml
fråga:
  text: <unk>
    Fråga
```

Då måste du se till att din fråga är på en ny linje och indragen en nivå mer än `text: <unk>`.

Samma tillvägagångssätt kan användas för svaren, så hela frågan blir

```yml
fråga:
  text: <unk>
    Fråga
  svar:
  - <unk>
    Första svaret
  - <unk>
    Andra
  - <unk>
    Tredje
  lösning: 2
```

Se till att varje svar är rimligt, men det finns bara ett korrekt svar.

#### Användning av HTML

Frågor och svar kan innehålla vissa HTML-taggar som `<br>` för en ny rad. HTML-taggar bör användas sparsamt när frågor inte kan uttryckas utan dem.

### Exempel på frågor

#### Exempel utan HTML

````yml
fråga:
  text: <unk>
    Vad loggar denna JavaScript-kod till konsolen?
    ```js
    console.log('hello world');
    ````


    Välj ett svar!
  Svar:
    - <unk> hej *värld*
    - <unk> **hej** världen
    - <unk> hej världen lösning: 3
````

````yml
fråga:
  text: <unk>
    Vad kommer att skrivas ut efter att ha kört den här koden:
    ```py
    bredd = 15
    höjd = 12.
    utskrift (höjd/3)
    ````
  Svar:
    - | 39
    - | 4
    - <unk> 4.0
    - <unk> 5.0
    - <unk> 5 lösning: 3
````

#### Exempel med HTML

```yml
fråga:
  text: <unk>
    Vad kommer att skrivas ut efter att ha kört denna kod:
    <pre><code>bredd = 15<br>höjd = 12.<br>print(höjd/3)<code></pre>
  svar:
    - <unk>
      39
    - <unk>
      4
    - <unk>
      4.
    - <unk>
      5.
    - <unk>
      5
  lösning: 3
````

Det sista exemplet visar att HTML kan användas, men att den inte är lika läsbar som versionen utan den.

För fler exempel kan du titta på markdown-filerna för följande videokurs. Alla utmaningar har redan frågor: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Öppna en pull-förfrågan

Efter att du skapat en eller flera frågor kan du binda in ändringarna i en ny gren och [öppna en pull-förfrågan](how-to-open-a-pull-request.md).

# Hoe te helpen met video-uitdagingen

Video-uitdagingen zijn een nieuw soort uitdaging in het freeCodeCamp curriculum.

Een video-uitdaging is een klein deel van een volledige video-cursus over een bepaald onderwerp. Een video-uitdagingspagina bevat een YouTube-video. Elke uitdagingspagina heeft een enkele meerkeuze met betrekking tot de video. Een gebruiker moet de vraag correct beantwoorden voordat hij op de volgende video-uitdaging in de cursus.

De video-uitdagingspagina's worden gemaakt door leden van het freeCodeCamp team. YouTube video's worden ook geüpload door leden van het freeCodeCamp team. Veel van de videouitdagingen hebben daar nog geen vragen over.

Je kunt helpen door meerdere keuzevragen te maken met betrekking tot videosecties en de vragen toe te voegen aan de markdown bestanden voor de video-uitdagingen.


## Uitdaging sjabloon

Hieronder is een sjabloon van de challenge markdown bestanden.

````md
---
id: Unieke identificatie (alfanumeriek), MongoDB_id)
titel: Challenge titel
challengeType: 11
videoId: 'YouTube videoId voor video challenge'
---

## Beschrijving

<section id='description'>
Een optionele beschrijving met handige informatie over de video.
</section>

## Testen

<section id='tests'>

```yml
vraag:
  tekst: 'Vraag'
  antwoorden:
    - 'Antwoord één'
    - 'Antwoord twe'
    - 'Antwoord drie'
  oplossing: 3
````

</section>
````

## Creating questions for video challenges

### Access the video challenge markdown files

You can find the markdown files for video challenges at the following locations in the curriculum:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Pick a challenge markdown file from the options above.

### Skim via de video die gekoppeld is aan de uitdaging en maak een mutiple choice vraag

Vind eerst de videoId.

In de volgende code van de header van een video challenge markdown bestand is de videoId bijvoorbeeld "nVAaxZ34khk". Op GitHub moet de informatie in een tabelformaat worden geladen.
````
---
id: 5e9a093a74c4063ca6f7c14d titel: Data analyse Voorbeeld A challengeType: 11
videoId: nVAaxZ34khk
---
```

Ga vervolgens naar de YouTube-video met die videoId. De url voor de video zal zijn:
https://www.youtube. om/watch?v=[videoId]    (voeg videoId toe aan de URL zonder vierkante hakens)

In het bovenstaande voorbeeld is de URL https://www. outube.com/watch?v=nVAaxZ34khk

Skim de YouTube-video met die videoId en denk aan een meerkeuze op basis van de inhoud van de video.

### Voeg de vraag toe aan het markdown bestand

Je kunt de vraag lokaal of rechtstreeks toevoegen via de GitHub interface. Om de vraag lokaal toe te voegen, moet je [freeCodeCamp lokaal instellen](how-to-setup-freecodecamp-locally.md). Je kunt het bestand ook vinden op GitHub en op de knop bewerken om de vraag rechts in je browser toe te voegen.

Als een vraag nog niet is toegevoegd aan een bepaalde video uitdaging, het zal de volgende standaardvraag bevatten:

```yml
vraag:
  tekst 
 text: ²
    Vraag
  antwoord:
    -
      één
    - ľ
      twee
    - gha
      3
  oplossing: 3
```

Werk het woord "Vraag" bij met uw vraag. Werk de "één", "twee", en "drie" bij met de mogelijke antwoorden. Zorg ervoor dat het oplossingsnummer wordt bijgewerkt waarmee het antwoord correct is. U kunt meer mogelijke antwoorden toevoegen volgens dezelfde indeling De vraag en antwoorden kunnen worden omringd met aanhalingstekens. De vraag en antwoorden kunnen worden omringd met aanhalingstekens.

#### Gebruik markdown om je vraag te formatteren

De tekst in de vraag wordt als markdown geïnterpreteerd. De eenvoudigste manier om ervoor te zorgen dat het correct is opgemaakt is om de vraag te beginnen met `tekst: Dail`, zoals dit:

```yml
vraag:
  text: ²
    Vraag
```

Vervolgens moet je ervoor zorgen dat je vraag zich op een nieuwe lijn bevindt en één niveau meer heeft ingesprongen dan `tekst : 000000`.

Dezelfde benadering kan worden gebruikt voor de antwoorden, dus de hele vraag wordt

```yml
vraag:
  tekst: ²
    Vraag
  antwoordt op:
  -
    Eerste antwoord
  - 2 - 2
    Tweede
  - ²
    Derde
  oplossing: 2
```

Zorg ervoor dat elk antwoord plausibel is, maar er is maar één juist antwoord.

#### Gebruik van HTML

Vragen en antwoorden kunnen bepaalde HTML-tags bevatten, zoals `<br>` voor een nieuwe regel. HTML-tags moeten spaarzaam worden gebruikt wanneer vragen niet zonder ze kunnen worden uitgedrukt.

### Vraag voorbeelden

#### Voorbeelden zonder HTML

````yml
vraag:
  tekst: ×
    Wat logt deze JavaScript-code in de console?
    ```js
    console.log('hallo wereld');
    ````


    Selecteer een antwoord!
  antwoorden:
    - Februari hallo *wereld*
    - Februari **hallo** wereld
    - ・ hallo wereld oplossing: 3
````

``````yml
vraag:
  text: ×
    Wat zal worden afgedrukt na het uitvoeren van deze code:
    ```py
    breedte = 15
    hoogte = 12. print(hoogte/3)
    ````
  antwoorden:
    - | 39
    - | 4
    - ¦ 4.0
    - ¦ 5.0
    - ® 5 oplossing: 3
````

#### Example with HTML

```yml
question:
  text: |
    What will print out after running this code:
    <pre><code>width = 15<br>height = 12.0<br>print(height/3)<code></pre>
  answers:
    - |
      39
    - |
      4
    - |
      4.0
    - |
      5.0
    - |
      5
  solution: 3
````

Het laatste voorbeeld laat zien dat HTML kan worden gebruikt, maar dat het niet zo leesbaar is als de versie zonder HTML-versie.

Voor meer voorbeelden, kunt u de markdown bestanden bekijken voor de volgende video cursus. Alle uitdagingen hebben al vragen: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Open een pull-aanvraag

Na het aanmaken van een of meer vragen, kunt u de wijzigingen doorvoeren in een nieuwe branch en [open een pull-aanvraag](how-to-open-a-pull-request.md).

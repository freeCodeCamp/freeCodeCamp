# Hvordan man kan hjælpe med videoudfordringer

Video udfordringer er en ny type udfordring i freeCodeCamp pensum.

En videoudfordring er en lille del af et videokursus i fuld længde om et bestemt emne. En video udfordring side indlejrer en YouTube-video. Hver challenge side har et enkelt multiple-choice-spørgsmål relateret til videoen. En bruger skal besvare spørgsmålet korrekt, før du flytter på den næste video udfordring i kurset.

De video udfordring sider er skabt af medlemmer af freeCodeCamp team. YouTube-videoer er også uploadet af medlemmer af freeCodeCamp teamet. Mange af videoudfordringerne har endnu ikke spørgsmål forbundet med dem.

Du kan hjælpe ved at oprette multiple choice spørgsmål relateret til video sektioner og tilføje spørgsmålene til markdown filer til videoudfordringerne.


## Udfordring Skabelon

Nedenfor er en skabelon af, hvordan udfordringen markdown filer ser ud.

````md
---
id: Unik identifikator (alfanumerisk, MongoDB_id)
title: Challenge Titel
challengeType: 11
videoId: 'YouTube videoId for video challenge'
---

## Beskrivelse

<section id='description'>
En valgfri beskrivelse med nyttige oplysninger relateret til videoen.
</section>

## Tests

<section id='tests'>

```yml
spørgsmål:
  tekst: 'Spørgsmål'
  svar:
    - 'Svar En'
    - 'Svar to'
    - 'Svar tre'
  løsning: 3
````

</section>
````

## Oprettelse af spørgsmål til videoudfordringer

### Få adgang til videoudfordringsmarkdown filer

Du kan finde markdown filer til videoudfordringer på følgende steder i læseplanen:

- [Dataanalyse med Python Kursus](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Vælg en challenge markdown-fil fra ovenstående muligheder.

### Skim gennem videoen, der er forbundet med udfordringen og opret et mutiple choice-spørgsmål

Find først video-id'et.

For eksempel, i følgende kode fra overskriften på en video challenge markdown fil, video-Id er "nVAaxZ34khk". På GitHub skal oplysningerne laves ud i tabelformat.
````
---
id: 5e9a093a74c4063ca6f7c14d titel: Dataanalyse Eksempel A challengeType: 11
videoId: nVAaxZ34khk
---
```

Dernæst skal du tilgå YouTube-videoen med den video-Id. URLen til videoen vil være:
https://www.youtube. om/watch?v=[videoId]    (tilføj videoId til URL'en uden firkantede parenteser)

I eksemplet ovenfor er url https://www. outube.com/watch?v=nVAaxZ34khk

Skim YouTube-videoen med den videoId og tænk på et multiple choice-spørgsmål baseret på indholdet af videoen.

### Tilføj spørgsmålet til markdown filen

Du kan tilføje spørgsmålet lokalt eller direkte til GitHub interfacet. For at tilføje spørgsmålet lokalt, skal du [opsætte freeCodeCamp lokalt](how-to-setup-freecodecamp-locally.md). Du kan også finde filen på GitHub og klikke på redigeringsknappen for at tilføje spørgsmålet til højre i din browser.

Hvis et spørgsmål endnu ikke er blevet tilføjet til en bestemt videoudfordring, det vil have følgende standard spørgsmål:

```yml
spørgsmål:
  tekst: ●
    Spørgsmål
  svar:
    - ●
      one
    - ●
      to
    - ●
      tre
  løsning: 3
```

Opdater ordet “Spørgsmål” med dit spørgsmål. Opdater “en”, “to”, og “tre” med de mulige svar. Sørg for at opdatere løsningsnummeret, med hvilket svaret er korrekt. Du kan tilføje flere mulige svar ved hjælp af samme format. Spørgsmålet og svarene kan omringes med citationstegn.

#### Brug markdown til at formatere dit spørgsmål

Teksten i spørgsmålet fortolkes som markdown. Den enkleste måde at sikre, at det er formateret korrekt, er at starte spørgsmålet med `tekst: -`, sådan her:

```yml
spørgsmål:
  tekst: Error
    Spørgsmål
```

Så skal du sørge for, at dit spørgsmål er på en ny linje og indrykket et niveau mere end `tekst: ●`.

Den samme fremgangsmåde kan bruges til svarene, så hele spørgsmålet bliver til

```yml
spørgsmål:
  Tekst
    Spørgsmål
  svar:
  - ●
    Første svar
  - ●
    Anden
  - ●
    Tredje
  løsning: 2
```

Sørg for, at hvert svar er plausibelt, men der er kun ét rigtigt svar.

#### Brug af HTML

Spørgsmål og svar kan indeholde visse HTML-tags som `<br>` for en ny linje. HTML-tags skal bruges sparsomt, når spørgsmål ikke kan udtrykkes uden dem.

### Eksempler på spørgsmål

#### Eksempler uden HTML

````yml
spørgsmål:
  tekst: ¤
    Hvad logger denne JavaScript-kode på konsollen?
    ```js
    console.log('god-verden');
    ````


    Vælg et svar!
  svar:
    - Ž goddag *verden*
    - Ž **goddag** verden
    - ● hej verden løsning: 3
````

````yml
spørgsmål:
  tekst: ¤
    Hvad vil udskrive efter kørsel af denne kode:
    ```py
    bredde = 15
    højde = 12.
    print(højde/3)
    ````
  svar:
    - | 39
    - | 4
    - Ž 4.0
    - ● 5,0
    - ● 5 løsning: 3
````

#### Eksempel med HTML-

``yml
spørgsmål:
  tekst: ¤
    Hvad vil udskrive efter kørsel af denne kode:
    <pre><code>bredde = 15<br>højde = 12.<br>print(højde/3)<code></pre>
  svar:
    - Økologisk
      39
    - Økologisk
      4
    - Økologisk
      4.
    - ¤
      5.
    - ●
      5
  løsning: 3
````

Det sidste eksempel viser, at HTML kan bruges, men at det ikke er så læsbar som den version uden det.

For flere eksempler, kan du se på markdown filer til følgende video kursus. Alle udfordringerne har allerede spørgsmål: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Åbn en pull-anmodning

Når du har oprettet et eller flere spørgsmål, kan du forpligte ændringerne til en ny filial og [åbne en pull request](how-to-open-a-pull-request.md).

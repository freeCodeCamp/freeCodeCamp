# Hvordan hjelpe til med videoutfordringer

Videoutfordringer er en ny type utfordring i læreplanverket CodeCamp.

En videoutfordring er en liten seksjon av et videokurs med full lengde på et bestemt tema. En video utfordring side setter inn en YouTube-video. Hver utfordring side har ett enkelt spørsmål relatert til video. En bruker må svare korrekt på spørsmålet før du kan flytte på den neste video utfordringen i kurset.

Video-utfordringssidene er laget av medlemmer av det freeCodeCamp teamet. YouTube-videoer lastes også opp av medlemmer i freeCodeCamp teamet. Mange av videoutfordringene har ennå ikke spørsmål knyttet til seg.

Du kan hjelpe ved å opprette flere valgspørsmål relatert til videoseksjoner og legge til spørsmål i markeringsfilene for videoutfordringene.


## Utfordring Mal

Nedenfor ser en mal av hvordan utfordringene markørfilene ser ut.

````md
---
id: Unik identifikator (alfanumerisk, MongoDB_id)
tittel: Utfordringstittel
utfordringstype: 11
videoId: 'YouTube videoId for video utfordring'
---

## Beskrivelse

<section id='description'>
En valgfri beskrivelse med nyttig informasjon relatert til videoen.
</section>

## Tester

<section id='tests'>

```yml
spørsmål:
  tekst: 'Spørsmål'
  svar:
    - 'Svar på ett'
    - 'Svar på to'
    - 'Svar på tre'
  løsning: 3
````

</section>
````

## Opprette spørsmål for videoutfordringer

### Få tilgang til video-problemmarkørfilene

Du kan finne markdown filene for videoutfordringer på følgende steder i pensum :

- [Data Analysis med Python Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/freeCodeCamp/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/freeCodeCamp/curriculum/challenges/english/11-machine-learning-learning-python/howal-net-work-work

alternativinnstillinger



### Skim gjennom videoen knyttet til utfordringen og lag et flervalgsspørsmål

For det første, finn videoId.

For eksempel i følgende kode fra overskriften av en video utfordring markdown fil, er videoId "nVAaxZ34khk". På GitHub, skal informasjonen være satt ut i et tabellformat.
````
---
id: 5e9a093a74c4063ca6f7c14d tittel: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Deretter kan du få tilgang til YouTube-videoen med den video-filen. Nettadressen til videoen vil være:
https://www.youtube. om/watch?v=[videoId]    (legg til videoId til URL uten hakeparentes)

i eksemplet ovenfor er url https://www. outube.com/watch?v=nVAaxZ34khk

Skim YouTube video med den videoId og tenk på et flere spørsmål basert på innholdet i videoen.

### Legg spørsmålet til i markdown filen

Du kan legge til spørsmålet lokalt eller direkte kaste GitHub-grensesnittet. For å legge til spørsmålet lokalt, må du [sette opp freeCodeCamp locally](how-to-setup-freecodecamp-locally.md). Du finner også filen på GitHub og klikk på redigeringsknappen for å legge til spørsmålet rett i nettleseren.

Dersom et spørsmål ikke har blitt lagt til en bestemt videoutfordring, det vil ha følgende standardspørsmål:

```yml
spørsmål:
  tekst: ⌘
    Spørsmålet
  svar:
    - class="
      ett
    - ◊
      to
    - norden.org
      tre
  løsning: 3
```

Oppdater ordet "Spørsmål" med ditt spørsmål. Oppdater "én", "to" og "tre" med mulige svar. Sørg for å oppdatere fasnummeret på løsningen som svarer er korrekt. Du kan legge til flere mulige svar med samme format. Spørsmålet og svarene kan være omgitt med sitatmerke.

#### Bruk markdown til å formatere spørsmålet ditt

Teksten i det aktuelle spørsmålet er analysert som merket. Den enkleste måten å sørge for at det er korrekt formatert på, er å starte spørsmålet med `tekst: ∙`, slik:

```yml
spørsmål:
  tekst: Ques
    Spørsmål
```

Deretter må du forsikre deg om at spørsmålet er på en ny linje og strek med ett nivå mer enn `tekst: ########`.

Den samme tilnærmingen kan benyttes for svarene, slik at hele spørsmålet blir

```yml
spørsmål:
  tekst: Conoco
    Spørsmål
  svar:
  - 
 - MedDRA
    Første svar
  - ⌘
    Andre
  - class="
    Third
  løsning: 2
```

Pass på at hvert svar er akseptabelt, men det er bare ett riktig svar.

#### Bruk av HTML

Spørsmål og svar kan inneholde visse HTML-koder som `<br>` for en ny linje. HTML-koder skal brukes stille, når spørsmål ikke kan uttrykkes uten dem.

### Eksempler på spørsmål

#### Eksempler uten HTML

````yml
spørsmål:
  tekst: ＋
    Hva logger denne JavaScript-koden til konsollen?
    ```js
    console.log('hello world');
    ````


    Velg et svar!
  svar:
    - Č hallo *verden*
    - λ **Hei,** verden
    - ######## hallo verden løsning: 3
````

````yml
spørsmål:
  tekst: ″
    Det som vil skrive ut etter å ha kjørt denne koden:
    ```py
    bredde = 15
    høyde = 12.
    Trykk(høyde/3)
    ````
  svar:
    - | 39
    - | 4
    - iNatur 4.0
    - iNatur 5.0
    - ALIM 5 løsning: 3
````

#### Eksempel med HTML

```yml
spørsmål:
  tekst: ε
    Hva vil skrive ut etter å ha kjørt denne koden:
    <pre><code>bredde = 15<br>høyde = 12.<br>print(høyde/3)<code></pre>
  svar:
    - norden.org
      39
    - Conoco
      4
    - Conoco
      4.
    - ＋
      5.
    - ″
      5
  løsning: 3
````

Det siste eksempelet viser at HTML kan brukes, men at det ikke er så lesbar som versjonen uten det.

For flere eksempler, kan du se på markdown-filene for følgende videokurs. Alle utfordringene har allerede spørsmål: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Åpne pull-forespørsel

Etter å ha opprettet en eller flere spørsmål, kan du utføre endringene i en ny gren og [åpne en trekkforespørsel](how-to-open-a-pull-request.md).

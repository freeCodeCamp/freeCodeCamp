# Hvordan jobbe med kodeutfordringer

Vårt mål er å utvikle en morsom og tydelig interaktiv læringserfaring.

Å utforme interaktive kodeutfordringer er vanskelig. Det ville vært mye enklere å skrive en langvarig forklaring eller å lage en videoveiledning, og det er et sted for dem på Medium og YouTube. For våre grunnleggende læreplaner følger vi imidlertid med det som fungerer best for de fleste - en fullt interaktiv, videospill-lignende opplevelse.

Vi vil ha kampere for å nå en strømningstat. Vi ønsker at de skal bygge momentum og blåse gjennom læreplanen så få snagler som mulig. Vi ønsker at de går inn i prosjektene som er preget av tillit og har stor eksponering i programmeringskonsepter.

řskape disse utfordringene krever enorme kreativitet og oppmerksomhet rundt detaljer. Det er mye hjelp tilgjengelig. Du vil få støtte fra et helt lag med bidragsytere som du kan sprette ideer til og demonstrere utfordringene dine. Hold deg aktiv i [bidragsytere rommet](https://gitter.im/freecodecamp/contributors) og spør mange spørsmål.

Med din hjelp kan vi utforme en interaktiv læreplan for koding som vil hjelpe millioner av mennesker med å lære å kode i årene som kommer.

Innholdet for hver utfordring lagres i sin egen markeringsfil. Denne markeringsfilen blir senere konvertert til HTML ved hjelp av verktøyene for å lage interaktive nettsider.

Du finner alt freeCodeCamp.orgs faglige innhold i [`/pensum / utfordringer`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) mappen.

## Sett opp verktøy for pensum

Før du arbeider med læreplanverket, må du lage et verktøy som kan hjelpe deg med å teste endringene. Du kan benytte hvilket som helst alternativ i det under:

- Du kan [sette opp freeCodeCamp lokalt](how-to-setup-freecodecamp-locally.md). Dette anbefales **høyt** for jevnlige/gjentatte bidrag. Dette oppsettet lar deg jobbe og teste endringene.
- Bruk Gitpod, et gratis online utviklermiljø. Å klikke på knappen under vil starte et utvikler-til-kode utviklermiljø for freeCodeCamp i nettleseren. Det tar bare noen minutter.

  [![Åpne i Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Rediger filene i GitHubs grensesnitt ved å klikke på blyant-ikonet for den tilsvarende filen. Selv om dette er den raskeste måten, er det **ikke anbefalt**, fordi du ikke kan teste dine endringer på GitHub. Hvis våre vedlikeholdere konkluderer med at de endringene du har gjennomført, må testes lokalt, må du følge metodene ovenfor i stedet igjen.

## Utfordring Mal

Nedenfor finner du en mal av hvordan nedtrekksfilene ser ut til nå.  For å se den strømlinjeformede malen vil vi vedta å se [under](#upcoming-challenge-template).

````md
---
id: Unik identifikator (alfanumerisk, MongoDB_id)
title: Utfordringstittel
utfordringstype: 0
videoUrl: 'url of video explanation'
---

## Description

<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instruksjoner

<section id='instructions'>
Instruksjoner for hva som akkurat må gjøres.
</section>

## Tester

<section id='tests'>

```yml
tester:
  - tekst: Skal returnere "foo"
    testing: 'A stringified function possibly using Chai assers'
````

</section>

## Utfordre frø

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Kode vist i editoren som standard.

Dette er en nødvendig del for utfordringen.
```

</div>

### før test

<div id='{ext}-setup'>

```{ext}
Valgfri Test oppsettskode.
```

</div>

### Etter test

<div id='{ext}-teardown'>

```{ext}
Valgfri rivningskode.
```

</div>

</section>

## Løsning

<section id='solution'>

```{ext}
// solution required
```

</section>

````

> [!MERK]
>
> 1. I de ovennevnte kapitlene, eksempler på `{ext}` er:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. For avsnittene `Tester` ovenfor skal "tekst" og "teststring" gyldig YAML strenger. `testString` kan være en stringifisert funksjon eller uttrykk som kan bruke Chai hevder.

## Nummerering Utfordringer

Hver utfordring trenger en `id`. Hvis du ikke spesifiserer en, vil MongoDB lage en ny, tilfeldig en når den lagrer dataene; Men det vil vi ikke gjøre, siden vi vil at utfordringene skal være gjennomgående på tvers av ulike miljøer (trinn), produksjon, mange forskjellige utviklere osv.).

For å generere en ny i et skall (forutsetter at MongoDB kjører separat):

1. Kjør `mongo` kommandoen.
2. Kjør `ObjectId()`-kommandoen.

For eksempel:

```bash
$ mongo
MongoDB shell version v3.6.1
kobler til: mongodb://127.0.0.1:27017
MongoDB server versjon: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Resultatet er en ny id, for eksempel `5a474d78df58bafeb35d34` ovenfor.

Når du har din id, sett den i markdown filen som `id` feltet øverst, f.eks

```yml
---
id: 5a474d78df58bafeb3535d34
tittel: Utfordringtittel
```

## Navngi utfordringer

Å navngi ting er vanskelig. Vi har gjort det enklere ved å påføre noen begrensninger.

Alle utfordringstitler skal være eksplisitte og bør følge dette mønsteret:

\[verb\]\[objektseksjon\]

Her er noen eksempler på utfordringens navn:

- Bruk med urviseren merknader for å angi utfyllingen av et element
- Kondensere matriser med .reduce
- Bruk parentes notering for å finne First Character i en streng

## Instruksjoner om utfordring

Straffen skal være klar og konsist med minimalt jargon. Hvis jargon brukes, bør jargon være umiddelbart definert på ren engelsk.

Hold avsnittene kort (ca. 1–4 setninger). Folk har større sannsynlighet for å lese flere korte avsnitt enn en tekstmur.

Utfordringstekst bør bruke den andre personen ("deg") for å hjelpe til med å gi den en samtaletone. På den måten ser det ut til at teksten og instruksjonene kan komme direkte til kameraets arbeid gjennom utfordringen. Prøv å unngå å bruke den første personen ("I", "vi", "lets", og "us").

Ikke bruk utgående lenker. Disse avbryter gjennomstrømningen. Kampanjer bør aldri trenge å google noe under disse utfordringene. Dersom det er ressurser du tror kamperne vil ha nytte av, kan du legge dem til i guiderelatert artikkel.

Du kan legge til diagrammer hvis det er absolutt nødvendig.

Ikke bruk emojis eller uttrykksikoner i utfordringer. freeCodeCamp har et globalt samfunn, og kulturell betydning av en emoji eller uttrykksikon kan være annerledes i verden. emojis kan også vises annerledes på forskjellige systemer.

Korrekt stempling for dårlige tider bør brukes når det er mulig. Nedenfor følger en ordliste over ord som de skal vises i utfordringene.

- JavaScript (store bokstaver i "J" og "S" og ingen forkortelser)
- Node.js
- Front-end utvikling (adjektiv form med en bindestrek) er når du arbeider på forsiden (lunde form med ingen dash). Det samme går med "baken", "full stack", og mange andre forbindelser.

### Regelen på 2 minutter

Hver utfordring skal kunne løses innen 120 sekunder av en innebygd engelsk taler med utfordringer som har ført frem til dem. Dette inkluderer tiden det tar å lese anvisninger/instruksjoner forstår den tilsiktede koden, skriv sin egen kode og få alle testene til å passere.

Hvis det tar mer enn to minutter å fullføre utfordringen, har du to alternativer:

- Forenkle utfordringen, eller
- Splitt utfordringen i to utfordringer.

Trenden på 2 minutter tvinger deg til å få dine markeringer til å konsensurere, din frøkode og testene dine til å gå fortløpende.

Vi sporer hvor lang tid det tar før kameraene løser endringer, og bruker informasjonen til å identifisere utfordringer som må forenkles eller splittes.

### Moduler

Hver utfordring bør lære nøyaktig ett konsept, og dette begrepet skal framgå av navnet på utfordringen.

Vi kan forsterke tidligere konsepter gjennom repetisjon og variasjoner – for eksempel Hvis man introduserer h1 elementer i en utfordring, så h3 elementer noen utfordringer senere.

Vårt mål er å ha tusenvis av to minutters utfordringer. Dette kan flyte sammen og krysse tidligere dekkede konsepter.

### Formatering av oppgavetekst

Her er spesifikke formateringsretningslinjer for utfordringstekst og -eksempler:

- Søkeord for språk går i `<code>` tagger. For eksempel navn på HTML-tagg eller CSS egenskaper
- Den første forekomsten av et søkeord når det er definert, eller generelle nøkkelord (dvs. "objekt" eller "immutable") gå i `<dfn>` tagger
- Referanser til kodedeler (dvs. funksjon, metode eller variabelnavn) bør pakkes i `<code>` koder. Se eksempel nedenfor:
- Bruk <code>parseInt</code> for å konvertere variabelen <code>virkelig tall</code> til et heltall.
- Flerlinjekode blokker **må innledes med en tom linje**. Neste linje må starte med tre bakgrunner etterfulgt umiddelbart av et av et av de [støttede språkene](https://prismjs.com/#supported-languages). For å fullføre kodeblokken, må du starte en ny linje som bare har tre bakgrunner og **en annen tom linje**. **Merk:** Hvis du skal bruke en eksempelkode i YAML, bruk `yaml` i stedet for `yml` for språket til høyre for bakken.

Se eksempel nedenfor:

````md
Følgende er et eksempel på kode:

```{language}

[DIN KODE HER]

````
````

- Tilleggsinformasjon i form av en notat må formateres `<strong>Merk:</strong> Rest av notis tekst...
- Hvis flere notater trengs, før alle notatene i separate setninger via format `<strong>Notater:</strong> Første notattekst. Andre notattekst.`.
- Bruk doble sitater der relevant

## Skrive tester

Utfordringer bør ha det minste antallet tester som er nødvendig for å bekrefte at en camper forstår et konsept.

Vårt mål er å kommunisere det ene som er at utfordringen prøver å underlege, og teste at de har forstått det poenget.

Utfordringstester gjør bruk av Node.js og Chai.js hevder bibliotekene. Hvis nødvendig, kan også bruker-generert kode nås i variabelen `kode`.

## Formatering av hovedkoden

Her er spesifikke formateringsveiledninger for utfordringsnøkkeltallet:

- Bruk to mellomrom for å rykke inn
- Javascript-kommandoer mot slutten av en semikolon
- Bruk doble sitater der relevant
- Kommentarer som er laget burde ha et mellomrom mellom kommentaren og kommentaren

  `// Fix denne linjen`

## Hinker og Solutions

Hver utfordring har en `Få en Hint` knapp, slik at en bruker kan få tilgang til alle hint/løsninger som er laget for utfordringen. Emner for pensum hint/løsninger finnes på [vårt forum](https://forum.freecodecamp.org/c/guide) under 'Guide' kategorien.

Hvis du finner et problem med en eksisterende utfordrings hint/løsninger tema, kan du gjøre forslag i [contributors category](https://forum.freecodecamp.org/c/contributors) på forumet. Moderatorer og brukere med tillit nivå 3 vil gjennomgå kommentarene og avgjøre om de skal inkludere endringene i tilhørende hint/løsning.

### Legg til nye utfordring hint/løsninger Emner

Ta de følgende stegene i forbindelse med å legge til et nytt utfordringshin/løsninger relatert emne.

1. Begynn med å følge de samme trinnene for å opprette et nytt emne, men gå gjennom det neste for å opprette tittelen.
2. Tittelen på emnet skal starte med `freeCodeCamp Challenge Guide: ` samsvarer med den faktiske tittelen på pensum utfordringen. For eksempel, hvis utfordringen er kalt `Chunky Monkey`", vil emnetittelen være "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` bør være eier av disse emnene/innleggene, Du må derfor be om en admin for å endre eierskap av hovedinnlegget til `camperbot`.
4. Når det nye emnet er opprettet, opprettes forum emne-ID. Det ligger ved slutten av forum emne-URL. Denne Iden må legges til fronten til læreplanens utfordringsfil via den normale trekksprosessen for å få en Hint-knappen for å koble til emnet.

### Retningslinjer for innhold i tips og løsninger temaene

Når du foreslår en løsning for en læreplanrelatert guide hele koden må legges til. Alle endringer som trengs for å gjennomføre en utfordringscache er inkludert i denne artikkelen. Følgende mal bør brukes når du oppretter nye hint/løsninger emner:

``md
# Utfordringsnavn går Her

---

## Problem Explanation

Dette oppsummerer hva som må gjøres uten bare å oppgi beskrivelse og/eller instruksjoner. This is an optional section

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

Hint goes here

### Hint 2

Hint goes here

---

## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Forklaring på kode

- Det gis kodeforklaring her
- Det gis kodeforklaring her

#### Relevante lenker

- [Link Tekst](link_url_goes_here)
- [Link Tekst](link_url_goes_here)

</details>
````

## Tester utfordringer

før du [opprette en pull request](how-to-open-a-pull-request. d) for dine endringer, du må validere at endringene du har gjort, ikke medfører problemer med utfordringen på en utilsiktet. 

1. For å teste alle utfordringer kjør kommandoen under fra rotkatalogen

````
npm kjør prøving:pensum
``` 

2. Du kan også teste en blokk eller en utfordringscacher med disse kommandoene

```
npm kjøre test:curriculum --block='Basic HTML og HTML5'
```

```
npm kjøre test:curriculum --superblock=responsive-web-design
```

Du kan også teste én utfordring enkeltvis ved å utføre følgende trinn:

1. Bytt til mappen `curriculum`:

   ```
   cd pensum
   ```

2. Kjør følgende for hver utfordringsfil du har endret for:

   ```
   npm run test -- -g 'full English title of the challenge'
   ```

Når du har bekreftet at hver utfordring du har arbeidet på passerer testene, [vennligst lag en pull-forespørsel](https://github.com/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Du kan sette miljøvariabelen `LOCALE` i `.env` til språket i utfordringen(e) du må teste.
> 
> De akseptert verdiene er `english` og `chinese`, der `english` er satt som standard.

## Kommende utfordringsmal

Utfordringsmalen i prosessen med å bli oppdatert til en renere og mindre nestet struktur.  This has not been completely finalized, but the following should close to the final structure:

````mdx

---
id: Unique identifier (alphanumerical, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challengeTypes.js`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

import Script from './script.mdx';

## --step-description--

Description text, in markdown

```html
<div> 
  example code
</div>
```

## --trinn-hints--

![test-id-1]

Det vil være et vilkårlig antall antall antall aviser, instrukser (i markering) og kodeblokker.

```js
Kode for test én
```

![test-id-2]

Flere instruksjoner i markdown-syntaks

```js
Mer kode
```

## --trinnvis

### --before-user-code--

```lang
Kode vurdert før brukers
```

### --after-user-code--

```lang
Kode vurdert etter brukerne, og rett før testene
```

### --delt innhold--

![index-html]

```html
Noen html
```

```css
Noen CSS
```

```js
Noen js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution -marker-
</h1>



<p spaces-before="0">
  Eksakt det samme som i avsnittet frøene
</p>

<h2 spaces-before="0">
  --next-solution-markør
</h2>



<p spaces-before="0">
  Samme på nytt
</p>

<h1 spaces-before="0">
  --spørsmål-marker--
</h1>

<h2 spaces-before="0">
  --tekst-marker--
</h2>



<p spaces-before="0">
  Spørsmålet vil gå her (bare brukes til videoutfordringer)
</p>

<h2 spaces-before="0">
  --svars-marker--
</h2>



<p spaces-before="0">
  Svar 1
</p>

<hr />

<p spaces-before="0">
  Svar 2
</p>

<hr />

<p spaces-before="0">
  Svar 2
</p>

<h2 spaces-before="0">
  --solution -marker-
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Nyttige lenker
</h3>



<p spaces-before="0">
  Skape og redigere utfordringer:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Utfordringstyper</a> - hva den numeriske utfordringstypen betyr (nummer).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Bidrar til FreeCodeCamp - skrive ES6 Challenge Tests</a> - en video etter <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> da han bidrar til den gamle versjonen av pensum eller pensum.
    </p>
  </li>

</ol>

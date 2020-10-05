# Hvordan man arbejder på kodning udfordringer

Vores mål er at udvikle en sjov og klar interaktiv læringsoplevelse.

Det er vanskeligt at designe interaktive kodningsudfordringer. Det ville være meget lettere at skrive en lang forklaring eller at oprette en video tutorial, og der er et sted for dem på Medium og YouTube. Men for vores kerne pensum holder vi os til det, der virker bedst for de fleste mennesker - en fuldt interaktiv, videospil-lignende oplevelse.

Vi ønsker, at campister skal nå frem til en flydetilstand. Vi ønsker, at de skal bygge momentum og blast gennem vores pensum med så få snags som muligt. Vi ønsker, at de skal gå ind i projekterne med tillid og opnå en bred udsættelse for programmeringskoncepter.

At skabe disse udfordringer kræver enorm kreativitet og opmærksomhed på detaljer. Der er masser af hjælp til rådighed. Du vil have støtte fra et helt team af bidragsydere, til hvem du kan hoppe ideer ud og demo dine udfordringer. Bliv aktiv i [bidragsyderlokalet](https://gitter.im/freecodecamp/contributors) og stil masser af spørgsmål.

Med din hjælp kan vi designe en interaktiv kodning pensum, der vil hjælpe millioner af mennesker med at lære at kode i mange år fremover.

Indholdet for hver udfordring gemmes i sin egen markdown fil. Denne markdown fil konverteres senere til HTML ved hjælp af vores værktøjer til at oprette interaktive websider.

Du kan finde alt freeCodeCamp.org's curricular indhold i mappen [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Opsæt værktøjet til pensum

Før du arbejder på pensum, vil du nødt til at oprette nogle værktøjer til at hjælpe dig med at teste dine ændringer. Du kan bruge enhver mulighed fra nedenstående:

- Du kan [konfigurere freeCodeCamp lokalt](how-to-setup-freecodecamp-locally.md). Dette er **stærkt anbefalet** til regelmæssige/gentagne bidrag. Denne opsætning giver dig mulighed for at arbejde og teste dine ændringer.
- Brug Gitpod, et gratis online udviklermiljø. Hvis du klikker på knappen nedenfor, vil du starte et klar-til-kode udviklermiljø for freeCodeCamp i din browser. Det tager kun et par minutter.

  [![Åbn i Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Rediger filerne på GitHub interface ved at klikke på blyant-ikonet for den tilsvarende fil. Mens dette er den hurtigste måde, anbefales det **ikke**, fordi du ikke kan teste dine ændringer på GitHub. Hvis vores vedligeholdere konkluderer, at de ændringer, du har foretaget, skal testes lokalt, skal du følge metoderne ovenfor i stedet igen.

## Udfordring Skabelon

Nedenfor er en skabelon af, hvad udfordringen markdown filer ser ud i øjeblikket.  For at se den strømlinede skabelon vil vi vedtage se [nedenfor](#upcoming-challenge-template).

````md
---
id: Unik identifikator (alfanumerisk, MongoDB_id)
title: Challenge Titel
challengeType: 0
videoUrl: 'url of video explanation'
---

## Beskrivelse

<section id='description'>
A Beskrivelse af udfordringen og hvad der kræves for at bestå
</section>

## Instruktioner

<section id='instructions'>
Instruktioner om, hvad der præcist skal gøres.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - tekst: Skal returnere "foo"
    testString: 'En strenget funktion muligvis ved brug af Chai påstande'
````

</section>

## Udfordring Frø

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Kode, der vises i editoren som standard.

Dette er en nødvendig sektion for udfordringen.
```

</div>

### Før Test

<div id='{ext}-setup'>

```{ext}
Valgfri Test setup kode.
```

</div>

### Efter Test

<div id='{ext}-teardown'>

```{ext}
Valgfri Test rive ned kode.
```

</div>

</section>

## Løsning

<section id='solution'>

```{ext}
// løsning påkrævet
```

</section>

````

> [!BEMÆRK]
>
> 1. I ovenstående afsnit eksempler på `{ext}` er:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. For afsnittet `Tests` ovenfor skal `text` og `testString` være gyldige YAML strenge. `testString` kan være en streng funktion eller udtryk ved hjælp af hvilke kunne bruge Chai påstande.

## Nummerering Udfordringer

Hver udfordring har brug for en `id`. Hvis du ikke angiver en, så vil MongoDB oprette en ny tilfældig en når den gemmer data; dog ønsker vi ikke, at det skal gøre det, da vi ønsker, at udfordringen id'er skal være konsistente på tværs af forskellige miljøer (iscenesættelse, produktion, masser af forskellige udviklere mv.).

For at generere en ny i en shell (forudsat at MongoDB kører separat):

1. Kør `mongo` kommando.
2. Kør `ObjectId()` kommando.

For eksempel:

```bash
$ mongo
MongoDB shell version v3.6.1
forbinder til: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Resultatet er et nyt id, for eksempel `5a474d78df58bafeb3535d34` ovenfor.

Når du har dit id, skal du sætte det i markdown filen som `id` feltet øverst, f.eks.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Navngivning udfordringer

Det er svært at navngive tingene. Vi har gjort det lettere ved at pålægge nogle begrænsninger.

Alle challenge titler skal være eksplicitte og skal følge dette mønster:

\[verb\]\[objektklausul\]

Her er nogle eksempel challenge navne:

- Brug med uret Notation til at angive polstring af et element
- Kondensér arrays med .reduce
- Brug parentes Notation til at finde det første tegn i en streng

## Udfordring beskrivelser / instruktioner

Sætninger skal være klare og koncise med minimal jargon. Hvis det anvendes, skal jargon straks defineres på almindeligt engelsk.

Behold afsnit korte (omkring 1-4 sætninger). Det er mere sandsynligt, at folk læser flere korte afsnit end en tekstvæg.

Udfordringsteksten skal bruge den anden person ("dig") til at hjælpe med at give den en samtaletone. På denne måde synes teksten og instruktionerne at tale direkte med autocamperen om udfordringen. Prøv at undgå at bruge den første person ("I", "vi", "let's", og "os").

Brug ikke udgående links. Disse afbryder strømmen. Campers bør aldrig nødt til at google noget under disse udfordringer. Hvis der er ressourcer, du tror campister ville drage fordel af, skal du tilføje dem til udfordringens Guide-relaterede artikel.

Du kan tilføje diagrammer, hvis det er absolut nødvendigt.

Brug ikke emojis eller emotikoner i udfordringer. freeCodeCamp har et globalt fællesskab, og den kulturelle betydning af en emoji eller emotik kan være forskellig i hele verden. Også emojis kan gøre forskelligt på forskellige systemer.

Korrekte navneord bør bruge korrekt kapitalisering, når det er muligt. Nedenfor er en liste over ord, som de skal vises i udfordringerne.

- JavaScript (store bogstaver i "J" og "S" og ingen forkortelser)
- Node.js
- Front-end udvikling (adjektiv form med en bindestreg) er, når du arbejder på forsiden (noun form uden bindestreg). Det samme gælder med "back end", "full stack" og mange andre sammensatte udtryk.

### Reglen på 2 minutter

Hver udfordring skal løses inden for 120 sekunder af en indfødt engelsk taler, der har fuldført de udfordringer, der fører op til det. Dette omfatter den tid det tager at læse anvisningerne / instruktionerne forstå den seedede kode skrive deres egen kode og få alle tests til at passere.

Hvis det tager mere end to minutter at fuldføre udfordringen, har du to muligheder:

- Forenkle udfordringen, eller
- Opdel udfordringen i to udfordringer.

Den 2-minutters regel tvinger dig, udfordringen designer, at gøre dine retninger kortfattede, din seed kode klar, og dine tests ligetil.

Vi sporer, hvor lang tid det tager for campister at løse ændringer og bruge disse oplysninger til at identificere udfordringer, der skal forenkles eller splittes.

### Modularitet

Hver udfordring skal undervise i præcis ét koncept, og dette koncept skal fremgå af udfordringens navn.

Vi kan forstærke tidligere dækkede begreber gennem gentagelse og variationer - f.eks. indføre h1 elementer i én udfordring, derefter h3 elementer et par udfordringer senere.

Vores mål er at have tusindvis af 2-minutters udfordringer. Disse kan flyde sammen og gentage tidligere dækkede begreber.

### Formaterer challenge text

Her er specifikke formateringsretningslinjer for challenge tekst og eksempler:

- Sprog søgeord gå i `<code>` tags. For eksempel HTML tag navne eller CSS egenskabsnavne
- Den første udgave af et søgeord, når det er ved at blive defineret, eller generelle søgeord (dvs. "objekt" eller "uforanderlig") gå i `<dfn>` tags
- Henvisninger til kodedele (dvs. funktion, metode eller variabelnavne) skal indpakkes i `<code>` tags. Se eksemplet nedenfor:
- Brug <code>parseInt</code> til at konvertere variablen <code>realNumber</code> til et heltal.
- Multi-line code blocks **must be eded by a empty line**. Den næste linje skal starte med tre backticks efterfulgt straks af et af de [understøttede sprog](https://prismjs.com/#supported-languages). For at fuldføre kodeblokken, skal du starte en ny linje som kun har tre backticks og **en anden tom linje**. **Bemærk:** Hvis du vil bruge et eksempel kode i YAML, brug `yaml` i stedet for `yml` for sproget til højre for backticks.

Se eksemplet nedenfor:

````md
Følgende er et eksempel på kode:

```{language}

[DIN KODE HER]

````
````

- Yderligere oplysninger i form af en note bør formateres `<strong>Note:</strong> Resten af note text...
- Hvis der er behov for flere noter, listen derefter alle noter i separate sætninger ved hjælp af formatet `<strong>Noter:</strong> Første note tekst. Anden note tekst.«
- Brug dobbelte citater hvor det er relevant

## Skrivningstest

Udfordringer skal have det mindste antal test, der er nødvendige for at kontrollere, at en camper forstår et koncept.

Vores mål er at kommunikere det eneste punkt, som udfordringen forsøger at undervise, og afprøve, at de har forstået det.

Udfordringstest kan gøre brug af node.js og Chai.js påstand biblioteker. Også, hvis det er nødvendigt, brugergenereret kode kan tilgås i `code` variablen.

## Formatering af seed code

Her er specifikke retningslinjer for formatering af challenge seed code:

- Brug to mellemrum til at indrykke
- JavaScript udsagn slutter med et semikolon
- Brug dobbelte citater hvor det er relevant
- Kommentarer lavet skal have et mellemrum mellem kommentar tegn og kommentaren selv

  `// Fix this line`

## Tips and Solutions

Hver udfordring har en `Få en Hint` knap, så en bruger kan få adgang til alle hints/løsninger, der er blevet skabt til udfordringen. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

Hvis du finder et problem med en eksisterende challenge's hints/solutions emne, kan du stille forslag i [bidragsydere kategori] (https://forum.freecodecamp.org/c/contributors) på forummet. Moderatorer og brugere med tillidsniveau 3 vil gennemgå kommentarerne og beslutte, om de vil inkludere ændringerne i det tilsvarende hint/løsninger emne.

### Tilføjelse af nye Challenge hints/solutions Emner

Tag følgende skridt, når du tilføjer en ny challenge hints/solutions relateret emne.

1. Start med at følge de samme trin for at oprette et nyt emne, men gennemse det næste for at oprette titlen.
2. Titlen på emnet bør starte med `freeCodeCamp Challenge Guide: ` sammenkædet med den faktiske titel på curriculum challenge. For eksempel, hvis udfordringen hedder "`Chunky Monkey`", emnet titel ville være "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` skal være ejeren af disse emner/opslag så du bliver nødt til at anmode en admin til at ændre ejerskabet af hovedindlægget til `camperbot`.
4. Når det nye emne er oprettet, oprettes et forum topic id. Det er placeret i slutningen af forum topic URL. Dette id skal tilføjes til forsiden af curriculum challenge filen via den normale pull request proces for at få en Hint` knappen til at linke til emnet.

### Retningslinjer for indhold af hints og løsningsemner

Når du foreslår en løsning til et curriculum udfordringsrelateret guideemne den fulde kode skal tilføjes. Dette omfatter al den oprindelige seed kode plus eventuelle ændringer, der er nødvendige for at bestå alle challenge tests. Følgende skabelon skal bruges ved oprettelse af nye hints/solutions emner:

````md
# Challenge Name Goes Here

---

## Problem Forklaring

Dette opsummerer, hvad der skal gøres uden blot at gentage challenge beskrivelsen og/eller instruktionerne. Dette er et valgfrit afsnit

#### Relevante Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Tips

### Tip 1

Tip går her

### Tip 2

Tip går her

---

## Løsninger

<details><summary>Løsning 1 (Klik på Vis/Skjul)</summary>

``js
funktion myFunc() {
  konsol. og('Hej Verden!');
}
````

#### Kode Forklaring

- Kodeforklaring vises her
- Kodeforklaring vises her

#### Relevante Links

- [Link Tekst](link_url_goes_here)
- [Link Tekst](link_url_goes_here)

</details>
````

## Test Udfordringer

Før du [opret en pull request](how-to-open-a-pull-request. d) for dine ændringer, skal du validere at de ændringer, du har foretaget, ikke uforvarende forårsage problemer med udfordringen. 

1. For at teste alle challenges, køres kommandoen nedenfor fra rodmappen

````
npm kørselstest:curriculum
``` 

2. Du kan også teste en blok eller en superblok af udfordringer med disse kommandoer

```
npm run test: curriculum --block='Basic HTML og HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Du kan også teste en udfordring individuelt ved at udføre følgende trin:

1. Skift til 'curriculum'-mappen:

   ```
   cd- pensum
   ```

2. Kør følgende for hver challenge fil, som du har ændret:

   ```
   npm run test -- -g 'den fulde engelske titel på udfordringen'
   ```

Når du har bekræftet, at hver challenge du har arbejdet på består testene, [opret venligst en pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Du kan indstille miljøvariablen `LOKALE` i `.env` til sproget i den eller de udfordringer, du skal teste.
> 
> De aktuelt accepterede værdier er `english` og `chinese`, hvor `english` sættes som standard.

## Kommende Udfordringsskabelon

Udfordringsskabelonen i processen med at blive opdateret til en renere, mindre indlejret struktur.  Dette er ikke fuldstændigt afsluttet, men følgende skal være tæt på den endelige struktur:

````mdx

---
id: Unik identifikator (alfanumerisk, MongoDB_id)
titel: 'Challenge Title'
challengeType: Integer, defineret i 'client/utils/challengeTypes. s`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

import Script fra './script. dx';

## --step-description--

Beskrivelse tekst, i markdown

```html
<div> 
  eksempel kode
</div>
```

## --step-hints--

![test-id-1]

Der vil være et vilkårligt antal tripler af id'er, instruktioner (i markdown) og kodeblokke.

```js
Kode for test 1
```

![test-id-2]

Flere instruktioner i markdown syntaks

```js
Mere kode
```

## -- step-seed--

### --før-bruger-kode--

```lang
Kode evalueret før brugerens
```

### --after-user-code--

```lang
Kode evalueret efter brugeren, og lige før testene
```

### --seed-content--

![index-html]

```html
Nogle html
```

```css
Nogle css
```

```js
Nogle js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  Præcis det samme som sektionen med frø
</p>

<h2 spaces-before="0">
  -- next-solution-marker
</h2>



<p spaces-before="0">
  Samme igen
</p>

<h1 spaces-before="0">
  -- question-marker--
</h1>

<h2 spaces-before="0">
  -- text-marker--
</h2>



<p spaces-before="0">
  Spørgsmålet ville gå her (bruges kun til videoudfordringer)
</p>

<h2 spaces-before="0">
  --answers-marker--
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
  --solution-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Nyttige Links
</h3>



<p spaces-before="0">
  Oprettelse og redigering udfordringer:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Challenge typer</a> - hvad den numeriske challenge type værdier betyder (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Bidrag til FreeCodeCamp - Skrive ES6 Challenge Tests</a> - en video følgende <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> , da han bidrager til den gamle version af pensum.
    </p>
  </li>

</ol>

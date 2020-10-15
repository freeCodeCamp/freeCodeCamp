# Hur man arbetar med kodningsutmaningar

Vårt mål är att utveckla en rolig och tydlig interaktiv inlärningsupplevelse.

Det är svårt att utforma interaktiva kodningsutmaningar. Det skulle vara mycket lättare att skriva en lång förklaring eller att skapa en video tutorial, och det finns en plats för dem på Medium och YouTube. Men för vår grundläggande läroplan håller vi fast vid det som fungerar bäst för de flesta människor - en helt interaktiv, spelliknande upplevelse.

Vi vill att campare ska uppnå ett flödestillstånd. Vi vill att de ska bygga fart och spränga genom vår läroplan med så få hakar som möjligt. Vi vill att de ska gå in i projekten med tillförsikt och få en bred exponering för programmeringskoncept.

Att skapa dessa utmaningar kräver enorm kreativitet och detaljrikedom. Det finns gott om hjälp. Du har stöd från ett helt team av bidragsgivare som du kan studsa idéer och demo dina utmaningar. Håll dig aktiv i [bidragsgivarens rum](https://gitter.im/freecodecamp/contributors) och ställ massor av frågor.

Med din hjälp kan vi utforma en interaktiv kodning läroplan som kommer att hjälpa miljontals människor lära sig att koda för många år framöver.

Innehållet för varje utmaning lagras i sin egen markdown-fil. Denna markdown fil konverteras senare till HTML med hjälp av våra verktyg för att skapa interaktiva webbsidor.

Du hittar allt av freeCodeCamp.orgs läroplansinnehåll i katalogen [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Ställ in verktyg för läroplanen

Innan du arbetar med läroplanen skulle du behöva ställa in verktyg för att hjälpa dig att testa dina ändringar. Du kan använda valfritt alternativ nedan:

- Du kan [ställa in freeCodeCamp lokalt](how-to-setup-freecodecamp-locally.md). Detta rekommenderas **starkt** för reguljära/upprepa bidrag. Denna inställning låter dig arbeta och testa dina ändringar.
- Använd Gitpod, en gratis online dev-miljö. Om du klickar på knappen nedan startar du en miljö som är redo att koda dev för freeCodeCamp i din webbläsare. Det tar bara några minuter.

  [![Öppna i Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Redigera filerna på GitHubs gränssnitt genom att klicka på pennikonen för motsvarande fil. Även om detta är det snabbaste sättet, Det är **rekommenderas inte**, eftersom du inte kan testa dina ändringar på GitHub. Om våra utvecklare drar slutsatsen att de ändringar som ni gjorde måste testas lokalt skulle ni istället behöva följa metoderna ovan igen.

## Utmaningsmall

Nedan finns en mall för hur de utmanade markdown-filerna ser ut för närvarande.  För att se den strömlinjeformade mallen kommer vi att anta [under](#upcoming-challenge-template).

````md
---
id: Unik identifierare (alfanumeriska, MongoDB_id)
titel: Utmaningstitel
challengeTyp: 0
videoUrl: 'Url of video förklaring'
---

## Beskrivning

<section id='description'>
En beskrivning av utmaningen och vad som krävs för att klara
</section>

## Instruktioner

<section id='instructions'>
Instruktioner om exakt vad som behöver göras.
</section>

## Tester

<section id='tests'>

```yml
tests:
  - text: Bör returnera "foo"
    testString: 'En strängifierad funktion möjligen med Chai asserts'
````

</section>

## Utmaning Frö

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Koden som visas i redigeraren som standard.

Detta är ett obligatoriskt avsnitt för utmaningen.
```

</div>

### Före testet

<div id='{ext}-setup'>

```{ext}
Valfri konfigurationskod.
```

</div>

### Efter testet

<div id='{ext}-teardown'>

```{ext}
Valfri testkod för rivning.
```

</div>

</section>

## Lösning

<section id='solution'>

```{ext}
// lösning krävs
```

</section>

````

> [!OBS]
>
> 1. I de ovan nämnda avsnitten, exempel på `{ext}` är:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. För avsnittet `Tests` ovan, `text` och `testString` ska vara giltiga YAML-strängar. `testString` kan vara en strängad funktion eller uttryck som använder sig av Chai påståenden.

## Numreringsutmaningar

Varje utmaning behöver en `id`. Om du inte anger en, då kommer MongoDB att skapa en ny slumpmässig när den sparar data; Men vi vill inte att det ska göra det, eftersom vi vill att utmaningen id ska vara konsekvent i olika miljöer (mellanlagring, produktion, massor av olika utvecklare, etc.).

För att generera en ny i ett skal (förutsatt att MongoDB körs separat):

1. Kör `mongo`-kommandot.
2. Kör kommandot `ObjectId()` .

Till exempel:

```bash
$ mongo
MongoDB shell version v3.6.1
ansluter till: mongodb://127.0.0.1:27017
MongoDB serverversion: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Resultatet är ett nytt id, till exempel `5a474d78df58bafeb353535d34` ovan.

När du har ditt ID, lägg det i markdown filen som `-id` fältet högst upp, t.ex.

```yml
---
id: 5a474d78df58bafeb3535d34
titel: Utmaningstitel
```

## Namnge utmaningar

Att namnge saker är svårt. Vi har gjort det lättare genom att införa vissa begränsningar.

Alla utmaningstitlar bör vara explicita och bör följa detta mönster:

\[verb\]\[objektklausul\]

Här är några exempel på utmaningar:

- Använd Clockwise Notation för att ange utfyllnad av ett element
- Kondensera matriser med .reduce
- Använd Bracket Notation för att hitta den första karaktären i en sträng

## Utmaningsbeskrivningar/instruktioner

Meningar bör vara tydliga och koncisa med minimal jargong. Om användning, ska jargong omedelbart definieras i vanlig engelska.

Håll paragraferna korta (ca 1-4 meningar). Folk är mer benägna att läsa flera korta stycken än en vägg av text.

Utmaningstexten ska använda den andra personen ("du") för att hjälpa till att ge den en konversationston. På så sätt verkar texten och instruktionerna tala direkt med husbilen som arbetar genom utmaningen. Försök att undvika att använda den första personen ("jag", "vi", "låtar" och "oss").

Använd inte utgående länkar. Dessa avbryter flödet. Campare bör aldrig behöva google något under dessa utmaningar. Om det finns resurser som du tror att campare skulle dra nytta av, lägg till dem i utmaningen Guide-relaterade artikel.

Du kan lägga till diagram om det är absolut nödvändigt.

Använd inte emojis eller emoticons i utmaningar. freeCodeCamp har ett globalt samhälle, och den kulturella betydelsen av en emoji eller emoticon kan vara annorlunda runt om i världen. Dessutom kan emojis göra olika på olika system.

Korrekt substantiv bör använda korrekt kapitalisering när det är möjligt. Nedan följer en lista med ord som de ska visas i utmaningarna.

- JavaScript (stora bokstäver i "J" och "S" och inga förkortningar)
- Node.js
- Fram-end utveckling (adjektiv form med en streck) är när du arbetar på den främre änden (substantiv form utan streck). Samma sak gäller med "back end", "full stack", och många andra sammansatta termer.

### 2-minutersregeln

Varje utmaning bör vara lösbar inom 120 sekunder av en engelskspråkig person som har slutfört de utmaningar som leder fram till den. Detta inkluderar hur lång tid det tar att läsa riktningarna/instruktionerna förstår den fröiga koden, skriva sin egen kod och få alla tester att passera.

Om det tar längre tid än två minuter att slutföra utmaningen, har du två alternativ:

- Förenkla utmaningen eller
- Dela upp utmaningen i två utmaningar.

2-minutersregeln tvingar dig, utmaningskonstruktören, att göra dina riktningar koncis, din frö kod tydlig och dina tester rakt framåt.

Vi spårar hur lång tid det tar för campare att lösa förändringar och använder denna information för att identifiera utmaningar som behöver förenklas eller delas.

### Modularitet

Varje utmaning ska lära ut exakt ett begrepp, och det konceptet ska framgå av utmaningens namn.

Vi kan förstärka tidigare täckta koncept genom repetition och variationer - till exempel introducera h1 element i en utmaning, sedan h3 element några utmaningar senare.

Vårt mål är att ha tusentals utmaningar på 2 minuter. Dessa kan flöda samman och upprepa tidigare täckta begrepp.

### Formatering av utmaningstext

Här är specifika formateringsriktlinjer för utmaningstext och exempel:

- Språkets sökord går in `<code>` taggar. Till exempel namn på HTML-taggar eller CSS-egenskapsnamn
- Första instansen av ett nyckelord när det definieras, eller allmänna nyckelord (dvs "objekt" eller "oföränderlig") går in `<dfn>` taggar
- Referenser till koddelar (t.ex. funktion, metod eller variabelnamn) ska vara inslagna i `<code>` taggar. Se exempel nedan:
- Använd <code>parseInt</code> för att konvertera variabeln <code>realNumber</code> till ett heltal.
- Flerraders kodblock **måste föregås av en tom rad**. Nästa rad måste börja med tre backticks följt omedelbart av ett av de [språk som stöds](https://prismjs.com/#supported-languages). För att slutföra kodblocket, måste du starta en ny rad som bara har tre backticks och **en annan tom rad**. **Obs:** Om du ska använda en exempelkod i YAML, använd `yaml` istället för `yml` för språket till höger om backticks.

Se exempel nedan:

````md
Följande är ett exempel på kod:

```{language}

[DIN KOD HÄR]

````
````

- Ytterligare information i form av en anteckning ska formateras `<strong>Obs:</strong> Resten av anteckningstext...
- Om flera anteckningar behövs, lista sedan alla anteckningar i separata meningar med formatet `<strong>Anteckningar:</strong> Första anteckningstexten. Andra anteckningen text.`.
- Använd dubbla citat där det är tillämpligt

## Skrivtester

Utmaningar bör ha det minsta antal tester som krävs för att verifiera att en husbil förstår ett koncept.

Vårt mål är att kommunicera den enda punkt som utmaningen försöker lära ut, och testa att de har förstått den punkten.

Utmaningstester kan använda sig av Node.js och Chai.js påståendebibliotek. Dessutom, om det behövs, kan användargenererad kod nås i `kod`-variabeln.

## Formatera seed code

Här är specifika formateringsriktlinjer för challenge seed code:

- Använd två mellanslag för att indentera
- JavaScript-satser slutar med en semikolon
- Använd dubbla citat i förekommande fall
- Kommentarer gjorda bör ha ett mellanslag mellan kommentartecknen och kommentaren själva

  `// Fix this line`

## Tips och lösningar

Varje utmaning har en `Get a Hint`-knapp, så att en användare kan komma åt alla ledtrådar / lösningar som har skapats för utmaningen. Ämnen för kursplan/lösningar finns på [vårt forum](https://forum.freecodecamp.org/c/guide) under kategorin "Guide".

Om du hittar ett problem med en befintlig utmanings ledtråd, kan du komma med förslag i kategorin [bidragsgivare] (https://forum.freecodecamp.org/c/bidragsgivare) på forumet. Moderatorer och användare med förtroendenivå 3 kommer att granska kommentarerna och avgöra om de ska inkludera ändringarna i motsvarande tips/lösningsämne.

### Lägga till nya Challenge-tips/-lösningar Ämnen

Ta följande steg när du lägger till ett nytt utmaningstips/-relaterat ämne.

1. Börja med att följa samma steg för att skapa ett nytt ämne men granska nästa för att skapa titeln.
2. Titeln på ämnet bör börja med `freeCodeCamp Challenge Guide: ` sammanfogade med den faktiska titeln på läroplanens utmaning. Till exempel, om utmaningen heter "`Chunky Monkey`", skulle ämnestiteln vara "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` bör vara ägaren till dessa ämnen/inlägg, så måste du be en administratör att ändra äganderätten till huvudinlägget till `camperbot`.
4. När det nya ämnet har skapats, skapas ett forumämne-id. Den ligger i slutet av forumets ämne URL. Detta id måste läggas till frontmaterien i kursplanens utmaningsfil via den normala pull-förfrågan processen för `Get a Hint`-knappen för att länka till ämnet.

### Riktlinjer för innehåll av ledtrådar och lösningar

När man föreslår en lösning för ett kursplaneringsrelaterat ämne den fullständiga koden måste läggas till. Detta inkluderar all den ursprungliga seed koden plus alla ändringar som behövs för att klara alla Challenge-tester. Följande mall ska användas för att skapa nya ledtrådar/lösningar:

````md
# Utmaningsnamn går här

---

## Problemförklaring

Detta sammanfattar vad som behöver göras utan att bara upprepa utmaningsbeskrivningen och/eller instruktionerna. Detta är ett valfritt avsnitt

#### Relevanta länkar

- [Länk Text](link_url_goes_here)
- [Länk Text](link_url_goes_here)

---

## Tips

### Tips 1

Tips går här

### Tips 2

Tips går här

---

## Lösningar

<details><summary>Lösning 1 (Klicka för att visa/dölja)</summary>

```js
function myFunc() {
  konsol. og('Hej världen!');
}
````

#### Kod Förklaring

- Kod förklaring går här
- Kod förklaring går här

#### Relevanta länkar

- [Länk text](link_url_goes_here)
- [Länk text](link_url_goes_here)

</details>
````

## Testa utmaningar

Innan du [skapa en pull-request](how -to-open-a-pull-request. d) för dina ändringar måste du bekräfta att de ändringar du gjort inte oavsiktligt orsakar problem med utmaningen. 

1. För att testa alla utmaningar kör kommandot nedan från rotkatalogen

````
npm köra test: läroplan
``` 

2. Du kan också testa ett block eller ett superblock av utmaningar med dessa kommandon

```
npm kör test: läroplan --block='Grundläggande HTML och HTML5'
```

```
npm kör test: läroplan --superblock=responsive-web-design
```

Du kan också testa en utmaning individuellt genom att utföra följande steg:

1. Växla till katalogen 'läroplan' :

   ```
   CD-läroplan
   ```

2. Kör följande för varje utmaningsfil som du har ändrat på:

   ```
   npm run test – -g 'utmaningens fullständiga engelska titel'
   ```

När du har verifierat att varje utmaning som du har arbetat med klarar testerna, skapa en pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Du kan ställa in miljövariabeln `LOCALE` i `.env` till språket i utmaningen du behöver för att testa.
> 
> De för närvarande accepterade värdena är `english` och` chinese`, med `english` som standard.

## Kommande Challenge-mall

Utmaningsmallen som håller på att uppdateras till en renare, mindre nästlad struktur.  Detta har inte slutförts helt, men följande bör nära den slutliga strukturen:

````mdx

---
id: Unik identifierare (alfanumeriska, MongoDB_id)
titel: 'Challenge Title'
challengeTyp: Integer, definierat i 'client/utils/challengeTypes. s`
videoUrl: 'Url of video förklaring'
forumÄmnesId: 12345
---

importera skript från './script. dx';

## --step-description--

Beskrivning text, i markdown

```html
<div> 
  exempel kod
</div>
```

## --steg-ledtrådar--

![test-id-1]

Det kommer att finnas ett godtyckligt antal tripletter av ids, instruktioner (i markdown) och kodblock.

```js
Kod för test en
```

![test-id-2]

Fler instruktioner i markdown syntax

```js
Mer kod
```

## --step-seed--

### --before-user-code--

```lang
Koden utvärderades före användarens
```

### --after-user-code--

```lang
Koden utvärderas efter användaren, och strax före testerna
```

### --seed-innehåll--

![index-html]

```html
Lite html
```

```css
Lite css
```

```js
Vissa js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  Exakt samma som frön sektionen
</p>

<h2 spaces-before="0">
  --nästa-lösning-markör
</h2>



<p spaces-before="0">
  Samma igen
</p>

<h1 spaces-before="0">
  --question-marker--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  Frågan skulle gå hit (används endast för videoutmaningar)
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
  Användbara länkar
</h3>



<p spaces-before="0">
  Skapa och redigera utmaningar:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Utmaningstyper</a> - vad de numeriska utmaningstyperna betyder (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Bidra till FreeCodeCamp - Skriva ES6 Challenge Tests</a> - en video som följer <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> eftersom han bidrar till den gamla versionen av läroplanen.
    </p>
  </li>

</ol>

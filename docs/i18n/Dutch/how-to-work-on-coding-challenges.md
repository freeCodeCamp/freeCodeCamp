# Hoe te werken aan coderingsuitdagingen

Ons doel is het ontwikkelen van een leuke en heldere interactieve leerervaring.

Het ontwerpen van interactieve coderingsuitdagingen is moeilijk. Het zou veel gemakkelijker zijn om een lange uitleg te schrijven of een video tutorial te maken, en er is een plaats voor degenen op Medium en YouTube. Voor ons core curriculum houden we echter vast aan wat het beste werkt voor de meeste mensen - een volledig interactieve video game-achtige ervaring.

Wij willen dat de campers een toestroom krijgen. We willen dat ze impulsen geven en ons curriculum met zo weinig mogelijk nagels doorblazen. Wij willen dat zij met vertrouwen aan de projecten deelnemen en zich in ruime mate blootstellen aan programmeringsconcepten.

Het aangaan van deze uitdagingen vereist enorme creativiteit en zorgvuldigheid. Er is genoeg hulp beschikbaar. Je zult steun hebben van een heel team van bijdragers aan wie je ideeën kunt afstoten en je uitdagingen kunt demonstreren. Blijf actief in de [bijdragers kamer](https://gitter.im/freecodecamp/contributors) en stel veel vragen.

Met uw hulp kunnen we een interactief leerplan ontwerpen waarmee miljoenen mensen nog jaren leren programmeren.

De inhoud voor elke challenge wordt opgeslagen in zijn eigen markdown bestand. Dit markdown bestand wordt later geconverteerd naar HTML met behulp van onze tools om interactieve webpagina's te maken.

U vindt alle curriculaire inhoud in de map [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) map.

## Stel de tooling voor het curriculum in

Voordat je aan het curriculum werkt, moet je eerst wat gereedschap instellen om je wijzigingen te helpen testen. U kunt elke optie gebruiken vanuit onderstaande opties:

- U kunt [het freeCodeCamp lokaal instellen](how-to-setup-freecodecamp-locally.md). Dit wordt **sterk aanbevolen** voor reguliere / herhaal bijdragen. Met deze instelling kunt u uw wijzigingen testen en werken.
- Gebruik Gitpod, een gratis online dev omgeving. Door op de knop hieronder te drukken start je een kant-en-klare dev omgeving voor freeCodeCamp in je browser. Het duurt maar een paar minuten.

  [![Openen in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Bewerk de bestanden op de interface van GitHub door te klikken op het potloodpictogram voor het corresponderende bestand. Hoewel dit de snelste manier is, wordt het **niet aanbevolen**, omdat u uw wijzigingen niet kunt testen op GitHub. Als onze onderhouders tot de conclusie komen dat de wijzigingen die je hebt aangebracht lokaal getest moeten worden, moet je in plaats daarvan de bovenstaande methoden opnieuw volgen.

## Uitdaging sjabloon

Hieronder is een sjabloon van hoe de markdown bestanden er op dit moment uitzien.  Om de gestroomlijnde sjabloon te zien, zien we [hieronder](#upcoming-challenge-template).

````md
---
id: Unieke identificatie (alfanumeriek), MongoDB_id)
titel: Challenge titel
challengeType: 0
videoUrl: 'url of video uitleg'
---

## Beschrijving

<section id='description'>
Een beschrijving van de uitdaging en wat nodig is om te doorlopen
</section>

## Instructies

<section id='instructions'>
instructies over wat precies gedaan moet worden.
</section>

## Testen

<section id='tests'>

```yml
tests:
  - Tekst: Moet "foo"
    testString: 'Een stringified function mogelijk met Chai asserts'
````

</section>

## Zaad Uitdaging

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code wordt standaard in de editor weergegeven.

Dit is een vereist onderdeel voor de uitdaging.
```

</div>

### Voor de test

<div id='{ext}-setup'>

```{ext}
Optionele Test setup code.
```

</div>

### Na de test

<div id='{ext}-teardown'>

```{ext}
Optionele Test demonteer code.
```

</div>

</section>

## Oplossing

<section id='solution'>

```{ext}
// oplossing vereist
```

</section>

````

> [!NOT]
>
> char@@1. In de bovenstaande secties, voorbeelden van `{ext}` zijn:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Voor de `Tests` sectie hierboven, `text` en `testString` moeten geldige YAML strings zijn. `testString` kan een stringified function of expression zijn met behulp van Chai asserts.

## Nummering Challenges

Elke uitdaging heeft een `id` nodig. Als je er geen specificeert dan zal MongoDB een nieuwe willekeurige aanmaken wanneer het de data opslaat; We willen echter niet dat het dat doet, omdat we willen dat de uitdaging in verschillende omgevingen consistent is (stagnering, productie, veel verschillende ontwikkelaars, etc.).

Genereren van een nieuwe in een shell (ervan uitgaande dat MongoDB apart wordt uitgevoerd):

1. Voer `mongo` commando uit.
2. Voer het `ObjectId()` commando uit.

Bijvoorbeeld:

```bash
$ mongo
MongoDB shell version v3.6.1
verbinding naar: mongodb://127.0.0.1:27017
MongoDB server versie: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Het resultaat is een nieuw id, bijvoorbeeld `5a474d78df58bafeb3535d34` hierboven.

Zodra je ID hebt, plaats het in het Markdown bestand als het `id` veld bovenaan, bv.

```yml
---
id: 5a474d78df58bafeb3535d34
titel: Challenge Titel
```

## Naamgeving uitdagingen

De benaming is moeilijk. We hebben het makkelijker gemaakt door enkele beperkingen op te leggen.

Alle titels van challenge moeten expliciet zijn en dit patroon volgen:

\[verb\]\[object clause\]

Hier zijn enkele voorbeeld van challenge namen:

- Gebruik klok om de opvulling van een element op te geven
- Condenserende arrays met .reduce
- Gebruik Haak-Notatie om de Eerste Karakter in een String te vinden

## Uitdaging beschrijving/instructies

Zinnen moeten duidelijk en beknopt zijn met minimaal jargon. Als het gebruikt wordt moet het jargon onmiddellijk in gewoon Engels gedefinieerd worden.

Houd alinea's kort (ongeveer 1-4 zinnen). Mensen lezen waarschijnlijk meer een paar korte alinea's dan een muur tekst.

Uitdagingstekst moet de tweede persoon ("jij") gebruiken om te helpen om er een gesprekstoon aan te geven. Op deze manier lijken de tekst en de instructies rechtstreeks tot de camper te spreken die de uitdaging doorwerkt. Probeer te voorkomen dat je de eerste persoon ("I", "wij", "let's" en "us" moet gebruiken.

Gebruik geen uitgaande links. Deze onderbreken de stroom. Campers zouden nooit iets hoeven te googlen tijdens deze uitdagingen. Als er bronnen zijn waarvan je denkt dat campers er baat bij hebben, voeg ze dan toe aan het handleidingsartikel van de uitdaging.

U kunt diagrammen toevoegen als dit absoluut noodzakelijk is.

Gebruik geen emojis of emoticons in uitdagingen. freeCodeCamp heeft een wereldwijde gemeenschap en de culturele betekenis van een emoji of emoticon kan verschillend zijn over de hele wereld. Ook kunnen emojis op verschillende systemen verschillend renderen.

Proper nouns moet de juiste hoofdletters gebruiken wanneer dat mogelijk is. Hieronder staat een lijst met woorden zoals ze in de uitdagingen zouden moeten verschijnen.

- JavaScript (hoofdletters in "J" en "S" en geen afkortingen)
- Node.js
- Front-end ontwikkeling (adjectief formulier met een dash) is wanneer je op de voorkant werkt (noun formulier zonder dash). Hetzelfde geldt voor "back end", "full stack" en vele andere samengestelde voorwaarden.

### De 2 minuten regel

Elke uitdaging zou binnen 120 seconden moeten worden opgelost door een moedertaalspreker die de uitdagingen die eraan ten grondslag liggen heeft voltooid. Dit omvat de tijd die nodig is om de richtingen/instructies te lezen om de code te begrijpen schrijf hun eigen code en laat alle tests passeren.

Als het langer dan twee minuten duurt om de uitdaging te voltooien, hebt u twee opties:

- Vereenvoudig de uitdaging, of
- Splits de uitdaging in twee uitdagingen.

De 2 minuten regel dwingt jou, de uitdagingontwerper, om je richtingsbeknopt, je zaadcode duidelijk te maken en je testen recht vooruit.

We volgen hoe lang het duurt voordat campers veranderingen oplossen en deze informatie gebruiken om uitdagingen te identificeren die vereenvoudigd of verdeeld moeten worden.

### Modulariteit

Elke uitdaging zou precies één concept moeten onderwijzen, en dat concept moet blijken uit de naam van de uitdaging.

We kunnen eerder behandelde concepten versterken door herhaling en variaties - bijvoorbeeld introduceer h1 elementen in één uitdaging, h3 elementen later een paar uitdagingen

Ons doel is om duizenden tweedaagse uitdagingen te hebben. Deze kunnen samenvloeien en er is nog eens sprake van eerder gedekte concepten.

### Formatteer challenge tekst

Hier zijn specifieke opmaak richtlijnen voor challenge tekst en voorbeelden:

- Taal trefwoorden gaan in `<code>` tags. Bijvoorbeeld, namen van HTML-tag of CSS-eigenschappen
- De eerste instantie van een trefwoord wanneer het wordt gedefinieerd, of algemene trefwoorden (bijv. "object" of "immutable") gaan over `<dfn>` tags
- Referenties naar coderen onderdelen (bijvoorbeeld functie, methode of variabelenamen) moeten worden verpakt in `<code>` tags. Zie voorbeeld hieronder:
- Gebruik <code>parseInt</code> om de variabele <code>realNumber</code> om te zetten in een geheel getal.
- Multi-regel codeblokken **moeten worden voorafgegaan door een lege regel**. De volgende regel moet beginnen met drie achtergronden die onmiddellijk gevolgd worden door een van de [ondersteunde talen](https://prismjs.com/#supported-languages). Om het codeblok te voltooien, moet je een nieuwe regel starten die slechts drie backticks en **een andere lege regel** heeft. **Opmerking:** Als je een voorbeeldcode in YAML gaat gebruiken, gebruik `yaml` in plaats van `yml` voor de taal rechts van de backticks.

Zie voorbeeld hieronder:

````md
Het volgende is een voorbeeld van code:

```{language}

[UW CODE HERE]

````
````

- Aanvullende informatie in de vorm van een notitie moet worden geformatteerd `<strong>Opmerking:</strong> Rest van notitie tekst...
- Als er meerdere notities nodig zijn dan de lijst van alle notities in aparte zinnen met behulp van het formaat `<strong>notities:</strong> Eerste notitie tekst. Tweede notitie tekst.`.
- Gebruik dubbele aanhalingstekens van toepassing

## Schrijftesten

Uitdagingen moeten het minimum aantal tests hebben dat nodig is om te verifiëren dat een camper een concept begrijpt.

Ons doel is om het enige punt te communiceren dat de uitdaging probeert te leren en te testen dat zij dat punt hebben begrepen.

Uitdaging tests kunnen gebruik maken van de Node.js en Chai.js assertie bibliotheken. En, indien nodig, kan de door de gebruiker gegenereerde code geopend worden in de variabele `code`.

## Opmaak seed code

Hier zijn specifieke formattering richtlijnen voor de challenge seed code:

- Gebruik twee spaties om te inspringen
- JavaScript stellingen eindigen met een puntkomma
- Gebruik dubbele aanhalingstekens van toepassing,
- Commentaren moeten een spatie hebben tussen de reactietekens en de reactie zelf

  `// Deze lijn oplossen`

## Hints en Solutions

Elke uitdaging heeft een `Get a Hint` knop. dus een gebruiker heeft toegang tot alle hints/oplossingen die zijn gemaakt voor de challenge. Onderwerpen voor curriculumhints/oplossingen bevinden zich op [ons forum](https://forum.freecodecamp.org/c/guide) onder de categorie 'Guide'.

Als je een probleem vindt met een bestaand challenge's hints/oplossingen onderwerp, kun je suggesties doen in de [contributors categorie](https://forum.freecodecamp.org/c/contributors) op het forum. Moderators en gebruikers met trust level 3 zullen de reacties beoordelen en beslissen of de wijzigingen al dan niet in het bijbehorende hint/oplossingen onderwerp worden opgenomen.

### Toevoegen van nieuwe Uitdaging hints/oplossingen Onderwerpen

Neem de volgende stappen bij het toevoegen van een nieuwe challenge hints/oplossingen gerelateerd onderwerp.

1. Begin met dezelfde stappen voor het maken van een nieuw onderwerp, maar bekijk de volgende stappen voor het maken van de titel.
2. De titel van het onderwerp moet beginnen met `freeCodeCamp Challenge Guide: ` samengevoegd met de werkelijke titel van de curriculum challenge. Bijvoorbeeld, als de uitdaging "`Chunky Monkey`" heet, zou de titel van de topic "`freeCodeCamp Challenge Guide: Chunky Monkey`" zijn.
3. `camperbot` moet de eigenaar zijn van deze topics/posts, dus moet je een beheerder vragen om het hoofdbericht te veranderen naar `camperbot`.
4. Zodra het nieuwe onderwerp is aangemaakt, is er een forumonderwerp-id gemaakt. Het bevindt zich op het einde van de URL van het forumonderwerp. Deze id moet worden toegevoegd aan de frontmatter van het curriculum challenge bestand via het normale pull request proces voor de `Get a Hint` knop om naar het onderwerp te linken.

### Richtsnoeren voor de inhoud van hints en oplossingen topics

Wanneer u een oplossing voorstelt voor een curriculumuitdaging gerelateerd onderwerp de volledige code moet worden toegevoegd. Dit omvat alle originele seed code plus eventuele wijzigingen die nodig zijn om te slagen voor alle challenge tests. De volgende sjabloon moet worden gebruikt bij het maken van nieuwe hints/oplossingen topics:

``md
# Challenge Name Goes Here

---

## Probleemuitleg

Dit vat samen wat er moet worden gedaan zonder de beschrijving en/of instructies van de uitdaging opnieuw te geven. This is an optional section

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

#### Code uitleg

- Code-uitleg komt hier
- Code-uitleg komt hier

#### Relevante links

- [Link tekst](link_url_goes_here)
- [Link tekst](link_url_goes_here)

</details>
````

## Testen Challenges

voordat je [een pull request maakt](how-to-open-a-pull-request maakt. d) voor je wijzigingen moet je bevestigen dat de wijzigingen die je hebt aangebracht niet per ongeluk problemen veroorzaken met de challenge. 

1. Voer het onderstaande commando uit de hoofdmap uit om alle uitdagingen te testen

````
npm run test:curriculum
``` 

2. Je kunt ook een blok of een superblok uitdagingen testen met deze commando's

```
npm run test:curriculum --block='Basic HTML en HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

U kunt ook één uitdaging individueel testen door de volgende stappen uit te voeren:

1. Ga naar de `curriculum` map:

   ```
   cd curriculum
   ```

2. Voer het volgende uit voor elk challenge bestand waarvoor u hebt gewijzigd:

   ```
   npm run test -- -g de volledige Engelse titel van de challenge'
   ```

Zodra u hebt geverifieerd dat elke uitdaging door de tests is goedgekeurd, [creëer een pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> U kunt de omgevingsvariabele `LOCALE` in de `.env` instellen op de taal van de uitdaging(en) die u moet testen.
> 
> De momenteel geaccepteerde waarden zijn `dutch` en `chinese`, waarbij `dutch` standaard is ingesteld.

## Opkomende Uitdaging Sjabloon

De uitdaging sjabloon in het proces wordt bijgewerkt naar een schonere, minder geneste structuur.  Dit is nog niet volledig voltooid, maar het volgende zou moeten sluiten bij de definitieve structuur:

``mdx

---
id: Unieke identifier (alfanumerieke, alfanumerieke naam, MongoDB_id)
titel: 'Challenge Title'
challengeType: Geheel getal, gedefinieerd in 'client/utils/challengeTypes. s`
videoUrl: 'url van video-uitleg'
forumTopicId: 12345
---

importeer Script van './script. dx';

## --stap-beschrijving--

Beschrijving tekst, in markdown

```html
<div> 
  voorbeeld code
</div>
```

## Stap-tips --

![test-id-1]

Er zal een willekeurig aantal drievoudige ID's, instructies (in markdown) en codeblokken zijn.

```js
Code voor test een
```

![test-id-2]

Meer instructies in markdown syntaxis

```js
Meer code
```

## --stap-seed--

### --bij gebruiker-code---

```lang
Code geëvalueerd voor de gebruiker
```

### --after-user-code-

```lang
Code geëvalueerd na de gebruiker en net voor de tests
```

### --seed-inhoud--

![index-html]

```html
Een paar html
```

```css
Sommige css
```

```js
Enkele js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --oplossing-marker--
</h1>



<p spaces-before="0">
  Precies hetzelfde als de seeds sectie
</p>

<h2 spaces-before="0">
  --volgende-oplossing-marker
</h2>



<p spaces-before="0">
  Opnieuw hetzelfde
</p>

<h1 spaces-before="0">
  --vraagteken--
</h1>

<h2 spaces-before="0">
  --tekst-markering--
</h2>



<p spaces-before="0">
  De vraag zou hier gaan (alleen gebruikt voor video challenges)
</p>

<h2 spaces-before="0">
  --antwoordmarkering--
</h2>



<p spaces-before="0">
  Antwoord 1
</p>

<hr />

<p spaces-before="0">
  Meer antwoorden
</p>

<hr />

<p spaces-before="0">
  Antwoord 2
</p>

<h2 spaces-before="0">
  --oplossing-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Nuttige links
</h3>



<p spaces-before="0">
  Het maken en bewerken van uitdagingen:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Uitdaging types</a> - wat de numerieke challenge type waarden betekenen (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Bijdragen aan FreeCodeCamp - Schrijven van ES6 Challenge Testen</a> - een video volgend op <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> als hij bijdraagt aan de oude versie van het curriculum.
    </p>
  </li>

</ol>

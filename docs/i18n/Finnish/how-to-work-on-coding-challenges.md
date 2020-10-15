# Miten koodaukseen liittyviä haasteita voidaan käsitellä

Tavoitteenamme on kehittää hauska ja selkeä vuorovaikutteinen oppimiskokemus.

Vuorovaikutteisten koodaushaasteiden suunnittelu on vaikeaa. Olisi paljon helpompi kirjoittaa pitkä selitys tai luoda video opetusohjelma, ja siellä on paikka niille Medium ja YouTube. Kuitenkin, meidän ydinopetussuunnitelma, olemme kiinni mikä toimii parhaiten useimmat ihmiset - täysin interaktiivinen, videopeli kaltainen kokemus.

Haluamme, että leiriläiset saavuttavat virtaustilan. Haluamme, että ne rakentavat vauhtia ja räjähtävät opetussuunnitelmamme läpi mahdollisimman harvalla välipalalla. Haluamme, että ne käsittelevät hankkeita luottavaisin mielin ja että ne altistuvat laajasti ohjelmasuunnittelukonsepteille.

Näiden haasteiden luominen edellyttää valtavaa luovuutta ja yksityiskohtien huomiointia. Saatavilla on paljon apua. Sinulla on tukea koko joukko osallistujia, joille voit pomppia ideoita pois ja demo haasteitasi. Pysy aktiivisena [osallistujien huoneessa](https://gitter.im/freecodecamp/contributors) ja kysy paljon kysymyksiä.

Autuksesi avulla voimme suunnitella interaktiivisen koodausopetussuunnitelman, joka auttaa miljoonia ihmisiä oppimaan koodaamaan tulevina vuosina.

Kunkin haasteen sisältö on tallennettu omaan markdown tiedostoon. Tämä markdown tiedosto on myöhemmin muunnettu HTML käyttäen työkaluja luoda interaktiivisia verkkosivuja.

Löydät kaikki freeCodeCamp.orgin opetussuunnitelman sisällön [`/opetussuunnitelma/haasteita`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) hakemistosta.

## Määritä opetussuunnitelman työkalun asetukset

Ennen kuin työskentelet opetussuunnitelman, sinun pitäisi perustaa joitakin työkaluja, joiden avulla voit testata muutoksia. Voit käyttää mitä tahansa alla olevaa vaihtoehtoa:

- Voit [määrittää freeCodeCamp paikallisesti](how-to-setup-freecodecamp-locally.md). Tämä on **erittäin suositeltavaa** säännöllisille/toistuville maksuille. Tämä asetus sallii sinun työskennellä ja testata muutoksiasi.
- Käytä Gitpodia, ilmainen online dev ympäristö. Alla olevan painikkeen napsauttaminen käynnistää käyttövalmiuden koodin dev ympäristön freeCodeCamp selaimessasi. Se kestää vain muutaman minuutin.

  [![Avaa Gitpodissa](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Muokkaa tiedostoja GitHubin käyttöliittymässä klikkaamalla kynä kuvaketta vastaavaa tiedostoa. Vaikka tämä on nopein tapa, sitä ei suositella ****, koska et pysty testaamaan muutoksia GitHubissa. Jos ylläpitäjämme päättelevät, että tekemäsi muutokset on testattava paikallisesti, sinun on noudatettava yllä olevia menetelmiä sen sijaan uudelleen.

## Haasteen Malli

Alla on malli siitä, miltä haasteen markdown tiedostot näyttävät tällä hetkellä.  Jos haluat nähdä virtaviivaistetun mallin , hyväksymme sen [alla](#upcoming-challenge-template).

````md
---
id: Yksilöllinen tunniste (aakkosnumeerinen, MongoDB_id)
otsikko: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Kuvaus

<section id='description'>
A Kuvaus haasteesta ja siitä, mitä tarvitaan
</section>

## Ohjeet

<section id='instructions'>
Ohjeet siitä, mitä tarkalleen pitää tehdä.
</section>

## Testit

<section id='tests'>

```yml
testit:
  - teksti: Tulisiko palauttaa "foo"
    testiMerkkijono: 'Kieltäytynyt funktio mahdollisesti käyttäen Chai asetuksia'
````

</section>

## Haasteen Siemenet

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Koodi näytetään oletusarvoisesti editorissa.

Tämä on vaadittu osa haasteen.
```

</div>

### Ennen Testejä

<div id='{ext}-setup'>

```{ext}
Valinnainen testiasetusten koodi.
```

</div>

### Testin Jälkeen

<div id='{ext}-teardown'>

```{ext}
Valinnainen Testaa alas -koodi.
```

</div>

</section>

## Ratkaisu

<section id='solution'>

```{ext}
// ratkaisu tarvitaan
```

</section>

````

> [!NOTE]
>
> 1. Edellä olevissa jaksoissa esimerkkejä `{ext}` ovat:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Yllä olevan `Tests`-osion `text`- ja `testString`-osion tulee olla kelvollinen YAML-merkkijono. `testString` voi olla stringified funktio tai lauseke, joka voi käyttää Chai-asetuksia.

## Numerointihaasteet

Jokainen haaste tarvitsee `id`. Jos et määritä yksi, MongoDB luo uuden satunnaisen kun se tallentaa tiedot; kuitenkin, emme halua sen tekevän sitä, koska haluamme haasteen olevan johdonmukainen eri ympäristöissä (lavastus, tuotanto, paljon erilaisia kehittäjiä, jne.).

Luo uusi kuori (olettaen MongoDB on käynnissä erikseen):

1. Suorita `mongo`-komento.
2. Suorita `ObjectId()` komento.

Esimerkiksi:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB serveri: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Tulos on uusi id, esimerkiksi `5a474d78df58bafeb35d34` edellä.

Kun sinulla on id, laita se merkkikansioon `id` -kenttään yläreunassa, esim.

```yml
---
id: 5a474d78df58bafeb3535d34
otsikko: Haaste otsikko
```

## Haasteiden nimeäminen

Asioiden nimeäminen on vaikeaa. Olemme helpottaneet sitä asettamalla joitakin rajoituksia.

Kaikkien haasteen otsikoiden tulee olla täsmällisiä, ja niiden tulee noudattaa tätä kaavaa:

\[verb\]\[objektin lauseke\]

Tässä muutamia esimerkkejä haasteen nimiä:

- Määritä elementin täyttö napsauttamalla komentoa
- Tiivistetty matriisi kanssa .reduce
- Käytä kiinnike Notation löytää ensimmäinen merkki merkkijonossa

## Haasteen kuvaukset/ohjeet

Lausekkeiden on oltava selkeitä ja ytimekkäitä ja niissä on oltava mahdollisimman vähän ammattikieltä. Jos käytetään kielenkäyttö on välittömästi määriteltävä tavallisena englanninkielisenä.

Säilytä kohdat lyhennettyinä (noin 1-4 lausetta). Ihmiset ovat todennäköisemmin lukea useita lyhyitä kappaleita kuin seinän tekstiä.

Haastetekstin pitäisi käyttää toista henkilöä ("sinua") auttaakseen antamaan sille keskusteluäänen. Näin teksti ja ohjeet näyttävät puhuvan suoraan kamppailijan kanssa haasteen läpi. Yritä välttää käyttämästä ensimmäistä henkilöä ("I", "me", "Let's" ja "me").

Älä käytä lähteviä linkkejä. Nämä keskeyttävät virtauksen. Leirintäalueiden ei pitäisi koskaan olla google mitään näiden haasteiden aikana. Jos on resursseja, luulet, että leiriläiset hyötyisivät niistä, lisää ne haasteeseen liittyvään artikkeliin.

Voit lisätä kaavioita, jos ehdottoman välttämätöntä.

Älä käytä emojeja tai hymiöitä haasteissa. freeCodeCamp on globaali yhteisö, ja emojin tai emotiikan kulttuurinen merkitys voi olla erilainen eri puolilla maailmaa. Myös emojit voivat tehdä eri järjestelmiä.

Oikea substantiivi pitäisi käyttää oikeaa iskunvaimennusta kun mahdollista. Alla on luettelo sanoista, kuten niiden pitäisi näkyä haasteissa.

- JavaScript (suuraakkosin "J" ja "S" eikä lyhenteitä)
- Node.js
- Edessä-end kehitys (adjective form with a dash) on, kun työskentelet etupäässä (substantiivi lomake ilman dash). Sama pätee "takaisin loppuun", "täysi pino", ja moniin muihin yhdistettyihin termeihin.

### 2 minuutin sääntö

Jokaisen haasteen pitäisi olla ratkaistavissa 120 sekunnin kuluessa syntyperäisen englantilaisen puhujan, joka on suorittanut siihen liittyvät haasteet. Tähän sisältyy aika, jonka kuluu ohjeiden lukemiseen, ymmärrä kylvetty koodi, kirjoittaa oma koodinsa ja saada kaikki testit hyväksyttäväksi.

Jos haasteen loppuun saattaminen kestää yli kaksi minuuttia, sinulla on kaksi vaihtoehtoa:

- Yksinkertaista haastetta, tai
- Jaa haaste kahteen haasteeseen.

2 minuutin sääntö pakottaa sinut, haastesuunnittelija, tekemään ohjeistasi ytimekkäät, seed code -koodisi selväksi ja testit suoraan.

Seuraamme, kuinka kauan leiriläisten on ratkaistava muutoksia ja käytettävä näitä tietoja löytääkseen haasteita, joita on yksinkertaistettava tai jaettava.

### Modulaarisuus

Jokaisen haasteen pitäisi opettaa täsmälleen yksi käsite, ja käsitteen pitäisi näkyä haasteen nimestä.

Aiemmin käsiteltyjä käsitteitä voidaan vahvistaa toistolla ja variaatioilla esimerkiksi ottaa käyttöön h1 elementtejä yhdessä haasteessa, sitten h3 elementtejä muutamia haasteita myöhemmin.

Tavoitteenamme on vastata tuhansiin 2 minuutin haasteisiin. Ne voivat virrata yhteen ja toistaa aiemmin katettuja käsitteitä.

### Haastetekstin muotoilu

Tässä on erityisiä muotoilu ohjeita haasteen tekstiä ja esimerkkejä:

- Kielen avainsanat menevät `<code>` -tageissa. Esimerkiksi HTML-tagien nimet tai CSS-ominaisuuksien nimet
- Hakusanan ensimmäinen ilmentymä kun se on määritelty, tai yleiset avainsanat (esim. "objekti" tai "muuttumattomat") menevät `<dfn>` -tageissa
- Viittaukset koodin osiin (eli funktioon, menetelmään tai muuttujan nimiin) olisi käärittävä `<code>` -tageihin. Katso alla oleva esimerkki:
- Käytä <code>parseInt</code> muuntaaksesi muuttujan <code>realNumber</code> kokonaislukuksi.
- Monirivisiä koodilohkoja **edeltää tyhjä rivi**. Seuraava rivi on aloitettava kolmella reitillä, joita seuraa välittömästi yksi [tuetuista kielistä](https://prismjs.com/#supported-languages). Täydentääksesi koodilohkon sinun on aloitettava uusi rivi, jossa on vain kolme backtickia ja **toinen tyhjä rivi**. **Huomautus:** Jos aiot käyttää esimerkkikoodia YAML, käytä `yaml` sen sijaan, että `yml` kieliä selausmerkkien oikealle puolelle.

Katso alla oleva esimerkki:

````md
Seuraava esimerkki koodista:

```{language}

[SINUN KOODI TÄSTÄ]

````
````

- Lisätietoja huomautuksen muodossa tulisi muotoilla `<strong>Huomautus:</strong> Loput huomautustekstiä...
- Jos tarvitaan useita muistiinpanoja luetella kaikki huomautukset erillisissä lauseissa käyttäen muotoa `<strong>Huomautuksia:</strong> Ensimmäisen huomautuksen tekstiä. Toinen huomautusteksti.`.
- Käytä kaksinkertaisia lainauksia soveltuvin osin

## Kirjoittaminen testit

Haasteita pitäisi olla mahdollisimman vähän testejä tarpeen tarkistaa, että camper ymmärtää konseptin.

Tavoitteenamme on kommunikoida se yksittäinen piste, että haaste yrittää opettaa, ja testata, että he ovat ymmärtäneet tämän pisteen.

Haastetestit voivat hyödyntää Node.js ja Chai.js väitöskirjakirjastoja. Tarvittaessa käyttäjän luomaa koodia voi myös käyttää muuttujassa.

## seed code Formatting

Tässä on erityiset muotoiluohjeet haasteen seed codeille:

- Käytä kahta välilyöntiä sisennykseen
- Javascript-lausunnot päättyvät puolipisteeseen
- Käytä kaksinkertaisia lainausmerkkejä tarvittaessa
- Kommenttimerkkien ja kommentin välillä tulisi olla välilyönti itse

  `// Korjaa tämä rivi`

## Vinkkejä ja ratkaisuja

Jokaisella haasteella on `Hanki Hint`-painike, jotta käyttäjä voi käyttää mitä tahansa haastetta varten luotuja vihjejä/ratkaisuja. Opetussuunnitelman vihjeet/ratkaisut aiheet sijaitsevat [foorumissamme](https://forum.freecodecamp.org/c/guide) `Guide`-kategorian alla.

Jos löydät ongelman olemassa olevan haasteen vihjeiden/ratkaisujen aiheen kanssa, voit tehdä ehdotuksia foorumilla [osallistujien kategoriassa](https://forum.freecodecamp.org/c/contributors). Moderaattorit ja käyttäjät, joilla on luotettavuustaso 3, tarkastelevat kommentteja ja päättävät, sisällyttävätkö ne muutokset vastaavaan vihje-/ratkaisuaiheeseen vai eivät.

### Uusien Haastevihjeiden/ratkaisujen lisääminen Aiheet

Ota seuraavat vaiheet lisätessään uusi haasteen vihjeitä tai ratkaisuja koskeva aihe.

1. Aloita seuraamalla samoja vaiheita uuden aiheen luomiseksi, mutta tarkista seuraava jotta voit luoda otsikko.
2. Aiheen otsikon tulisi alkaa otsikolla `freeCodeCamp Challenge Guide: `, joka on mukana opetussuunnitelman haasteen otsikossa. Esimerkiksi, jos haaste on nimeltään "`Chunky Monkey`", aiheen otsikko olisi "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` pitäisi olla näiden aiheiden tai viestien omistaja, joten sinun täytyy pyytää admin muuttaa omistusoikeus tärkein viesti `camperbotin `.
4. Kun uusi aihe on luotu, foorumi aiheen tunnus on luotu. Se sijaitsee foorumin aiheen URL-osoitteen lopussa. Tämä tunnus on lisättävä opetussuunnitelman haasteen etuosaan, joka tapahtuu tavanomaisen `Get a Hint`-painikkeen vetämisprosessin kautta, jotta se voidaan linkittää aiheeseen.

### Ohjeet vihjeiden ja ratkaisujen sisällölle

Kun ehdotetaan ratkaisua opetussuunnitelman haasteeseen liittyvään oppaaseen liittyvään aiheeseen, koko koodi on lisättävä. Tämä sisältää kaikki alkuperäisen seed code plus kaikki muutokset, joita tarvitaan kaikkien haastetestien suorittamiseen. Seuraavaa mallia tulisi käyttää luotaessa uusia vihjejä/ratkaisuja aiheita:

````md
# Haasteen nimi Goes Here

---

## Ongelmanselitys

Tämä tiivistää mitä on tehtävä ilman, että vain toistetaan haasteen kuvausta ja/tai ohjeita. Tämä on valinnainen osio

#### Relevant Linkit

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Vinkkejä

### Vihje 1

Vihje menee tänne

### Vihje 2

Vihje menee tänne

---

## Ratkaisut

<details><summary>Ratkaisu 1 (Click to Show/Hide)</summary>

``js
funktio myFunc() {
  konsoli. og('Hei maailma!');
}
````

#### Koodin Selitys

- Koodin selitys menee tähän
- Koodin selitys menee tähän

#### Asiaankuuluvat Linkit

- [Linkin Teksti](link_url_goes_here)
- [Linkin Teksti](link_url_goes_here)

</details>
````

## Testing Challenges

Ennen kuin [luo pull-pyyntö](how-to-open-a-pull-request. d) sinun on vahvistettava, että tekemäsi muutokset eivät aiheuta tahattomasti ongelmia haasteen kanssa. 

1. Voit testata kaikkia haasteita suorita alla oleva komento juurihakemistosta

````
npm run testi:opetussuunnitelma
``` 

2. Voit myös testata lohkoa tai haasteiden ylälohkoa näillä komennoilla

```
npm run test:curriculum --block='Basic HTML ja HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Voit myös testata yhtä haastetta erikseen suorittamalla seuraavat vaiheet:

1. Vaihda `curriculum`-kansioon:

   ```
   cd opetussuunnitelma
   ```

2. Suorita seuraava jokaiselle haastetiedostolle, jota varten olet muuttunut:

   ```
   npm run test -- -g 'haasteen koko englanninkielinen otsikko'
   ```

Kun olet varmistanut, että jokainen haaste olet työskennellyt läpäisee testit, [luo pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Voit asettaa `LOCALE` ympäristömuuttujan `.env` sen haasteen (haasteiden) kieleen, jota sinun täytyy testata.
> 
> Tällä hetkellä hyväksytyt arvot ovat `english` ja `chinese`, ja `english` on oletusarvoisesti asetettu.

## Tuleva Haastemalli

Haastemalli päivitetään puhtaampaan ja vähemmän sisäkkäiseen rakenteeseen.  Tätä ei ole täysin viimeistelty, mutta lopullisen rakenteen tulisi olla lähellä:

````mdx

---
id: Yksilöllinen tunniste (aakkosnumeerinen, MongoDB_id)
otsikko: 'Challenge Title'
challengeType: Integer, määritelty `client/utils/challengeTypes. s`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

import Script from './script. dx';

## --step-description--

Kuvaus teksti, merkitty

```html
<div> 
  esimerkki koodi
</div>
```

## --step-vihjeet--

![test-id-1]

On sattumanvarainen määrä kolminkertaisia ids, ohjeet (merkit) ja koodilohkoja.

```js
Testin yksi koodi
```

![test-id-2]

Lisää ohjeita markdown syntaksi

```js
Lisää koodi
```

## --step-seed--

### --ennen-käyttäjäkoodi--

```lang
Koodi arvioitu ennen käyttäjän
```

### --after-user-code--

```lang
Koodi arvioidaan käyttäjän jälkeen ja juuri ennen testejä
```

### --seed-content--

![index-html]

```html
Jotkut html
```

```css
Joitakin css
```

```js
Jotkut js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --ratkaisu-merkki--
</h1>



<p spaces-before="0">
  Täsmälleen sama kuin siemenlohko
</p>

<h2 spaces-before="0">
  --next-solution-merkki
</h2>



<p spaces-before="0">
  Sama uudelleen
</p>

<h1 spaces-before="0">
  --question-merkki--
</h1>

<h2 spaces-before="0">
  --text-markker--
</h2>



<p spaces-before="0">
  Kysymys menisi tähän (käytetään vain videon haasteet)
</p>

<h2 spaces-before="0">
  --vastausmerkki--
</h2>



<p spaces-before="0">
  Vastaa 1
</p>

<hr />

<p spaces-before="0">
  Vastaa 2
</p>

<hr />

<p spaces-before="0">
  Vastaa 2
</p>

<h2 spaces-before="0">
  --ratkaisu-merkki--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Hyödyllisiä Linkkejä
</h3>



<p spaces-before="0">
  Haasteiden luominen ja muokkaaminen:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Haastetyypit</a> - mitä numeerinen haaste tarkoittaa (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Osallistuminen FreeCodeCamp - Kirjoittaminen ES6 Challenge Testit</a> - video jälkeen <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> hän osallistuu vanhan version opetussuunnitelman.
    </p>
  </li>

</ol>

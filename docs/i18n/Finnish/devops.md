# Kehittäjän toiminta at freeCodeCamp.org

Tämä opas auttaa sinua ymmärtämään infrastruktuurin pino ja miten ylläpidämme alustoja. Vaikka tällä oppaalla ei ole tyhjentäviä yksityiskohtia kaikille toiminnoille, sitä voitaisiin käyttää viitteenä ymmärtääksesi järjestelmiä.

Kerro meille, jos sinulla on palautetta tai kysyttävää, ja olemme iloisia voidessamme selventää.

## Miten rakennamme, testaamme ja otamme käyttöön yhteistoimintaa?

Tämä arkisto on jatkuvasti rakennettu, testattu ja otettu käyttöön **erilliset infrastruktuurit (Palvelimet, Tietokannat, CDN:t, jne.)**.

Tämä edellyttää kolmea vaihetta, joita on noudatettava:

1. Uudet muutokset (sekä korjaukset että ominaisuudet) yhdistetään ensisijaiseen kehityshaaraan (`master`) pull-pyyntöjen kautta.
2. Nämä muutokset tehdään useiden automaattisten testien läpi.
3. Kun testit on suoritettu, vapautamme muutokset (tai päivitämme niitä tarvittaessa) infrastruktuuriemme käyttöönottoon.

#### Building the codebase - Mapping Git Branches to Deployments.

Tyypillisesti [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (oletuskehityshaara) on yhdistetty [`tuotantovaiheiseen`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) haaraan kerran päivässä, ja se vapautuu erilliseen infrastruktuuriin.

Tämä on välivaiheen julkaisu kehittäjillemme ja vapaaehtoisille osallistujille. Se tunnetaan myös meidän "lavastus" tai "beeta" julkaisu.

Se on identtinen meidän live tuotantoympäristö `freeCodeCamp.org`, muu kuin se käyttäen erillisiä tietokantoja, palvelimia, web-välityspalvelimia, jne. Tämän eristyksen avulla voimme testata jatkuvaa kehitystä ja ominaisuuksia "tuotantoa" kuten skenaario, vaikuttamatta säännöllisesti käyttäjiä freeCodeCamp.orgin pääalustoja.

Kun kehittäjätiimi [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) on tyytyväinen vaiheistusalustan muutoksiin, nämä muutokset siirretään muutaman päivän välein [`tuotanto-nykyiseen`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) -haaraan.

Tämä on viimeinen julkaisu, joka siirtää muutoksia freeCodeCamp.orgin tuotantoalustoihimme.

#### Muutosten testaus - Integraatio ja käyttäjän hyväksymistesti.

Käytämme eri tasoilla integraation ja hyväksynnän testaus tarkistaa laadun koodin. Kaikki testimme tehdään ohjelmistojen kautta, kuten [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) ja [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Meillä on yksikkötestejä haasteratkaisujemme testaamiseen, palvelimen API-rajapintoihin ja asiakaskäyttöliittymiin. Nämä auttavat meitä testaamaan eri komponenttien välistä integrointia.

> [!HUOM] Olemme myös kirjoittamassa loppukäyttäjän testejä, jotka auttavat jäljittelemään reaalimaailman skenaarioita kuten päivittämällä sähköpostia tai soittamalla API tai kolmannen osapuolen palveluihin.

Yhdessä nämä testit auttavat estämään ongelmia toistamasta itseään ja varmistaa, emme ota käyttöön bugi työskennellessämme toisen bugin tai ominaisuuden.

#### Muutosten käyttöönotto - Palvelimiin tehtävien muutosten painaminen.

Olemme konfiguroineet jatkuvan toimituksen ohjelmisto työntää muutoksia meidän kehitys- ja tuotantopalvelimet.

Kun muutokset on työnnetty suojatuille julkaisusivukonttoreille, rakenneputki laukeaa automaattisesti sivukonttorin käyttöön. Rakennusputkistot ovat vastuussa esineiden rakentamisesta ja niiden pitämisestä kylmävarastossa myöhempää käyttöä varten.

Rakenneputki laukaisee vastaavan kaasuputken, jos se on valmis menestyksekkäästi ajettavaksi. Vapautusputkistot ovat vastuussa rakentamiseen liittyvien esineiden keräämisestä, niiden siirtämisestä palvelimille ja elämiseen.

Rakennusten ja julkaisujen tila [on saatavilla täällä](#build-test-and-deployment-status).

## Rakenteen, testauksen ja käyttöönoton käynnistäminen.

Tällä hetkellä vain kehittäjätiimin jäsenet voivat työntää tuotannon sivuliikkeisiin. Muutokset `tuotanto-*` haaroihin voivat laskeutua vain nopeasti tapahtuvan yhdistämisen kautta [`ylävirtaan`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!HUOM] Tulevina päivinä me parantaisimme tätä virtausta tekemällä pull-pyyntöjä ja parantamalla käyttöoikeuksien hallintaa ja avoimuutta.

### Työstetään muutoksia vaiheistetun julkaisun sovelluksiin.

1. Määritä kaukosäätimet oikein.

   ```sh
   git remote -v
   ```

   **Tulokset:**

   ```
   origin git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Varmista, että `master` haara on koskematon ja synkronoitu ylöspäin.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Tarkista, että Travis CI kulkee `master` -haarassa ylöspäin.

   Jatkuvan [integroinnin](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) testien tulee olla vihreitä ja PASSING `master` -sivuliikkeelle.

    <details> <summary> Tarkistetaan Travis CI -järjestelmän tilaa (kuvakaappaus) </summary>
      <br>
      ![Tarkista version tila Travis CI -valmisteella](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Jos tämä ei onnistu, sinun pitäisi lopettaa ja tutkia virheitä.

4. Vahvista että pystyt rakentamaan arkiston paikallisesti.

   ```
   npm ajaa puhdasta ja kehittää
   ```

5. Siirrä muutokset `master`

   ```
   git checkout tuotantovaiheinen
   git merge master
   git push upstream
   ```

   > [!HUOM] Et voi pakottaa työntöä ja jos olet kirjoittanut historian uudelleen joka tapauksessa nämä komennot ovat virheellisiä.
   > 
   > Jos he tekevät, olet ehkä tehnyt jotain väärin ja sinun pitäisi vain aloittaa alusta.

Edellä mainitut vaiheet laukaisevat automaattisesti ajon rakenneputkeen `tuotantovaiheista` vastaavaa haaraa varten. Kun rakennus on valmis, artifaktat tallennetaan `.zip` tiedostoina kylmään tallennustilaan, jota haetaan ja käytetään myöhemmin.

Vapautusputki laukeaa automaattisesti, kun siihen liitetystä rakennusputkesta on saatavilla uusi artifakti. Lavausalustoille tämä prosessi ei sisällä manuaalista hyväksyntää ja esineitä työnnetään Client CDN- ja API-palvelimille.

> [!TIP·label:Arviot] Tyypillisesti rakentamiseen kuluu noin 20-25 minuuttia ja sen jälkeen julkaisuajo, joka kestää noin 15-20 min asiakkaalle, ja ~5-10 min jotta API on saatavilla suorana. Koodista työnnä olla elävänä lavastus alustoilla koko prosessi kestää yhteensä **~ 35-45 min**.

### Työnnetään muutoksia tuotantosovelluksiin.

Prosessi on enimmäkseen sama kuin lavastus ja muutamia lisätarkastuksia on tehty. Tämä on vain tehdä varma, emme rikkoa mitään freeCodeCamp.org joka voi nähdä satoja käyttäjiä sitä milloin tahansa.

| ÄLÄ suorita näitä komentoja, ellet ole varmistanut, että kaikki toimii lavastusalustalla. Sinun ei pitäisi ohittaa tai ohittaa mitään testausta lavastuksen yhteydessä ennen kuin jatkat eteenpäin. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                     |


1. Varmista, että `tuotantovaiheinen` haara on koskematon ja synkronoitu ylöspäin.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Siirrä muutokset `tuotantovaiheisesta`

   ```
   git checkout tuotantovirta
   git yhdistää tuotantovaiheisen
   git push upstream
   ```

   > [!HUOM] Et voi pakottaa työntöä ja jos olet kirjoittanut historian uudelleen joka tapauksessa nämä komennot ovat virheellisiä.
   > 
   > Jos he tekevät, olet ehkä tehnyt jotain väärin ja sinun pitäisi vain aloittaa alusta.

Edellä mainitut vaiheet laukaisevat automaattisesti ajon rakenneputkistoon `tuotantovirran` haaraa varten. Kun rakentaa artifact on valmis, se laukaisee ajaa päästöputkistossa.

> [!TIPělabel:Arviot] Tyypillisesti koontiajo kestää ~20-25 minuuttia loppuun.

**Henkilöstötoimia koskevat lisätoimet**

Yksi julkaisuajo on käynnistynyt, kehittäjän henkilökunnan jäsenet saavat automaattisen manuaalisen intervention sähköpostiosoitteen. He voivat joko _hyväksyä_ tai _hylätä_ julkaisuajan.

Jos muutokset toimivat hyvin ja ne on testattu vaiheistetulla alustalla, se voidaan hyväksyä. Hyväksyntä on annettava 4 tunnin kuluessa vapauttamisen alkamisesta ennen kuin se hylätään automaattisesti. Henkilökunta voi käynnistää julkaisun uudelleen manuaalisesti hylätyistä ajoista, tai odottaa seuraavaa julkaisujaksoa.

Henkilöstön käyttö:

| Tarkista sähköpostisi saadaksesi suoran linkin tai [siirry julkaisuhallintapaneeliin](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) sen jälkeen, kun käännöksen suoritus on valmis. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                     |


Kun yksi henkilöstön jäsenistä hyväksyy vapauttamisen, putki ajaa muutokset elää freeCodeCamp.orgin tuotannon CDN ja API palvelimet. Ne kestävät tyypillisesti noin 15-20 min asiakkaalle, ja ~5 min API-palvelimet ovat saatavilla suorina.

> [!TIP·label:Arviot] Julkaisu kestää tyypillisesti ~15-20 min jokaista asiakasta, ja ~5-10 min jokaisesta API instanssista on saatavilla livenä. Koodista työnnä ollakseen elossa tuotantoalustoilla koko prosessi kestää **~ 90-120 min** yhteensä (ei lasketa henkilöstön hyväksynnän odotusaikaa).

## Koonti-, testi- ja käyttöönottotila

Tässä on nykyinen testi, rakentaa ja ottaa käyttöön tila codebase.

| Tyyppi            | Haara                                                                                        | Tila                                                                                                                                                                                                                                                 | Hallintapaneeli                                                                                   |
|:----------------- |:-------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------- |
| CI Testit         | [`mestari`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                        | ![Travis Ci Build -tila](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                          | [Siirry tilan hallintapaneeliin](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Testit         | [`tuotantovaiheistus`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis Ci Build -tila](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                              | [Siirry tilan hallintapaneeliin](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Koosta Putkilinja | [`tuotantovaiheistus`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Koosteen Tila](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Siirry tilan hallintapaneeliin](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Vapauta Pipeline  | [`tuotantovaiheistus`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                      | [Siirry tilan hallintapaneeliin](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Testit         | [`tuotantovirta`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)      | ![Travis Ci Build -tila](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                              | [Siirry tilan hallintapaneeliin](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Koosta Putkilinja | [`tuotantovirta`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      | [![Koosteen Tila](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Siirry tilan hallintapaneeliin](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Vapauta Pipeline  | [`tuotantovirta`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      |                                                                                                                                                                                                                                                      | [Siirry tilan hallintapaneeliin](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Varhainen pääsy ja beta-testaus

Toivotamme sinut tervetulleeksi testaamaan näitä julkaisuja **"julkisen beta-testauksessa"** -tilassa ja pääsemään varhaisessa vaiheessa käsiksi tuleviin ominaisuuksiin alustoille. Joskus näitä ominaisuuksia/muutoksia kutsutaan **seuraavaksi, beta, lavastus** jne. vaihdettaviksi.

Palautteesi palautteen ja kysymysraporttien kautta auttavat meitä tekemään tuotantoalustoja osoitteessa `freeCodeCamp. rg` lisää **joustava**, **johdonmukainen** ja **vakaa** kaikille.

Kiitämme teitä raportoinnista vikoja, joita kohtaat ja auttaa tekemään freeCodeCamp.org paremmin. Sinä rock!

### Laitosten tulevan version tunnistaminen

Tällä hetkellä julkinen beetatestaus versio on saatavilla osoitteessa:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!HUOM] Verkkotunnuksen nimi on erilainen kuin **`freeCodeCamp.org`**. Tämä on tarkoituksellista estää hakukoneen indeksointi ja välttää sekaannusta alustan säännöllisten käyttäjien keskuudessa.

### Laitosten nykyisen version tunnistaminen

**Nykyinen versio alustasta on aina saatavilla osoitteessa [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Dev-tiimi yhdistää muutokset `tuotantovaiheisesta` haarasta `tuotantovirtaan` kun ne julkaistaan muutokset. Top commit pitäisi olla mitä näet elää sivustolla.

Voit tunnistaa tarkan version joka on otettu käyttöön käymällä tila-osiossa käytettävissä olevissa rakentamis- ja käyttöönottolokeissa. Vaihtoehtoisesti voit myös ping meitä [osallistujien chat-huoneessa](https://gitter.im/FreeCodeCamp/Contributors) vahvistaa.

### Tunnetut Rajoitukset

On olemassa joitakin tunnettuja rajoituksia ja kompromisseja käytettäessä beta-versiota alusta.

- #### Kaikki tiedot / henkilökohtainen edistyminen näillä beta-alustoilla `EI tallenneta tai siirretä` tuotantoon.

  **Beta-versiossa olevilla käyttäjillä on tuotannosta erillinen tili.** Beta-versiossa käytetään fyysisesti erillistä tietokantaa tuotannosta. Tämä antaa meille mahdollisuuden estää tahattomia tietojen menetyksiä tai muutoksia. dev tiimi voi tyhjentää tietokannan tämän beta-version tarpeen mukaan.

- #### Beta-alustojen käytettävyydestä ja luotettavuudesta ei ole takeita.

  Käyttöönoton odotetaan olevan yleistä ja nopeaa toistoa, joskus useita kertoja päivässä. Tämän seurauksena beta-versiossa tulee olemaan odottamattomia seisokkeja ajoittain tai rikkoutuneita toimintoja.

- #### Älä lähetä säännöllisiä käyttäjiä tälle sivustolle korjauksen vahvistamisen mittana

  Beta sivusto on ja on aina ollut laajentaa paikallista kehitystä ja testausta, ei mitään muuta. Se ei ole lupaus siitä, mitä on tulossa, vaan väläys siitä, mitä tehdään.

- #### Allekirjoita sivu voi näyttää toiselta kuin tuotanto

   Käytämme testivuokralainen freecodecamp.dev Auth0, ja näin ollen ei ole kykyä asettaa mukautetun verkkotunnuksen. Tämä tekee siitä niin, että kaikki uudelleenohjatut takaisinkutsut ja kirjautumissivu näkyvät oletusverkkotunnuksella: `https://freecodecamp-dev.auth0.com/`. Tämä ei vaikuta toiminnallisuuteen on niin lähellä tuotantoa kuin voimme saada.

## Raportointikysymykset ja palautteen antaminen

Ole hyvä ja avaa uusia asioita keskusteluille ja vikojen raportointille. Voit merkitä ne nimellä **[`julkaisu: seuraava / beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)**

Voit lähettää sähköpostia osoitteeseen `dev[at]freecodecamp.org` jos sinulla on kysyttävää. Kuten aina kaikki tietoturvahaavoittuvuudet tulisi ilmoittaa `tietoturvalle[at]freecodecamp.org` julkisen seurantakeskuksen ja foorumin sijaan.

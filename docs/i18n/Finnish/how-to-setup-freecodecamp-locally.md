Noudata näitä ohjeita, jotta voit luoda freeCodeCamp paikallisesti järjestelmääsi. Tämä on erittäin suositeltavaa, jos haluat osallistua säännöllisesti.

Joidenkin panos työnkulkua, sinun täytyy olla freeCodeCamp käynnissä paikallisesti. Esikatsele esimerkiksi koodaushaasteita tai virheenkorjausta ja virheiden korjaamista koodauspohjassa.

> [!TIP] Jos et ole kiinnostunut perustamaan freeCodeCamp paikallisesti harkita käyttää Gitpod, ilmainen online dev ympäristö.
> 
> [![Avaa Gitpodissa](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Starts valmis koodi dev ympäristö freeCodeCamp selaimessasi.)

## Valmistele paikallinen koneesi

Aloita asentamalla käyttöjärjestelmäsi edellytyksenä oleva ohjelmisto.

Tuemme ensisijaisesti **\*nix** -järjestelmien kehittämistä. Henkilökuntamme ja yhteisömme avustajat työskentelevät säännöllisesti codebasin kanssa Ubuntuun ja macOS:iin asennettujen työkalujen avulla.

Tuemme myös Windows 10 WSL2, jota voit valmistella [lukemalla tämän oppaan](/how-to-setup-wsl).

Jotkut yhteisön jäsenet myös kehittää Windows 10 natiivisti Git for Windows (Git Bash) ja muut Windowsiin asennetut työkalut. Meillä ei ole virallista tukea tällaiseen asetuksiin tällä hetkellä, suosittelemme käyttämään WSL2 sijaan.

**Edellytykset:**

| Edellytys                                                                                      | Versio | Muistiinpanot                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                   | `12.x` | [Lts-Aikataulu](https://github.com/nodejs/Release#release-schedule)                                                                                                                             |
| npm (toimitetaan solmun kanssa)                                                                | `6,x`  | Ei ole LTS julkaisuja, käytämme versiota mukana Node LTS                                                                                                                                        |
| [Mongodb Yhteisön Palvelin](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [Julkaisutiedot](https://docs.mongodb.com/manual/release-notes/), Huomautus: Olemme tällä hetkellä `3.6`, [päivitys on suunniteltu](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Jos sinulla on eri versio, asenna suositeltu versio. Voimme vain tukea asennusongelmia suositelluille versioille. Katso lisätietoja [vianmäärityksestä](#troubleshooting).

Jos Node.js on jo asennettu koneeseesi, suorita seuraavat komennot validoimaan versiot:

```console
node -v
npm -v
```

> [!TIP] Suosittelemme päivittämään viimeisimpiin edellä lueteltuihin vakaisiin julkaisuihin, jotka tunnetaan myös nimellä Long Term Support (LTS) -julkaisut.

Kun olet asentanut tarvittavat edellytykset, sinun on valmisteltava kehitysympäristösi. Tämä on yleistä monille kehitystyön työnkulkuja, ja sinun tarvitsee vain tehdä tämä kerran.

**Seuraa näitä vaiheita saada kehitysympäristö valmiiksi:**

1. Asenna [Git](https://git-scm.com/) tai Git -sovellus, jos et ole jo ennen. Päivitä uusimpaan versioon; versio, joka tuli mukana käyttöjärjestelmäsi voi olla vanhentunut.

2. (Valinnainen, mutta suositeltava) [Aseta SSH avain](https://help.github.com/articles/generating-an-ssh-key/) GitHubille.

3. Asenna valintasi koodimuokkain. @ info: whatsthis

   Suosittelemme käyttämään [Visual Studio Code](https://code.visualstudio.com/) tai [Atom](https://atom.io/). Nämä ovat suuria, vapaita ja avoimen lähdekoodin editoreita.

4. Määritä linkin koodi editorille.

   Sinulla pitäisi olla [ESLint käynnissä editorissa](http://eslint.org/docs/user-guide/integrations.html), ja se korostaa kaikkea, mikä ei vastaa [freeCodeCampin JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Älä ohita mitään linssivirheitä. Niiden tarkoituksena on **auttaa** sinua ja varmistaa puhdas ja yksinkertainen koodipohja.

## Muokkaa arkistoa GitHubissa

[Forking](https://help.github.com/articles/about-forks/) on askel, jossa saat oman kopion freeCodeCampin päätietovarastosta (alias _repo_) GitHubissa.

Tämä on välttämätöntä, koska sen avulla voit työskennellä oman kopion freeCodeCamp GitHub, tai ladataksesi (kloonaa) arkistosi, jotta voit työskennellä paikallisesti. Myöhemmin voit pyytää muutoksia vedettäväksi tärkeimpään versiovarastoon haarukastasi pull-pyynnön kautta (PR).

> [!TIP] Tärkein repo osoitteessa `https://github.com/freeCodeCamp/freeCodeCamp` on usein nimitystä `ylävirtaan` repository.
> 
> Haarukkaasi osoitteessa `https://github.com/YOUR_USER_NAME/freeCodeCamp` kutsutaan usein `alkuperäksi` repoksi.

**Seuraa näitä ohjeita haarataksesi `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Siirry freeCodeCamp repository GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klikkaa "haarukka" -painiketta käyttöliittymän yläkulmassa ([Lisää tietoja Tässä](https://help.github.com/articles/fork-a-repo/))

3. Kun repo on väärennetty, sinut viedään freeCodeCamp arkiston kopioon osoitteessa `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Miten fork freeCodeCamp on GitHub (kuvakaappaus)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Miten fork freeCodeCamp on GitHub" />
</details>

## Kloonaa haarukkasi GitHubista

[Kloonaus](https://help.github.com/articles/cloning-a-repository/) on missä **lataat** kopion arkistosta `etäisestä` paikasta, joka on joko sinun tai jonkun muun omistuksessa. Tapauksessasi tämä etäinen sijainti on sinun `haarautunut` freeCodeCampin reposta jonka pitäisi olla saatavilla osoitteessa `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Suorita nämä komennot paikallisella koneellasi:

1. Avaa terminaali / Komentoprompt / Shell projektisi hakemistossa

   _eli: `/yourprojectsdirectory/`_

2. Clone your fork of freeCodeCamp, replacing `YOUR_USER_NAME` with your GitHub Username

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Tämä lataa koko freeCodeCamp arkiston projektisi hakemistoon.

Huomautus: `--depth=1` luo matalan kloonin, jossa on vain viimeisin historia / commit.

## Määritä synkronointi vanhemmasta

Nyt kun olet ladannut kopion forkistasi, sinun täytyy määrittää `ylävirtaan` etäisyys päärepoon.

[Kuten edellä mainittiin,](#fork-the-repository-on-github), päärepo viitataan `ylävirtaan` repository. Your fork referred to as the `origin` repository.

Tarvitset paikallisen kloonisi viittauksen `ylävirtaan` arkistoon `alkuperästä` arkiston lisäksi. Tämä on niin, että voit synkronoida muutokset päätietovarastosta ilman tarvetta forkata ja kloonata toistuvasti.

1. Vaihda hakemisto uuteen freeCodeCamp kansioon:

   ```console
   cd freeCodeCamp
   ```

2. Lisää etäviittaus pääasialliseen freeCodeCamp repoon:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Varmista, että määritys näyttää oikealta:

   ```console
   git remote -v
   ```

   Ulostulon pitäisi näyttää jotain alla:

   ```console
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp.git (push)
   ```

## Käynnissä freeCodeCamp paikallisesti

Nyt kun sinulla on paikallinen kopio freeCodeCampista, voit seurata näitä ohjeita suorittaaksesi sen paikallisesti. Tämän avulla voit

- Esikatsele sivujen muokkaukset sellaisina kuin ne näkyvät oppimisalustalla.
- Työn tekeminen käyttöliittymään liittyviä kysymyksiä ja parannuksia.
- Vianetsintä ja korjaa ongelmia sovelluspalvelimien ja asiakassovellusten kanssa.

Jos et joudu ongelmiin, suorita ensin web-haku ongelmastasi ja katso onko siihen jo vastattu. Jos et löydä ratkaisua, etsi [GitHub ongelmia](https://github.com/freeCodeCamp/freeCodeCamp/issues) sivu ratkaisuun ja ilmoita ongelmasta, jos sitä ei ole vielä raportoitu.

Ja kuten aina, voit vapaasti hypätä meidän [Kehittäjien Keskusteluhuone Gitter](https://gitter.im/FreeCodeCamp/Contributors) tai [meidän Discord-palvelin](https://discord.gg/pFspAhS), nopeita kyselyjä.

> [!TIP] Voit ohittaa käynnissä freeCodeCamp paikallisesti jos olet muokkaamassa tiedostoja. Esimerkiksi `perusteen`suorittaminen tai `yhdistäminen` ristiriitojen ratkaiseminen.
> 
> Voit aina palata tähän osaan ohjeita myöhemmin. Sinun pitäisi **** ohittaa tämä vaihe, jos sinun ei tarvitse suorittaa sovelluksia koneellasi.
> 
> [Siirry muutosten tekemiseen](#making-changes-locally).

### Riippuvuuksien määrittäminen

#### Vaihe 1: Määritä ympäristömuuttujatiedosto

Oletusarvoiset API-avaimet ja ympäristömuuttujat tallennetaan tiedostoon `sample.env`. Tämä tiedosto on kopioitava uuteen tiedostoon nimeltä `.env` , joka on käytettävissä dynaamisesti asennusvaiheen aikana.

```console
# Luo kopio "sample.env" ja nimeä se ".env".
# Täytä se tarvittavilla API-avaimilla ja salaisuuksilla:

# macOS / Linux
cp näyte. nv .env

# Windows
kopioi sample.env .env
```

Avaimet `.env` tiedostossa eivät ole _ei_ tarvitse muuttaa suorittaaksesi sovelluksen paikallisesti. Voit jättää oletusarvot kopioitu `sample.env` as-is.

> [!TIP] Pidä mielessä, jos haluat käyttää palveluita, kuten Auth0 tai Algolia, sinun täytyy hankkia oma API avaimet näille palveluille ja muokata merkintöjä vastaavasti `. nv` tiedosto.

#### Vaihe 2: Asenna riippuvuudet

Tämä vaihe asentaa tarvittavat riippuvuudet, jotta sovellus voi suorittaa:

```console
npm ci
```

#### Vaihe 3: Käynnistä MongoDB ja vahvista tietokanta

Ennen kuin voit suorittaa sovelluksen paikallisesti, sinun täytyy aloittaa MongoDB palvelu.

> [!HUOM] Ellei MongoDB ole käynnissä asetuksessa, joka on erilainen kuin oletus, URL tallennettu `MONGOHQ_URL` arvo `. nv` tiedoston pitäisi toimia hyvin. Jos käytät mukautettua konfiguraatiota, muokkaa tätä arvoa tarpeen mukaan.

Käynnistä MongoDB palvelin erillisessä päätteessä:

- macOS & Ubuntu:

  ```console
  mongod
  ```

- Ikkunoissa sinun on määritettävä koko polku `mongodiin` binary

  ```console
  "C:\Program Files\MongoDb\Server\3.6\bin\mongod"
  ```

  Varmista, että korvaat `3.6` asennetulla versiolla

> [!TIP] Voit välttää aloittamasta MongoDB:tä joka kerta asentamalla sen taustapalveluna. Voit [oppia siitä lisää niiden dokumentaatiossa käyttöjärjestelmäsi](https://docs.mongodb.com/manual/administration/install-community/)

Seuraavaksi jaetaan tietokanta. Tässä vaiheessa suoritamme alla olevan komennon, joka täyttää MongoDB-palvelimen joillakin alustavilla tietosarjoilla, joita palvelut edellyttävät. Niihin kuuluu muun muassa muutamia järjestelmiä.

```console
npm suorita seed-luku
```

#### Vaihe 4: Käynnistä freeCodeCamp asiakassovellus ja API-palvelin

Voit nyt käynnistää API-palvelimen ja asiakkaan sovellukset.

```console
npm ajaa kehittää
```

Tämä yksittäinen komento syttyy kaikkiin palveluihin, mukaan lukien API-palvelin ja käytettävissä olevat asiakassovellukset, joita voit käyttää.

> [!NOTE] Kun olet valmis, avaa selain ja **vieraile <http://localhost:8000>**. Jos sovellus latautuu, onnittelut – olet kaikki asetettu! Sinulla on nyt kopio freeCodeCampin koko oppimisalusta käynnissä paikallisella koneilla.

> [!TIP] API-palvelin palvelee sovellusliittymiä osoitteessa `http://localhost:3000`. Gatsby-sovellus palvelee asiakassovellusta osoitteessa `http://localhost:8000`

> Jos käyt <http://localhost:3000/explorer> , sinun pitäisi nähdä saatavilla olevat APIt.

## Kirjaudu sisään paikallisella käyttäjällä

Paikallinen asetuksesi luo automaattisesti paikallisen käyttäjän tietokannassa. Klikkaamalla `Kirjaudu sisään` -painiketta autentikoi sinut automaattisesti paikalliseen sovellukseen.

Käyttäjän portfolioon pääsy on kuitenkin hieman hankala. Kehityksessä Gatsby ottaa haltuunsa palvellen asiakassivuja ja näin saat `404` sivun käyttäjäportfoliolle toimiessaan paikallisesti.

Yksinkertaisesti klikkaamalla **"Esikatsele mukautettua 404 sivua"** -painiketta voit lähettää sinut oikealle sivulle.

<details>
   <summary>
      Kuinka kirjautua sisään paikallisesti toimiessa (kuvakaappaus)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Kuinka kirjautua sisään paikallisesti toimiessa" />
</details>

## Tehdään muutoksia paikallisesti

Voit nyt tehdä muutoksia tiedostoihin ja toimittaa muutokset paikalliseen klooniin haarukastasi.

Seuraa näitä ohjeita:

1. Vahvista että olet `master` haaralla:

   ```console
   git status
   ```

   Sinun pitäisi saada tuotos näin:

   ```console
   Sivukonttorin päällikön
   Sivukonttorisi on ajan tasalla 'alkuperä/isäntä'.

   ei toimiteta, työhakemisto puhdas
   ```

   Jos et ole päällikössä tai työkansiosi ei ole puhdas, ratkaise kaikki jäljellä olevat tiedostot/toimitukset ja kassalle `master`:

   ```console
   git kassalle master
   ```

2. Synkronoi viimeisimmät muutokset freeCodeCamp:in ylävirtaan `master` -haarasta paikalliseen päähaaraan:

   > [!VAROITUS] Jos sinulla on jokin jäljellä oleva pull-pyyntö, jonka teit haaran `master` haarasta, menetät ne tämän vaiheen lopussa.
   > 
   > Sinun pitäisi varmistaa, että pull-pyyntösi yhdistetään valvojan toimesta ennen tämän vaiheen suorittamista. Tämän skenaarion välttämiseksi sinun pitäisi **aina** toimia muulla haaralla kuin `master`.

   Tämä vaihe **synkronoi viimeisimmät muutokset** freeCodeCampin pääarkistosta. On tärkeää, että perustat haaran uudelleen uusimman `ylävirtaan / master` niin usein kuin mahdollista välttääksesi ristiriitoja myöhemmin.

   Päivitä paikallinen kopio freeCodeCamp ylävirtaan arkistosta:

   ```console
   git nouto ylävirtaan
   ```

   Palauta päähaara kovasti freeCodeCamp mestarin avulla:

   ```console
   git reset --hard upstream/master
   ```

   Työnnä isäntähaaraa alkuperäsi mukaan, jotta sinulla on puhdas historia haarukassa GitHubissa:

   ```console
   git push origin master --force
   ```

   Voit vahvistaa nykyisen isäntäni vastaavuuksia ylös- ja alaspäin suorittamalla diff:

   ```console
   git diff ylävirtaan / master
   ```

   Tuloksen tulisi olla tyhjä.

3. Luo uusi haara:

   Jos työskentelet erillisessä haarassa kutakin ongelmaa varten, voit pitää paikallisen työkopion puhtaana. Sinun ei pitäisi koskaan työskennellä `master`. Tämä maaperä kopio freeCodeCamp ja sinun täytyy aloittaa uudestaan tuore klooni tai haarukka.

   Tarkista, että olet `master` kuten aiemmin on selitetty, ja haaraudu sieltä:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Sivukonttorin nimen pitäisi alkaa `korjatulla /`, `feat/`, `docs/`, jne. Vältä numeroiden käyttöä haaroissa. Pidä ne lyhyinä, merkityksellisinä ja ainutlaatuisina.

   Esimerkkejä hyvistä sivukonttorin nimistä ovat seuraavat:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Muokkaa sivuja ja toimi koodilla suosikki tekstieditori.

5. Kun olet tyytyväinen muutoksiin, sinun pitäisi vaihtoehtoisesti ajaa freeCodeCamp paikallisesti esikatsella muutoksia.

6. Varmista, että korjaat virheet ja tarkista muutosten muotoilu.

7. Tarkista ja vahvista päivitetyt tiedostot:

   ```console
   git status
   ```

   Tämän pitäisi näyttää lista `vaiheettomista` tiedostoista, joita olet muokannut.

   ```console
   Sivukonttorin feat/dokumentaatiossa
   Sivukonttorisi on ajan tasalla 'upstream/feat/documentation'.

   Muutoksia ei ole vaiheistettu:
   (käytä "git add/rm <file>... päivittää mitä tullaan tekemään)
   (käytä "git checkout -- <file>. ." hylätäksesi muutokset työhakemistossa)

       muutettu: RAHOITUS. d
       muutettu: docs/README.md
       muutettu: docs/how-to-setup-freecodecamp-locally. d
       muutettu: docs/how-to-work-on-guide-articles.md
...
   ```

8. Laita muutokset vaiheeseen ja sitoudu:

   Tässä vaiheessa sinun pitäisi merkitä vain ne tiedostot, joita olet muokannut tai lisännyt itse. Voit suorittaa nollauksen ja ratkaista tiedostoja, joita et aikonut muuttaa tarvittaessa.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Tai voit lisätä kaikki `vaiheettomat` tiedostot vaiheistetun julkaisun alueelle:

   ```console
   git add .
   ```

   Vain ne tiedostot, jotka on siirretty vaiheistetun julkaisun alueelle, lisätään kun teet pysyvän muutoksen.

   ```console
   git status
   ```

   Tuloste:

   ```console
   Sivukonttorin feat/dokumentaatiossa
   Sivukonttorisi on ajan tasalla 'upstream/feat/documentation'.

   Muutokset tehdään:
   (käytä "git reset HEAD <file>..." vaiheeseen)

       muutettu: RAJOITUS.md
       muutettu: docs/README.md
       muutettu: docs/how-to-setup-freecodecamp-locally.md
       muutettu: docs/how-to-work-on-guide-on-articles.md
   ```

   Nyt voit toimittaa muutoksesi lyhyellä viestillä, kuten näin:

   ```console
   git commit -m "korjaa: minun lyhyt toimitusviesti"
   ```

   Joitakin esimerkkejä:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Valinnainen:

   Suosittelemme, että tehdään perinteinen sitouttamisviesti. Tämä on hyvä käytäntö, jonka näet joissain suosituissa Avoimen lähdekoodin arkistoissa. Kehittäjänä tämä kannustaa sinua noudattamaan vakiokäytäntöjä.

   Joitakin esimerkkejä perinteisistä toimitusilmoituksista ovat:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Säilytä nämä lyhyet, enintään 50 merkkiä. Voit aina lisätä lisää tietoa toimitusviestin kuvaukseen. @ info: whatsthis

   Tämä ei vie ylimääräistä aikaa kuin epätavanomainen viesti, kuten 'update file' tai 'add index.md'

   Voit oppia lisää siitä, miksi sinun pitäisi käyttää perinteisiä commikoita [täällä](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Jos tajuat, että sinun on muokattava tiedostoa tai päivitettävä toimitusviesti toimituksen tekemisen jälkeen, voit tehdä sen muokattuasi tiedostoja:

   ```console
   git commit --amend
   ```

   Tämä avaa oletustekstieditorin, kuten `nano` tai `vi` jossa voit muokata toimitusviestin otsikkoa ja lisätä / muokata kuvausta.

10. Seuraavaksi voit työntää muutoksesi haarukkaisi:

    ```console
    git push alkuperä haara/nimi-täällä
    ```

## Pull-pyynnön ehdottaminen (PR)

Kun olet tehnyt muutoksesi, tarkista täältä [miten avata Pull-pyyntö](how-to-open-a-pull-request.md).

## Nopea komentojen viite

Nopea viittaus komennoihin, joita tarvitset toimiessasi paikallisesti.

| komento                                                        | kuvaus                                                                                               |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Asentaa / asentaa uudelleen kaikki riippuvuudet ja bootstraps eri palveluja.                         |
| `npm suorita seed-luku`                                        | Jäsentää kaikki haasteen markdown tiedostot ja lisää ne MongoDB.                                     |
| `npm ajaa kehittää`                                            | Käynnistää freeCodeCamp API-palvelimen ja asiakassovellukset.                                        |
| `npm testi`                                                    | Suorita kaikki JS-testit järjestelmässä, mukaan lukien asiakas-, palvelin-, lintti- ja haastetestit. |
| `npm run test:client`                                          | Suorita asiakkaan testisarja.                                                                        |
| `npm run testi:opetussuunnitelma`                              | Suorita opetussuunnitelman testi sviitti.                                                            |
| `npm run test:curriculum --block='Basic HTML ja HTML5'`        | Testaa tietty lohko.                                                                                 |
| `npm run test:curriculum --superblock='responsive-web-design'` | Testaa tietty SuperBlock.                                                                            |
| `npm run test-curriculum-full output`                          | Suorita opetussuunnitelman testaussarja paistamatta ensimmäisen virheen jälkeen                      |
| `npm ajaa testi:palvelin`                                      | Suorita palvelimen testisarja.                                                                       |
| `npm ajo e2e`                                                  | Suorita sypressin loppu lopettaaksesi testit.                                                        |
| `npm suorita puhdas`                                           | Poistaa kaikki riippuvuudet ja puhdistaa kätköt.                                                     |

## Vianmääritys

### Suositeltujen edellytysten asentamiseen liittyvät ongelmat

Kehitämme säännöllisesti uusimpia tai suosituimpia käyttöjärjestelmiä, kuten macOS 10.15 tai uudempia, Ubuntu 18.04 tai uudempia ja Windows 10 (WSL2).

On suositeltavaa tutkia erityinen kysymys resursseja, kuten Google, pino ylivuoto ja pino vaihto. On olemassa hyvä mahdollisuus, että joku on kohdannut saman ongelman ja on jo vastaus sinun erityiseen kyselyyn.

Jos olet toisessa käyttöjärjestelmässä ja/tai olet yhä tekemisissä, katso [saada apua](#getting-help).

> [!VAROITUS]
> 
> Ole hyvä ja vältä luomasta GitHub-ongelmia ennakkoehtojen täyttämiseksi. Ne eivät kuulu tämän hankkeen soveltamisalaan.

### Ongelmia UI, Fontit, rakentaa virheitä jne.

Jos kohtaat ongelmia UI, Fontit tai nähdä rakentaa virheitä, siivoaminen voi olla hyödyllistä:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

TAI

Käytä pikakuvaketta

```
npm ajaa puhdasta ja kehittää
```

Jos jatkat kohtaamista ongelmia rakennuksen kanssa, työtilan siivoaminen on suositeltavaa.

Käytä `git clean` interaktiivisessa tilassa:

```
git clean -ifdX
```

<details>
   <summary>
      Kuinka puhdistaa git jäljittämättömät tiedostot (kuvakaappaus)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Kuinka puhdistaa git jäljittämättömät tiedostot" />
</details>

### Ongelmia API, kirjautuminen, Challenge Submissions, jne.

Jos et voi kirjautua sisään, ja sen sijaan näet bannerin, jossa on virheilmoitus, että se ilmoitetaan freeCodeCamp:lle, tarkista, että paikallinen portti `3000` ei ole eri ohjelman käytössä.

**Linux / macOS / WSL Windowsissa - päätelaitteesta:**

```console
netstat -ab - grep "3000"

tcp4 0 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Windows - Kohteesta PowerShell:**

```powershell
netstat -ab - Select-String "3000"

TCP 0.0.0.0:3000 DESKTOP LISTENING
```

### Ongelmia riippuvuuksien asentamisessa

Jos saat virheitä asennettaessa riippuvuuksia, varmista, että et ole rajoitetussa verkossa tai palomuurisi asetukset eivät estä sinua käyttämästä resursseja.

Ensimmäisen kerran asennus voi kestää jonkin aikaa riippuen verkon kaistanleveydestä. Ole kärsivällinen, ja jos olet edelleen jumissa me uudelleen käyttäen GitPod sijasta offline asetukset.

## Haetaan Apua

Jos olet jumissa ja tarvitset apua, kerro meille pyytämällä ['Osallistujat' -kategoriassa foorumillamme](https://forum.freecodecamp.org/c/contributors) tai [Osallistujien chat-huoneessa](https://gitter.im/FreeCodeCamp/Contributors) Gitterissä.

Voi olla virhe konsolissa selaimen tai Bash / Terminal / Command Line joka auttaa tunnistamaan ongelman. Anna tämä virheviesti ongelmankuvauksessasi, jotta muut voivat helpommin tunnistaa ongelman ja auttaa sinua löytämään ratkaisun.

# Virallinen freeCodeCamp Moderaattori käsikirja.

Tämä auttaa sinua kohtaamaan eri paikkoja yhteisössämme, mukaan lukien:

- GitHub kysymykset & pull-pyynnöt
- Foorumi, chatit, Facebook-ryhmät, ja muut online-kokouspaikat
- Henkilökohtaiset tapahtumat, kuten opintoryhmät, hackathonit ja konferenssit

**Kaikki freeCodeCamp Moderaattorit ovat yhteisön laajuisia valvojia. Se tarkoittaa, että luotamme siihen, että valvotte mitään näistä paikoista.**

Tämä sanoi, voit palvella moderaattorina missä tahansa paikoissa ovat eniten kiinnostusta sinua. Jotkut valvojat vain auttavat GitHubissa. Toiset vain auttaa ulos foorumilla. Jotkut valvojat ovat aktiivisia kaikkialla.

Tärkeintä on, että haluamme sinun nauttia on moderaattori, ja sijoittaa niukka aika paikkoihin, jotka ovat kiinnostavia sinulle.

> [!HUOM] "Suurella voimalla tulee suuri vastuu." - Setä Ben

Moderaattorina luonteenlaatu on tärkeämpää kuin tekninen taito.

Kuuntele. Ole Hyödyllinen. Älä käytä valtaasi väärin.

freeCodeCamp on osallistava yhteisö, ja meidän on pidettävä se sellaisena.

Meillä on yksi yhteinen menettelysääntö, joka hallitsee koko yhteisöämme. Mitä vähemmän sääntöjä, sitä helpommin ne muistetaan. Voit lukea nämä säännöt ja toimittaa ne muistiin [täällä](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderaattoreilla on kyky sulkea ongelmia ja hyväksyä tai sulkea pull-pyyntöjä.

Moderaattoreilla on kaksi ensisijaista GitHubin vastuualuetta:

1. QA 'ing and merging pull requests
2. Kysymysten arviointi ja niihin vastaaminen

## Hallitsee Pull-pyyntöjä

Pull Requests (PRs) are how contributors submit changes to freeCodeCamp 's repository. On tärkeää, että teemme laadunvarmistuksen (QA) vetopyyntöjen yhteydessä ennen kuin päätämme yhdistää ne tai sulkea ne.

### Pull-pyyntöjen tyypit

1. **Haasteohjeet Edits** Nämä ovat muutoksia tekstiin haasteiden - Kuvaus, Ohjeet tai Test Text. Voit myös tarkistaa nämä oikeudet GitHubissa ja päättää, yhdistetäänkö ne. Meidän on oltava hieman varovaisempia näiden asioiden suhteen, koska miljoonat ihmiset kohtaavat tämän tekstin, kun he työskentelevät freeCodeCampin opetussuunnitelman kautta. Tekeekö vetopyyntö tekstin selkeyden tekemättä siitä paljon pidempään? Ovatko editoinnit merkityksellisiä eikä liian pedanttisia? Muistakaa, että tavoitteenamme on, että haasteet ovat mahdollisimman selkeitä ja lyhyitä. Ne eivät ole paikka hämärtää yksityiskohtia. Rahoittajat voivat myös yrittää lisätä linkkejä resursseihin haasteisiin. Voit sulkea nämä pull-pyynnöt ja vastata niihin seuraavasti:

   > Kiitos pull pyynnöstänne.
   > 
   > Olen päättämässä tämän vetopyynnön. Lisää linkkejä ja muita yksityiskohtia haasteen vastaavaan oppaan artikkeliin.
   > 
   > Jos luulet, että olen väärässä tämän ongelman ratkaisemisessa, avaa se uudelleen ja lisää lisäselvennyksiä. Kiitos ja onnellinen koodaus.

2. **Haastekoodimuokkaukset** Nämä ovat muutoksia koodiin haasteessa - Haastesiemen, Challenge Solution, Challenge and Test Strings. Nämä pull-pyynnöt on vedettävä pois GitHubista ja testattava paikallisella tietokoneella, jotta voidaan varmistaa, että haastetestit voidaan vielä läpäistä nykyisen ratkaisun avulla, ja uusi koodi ei tuo virheitä. Jotkut osallistujat voivat yrittää lisätä ylimääräisiä testejä kattamaan pedantiset kulma-tapaukset. Meidän on oltava varovaisia, ettemme tee haasteesta liian monimutkaista. Näiden haasteiden ja testien tulisi olla mahdollisimman yksinkertaisia ja intuitiivisia. Sen lisäksi, että algoritmi haasteita ja haastattelu prep osa, oppijoiden pitäisi pystyä ratkaisemaan kunkin haasteen noin 2 minuutissa.

3. **Codebase Muutokset** Nämä koodit muuttavat freeCodeCamp alustan toiminnallisuutta. Joskus osallistujat yrittävät tehdä muutoksia ilman paljon selityksiä, mutta koodimuunnosten osalta meidän on varmistettava, että muutokselle on todellista tarvetta. Näissä pull-pyynnöissä olisi siis viitattava GitHubin olemassa olevaan asiaan, jossa keskustellaan muutoksen syistä. Sitten voit avata pull-pyynnön tietokoneellesi ja testata ne paikallisesti. Kun olet tehnyt niin, jos muutokset näyttävät hyvältä, älä yhdistä niitä vielä. Voit kommentoida pull-pyyntöä sanomalla "LGTM", sitten mainita @raisedadead jotta hän voi katsoa lopullisesti.

### Kuinka yhdistää tai sulkea pull-pyynnöt

Ensinnäkin, kun valitset pull-pyynnön QA:lle, sinun pitäisi antaa itsesi siihen. Voit tehdä tämän klikkaamalla "Määritä itse" -linkkiä GitHubin käyttöliittymän oikean käden sarakkeen "Osoittajat" -osan alapuolella.

Riippuen pull-pyynnön tyypistä se on, noudata vastaavia sääntöjä edellä.

Ennen kuin yhdistät pull-pyynnön, varmista, että GitHubissa on vihreät tarkistusmerkit kaikille. Jos on mitään X: n, tutkia ensin ja selvittää, miten saada heidät muuttumaan vihreiksi tarkistusmerkeiksi ensin.

Joskus syntyy ristiriita yhdistämisestä. Tämä tarkoittaa sitä, että toinen pull-pyyntö on muuttanut saman tiedoston täsmälleen samaa osaa. GitHubilla on työkalu näiden yhdistettyjen konfliktien ratkaisemiseen GitHubissa. Voit yrittää käsitellä näitä konflikteja. Käytä vain parasta harkintaasi. Pall-pyynnön muutokset tulevat olemaan päällä, ja Mestarihaaran muutokset tulevat olemaan alhaalla. Joskus siellä on turhia tietoja, jotka voidaan poistaa. Ennen kuin lopetat , muista poistaa `<<<<<<`, `=======`, ja `>>>>>>` että Git lisää selkkausalueita.

Jos pull-pyyntö näyttää olevan valmis yhdistämään (ja ei vaadi hyväksyntää @raisedadead), voit yhdistää sen. Varmista, että käytät GitHubissa oletuksena "Squash and Merge". Tämä poistaa kaikki pull-pyynnöt ja sitoutuu yhteen sitoumukseen, mikä tekee Gitin historiasta paljon helpompaa lukea.

Sen jälkeen sinun pitäisi kommentoida pull pyyntöä, kiittämällä osallistujaa omalla henkilökohtaisella tavallaan.

Jos pull-pyynnön laatija on "ensimmäistä kertaa osallistuja", sinun tulisi myös onnitella heitä heidän ensimmäisestä yhdistetystä pull-pyynnöstä arkistoon. Voit katsoa PR: n kehon yläkulmaan määrittääksesi ensimmäisen kerran osallistujan oikealle.  Se näyttää `Entinen osallistuja` alla esitetyllä tavalla:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp◄ 690x281](https://i.imgur.com/dTQMjGM.png)

Jos pull-pyyntö ei näytä valmiilta yhdistämiselle, voit kohteliaasti vastata kirjoittajalle, mitä heidän pitäisi tehdä saadakseen sen valmiiksi. Toivottavasti he vastaavat ja saavat vetopyyntönsä lähemmäs valmiita.

Usein vetopyyntö tulee olemaan tietenkin vähäinen. Voit usein kertoa tämän välittömästi, kun avustaja ei häiritse valintaruutujen tarkistamista Pull Request -mallissa, tai käyttää yleistä pull-pyynnön otsikkoa kuten "tehdyt muutokset" tai "Update index. d".

On myös tilanteita, joissa osallistuja yrittää lisätä linkin omaan verkkosivustoonsa, tai sisällyttää itse luomansa kirjaston tai on kevyt muokkaus, joka ei auta ketään muuta kuin itseään.

Molemmissa tilanteissa sinun pitäisi mennä eteenpäin ja sulkea niiden pull pyyntö ja vastata tällä standardiviestillä:

> Kiitos tämän pull-pyynnön avaamisesta.
> 
> Tämä on tavallinen viesti, joka ilmoittaa sinulle, että olemme arvioineet pull-pyyntösi ja päättäneet olla yhdistämättä sitä. Olisimme tyytyväisiä, jos teiltä vaadittaisiin tulevia pyyntöjä.
> 
> Kiitos ja onnellinen koodaus.

Jos tarvitset toisen lausunnon pull-pyynnöstä, mene eteenpäin ja jätä kommenttisi pull-pyyntöön sitten lisää "discussing" etiketti pull pyyntöön.

## Moderoidaan GitHubin Ongelmia

freeCodeCamp on aktiivinen avoimen lähdekoodin projekti. Saamme joka päivä uusia kysymyksiä, jotka on ratkaistava ja varustettava merkinnällä.

### GitHubin ongelmien tyypit

1. **Code Help Requests**, jotka ihmiset ovat virheellisesti luoneet GitHub ongelmia. Jos joku pyytää apua, liitä seuraava viesti, sulje asia.

   > Kiitos, että ilmoititte tästä asiasta.
   > 
   > Tämä on tavallinen viesti, joka ilmoittaa sinulle, että tämä ongelma näyttää olevan avunpyyntö. Sen sijaan, että pyytäisit apua tästä, klikkaa \*\*"Ohje"\*\* painiketta freeCodeCampin haasteessa, joka auttaa sinua luomaan kysymyksen oikeassa osassa foorumi. Foorumin vapaaehtoiset yleensä vastaavat kysymyksiin muutaman tunnin sisällä ja voivat auttaa määrittämään, onko koodisi tai haasteesi testeissä jokin ongelma.
   > 
   > Jos foorumin jäsenet päättävät, ettei koodissasi ole mitään vikaa, voit pyytää tämän ongelman avaamista uudelleen. 
   > 
   > Kiitos ja onnellinen koodaus.

2. **Virhe- tai selvennysongelmat** Yritä toistaa vika itse, jos voit. Jos ei, pyydä heitä vaiheet jäljentää vika, ja onko heillä mitään kuvakaappauksia, videoita, tai lisätietoja, jotka voivat auttaa sinua jäljentämään ongelman. Kun voit jäljentää ongelman - tai ainakin vahvistaa se legit kysymys - etiketti `vahvistettu`. Sitten:

- Jos se on yksinkertainen muutos olemassa olevaan haasteeseen, etiketti `ensimmäinen ajastimet vain`, muuten etiketti `auttaa halusi`. Käytetään tarvittaessa muita merkintöjä.
- Jos ongelma on merkittävämpi, lippu `virheenä`. &nbsp; Jos ei ole mitään epäselvyyttä siitä, oikea toimintatapa asiassa, voi vapaasti tag @raisedadead asiasta saada hänen mielipiteensä siitä, sitten lisätä `Keskustele` etiketti.

3. **Kaksoiskappaleet** Jos liikkeeseenlasku on sama kuin toinen ilmoitettu liikkeeseenlasku, aiemmin ilmoitetun liikkeeseenlaskun tulisi olla etusijalla. Merkitse nimellä `Kahdenna`, liitä seuraava viesti korvaamalla `#XXXXX` viitenumerolla ja sulje sitten ongelma.

   > Kiitos, että ilmoititte tästä asiasta.
   > 
   > Tämä on normaali viesti ilmoittaa, että tämä ongelma näyttää olevan hyvin samanlainen kuin ongelma #XXXXX, Joten olen sulkemassa sen kahtena kappaleena.
   > 
   > Jos luulet, että olen väärässä tämän ongelman ratkaisemisessa, avaa se uudelleen ja lisää lisäselvennyksiä. Kiitos ja onnellinen koodaus.

4. **Vaihtelevassa versiossa** Joitakin ongelmia on ehkä jo korjattu vaiheistetussa versiossa, mutta niihin ei liity GitHub-ongelmaa. Jos näin on, voit liittää seuraavan viestin, sulkea ongelman ja lisätä `tila: ratkaistu/toimitus` etiketti:

   > Kiitos, että ilmoititte tästä asiasta.
   > 
   > Tämä on tavallinen viesti, joka ilmoittaa sinulle, että täällä mainittu ongelma on läsnä tuotannossa, mutta että se on jo vahvistettu vaiheittain. Tämä tarkoittaa sitä, että seuraavalla kerralla viemme lavastusta tuotantoa, tämä ongelma pitäisi korjata. Tämän vuoksi lopetan tämän asian.
   > 
   > Jos luulet, että olen väärässä tämän ongelman ratkaisemisessa, avaa se uudelleen ja lisää lisäselvennyksiä. Kiitos ja onnellinen koodaus.

### Stale, vanhentunut, passiiviset kysymykset ja Pull-pyynnöt

- Stale Issues tai PRs ovat ne, jotka eivät ole nähneet mitään toimintaa toimenpideohjelmasta 21 päivän ajan (3 viikon kuluttua viimeisestä toiminnasta), mutta vasta kun moderaattori on pyytänyt lisää tietoa/muutoksia.  Ne voidaan sulkea automatisoidulla / botin skriptillä tai moderaattorit itse.

- Toiminta määritellään seuraavasti: Kommentit, joissa pyydetään päivitystä PR:ään ja matkoihin, kuten `status: päivitystä tarvitaan` etiketti jne.

- Jos toimintaohjelma pyytää lisäapua tai -aikaa, edellä mainittua voidaan lieventää ja tarkistaa vastauksen antamisen jälkeen. Joka tapauksessa modeissa olisi käytettävä parhaita arvioita jäljellä olevan PR:n aseman ratkaisemiseksi.

### Muut ohjeet Moderaattoreille GitHubissa

Vaikka sinulla on kirjoitusoikeudet freeCodeCampin repoon, **sinun ei pitäisi koskaan pushata koodia suoraan freeCodeCamp repoihin**. Kaikkien koodien pitäisi syöttää freeCodeCampin koodaus arkiston haarautuneen pull-pyynnön muodossa. @ info: whatsthis

Sinun ei myöskään pitäisi koskaan hyväksyä omia PR-ohjeita. Niiden täytyy olla QA toinen moderaattori, aivan kuten mikä tahansa muu PR.

Jos huomaat joku rikkoo [käytännesääntöä](https://code-of-conduct.freecodecamp.org) GitHub kysymyksiä, tai avaamalla pull-pyyntöjä ilkivaltaisella sisällöllä tai koodilla, sähköposti dev@freecodecamp. rg linkillä rikkoneen pull-pyyntöön ja voimme harkita niiden kieltämistä freeCodeCampin GitHub organisaatiosta kokonaan.

# Foorumin muokkaaminen

Moderaattorina autat pitämään yhteisömme nautinnollisena paikkana, jossa kuka tahansa oppii ja saa apua. Käytte käsiksi liputettuihin viesteihin ja käsittelette roskapostia, aiheettomia ja muita sopimattomia keskusteluja.

Huomaa, että kun olet moderaattori foorumilla, voit alkaa nähdä sinisen moderaattorin vihjeitä foorumin jäsenistä, kuten "tämä on ensimmäinen kerta [person] on lähetetty - tervetuloa ne yhteisöön! tai "[person] ei ole lähetetty pitkään aikaan - tervetuloa heidät takaisin."

![Sininen tekstiviesti, joka sanoo "tämä on ensimmäinen kerta [person] on lähetetty - tervetuloa ne yhteisöön!](https://i.imgur.com/mPmVgzK.png)

Nämä ovat mahdollisuuksia toivottaa heidät tervetulleeksi ja saada heidät tuntemaan erityisen. Et koskaan tiedä, kuka henkilö joka on marginaalisesti mukana voi tulla meidän seuraava super-auttaja, auttaa monia muita ihmisiä heidän koodausmatkallaan. Jopa pienin ystävällisyys voi laukaista kaskadi hyviä tekoja.

### Foorumin viestien poistaminen

Foorumin valvojilla on kyky poistaa käyttäjän viestit. Sinun tulee tehdä tämä vain seuraavissa tapauksissa:

1. Joku on julkaissut pornografisen tai graafisesti väkivaltaisen kuvan.
2. Joku on julkaissut linkin tai koodin, joka on haitallinen luonnossa, ja voi vahingoittaa muita leiriläisiä, jotka klikkaavat sitä.
3. Joku on tulvannut lankaan, jossa on paljon roskapostiviestejä.

### Roskapostin käsittely

Jos haluat ensimmäisen roskapostin käyttäjälle, lähetä heille viesti ongelman selvittämisestä ja poista linkki tai viesti tarpeen mukaan. Jätä muistiinpano käyttäjän profiiliin selittäen mitä olet tehnyt. Jos ongelma jatkuu, seuraa yllä olevaa prosessia. Hiljaisesti estä käyttäjä lähettämästä (käyttämällä käyttäjän hallintapaneelissa olevaa hiljaisuusmahdollisuutta) ja lähetä sitten varoitus Code of Conductin avulla. Tarkista yksityisviestissä oleva ruutu, joka osoittaa, että viestisi on "virallinen varoitus".

Voit esittää kysymyksiä ja raportoida tapahtumista [henkilökunta foorumi -osiossa](https://forum.freecodecamp.com/c/staff).

### Keskustelujen käsittely aiheettomissa keskusteluissa

Viestit tai aiheet, jotka näyttävät olevan väärässä paikassa, voidaan luokitella uudelleen tai nimetä uudelleen mille tahansa sopivaksi.

Poikkeuksellisissa olosuhteissa voi olla asianmukaista, että moderaattori haaraa keskustelua useisiin säikeisiin.

Jos sinulla on vielä ongelmia tai kysymyksiä, tee viesti toiminnallasi henkilöstökategoriassa, ja merkitse toinen moderaattori, jos haluat heidän tarkistavan moderointitoiminnot.

### Alaikäiset Käyttäjät

Meidän Käyttöehdot edellyttää, että freeCodeCamp käyttäjät ovat vähintään 13-vuotiaita. Siinä tapauksessa, että käyttäjä paljastaa, että he ovat alle 13-vuotiaita, lähetä heille alla oleva viesti ja poista heidän foorumitili (jos poisto ei ole käytettävissä, tilin keskeyttäminen riittää). Sitten sähköposti [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) tai [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) poistaa käyttäjän freeCodeCamp tili samoin.

```markdown
SUBJECT: Alle 13-vuotiaat käyttäjät eivät saa käyttää foorumia per käyttöehdot

On tullut tietoomme, että olet alle 13-vuotias. Per [freeCodeCamp käyttöehdot](https://www.freecodecamp.org/news/terms-of-service), sinun on oltava vähintään 13-vuotias käyttääksesi sivustoa tai foorumia. Aiomme poistaa sekä freeCodeCamp tilin ja foorumi tili. Tämä rajoitus pitää meidät Yhdysvaltojen lainsäädännön mukaisina.

Liity uudelleen heti, kun olet saavuttanut vähintään 13 vuotta.

Kiitos ymmärtäväisyydestänne.
```

# Valvotaan Facebookia

Jos näet jotain, joka näyttää rikkovan meidän [Code of Conduct](https://code-of-conduct.freecodecamp.org/), sinun pitäisi poistaa se välittömästi.

Joskus ihmiset julkaisevat asioita, joita he pitävät hauskana. He eivät ymmärrä, että mitä he sanoivat tai mitä he jakavat, voitaisiin tulkita loukkaavaksi. Näissä tapauksissa heidän virkansa pitäisi poistaa, mutta sen lähettänyt henkilö ei välttämättä tarvitse kieltää. Saattamalla heidät poistetaan, he toivottavasti tulevat ymmärtämään, että se, mitä he lähettivät oli sopimaton.

Mutta jos kyseessä on suurenmoinen rikos, jota ei voida kohtuudella katsoa kulttuurisen eron tai englantilaisen kielen väärinkäsityksen perusteella, sitten sinun pitäisi harkita voimakkaasti estää jäsenen Facebook-ryhmästä.

# Hallitsee Discordia

Näin moderaattorit käsittelevät meidän [Code of Conduct](https://code-of-conduct.freecodecamp.org/) Discordissa:

1. **Varmista, että se oli tarkoitus rikkoa käytännesääntöjä.** Kaikkia käytännesääntöjen rikkomuksia ei ollut tarkoitettu sellaisenaan. Uusi kamera saattaa lähettää suuren määrän koodia apuun, tietämättä, että tätä voidaan pitää roskapostina. Näissä tapauksissa voit vain pyytää heitä liittämään koodinsa esimerkiksi Codepenin tai Pastebinin palveluihin.

2. **Jos leirintäalue rikkoo selvästi käytännesääntöjä, moderaattori toimii seuraavasti:**

- Keskeytä loukkaava leirintäalue, mutta älä varoita tai uhkaa heitä. Sen sijaan, hiljaa antaa heille keskeytetty rooli Discordissa, sitten lähettää heille seuraava viesti:

```
Tämä on normaali viesti ilmoittaa sinulle, että minun piti tilapäisesti keskeyttää puhuminen freeCodeCamp Discord-palvelimella.

Olen moderaattori, joka toimii avoimen lähdekoodin yhteisömme puolesta. Voin harkita poistamalla suspensio, mutta minun täytyy sinun tehdä seuraavat 3 vaiheet ensin:

1. Lue toimintaohjeemme: https://code-of-conduct.freecodecamp.org/
2. Viesti minulle takaisin vahvistaa, että olet lukenut sen.
3. Selitä minulle, miksi luulet keskeyttäneeni teidät, ja miksi minun pitäisi poistaa suspensio.
```

- Raportoi lyhyt yhteenveto tapahtumasta ja miten se vastasi siihen #admin kanava. Tässä on esimerkki siitä, mitä tällainen yhteenveto voisi näyttää:

```
Keskeytetty: _@username_
Syy(t): _Spamming, trolling_
Näyttö: _Yksi tai useampi linkki rikkoneille viesteille_
CoC: _Sent_
```

- Suspensiosta poistamista koskevan raportin pitäisi olla seuraavanlainen:

```
Olen poistanut jousituksen kohteesta ` @username `. Olen lähettänyt heille käytännesäännöt. He tajusivat juuri tänään, että heidät keskeytettiin ja he pyysivät anteeksi.
```

- Rikoksentekijöiden vastauksen perusteella moderaattori päättää, poistaako tämä keskeytyksen rikoksentekijästä. Jos ne vaikuttavat kunnioittavilta ja anteeksipyynnöiltä, moderaattori voi poistaa keskeytyksen. Politiikan alalla moderaattorit ovat tämän prosessin aikana kohteliaita riippumatta siitä, kuinka huonosti rikoksentekijä on käyttäytynyt. Jos he eivät ole kunnioittavia tai haluttomia hyväksymään osallistujakeskuspankkia, keskeyttämistä on noudatettava kieltämällä se Discord-palvelimelta. Käytä samaa yhteenvetoa kuin edellä, mutta korvaa "Keskeytetty:" "Kielletty:".

3. **Miten kieltää ja / tai unban**

- Estääksesi jonkun klikkaa oikeaa käyttäjänimeä/profiilikuvaa ja valitse "Ban <username>". Sinulle annetaan mahdollisuus poistaa heidän aiemmat viestit - valitse "Älä poista mitään", koska viestien olisi pysyttävä läsnä historiallisen ennätyksen.
- Jos päätät kieltää joku, se tarkoittaa, että he eivät halua noudattaa käytännesääntöjämme. Sen vuoksi kameran kieltämistä pitäisi harvoin poistaa. Kuitenkin, jos tarvetta ilmenee, voit tehdä sen klikkaamalla palvelimen nimeä, valitsemalla "Palvelimen asetukset", Valitsemalla "Bans", valitsemalla käyttäjän, jonka haluat kumota, ja klikkaamalla "Peruuta Ban".

Discord Bans are global - et voi kieltää käyttäjää tietyltä kanavalta vain koko palvelimelta.

4. **Poistetaan viestejä** Moderaattoreilla on kyky poistaa viestejä Discordissa. Niiden olisi käytettävä tätä mahdollisuutta vain neljässä hyvin erityisessä tilanteessa:

- Joku on julkaissut pornografisen tai graafisesti väkivaltaisen kuvan.
- Joku on julkaissut linkin tai koodin, joka on haitallinen luonnossa, ja voi vahingoittaa muita leiriläisiä, jotka klikkaavat sitä.
- Joku on tulvannut chatin paljon roskapostia niin äärimmäisessä määrin (yleensä mukana botteja) kuin tehdä chatista täysin käyttökelvoton.
- Joku on julkaissut mainoksia ja / tai itseään edistävän viestin / kuvan (sosiaalinen media).

Kaikissa muissa tilanteissa - jopa tilanteissa, joissa käytännesääntöjä rikotaan - Moderaattoreiden ei pitäisi poistaa viestiä, koska ne ovat tärkeä historiallinen ennätys. Kun poistat viestin, varmista, että otat siitä ensin kuvakaappauksen! Kuvakaappaus voidaan kirjata #mod-log kanavalla, mutta #activity-loki riittää sanoa, että todisteet oli "poistettu johtuen arkaluontoinen sisältö". Huomautus: Jos viesti sisältää materiaalia, joka olisi laitonta ottaa kuvakaappauksen, kopioi viestin linkki sen sijaan - anna viesti linkki @raisedadead lähettää eteenpäin Discordin Luottamus ja Turvallisuustiimiin.

5. **Älä käytä @everyone tai @here** Älä käytä @everyone tai @here missään olosuhteissa! Jokainen yksittäinen henkilö tuossa chat-huoneessa saa ilmoituksen. Joissakin tapauksissa kymmeniä tuhansia ihmisiä. Sen sijaan, jos haluat ihmisten näkevän ilmoituksen, voit kiinnittää sen kanavalle, jotta kaikki voivat lukea sen.

6. **Älä uhkaa kieltää tai keskeyttää** Jos kamera rikkoo käytännesääntöä, eivät uhkaile kieltää tai keskeyttää niitä, eivätkä koskaan varoita niitä julkisesti. Sen sijaan keskustele heidän kanssaan yksityisesti tai lähetä heille DM ja anna keskeyttäminen (jokaista edellä mainittua protokollaa). Kenenkään muun tuossa kanavassa ei tarvitse tietää, että kieltäisit / keskeytit henkilön - leiriläiset voivat nähdä tiivistelmän #activity-log -kanavalla, jos he haluavat pitää kiinni näistä tiedoista. Jos rikkomus oli selvästi tahaton eikä oikeuta keskeyttämistä tai yksityistä keskustelua, tehdä loukkaantunut camper tietoinen hänen / hänen toimintansa tekemättä se törmännyt varoituksen. Esimerkiksi:

- Camper viestit koodin seinään pyytää apua

  Moderaattori: @username Ole hyvä ja käytä Codepenia tai Pastebinia, kun lähetät suuria määriä koodia.

- Tai jos sinun täytyy todella selittää, miksi:

  Moderaattori: @username Ole hyvä ja käytä Codepenia tai Pastebinia, kun lähetät suuria määriä koodia, koska se häiritsee kaikkien välistä keskustelua ja sitä voidaan pitää roskapostina käytännesääntöjen mukaisesti.

- Käytännesääntöjen lievät ja tahattomat rikkomukset

  Moderaattori: Tämä on ystävällinen muistutus kaikille noudattaa käytännesääntöä: https://code-of-conduct.freecodecamp.org/

7. **Älä kerskaile olla valvoja** Älä näe itseäsi yhteisön yläpuolella. Sinä olet yhteisö. Ja yhteisö on luottanut siihen, että autat suojelemaan jotain harvinaista jota me kaikki jaamme - _toivottaa tervetulleeksi_ paikka uusille kehittäjille. Jos kehuskelee siitä, että moderaattori, ihmiset voivat tuntea levottomuutta ympärilläsi, samalla tavalla, että ihmiset voivat tuntea levottomuutta noin poliisi, vaikka he eivät tee mitään väärää. Tämä on vain ihmisluontoa.

8. **Älä ole ristiriidassa muiden valvojien** Jos olet eri mieltä moderaattorin toiminnasta, juttele heidän kanssaan yksityisesti tai tuo se esille #mod-chat-kanavalla. Älä koskaan ohita kieltoa äläkä koskaan ole ristiriidassa muiden valvojien kanssa julkisesti. Sen sijaan keskustele moodikysymyksistä ja vakuuta moderaattori, että heidän pitäisi itse kääntää kielensä tai muuttaa näkemystään. Muista: olemme kaikki samassa joukkueessa. Haluamme arvostaa moderaattoreiden roolia ja esittää yhtenäisen rintaman.

9. **Keskustele muiden valvojien kanssa** Meillä on tilaa vain valvojille. Käytä sitä! Jos tunnet olosi epämiellyttäväksi siitä, miten käsitellä tiettyä tilannetta, kysy muilta valvojilta apua. Jos luulet, että jostakin pitäisi keskustella, tehkää se. Olet osa tiimiä ja arvostamme jokaisen tiimin jäsenen panostusta! Vaikka olisitte täysin eri mieltä joistakin näistä suuntaviivoista tai käytännesäännöistä!

10. **Tilapäisesti passiivinen** Jos et ole aktiivinen Moderaattorina jonkin aikaa lomailun vuoksi, sairaus tai jokin muu syy, varmista, että kerrot muille #mod-chat-kanavassa. Tämä on niin tiedämme, jos voimme luottaa siihen, että voit olla säännöllisesti aktiivinen palvelimella tai ei.

# Miten tulla moderaattori

Jos autat ihmisiä yhteisössä johdonmukaisesti ajan mittaan, meidän Moderaattori Team lopulta huomaa, ja yksi heistä mainitsee sinut mahdollisena moderaattorina [meidän henkilökunta](https://forum.freecodecamp.org/g/Team). Ei ole pikakuvakkeita tulossa moderaattori.

Jos olet hyväksytty, lisäämme sinut meidän Moderaattori Joukkueet [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [foorumi](https://forum.freecodecamp.org/g/moderators), jne.

> [!HUOM] > **GitHubille:** Kun sinut on hyväksytty moderaattoriksi, saat Github repo kutsun. Sinun täytyy suunnata kohti [freeCodeCamp GitHub Organisation Kutsu](https://github.com/orgs/freeCodeCamp/invitation) jotta voit hyväksyä kutsu. Tämä on tarpeen, jotta voimme antaa sinulle kirjoitusoikeudet joihinkin arkistoihimme.

# Miten me eläkkeelle passiiviset moderaattorit

Huomioithan, että poistamme usein modeja, jotka luulemme olevan epäaktiivisia. Kun teemme näin, lähetämme seuraavan viestin:

> Tämä on tavallinen viesti, joka ilmoittaa sinulle, että: koska et näytä olleen aktiivinen valvoja viime aikoina, me poistamme sinut meidän Moderaattori joukkue. Arvostamme suuresti apuanne menneisyydessä.

> Jos luulet että teimme tämän virheen, tai kun olet valmis tulemaan takaisin ja edistää enemmän, vastaa vain tähän viestiin ja kerro minulle.

# Miten meidän Kehittäjien huone toimii

Kuka tahansa on tervetullut [Kehittäjien huoneeseen Discordissa](https://discord.gg/KVUmVXA). Se on nimetty chat-huone moderaattoreille ja muille leiriläisille, jotka ovat mukana yhteisössämme millä tahansa tavalla, myös valmisteluryhmien kautta.

Oletuksemme on, että osallistujat lukevat tässä huoneessa mitään, mikä suoraan mainitsee heidät `@käyttäjätunnuksella`. Kaikki muu on vapaaehtoista. Mutta voit lukea mitä tahansa virkaa siellä ja vuorovaikutuksessa.

# Sotilaiden kanssa asiointi

Sinua saattavat lähestyä organisaatiot, jotka haluavat kumppanin tai yhteisbrändin kanssa freeCodeCamp jollakin tavalla. Kun tajuat, että tämä on mitä he ovat jälkeen, lakatkaa puhumasta heille ja kertokaa heille sähköpostia quincy@freecodecamp.org. Hän saa koko ajan tällaisia ehdotuksia ja pystyy parhaassa asemassa arvioimaan, onko tällainen suhde yhteisömme arvoinen (ja se on harvinaista).

# Terveyteen liittyvien (mentaalisten) tutkimusten käsittely

Saatat törmätä tilanteisiin, joissa käyttäjät hakevat lääkärinhoitoa tai käsittelevät mielenterveyskysymyksiä ja etsivät tukea. Politiikan osalta teidän pitäisi välttää puhumasta näistä asioista yksityisesti. Jos tilanne jossain vaiheessa heijastaa takaisin fCC:hen, haluamme käydä keskustelun (keskustelut) kirjaa. Tee selväksi, että emme ole lääketieteen ammattilaisia ja että rohkaiset käyttäjää löytämään ammattitaitoista apua. Niin vaikeaa kuin se joskus voi olla, välttää antamasta vinkkejä tai neuvoja muu kuin osoittaa käyttäjä suuntaan ammattimaista apua!

Jos näin tapahtuu Discordissa: Keskeytä käyttäjä. Tämä ei ole rangaista heitä! Käyttäjän keskeyttäminen luo yksityisen kanavan, joka on käytettävissä vain käyttäjän ja tiimin kautta. Tämä hyödyttää sekä käyttäjää että fCC:tä monella tavalla:

- Käyttäjä on taattu jonkin verran yksityisyyttä
- Julkinen keskustelu ei enää häiriinny
- Muut tiimin jäsenet voivat pitch in, jos olet epämukava käsitellä tilannetta itse

> [!HUOM] Käyttäjän keskeyttäminen antaa heille viestin käytännesääntöjen lukemisesta. Varmista, että kerrot käyttäjälle, että keskeytit heidät antamaan heille yksityisyyttä ja että heitä ei rangaista. Tämä on hyvin tärkeää! Haluamme ehdottomasti välttää antamasta käyttäjille ajatusta siitä, että heitä rangaistaan siitä, että he saavat apua!

Jos uskot, että käyttäjä pystyy liittymään uudelleen yhteisöön, napsauta hiiren oikealla puolella olevaa kanavaa ja kopioi ID. Laita seuraava viesti #mod-lokiin:

> Terveydenhuollon viiteohjeet: <channel ID> <username>

Sen jälkeen voit poistaa Suspension käyttäjältä niin kuin normaalisti.

Hyödyllisiä URL-osoitteita:

http://www.suicide.org/international-suicide-hotlines.html

# Vapaata puhetta koskeva merkintä

Joskus ihmiset puolustavat jotain loukkaavaa tai sytyttävää, jota he sanoivat "vapaana puheena."

Tämä XKCD-sarjakuva tiivistää täydellisesti useimpien yhteisöjen ajatukset vapaasta puheesta. Joten jos joku puolustaa jotain, he sanovat "vapaa puhe" vapaasti lähettää sen heille.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Kiitos tämän lukemisesta, ja kiitos kehittäjäyhteisön auttamisesta!

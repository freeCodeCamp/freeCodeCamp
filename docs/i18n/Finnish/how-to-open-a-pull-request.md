# Kuinka avata Pull-pyyntö (PR)

Pull pyyntö mahdollistaa sen, että voit lähettää muutoksia haarukastasi GitHubissa freeCodeCamp.orgin päärepoon. Kun olet tehnyt muutoksia koodiin, tai koodaus haasteita, sinun tulee noudattaa näitä ohjeita lähettää PR.

## Valmistele hyvä PR-otsikko

Suosittelemme käyttämään [perinteistä otsikkoa ja viestejä](https://www.conventionalcommits.org/) commitit ja vedä pyyntö. Yleissopimuksen muoto on seuraava:

> `<type>([valinnainen soveltamisala(t)]): <description>`
> 
> Esimerkiksi:
> 
> `fix(learn): testit tehdä...kun silmukka haaste`

Kun avaat Pull Request(PR), voit käyttää alla olevaa määrittääksesi tyypin, laajuuden (valinnainen) ja kuvauksen.

**Tyyppi:**

| Tyyppi | Milloin valita                                                                          |
|:------ |:--------------------------------------------------------------------------------------- |
| korjaa | Muutettu tai päivitetty/parannettu toiminnallisuus, testit, oppitunti ja niin edelleen. |
| tappio | Vain jos lisäät uusia toimintoja, testejä jne.                                          |
| urakka | Muutokset, jotka eivät liity oppituntien koodiin, testeihin tai sanamuotoon.            |
| docs   | Muutokset `/docs` -hakemistoon tai rahoitukseen liittyviin ohjeisiin jne.               |

**Laajuus:**

Voit valita laajuuden [tästä tunnisteiden luettelosta](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Kuvaus:**

Pidä se lyhyt (alle 30 merkkiä) ja yksinkertainen, voit lisätä lisää tietoa PR-kuvauslaatikkoon ja kommentteihin.

Esimerkkejä PR-ohjelmien hyvistä nimikkeistä olisivat seuraavat:

- `fix(a11y): parempi hakupalkin kontrasti`
- `feat: lisää testejä html- ja css haasteisiin`
- `fix(api,client): estää CORS-virheitä lomakkeen toimittamisessa`
- `docs(i18n): Kiinankielinen käännös paikallisten asetusten`

## Pull-pyynnön ehdottaminen

1. Kun muokkaukset on sitoutunut, sinua kehotetaan luomaan pull-pyyntö haarukkaasi GitHub Page.

   ![Kuva - Vertaa pull-pyynnön kehotusta GitHubissa](./images/github/compare-pull-request-prompt.png)

2. Oletuksena kaikkien pull-pyyntöjen pitäisi olla freeCodeCamp main repoa, `master` haaraa vastaan.

   Varmista, että Base Fork on asetettu freeCodeCamp/freeCodeCamp kun nostat Pull Request.

   ![Kuva - Haarukkien vertailu pull-pyyntöä tehtäessä](./images/github/comparing-forks-for-pull-request.png)

3. Lähetä pull-pyyntö haarasta freeCodeCampin `master` -haaraan.

4. PR sisältää yksityiskohtaisemman yhteenvedon muutoksista, jotka olet tehnyt ja miksi.

   - Sinut tullaan esittämään pull pyyntö malli . Tämä on tarkistuslista, jota sinun olisi pitänyt seurata ennen pull-pyynnön avaamista.

   - Täytä tiedot niin kuin näette sopivaksi. Nämä tiedot tarkistetaan ja arvioijat päättävät, hyväksytäänkö pull-pyyntösi vai ei.

   - Jos PR:n tarkoituksena on puuttua olemassa olevaan GitHub Issueen, sitten lopussa teidän PR: n kuvauselin, käytä avainsanaa _Sulkee_ viitenumerolla [sulkee tämän ongelman automaattisesti, jos PR on hyväksytty ja yhdistetty](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Esimerkki: `Sulkee #123` sulkee ongelman 123

5. Ilmoittakaa, onko olet testannut paikallista kopiota sivustosta vai ei.

   Tämä on erittäin tärkeää, kun tehdään muutoksia, jotka eivät ole pelkästään tekstin sisältöä kuten dokumentaatio tai haasteiden kuvaus. Esimerkkejä paikallista testausta vaativista muutoksista ovat JavaScript, CSS, tai HTML jotka voivat muuttaa sivun toiminnallisuutta tai asettelua.

## Palaute pull-pyynnöistä

> Onnittelut! :tada: kun olet tehnyt PR:n ja kiitos paljon siitä, että olet käyttänyt aikaa osallistumiseen.

Moderaattorimme tulevat nyt katsomaan ja jättämään sinulle palautetta. Olkaa kärsivällisiä muiden moderaattoreiden kanssa ja kunnioittakaa heidän aikaansa. Kaikki pull-pyynnöt tarkistetaan aikanaan.

Jos tarvitset apua, keskustele [osallistujien chat-huoneesta](https://gitter.im/FreeCodeCamp/Contributors), olemme enemmän kuin mielellämme auttaa sinua.

> [!TIP] Jos haluat osallistua enemmän vetopyyntöjä, suosittelemme, että luet [tehdä muutoksia ja synkronoit](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) ohjeet, jottei haarukkaasi tarvitse poistaa.

## Ristiriidat pull-pyynnössä

Ristiriitoja voi syntyä, koska monet tietolähteet työskentelevät arkistossa, ja muutokset voivat rikkoa PR:si, joka odottaa arvostelua ja yhdistämistä.

Useammin kuin ei ehkä vaadi rebase, koska me squash all commits, kuitenkin jos perustetta pyydetään tässä on mitä sinun pitäisi tehdä.

### Tavallisia korjauksia ja ominaisuuksia varten

Kun työskentelet säännöllisten vikojen ja ominaisuuksien parissa kehityshaarassamme `master`, voit tehdä yksinkertaisen korjauksen:

1. Luo paikallinen kopio:

   ```console
   git checkout <pr-branch>
   git pull --rebase ylävirtaan master
   ```

2. Ratkaise mahdolliset ristiriidat ja lisää / muokkaa commitit

   ```console
   # Joko
   git add .
   git commit -m "chore: ratkaista ristiriidat"

   # Tai
   git add .
   git commit --amend --no-edit
   ```

3. Paina muutoksesi takaisin PR:ään

   ```console
   git push --force origin <pr-branch>
   ```

### Tulevat opetussuunnitelmat ja ominaisuudet

Kun työskentelet tulevan opetussuunnitelman ominaisuuksien parissa, `seuraava *` sivukonttori, sinulla on kirsikkavalinta:

1. Varmista, että ylävirrasi tulee synkronoitua paikallisesi kanssa:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Ota varmuuskopio

   a. Joko poista paikallinen sivukonttorisi varmuuskopion ottamisen jälkeen (jos sinulla on vielä se paikallisesti):

      ```console
      git checkout <pr-branch-name>

      # example:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # example:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. Tai vain varmuuskopio Pr haarasta (jos sinulla ei ole sitä paikallisesti):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # esimerkki:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Aloita pois päältä puhtaalla liittimellä:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Ratkaise mahdolliset ristiriidat ja siivoa, asenna suoritettavat testit

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

6. Jos kaikki näyttää hyvältä työnnä takaisin PR-palveluun

   ```console
   git push --force origin <pr-branch-name>
   ```

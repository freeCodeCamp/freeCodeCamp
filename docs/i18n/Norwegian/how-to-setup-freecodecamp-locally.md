Følg disse retningslinjene for å sette opp freeCodeCamp lokalt i systemet. Dette anbefales sterkt hvis du ønsker å bidra regelmessig.

For noen av bidraget arbeidsstrømmene må du ha lokal freeCodeCamp. For eksempel kan man se kodeutfordringer eller feil i feilsøking og fikse i kodebasen.

> Hvis du ikke er interessert i å sette opp freeCodeCamp lokalt vurderer bruk av Gitpod, et gratis online dev miljø.
> 
> [![Åpne i Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Starter et utvikler-til-kode utviklermiljø i nettleseren din.)

## Forbered din lokale maskin

Start ved å installere en forutsetning for programvare til operativsystemet.

Vi støtter primært utviklingen på **\*nix** systemer. Våre ansatte og samfunnshjelper jobber regelmessig med denne kodebasen med verktøy installert på Ubuntu og macOS.

Vi støtter også Windows 10 via WSL2, som du kan forberede ved å [lese denne veiledningen](/how-to-setup-wsl).

Noen medlemmer utvikler også på Windows 10 natively med Git for Windows (Git Bash) og andre verktøy installert i Windows. Vi har ikke offisiell støtte for et slikt oppsett akkurat nå, anbefaler vi at du bruker WSL2 istedet.

**Forutsetninger:**

| Forutsetninger                                                                              | Versjon | Notater                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                | `12,x`  | [LTS tidsplan](https://github.com/nodejs/Release#release-schedule)                                                                                                                             |
| npm (kommer sammen med Node)                                                                | `6,x`   | Har vi ikke LTS utgivelser, bruker vi versjonen tilknyttet Node LTS                                                                                                                            |
| [MongoDB samfunnstjener](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Utgivelsesnotater](https://docs.mongodb.com/manual/release-notes/), Merk: Vi er for tiden på `3.6`, en [oppgradering er planlagt](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> Hvis du har en annen versjon, vennligst installer anbefalt versjon. Vi kan bare støtte installeringsproblemer for anbefalte versjoner. Se [feilsøking](#troubleshooting) for detaljer.

Hvis Node.js allerede er installert på maskinen din, kjør følgende kommandoer for å validere versjonene:

```console
node -v
npm -v
```

> Vi anbefaler sterkt oppdatering til de nyeste stabile utgivelsene av programvaren oppført ovenfor, også kjent som langtidsstøtte (LTS) utgavene.

Når du har installert de nødvendige forutsetningene, må du forberede utviklingsmiljøet ditt. Dette er vanlig for mange utviklingsarbeidsflyter, og du trenger bare å gjøre dette én gang.

**Følg disse trinnene for å gjøre ditt utviklingsmiljø klar:**

1. Installer [Git](https://git-scm.com/) eller din favoritt Git klient, hvis du ikke har gjort det allerede. Oppdatering til den nyeste versjonen; versjonen som kom samlet med ditt OS kan være utdatert.

2. (Valgfri, men anbefales) [Sett opp en SSH nøkkel](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

3. Installer en kodeeditor til ditt valg.

   Vi anbefaler på det sterkeste å bruke [Visual Studio Code](https://code.visualstudio.com/) eller [Atom](https://atom.io/). Disse er gode, gratis og åpen kildekodeeditorer.

4. Sett opp maleri for din kode editor.

   Du burde ha [ESLint kjører i redigeringsprogrammet](http://eslint.org/docs/user-guide/integrations.html), og det vil markere noe som ikke samsvarer med [freeCodeCamp's JavaScript-stil Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Vennligst ikke ignorer noen feil fra valget. De er ment å **hjelpe** deg og sikre en ren og enkel kodebase.

## Gaffes lageret på GitHub

[Tømmer](https://help.github.com/articles/about-forks/) er et steg hvor du får din egen kopi av freeCodeCamp's hoveddepot (a.k.a _repo_) på GitHub.

Dette er helt nødvendig, siden du kan arbeide med din egen kopi av freeCodeCamp på GitHub, eller å laste ned (klone) arkivet ditt for å fungere lokalt. Senere vil du kunne be om endringer som skal trekkes inn i hovedarkivet fra gaffelen din via en pull-forespørsel (PR).

> [!TIP] Hoveddepoet `https://github.com/freeCodeCamp/freeCodeCamp` omtales ofte som `oppstrøms` reposet.
> 
> Din gaffel hos `https://github.com/YOUR_USER_NAME/freeCodeCamp` blir ofte referert til som `opprinnelse` arkivet.

**Følg disse trinnene for å kjøre i `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Gå til GitHub-mappen på freeCodeCamp : <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klikk på "Fork" knappen øverst i høyre hjørne av grensesnittet ([Flere detaljer her](https://help.github.com/articles/fork-a-repo/)

3. Etter at arkivet er fort, vil du bli tatt til din kopi av det freeCodeCamp depotet på `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Hvordan du fork freeCodeCamp på GitHub (skjermbilde)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Hvordan du fork freeCodeCamp på GitHub" />
</details>

## Klon din gaffel fra GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that either owned by you or by someone else. I ditt tilfelle, er den eksterne plasseringen din `fork` of freeCodeCamp's repository som skal være tilgjengelig på `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Kjør disse kommandoene på din lokale maskin:

1. Åpne en terminal / Ledetekst / Shell i prosjektmappen

   _dvs.: `/yourprojectsdirectory/`_

2. Utløste din forgrening av freeCodeCamp, erstatter `YOUR_USER_NAME` med ditt GitHub brukernavn

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Dette vil laste ned hele gratis-Camp depotet til din prosjektkatalog.

Merk: `--depth=1` skaper en grunt klone av gaffelen, med bare den siste historikken/kommandoen.

## Sett opp synkronisering fra overordnet

Nå som du har lastet ned en kopi av gaiden, må du sette opp en `oppstrøms` ekstern til foreldrearkivet.

[Som nevnt tidligere](#fork-the-repository-on-github)blir hovedoppbevaringsstedet referert `oppstrøms` arkivet. Din gaffel referert til som `opprinnelse` repository.

Du trenger en referanse fra din lokale klone til `upstream` repository i tillegg til `origin` repository. Dette er slik at du kan synkronisere endringer fra hovedarkivet uten at det er krav om å føre og klone flere ganger.

1. Endre mappe til ny freeCodeCamp mappe:

   ```console
   cd freeCodeCamp
   ```

2. Legg til en ekstern referanse til hovedgratisCamp depot:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Sørg for at konfigurasjonen ser riktig ut:

   ```console
   git fjern-v
   ```

   Resultatet skal se ut som nedenfor:

   ```console
   opprinnelse https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   opprinnelse https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   oppstrøms https://github.com/CodeCamp/freeCodeCamp.git (push)
   ```

## Løpende freeCodeCamp lokalt

Nå som du har en lokal kopi av freeCodeCamp, kan du følge disse instruksjonene for å kjøre den lokalt. Dette vil tillate deg å:

- Forhåndsvisning til sider ettersom de vil dukke opp på læringsplattformen.
- Arbeid med UI relaterte problemer og forbedringer.
- Feilsøk og løse problemer med programserverne og klientappene.

Hvis du kjører inn i problemer, må du først foreta et web-søk etter problemet ditt og se om det allerede er besvart. Dersom du ikke kan finne en løsning, Vennligst søk på våre [GitHub problem](https://github.com/freeCodeCamp/freeCodeCamp/issues) </a> side for en løsning og rapporter problemet hvis det ikke er rapportert enda.

Som alltid, føler deg fri til å hoppe til våre [Bidragsytere chatrom på Gitter](https://gitter.im/FreeCodeCamp/Contributors) eller [vår Discord-server](https://discord.gg/pFspAhS), for raske spørringer.

> Du kan hoppe over kjørende freeCodeCamp lokalt hvis du bare redigerer filer. For eksempel kan du utføre en `rebase`, eller løse `sammenslåing` konflikter.
> 
> Du kan alltid returnere til denne delen av instruksene senere. Du bør bare **** hoppe over dette trinnet hvis du ikke trenger å kjøre appene på maskinen din.
> 
> [Hopp over til endringer](#making-changes-locally).

### Konfigurere avhengigheter

#### Trinn 1: Sette opp miljøvariabelfilen

Standard API nøkler og miljø variabler er lagret i filen `sample.env`. Denne filen må kopieres til en ny fil med navn `.env` som er tilgjengelig dynamisk i installasjonstrinnet.

```console
# Lag en kopi av "samle" og gi det navnet ".env".
# Fyll det med de nødvendige API-nøklene og hemmelighetene:

# macOS / Linux
cp sample. nv .env

# Windows
kopier eksempel.env .env
```

Nøklene i `.env` filen er _ikke_ nødvendig for å bli endret for å kjøre programmet lokalt. Du kan la standardverdiene som er kopiert fra `eksempel.env` som er fjernet.

> Husk hvis du vil bruke tjenester som Auth0 eller Algolia, Du må kjøpe dine egne API-nøkler for de tjenestene og redigere postene slik i `. nv` fil.

#### Trinn 2: Installere avhengigheter

Dette trinnet installeres de nødvendige avhengighetene for at applikasjonen skal kunne kjøre:

```console
npm ci
```

#### Steg 3: Start MongoDB og hovednøkkel databasen

Før du kan kjøre programmet lokalt, må du starte MongoDB-tjenesten.

> [!NOTE] Med mindre du har MongoDB kjørt i et oppsett annet enn standard, URL-adressen lagret som `MONGOHQ_URL` i `. nv` filen skal fungere som det er bra. Hvis du bruker en egendefinert konfigurasjon, endre denne verdien etter behov.

Start MongoDB serveren i en separat terminal:

- På macOS & Ubuntu:

  ```console
  mongod
  ```

- På Windows, må du angi full bane til `mongod` binærkode

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Sørg for å erstatte `3.6` med den versjonen du har installert

> [!TIP] Du kan unngå å måtte starte MongoDB hver gang ved å installere den som bakgrunnstjeneste. Du kan [lære mer om det i sin dokumentasjon for ditt OS](https://docs.mongodb.com/manual/administration/install-community/)

La oss lage en plass til databasen. I dette trinnet kjører vi kommandoen nedenfor som fyller MongoDB-serveren med noen innledende datasett som er påkrevd av tjenestene. Blant annet er det noen få ordninger.

```console
npm kjør seed
```

#### Trinn 4: Start freeCodeCamp klientprogrammet og API serveren

Du kan nå starte API serveren og klientprogrammene.

```console
npm løp utvikleren
```

Denne ene kommandoen vil sette i gang alle tjenestene, inkludert API-serveren og klientappene som du vil jobbe med.

> [!NOTE] Når du er klar, åpne en nettleser og **gå til <http://localhost:8000>**. Hvis appen lastes inn, gratulerer - du er klar! Du har nå en kopi av freeCodeCams hele læringsplattform som kjører på din lokale maskin.

> [!TIP] API serveren serverer APIer på `http://localhost:3000`. Gatsby appen tjener klientprogrammet på `http://localhost:8000`

> Hvis du besøker <http://localhost:3000/explorer> bør du se de tilgjengelige APIene.

## Logg inn med en lokal bruker

Ditt lokale oppsett fyller automatisk en lokal bruker i databasen. Klikk på `Logg på` -knappen vil automatisk godkjenne deg i den lokale applikasjonen.

Det er imidlertid litt vanskelig å få tilgang til siden for brukerporteføljen. In development, Gatsby overtar serveringen av klientsider og vil derfor få en `404` side for brukerporteføljen når du arbeider lokalt.

Bare å klikke på **"Forhåndsvis tilpasset 404 side"** vil videresende deg til riktig side.

<details>
   <summary>
      Hvordan logge inn når du arbeider lokalt (skjermbilde)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Slik logger du inn når du arbeider lokalt" />
</details>

## Gjør endringer lokalt

Du kan nå gjøre endringer i filer og gjøre endringer i din lokale klone av din fork.

Følg disse trinnene:

1. Valider at du er på `master` grenen:

   ```console
   git status
   ```

   Du bør få et utgang slik:

   ```console
   På grensjefen
   er grenen oppdatert med "opprinnelse/master".

   ingenting å utføre, arbeidsmappen er ren
   ```

   Dersom du ikke er på master- eller arbeidskatalogen din ikke er ren eller løser noen utestående filer/komma og kassen `master`:

   ```console
   git checkout master
   ```

2. Synkroniser siste endringer fra freeCodeCamp upstream `master` gren til din lokale hovedgren:

   > [!ADVARSEL] Hvis du har en utestående trekkforespørsel som du har laget fra `master` grenen av forket ditt, du vil miste dem på slutten av dette trinnet.
   > 
   > Du må forsikre deg om at trekkforespørselen din er slått sammen av en moderator før du utfører dette trinnet. For å unngå dette scenariet bør du **alltid** jobbe på en annen gren enn `master`.

   Dette trinnet **vil synkronisere de nyeste endringene** fra hovedarkivet til freeCodeCamp. Det er viktig at du rebaserer din filial på toppen av den siste `oppstrøm/master` så ofte som mulig for å unngå konflikter senere.

   Oppdater din lokale kopi av freeCodeCamp oppstrøms lagringsplass:

   ```console
   git henter oppstrøms
   ```

   Tilbakestill din mastergren med den freeCodeCamp master:

   ```console
   git reset --hard upstream/master
   ```

   Send din mastergren til din opprinnelse for å ha en ren historie på gaffelen på GitHub:

   ```console
   git skyver opprinnelse master - kraft
   ```

   Du kan validere din nåværende master matcher oppstart/master ved å utføre en diff:

   ```console
   git diff oppstrøm/master
   ```

   Resultatet som følger bør være tomt.

3. Lag en ny filial:

   Ved å arbeide med en egen gren for hvert problem kan du holde din lokale arbeidskopi ren. Du burde aldri jobbe på `master`. Dette vil jage ut kopien din av freeCodeCamp og du må kanskje begynne på nytt med en ny klone eller plante.

   Kontroller at du er på `master` som forklart tidligere og forgrener derfra:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Grennavnet ditt bør starte med en `fix/`, `feat/`, `docs/`, osv. Unngå å bruke problemnummer i grener. Hold dem korte, betydningsfulle og unike.

   Noen eksempler på gode filialnavn er:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Rediger sider og arbeid med koden i favoritttekstbehandleren.

5. Når du er fornøyd med de endringene skal du eventuelt kjøre freeCodeCamp lokalt for å forhåndsvise endringene.

6. Pass på at du fikser eventuelle feil og sjekk formateringen på endringene dine.

7. Kontroller og bekreft filene som du oppdaterer:

   ```console
   git status
   ```

   Dette bør vise en liste over `unstaged` filer som du har redigert.

   ```console
   På grenen funksjon/dokumentasjon
   Filialen din er oppdatert med "oppstrøm/funksjon/dokumentasjon".

   Endringer ikke sortert for forpliktelse:
   (bruk "git add/rm <file>... for å oppdatere hva som komprimeres)
   (bruk "git checkout -- <file>." for å kaste endringer i arbeidsmappen)

       endret: CONTRIBUTING. d
       modifisert: docs/README.md
       modifisert: docs/how-to-setup-freecodecamp-locally. d
       modifisert: docs/how-to-work-on-guide-articles.md
...
   ```

8. Fase endringene og legg et forpliktelse:

   I dette trinnet skal du bare merke filer som du har redigert eller lagt til selv. Du kan tilbakestille og løse filer som du ikke har tenkt å gjøre det hvis nødvendig.

   ```console
   git legg til sti/til/my/endret/fil.ext
   ```

   Eller du kan legge til alle `unstaged` filer til testområdet:

   ```console
   legg til galt.
   ```

   Filene som ble flyttet til testområdet vil bli lagt til når du utfører.

   ```console
   git status
   ```

   Produksjon:

   ```console
   På grenen funksjon/dokumentasjon
   Filialen din er oppdatert med "oppstrøm/funksjon/dokumentasjon".

   Endringer som skal forpliktes:
   (bruk "git reset HEAD <file>..." to unstage)

       modifisert: CONTRIBUTING.md
       endret: docs/README.md
       endret: docs/how-to-setup-freecodecamp-locally.md
       modifisered: docs/how-to-work-on-guide-articles.md
   ```

   Nå kan du gjøre endringer med en kort melding som:

   ```console
   git commit -m "fix: min korte melding
   ```

   Some examples:

   ```md
   rett: oppdater guide artikkelen for Java - for loop
   funksjon: legg til en veiledende artikkel for alexa-ferdigheter
   ```

   Valgfritt:

   Vi anbefaler på det sterkeste å lage et konvensjonelt forpliktende budskap. Dette er en god praksis du vil se på noen av de populære åpen kildekode-arkivene. Denne oppmuntrer deg til å følge vanlig praksis.

   Noen eksempler på konvensjonelle innsendelsesmeldinger er:

   ```md
   fiks: oppdater HTML guide artikkel
   fiksing: oppdater byggeskript for Travis-CI
   -funksjonen: legg til artikkel for JavaScript-heisting
   docs: oppdater bidrags retningslinjer
   ```

   Hold disse korte, ikke mer enn 50 tegn. Du kan alltids legge til ytterligere informasjon i beskrivelsen av innleveringsmeldingen.

   Dette tar ikke lenger tid enn ukonvensjonell melding, som f.eks. "oppdater fil" eller "legg til index.md"

   Du kan lære mer om hvorfor du burde bruke vanlige komma [her](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Hvis du oppdager at du trenger å redigere en fil eller oppdatere forpliktelsen etter å ha foretatt en forpliktelse, kan du gjøre det etter at du har redigert filene med:

   ```console
   git commit --amend
   ```

   Dette åpner en standard tekstbehandler som `nano` or `vi` hvor du kan redigere forpliktende meldingstekst og legge til/redigere beskrivelsen.

10. Deretter kan du presse endringene til før:

    ```console
    git skyver opprinnelse filial/navn her
    ```

## Foreslå trekkforespørsel (PR)

Etter du har utført dine endringer, se her for [hvordan du åpner en trekkforespørsel](how-to-open-a-pull-request.md).

## Hurtig kommandoer referanse

En rask referanse til kommandoene du vil trenge når du arbeider lokalt.

| kommando                                                         | beskrivelse                                                                           |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `npm ci`                                                         | Installere / re-installere alle avhengigheter og bootstraps de ulike tjenestene.      |
| `npm kjør seed`                                                  | Analyser alle markdown og setter dem inn i MongoDB.                                   |
| `npm løp utvikleren`                                             | Starter the freeCodeCamp API Server og Client Applications.                           |
| `npm prøving`                                                    | Kjør alle JS-tester i systemet, inkludert klienten, server, linte og utfordre tester. |
| `npm kjøre test:client`                                          | Kjør klienttesten som er egnet.                                                       |
| `npm kjør prøving:pensum`                                        | Kjør hvilken læreplantest som er egnet.                                               |
| `npm kjøre test:curriculum --block='Basic HTML og HTML5'`        | Test en bestemt blokk.                                                                |
| `npm kjøre test:curriculum --superblock='responsive-web-design'` | Test en spesifikk SuperBlock.                                                         |
| `npm drevet prøvings-læreplanverk`                               | Kjør pensum test-drakten, uten å seile etter den første feilen                        |
| `npm kjøre test:server`                                          | Kjør servertesten på nytt.                                                            |
| `npm kjør e2e`                                                   | Kjør trykk enden av for å avslutte tester.                                            |
| `npm kjør rent`                                                  | Avinstallerer alle avhengigheter og renser opp cacher.                                |

## Feilsøking

### Problemer med å installere de anbefalte forutsetningene

Vi utvikler jevnlig på de siste eller mest populære operativsystemene som macOS 10.15 eller senere, Ubuntu 18.04 eller senere og Windows 10 (med WSL2).

Det anbefales å undersøke ditt spesifikke problem på ressurser, slik som Google, Stack Overflow og Stack Exchange. Det er en god sjanse for at noen har stått overfor samme problemstilling, og at det allerede finnes et svar på din spesifikke spørring.

Hvis du er på et annet OS og/eller fortsatt kjører i problemer, se [få hjelp](#getting-help).

> [!ADVARSEL]
> 
> Vennligst unngå å lage GitHub problemer for å legge til problemer. De er utenfor prosjektets virkeområde.

### Problemer med UI, Fonter, byggefeil etc.

Hvis du møter problemer med UI, Skrifter eller ser builds feil en opprydding kan være nyttig:

```console
npm kjøre ren
npm ci
npm run seed
npm run develop
```

ELLER

Bruk snarveien

```
npm kjøre ren-og-utvikling
```

Hvis du fortsetter å ta problemer med bygget, anbefales rengjøring av arbeidsområdet

Bruk `git clean` i interativ modus:

```
Git ren -ifdX
```

<details>
   <summary>
      Hvordan rense git usporte filer (skjermbilde)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Hvordan rense git ulagrede filer" />
</details>

### Problemer med API, innlogging, utfordring submissions, etc.

Hvis du ikke kan logge på, og i stedet ser du et banner med en feilmelding at det blir rapportert til freeCodeCamp, Dobbeltsjekk at din lokale port `3000` ikke er i bruk av et annet program.

**På Linux / macOS / WSL på Windows - Fra terminal:**

```console
netstat -ab butigrep "3000"

tcp4 0 0.0.0.0:3000 DESKTOP LISTEN
```

**På Windows - Fra Elevated PowerShell:**

```powershell
netstat -ab LaborSelect-String "3000"

TCP 0.0.0.0:3000 DESKTOP LISTENING
```

### Problemer med å installere avhengigheter

Hvis du får feil under installasjon av avhengighetene, Kontroller at du ikke er i et begrenset nettverk eller at brannmurinnstillingene dine ikke hindrer at du får tilgang til ressurser.

Første gangs oppsett kan ta en stund avhengig av nettverksbåndbredden. Vær tålmodig, og om du fortsatt sitter fast vi med GitPod i stedet for et offline oppsett.

## Henter hjelp

Om du står fast og trenger hjelp, gi oss beskjed ved å spørre i ['Bidragsyter' kategorien på vårt forum](https://forum.freecodecamp.org/c/contributors) eller [Bidragsytere chatterommet](https://gitter.im/FreeCodeCamp/Contributors) på Gitter.

Det kan være en feil i konsollen til nettleseren din eller i terminalen / kommandolinjen som vil hjelpe til med å identifisere problemet. Gi denne feilmeldingen i beskrivelsen, slik at andre lettere kan identifisere problemet og hjelpe deg med å finne en løsning.

Følg disse retningslinjer for opsætning af freeCodeCamp lokalt på dit system. Dette anbefales på det kraftigste, hvis du ønsker at bidrage regelmæssigt.

For nogle af de bidrag arbejdsgange, du har brug for at have freeCodeCamp kører lokalt. For eksempel, forhåndsvisning kodning udfordringer eller fejlfinding og fastsættelse af fejl i kodebasen.

> [!TIP] Hvis du ikke er interesseret i at oprette freeCodeCamp lokalt, overveje at bruge Gitpod, et gratis online dev miljø.
> 
> [![Åbn i Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Starter et klar-til-kode dev miljø til freeCodeCamp i din browser.)

## Forbered din lokale maskine

Start med at installere forudsætningssoftware til dit operativsystem.

Vi støtter primært udvikling på **\*nix** systemer. Vores medarbejdere og community bidragsydere arbejder regelmæssigt med kodebase ved hjælp af værktøjer, der er installeret på Ubuntu og macOS.

Vi understøtter også Windows 10 via WSL2, som du kan forberede ved at [læse denne guide](/how-to-setup-wsl).

Nogle medlemmer af fællesskabet udvikler også på Windows 10 indbygget med Git til Windows (Git Bash), og andre værktøjer installeret på Windows. Vi har ikke officiel støtte til en sådan opsætning på dette tidspunkt, vi anbefaler at bruge WSL2 i stedet.

**Forudsætninger:**

| Forudsætning                                                                                  | Version | Noter                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `12. x` | [LTS Skema](https://github.com/nodejs/Release#release-schedule)                                                                                                                         |
| npm (kommer sammen med Node)                                                                  | `6. x`  | Har ikke LTS-udgivelser, vi bruger versionen bundtet med Node LTS                                                                                                                       |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Udgivelsesnoter](https://docs.mongodb.com/manual/release-notes/), Note: We are currently on `3.6`, an [upgrade is planned](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Hvis du har en anden version, skal du installere den anbefalede version. Vi kan kun støtte installationsproblemer for anbefalede versioner. Se [fejlfinding](#troubleshooting) for detaljer.

Hvis Node.js allerede er installeret på din maskine, skal du køre følgende kommandoer for at validere versionerne:

```console
node -v
npm -v
```

> [!TIP] Vi anbefaler stærkt opdatering til de seneste stabile udgivelser af ovennævnte software, også kendt som Langsigtet Support (LTS) udgivelser.

Når du har installeret forudsætningerne, skal du forberede dit udviklingsmiljø. Dette er almindeligt for mange udviklingsarbejdsgange, og det behøver I kun at gøre én gang.

**Følg disse trin for at få dit udviklingsmiljø klar:**

1. Installer [Git](https://git-scm.com/) eller din favorit Git klient, hvis du ikke allerede har. Opdater til den nyeste version; den version, der kom bundtet med dit operativsystem, kan være forældet.

2. (Valgfri, men anbefales) [Opsæt en SSH-nøgle](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

3. Installer en kodeeditor efter eget valg.

   Vi anbefaler stærkt at bruge [Visual Studio Code](https://code.visualstudio.com/) eller [Atom](https://atom.io/). Disse er store, gratis og open source kode editorer.

4. Konfigurer linting til din kodeeditor.

   Du skal have [ESLint kørende i din editor](http://eslint.org/docs/user-guide/integrations.html), og det vil fremhæve noget, der ikke overholder [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Ignorér venligst ikke nogen lining-fejl. De er beregnet til at **hjælpe** dig og sikre en ren og enkel kodebase.

## Gaffel af depotet på GitHub

[Forking](https://help.github.com/articles/about-forks/) er et skridt, hvor du får din egen kopi af freeCodeCamp's hovedlager (alias _repo_) på GitHub.

Dette er vigtigt, da det giver dig mulighed for at arbejde på din egen kopi af freeCodeCamp på GitHub, eller for at downloade (klon) dit repository til at arbejde på lokalt. Senere, vil du være i stand til at anmode om ændringer til at blive trukket ind i hoveddepotet fra din gaffel via en pull request (PR).

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository. (Automatic Copy)
> 
> Din gaffel på `https://github.com/YOUR_USER_NAME/freeCodeCamp` er ofte omtalt som `oprindelse` -lageret.

**Følg disse trin for at gaffel `https://github.com/freeCodeCamp/freeCodeCamp` -lageret:**

1. Gå til freeCodeCamp på GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klik på "Fork"-knappen i øverste højre hjørne af grænsefladen ([Flere detaljer Her](https://help.github.com/articles/fork-a-repo/))

3. Efter at depotet er blevet forked, vil du blive ført til din kopi af freeCodeCamp repository på `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Sådan gaffel freeCodeCamp på GitHub (skærmbillede)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Sådan gaffel freeCodeCamp på GitHub" />
</details>

## Klon din gaffel fra GitHub

[Kloning](https://help.github.com/articles/cloning-a-repository/) er hvor du **downloade** en kopi af et depot fra en `fjern-` -placering, der enten ejes af dig eller af en anden. I dit tilfælde er denne fjernplacering din `gaffel` af freeCodeCamp's repository som skal være tilgængelig på `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Kør disse kommandoer på din lokale maskine:

1. Åbn en terminal / Kommandoprompt / Shell i din projektmappe

   _dvs.: `/yourprojectsdirectory/`_

2. Klon din gaffel af freeCodeCamp, erstatter `YOUR_USER_NAME` med dit GitHub brugernavn

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Dette vil downloade hele freeCodeCamp repository til din projektmappe.

Bemærk: `--depth=1` skaber en overfladisk klon af din gaffel, med kun den seneste historie/commit.

## Konfigurer synkronisering fra overordnet

Nu hvor du har downloadet en kopi af din gaffel, skal du oprette en `upstream` fjernbetjening til det overordnede arkiv.

[Som nævnt tidligere](#fork-the-repository-on-github)er hovedlageret henvist til `upstream` -lageret. Din gaffel refereret til som `oprindelse` -lageret.

Du skal have en reference fra din lokale klon til `upstream` -depotet ud over `oprindelse` -depotet. Dette er så du kan synkronisere ændringer fra hoveddepotet uden krav om gaffel og kloning gentagne gange.

1. Skift mappe til den nye freeCodeCamp mappe:

   ```console
   cd freeCodeCamp
   ```

2. Tilføj en fjernreference til det vigtigste freeCodeCamp repository:

   ```console
   git fjernbetjening tilføj opstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Sørg for, at konfigurationen ser korrekt ud:

   ```console
   git remote -v
   ```

   Outputtet skal se ud som nedenfor:

   ```console
   oprindelse https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   oprindelse https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Kører freeCodeCamp lokalt

Nu hvor du har en lokal kopi af freeCodeCamp, kan du følge disse instruktioner for at køre det lokalt. Dette vil give dig mulighed for at:

- Forhåndsvisning redigerer til sider, som de vises på læringsplatformen.
- Arbejdet med UI-relaterede spørgsmål og forbedringer.
- Fejlsøg og løse problemer med applikationsservere og klient apps.

Hvis du løber ind i problemer, skal du først udføre en websøgning efter dit problem og se, om det allerede er blevet besvaret. Hvis du ikke kan finde en løsning, søg venligst vores [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) side for en løsning og rapporter problemet, hvis det endnu ikke er blevet rapporteret.

Og som altid, er velkommen til at hoppe videre til vores [Contributors Chat room på Gitter](https://gitter.im/FreeCodeCamp/Contributors) eller [vores Discord server](https://discord.gg/pFspAhS), for hurtige forespørgsler.

> [!TIP] Du kan springe kører freeCodeCamp lokalt, hvis du blot redigerer filer. For eksempel, udføre en `rebase`eller løse `fusionere` konflikter.
> 
> Du kan altid vende tilbage til denne del af vejledningen senere. Du bør **kun** springe dette trin, hvis du ikke behøver at køre apps på din maskine.
> 
> [Spring over for at foretage ændringer](#making-changes-locally).

### Indstil afhængigheder

#### Trin 1: Opsæt miljøvariablen fil

Standard API-nøgler og miljøvariabler gemmes i filen `sample.env`. Denne fil skal kopieres til en ny fil med navnet `.env` , der er tilgået dynamisk under installationstrinnet.

```console
# Opret en kopi af "sample.env" og navngiv den ".env".
# Udfyld den med de nødvendige API-nøgler og hemmeligheder:

# macOS / Linux
cp sample. nv .env

# Windows
kopier sample.env .env
```

Nøglerne i filen `.env` er _ikke_ forpligtet til at blive ændret for at køre appen lokalt. Du kan efterlade standardværdierne kopieret over fra `sample.env` som-is.

> [!TIP] Husk på, hvis du vil bruge tjenester som Forfatter eller Algolia, du skal købe dine egne API-nøgler til disse tjenester og redigere poster i overensstemmelse hermed i `. nv` fil.

#### Trin 2: Installer afhængigheder

Dette trin vil installere de afhængigheder, der kræves for at programmet skal køre:

```console
npm ci
```

#### Trin 3: Start MongoDB og seed databasen

Før du kan køre programmet lokalt, skal du starte MongoDB-tjenesten.

> [!BEMÆRK] Medmindre du har MongoDB kørende i en anden opsætning end standarden, den URL , der er gemt som værdien `MONGOHQ_URL` i `. nv` filen skal virke fint. Hvis du bruger en brugerdefineret konfiguration, skal du ændre denne værdi efter behov.

Start MongoDB-serveren i en separat terminal:

- På macOS & Ubuntu:

  ```console
  mongod
  ```

- I Windows skal du angive den fulde sti til `mongod` binær

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Sørg for at erstatte `3.6` med den version, du har installeret

> [!TIP] Du kan undgå at skulle starte MongoDB hver gang ved at installere det som en baggrundstjeneste. Du kan [lære mere om det i deres dokumentation for dit operativsystem](https://docs.mongodb.com/manual/administration/install-community/)

Dernæst lad os se databasen. I dette trin kører vi nedenstående kommando, der udfylder MongoDB-serveren med nogle oprindelige datasæt, der kræves af tjenester. Disse omfatter bl.a. et par ordninger.

```console
npm løberfrø
```

#### Trin 4: Start freeCodeCamp klient ansøgning og API server

Du kan nu starte API-serveren og klientprogrammerne.

```console
npm kør udvikling
```

Denne enkelt kommando vil affyre alle de tjenester, herunder API-serveren og klientapplikationer, der er tilgængelige for dig at arbejde på.

> [!BEMÆRK] Når du er klar, skal du åbne en webbrowser og **besøge <http://localhost:8000>**. Hvis app'en indlæser, tillykke – du er alle indstillet! Du har nu en kopi af freeCodeCamp's hele læringsplatform, der kører på din lokale maskine.

> [!TIP] API-serveren serverer API'er på `http://localhost:3000`. Gatsby-appen betjener klientprogrammet på `http://localhost:8000`

> Hvis du besøger <http://localhost:3000/explorer> bør du se de tilgængelige API'er.

## Log ind med en lokal bruger

Din lokale opsætning udfylder automatisk en lokal bruger i databasen. Klik på knappen `Log ind` vil automatisk godkende dig i den lokale applikation.

Men adgang til brugerporteføljen side er lidt vanskelig. Under udvikling Gatsby overtager betjeningen af klientsiden sider og dermed vil du få en `404` side for brugerporteføljen, når du arbejder lokalt.

Du skal blot klikke på **"Preview Custom 404 Page"** knappen vil videresende dig til den korrekte side.

<details>
   <summary>
      Sådan logger du på, når du arbejder lokalt (skærmbillede)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Sådan logger du på, når du arbejder lokalt" />
</details>

## Foretager ændringer lokalt

Du kan nu foretage ændringer i filer og forpligte dine ændringer til din lokale klon af din gaffel.

Følg disse trin:

1. Validér at du er på `master` grenen:

   ```console
   git status
   ```

   Du bør få et output som dette:

   ```console
   På grenmaster
   Din gren er opdateret med 'oprindelse/master'.

   intet at begå, arbejdsmappe ren
   ```

   Hvis du ikke er på master eller din arbejdsmappe ikke er ren, skal du løse udestående filer/commits og checkout `master`:

   ```console
   git checkout master
   ```

2. Synkroniser de seneste ændringer fra freeCodeCamp upstream `master` -grenen til din lokale hovedgren:

   > [!ADVARSEL] Hvis du har en udestående pull-anmodning fra `master-` gren af din gaffel, vil du miste dem i slutningen af dette trin.
   > 
   > Du bør sikre, at din pull-anmodning bliver flettet af en moderator, før du udfører dette trin. For at undgå dette scenarie, bør du **altid** arbejde på en anden gren end `master`.

   Dette trin **vil synkronisere de seneste ændringer** fra freeCodeCamps hovedlager. Det er vigtigt, at du genbaserer din gren på toppen af den seneste `upstream/master` så ofte som muligt for at undgå konflikter senere.

   Opdater din lokale kopi af freeCodeCamp upstream-depotet:

   ```console
   git hente opstrøms
   ```

   Hårdt nulstille din hovedfilial med freeCodeCamp master:

   ```console
   git reset --hard upstream/master
   ```

   Skub din hovedgren til din oprindelse for at få en ren historik på din gaffel på GitHub:

   ```console
   git push origin master --force
   ```

   Du kan validere din nuværende master matcher upstream/master ved at udføre en diff:

   ```console
   git diff opstrøm/master
   ```

   Den resulterende output skal være tom.

3. Opret en ny ny filial:

   At arbejde på en separat gren for hvert problem hjælper dig med at holde din lokale arbejdskopi ren. Du bør aldrig arbejde på `master`. Dette vil jage din kopi af freeCodeCamp og du kan være nødt til at starte forfra med en frisk klon eller gaffel.

   Kontroller, at du er på `master` som forklaret tidligere, og filial derfra:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Dit filialnavn skal starte med en `fix/`, `feat/`, `docs/`, osv. Undgå at bruge issue numre i filialer. Hold dem korte, meningsfulde og unikke.

   Nogle eksempler på gode filialnavne er:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Rediger sider og arbejde med kode i din foretrukne teksteditor.

5. Når du er tilfreds med de ændringer, bør du eventuelt køre freeCodeCamp lokalt for at få vist ændringerne.

6. Sørg for at rette eventuelle fejl og kontrollere formateringen af dine ændringer.

7. Tjek og bekræft de filer, du opdaterer:

   ```console
   git status
   ```

   Dette bør vise en liste over `unstaged` filer, som du har redigeret.

   ```console
   På grenfunktion/dokumentation
   Din gren er opdateret med 'upstream/feat/documentation'.

   Ændringer ikke iscenesat for commit:
   (brug "git add/rm <file>... for at opdatere hvad der vil blive indgået)
   (brug "git checkout -- <file>. ." at kassere ændringer i arbejdsmappen)

       ændret: KONTROLLING. d
       ændret: docs/README.md
       ændret: docs/how-to-setup-freecodecamp-locally. d
       ændret: docs/how-to-work-on-guide-articles.md
...
   ```

8. Trin ændringerne og lav en forpligtelse:

   I dette trin bør du kun markere filer, som du har redigeret eller tilføjet dig selv. Du kan udføre en nulstilling og løse filer, som du ikke har til hensigt at ændre, hvis det er nødvendigt.

   ```console
   git tilføj sti/til/min/ændret/file.ext
   ```

   Eller du kan tilføje alle de `unstaged` filer til iscenesættelse:

   ```console
   git tilføj .
   ```

   Kun de filer, der blev flyttet til iscenesættelsesområdet vil blive tilføjet, når du laver en forpligtelse.

   ```console
   git status
   ```

   Output:

   ```console
   På grenfunktion/dokumentation
   Din gren er opdateret med 'upstream/feat/documentation'.

   Ændringer, der skal foretages:
   (brug "git reset HEAD <file>..." til unstage)

       ændret: CONTRIBUTING.md
       ændret: docs/README.md
       ændret: docs/how-to-setup-freecodecamp-locally.md
       ændret: docs/how-to-work-on-guide-articles.md
   ```

   Nu kan du begå dine ændringer med en kort besked som så:

   ```console
   git commit -m "fix: min korte commit besked"
   ```

   Nogle eksempler:

   ```md
   fix: opdatering guide artikel til Java - for loop
   feat: Tilføj guide artikel for alexa færdigheder
   ```

   Valgfri:

   Vi anbefaler stærkt at lave en konventionel begå besked. Dette er en god praksis, som du vil se på nogle af de populære Open Source repositories. Som udvikler opfordrer dette dig til at følge standard praksis.

   Nogle eksempler på konventionelle begå meddelelser er:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Behold disse kort, ikke mere end 50 tegn. Du kan altid tilføje yderligere oplysninger i beskrivelsen af commit beskeden.

   Dette tager ikke længere tid end en ukonventionel meddelelse som 'opdateringsfil' eller 'tilføj index.md'

   Du kan lære mere om, hvorfor du skal bruge konventionelle commits [her](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Hvis du indser, at du har brug for at redigere en fil eller opdatere commit beskeden efter at have lavet en commit kan du gøre det efter redigering af filerne med:

   ```console
   git commit -- amend
   ```

   Dette vil åbne en standard teksteditor som `nano` eller `vi` , hvor du kan redigere commit besked titel og tilføj/redigere beskrivelsen.

10. Dernæst kan du skubbe dine ændringer til din gaffel:

    ```console
    git push-oprindelse filial/navn-her
    ```

## Foreslå en Pull Request (PR)

Når du har foretaget dine ændringer, så tjek her for [hvordan du åbner en Pull Request](how-to-open-a-pull-request.md).

## Hurtige kommandoer reference

En hurtig reference til de kommandoer, som du får brug for, når du arbejder lokalt.

| kommando                                                       | beskrivelse                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installerer / geninstaller alle afhængigheder og bootstraps de forskellige tjenester. |
| `npm løberfrø`                                                 | Fortolker alle de challenge markdown filer og indsætter dem i MongoDB.                |
| `npm kør udvikling`                                            | Starter freeCodeCamp API Server og klient applikationer.                              |
| `npm test`                                                     | Kør alle JS-test i systemet, herunder klient, server, lint og challenge tests.        |
| `npm run test:client`                                          | Kør klient test suite.                                                                |
| `npm kørselstest:curriculum`                                   | Kør curriculum test suite.                                                            |
| `npm run test: curriculum --block='Basic HTML og HTML5'`       | Test en specifik blok.                                                                |
| `npm run test:curriculum --superblock='responsive-web-design'` | Test en specifik SuperBlock.                                                          |
| `npm kørsel test-curriculum-fuld-output`                       | Kør curriculum test suite, uden at gemme efter den første fejl                        |
| `Npm kør test:server`                                          | Kør serverens testsuite.                                                              |
| `npm run e2e`                                                  | Kør Cypressen slutter med at afslutte tests.                                          |
| `npm kør ren`                                                  | Afinstallerer alle afhængigheder og rydder op caches.                                 |

## Fejlfinding

### Problemer med installation af de anbefalede forudsætninger

Vi udvikler jævnligt på de nyeste eller mest populære operativsystemer som macOS 10.15 eller senere, Ubuntu 18.04 eller senere og Windows 10 (med WSL2).

Det anbefales at forske i dit specifikke spørgsmål om ressourcer såsom Google, Stack Overflow og Stack Exchange. Der er en god chance for, at nogen har stået over for det samme problem, og der er allerede et svar på din specifikke forespørgsel.

Hvis du er på et andet operativsystem og/eller stadig er ved at løbe ind i problemer, se [få hjælp](#getting-help).

> [!WARNING]
> 
> Undgå at oprette GitHub problemer for forudsætningsproblemer. De er uden for dette projekts anvendelsesområde.

### Problemer med brugergrænseflade, skrifttyper, opbyg fejl mv.

Hvis du står over for problemer med UI, Skrifttyper eller se bygger fejl en oprydning kan være nyttig:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

ELLER

Brug genvejen

```
npm run clean-and-develop
```

Hvis du fortsat står over for problemer med bygningen, anbefales det at rense arbejdsområdet.

Brug `git clean` i interativ tilstand:

```
git clean -ifdX
```

<details>
   <summary>
      Hvordan man renser git usporet filer (skærmbillede)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Hvordan man renser git usporet filer" />
</details>

### Problemer med API, Login, Challenge Indsendelser, osv.

Hvis du ikke kan logge på, og i stedet ser du et banner med en fejlmeddelelse om, at det vil blive rapporteret til freeCodeCamp, dobbelttjek venligst at din lokale port `3000` ikke er i brug af et andet program.

**På Linux / MacOS / WSL på Windows - Fra Terminal:**

```console
netstat -ab ¤ grep "3000"

tcp4 0 0 0.0.0.0:3000 DESKTOP LISTEN
```

**På Windows - Fra Forhøjet PowerShell:**

```powershell
netstat -ab ¤ Select-String "3000"

TCP 0.0.0.0.0: 3000 DESKTOP LISTENING
```

### Problemer med installation af afhængigheder

Hvis du får fejl under installation af afhængigheder, sørg for, at du ikke befinder dig i et begrænset netværk, eller at dine firewall-indstillinger ikke forhindrer dig i at få adgang til ressourcer.

Første gang opsætningen kan tage et stykke tid afhængigt af din netværks båndbredde. Vær tålmodig, og hvis du stadig sidder fast, vi komprimeret ved hjælp af GitPod i stedet for en offline opsætning.

## Få Hjælp

Hvis du sidder fast og har brug for hjælp, Lad os vide ved at spørge i kategorien ['Bidragydere' på vores forum](https://forum.freecodecamp.org/c/contributors) eller [Bidragyderne chatrum](https://gitter.im/FreeCodeCamp/Contributors) på Gitter.

Der kan være en fejl i konsollen i din browser eller i Bash / Terminal / Kommandolinje, der vil hjælpe med at identificere problemet. Giv denne fejlmeddelelse i din problembeskrivelse, så andre lettere kan identificere problemet og hjælpe dig med at finde en løsning.

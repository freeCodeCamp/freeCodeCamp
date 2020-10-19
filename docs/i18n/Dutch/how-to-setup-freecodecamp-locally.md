Volg deze richtlijnen voor het opzetten van freeCodeCamp lokaal op uw systeem. Dit is sterk aanbevolen als u regelmatig wilt bijdragen.

Voor sommige van de bijdrageworkflows, moet u freeCodeCamp lokaal laten draaien. Bijvoorbeeld het vooraf bekijken van codeeruitdagingen of het debuggen en oplossen van fouten in de codebase.

> [!TIP] Als u niet geïnteresseerd bent in het opzetten van freeCodeCamp lokaal overweeg dan om Gitpod, een gratis online dev omgeving te gebruiken.
> 
> [![Openen in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Begint een kant-en-klare dev omgeving voor freeCodeCamp in uw browser.)

## Bereid uw lokale machine voor

Start met het installeren van de vereiste software voor uw besturingssysteem.

We ondersteunen voornamelijk ontwikkeling op **\*nix** systemen. Onze staf en community bijdragers werken regelmatig met de codebase met behulp van gereedschappen geïnstalleerd op Ubuntu en macOS.

Wij ondersteunen ook Windows 10 via WSL2, die u kunt voorbereiden door het [lezen van deze handleiding](/how-to-setup-wsl).

Sommige leden van de community ontwikkelen zich ook op Windows 10 zelfstandig met Git for Windows (Git Bash) en andere tools geïnstalleerd op Windows. We hebben op dit moment geen officiële ondersteuning voor een dergelijke installatie, we raden WSL2 aan.

**Vereisten:**

| Vereisten                                                                                     | Versie | Opmerkingen                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `12,x` | [LTS schema](https://github.com/nodejs/Release#release-schedule)                                                                                                                        |
| npm (gebundeld met Node)                                                                      | `6,x`  | Heeft geen LTS releases, we gebruiken de versie gebundeld met Node LTS                                                                                                                  |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [Release Notes](https://docs.mongodb.com/manual/release-notes/), Note: We zijn momenteel op `3.6`, een [upgrade is gepland](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Als je een andere versie hebt, installeer dan de aanbevolen versie. We kunnen alleen installatieproblemen steunen voor aanbevolen versies. Zie [probleemoplossing](#troubleshooting) voor meer informatie.

Als Node.js al op uw machine is geïnstalleerd, voer dan de volgende commando's uit om de versies te valideren:

```console
node -v
npm -v
```

> [!TIP] Wij raden ten zeerste aan om bij te werken naar de laatste stabiele versies van bovenstaande software, ook bekend als Long Term Support (LTS) releases.

Zodra je de voorwaarden hebt geïnstalleerd, moet je je ontwikkelomgeving voorbereiden. Dit is gebruikelijk voor veel ontwikkelingsworkflows, en dit hoef je maar één keer te doen.

**Volg deze stappen om je ontwikkelomgeving klaar te krijgen:**

1. Installeer [Git](https://git-scm.com/) of uw favoriete Git client, als u dat nog niet gedaan hebt. Update naar de laatste versie; de versie die werd gebundeld met uw besturingssysteem kan verouderd zijn.

2. (Optioneel maar aanbevolen) [Stel een SSH sleutel in](https://help.github.com/articles/generating-an-ssh-key/) voor GitHub.

3. Installeer een code editor naar keuze.

   We raden sterk aan om [Visual Studio Code](https://code.visualstudio.com/) of [Atom](https://atom.io/) te gebruiken. Dit zijn grote, gratis en open source code-editors.

4. Stel linting in voor de code editor.

   Je zou [ESLint moeten laten draaien in je editor](http://eslint.org/docs/user-guide/integrations.html), en zal alles markeren dat niet voldoet aan [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Gelieve geen linkingsfouten te negeren. Ze zijn bedoeld om u te **helpen** en om te zorgen voor een schone en eenvoudige codebase.

## Fork de repository op GitHub

[Forking](https://help.github.com/articles/about-forks/) is een stap waar u uw eigen kopie van freeCodeCamp's hoofdrepository krijgt (a.k.a _repo_) op GitHub.

Dit is essentieel, omdat u hierdoor kunt werken aan uw eigen exemplaar van freeCodeCamp op GitHub, of om uw repository te downloaden (klonen) om op lokaal niveau te werken. Later kunt u wijzigingen aanvragen die via een PR-aanvraag in de belangrijkste repository van uw vork worden opgenomen.

> [!TIP] De hoofd repository op `https://github.com/freeCodeCamp/freeCodeCamp` wordt vaak aangeduid als de `upstream` repository.
> 
> Uw fork op `https://github.com/YOUR_USER_NAME/freeCodeCamp` wordt vaak aangeduid als de `oorsprong` repository.

**Volg deze stappen om de `https://github.com/freeCodeCamp/freeCodeCamp` repository te fork:**

1. Ga naar de freeCodeCamp repository op GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klik op de "Fork" knop in de rechterbovenhoek van de interface ([meer details hier](https://help.github.com/articles/fork-a-repo/)

3. Nadat de repository is forked, zal u worden meegenomen naar uw kopie van de freeCodeCamp repository op `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Hoe je freeCodeCamp op GitHub (screenshot) fork
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Hoe het freeCodeCamp te forken op GitHub" />
</details>

## Kopieer je fork van GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In uw geval is deze externe locatie uw `fork` van het freeCodeCamp's repository dat beschikbaar zou moeten zijn op `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Voer deze opdrachten uit op je lokale machine:

1. Open een Terminal / Command Prompt / Shell in uw projectmap

   _d.w.: `/yourprojectsdirectory/`_

2. Kloon je fork van freeCodeCamp, vervang `YOUR_USER_NAME` met uw GitHub gebruikersnaam

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Dit zal de gehele freeCodeCamp repository naar uw projectmap downloaden.

Opmerking: `--depth=1` maakt een ondiepe kloon van je vork, met alleen de meest recente historie/commit.

## Synchronisatie instellen van bovenliggende map

Nu u een kopie van uw vork hebt gedownload, moet u een `upstream` externe verbinding naar de bovenliggende repository instellen.

[zoals eerder vermeld](#fork-the-repository-on-github)wordt de belangrijkste repository verwezen naar `upstream` repository. Uw vork verwijst naar de `oorsprong` repository.

U heeft een verwijzing van uw lokale kloon naar de `upstream` repository nodig naast de `oorsprong` repository. Dit is zodat u wijzigingen van de hoofdrepository kunt synchroniseren zonder herhaaldelijk te forken en te kloonen.

1. Wijzig map naar de nieuwe freeCodeCamp map:

   ```console
   cd freeCodeCamp
   ```

2. Een externe verwijzing naar de belangrijkste freeCodeCamp repository toevoegen:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Zorg ervoor dat de configuratie er correct uitziet:

   ```console
   git afstandsbediening -v
   ```

   De uitvoer zou er hieronder iets uit moeten zien:

   ```console
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Lokaal uitvoeren van freeCodeCamp

Nu u een lokale kopie van freeCodeCamp heeft, kunt u deze instructies volgen om het lokaal uit te voeren. Dit staat je toe om:

- Bekijk bewerkingen naar pagina's zoals ze op het leerplatform verschijnen.
- Werk aan UI gerelateerde kwesties en verbeteringen.
- Foutopsporing en het oplossen van problemen met de applicatieservers en client-apps.

Als u problemen ondervindt, voer dan eerst een webzoekopdracht uit voor uw probleem en kijk of er al een antwoord op is. Als je geen oplossing kunt vinden, Zoek op onze [GitHub problemen](https://github.com/freeCodeCamp/freeCodeCamp/issues) pagina voor een oplossing en rapporteer het probleem als het nog niet is gerapporteerd.

En zoals altijd Voel je vrij om op te gaan in onze [Bijdragers Chat room van Gitter](https://gitter.im/FreeCodeCamp/Contributors) of [onze Discord server](https://discord.gg/pFspAhS), voor snelle vragen.

> [!TIP] U kunt freeCodeCamp niet lokaal uitvoeren als u gewoon bestanden bewerkt. Bijvoorbeeld, het uitvoeren van een `rebase`, of het oplossen van `samenvoegen` conflicten.
> 
> U kunt later altijd terugkeren naar dit deel van de instructies. Je moet **alleen** deze stap overslaan als je de apps niet hoeft uit te voeren op je computer.
> 
> [Ga naar wijzigingen](#making-changes-locally).

### Afhankelijkheden configureren

#### Stap 1: stel het omgevingsvariabele bestand in

De standaard API-sleutels en omgevingsvariabelen worden opgeslagen in het bestand `sample.env`. Dit bestand moet worden gekopieerd naar een nieuw bestand genaamd `.env` dat dynamisch wordt geopend tijdens de installatiestap.

```console
# Maak een kopie aan van "sample.env" en noem het ".env".
# Populeren met de benodigde API keys en secrets:

# macOS / Linux
cp sample. nv .env

# Windows
copy sample.env .env
```

De sleutels in het bestand `.env` zijn _niet_ verplicht om de app lokaal uit te voeren. De standaard waarden kunnen worden gekopieerd van `sample.env` as-is.

> [!TIP] Houd er rekening mee als u diensten zoals Auth0 of Algolië wilt gebruiken, je moet je eigen API-sleutels voor deze diensten verkrijgen en de items dienovereenkomstig bewerken in de `. nv` bestand.

#### Stap 2: Installeer afhankelijkheden

Deze stap zal de benodigde afhankelijkheden installeren om de applicatie uit te voeren:

```console
npm ci
```

#### Stap 3: Start MongoDB en seed de database

Voordat u de applicatie lokaal kunt uitvoeren, moet u de MongoDB-service starten.

> [!NOTE] Tenzij u MongoDB draait in een andere instelling dan de standaard, de URL opgeslagen als de `MONGOHQ_URL` waarde in de `. nv` bestand zou prima moeten werken. Als u een aangepaste configuratie gebruikt, wijzig deze waarde indien nodig.

De MongoDB-server starten in een aparte terminal:

- Op macOS & Ubuntu:

  ```console
  mongod
  ```

- Op Windows moet u het volledige pad naar het `mongod` binary opgeven

  ```console
  C:\Programma Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Zorg ervoor dat je `3.6` vervangt door de versie die je hebt geïnstalleerd

> [!TIP] U kunt voorkomen dat u elke keer MongoDB hoeft te starten door het te installeren als achtergrond service. U kunt [er meer over leren in hun documentatie voor uw besturingssysteem](https://docs.mongodb.com/manual/administration/install-community/)

Laten we vervolgens de database uploaden. In deze stap voeren we het onderstaande commando uit dat de MongoDB-server vult met een aantal eerste gegevenssets die door services nodig zijn. Hiertoe behoren onder andere enkele programma's.

```console
Npm run seed
```

#### Stap 4: Start de freeCodeCamp client applicatie en API server

U kunt nu de API-server en de client applicaties opstarten.

```console
npm run run ontwikkeling
```

Deze enkele opdracht zal alle diensten ontslaan, inclusief de API server en de client applicaties die beschikbaar zijn om aan te werken.

> [!NOTE] Eenmaal klaar, open een webbrowser en **bezoek <http://localhost:8000>**. Als de app laadt, gefeliciteerd - je bent klaar! U heeft nu een kopie van freeCodeCamp's gehele leerplatform dat op uw lokale machine draait.

> [!TIP] De API Server dient API's op `http://localhost:3000`. De Gatsby app dient de client applicatie op `http://localhost:8000`

> Als je <http://localhost:3000/explorer> bezoekt, zou je de beschikbare API's moeten zien.

## Log in met een lokale gebruiker

Uw lokale instellingen vullen automatisch een lokale gebruiker in de database. Door op de `Aanmelden` knop te klikken wordt u automatisch geverifieerd in de lokale toepassing.

De toegang tot de gebruikersportefeuilleton pagina is echter een beetje lastig. In ontwikkeling, Gatsby neemt het vervangen van de client-side pagina's en zo krijgt u een `404` pagina voor de gebruikerspfolio wanneer u lokaal werkt.

Klik simpelweg op de knop **"Voorvertoning 404 Pagina"** om u naar de juiste pagina te sturen.

<details>
   <summary>
      Hoe log je in wanneer je lokaal werkt (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Hoe log je in wanneer je lokaal werkt" />
</details>

## Wijzigingen lokaal maken

Je kunt nu wijzigingen aanbrengen in de bestanden en je wijzigingen doorvoeren aan je lokale kloon van de vork.

Volg deze stappen:

1. Validate that you are on the `master` branch:

   ```console
   git status
   ```

   Je zou een uitvoer zo moeten krijgen:

   ```console
   Op branch master
   is je branch up-to-date met 'origin/master'.

   Niets te committen, lege werkmap
   ```

   Als je niet op je master bent of als je werkmap niet leeg is, zoek dan de openstaande bestanden/commits en kassa `master` op:

   ```console
   Git checkout master
   ```

2. Synchroniseer de laatste wijzigingen van het freeCodeCamp upstream `master` branch naar uw lokale master branch:

   > [!WAARSCHUWING] Als u een openstaand pull-verzoek heeft gedaan van de `master` branch van uw vork, aan het einde van deze stap zult u ze verliezen.
   > 
   > Je moet ervoor zorgen dat je pull request wordt samengevoegd door een moderator voordat je deze stap uitvoert. Om dit scenario te voorkomen, moet je **altijd** werken aan een tak anders dan de `master`.

   Deze stap **synchroniseert de laatste wijzigingen** van de belangrijkste repository van freeCodeCamp. Het is belangrijk dat u zo vaak mogelijk uw filiaal bovenop de nieuwste `upstream/master` herbaseert om conflicten later te voorkomen.

   Update uw lokale kopie van de freeCodeCamp upstream repository:

   ```console
   Git ophalen stroomopwaarts
   ```

   Je kunt je master filiaal resetten met de freeCodeCamp master:

   ```console
   git reset --hard upstream/master
   ```

   Duw je hoofdfiliaal naar je oorsprong om een schone geschiedenis op je vork te hebben op GitHub:

   ```console
   Git push-origin master --forceren
   ```

   U kunt uw huidige master valideren door het uitvoeren van een diff:

   ```console
   git diff upstream/master
   ```

   De resulterende uitvoer moet leeg zijn.

3. Maak een nieuwe branch:

   Met behulp van een aparte branch voor elk probleem kunt u uw lokale werkkopie schoon houden. Je zou nooit moeten werken aan de `master`. Dit zal je exemplaar van freeCodeCamp neerzetten en je moet mogelijk opnieuw beginnen met een frisse kloon of vork.

   Controleer of je `master` gebruikt zoals eerder uitgelegd, en branch eraf staat:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Uw branchnaam moet beginnen met een `fix/`, `feat/`, `docs/`, enz. Vermijd het gebruik van issue nummers in branches. Vermijd het gebruik van issue nummers in branches. Houd ze kort, betekenisvol en uniek.

   Enkele voorbeelden van goede branchnamen zijn:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Bewerk pagina's en werk aan code in uw favoriete teksteditor.

5. Zodra u tevreden bent met de wijzigingen, moet u optioneel het freeCodeCamp lokaal uitvoeren om de wijzigingen te bekijken.

6. Zorg ervoor dat u fouten herstelt en controleer de opmaak van uw wijzigingen.

7. Controleer en bevestig de bestanden die u bijwerkt:

   ```console
   git status
   ```

   Dit zou een lijst met `unstaged` bestanden moeten tonen die je hebt bewerkt.

   ```console
   Op branch functie/documentatie
   Je branch is up to date met 'upstream/feate/documentation'.

   Wijzigingen die worden toegepast:
   (gebruik "git reset HEAD <file>..." naar unstage)

       gewijzigd: CONTRIBUTING.md
       gewijzigd: docs/README.md
       gewijzigd: docs/how-to-setup-freecodecamp-locally.md
       gewijzigd: docs/how-to-work-on-guide-articles.md
   ```

8. Stap de wijzigingen door en maak een commit:

   In deze stap moet u alleen bestanden markeren die u zelf hebt bewerkt of toegevoegd. U kunt bestanden opnieuw instellen en oplossen die u niet van plan was te wijzigen indien nodig.

   ```console
   git add pad/naar/mijn/gewijzigd/file.ext
   ```

   Of je kunt alle `ongefaseerde` bestanden toevoegen aan het staginggebied:

   ```console
   Git toevoegt .
   ```

   Alleen de bestanden die werden verplaatst naar de staging gebied zullen worden toegevoegd wanneer je een commit maakt.

   ```console
   git status
   ```

   Uitvoer:

   ```console
   Op branch functie/documentatie
   Je branch is up to date met 'upstream/feate/documentation'.

   d
       gewijzigd: docs/README.md
       gewijzigd: docs/how-to-setup-freecodecamp-local. d
       gewijzigd: docs/how-to-work-on-guide-articles.md
...
   ```

   Nu kunt u uw wijzigingen doorvoeren met een kort bericht zoals:

   ```console
   git commit -m "fix: mijn korte commit bericht"
   ```

   Enkele voorbeelden:

   ```md
   fix: update het gids artikel voor Java - voor lus
   functie: voeg gids artikel toe voor alexa vaardigheden
   ```

   Optioneel:

   Wij raden u ten zeerste aan een conventionele commit boodschap te sturen. Dit is een goede praktijk die u zult zien op enkele van de populaire Open Source repositories. Als ontwikkelaar moedig dit je aan om standaardpraktijken te volgen.

   Enkele voorbeelden van conventionele commit boodschappen zijn:

   ```md
   fix: update HTML-gids artikel
   fix: update build-scripts voor Travbe-CI
   functie: voeg artikel toe voor JavaScript hoisting
   documenten: update bijdragen richtlijnen
   ```

   Houd deze kort, niet meer dan 50 tekens. U kunt altijd extra informatie toevoegen in de beschrijving van het commit bericht.

   Dit duurt geen extra tijd dan een onconventionele boodschap zoals 'updatebestand' of 'voeg index.md' toe

   Je kunt meer leren over waarom je conventionele commits [hier](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits) moet gebruiken.

9. Als je beseft dat je een bestand moet bewerken of het commit-bericht moet bijwerken na het maken van een commit kun je dit doen na het bewerken van de bestanden met:

   ```console
   Git commit --wijzigen
   ```

   Dit opent een standaard teksteditor zoals `nano` of `vi` waar je de commit bericht titel kunt bewerken en de beschrijving kunt toevoegen/bewerken.

10. Vervolgens kun je de veranderingen naar je vork duwen:

    ```console
    git oorsprong branch/naam-hier
    ```

## Voorstellen van een pull-aanvraag (PR)

Nadat je je wijzigingen hebt toegezegd, controleer hier [hoe je een Pull Request](how-to-open-a-pull-request.md) kunt openen.

## Snelle opdrachten referentie

Een snelle verwijzing naar de commando's die u nodig hebt wanneer u lokaal werkt.

| commando                                                       | beschrijving                                                                               |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `npm ci`                                                       | Installeert / herinstalleer alle afhankelijkheden en bootstraps de verschillende services. |
| `Npm run seed`                                                 | Parseert alle challenge markdown bestanden en voegt ze in MongoDB.                         |
| `npm run run ontwikkeling`                                     | Start de freeCodeCamp API Server en Client applicaties.                                    |
| `npm test`                                                     | Voer alle JS tests uit in het systeem, inclusief client, server, lint en challenge tests.  |
| `npm start test:client`                                        | Voer de klantentest serie uit.                                                             |
| `npm run test:curriculum`                                      | Voer de curriculumtest test uit.                                                           |
| `npm run test:curriculum --block='Basic HTML en HTML5'`        | Test een specifiek blok.                                                                   |
| `npm run test:curriculum --superblock='responsive-web-design'` | Test een specifiek SuperBlock.                                                             |
| `npm run test-curriculum-full-output`                          | Voer de curriculumtest suite, zonder bailing na de eerste fout uit                         |
| `npm run test:server`                                          | Voer de server test serie uit.                                                             |
| `npm run e2e`                                                  | Voer het einde van Cypress uit naar de eindtests.                                          |
| `npm run clean`                                                | Verwijder alle afhankelijkheden en verwijder caches.                                       |

## Probleemoplossing

### Problemen met het installeren van de aanbevolen voorwaarden

We ontwikkelen regelmatig de nieuwste of meest populaire besturingssystemen zoals macOS 10.15 of later, Ubuntu 18.04 of hoger en Windows 10 (met WSL2).

Het wordt aanbevolen om je specifieke probleem te onderzoeken op bronnen zoals Google, Stack Overflow en Stack Exchange. Er bestaat een goede kans dat iemand met hetzelfde probleem te maken heeft en er is al een antwoord op uw specifieke vraag.

Als je in een ander OS zit en/of nog steeds problemen ondervindt, zie [hulp krijgen](#getting-help).

> [!WAARSCHUWING]
> 
> Vermijd alstublieft het maken van GitHub problemen voor vereiste problemen. Zij vallen buiten de reikwijdte van dit project.

### Problemen met de UI, Fonts, fouten maken, etc.

Als je problemen hebt met het UI, lettertypen of fouten ziet zien die opruimen nuttig kan zijn:

```console
npm run clean
npm ci
npm run seed
npm run development
```

of

Gebruik de snelkoppeling

```
npm run clean-and-develop
```

Als je problemen blijft ondervinden met het bouwwerk, wordt het opschonen van de werkruimte aanbevolen.

Gebruik `Git clean` in interatieve modus:

```
git clean -ifdX
```

<details>
   <summary>
      Het opschonen van niet-gevolgde Git bestanden (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Hoe ongevolgde Git bestanden opschonen" />
</details>

### Problemen met API, login, Uitdagingsuitwerkingen, etc.

Als u niet kunt inloggen, en in plaats daarvan ziet u een banner met een foutmelding dat het zal worden gerapporteerd aan freeCodeCamp, Controleer of uw lokale poort `3000` niet in gebruik is door een ander programma.

**In Linux / macOS / WSL op Windows - Van Terminal:**

```console
netstat -ab womp "3000"

tcp4 0 0.0.0:3000 DESKTOP LISTEN
```

**In Windows - Van Verhoogd PowerShell:**

```powershell
Netstat -ab ½ Select-String "3000"

TCP 0.0.0:3000 DESKTOP LISTENING
```

### Issues installeren van afhankelijkheden

Als je fouten krijgt tijdens het installeren van de afhankelijkheden, Zorg ervoor dat u zich niet in een beperkt netwerk bevindt of dat uw firewall-instellingen u niet verhinderen toegang te krijgen tot bronnen.

Afhankelijk van uw netwerk bandbreedte kan het voor het eerst instellen een tijdje duren. Wees geduldig, en als je nog steeds vastzit, worden we aanbevolen met GitPod in plaats van een offline installatie.

## Hulp krijgen

Als u vastzit en hulp nodig hebt, Laat het ons weten door het vragen in de ['Bijdragers' categorie op ons forum](https://forum.freecodecamp.org/c/contributors) of de [Bijdragers chat room](https://gitter.im/FreeCodeCamp/Contributors) op Gitter.

Er is mogelijk een fout in de console van je browser of in Bash / Terminal / Command Line die het probleem helpt identificeren. Geef dit foutbericht in uw probleembeschrijving zodat anderen het probleem gemakkelijker kunnen identificeren en u helpen een resolutie te vinden.

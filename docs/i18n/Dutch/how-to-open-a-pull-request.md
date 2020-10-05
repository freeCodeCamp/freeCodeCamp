# Hoe open ik een pull-aanvraag (PR)

Een pull-aanvraag stelt u in staat om wijzigingen van uw fork op GitHub naar freeCodeCamp.org te sturen. Zodra je klaar bent om wijzigingen aan te brengen in de code, of codeer uitdagingen moet je deze richtlijnen volgen om een PR, te sturen.

## Maak een goede pr-titel klaar

We raden aan [conventionele titel en berichten](https://www.conventionalcommits.org/) te gebruiken voor commits en pull request. De conventie heeft de volgende indeling:

> `<type>([optionele scope(s)]): <description>`
> 
> Bijvoorbeeld:
> 
> `fix(learn): testen voor de doe...terwijl lusuitdaging`

Bij het openen van een pull-aanvraag (PR), kunt u onderstaande gebruiken om het type, toepassingsgebied (optioneel) en beschrijving te bepalen.

**Type**

| Type       | Wanneer te selecteren                                                           |
|:---------- |:------------------------------------------------------------------------------- |
| herstellen | Gewijzigde of verbeterde functionaliteit, tests, verbiage van een les, etc.     |
| tarief     | Alleen als je nieuwe functionaliteit, testen etc. toevoegt.                     |
| hersenen   | Wijzigingen die niet gerelateerd zijn aan code, tests of het delen van een les. |
| documenten | Wijzigingen in de map `/docs` of de bijdragende richtlijnen, etc.               |

**Bereik:**

U kunt een scope selecteren uit [deze lijst van labels](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Omschrijving:**

Houd het kort (minder dan 30 tekens) en eenvoudig, u kunt meer informatie toevoegen in het pr-beschrijvingsvak en commentaar.

Enkele voorbeelden van goede PRs titels zijn:

- `fix(a11y): Verbeterd contrast in zoekbalk`
- `functie: voeg meer tests toe aan html en css challenges`
- `fix(api,client): voorkomen CORS-fouten bij formulier inzending`
- `docs(i18n): Chinese vertaling van lokale instellingen`

## Voorstellen van een pull-aanvraag

1. Zodra de bewerkingen zijn verbonden, wordt je gevraagd een pull-aanvraag te maken op je forks GitHub pagina.

   ![Afbeelding - Vergelijk pull request prompt op GitHub](./images/github/compare-pull-request-prompt.png)

2. Standaard moeten alle pull requests tegen de hoofdrepo, `master` branch.

   Zorg ervoor dat uw Basis Fork is ingesteld op freeCodeCamp/freeCodeCamp bij het verhogen van een Pull Request.

   ![Afbeelding - Vergelijk vorken bij het maken van een pull-aanvraag](./images/github/comparing-forks-for-pull-request.png)

3. Stuur de pull-aanvraag van uw filiaal naar het freeCodeCamp's `master` branch.

4. In het lichaam van uw PR geeft u een meer gedetailleerde samenvatting van de wijzigingen die u hebt aangebracht en waarom.

   - Je wordt gepresenteerd met een pull request sjabloon. Dit is een checklist die je had moeten volgen voordat je de pull-aanvraag opent.

   - Vul de gegevens in zoals je wilt. Deze informatie wordt herzien en de beoordelaars beslissen of je pull-aanvraag wordt geaccepteerd of niet.

   - Als de PR bedoeld is om een bestaande GitHub Issue aan te pakken, dan, aan het einde van de omschrijvingsinstantie van uw PR, gebruik het sleutelwoord _Sluit_ met het issue nummer [automatisch sluiten als de PR wordt geaccepteerd en samengevoegd](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Voorbeeld: `Gesloten #123` sluiten issue 123

5. Geeft aan of u een lokale kopie van de site heeft getest of niet.

   Dit is van groot belang als het gaat om wijzigingen die niet alleen de tekst bewerken, zoals documentatie of een challenge omschrijving. Voorbeelden van wijzigingen die lokale tests vereisen zijn JavaScript, CSS of HTML die de functionaliteit of lay-out van een pagina kunnen wijzigen.

## Feedback over pull requests

> Gefeliciteerd! :tada: voor het maken van een PR en hartelijk dank voor het nemen van de tijd om bij te dragen.

Onze moderators zullen nu een kijkje nemen en je feedback geven. Wees alstublieft geduldig met de medemoderators en respecteer hun tijd. Alle pull-aanvragen worden te zijner tijd herzien.

Als u hulp nodig heeft, bespreek dan in de [chat room](https://gitter.im/FreeCodeCamp/Contributors)van medewerkers, wij helpen u graag.

> [!TIP] Als u meer pull requests wilt bijdragen, We raden u aan om de [richtlijnen te lezen die wijzigingen aanbrengen en](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) richtlijnen te synchroniseren om te voorkomen dat u uw vork hoeft te verwijderen.

## Conflicten op een pull-aanvraag

Conflicten kunnen ontstaan omdat veel bijdragers aan de repository werken, en veranderingen kunnen je PR breken die in afwachting is van een review en samenvoeging.

Meestal dan niet zult u geen rebase nodig hebben, omdat we alle commits verpletteren, Maar als hier gevraagd wordt om een rebase dan zou je dat moeten doen.

### Voor gebruikelijke bugfixes en functies

Wanneer u werkt aan reguliere bugs en functies op onze ontwikkelingsbranch `master`, kunt u een eenvoudige rebase doen:

1. Rebase uw lokale kopie:

   ```console
   Git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. Los conflicten op en voeg commits toe / bewerken

   ```console
   #
   git add .
   git commit -m "schaak: conflicten oplossen"

   # Of
   git add .
   git commit --wijzigen --no-edit
   ```

3. Stuur uw wijzigingen terug naar de PR

   ```console
   git push --force origin <pr-branch>
   ```

### Voor aanstaande curriculum en functies

Wanneer je werkt aan functies voor ons aanstaande curriculum `volgende*` branches, heb je een kersenvrije keuze:

1. Zorg ervoor dat je upstream gesynchroniseerd wordt met je lokaal:

   ```console
   Git checkout master
   git fetch --all --prune
   git checkout next-python-project
   git reset --hard upstream/next-python-projecten
   ```

2. Back-up maken

   a. Verwijder je lokale filiaal na het nemen van een back-up (als je deze nog lokaal hebt):

      ```console
      Git checkout <pr-branch-name>

      # voorbeeld:
      # git checkout feat/add-numpy-video vraag

      git checkout -b <backup-branch-name>

      # voorbeeld:
      # git checkout -b backup-feat/add-numpy-video vraag

      git branch -D <pr-branch-name>
      ```

   b. Of gewoon een back-up van je pr branch (als je het niet lokaal hebt):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # voorbeeld:
      # git checkout -b backup-feat/add-numpy-video vraag origin/feat/add-numpy-video vraag
      ```

4. Begin met een schone helling

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Oplossen van conflicten en opruimen, installeer testen

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # voorbeeld:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

6. Als alles er goed uitziet, push terug naar de PR

   ```console
   git push --force origin <pr-branch-name>
   ```

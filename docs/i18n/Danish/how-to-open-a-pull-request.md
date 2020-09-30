# Sådan åbnes en Pull Request (PR)

En pull-anmodning gør det muligt at sende ændringer fra din gaffel på GitHub til freeCodeCamp.org's hovedarkiv. Når du er færdig med at foretage ændringer i koden, eller kodning udfordringer, bør du følge disse retningslinjer for at sende en PR.

## Forbered en god PR titel

Vi anbefaler at bruge [konventionel titel og beskeder](https://www.conventionalcommits.org/) til commits og pull request. Konventionen har følgende format:

> `<type>([valgfrit område(r)]): <description>`
> 
> For eksempel:
> 
> `fix(learn): tests for do...while loop challenge`

Når du åbner en Pull Request(PR), kan du bruge nedenstående til at afgøre typen, scope (valgfri) og beskrivelse.

**Type:**

| Type | Hvornår skal du vælge                                                                  |
|:---- |:-------------------------------------------------------------------------------------- |
| fix  | Ændret eller opdateret / forbedret funktionalitet, tests, verbiage af en lektion, etc. |
| feat | Kun hvis du tilføjer ny funktionalitet, test osv.                                      |
| øm   | Ændringer, der ikke er relateret til kode, tests eller verbiage af en lektion.         |
| docs | Ændringer til `/docs` mappe eller de bidragende retningslinjer osv.                    |

**Anvendelsesområde:**

Du kan vælge et anvendelsesområde fra [denne liste af etiketter](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Beskrivelse:**

Behold den kort (mindre end 30 tegn) og enkel, kan du tilføje flere oplysninger i PR beskrivelse boksen og kommentarer.

Nogle eksempler på gode PRs titler ville være:

- `fix(a11y): forbedret søgebjælke kontrast`
- `feat: tilføj flere test til html og css udfordringer`
- `fix(api,client): forhindre CORS fejl ved formularindsendelse`
- `docs(i18n): Kinesisk oversættelse af lokal opsætning`

## Foreslår en pull-anmodning

1. Når redigeringerne er blevet begået, vil du blive bedt om at oprette en pull-anmodning på din gaffels GitHub side.

   ![Billede - Sammenlign pull request prompt på GitHub](./images/github/compare-pull-request-prompt.png)

2. Som standard skal alle pull anmodninger være imod freeCodeCamp hovedrepo, `master` filial.

   Sørg for, at din grundgaffel er indstillet til freeCodeCamp/freeCodeCamp når du rejser en Pull-anmodning.

   ![Image - Sammenligning af gafler når du laver en pull request](./images/github/comparing-forks-for-pull-request.png)

3. Indsend pull anmodning fra din filial til freeCodeCamp's `master` filial.

4. I kroppen af din PR indeholde en mere detaljeret oversigt over de ændringer, du har foretaget, og hvorfor.

   - Du vil blive præsenteret for en pull request skabelon. Dette er en tjekliste, som du skal have fulgt før du åbner pull anmodningen.

   - Udfyld detaljerne, som du finder passende. Disse oplysninger vil blive gennemgået, og anmelderne vil afgøre, om din pull-anmodning er accepteret eller ej.

   - Hvis PR er beregnet til at behandle en eksisterende GitHub Issue så ved udgangen af din PR's beskrivelse organ, brug søgeordet _Lukker_ med issue nummer til [automatisk lukke dette problem, hvis PR er accepteret og fusioneret](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Eksempel: `Lukker #123` lukker problemet 123

5. Angiv, om du har testet på en lokal kopi af webstedet eller ej.

   Dette er meget vigtigt, når du foretager ændringer, der ikke bare redigerer tekstindhold som dokumentation eller en challenge beskrivelse. Eksempler på ændringer, der har brug for lokal test omfatter JavaScript, CSS, eller HTML, der kan ændre funktionalitet eller layout af en side.

## Tilbagemelding ved pull anmodninger

> Tillykke! :tada: når du laver en PR og takker meget for at have brugt tid på at bidrage.

Vores moderatorer vil nu tage et kig og efterlade dig feedback. Vær tålmodig med de andre moderatorer og respektere deres tid. Alle pull anmodninger gennemgås når tiden er inde.

Hvis du har brug for hjælp, så diskuter i [bidragsyderes chatrum](https://gitter.im/FreeCodeCamp/Contributors), er vi mere end glade for at hjælpe dig.

> [!TIP] Hvis du skal bidrage med flere pull requests, Vi anbefaler, at du læser [foretage ændringer og synkroniserer](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) retningslinjer for at undgå at skulle slette din gaffel.

## Konflikter på en pull-anmodning

Konflikter kan opstå, fordi mange bidragsydere arbejder på lageret, og ændringer kan ødelægge din PR, som afventer en gennemgang og sammenfletning.

Oftere end ikke kan du ikke kræve en rebase, fordi vi squash alle forpligtelser, men hvis der anmodes om en rebase her er, hvad du skal gøre.

### For sædvanlige fejlrettelser og funktioner

Når du arbejder på almindelige fejl og funktioner på vores udviklingsgren `master`, er du i stand til at foretage en simpel rebase:

1. Rebase din lokale kopi:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. Løs eventuelle konflikter og tilføj / rediger commits

   ```console
   # Enten
   git tilføj .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Skub dine ændringer tilbage til PR

   ```console
   git push --force oprindelse <pr-branch>
   ```

### For kommende pensum og funktioner

Når du arbejder på funktioner til vores kommende curriculum `next-*` grene, har du gjort en kirsebær pluk:

1. Sørg for, at din opstrøm synkroniseres med din lokale:

   ```console
   git checkout master
   git henter --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Tag backup

   a. Slet enten din lokale filial efter at have taget en sikkerhedskopi (hvis du stadig har den lokalt):

      ```console
      git checkout <pr-branch-name>

      # eksempel:
      # git checkout feat/add-numpy-video-spørgsmål

      git checkout -b <backup-branch-name>

      # eksempel:
      # git checkout -b backup-feat/add-numpy-video-spørgsmål

      git branch -D <pr-branch-name>
      ```

   b. Eller bare en sikkerhedskopi af din pr- gren (hvis du ikke har den lokalt):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # eksempel:
      # git checkout -b backup-feat/add-numpy-video-spørgsmål origin/feat/add-numpy-video-spørgsmål
      ```

4. Start med en ren skive:

   ```console
   git checkout -b <pr-branch-name> next-python-projekter
   git cherry-pick <commit-hash>
   ```

5. Løs eventuelle konflikter og oprydning, installer kør tests

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # eksempel:

   # npm run test:curriculum --superblock=python-for-all

   ```

6. Hvis alt ser godt ud til at skubbe tilbage til PR

   ```console
   git push --force oprindelse <pr-branch-name>
   ```

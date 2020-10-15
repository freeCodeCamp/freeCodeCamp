# Hvordan åpne en trekkforespørsel (PR)

En pull-forespørsel lar deg sende endringer fra gaffelen på GitHub til freeCodeCamp.org's hoveddepo. Når du er ferdig med å gjøre endringer i koden, eller å kodeutfordringer bør du følge disse retningslinjene for å sende PR.

## Forbered en god PR-tittel

Vi anbefaler å bruke [konvensjonell tittel og meldinger](https://www.conventionalcommits.org/) til commits og pull forespørsel. Konvensjonen har følgende format:

> `<type>([valgfritt omfang(er)]): <description>`
> 
> For eksempel:
> 
> `fix(learn): tester for hva du gjør... mens loop utfordring`

Når du åpner trekkforespørsel(PR), kan du bruke nedenstående til å bestemme typen, omfanget (valgfritt) og beskrivelsen.

**Type:**

| Type:      | Når skal du velge                                                                   |
|:---------- |:----------------------------------------------------------------------------------- |
| fiks       | Endret eller oppdatert/forbedret funksjonalitet, tester, fungerer i en leksjon osv. |
| feiter     | Bare hvis du legger til ny funksjonalitet, prøvinger osv.                           |
| jordisk    | Endringer som ikke er relatert til kode, tester eller vertikalt av en leksjon.      |
| dokumenter | Endringer i mappen `/docs` eller de medvirkende retningslinjene, osv.               |

**Omfang:**

Du kan velge et omfang fra [denne listen med etiketter](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Beskrivelse:**

Hold den kort (mindre enn 30 tegn) og enkel, du kan legge til mer informasjon i PR-beskrivelsen og kommentarene.

Noen eksempler på gode PR-titler vil være:

- `(a11y): forbedret kontrast i søkelinjen`
- `funksjon: legg til flere tester til html og css utfordringer`
- `fix(api, klient): hindre CORS-feil ved innsending`
- `docs(i18n): Kinesisk oversettelse av lokal oppsett`

## Foreslå en trekkforespørsel

1. Når redigeringene er brukt, vil du bli bedt om å lage en pull-forespørsel på din forets GitHub side.

   ![Bilde - Sammenlign pull request ledetekst på GitHub](./images/github/compare-pull-request-prompt.png)

2. Som standard skal alle trekkforespørsler ligge mot freeCodeCamp hoved repo, `master` grenen.

   Kontroller at Base Fork er satt til freeCodeCamp/freeCodeCamp når du øker pull -forespørselen.

   ![Bilde - Komparerer meldinger når du foretar en pull -forespørsel](./images/github/comparing-forks-for-pull-request.png)

3. Send inn pull request fra din gren til freeCodeCamp's `master` grener.

4. I kroppen din av PR inkluderer du en mer detaljert oppsummering av endringene du har gjort og hvorfor.

   - Du får en forespørsel om å sende en mal for forespørsel. Dette er en sjekkliste som du burde ha fulgt opp før forespørselen om trekking åpnes.

   - Fyll inn detaljene etter du ser det. Disse opplysningene vil bli vurdert og anmelderne vil avgjøre om din pull-forespørsel er akseptert eller ikke.

   - Hvis PR er ment å adressere et eksisterende GitHub Issue, på slutten av din PRs beskrivelsesorgan, bruk nøkkelordet _lukker_ med utstedelsesnummeret [automatisk lukket det problemet dersom PR er akseptert og slått sammen](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Eksempel: `Lukker #123` vil lukke problemet 123

5. Angi om du har testet en lokal kopi av nettstedet eller ikke.

   Dette er veldig viktig når det gjøres endringer som ikke bare endrer seg til tekstinnhold, for eksempel dokumentasjon eller en utfordringstekst. Eksempler på endringer som krever lokal testing, omfatter JavaScript, CSS, eller HTML-format, som kan endre funksjonaliteten eller utformingen av en side.

## Tilbakemelding på pull forespørsler

> Gratulerer! :tada: for å gjøre en PR og takke mye for å bidra med tid.

Våre moderatorer vil nå ta en titt og gi deg en tilbakemelding. Vær tålmodig med andre moderatorer og respekterer sin tid. Alle trekkforespørsler gjennomgås etter dette kurset.

Hvis du trenger hjelp vennligst diskuter i [bidragsytere chat room](https://gitter.im/FreeCodeCamp/Contributors), er vi mer enn glad for å hjelpe deg.

> [!TIP] Hvis du skal bidra med mer trekkforespørsler, Vi anbefaler at du leser [om du foretar endringer og synkroniserer](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) retningslinjer for å unngå å måtte slette din gaffel.

## Konflikter på en pull-forespørsel

Konflikter kan oppstå fordi mange bidragsytere arbeider i arkivet, og endringer kan ødelegge PRen din, som venter en gjennomgang og fletting.

Mer ofte enn det du ikke trenger en ombase, fordi vi knuser alle forpliktelser, Men hvis det blir bedt om en rebase her, er det hva du skal gjøre.

### For vanlige feilrettinger og funksjoner

Når du jobber med vanlige feil og funksjoner på vår utviklingsgren `master`kan du gjøre en enkel rebase:

1. Re-baser din lokale kopi:

   ```console
   git checkout <pr-branch>
   git trekk --rebase oppstrøms master
   ```

2. Løs eventuelle konflikter og legg til eller rediger programmer

   ```console
   # Enten
   git legg til .
   git commit -m "chore: resolve conflicts"

   # Eller
   git legg til .
   git commit --amend --no-edit
   ```

3. Trykk endringene dine tilbake i PR.

   ```console
   git skyving - kraft opprinnelse <pr-branch>
   ```

### For kommende læreplaner og funksjoner

Når du arbeider med funksjoner for vår kommende læreplan `nest-*` filialer, har du en kirsebærplukk:

1. Sørg for at oppstrøms vises i synkronisering med lokalt:

   ```console
   git checkout master
   git hent --all --prune
   git checkout next-python-prosjekter
   git reset --hard upstream/next-python-prosjekter
   ```

2. Ta sikkerhetskopi

   a. Slett enten den lokale grenen din etter å ha tatt en sikkerhetskopi (hvis du fortsatt har den lokalt):

      ```console
      git checkout <pr-branch-name>

      # eksempel:
      # git checkout funksjon/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # eksempel:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. Eller bare en sikkerhetskopi av din pr gren (hvis du ikke har den locally):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      eksempel:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Start av med et rent skife:

   ```console
   git checkout -b <pr-branch-name> next-python-prosjekter
   git cherry-pick <commit-hash>
   ```

5. Løs eventuelle konflikter og opprydning, installeringstester

   ```console
   npm kjøre clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-alle

   ```

6. Hvis alt ser bra ut til å trykke tilbake til PR

   ```console
   git skyving - kraft opprinnelse <pr-branch-name>
   ```

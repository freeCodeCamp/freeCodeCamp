# Utvikler Drift på freeCodeCamp.org

Denne guiden vil hjelpe deg å forstå vår infrastruktur og hvordan vi beholder våre plattformer. Denne veiledningen har ikke uttømmende detaljer for all operasjon, men kan brukes som referanse for din forståelse av systemene.

La oss få vite om du har tilbakemeldinger eller henvendelser, og vi skal klare oss gjerne.

## Hvordan kan vi bygge, teste og distribuere kodebasen?

Dette arkivet er kontinuerlig bygget, testet og distribuert til **separate sett med infrastruktur (servere, databaser, CDNer, etc.)**.

Dette omfatter tre trinn som skal følges i sekvensen:

1. Nye endringer (både fikser og funksjoner) slått sammen til vår primære utviklingsgren (`master`) via trekkforespørsler.
2. Disse endringene gjennomføres gjennom en rekke automatiserte tester.
3. Når testene tillater det, frigjør vi endringene (eller oppdaterer dem hvis det er nødvendig) til bruk på vår infrastruktur.

#### Bygge kodeplakaten - Kartlegging av Git Branches til distribusjon.

Ofte [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (standardutviklingsgrenen) er slått sammen i [`produksjonsstiftelsen`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) en gang daglig og slippes ut i en isolert infrastruktur.

Dette er en formidlingsutgave for våre utviklere og bidragsytere til frivillige. Det er også kjent som vår "staging" eller "beta"-frigivelse.

Den er identisk med vårt produksjonsmiljø på `freeCodeCamp.org`, annet enn ved hjelp av et separat sett med databaser, servere, web-proxies, osv. Dette isolasjonen lar oss teste pågående utvikling og trekk i et "produksjon" som scenario, uten å påvirke de regelmessige brukerne av freeCodeCamp.org's hovedplattformer.

Når utviklerteamet [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) er godt fornøyd med endringene i testplattformen, disse endringene flyttes noen dager til [`produksjonsenheten`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) -avdelingen.

Dette er den endelige utgaven som flytter endringer i våre produksjonsplattformer på freeCodeCamp.org.

#### Tester endringer - Integrasjon og brukeraksept Testing.

Vi bruker ulike nivåer av integrasjon og akseptansetesting for å kontrollere kvaliteten i koden. Alle våre tester blir utført gjennom programvare som [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) og [Azure Rørledninger](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Vi har enheten tester for å teste våre løsninger, server-APIer og kundeservicer. Disse hjelper oss med å teste integrasjonen mellom ulike komponenter.

> Vi er også i ferd med å skrive sluttbrukertester som vil bidra til å replikere virkelige verdensscenarier slik som å oppdatere en e-post eller å ringe til API eller tredjeparts tjenester.

Disse testene bidrar til å forhindre at problemer kan gjenta seg selv og sikre at vi ikke introduserer en feil mens vi arbeider på en annen feil eller en funksjon.

#### Distribuerer endringer - Skyve endringer på servere.

Vi har konfigurert kontinuerlig leveringsprogramvare for å presse endringer i våre utviklings- og produksjonsservere.

Når endringene er skjøvet inn i verneområ- dene utløses en rørledning som automatisk utløses for grenen. Byggerørledningene har ansvaret for å bygge gjenstander og holde dem i kjølelagring for senere bruk.

Bygget rør skal sette i gang en tilsvarende utløserrørledning hvis den er ferdig med et vellykket rulleområde. Frigivelsesrørledningene har ansvaret for å samle inn byggkunstnerne, flytte dem til serverne og drive livet.

Status på bygg og utgivelser er [tilgjengelig her](#build-test-and-deployment-status).

## Utløs en bygning, test og utplassering

Foreløpig er det bare medlemmer i utviklerteamet som kan presse til produksjonsgrenene. Endringene i `produksjon-*` grener kan bare lande via hurtigovergangen til [`oppstrøms`](https://github.com/freeCodeCamp/freeCodeCamp).

> De kommende dagene vil vi forbedre denne flyten for å bli gjort via trekkforespørsler for bedre tilgang og åpenhet.

### Dytter endringer i testprogrammet.

1. Konfigurer dine fjernkontroller korrekt.

   ```sh
   git fjern-v
   ```

   **Resultater:**

   ```
   opprinnelig git@github.com:raisedadead/freeCodeCamp.git (fetch)
   opprinnelse git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodele.git (push)
   ```

2. Sørg for at `master` grenen er urørt og synkronisert med upstream.

   ```sh
   git checkout master
   git hent --all --prune
   git reset --hard upstream/master
   ```

3. Sjekk at Travis CI er passert på `master` grenen for upstream.

   De [kontinuerlige integrasjonen](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) testene bør være grønne og PASSING for `master` grenen.

    <details> <summary> Kontrollerer status ved Travis CI (screenshot) </summary>
      <br>
      ![Sjekk byggstatus på Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Hvis det mislykkes bør du stoppe og undersøke feilene.

4. Bekreft at du kan bygge kodelageret lokalt.

   ```
   npm kjøre ren-og-utvikling
   ```

5. Flytt endringer fra `master` til `produksjonsmiljø` via hurtig-for-fletting

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > Du vil ikke kunne tvinge push, og hvis du har skrevet historien om igjen vil disse kommandoene feile.
   > 
   > Hvis de gjør det, kan det hende du har gjort noe feil og du bør bare begynne på nytt.

Trinnene over utløser automatisk en kjøring på byggeledningen for `produksjonsstaging` grenen. Når bygget er fullført, lagres artifaktene som `.zip` filer i et kjølig lager som kan hentes inn og brukes senere.

Frigjøringsrøret utløses automatisk når det er mulig å få tilgang til en frisk del av rørledningen som er koblet sammen. For testering av plattformer innebærer ikke denne prosessen manuell godkjenning, og artifaktene blir skjøvet til klienten CDN og API-servere.

> Vanligvis tar bygget ~20-25 minutter for å fullføre kjøringen av utgivelsen, som tar ~15-20 minutter for klienten, og ~5-10 minutter til API å være tilgjengelig direkte. Fra kodepush til å leve på testplattformene tar hele prosessen **~35-45 minutter** totalt.

### Dytter endringer i produksjonsapplikasjoner.

Prosessen er for det meste den samme som testplattformene på plass, med noen ekstra sjekker. Dette er bare for å gjøre at vi ikke gjør noe som helst på freeCodeCamp.org som kan se hundrevis av brukere som bruker det til enhver tid.

| Du må IKKE utføre disse kommandoene med mindre du har bekreftet at alt er i arbeid på testplattformen. Du bør ikke omgå eller hoppe over tester ved testingen før du går videre. |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                  |


1. Sørg for at `produksjonsstigen-steget` er urørt og synkronisert med upstream.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Flytt endringer fra `produksjonsstadium` til `produksjons-gjeldende` via en rask sammenslåing

   ```
   git checkout produksjon-gjeldende
   git flett produksjon-testaging
   git push upstream
   ```

   > Du vil ikke kunne tvinge push, og hvis du har skrevet historien om igjen vil disse kommandoene feile.
   > 
   > Hvis de gjør det, kan det hende du har gjort noe feil og du bør bare begynne på nytt.

De ovenstående trinnene vil automatisk utløse en kjøring på byggeledningen for `produksjons-nåværende` grenen. Når en bygningsdel er ferdig, vil den utløse en kjøring på utslippsledningen.

> Vanligvis tar byggetypen å kjøre ~20-25 minutter å fullføre.

**Ytterligere skritt for personalets handling**

Et frigivelsesløp har blitt utløst, medlemmer av utviklermedarbeiderteamet vil motta en automatisk manuell intervensjonstjeneste. De kan enten _godkjenne_ eller _avvise_ utgivelsen.

Hvis endringene fungerer pent og er testet på testingen av testen, kan den godkjennes. Godkjenning må gis innen 4 timer etter at utgivelsen utløses før den avvises automatisk. Et personale kan utløse kjøringen manuelt for avviste kjøringer på nytt, eller vente på neste frigivelsessyklus.

For personellets bruk:

| Sjekk e-posten din for en direkte lenke eller [gå til lanseringsdashbordet](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) etter at versjonen er fullført. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                           |


Når en av medarbeiderne godkjenner en utgivelse, vil rørledningen presse på endringene som ligger til freeCodeCamp.orgs produksjon CDN og API-servere. De bruker vanligvis ~15-20 minutter for klienten, og ~5 minutter for API servere å være tilgjengelig for å være tilgjengelig.

> Utgivelsen tar vanligvis ~15-20 minutter for hver klientforekomst, og ~5-10 minutter for hver API-eksempel tilgjengelig direkte. Fra kode trykk for å leve på produksjonsplattformene tar hele prosessen **~90-120 minutter** totalt (det tar ikke å telle ventetid for personalets godkjenning).

## Bygg, prøvings- og distribusjonsstatus

Her er den gjeldende testen, bygg og distribueringsstatus for kodebasen.

| Type:          | Gren                                                                                        | Status:                                                                                                                                                                                                                                                 | Kontrollpanel                                                                            |
|:-------------- |:------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------- |
| CI Tester      | [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                        | ![Travis CI byggestatus](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                             | [Gå til statusdashbord](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Tester      | [`produksjonsmiljø`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | ![Travis CI byggestatus](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                                 | [Gå til statusdashbord](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Bygg rør       | [`produksjonsmiljø`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | [![Mokee byggstatus](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Gå til statusdashbord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Slipp Pipeline | [`produksjonsmiljø`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  |                                                                                                                                                                                                                                                         | [Gå til statusdashbord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Tester      | [`produksjons-strøm`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Travis CI byggestatus](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                                 | [Gå til statusdashbord](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Bygg rør       | [`produksjons-strøm`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Mokee byggstatus](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Gå til statusdashbord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Slipp Pipeline | [`produksjons-strøm`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                         | [Gå til statusdashbord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Tidlig tilgang og beta-testing

Vi ønsker deg velkommen til å teste disse utgivelsene i en **"offentlig betatester"** modus og få tidlig tilgang til kommende funksjoner på plattformene. Noen ganger kalles disse funksjonene/endringene for **next, beta, stag,** etc. om hverandre.

Dine bidrag via tilbakemeldinger og problemrapporter vil hjelpe oss med å gjøre produksjonsplattformene på `freeCodeCamp. rg` mer **rolig**, **konsekvente** og **stabile** for alle.

Vi takker deg for å rapportere feil du møter og hjelpe til med å gjøre freeCodeCamp.org bedre. Du rock!

### Identifisere kommende versjon av plattformene

For øyeblikket er en offentlig betatestversjon tilgjengelig på:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE] Domenet er annet enn **`freeCodeCamp.org`**. Dette vil hindre søkemotorindeksering og unngå forvirring for vanlige brukere av plattformen.

### Identifisere gjeldende versjon av plattformene

**Den gjeldende versjonen av plattformen er alltid tilgjengelig på [`freeCodeCamp.org`](https://www.freecodecamp.org).**

dev-team fletter seg sammen fra `produksjonsstaging` grenen til `produksjons-gjeldende` når de slipper å endres. Den øverste utføringen bør være det du ser finnes på nettstedet.

Du kan identifisere den nøyaktige versjonen som blir distribuert ved å besøke bygge- og distribusjonsloggene som er tilgjengelige i statusdelen. Alternativt kan du også helle oss i [bidragsytere chat rom](https://gitter.im/FreeCodeCamp/Contributors) for en bekreftelse.

### Kjente begrensninger

Det er noen kjente begrensninger og handelshindringer når man bruker beta-versjonen av plattformen.

- #### Alle data / personlig fremgang på disse beta-plattformene `vil IKKE bli lagret eller transportert over` for å produsere.

  **Brukerne på betaversjonen vil ha en egen konto fra produksjonen.** Beta-versjonen bruker en fysisk adskilt database fra produksjon. Dette gir oss muligheten til å hindre utilsiktet tap av data eller endringer. Dev teamet kan rense databasen til denne betaversjonen etter behov.

- #### Det er ingen garantier for oppetid og påliteligheten av beta-plattformene.

  Anvendelsen er forventet å være hyppig og i raske gjentakelser, noen ganger flere ganger per dag. Som et resultat vil det være uventet nedetid til tider eller ødelagt funksjonalitet på betaversjonen.

- #### Send ikke vanlige brukere til dette nettstedet som et mål på å bekrefte en fiks

  beta er og har alltid vært å øke lokal utvikling og teste – ingenting annet. Det er ikke lover hva som kommer, men et glimt av det som arbeides opp.

- #### Siglogg-siden kan se annerledes ut enn produksjon

   Vi bruker en test tenant for freecodecamp.dev for Auth0, og har derfor ikke evnen til å sette et egendefinert domene. Dette gjør at alle omadresserte callbacks og innloggingssiden vises på et standarddomene som: `https://freecodecamp-dev.auth0.com/`. Det påvirker ikke funksjonaliteten så nær produksjonen som vi kan få.

## Rapportering av saker og tilbakemelding

Åpne nye saker for diskusjoner og rapporter feil. Du kan merke dem som **[`utgivelse: neste/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** for tur.

Du kan sende en e-post til `dev[at]freecodecamp.org` hvis du har noen spørsmål. Som alltid bør alle sikkerhetsproblemer rapporteres til `sikkerhet[at]freecodecamp.org` i stedet for offentlig tracker og forum.

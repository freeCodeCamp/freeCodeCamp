# Udvikleroperationer på freeCodeCamp.org

Denne guide vil hjælpe dig med at forstå vores infrastruktur stak og hvordan vi vedligeholder vores platforme. Mens denne guide ikke har udtømmende detaljer for alle operationer, kan den bruges som reference for din forståelse af systemerne.

Lad os vide, hvis du har feedback eller forespørgsler, og vi vil med glæde præcisere.

## Hvordan kan vi opbygge, teste og implementere kodebasen?

Dette repository bygges løbende, testes og implementeres til **separate sæt af infrastruktur (servere, databaser, CDN'er osv.)**.

Dette indebærer tre trin, der skal følges i rækkefølge:

1. Nye ændringer (både rettelser og funktioner) fusioneres til vores primære udviklingsgren (`master`) via pull requests.
2. Disse ændringer gennemføres gennem en række automatiserede tests.
3. Når testene passerer, frigiver vi ændringerne (eller opdaterer dem, hvis det er nødvendigt) til implementering på vores infrastruktur.

#### Opbygning af kodebase - Mapping Git Branches til implementeringer.

Typisk [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (standard udviklingsgrenen) er fusioneret til [`produktions-iscenesættelse`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) filial en gang om dagen og frigives til en isoleret infrastruktur.

Dette er en mellemudgivelse for vores udviklere og frivillige bidragsydere. Det er også kendt som vores "iscenesættelse" eller "beta" udgivelse.

Det er identisk med vores live produktionsmiljø på `freeCodeCamp.org`, bortset fra det ved hjælp af et separat sæt databaser, servere, web-fuldmagter osv. Denne isolation lader os teste løbende udvikling og funktioner i en "produktion" som scenario, uden at påvirke almindelige brugere af freeCodeCamp.org's hovedplatforme.

Når udviklerteamet [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) er tilfreds med ændringerne på iscenesættelsesplatformen, disse ændringer flyttes hvert par dage til [`produktions-nuværende`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) filial.

Dette er den endelige udgivelse, der flytter ændringer til vores produktionsplatforme på freeCodeCamp.org.

#### Testændringer - Integration og Brugeraccepttest.

Vi anvender forskellige niveauer af integrations- og accepttest for at kontrollere kvaliteten af kodeksen. Alle vores test er udført gennem software som [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) og [Azure rørledninger](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Vi har enhedstest til at teste vores udfordringsløsninger, Server API'er og Client User interfaces. Disse hjælper os med at teste integrationen mellem forskellige komponenter.

> [!BEMÆRK] Vi er også i færd med at skrive slutbrugertest, som vil hjælpe med at kopiere virkelige verden scenarier som opdatering af en e-mail eller foretage et opkald til API eller tredjeparts tjenester.

Sammen hjælper disse tests med at forhindre problemer i at gentage sig selv og sikre, at vi ikke introducerer en fejl, mens vi arbejder på en anden fejl eller en funktion.

#### Deploying Changes - Pushing ændringer til servere.

Vi har konfigureret løbende levering software til at skubbe ændringer til vores udviklings- og produktionsservere.

Når ændringerne er skubbet til de beskyttede udgivelsesgrene, udløses en byggerørledning automatisk for filialen. Bygningsrørledningerne er ansvarlige for at bygge artefakter og holde dem på kølelager til senere brug.

Byggeledningen fortsætter med at udløse en tilsvarende udløsningsrørledning, hvis den fuldfører en vellykket kørsel. Udgivelsesrørledningerne er ansvarlige for at indsamle de bygge artefakter, flytte dem til serverne og gå levende.

Status for byggeri og udgivelser er [tilgængelig her](#build-test-and-deployment-status).

## Udløsning af en bygning, test og implementering.

I øjeblikket kan kun medlemmer på udviklerteamet skubbe til produktionsgrene. Ændringerne af `produktion-*` grene kan kun lande via en hurtig sammenlægning til [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!BEMÆRK] I de kommende dage vil vi forbedre dette flow til at blive gjort via pull-requests, for bedre adgang forvaltning og gennemsigtighed.

### Skubber ændringer til Staging-programmer.

1. Konfigurer dine fjernbetjeninger korrekt.

   ```sh
   git remote -v
   ```

   **Resultater:**

   ```
   oprindelse git@github.com:raisedadead/freeCodeCamp.git (fetch)
   oprindelse git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Sørg for, at din `master` gren er uberørt og synkroniseret med upstream.

   ```sh
   git checkout master
   git henter --all --prune
   git reset --hard upstream/master
   ```

3. Kontrollér, at Travis CI kører videre på `master-` -grenen for upstream.

   De [kontinuerlige integrationstest](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) skal være grønne og PASSING for `master` -grenen.

    <details> <summary> Kontrollerer status på Travis CI (skærmbillede) </summary>
      <br>
      ![Tjek build status på Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Hvis dette ikke er tilfældet, bør du stoppe og undersøge fejlene.

4. Bekræft at du er i stand til at bygge depotet lokalt.

   ```
   npm run clean-and-develop
   ```

5. Flyt ændringer fra `master` til `produktions-iscenesættelse` via en hurtig sammenfletning

   ```
   git checkout produktion-iscenesættelse
   git merge master
   git push upstream
   ```

   > [!BEMÆRK] Du vil ikke være i stand til at tvinge skubb, og hvis du har omskrevet historikken på alligevel vil disse kommandoer fejle ud.
   > 
   > Hvis de gør, kan du have gjort noget forkert, og du bør lige starte forfra.

Ovenstående trin vil automatisk udløse en kørsel på byggerørledningen til `produktions-iscenesættelse` gren. Når byggeriet er færdig, gemmes artefakterne som `.zip` filer i et koldt lager, der skal hentes og bruges senere.

Udløsningsrørledningen udløses automatisk, når en ny artefakt er tilgængelig fra den tilsluttede byggerørledning. For iscenesættelsesplatforme indebærer denne proces ikke manuel godkendelse, og artefakterne skubbes til klientens CDN og API-serverne.

> [!TIP label:Estimates] Typisk byggekørslen tager ~20-25 minutter at fuldføre efterfulgt af udgivelsen kørsel, som tager ~15-20 minutter for klienten, og ~5-10 minutter for API'en til rådighed live. Fra kode push til at være live på iscenesættelsesplatformene tager hele processen **~ 35-45 minutter** i alt.

### Skub ændringer til produktionsprogrammer.

Processen er for det meste den samme som mellemstationen platforme, med et par ekstra kontrol på plads. Dette er blot for at sikre, at vi ikke bryder noget på freeCodeCamp.org, som kan se hundredvis af brugere bruge det når som helst.

| Udfør IKKE disse kommandoer, medmindre du har bekræftet, at alt fungerer på iscenesættelsesplatformen. Du bør ikke omgå eller springe nogen test på iscenesættelse, før du fortsætter yderligere. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                   |


1. Sørg for, at din `produktions-iscenesættelse` gren er uberørt og synkroniseret med upstream.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Flyt ændringer fra `produktionsfaser` til `produktionsstrøm` via en hurtig sammenfletning

   ```
   git checkout production-current
   git merge production-staging
   git push upstream
   ```

   > [!BEMÆRK] Du vil ikke være i stand til at tvinge skubb, og hvis du har omskrevet historikken på alligevel vil disse kommandoer fejle ud.
   > 
   > Hvis de gør, kan du have gjort noget forkert, og du bør lige starte forfra.

Ovenstående trin vil automatisk udløse en kørsel på byggerørledningen for `produktionsstrømmen` gren. Når en build artefakt er klar, vil det udløse en kørsel på udgivelsesrørledningen.

> [!TIP label:Estimates] Typisk byggekørslen tager ~20-25 minutter at fuldføre.

**Yderligere trin for personalets indsats**

En udgivelseskørsel er udløst, medlemmer af udviklerpersonalet vil modtage en automatisk manuel intervention e-mail. De kan enten _godkende_ eller _afvise_ udgivelsesrunden.

Hvis ændringerne fungerer pænt og er blevet testet på mellemstationsplatformen, kan den godkendes. Godkendelsen skal gives senest 4 timer efter, at udgivelsen er udløst, før den automatisk afvises. Et personale kan re-trigger release køre manuelt for afviste kørsler, eller vente på den næste cyklus af udgivelse.

Til brug for personalet:

| Tjek din e-mail for et direkte link eller [gå til udgivelsesinstrumentbrættet](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) , når byggekørslen er færdig. |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                            |


Når en af personalet godkender en udgivelse, vil rørledningen skubbe ændringerne live til freeCodeCamp.org's produktion CDN og API-servere. De tager typisk ~15-20 minutter for klienten, og ~5 minutter for API servere til at være til rådighed live.

> [!TIP label:Estimates] Udgivelsen køre typisk tager ~15-20 minutter for hver klient eksempel, og ~5-10 minutter for hver API instans at være til rådighed live. Fra kode push til at være levende på produktionsplatformene hele processen tager **~ 90-120 mins** i alt (ikke tælle ventetiden til personalets godkendelse).

## Opbygning, test og implementering Status

Her er den aktuelle test, opbygge og implementere status af kodebasen.

| Type            | Gren                                                                                                | Status                                                                                                                                                                                                                                            | Instrumentbræt                                                                            |
|:--------------- |:--------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------- |
| CI Test         | [`mester`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                                | ![Travis Ci Byg Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Gå til statusdashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Test         | [`produktion-iscenesættelse`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis Ci Byg Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Gå til statusdashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Byg Rørledning  | [`produktion-iscenesættelse`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Byg Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Gå til statusdashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Slip Rørledning | [`produktion-iscenesættelse`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                   | [Gå til statusdashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Test         | [`produktionsstrøm`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)          | ![Travis Ci Byg Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Gå til statusdashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Byg Rørledning  | [`produktionsstrøm`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)          | [![Byg Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Gå til statusdashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Slip Rørledning | [`produktionsstrøm`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)          |                                                                                                                                                                                                                                                   | [Gå til statusdashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Tidlig adgang og beta-test

Vi byder dig velkommen til at teste disse udgivelser i en **"public beta testing"** tilstand og få tidlig adgang til kommende funktioner på platformene. Nogle gange bliver disse funktioner/ændringer omtalt som **næste, beta, iscenesættelse,** osv. udskifteligt.

Dine bidrag via feedback og issue reports vil hjælpe os med at gøre produktionen platforme på `freeCodeCamp. rg` more **resilient**, **konsekvent** og **stabil** for alle.

Vi takker dig for at have rapporteret fejl, som du støder på og hjælper med at gøre freeCodeCamp.org bedre. Du klippe!

### Identifikation af den kommende version af platformene

I øjeblikket er en offentlig beta-test version tilgængelig på:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!BEMÆRK] Domænenavnet er forskelligt fra **`freeCodeCamp.org`**. Dette er tilsigtet at forhindre søgemaskine indeksering og undgå forvirring for almindelige brugere af platformen.

### Identificering af den aktuelle version af platformene

**Den aktuelle version af platformen er altid tilgængelig på [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Dev-teamet fusionerer skifter fra `produktions-staging` filialen til `produktions-current` , når de udgiver ændringer. Den øverste begår bør være, hvad du ser live på webstedet.

Du kan identificere den nøjagtige version implementeret ved at besøge build og implementering logs tilgængelige i statussektionen. Alternativt kan du også ping os i [bidragsyderes chatrum](https://gitter.im/FreeCodeCamp/Contributors) for en bekræftelse.

### Kendte Begrænsninger

Der er nogle kendte begrænsninger og tradeoffs, når du bruger betaversionen af platformen.

- #### Alle data / personlige fremskridt på disse beta platforme `vil IKKE blive gemt eller overført` til produktion.

  **Brugere på betaversionen vil have en separat konto fra produktionen.** Beta-versionen bruger en fysisk adskilt database fra produktion. Dette giver os mulighed for at forhindre enhver utilsigtet tab af data eller ændringer. Dev teamet kan rense databasen på denne betaversion efter behov.

- #### Der er ingen garantier for oppetid og pålidelighed af beta platforme.

  Deployering forventes at være hyppig og i hurtige iterationer, undertiden flere gange om dagen. Som et resultat vil der være uventet nedetid til tider eller brudt funktionalitet på beta-versionen.

- #### Send ikke almindelige brugere til dette websted som et mål for at bekræfte en rettelse

  Beta-stedet er og har altid været at øge den lokale udvikling og afprøvning, intet andet. Det er ikke et løfte om, hvad der kommer, men et glimt af, hvad der arbejdes på.

- #### Signsiden kan se anderledes ud end produktionen

   Vi bruger en testlejer til freecodecamp.dev på Auth0, og har derfor ikke mulighed for at indstille et brugerdefineret domæne. Dette gør det således, at alle omdirigeringstilbagekaldelser og login-siden vises på et standard domæne som: `https://freecodecamp-dev.auth0.com/`. Dette påvirker ikke funktionaliteten er så tæt på produktion, som vi kan få.

## Rapporteringsproblemer og tilbagemelding

Åbne nye problemer for diskussioner og rapportering af fejl. Du kan mærke dem som **[`udgivelse: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** for triage.

Du kan sende en e-mail til `dev[at]freecodecamp.org` , hvis du har spørgsmål. Som altid bør alle sikkerhedssårbarheder rapporteres til `sikkerhed[at]freecodecamp.org` i stedet for den offentlige tracker og forum.

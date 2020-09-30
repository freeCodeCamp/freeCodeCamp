# Utvecklarverksamhet på freeCodeCamp.org

Denna guide hjälper dig att förstå vår infrastruktur stack och hur vi upprätthåller våra plattformar. Även om denna guide inte har uttömmande detaljer för alla operationer, kan det användas som en referens för din förståelse av systemen.

Låt oss veta, om ni har synpunkter eller frågor, och vi kommer gärna att klargöra.

## Hur bygger vi, testar och distribuerar kodbasen?

Detta utvecklingskatalog byggs kontinuerligt, testas och distribueras till **separata uppsättningar av infrastruktur (servrar, databaser, CDNs, etc.)**.

Detta gäller tre steg som ska följas i följd:

1. Nya förändringar (både rättningar och funktioner) slås samman till vår primära utvecklingsenhet (`master`) via pull-förfrågningar.
2. Dessa förändringar sker genom en serie automatiserade tester.
3. När testerna har passerat släpper vi ändringarna (eller uppdatera dem om det behövs) till distributioner på vår infrastruktur.

#### Bygga kodbasen - Mapping Git-grenar till Deployments.

Typiskt, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (den förvalda utvecklingsbranschen) slås samman till [`produktionsiscensättande`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) en gång om dagen och släpps ut i en isolerad infrastruktur.

Detta är en mellanliggande utgåva för våra utvecklare och frivilliga bidragsgivare. Det är också känt som vår "staging" eller "beta" release.

Det är identiskt med vår liveproduktionsmiljö på `freeCodeCamp.org`, annat än den med en separat uppsättning databaser, servrar, web-proxies, etc. Denna isolering låter oss testa pågående utveckling och funktioner i en "produktion" som scenario, utan att påverka vanliga användare av freeCodeCamp.orgs huvudplattformar.

När utvecklarteamet [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) är nöjda med ändringarna på mellanslagsplattformen, dessa ändringar flyttas med några dagar till [`produktionsströmmen`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) grenen.

Detta är den slutliga versionen som flyttar förändringar till våra produktionsplattformar på freeCodeCamp.org.

#### Testa ändringar - Integration och användartestning.

Vi använder olika nivåer av integration och acceptans tester för att kontrollera kvaliteten på koden. Alla våra tester görs genom programvara som [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) och [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Vi har enhetstester för att testa våra utmaningslösningar, Server API och klientanvändargränssnitt. Dessa hjälper oss att testa integrationen mellan olika komponenter.

> [!NOTE] Vi är också i färd med att skriva slutanvändartester som kommer att hjälpa till att replikera verkliga scenarier som att uppdatera ett e-postmeddelande eller ringa ett samtal till API:et eller tjänster från tredje part.

Tillsammans bidrar dessa tester till att förhindra problem från att upprepa sig själva och se till att vi inte introducerar ett fel medan vi arbetar på ett annat fel eller en funktion.

#### Deploying Changes - Pushing changes to servers.

Vi har konfigurerat kontinuerlig leverans programvara för att driva förändringar i våra utvecklings- och produktionsservrar.

När ändringarna trycks till de skyddade avlämningsgrenarna utlöses automatiskt en rörledning för grenen. Byggledningarna ansvarar för att bygga artefakter och hålla dem i en kall förvaring för senare användning.

Byggledningen fortsätter att utlösa en motsvarande release pipeline om den slutför en lyckad körning. Den release pipelines är ansvarig för att samla in bygga artefakter, flytta dem till servrarna och gå live.

Status för byggen och utgåvor är [tillgängliga här](#build-test-and-deployment-status).

## Utlösa en bygga, testa och distribuera.

För närvarande kan endast medlemmar i utvecklargruppen driva till produktionsgrenarna. Ändringarna i grenarna `produktion-*` kan endast landa via snabb-forward sammanfogning till [`uppströms`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] Under de kommande dagarna skulle vi förbättra detta flöde som ska göras via pull-requests, för bättre åtkomsthantering och transparens.

### Pushing changes to Staging Applications.

1. Konfigurera dina fjärrkontroller korrekt.

   ```sh
   git fjärr -v
   ```

   **Resultat:**

   ```
   ursprung git@github.com:raisedadead/freeCodeCamp.git (fetch)
   ursprung git@github.com:raisedadead/freeCodeCamp.git (push)
   uppströms git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   uppströms git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Se till att din `huvudgren` är orörd och synkroniserad med uppströms.

   ```sh
   git kassan master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Kontrollera att Travis CI passerar på `master` grenen för uppströms.

   [kontinuerlig integration](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) tester bör vara gröna och PASSING för `master` grenen.

    <details> <summary> Kontrollerar status på Travis CI (skärmdump) </summary>
      <br>
      ![Kontrollera byggstatus på Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Om detta misslyckas bör du stoppa och undersöka felen.

4. Bekräfta att du kan bygga utvecklingskatalogen lokalt.

   ```
   Npm kör rena-och-utveckla
   ```

5. Flytta ändringar från `master` till `produktions-mellanlagring` via en snabb-framåt sammanslagning

   ```
   git kassan produktionsmellanlagring
   git sammanfogning master
   git push uppström
   ```

   > [!NOTE] Du kommer inte att kunna tvinga fram push, och om du har skrivit om historiken i något fall kommer dessa kommandon att fela.
   > 
   > Om de gör det kan du ha gjort något felaktigt och du borde bara börja om.

De ovannämnda stegen kommer automatiskt att utlösa en körning på byggpipeline för `produktionsmellanlagring` grenen. När byggnationen är klar sparas artefakterna som `.zip` filer i en kall lagring som ska hämtas och användas senare.

Utgivningsledningen utlöses automatiskt när en ny artefakt finns tillgänglig från den uppkopplade rörledningen. För mellanlagring av plattformar innebär denna process inte manuellt godkännande och artefakterna skjuts till klient-CDN och API-servrar.

> [!TIP<unk> etikett:Uppskattningar] Vanligtvis tar byggkörningen ~20-25 minuter att slutföra följt av release-körningen som tar ~15-20 minuter för klienten, och ~5-10 minuter för API:et att vara tillgängligt live. Från kodtryck till att vara live på mellanstadieplattformarna tar hela processen **~35-45 minuter** totalt.

### Pushing förändringar i produktionsprogram.

Processen är mestadels densamma som de iscensättande plattformarna, med några extra kontroller på plats. Detta är bara för att se till att vi inte bryter något på freeCodeCamp.org som kan se hundratals användare använda det när som helst.

| Kör INTE dessa kommandon såvida du inte har verifierat att allt fungerar på iscensättningsplattformen. Du bör inte kringgå eller hoppa över någon testning på mellanlagring innan du går vidare. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                  |


1. Se till att din `produktions-mellanlagring` gren är orörd och i synk med uppströms.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Flytta ändringar från `production-staging` till `production-current` via en snabb-forward sammanslagning

   ```
   git checkout production-current
   git merge production-staging
   git push upstream
   ```

   > [!NOTE] Du kommer inte att kunna tvinga fram push, och om du har skrivit om historiken i något fall kommer dessa kommandon att fela.
   > 
   > Om de gör det kan du ha gjort något felaktigt och du borde bara börja om.

De ovannämnda stegen kommer automatiskt att utlösa en körning på byggledningen för `produktionsström` grenen. När en bygg artefakt är klar, det kommer att utlösa en körning på release pipeline.

> [!TIP<unk> etikett:Uppskattningar] Vanligtvis tar byggkörningen ~20-25 minuter att slutföra.

**Ytterligare steg för personalåtgärder**

En utgåva körs utlöses, medlemmar i utvecklarstaben kommer att få ett automatiskt manuellt ingripande e-post. De kan antingen _godkänna_ eller _avvisa_ utgivningstillfället.

Om ändringarna fungerar fint och har testats på iscensättningsplattformen kan det godkännas. Godkännandet måste ges inom 4 timmar efter att utgivningen utlöstes innan den avvisas automatiskt. En personal kan återutlösa utgivningen manuellt för avvisade körningar, eller vänta på nästa utgivningscykel.

För personalanvändning:

| Kolla din e-post efter en direktlänk eller [gå till release instrumentpanelen](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) efter att byggnationen är klar. |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                              |


När en av de anställda godkänner en release, kommer pipeline driva förändringarna live till freeCodeCamp.orgs produktion CDN och API-servrar. De tar vanligtvis ca 15-20 minuter för klienten, och ca 5 minuter för API-servrarna att vara tillgängliga live.

> [!TIP<unk> etikett:Uppskattningar] Versionen tar vanligtvis ca 15-20 minuter för varje klientinstans och ~5-10 minuter för varje API-instans att vara tillgänglig live. Från kodtryck till att vara live på produktionsplattformarna tar hela processen **~90-120 minuter** totalt (räknar inte väntetiden för personalgodkännande).

## Skapa, testa och distribuera status

Här är det aktuella testet, bygga och distribuera status för kodbasen.

| Typ            | Gren                                                                                                | Status                                                                                                                                                                                                                                             | Instrumentpanel                                                                          |
|:-------------- |:--------------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------- |
| CI tester      | [`mästare`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                               | ![Travis CI Bygg Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Gå till statuspanelen](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI tester      | [`produktions-mellanlagring`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis CI Bygg Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Gå till statuspanelen](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Bygg Pipeline  | [`produktions-mellanlagring`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Bygg Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Gå till statuspanelen](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Släpp Pipeline | [`produktions-mellanlagring`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                    | [Gå till statuspanelen](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI tester      | [`produktion-ström`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)          | ![Travis CI Bygg Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Gå till statuspanelen](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Bygg Pipeline  | [`produktion-ström`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)          | [![Bygg Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Gå till statuspanelen](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Släpp Pipeline | [`produktion-ström`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)          |                                                                                                                                                                                                                                                    | [Gå till statuspanelen](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Tidig åtkomst och betatestning

Vi välkomnar dig att testa dessa utgåvor i ett **"public beta-testing"** -läge och få tidig tillgång till kommande funktioner till plattformarna. Ibland kallas dessa funktioner/ändringar **nästa, beta, mellanlagring,** etc. utbytbart.

Dina bidrag via feedback och utgivningsrapporter hjälper oss att göra produktionsplattformarna på `freeCodeCamp. rg` mer **motståndskraftig**, **konsekvent** och **stabil** för alla.

Vi tackar dig för att du rapporterar fel som du stöter på och hjälper till att göra freeCodeCamp.org bättre. Du rockar!

### Identifiera den kommande versionen av plattformarna

För närvarande finns en offentlig betatestningsversion tillgänglig på:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE] Domännamnet är annorlunda än **`freeCodeCamp.org`**. Detta är avsiktligt att förhindra indexering sökmotor och undvika förvirring för vanliga användare av plattformen.

### Identifiera den aktuella versionen av plattformarna

**Den aktuella versionen av plattformen finns alltid tillgänglig på [`freeCodeCamp.org`](https://www.freecodecamp.org).**

dev-teamet slår ihop ändringar från `produktionsmellanlagring` till `produktionsström` när de släpper ändringar. Den översta commit bör vara vad du ser live på webbplatsen.

Du kan identifiera den exakta versionen som distribueras genom att besöka bygg- och distributionsloggar som finns i statussektionen. Alternativt kan du också pinga oss i [bidragsgivarens chattrum](https://gitter.im/FreeCodeCamp/Contributors) för en bekräftelse.

### Kända begränsningar

Det finns några kända begränsningar och kompromisser när du använder betaversionen av plattformen.

- #### Alla data / personliga framsteg på dessa betaplattformar `kommer INTE att sparas eller föras över` till produktion.

  **Användare på betaversionen kommer att ha ett separat konto från produktionen.** Betaversionen använder en fysiskt separat databas från produktionen. Detta ger oss möjlighet att förhindra oavsiktlig förlust av data eller ändringar. Utvecklingsteamet kan rensa databasen på denna betaversion efter behov.

- #### Det finns inga garantier på betaplattformarnas drifttid och tillförlitlighet.

  Driftsättning förväntas vara frekvent och i snabba iterationer, ibland flera gånger om dagen. Som ett resultat kommer det att finnas oväntade stillestånd ibland eller trasiga funktioner på beta-versionen.

- #### Skicka inte vanliga användare till denna webbplats som ett mått på att bekräfta en fix

  Beta-webbplatsen är och har alltid varit att öka lokal utveckling och testning, inget annat. Det är inte ett löfte om vad som kommer, utan en glimt av vad som arbetas på.

- #### Teckningssidan kan se annorlunda ut än produktionen

   Vi använder en testhyresgäst för freecodecamp.dev på Auth0, och därför inte har möjlighet att ange en anpassad domän. Detta gör det så att alla omdirigera callbacks och inloggningssidan visas på en standarddomän som: `https://freecodecamp-dev.auth0.com/`. Detta påverkar inte funktionaliteten är så nära produktionen som vi kan få.

## Rapportera problem och lämna feedback

Öppna nya problem för diskussioner och rapportering av buggar. Du kan märka dem som **[`utgåva: nästa/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** för triage.

Du kan skicka ett mail till `dev[at]freecodecamp.org` om du har några frågor. Som alltid bör alla säkerhetssårbarheter rapporteras till `security[at]freecodecamp.org` istället för public tracker och forum.

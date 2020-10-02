# Ontwikkelaars Bewerkingen op freeCodeCamp.org

Deze handleiding zal je helpen onze infrastructuurstapel te begrijpen en hoe we onze platformen onderhouden. Hoewel deze handleiding niet over uitputtende gegevens voor alle activiteiten beschikt, kan het worden gebruikt als referentie voor uw begrip van de systemen.

Laat ons weten, als u feedback of vragen hebt, en we zullen daar graag opheldering over geven.

## Hoe bouwen we, testen en inzetten we de codebase?

Deze repository wordt continu gebouwd, getest en geïmplementeerd in **afzonderlijke infrastructuursets (Servers, Databases, CDNs, etc.)**.

Daarbij gaat het om drie stappen die in de rij moeten worden gevolgd:

1. Nieuwe wijzigingen (zowel fixes als functies) worden samengevoegd tot onze primaire ontwikkelingssector (`master`) via pull requests.
2. Deze wijzigingen worden uitgevoerd door een reeks geautomatiseerde tests.
3. Zodra de tests zijn uitgevoerd, brengen we de wijzigingen vrij (of wijzigen ze indien nodig) voor de inzet van onze infrastructuur.

#### Bouwen van de codebase - aftappende Git filialen tot afzetting.

Typisch [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (de standaard ontwikkelingsbranch) wordt eenmaal per dag samengevoegd in de [`productiestaging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) tak en wordt vrijgegeven in een geïsoleerde infrastructuur.

Dit is een tussenliggende release voor onze ontwikkelaars en vrijwilligers. Het staat ook bekend als onze "staging" of "beta" vrijlating.

Het is identiek aan onze live productie omgeving op `freeCodeCamp.org`, anders dan het met behulp van een aparte set databases, servers, webproxies, enz. Deze isolatie laat ons doorlopende ontwikkeling en functies in een "productie" zoals scenario, zonder de reguliere gebruikers van freeCodeCamp.org te beïnvloeden. Deze isolatie laat ons doorlopende ontwikkeling en functies in een "productie" zoals scenario, zonder de reguliere gebruikers van freeCodeCamp.org te beïnvloeden.

Zodra het ontwikkelteam [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) tevreden is met de wijzigingen op het ontwikkelingsplatform, deze wijzigingen worden om de paar dagen verplaatst naar de [`productie-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) branch.

Dit is de definitieve versie die veranderingen verplaatst naar onze productieplatforms op freeCodeCamp.org.

#### Wijzigingen testen - Integratie en Gebruikers Acceptatie Testen.

We passen verschillende niveaus van integratie en acceptatie toe om de kwaliteit van de code te controleren. Al onze tests worden gedaan via software zoals [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) en [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

We hebben eenheidstests voor het testen van onze challenge oplossingen, Server API's en Client User Interfaces. Deze helpen ons om de integratie tussen verschillende componenten te testen.

> We zijn ook bezig met het schrijven van eindgebruikerstests die helpen bij het repliceren van echte wereldscenario's zoals het bijwerken van een e-mail of het bellen naar de API of derden diensten.

Samen helpen deze tests voorkomen dat problemen zich herhalen en ervoor zorgen dat we geen bug introduceren terwijl we aan een andere bug of een functie werken.

#### Wijzigingen implementeren - wijzigingen uitvoeren op servers.

We hebben continu toedieningssoftware geconfigureerd om wijzigingen in onze ontwikkeling- en productieservers door te voeren.

Zodra de wijzigingen naar de beschermde release-takken worden geduwd, wordt een bouwpijplijn automatisch geactiveerd voor de branche. De bouw van pijpleidingen is verantwoordelijk voor het bouwen van artefacten en het bewaren ervan in een koude opslag voor later gebruik.

De bouw pipeline gaat verder om een overeenkomende release pipeline te activeren als deze een succesvolle uitvoering voltooit. De release pipelines zijn verantwoordelijk voor het verzamelen van de build artefacten, ze verplaatsen naar de servers en gaan leven.

Status van builds en releases zijn [hier beschikbaar](#build-test-and-deployment-status).

## Een gebouw, test en inzet van de server.

Momenteel kunnen alleen leden van het ontwikkelingsteam naar de productiesectoren pushen. De wijzigingen in de `productie *` branches kunnen alleen landen door snel samen te voegen naar [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOT] In de komende dagen zullen we deze stroom verbeteren via pull-requests, voor beter beheer van toegang en transparantie.

### Veranderingen doorvoeren van Staging Applicaties.

1. Configureer je afstandsbedieningen correct.

   ```sh
   git afstandsbediening -v
   ```

   **Resultaten:**

   ```
   origin git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadeadad/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp.git (push)
   ```

2. Zorg ervoor dat je `master` branch pristine is en gesynchroniseerd is met de upstream.

   ```sh
   Git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Controleer of de Travis CI de `master` branch doorgeeft voor upstream.

   De [continue integratie](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) testen moeten groen en PASSING zijn voor de `master` branch.

    <details> <summary> Controleer de status van Travis CI (screenshot) </summary>
      <br>
      ![Controleer de bouwstatus op Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Als dit mislukt moet u stoppen en de fouten onderzoeken.

4. Bevestig dat u de repository lokaal kunt bouwen.

   ```
   npm run clean-and-develop
   ```

5. Verplaats wijzigingen van `master` naar `productie-staging` via een snelle merge

   ```
   Git checkout productie-staging
   git merge master
   git push upstream
   ```

   > [!NOT] Je zult niet in staat zijn om pushen te forceren en als je de geschiedenis toch hebt herschreven, zullen deze commando's een fout maken.
   > 
   > Als ze dat wel doen, heeft u misschien iets verkeerd gedaan en moet u gewoon opnieuw beginnen.

De bovenstaande stappen zullen automatisch een uitvoering op de bouw pipeline uitvoeren voor de `productie-staging` branch. Zodra het bouwwerk klaar is, worden de artefacten opgeslagen als `.zip` bestanden in koude opslag die later worden gebruikt en opgehaald.

De release pipeline wordt automatisch geactiveerd als er een nieuw artefact beschikbaar is via de verbonden build pijplijn. Voor stagingplatforms, houdt dit proces geen handmatige goedkeuring in en de artefacten worden naar de Client CDN en API servers gepusht.

> [!TIP label:Offertingen] Meestal duurt de build run ~20-25 minuten om te volgen op de release run die ~15-20 minuten duurt voor de client, en ~5-10 minuten voor de API om live beschikbaar te zijn. Van code push naar live zijn op de stagingplatforms neemt het hele proces **~35-45 min** in totaal.

### Versturen wijzigingen van de Productie Applicaties.

Het proces is grotendeels hetzelfde als de stagingplatforms, met een paar extra controles. Dit is alleen om ervoor te zorgen dat we niets breken op freeCodeCamp.org die honderden gebruikers op elk moment kunnen zien die het gebruiken.

| Voer deze opdrachten NIET uit, tenzij u hebt geverifieerd dat alles werkt op het staging platform. U moet geen tests tijdens staging omzeilen of overslaan voordat u verder gaat. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                   |


1. Zorg ervoor dat je `productie-staging` tak priester is en gesynchroniseerd is met de upstream.

   ```sh
   git checkout productie-staging
   git fetch --all --prune
   git reset --hard upstream/productie-staging
   ```

2. Verplaats wijzigingen van `productie-staging` naar `productie-current` door middel van een snelle merge

   ```
   Git checkout productie-huidige
   git producties samenvoegen
   git push upstream
   ```

   > [!NOT] Je zult niet in staat zijn om pushen te forceren en als je de geschiedenis toch hebt herschreven, zullen deze commando's een fout maken.
   > 
   > Als ze dat wel doen, heeft u misschien iets verkeerd gedaan en moet u gewoon opnieuw beginnen.

De bovenstaande stappen zullen automatisch een uitvoering van de bouw pipeline starten voor de `productie-huidige` branch. Zodra een build artefact klaar is, zal het een run op de release pipeline starten.

> [!TIP︎ label:Estimates] Meestal duurt de build run ~20-25 minuten om te voltooien.

**Extra stappen voor de actie van het personeel**

Eén release run wordt geactiveerd, leden van het medewerkerteam van de ontwikkelaars ontvangen een geautomatiseerde handmatige interventie e-mail. They can either _approve_ or _reject_ the release run.

Als de veranderingen goed werken en zijn getest op het halteplatform, dan kan het worden goedgekeurd. De goedkeuring moet worden gegeven binnen 4 uur nadat de vrijlating in gang is gezet voordat deze automatisch wordt afgewezen. Een medewerker kan de release handmatig uitvoeren voor afgewezen uitvoeren of wachten op de volgende release-cyclus.

Voor medewerker:

| Controleer je e-mail voor een directe link of [ga naar het release-dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) nadat de build is uitgevoerd. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                           |


Zodra een van de staff leden een release goedkeurt, zal de pipeline de wijzigingen live duwen naar freeCodeCamp.org productie CDN en API servers. Ze nemen meestal ~15-20 minuten voor de client, en ~5 minuten voor de API-servers om live beschikbaar te zijn.

> [!TIPKoflabel:Estimates] De release run duurt meestal ~15-20 minuten voor elke client instantie, en ~5-10 minuten voor elke API instantie om live te zijn. Van code push naar live zijn op de productieplatforms duurt het hele proces **~90-120 min** in totaal (niet het tellen van de wachttijd voor de personeelsgoedkeuring).

## Bouw, Test en Implementatiestatus

Hier is de huidige test, bouw en implementatie status van de codebase.

| Type               | Filiaal                                                                                     | status                                                                                                                                                                                                                                             | Dashboard                                                                                      |
|:------------------ |:------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------- |
| CI tests           | [`meester`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                       | ![Travis CI Bouw Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Ga naar de status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI tests           | [`productie-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis CI Bouw Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Ga naar de status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Bouw Pijplijn      | [`productie-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Bouw status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Ga naar de status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Pijplijn vrijgeven | [`productie-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                    | [Ga naar de status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI tests           | [`productie-stroom`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)  | ![Travis CI Bouw Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Ga naar de status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Bouw Pijplijn      | [`productie-stroom`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | [![Bouw status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Ga naar de status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Pijplijn vrijgeven | [`productie-stroom`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  |                                                                                                                                                                                                                                                    | [Ga naar de status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Vroegtijdige toegang en bèta-tests

We verwelkomen je om deze releases te testen in een **"openbare bèta-testing"** modus en krijg vroege toegang tot toekomstige functies op de platformen. Soms worden deze functies/wijzigingen aangeduid als **volgende, beta, staging,** enz.

Uw bijdragen via feedback en probleemrapporten zullen ons helpen bij het maken van de productieplatforms bij `freeCodeCamp. rg` meer **weerstandsvermogen**, **consistent** en **stabiel** voor iedereen.

Wij danken u voor het melden van fouten die u tegenkomt en helpen bij het verbeteren van freeCodeCamp.org. Je bent geweldig! Je bent geweldig!

### Identificeren van de aankomende versie van de platforms

Momenteel is er een publieke beta-versie beschikbaar op:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE] De domeinnaam is anders dan **`freeCodeCamp.org`**. Dit is opzettelijk om het indexeren van zoekmachines te voorkomen en verwarring te voorkomen voor reguliere gebruikers van het platform.

### Identificeren van de huidige versie van de platforms

**De huidige versie van het platform is altijd beschikbaar op [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Het dev-team voegt wijzigingen samen van de `productie-staging` branch naar `productie-current` wanneer ze wijzigingen vrijgeven. De beste commit is wat je live ziet op de site.

U kunt de exacte versie die in gebruik is door de bouw en implementatie logboeken te bezoeken die beschikbaar zijn in de statussectie. Als alternatief kun je ons ook pingen in de [bijdragers chat room](https://gitter.im/FreeCodeCamp/Contributors) voor een bevestiging.

### Bekende beperkingen

Er zijn enkele bekende beperkingen en afschrijvingen bij het gebruik van de bètaversie van het platform.

- #### Alle gegevens / persoonlijke vooruitgang op deze bètaplatforms `zullen NIET worden opgeslagen of overgedragen aan` naar productie.

  **Gebruikers in de beta versie zullen een apart account hebben van de productie.** De beta versie gebruikt een fysiek gescheiden database van de productie. Dit geeft ons de mogelijkheid om onbedoeld gegevensverlies of wijzigingen te voorkomen. Het dev team kan de database leegmaken op deze bètaversie indien nodig.

- #### Er zijn geen garanties op de uptime en betrouwbaarheid van de bèta-platforms.

  De inzet zal naar verwachting frequenter zijn en bij snelle iteraties soms meerdere keren per dag. Als gevolg hiervan zullen er soms onverwachte downtime of een onjuiste functionaliteit in de beta versie verschijnen.

- #### Stuur geen reguliere gebruikers naar deze site als een maatstaf voor het bevestigen van een oplossing

  De beta site is en is altijd geweest om de lokale ontwikkeling en het testen ervan aan te vullen. Het is geen belofte van wat er komt, maar een glimp van waar aan gewerkt wordt.

- #### Onderteken pagina kan er anders uitzien dan productie

   We gebruiken een testinstantie voor freecodecamp.dev op Auth0, en hebben dus niet de mogelijkheid om een aangepast domein in te stellen. Dit zorgt ervoor dat alle callbacks en inlogpagina op een standaard domein verschijnen: `https://freecodecamp-dev.auth0.com/`. Dit heeft geen invloed op de functionaliteit zoals we die kunnen krijgen.

## Problemen melden en feedback geven

Open nieuwe problemen voor discussies en het melden van bugs. Je kunt ze labelen als **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** voor de triage.

Je kunt een e-mail sturen naar `dev[at]freecodecamp.org` als je vragen hebt. Zoals altijd moeten alle beveiligingskwetsbaarheden worden gemeld aan `beveiliging[at]freecodecamp.org` in plaats van de publieke tracker en het forum.

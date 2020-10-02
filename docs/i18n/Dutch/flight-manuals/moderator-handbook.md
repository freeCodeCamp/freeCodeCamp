# Het officiële freeCodeCamp Moderator Handboek.

Dit zal je helpen om verschillende plaatsen in onze gemeenschap te modereren, waaronder:

- GitHub problemen & pull-verzoeken
- Het forum, chatrooms, Facebook groepen en andere online vergaderplaatsen
- Persoonlijke evenementen zoals studiegroepen, hackathons en conferenties

**Alle freeCodeCamp moderators zijn globale moderators. Dat betekent dat wij u vertrouwen om toezicht te houden op al onze platforms.**

Dit gezegd hebbende, kunt u dienen als moderator op welke plaatsen u het meest interesseert. Sommige moderators helpen gewoon op GitHub. Anderen helpen gewoon op het forum. Sommige moderators zijn overal actief.

Wij willen dat je van moderator geniet en investeer je schaarse tijd op plaatsen die voor u interessant zijn.

> [!NOTE] "Met grote macht komt grote verantwoordelijkheid." - Oom Ben - Oom Ben

Als moderator is temperament belangrijker dan technische vaardigheden.

Luister. Wees nuttig. Maak geen misbruik van uw macht.

freeCodeCamp is een inclusieve gemeenschap en we moeten het zo houden.

We hebben één enkele gedragscode die onze hele gemeenschap reguleert. Hoe minder regels, hoe gemakkelijker men zich kan herinneren. U kunt deze regels lezen en ze toewijzen aan het geheugen [hier](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderators hebben de mogelijkheid om problemen te sluiten en pull requests te accepteren of af te sluiten.

Moderators hebben twee primaire verantwoordelijkheden met betrekking tot GitHub:

1. QA'en en samenvoegen van pull requests
2. Evalueren en reageren op problemen

## Pull Requests modereren

Pull Requests (PR's) zijn hoe bijdragers wijzigingen verzenden naar de freeCodeCamp's repository. Het is belangrijk dat we kwaliteitsborging (QA) uitvoeren op aanvragen voor pull requests voordat we besluiten deze samen te voegen of te sluiten.

### Soorten Pull requests

1. **Uitdagingsinstructies bewerkingen** Dit zijn wijzigingen in de tekst van uitdagingen - de beschrijving, instructies of test tekst. Je kunt deze rechten ook bekijken op GitHub en beslissen of je ze wilt samenvoegen. We moeten hier wat voorzichtiger mee omgaan, want miljoenen mensen zullen deze tekst tegenkomen terwijl ze via het freeCodeCamp curriculum werken. Maakt de pull-aanvraag de tekst duidelijker zonder de tekst veel langer te maken? Zijn de bewerkingen relevant en niet al te pietluttiek? Vergeet niet dat ons doel is dat uitdagingen zo duidelijk en zo kort mogelijk zijn. Ze zijn niet de plek voor duistere details. Bovendien kunnen bijdragers proberen koppeling toe te voegen aan middelen aan de uitdagingen. Je kunt deze pull-aanvragen sluiten en ze met dit antwoord beantwoorden:

   > Bedankt voor je pull-aanvraag.
   > 
   > Ik sluit dit pull-verzoek af. Voeg in plaats daarvan links en andere details toe aan het overeenkomstige handleidingartikel van de challenge.
   > 
   > Als je denkt dat ik me vergis bij het sluiten van dit probleem, open het dan opnieuw en voeg dan verdere uitleg toe. Dank u wel, en een goede programmering.

2. **Uitdagingscode bewerkingen** Dit zijn wijzigingen in de code in een uitdaging - de Challenge Seed, Challenge Oplossing en Test Strings. Deze pull-verzoeken moeten van GitHub worden verwijderd en op je lokale computer worden getest om er zeker van te zijn dat de challenge tests nog steeds kunnen worden uitgevoerd met de huidige oplossing, en de nieuwe code introduceert geen fouten. Sommige bijdragers kunnen proberen extra tests toe te voegen om pedantische hoekzaken te dekken. We moeten oppassen dat we de uitdaging niet te ingewikkeld maken. Deze uitdagingen en hun tests moeten zo eenvoudig en intuïtief mogelijk zijn. Los van het algoritme uitdagingen en het prep-gedeelte van het interview moeten leerlingen in staat zijn om elke uitdaging binnen ongeveer 2 minuten op te lossen.

3. **Codebase Wijzigingen** Deze code wijzigt de functionaliteit van het freeCodeCamp platform zelf. Soms proberen bijdragers wijzigingen door te voeren zonder veel uitleg te geven, maar voor wijzigingen in de code moeten we ervoor zorgen dat de verandering echt nodig is. Dus deze pull-aanvragen moeten verwijzen naar een bestaande GitHub kwestie waarbij de redenen voor de verandering worden besproken. Dan kun je de pull-aanvraag op je computer openen en ze lokaal testen. Nadat je dit hebt gedaan, als de wijzigingen er goed uitzien, voegen ze ze nog niet samen. Je kunt reageren op het pull-verzoek dat "LGTM" zegt, en daarna @raisedadead vermelden zodat hij een laatste kijkje kan nemen.

### Hoe pull requests samenvoegen of sluiten

Ten eerste, wanneer je een pull-aanvraag voor QA kiest, moet je er zelf aan toewijzen. U kunt dit doen door te klikken op de "Wijs jezelf" link onder het "taak" deel in de rechterkolom van GitHub's interface.

Afhankelijk van het type pull-verzoek is het de overeenkomstige regels die hierboven worden vermeld.

Voordat u een pull request samenvoegt, zorg ervoor dat GitHub groene checkmarks heeft voor alles. Als er al een X is, kijk dan eerst na en ontdek hoe je ze eerst in groene vinkjes kunt laten veranderen.

Soms zal er sprake zijn van een samenvoegingsconflict. Dit betekent dat een ander pull-verzoek een wijziging heeft aangebracht in precies hetzelfde deel van datzelfde bestand. GitHub heeft een tool om deze samenvoegconflicten recht op GitHub aan te pakken. U kunt proberen deze conflicten aan te pakken. Gebruik gewoon uw beste oordeel. De wijzigingen van de pull-aanvraag staan bovenaan, en de wijzigingen van de Master branch staan onderaan. Soms zullen er overbodige informatie zijn die kan worden verwijderd. Voordat je klaar bent, zorg dat je de `<<<<<<`verwijdert, `======`, en `>>>>>>` die Git toevoegt om conflictgebieden aan te geven.

Als de pull-aanvraag klaar lijkt om samen te voegen (en geen goedkeuring van @raisedadead vereist), kan je deze doorgaan en samenvoegen. Zorg ervoor dat u de standaard functionaliteit "Squash and Merge" gebruikt op GitHub. Dit zal alle pull requests verpletteren in een enkele commit, wat de geschiedenis van Git veel leesbaarder maakt.

Vervolgens moet je reageren op het pull-verzoek, waarbij je de bijdrager persoonlijk bedankt.

Als de auteur van de pull request een "eerste keer bijdrager" is, moet je hen ook feliciteren met hun eerste samengevoegde pull request aan de repository. Je kunt naar de rechterbovenhoek van het lichaam van de PR's kijken om een eerste bijdrager te bepalen.  Het zal `de eerste bijdrage` laten zien zoals hieronder wordt weergegeven:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp6.690x281](https://i.imgur.com/dTQMjGM.png)

Als de pull request niet klaar lijkt om samen te voegen kan je beleefd antwoorden aan de auteur vertellen wat ze moeten doen om hem klaar te krijgen. Hopelijk zullen zij antwoord geven en hun pull-verzoek dichter bij elkaar brengen.

Vaak is een pull-aanvraag duidelijk weinig inspanning. U kunt dit vaak meteen vertellen toen de bijdrager de selectievakjes in het Pull Request-sjabloon niet controleerde, of gebruikte een algemene pull request titel zoals "made changes" of "Update index.

Er zijn ook situaties waarin de bijdrager probeert een link toe te voegen naar zijn eigen website. of voeg een bibliotheek toe die ze zelf hebben gemaakt, of heeft een lichtzinnige bewerking die niemand helpt behalve zichzelf.

In beide gevallen moet u hun pull-aanvraag afsluiten en antwoorden met deze standaardboodschap:

> Bedankt voor het openen van dit pull-verzoek.
> 
> Dit is een standaard bericht dat we je pull-aanvraag hebben beoordeeld en hebben besloten deze niet samen te voegen. Wij zouden graag toekomstige aanvragen van u ontvangen.
> 
> Dank u wel en prettige programmering.

Als je een tweede mening nodig hebt over een pull-verzoek, ga dan door en laat je commentaar achter over het pull-verzoek. voeg dan het label "discussie" toe aan het pull-verzoek.

## GitHub problemen modereren

freeCodeCamp is een actief open source project. Dagelijks krijgen we nieuwe kwesties, die allemaal moeten worden getriaged en geëtiketteerd.

### GitHub problemen

1. **Code Help-verzoeken**, waarvoor mensen per ongeluk GitHub problemen hebben gemaakt. Als iemand om hulp vraagt, plak dan de volgende boodschap en sluit het probleem af.

   > Dank u voor het melden van deze kwestie.
   > 
   > Dit is een standaardbericht dat u informeert dat dit probleem een verzoek om hulp lijkt te zijn. In plaats van hier om hulp te vragen, klik op de \*\*"Help"\*\* knop op de challenge op freeCodeCamp, waarmee je een vraag in het juiste deel van het forum kunt maken. Vrijwilligers op het forum reageren meestal binnen een paar uur op vragen en kunnen helpen te bepalen of er een probleem is met uw code of de challenge tests.
   > 
   > Als de forumleden bepalen dat er niets mis is met uw code, kunt u verzoeken dit probleem te heropenen. 
   > 
   > Dank u wel en prettige programmering.

2. **Bug or Clarification issues** Probeer de bug zelf te reproduceren als je kunt. Zo niet, vraag ze om de stappen om de bug te reproduceren en of ze screenshots hebben, video's of aanvullende details die u kunnen helpen het probleem te reproduceren. Zodra u het probleem kunt reproduceren - of ten minste kunt bevestigen dat het een legit issue is - label het `bevestigd`. Dan:

- Als het een eenvoudige wijziging is in een bestaande uitdaging, label dan alleen als `eerste keer`, anders label als `help wil`. Gebruik andere labels als geschikt.
- Als het probleem significanter is, flag dan als `bug`. &nbsp; Als er onduidelijkheid bestaat over de juiste koers in een kwestie voel je vrij om @raisedadead over het probleem te labelen en voeg vervolgens het `Discussing` label toe.

3. **Duplicate Issues** Als een probleem hetzelfde is als een ander gerapporteerd probleem, moet het eerder gerapporteerde issue voorrang krijgen. Meld als `Duplicaat`, plak het volgende bericht dat `#XXXXX` vervangt met het issuenummer, en sluit daarna het issue af.

   > Dank u voor het melden van deze kwestie.
   > 
   > Dit is een standaard bericht dat lijkt op een issue dat lijkt op #XXXXX, dus ik sluit het af als een dubbel.
   > 
   > Als je denkt dat ik me vergis bij het sluiten van dit probleem, open het dan opnieuw en voeg dan verdere uitleg toe. Dank u wel en prettige programmering.

4. **is opgelost in staging** Sommige problemen kunnen al zijn opgelost, maar er is geen GitHub probleem aan gekoppeld. Als dit het geval is, kunt u het volgende bericht plakken, het probleem sluiten en een `status toevoegen: opgelost/verzend` label:

   > Dank u voor het melden van deze kwestie.
   > 
   > Dit is een standaardbericht dat u meedeelt dat het probleem dat u hier noemde aanwezig is in de productie. maar dat is al vastgelopen. Dit betekent dat als we de volgende keer onze bouwsector naar de productie verschuiven, dit probleem moet worden opgelost. Daarom sluit ik deze kwestie af.
   > 
   > Als je denkt dat ik me vergis bij het sluiten van dit probleem, open het dan opnieuw en voeg dan verdere uitleg toe. Dank u wel en prettige programmering.

### Sluiting Stal, verouderd, Inactieve Issues en Pull Requests

- Verouderde problemen of PRs zijn die welke geen activiteit van de OP hebben gezien gedurende 21 dagen (3 weken vanaf de laatste activiteit), maar pas nadat een moderator meer informatie/wijzigingen heeft aangevraagd.  Deze kunnen worden gesloten in een geautomatiseerd bot script of door de moderators zelf.

- Activiteit is gedefinieerd als: Reacties die een update vragen op de PR en triages zoals `status: benodigd` label etc.

- Als de OP om extra hulp of zelfs om tijd vraagt, kan het bovengenoemde worden versoepeld en na een antwoord worden herzien. In elk geval moeten de mods hun beste oordeel gebruiken om de uitstaande PR's status op te lossen.

### Andere richtlijnen voor moderators op GitHub

Alhoewel u schrijftoegang zult hebben tot de freeCodeCamp's repository, **moet u nooit rechtstreeks code pushen naar freeCodeCamp repositories**. Alle code moet freeCodeCamp's codebase invoeren in de vorm van een pull-aanvraag van een vork van de repository.

U mag ook nooit uw eigen PRs accepteren. Ze moeten QA worden uitgevoerd door een andere moderator, net als bij elke andere PR.

Als je iemand opmerkt die de [gedragscode](https://code-of-conduct.freecodecamp.org) schendt op GitHub problemen, of opent pull requests met kwaadaardige inhoud of code, e-mail dev@freecodecamp. rg met een link naar de aanstootgevende pull-aanvraag en we kunnen overwegen om ze volledig te bannen uit freeCodeCamp's GitHub organisatie.

# Modereer het Forum

Als Moderator houd je onze gemeenschap een leuke plek voor iedereen om te leren en hulp te krijgen. Je houdt je bezig met gemarkeerde berichten en behandelt spam, off-topic en andere ongepaste gesprekken.

Merk op dat zodra je moderator bent op het forum, je blauwe hints van de moderator over de forumleden zal zien zoals "dit is de eerste keer dat [person] iets geplaatst heeft - laten we ze welkom heten in de gemeenschap! of "[person] is niet lang gepost - laten we hen terug verwelkomen."

![Een blauw sms die zegt "dit is de eerste keer dat [person] gepost heeft - laten we ze welkom heten in de gemeenschap!](https://i.imgur.com/mPmVgzK.png)

Dit zijn mogelijkheden voor u om ze te verwelkomen en ze extra speciaal te laten voelen. U weet nooit wie er in een klein stadium bij betrokken is, onze superhelper kan worden en vele andere mensen kan helpen bij hun codeerreis. Zelfs de kleinste vriendelijkheid kan leiden tot een cascade van goede daden.

### Forum berichten verwijderen

Forum moderators hebben de mogelijkheid om berichten van gebruikers te verwijderen. Je moet dit alleen doen voor de volgende instanties:

1. Iemand heeft een pornografisch of grafisch gewelddadig beeld geschetst.
2. Iemand heeft een link of code gepost die kwaadaardig van aard is en andere campers die erop klikken, kan schaden.
3. Iemand heeft een conversatie overspoeld met veel spamberichten.

### Omgaan met spam

Stuur hen een bericht om het probleem uit te leggen voor de eerste spampost van een gebruiker, en verwijder de link of post naar behoren. Laat een notitie achter op het gebruikersprofiel met uitleg over de actie die u hebt ondernomen. Als het probleem aanhoudt, volg dan het bovenstaande proces. Sneller blokkeert de gebruiker om te posten (gebruik de stilte optie op het Admin paneel) en stuur daarna een waarschuwing met de Gedragscode. Vink het vakje aan in het privébericht dat aangeeft dat uw bericht een "formele waarschuwing" is.

U kunt vragen stellen en incidenten rapporteren in het [staff forum sectie](https://forum.freecodecamp.com/c/staff).

### Omgaan met off-topic gesprekken

Berichten of topics die op de verkeerde plek lijken te staan, kunnen opnieuw gecategoriseerd worden of hernoemd worden naar wat gepast is.

In uitzonderlijke omstandigheden kan het gepast zijn als een moderator een discussie in meerdere threads plaatst.

Nogmaals, als je problemen of vragen hebt, maak dan een bericht met je acties in de personeelscategorie, en label een andere moderator als je wilt dat ze je modererende acties herzien.

### minderjarige gebruikers

Onze gebruiksvoorwaarden vereisen dat gebruikers van freeCodeCamp ten minste 13 jaar oud zijn. In het geval dat een gebruiker onthult dat hij jonger dan 13 jaar is. stuur hen het onderstaande bericht en verwijder hun forumaccount (als het verwijderen niet beschikbaar is, het opschorten van het account is voldoende). Email vervolgens [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) of [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) om ook de freeCodeCamp account van de gebruiker te verwijderen.

```markdown
SUBJECT: Gebruikers onder de 13 hebben geen toestemming om het forum per Gebruiksvoorwaarden te gebruiken

Het is onder onze aandacht gebracht dat u jonger bent dan 13 jaar. Per de [freeCodeCamp voorwaarden](https://www.freecodecamp.org/news/terms-of-service), moet je ten minste 13 jaar oud zijn om de site of het forum te gebruiken. We zullen zowel uw freeCodeCamp account en uw forum account verwijderen. Deze beperking houdt ons aan de wetten van de Verenigde Staten.

Gelieve opnieuw aan te sluiten zodra u ten minste 13 jaar heeft bereikt.

Dank u voor uw begrip.
```

# Facebook modereren

Als je iets ziet dat onze [Gedragscode](https://code-of-conduct.freecodecamp.org/)lijkt te breken, moet je het onmiddellijk verwijderen.

Soms zullen mensen dingen posten waarvan ze denken dat ze grappig zijn. Ze realiseren zich niet dat wat ze zeiden of wat ze deelden, als beledigend kan worden geïnterpreteerd. In deze gevallen moet hun post worden verwijderd, maar degene die haar gedetacheerd heeft hoeft niet per se te worden verboden. Door hun post te laten verwijderen, zullen ze hopelijk begrijpen dat wat ze hebben gepost niet gepast was.

Maar als het een grove belediging is die redelijkerwijs niet kan worden toegeschreven aan een cultureel verschil of aan een misverstand over de Engelse taal. dan moet je sterk overwegen om het lid van de Facebook-groep te blokkeren.

# Modereer Discord

Dit is hoe moderators omgaan met schendingen van onze [Gedragscode](https://code-of-conduct.freecodecamp.org/) op Discord:

1. **Zorg ervoor dat het bedoeld was om de Gedragscode te schenden.** Niet alle overtredingen van de CoC waren als zodanig bedoeld. Een nieuwe camper kan een grote hoeveelheid code posten voor hulp, zonder te weten dat dit als spam kan worden beschouwd. In deze gevallen kun je ze gewoon vragen om hun code te plakken met diensten zoals Codepen of Pastebin.

2. **Als het kamp de Gedragscode duidelijk schendt, zal de moderator als volgt te werk gaan:**

- Schorst de levendige kamper maar waarschuw hem niet of bedreigt ze. In plaats daarvan geef ze rustig de onderbroken rol op Discord, en stuur ze dan het volgende bericht:

```
Dit is een standaard bericht dat ik u tijdelijk moest onderbreken om te praten op de freeCodeCamp Discord server.

Ik ben een moderator die namens onze open source gemeenschap optreedt. Ik kan overwegen om je schorsing op te heffen, maar je moet eerst de volgende 3 stappen zetten:

1. Lees onze Gedragscode: https://code-of-conduct.freecodecamp.org/
2. Bericht me terug en bevestig dat je klaar bent met lezen. 3. Leg me uit waarom je denkt dat ik je heb geschorst en waarom ik je schorsing moet opheffen.
```

- Rapporteer een korte samenvatting van het evenement en hoe ze daarop hebben gereageerd in het #admin kanaal. Hier is een voorbeeld van hoe een dergelijke samenvatting eruit zou kunnen zien:

```
Opgeschorst: _@username_
Reden(en): _Spamming, trolling_
vidence: _Eén of meer koppelingen naar de offend bericht(en)_
CoC: _Verzonden_
```

- Een rapport voor het opheffen van de opschorting zou er als volgt uit moeten zien:

```
Ik heb de schorsing van ` @username ` verwijderd. Ik heb ze de Gedragscode gestuurd. Zij hebben zich juist vandaag gerealiseerd dat zij werden geschorst en zich verontschuldigd hebben voor wat zij hebben gedaan.
```

- Op basis van het antwoord van de overtreders zal de moderator beslissen of hij de schorsing van het overtredende kamp wil verwijderen. Als ze respectvol en apologetisch lijken, kan de moderator de schorsing verwijderen. Wat het beleid betreft, zullen de gematigden zich tijdens dit proces beleefd gedragen, hoe slecht de misdadige kamper zich ook gedraagt. Als ze de Code niet respecteren of niet willen accepteren, moet de opschorting worden gevolgd met een verbod van de Discord server. Gebruik dezelfde samenvatting als hierboven, maar vervang "Verstoppen:" door "Verbannen:".

3. **Hoe verbannen en/of unbannen**

- Om iemand te verbannen, klik met de rechtermuisknop op zijn gebruikersnaam/profielfoto en selecteer "Ban <username>". U krijgt de optie om hun vorige berichten te verwijderen - selecteer "Niets verwijderen", aangezien de boodschappen een historisch record moeten blijven.
- Als je besluit om iemand te verbieden betekent dat dat ze niet bereid zijn zich aan onze gedragscode te houden. Daarom hoeft er zelden een verbod op een Camper te worden ingesteld. Als er echter behoefte aan is, kunt u dit doen door op de servernaam te klikken, door te kiezen voor "Serverinstellingen", kies voor "Bans", selecteer de gebruiker die je wilt unbannen, en klik op "Banaan intrekken".

Discord Bans zijn globaal - je kunt geen gebruiker verbannen van een specifiek kanaal, alleen van de hele server.

4. **Berichten verwijderen** moderators kunnen berichten verwijderen op Discord. Zij moeten alleen in vier zeer specifieke situaties gebruik maken van deze mogelijkheden:

- Iemand heeft een pornografisch of grafisch gewelddadig beeld geschetst.
- Iemand heeft een link of code gepost die kwaadaardig van aard is en andere campers die erop klikken, kan schaden.
- Iemand heeft de chat overspoeld met veel spam berichten (meestal met bots) om chat volledig onbruikbaar te maken.
- Iemand heeft advertenties en/of een zelfbevorderend bericht / afbeelding (social media) geplaatst.

In alle andere situaties - zelfs in situaties waarin de gedragscode wordt geschonden - mogen de moderators de boodschap niet verwijderen, aangezien dit een belangrijk historisch record is. Wanneer je een bericht verwijdert, zorg er dan voor dat je er eerst een screenshot van maakt! De schermafbeelding kan worden ingelogd in het #mod-log kanaal, maar voor de #activity-log is het voldoende om te zeggen dat het bewijs is verwijderd door "gevoelige inhoud". Opmerking: als het bericht materiaal bevat dat illegaal is om een schermafbeelding van te maken kopieer in plaats daarvan de berichtkoppeling - geef die link naar @raisedadead om door te sturen naar het Discord's Trust en Safety team.

5. **Gebruik niet @all of @here** niet @all of @here onder alle omstandigheden! Elke persoon in die chat room krijgt een melding. In sommige gevallen zijn er tienduizenden mensen. Als je wilt dat mensen een aankondiging zien, kun je die op het kanaal zetten zodat iedereen ze kan lezen.

6. **dreigen niet met het verbieden of opschorten** Als een kamper de gedragscode schendt dreigen ze niet te verbieden of op te schorten en waarschuwt ze ook niet in het openbaar. Praat met hen in plaats daarvan privé, of stuur hen een DM en geef een opschorting (per bovengenoemde protocol). Niemand anders in dat kanaal hoeft te weten dat u de persoon hebt verbannen / opgeschort - campers kunnen de samenvatting in het #activity-log kanaal bekijken als ze die informatie willen behouden. Als een overtreding duidelijk onbedoeld was en geen opschorting of privégesprek rechtvaardigt, maak de kwaadaardige camper op de hoogte van zijn of haar acties zonder het als waarschuwing te laten overkomen. Bijvoorbeeld:

- Camper een prikbord met code om hulp te vragen

  Moderator: @username Gebruik Codepen of Pastebin bij het plaatsen van grote hoeveelheden code.

- Of als je echt moet uitleggen waarom:

  Moderator: @username Gebruik Codepen of Pastebin bij het plaatsen van grote hoeveelheden code omdat het de chat voor iedereen verstoort en als spamming kan worden beschouwd volgens onze gedragscode.

- Voor milde en onopzettelijke schendingen van de gedragscode

  Moderator: Dit is een vriendelijke herinnering voor iedereen om de gedragscode te volgen: https://code-of-conduct.freecodecamp.org/

7. **Niet schromen om moderator te zijn** Zie jezelf niet als hierboven de gemeenschap. U bent de community. En de gemeenschap vertrouwt je op het beschermen van iets zeldzaam dat we allemaal delen - een _welkome_ plaats voor nieuwe ontwikkelaars. Als je bang bent om een moderator te zijn, kunnen mensen zich ongemakkelijk voelen om je heen op dezelfde manier als mensen zich ongemakkelijk kunnen voelen rond een politieagent, zelfs als ze niets verkeerd doen. Dat is gewoon menselijk van aard.

8. **Ontmoet andere moderators** Als je het niet eens bent met de actie van een moderator praat met hen privé of breng het op in het #mod-chatkanaal. Overschrijft nooit een ban en spreekt nooit de andere moderator(s) publiekelijk tegen. Neem in plaats daarvan een koelbloedige discussie in het gekletter en overtuig de moderator ervan dat hij zelf zijn verbod moet omkeren of zijn standpunt moet wijzigen. Vergeet niet dat we allemaal in hetzelfde team zitten. We willen de rol van de moderators waarmaken en een gemeenschappelijk front vormen.

9. **Praat met andere moderators** We hebben alleen een ruimte voor moderators. Gebruik het! Als je je ongemakkelijk voelt met het omgaan met een bepaalde situatie, vraag dan andere moderators om hulp. Als u denkt dat er iets besproken moet worden, moet u dat doen. Je maakt deel uit van het team en wij waarderen de invoer van elk teamlid! Zelfs als je het totaal oneens bent met iets in deze richtlijnen of de gedragscode!

10. **Tijdelijk inactief** Als je niet actief zal zijn als moderator voor een tijdje door vakantie ziekte of welke andere reden dan ook, zorg ervoor dat je de anderen op de hoogte houdt in het #mod-chatkanaal. Dit is dus zo dat we weten of we erop kunnen rekenen dat u regelmatig in de server actief bent of niet.

# Hoe moderator worden

Als je mensen in de gemeenschap in de loop der tijd consequent helpt, zal ons Moderator Team uiteindelijk aandacht krijgen, en een van hen zal je noemen als een mogelijke moderator voor [onze staf](https://forum.freecodecamp.org/g/Team). Er zijn geen snelkoppelingen om moderator te worden.

Als je goedgekeurd bent, voegen we je toe aan onze Moderator Teams op [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **Voor GitHub:** Nadat u bent geaccepteerd als moderator, ontvangt u een uitnodiging voor de repository van Github. Je moet naar [freeCodeCamp GitHub Organisation](https://github.com/orgs/freeCodeCamp/invitation) gaan om de uitnodiging te kunnen accepteren. Dit is vereist voor ons om je schrijfrechten te kunnen geven op enkele van onze repositories.

# Hoe we inactieve moderators stoppen

Houd er rekening mee dat we vaak mods verwijderen waarvan we denken dat ze inactief zijn. Wanneer we dit doen, sturen we de volgende boodschap:

> Dit is een standaard bericht dat je hiervan op de hoogte stelt, Aangezien je de laatste tijd geen actieve moderator bent geweest, verwijderen we je uit ons Moderator team. Wij waarderen uw hulp in het verleden ten zeerste.

> Als je denkt dat we dit ten onrechte hebben gedaan, of als je er klaar voor bent om terug te komen en er meer bij te dragen, antwoord gewoon op dit bericht dat mij laat weten.

# Hoe de werkruimte van onze bijdragers werkt

Iedereen is welkom in de [Bijdragers kamer in onze Discord](https://discord.gg/KVUmVXA). Het is de aangewezen chat room voor moderators en andere kampers die op allerlei manieren bijdragen aan onze gemeenschap. inclusief via studiegroepen.

We gaan ervan uit dat bijdragers alles in deze kamer zullen lezen dat ze direct noemt met een `@username`. Al het andere is optioneel. Maar voel je vrij om alles te lezen wat daar post is en om interactie.

# Omgaan met verzoeken

U kunt benaderd worden door organisaties die op de een of andere manier willen samenwerken met freeCodeCamp. Als je beseft dat dit is wat ze willen, stop dan met te praten met hen en vertel ze om quincy@freecodecamp.org te e-mailen. Hij krijgt altijd voorstellen als deze en is in de beste positie om te beoordelen of een dergelijke relatie het waard is voor onze gemeenschap (en dat gebeurt zelden ook).

# Omgaan met (geestelijke) gezondheidsonderzoeken

Je kunt situaties tegenkomen waarin gebruikers medisch advies zoeken of zich bezighouden met psychische gezondheidsproblemen en op zoek zijn naar ondersteuning. Politiek gezien zou u moeten vermijden om over deze zaken privé te praten. Mocht de situatie op een gegeven moment teruggaan naar fCC, dan willen we de gesprek(sen) in de notulen laten opnemen. Maak het duidelijk dat wij geen medische professionals zijn en dat u de gebruiker aanmoedigt om professionele hulp te vinden. Hoe moeilijk het soms ook kan zijn, vermijd andere tips of adviezen te geven dan de gebruiker te wijzen in de richting van professionele hulp!

Als dit gebeurt op Discord: breek de gebruiker op. Dit is niet om hen te bestraffen! Het schorsen van een gebruiker zal een privékanaal aanmaken dat alleen toegankelijk is voor de gebruiker en het team. Dit zal zowel de gebruiker als fCC op verschillende manieren ten goede komen:

- De gebruiker is gegarandeerd wat privacy
- Openbare chat is niet langer onderbroken
- Andere teamleden kunnen zich inlaten, mocht u zich ongemakkelijk voelen om de situatie zelf aan te pakken

> [!NOT] Een gebruiker die een gebruiker blokkeert geeft hem automatisch een bericht over het lezen van onze gedragscode. Zorg ervoor dat je de gebruiker informeert dat je hem hebt geschorst om hem privacy te geven en dat hij niet wordt gestraft. Dat is heel belangrijk! We willen absoluut vermijden om gebruikers het idee te geven dat ze gestraft worden voor het bereiken van hulp op je manier!

Als u denkt dat de gebruiker in staat is om opnieuw deel te nemen aan de community, klik dan met de rechtermuisknop op het privékanaal en kopieer het ID. Plaats het volgende bericht in het #mod-log:

> Referentie medisch advies: <channel ID> <username>

Daarna kunt u de opschortingen van de gebruiker verwijderen, zoals u normaal doet.

Nuttige URL's:

http://www.zelfmoord.org/internationaal-zelfmoord-hotlines.html

# Een opmerking over de vrijheid van meningsuiting

Soms zullen mensen iets beledigend of opruiend verdedigen dat ze als "vrije meningsuiting" hebben betiteld.

Deze XKCD-comic vat perfect de gedachten van de meeste gemeenschappen over de vrijheid van meningsuiting samen. Dus als iemand iets verdedigt dat hij als "vrije meningsuiting" zegt, voel je vrij om het naar hem te sturen.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Bedankt voor het lezen van dit en bedankt voor het helpen van de ontwikkelaargemeenschap!

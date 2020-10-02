# Den officielle freeCodeCamp Moderator Handbook.

Dette vil hjælpe dig med at moderere forskellige steder i vores samfund, herunder:

- GitHub issues & pull requests
- Forummet, chatrum, Facebook-grupper og andre online mødesteder
- In-person begivenheder som studiegrupper, hackathons, og konferencer

**Alle freeCodeCamp Moderatorer er moderatorer i hele samfundet. Det betyder, at vi har tillid til, at du fører tilsyn med nogen af disse steder.**

Dette er sagt, kan du tjene som en moderator i hvilke steder er af mest interesse for dig. Nogle moderatorer hjælper bare på GitHub. Andre hjælper bare på forummet. Nogle moderatorer er aktive overalt.

Den nederste linje er, at vi vil have dig til at nyde at være en moderator, og investere din knappe tid på steder, der er af interesse for dig.

> [!BEMÆRK] "Med stor magt kommer stort ansvar." - Onkel Ben

Som moderator er temperament vigtigere end tekniske færdigheder.

Lyt. Vær Hjælpfuld. Må ikke misbruge din magt.

freeCodeCamp er et rummeligt fællesskab, og vi er nødt til at bevare det på den måde.

Vi har en fælles adfærdskodeks, der styrer hele vores fællesskab. Jo færre regler, jo lettere er de at huske. Du kan læse disse regler og forpligte dem til hukommelse [her](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderatorerne har mulighed for at lukke problemer og acceptere eller lukke pull anmodninger.

Moderatorer har to primære ansvarsområder vedrørende GitHub:

1. QA'ing and fletning pull requests
2. Evaluering og svar på spørgsmål

## Modererende Pull-forespørgsler

Pull Requests (PR'er) er, hvordan bidragsydere indsender ændringer til freeCodeCamp's repository. Det er vigtigt, at vi udfører kvalitetssikring (QA) på pull anmodninger, før vi beslutter, om vi vil fusionere dem eller lukke dem.

### Typer af Pull-forespørgsler

1. **Challenge Instruction Edits** Dette er ændringer i teksten af udfordringer - Beskrivelse, Instruktioner eller Test Text. Du kan også gennemgå disse højre på GitHub og beslutte, om at flette dem. Vi er nødt til at være lidt mere forsigtige med disse, fordi millioner af mennesker vil støde på denne tekst, mens de arbejder gennem freeCodeCamp pensum. Gør pull-anmodningen teksten mere klar uden at gøre den meget længere? Er redigeringerne relevante og ikke alt for pedantiske? Husk, at vores mål er, at udfordringerne skal være så klare og så korte som muligt. De er ikke stedet for obskure detaljer. Bidragydere kan også forsøge at tilføje links til ressourcer til udfordringerne. Du kan lukke disse pull anmodninger og besvare dem med dette:

   > Tak for din pull-anmodning.
   > 
   > Jeg er ved at afslutte denne anmodning. Tilføj links og andre detaljer til udfordringens tilsvarende guide artikel i stedet.
   > 
   > Hvis du tror, jeg er forkert i at lukke dette problem, skal du genåbne det og tilføje yderligere afklaring. Tak og glad kodning.

2. **Challenge Code Edits** Dette er ændringer af koden i en udfordring - Challenge Seed, Challenge Solution, and Test Strings. Disse pull-anmodninger skal trækkes ned fra GitHub og testes på din lokale computer for at sikre, at udfordringstestene stadig kan bestået med den aktuelle løsning, og den nye kode ikke indføre nogen fejl. Nogle bidragsydere kan forsøge at tilføje yderligere test til at dække pedantiske hjørnetilfælde. Vi skal passe på, at vi ikke gør udfordringen for kompliceret. Disse udfordringer og deres test bør være så enkle og intuitive som muligt. Bortset fra de algoritme udfordringer og interview prep sektion, bør eleverne være i stand til at løse hver udfordring inden for omkring 2 minutter.

3. **Kodebase Ændringer** Disse kode redigerer ændre funktionaliteten af freeCodeCamp platformen selv. Nogle gange forsøger bidragsydere at foretage ændringer uden megen forklaring, men for kodeændringer er vi nødt til at sikre, at der er et reelt behov for ændringen. Så disse pull anmodninger bør henvise til en eksisterende GitHub problem, hvor årsagerne til ændringen er drøftet. Derefter kan du åbne pull request på din computer og teste dem ud lokalt. Når du har gjort det, hvis ændringerne ser godt ud, så lad være med at flette dem helt endnu. Du kan kommentere på pull request siger "LGTM", og derefter nævne @raisedadead, så han kan tage et endeligt udseende.

### Sådan flettes eller lukkes pull anmodninger

Først og fremmest, når du vælger en pull anmodning til QA, bør du tildele dig selv til det. Du kan gøre dette ved at klikke på "tildele dig selv" linket under "tildelte" del i højre kolonne i GitHub interface.

Afhængigt af typen af pull anmodning det er, følge de tilsvarende regler anført ovenfor.

Før du sammenfletter en pull-anmodning, skal du sørge for, at GitHub har grønne checkmarks for alt. Hvis der er nogen X's, undersøge dem først og finde ud af, hvordan du får dem forvandlet til grønne checkmarks først.

Nogle gange vil der være en sammenfletningskonflikt. Det betyder, at en anden pull request har foretaget en ændring af den nøjagtige samme del af samme fil. GitHub har et værktøj til at løse disse sammenfletningskonflikter direkte på GitHub. Du kan forsøge at løse disse konflikter. Bare brug din bedste bedømmelse. pull request's ændringer vil være på toppen, og Master branchens ændringer vil være i bunden. Nogle gange vil der være overflødige oplysninger deri, der kan slettes. Før du er færdig, skal du sørge for at slette `<<<<<<`, `=======`, og `>>>>>>` at Git bidrager til at angive konfliktområder.

Hvis pull request ser klar til at flette (og kræver ikke godkendelse fra @raisedadead), kan du gå videre og flette det. Vær sikker på at bruge standard "Squash og Merge" funktionalitet på GitHub. Dette vil klemme alle pull anmodninger forpligter sig ned i et enkelt fællesskab, hvilket gør Git historie meget lettere at læse.

Du skal derefter kommentere på pull anmodningen, takke bidragsyderen på din egen personlige måde.

Hvis forfatteren til pull-forespørgslen er en "førstegangsbidragsyder", bør du også lykønske dem med deres første sammenlagte pull-anmodning til lageret. Du kan se på øverste højre hjørne af PR's krop for at bestemme en førstegangsbidragsyder.  Det vil vise `Førstegangsbidragsyder` som vist nedenfor:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp~690x281](https://i.imgur.com/dTQMjGM.png)

Hvis pull-anmodningen ikke ser ud klar til at flette, kan du høfligt svare forfatteren hvad de skal gøre for at få det klar. Forhåbentlig vil de svare og få deres pull-anmodning tættere på klar.

Ofte vil en pull-anmodning naturligvis være en lav indsats. Du kan ofte fortælle dette med det samme, når bidragsyderen ikke generede afkrydsningsfelterne i Pull Request Template eller brugte en generisk pull request titel som "made changes" eller "Update index. d".

Der er også situationer, hvor bidragsyderen forsøger at tilføje et link til deres egen hjemmeside, eller inkludere et bibliotek, de selv har skabt, eller har en useriøs redigering, der ikke tjener til at hjælpe nogen, men selv.

I begge disse situationer, bør du gå videre og lukke deres pull anmodning og svare med denne standard besked:

> Tak for at åbne denne pull anmodning.
> 
> Dette er en standard besked, der fortæller dig, at vi har gennemgået din pull-anmodning og har besluttet ikke at flette den. Vi ville glæde os over fremtidige anmodninger fra Dem.
> 
> Tak og glad kodning.

Hvis du har brug for en anden udtalelse om en pull-anmodning, gå videre og efterlade dine kommentarer til pull-anmodningen, derefter tilføje "diskuterende" etiket til pull anmodningen.

## Modererende GitHub Problemer

freeCodeCamp er et aktivt open source-projekt. Vi får nye spørgsmål hver dag, som alle skal forsøges og mærkes.

### Typer af GitHub Issues

1. **Code Help Requests**, hvilke folk har fejlagtigt oprettet GitHub problemer for. Hvis nogen beder om hjælp, indsæt følgende besked, så luk problemet.

   > Tak for din rapportering om dette problem.
   > 
   > Dette er en standard besked om, at dette problem synes at være en anmodning om hjælp. I stedet for at bede om hjælp her, klik venligst på \*\*"Hjælp"\*\* knappen på udfordringen på freeCodeCamp, som vil hjælpe dig med at skabe et spørgsmål i den rigtige del af forummet. Frivillige på forummet svarer normalt på spørgsmål inden for et par timer og kan hjælpe med at afgøre, om der er et problem med din kode eller udfordringens tests.
   > 
   > Hvis forummedlemmerne afgør, at der ikke er noget galt med din kode, kan du anmode om at dette problem genåbnes. 
   > 
   > Tak og glad kodning.

2. **Fejl- eller afklaringsproblemer** Prøv selv at reproducere fejlen, hvis du kan. Hvis ikke, så spørg dem om trinene for at reproducere fejlen, og om de har screenshots, videoer, eller yderligere detaljer, der kan hjælpe dig med at gengive problemet. Når du kan gengive problemet - eller i det mindste bekræfte det er et legit problem - etiket det `bekræftet`. Så:

- Hvis det er en simpel ændring til en eksisterende udfordring, etiket som `første timer kun`, ellers etiket som `hjælp ønskede`. Brug andre etiketter efter behov.
- Hvis problemet er mere betydningsfuldt, flag som `bug`. &nbsp; Hvis der er nogen tvetydighed med hensyn til den korrekte fremgangsmåde i en sag, er velkommen til at tagge @raisedadead om problemet få sin mening om det, og derefter tilføje `Diskutere` etiketten.

3. **Duplikerede problemer** Hvis et problem er det samme som et andet rapporteret problem, bør det tidligere rapporterede problem have forrang. Markér som `Dupliker`, indsæt følgende besked, der erstatter `#XXXXX` med problemnummeret, og luk derefter problemet.

   > Tak for din rapportering om dette problem.
   > 
   > Dette er en standard besked om, at dette problem synes at være meget lig udstedelse # XXXXX, så jeg er ved at lukke det som et duplikat.
   > 
   > Hvis du tror, jeg er forkert i at lukke dette problem, skal du genåbne det og tilføje yderligere afklaring. Tak og glad kodning.

4. **Fast i iscenesættelse** Nogle problemer er måske allerede blevet rettet i iscenesættelse, men har ikke et GitHub problem forbundet med dem. Hvis dette er tilfældet, kan du indsætte følgende besked, lukke problemet og tilføje en `status: løst/shipping` etiket:

   > Tak for din rapportering om dette problem.
   > 
   > Dette er et standardbudskab til Dem om, at det problem, De nævnte her, er til stede i produktionen, men at det allerede er blevet fastsat i etaper. Det betyder, at næste gang vi skubber vores iscenesættelse til produktion, bør dette problem løses. På grund af dette, jeg lukker dette problem.
   > 
   > Hvis du tror, jeg er forkert i at lukke dette problem, skal du genåbne det og tilføje yderligere afklaring. Tak og glad kodning.

### Lukning af Stale, forældede, inaktive spørgsmål og Pull-forespørgsler

- Gamle problemer eller PR'er er dem, der ikke har set nogen aktivitet fra OP i 21 dage (3 uger fra sidste aktivitet) men først efter en moderator har anmodet om flere oplysninger/ændringer.  Disse kan lukkes i et automatiseret / bot script eller af moderatorerne selv.

- Aktivitet er defineret som: Kommentarer der anmoder om en opdatering på PR og triages som `status: Opdater nødvendig` etiket osv.

- Hvis OP beder om yderligere hjælp eller endda tid, kan ovenstående blive afslappet og genbesøgt efter et svar er givet. Under alle omstændigheder bør mods bruge deres bedste vurdering til at løse den udestående PR's status.

### Andre retningslinjer for moderatorer på GitHub

Selvom du vil have skriveadgang til freeCodeCamp's repositorie, **bør du aldrig skubbe kode direkte til freeCodeCamp repositorier**. Al kode skal indtaste freeCodeCamp's kodebase i form af en pull-anmodning fra en gaffel fra lageret.

Du bør heller aldrig acceptere din egen PR. De skal være QA'd af en anden moderator, ligesom med enhver anden PR.

Hvis du bemærker nogen bryder [adfærdskodeksen](https://code-of-conduct.freecodecamp.org) på GitHub spørgsmål, eller åbning af pull requests med skadeligt indhold eller kode, e-mail dev@freecodecamp. rg med et link til den krænkende pull-anmodning, og vi kan overveje at forbyde dem fra freeCodeCamp's GitHub organisation helt.

# Moderation af forummet

Som moderator hjælper du med at holde vores fællesskab et behageligt sted, hvor alle kan lære og få hjælp. Du vil beskæftige sig med flagede indlæg og håndtere spam, off-topic, og andre upassende samtaler.

Bemærk, at når du er moderator på forummet, vil du begynde at se blå moderator tips om forum medlemmer, som "dette er første gang [person] har sendt - lad os byde dem velkommen til fællesskabet! eller "[person] har ikke postet i lang tid - lad os byde dem velkommen tilbage."

![En blå tekst besked siger "dette er første gang [person] har sendt - lad os byde dem velkommen til fællesskabet!](https://i.imgur.com/mPmVgzK.png)

Disse er muligheder for dig at byde dem velkommen og få dem til at føle sig ekstra specielle. Du ved aldrig, hvilken person, der er marginalt involveret, kan blive vores næste superhjælper, hjælpe mange andre mennesker i deres kodning rejse. Selv den mindste venlighed kan udløse en kaskade af gode gerninger.

### Sletter forumindlæg

Forum moderatorer har mulighed for at slette brugerens indlæg. Du bør kun gøre dette i følgende tilfælde:

1. Nogen har sendt et pornografisk eller grafisk voldeligt billede.
2. Nogen har udstationeret et link eller kode, der er skadelig i naturen, og kunne skade andre campister, der klikker på det.
3. Nogen har oversvømmet en tråd med masser af spambeskeder.

### Håndtering af spam

For det første spam-indlæg af en bruger, send dem en meddelelse, der forklarer problemet, og fjerne linket eller indlægget efter behov. Efterlad et notat på brugerens profil, der forklarer hvilken handling du har foretaget. Hvis problemet fortsætter, så følg processen ovenfor. Blokér brugeren stille og roligt fra at poste (ved hjælp af indstillingen stilhed i brugeradministratorpanelet), og send derefter en advarsel med Adfærdskodeksen. Markér feltet i den private besked, der angiver, at din besked er en "formel advarsel".

Du kan stille spørgsmål og rapportere hændelser i [personaleforummet](https://forum.freecodecamp.com/c/staff).

### Håndtering af samtaler, der ikke er emnet

Indlæg eller emner, der synes at være på det forkerte sted, kan blive re-kategoriseret eller omdøbt til hvad der ville være passende.

Under særlige omstændigheder kan det være hensigtsmæssigt, at en moderator gaffler en diskussion i flere tråde.

Igen, hvis du har problemer eller spørgsmål, lave et indlæg med dine handlinger i personalet kategori, og tag en anden moderator, hvis du vil have dem til at gennemgå dine modererende handlinger.

### Mindreårige Brugere

Vores servicevilkår kræver, at freeCodeCamp brugere er mindst 13 år. I tilfælde af, at en bruger afslører, at de er under 13 år, sende dem nedenstående besked og slette deres forum konto (hvis sletning ikke er tilgængelig, suspension af kontoen er tilstrækkelig). Send derefter [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) eller [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) for at slette brugerens freeCodeCamp-konto.

```markdown
EMNE: Brugere under 13 må ikke bruge forummet i henhold til servicevilkår

Det er kommet til vores opmærksomhed, at du er under 13 år. Per [freeCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), du skal være mindst 13 år gammel for at bruge webstedet eller forummet. Vi vil slette både din freeCodeCamp konto og din forum konto. Denne begrænsning holder os i overensstemmelse med USA's lovgivning.

Vær venlig at vende tilbage når du har nået mindst 13 år.

Tak for Deres forståelse.
```

# Modererende Facebook

Hvis du ser noget, der synes at bryde vores [Code of Conduct](https://code-of-conduct.freecodecamp.org/), skal du slette det med det samme.

Nogle gange vil folk sende ting, som de synes er sjove. De er ikke klar over, at det, de sagde, eller hvad de delte, kunne fortolkes som krænkende. I disse tilfælde skal deres indlæg slettes, men den person, der har udstationeret det, behøver ikke nødvendigvis at blive forbudt. Ved at få deres indlæg slettet, vil de forhåbentlig komme til at forstå, at hvad de udstationerede var upassende.

Men hvis det er en overgreb, der ikke med rimelighed kan tilskrives en kulturel forskel eller en misforståelse af det engelske sprog, så bør du på det kraftigste overveje at blokere medlemmet fra Facebook-gruppen.

# Modererende Discord

Her er hvordan moderatorer håndtere overtrædelser af vores [Code of Conduct](https://code-of-conduct.freecodecamp.org/) på Discord:

1. **Sørg for, at det var hensigten at krænke adfærdskodeksen.** Ikke alle overtrædelser af komitéen var beregnet som sådan. En ny autocamper kan sende en stor mængde kode til hjælp, uvidende om, at dette kan betragtes som spamming. I disse tilfælde kan du bare bede dem om at indsætte deres kode med tjenester som Codepen eller Pastebin.

2. **Hvis autocamperen klart overtræder adfærdskodeksen, vil moderatoren fortsætte på følgende måde:**

- Suspendér den krænkende autocamper, men advarer ikke eller truer dem. I stedet, stille og roligt give dem den suspenderede rolle på Discord, så send dem følgende meddelelse:

```
Dette er en standard besked om, at jeg var nødt til midlertidigt at suspendere dig fra at tale på freeCodeCamp Discord serveren.

Jeg er moderator, der handler på vegne af vores open source-fællesskab. Jeg kan overveje at fjerne din suspension, men jeg har brug for dig til at tage følgende 3 skridt først:

1. Læs vores adfærdskodeks: https://code-of-conduct.freecodecamp.org/
2. Besked mig tilbage bekræfter, at du er færdig med at læse den.
3. Forklar mig, hvorfor De mener, at jeg suspenderede Dem, og hvorfor jeg skulle fjerne Deres suspension.
```

- Rapportér en kort oversigt over begivenheden, og hvordan de reagerede på det i #admin kanalen. Her er et eksempel på, hvordan en sådan oversigt kan se ud:

```
Suspenderet: _@username_
Reason(s): _Spamming, trolling_
Evidence: _One eller flere links til de(n) krænkende meddelelse(r)_
CoC: _Sent_
```

- En rapport til fjernelse af en suspension bør se sådan ud:

```
Jeg har fjernet suspensionen fra ` @username `. Jeg sendte dem adfærdskodeksen. De indså i dag, at de blev suspenderet og undskyldt for, hvad de gjorde.
```

- Baseret på gerningsmændenes svar, vil moderatoren beslutte, om at fjerne suspensionen fra den krænkende camper. Hvis de synes respektfulde og undskyldende, kan moderatoren fjerne suspensionen. Som en politisk sag vil moderatorer være høflige i denne proces, uanset hvor dårligt den krænkende autocamper har opført. Hvis de ikke er respektfulde eller uvillige til at acceptere komitéen, bør suspensionen følges med et forbud fra Discord serveren. Brug det samme resumé som ovenfor, men erstat "Suspended:" med "Banned:".

3. **Sådan bandlyses og/eller afskaffes**

- For at forbyde nogen, højreklik på deres brugernavn / profil billede og vælg "Ban <username>". Du vil blive givet mulighed for at slette deres tidligere beskeder - vælg "Slet ikke", da meddelelserne bør forblive til stede som en historisk rekord.
- Hvis du beslutter dig for at forbyde nogen, betyder det, at de er uvillige til at overholde vores adfærdskodeks. Derfor bør der sjældent forekomme forbud mod en Camper. Men hvis behovet opstår, kan du gøre det ved at klikke på servernavnet, vælge "Server Indstillinger", vælge "Bans", vælge den bruger, du ønsker at fjerne forbud, og klikke på "Tilbagekald Ban".

Discord Bans er globale - du kan ikke udelukke en bruger fra en bestemt kanal, kun fra hele serveren.

4. **Sletning af beskeder** Moderatorer har mulighed for at slette beskeder på Discord. De bør kun udøve denne evne i fire meget specifikke situationer:

- Nogen har sendt et pornografisk eller grafisk voldeligt billede.
- Nogen har udstationeret et link eller kode, der er skadelig i naturen, og kunne skade andre campister, der klikker på det.
- Nogen har oversvømmet chatten med masser af spam-beskeder til en sådan ekstrem grad (normalt involverer bots) at gøre chat helt ubrugelig.
- Nogen har sendt reklame og / eller en selvpromoverende besked / billede (sociale medier).

I alle andre situationer - selv situationer, hvor adfærdskodeksen overtrædes - bør moderatorerne ikke slette meddelelsen, da disse er en vigtig historisk rekord. Når du sletter en besked, skal du sørge for at tage et skærmbillede af den først! Skærmbilledet kan være logget på #mod-log-kanalen, men for #activity-loggen er det tilstrækkeligt at sige, at beviserne blev "fjernet på grund af følsomt indhold". Bemærk: Hvis meddelelsen indeholder materiale, der ville være ulovligt at tage et skærmbillede af, kopier i stedet beskedlinket - giv dette beskedlink til @raisedadead for at videresende til Discord's Trust and Safety Team.

5. **Brug ikke @everyone eller @here** Brug ikke @everyone eller @here under ingen omstændigheder! Hver enkelt person i dette chatrum får en notifikation. I nogle tilfælde titusinder af mennesker. I stedet, hvis du vil have folk til at se en meddelelse, du kan fastgøre det til den kanal til at tillade alle at læse det.

6. **Trues ikke at forbyde eller suspendere** Hvis en autocamper bryder adfærdskodeksen, ikke true med at forbyde eller suspendere dem, og aldrig advare dem offentligt. I stedet, tale med dem privat, eller sende dem en DM og udstede en suspension (per ovenstående protokol). Ingen andre i denne kanal har brug for at vide, at du bandlyste / suspenderede personen - campister kan se resuméet i #activity-log-kanalen, hvis de ønsker at holde op på disse oplysninger. Hvis en overtrædelse var klart utilsigtet og ikke garanterer en suspension eller privat samtale, gøre den krænkende autocamper opmærksom på hans / hendes handlinger uden at gøre det kommer på tværs som en advarsel. For eksempel:

- Camper sender en kodevæg for at anmode om hjælp

  Moderator: @username Brug venligst Codepen eller Pastebin når du sender store mængder kode.

- Eller hvis du virkelig nødt til at forklare hvorfor:

  Moderator: @username Brug venligst Codepen eller Pastebin når du sender store mængder kode, fordi det forstyrrer chatten for alle og kan betragtes som spamming i henhold til vores adfærdskodeks.

- For milde og utilsigtede overtrædelser af adfærdskodeksen

  Moderator: Dette er en venlig påmindelse for alle at følge adfærdskodeksen: https://code-of-conduct.freecodecamp.org/

7. **Må ikke prale af at være en moderator** Se ikke dig selv som over fællesskabet. Du er fællesskabet. Og fællesskabet har tillid til dig for at hjælpe med at beskytte noget sjældent, som vi alle deler - et _indbydende_ sted for nye udviklere. Hvis du praler om at være en moderator, folk kan føle sig utrygge omkring dig, på samme måde, som folk kan føle sig utrygge omkring en politibetjent, selv hvis de ikke gør noget galt. Det er kun den menneskelige natur.

8. **Modsiger ikke andre moderatorer** Hvis du er uenig i en moderators handling tale med dem i privat eller bringe det op i den #mod-chat kanal. Aldrig tilsidesætte et forbud, og aldrig modsige de andre moderator(er) offentligt. I stedet har en kølig diskussion i mod-chat og overbevise moderatoren om, at de selv bør vende deres forbud eller ændre deres synspunkt. Husk: Vi er alle på det samme team. Vi ønsker at værdsætte moderatorernes rolle og præsentere en fælles front.

9. **Tal med andre moderatorer** Vi har kun plads til moderatorer. Brug det! Hvis du føler dig ubehagelig med at håndtere en bestemt situation, så spørg andre moderatorer om hjælp. Hvis De mener, at der skal diskuteres noget, så gør det. Du er en del af teamet, og vi sætter pris på input fra alle teammedlemmer! Selv om De er fuldstændig uenig i noget i disse retningslinjer eller i adfærdskodeksen!

10. **Midlertidigt inaktiv** Hvis du ikke vil være aktiv som moderator i et stykke tid på grund af ferie, sygdom eller anden grund, sørge for at lade de andre vide i den #mod-chat kanal. Dette er så vi ved, om vi kan regne med, at du regelmæssigt er aktiv på serveren eller ej.

# Sådan bliver du en moderator

Hvis du hjælper folk i samfundet konsekvent over tid, vil vores Moderator Team til sidst tage til efterretning, og en af dem vil nævne dig som en mulig moderator til [vores personale](https://forum.freecodecamp.org/g/Team). Der er ingen genveje til at blive moderator.

Hvis du er godkendt, vil vi føje dig til vores Moderator Teams på [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators)osv.

> [!NOTE] > **For GitHub:** Når du er blevet accepteret som moderator, vil du modtage en Github repository invitation. Du er nødt til at gå over mod [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) for at kunne acceptere invitationen. Dette er nødvendigt, for at vi kan give dig skriveadgang på nogle af vores depoter.

# Hvordan vi pensionerer inaktive moderatorer

Bemærk venligst, at vi ofte vil fjerne mods, som vi mener er inaktive. Når vi gør dette, vil vi sende følgende meddelelse:

> Dette er en standard besked, der underretter dig om, at, da du ikke synes at have været en aktiv moderator for nylig, fjerner vi dig fra vores Moderator-team. Vi værdsætter dybt jeres hjælp i fortiden.

> Hvis du tror, vi gjorde det ved en fejl, eller når du er klar til at komme tilbage og bidrage mere, besvar blot denne besked, så jeg kan vide.

# Sådan fungerer vores bidragyderrum

Alle er velkomne i [Contributors room på vores Discord](https://discord.gg/KVUmVXA). Det er det udpegede chatrum til moderatorer og andre campister, der bidrager til vores fællesskab på en hvilken som helst måde herunder gennem studiegrupper.

Vores antagelse er, at bidragsydere vil læse alt i dette rum, der direkte nævner dem med et `@username`. Alt andet er valgfrit. Men du er velkommen til at læse noget som helst indlæg derinde og interagere.

# Håndtering af advokater

Du kan blive kontaktet af organisationer, der ønsker at partner eller co-brand med freeCodeCamp på en eller anden måde. Når du indser, at dette er, hvad de er efter, skal du stoppe med at tale med dem og fortælle dem at e-maile quincy@freecodecamp.org. Han får hele tiden forslag som dette og er i den bedste position til at bedømme, om et sådant forhold vil være det værd for vores samfund (og det er sjældent).

# Håndtering af (mental) sundhedsforespørgsler

Du kan komme på tværs af situationer, hvor brugere søger lægehjælp eller beskæftiger sig med mental sundhed og søger støtte. Som en politisk sag bør De undgå at tale privat om disse spørgsmål. Hvis situationen på et tidspunkt afspejler sig tilbage til fCC, ønsker vi at føre samtalen på posten. Gør det klart, at vi ikke er sundhedspersonale, og at du opfordrer brugeren til at finde professionel hjælp. Så svært som det nogle gange kan være, undgå at give nogen tips eller råd, bortset fra at pege brugeren i retning af professionel hjælp!

Hvis dette sker på Discord: Suspendér brugeren. Det er ikke at straffe dem! Suspenderer en bruger vil skabe en privat kanal, der kun er tilgængelig for brugeren og holdet. Dette vil gavne både brugeren og fCC på flere måder:

- Brugeren er garanteret noget privatliv
- Offentlig chat er ikke længere forstyrret
- Andre teammedlemmer kan rejse ind, hvis du er ubehageligt at håndtere situationen selv

> [!BEMÆRK] Suspenderer en bruger automatisk giver dem en besked om at læse vores adfærdskodeks. Sørg for at du informerer brugeren om, at du Suspenderede dem for at give dem noget privatliv, og at de ikke bliver straffet. Det er meget vigtigt! Vi ønsker absolut at undgå at give brugerne den idé, at de bliver straffet for at nå ud for at få hjælp!

Hvis du mener, at brugeren er i stand til at slutte sig til samfundet, skal du højreklikke på den private kanal og kopiere ID. Sæt følgende besked i #mod-log:

> Henvisning til lægelig rådgivning: <channel ID> <username>

Derefter kan du fjerne suspensionen fra brugeren, som du normalt gør.

Nyttige URL'er:

http://www.suicide.org/international-suicide-hotlines.html

# Et notat om ytringsfrihed

Nogle gange vil folk forsvare noget stødende eller antændende, at de sagde som "ytringsfrihed".

Denne XKCD tegneserie opsummerer perfekt de fleste samfunds tanker om ytringsfrihed. Så hvis nogen forsvarer noget, de siger som "ytringsfrihed" velkommen til at sende det til dem.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Tak for at læse dette, og tak for at hjælpe udviklerfællesskabet!

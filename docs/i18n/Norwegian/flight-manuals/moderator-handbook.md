# Den offisielle freeCodeCamp Moderator håndboken.

Dette vil hjelpe deg med å moderere forskjellige steder i vårt samfunn, inkludert:

- GitHub saker & trekk forespørsler
- Forum, chatterom, Facebook-grupper og andre onlinemøter
- Enkelthendelser som studiegrupper, hackathons, og konferanser

**Alle freeCodeCamp Moderatorer er fellesskapsrike moderatorer. Det betyr at vi stoler på deg for å overvåke noen av disse stedene.**

Dette sa du kan tjene som en moderator i hvilken plass som er av størst interesse for deg. Noen moderatorer bare hjelper på GitHub. Andre bare hjelper ut på forumet. Noen moderatorer er aktive overalt.

Den nederste linjen er at vi vil at du skal nyte å være en moderator, og investere den knappe tiden på steder som er av interesse for deg.

> [!NOTE] "Med stor makt kommer et stort ansvar." - Onkel Ben

Som moderator er temperament viktigere enn teknisk kompetanse.

Hørt. Vær Hjelpet. Ikke misbruk din makt.

freeCodeCamp er et inkluderende samfunn, og vi må beholde det på den måten.

Vi har én kode for å styre hele samfunnet vårt. Jo færre regelene, jo lettere skal de huske. Du kan lese disse reglene og forplikte dem til minne [her](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderatorer har mulighet til å lukke problemer og godta eller lukke pull-forespørsler.

Moderatorer har to primære oppgaver vedrørende GitHub:

1. QA'ing og sammenslåing av trekkforespørsler
2. Evaluere og svare på temaer

## Modererende trekkforespørsler

Trekk forespørsler er hvordan bidragsytere sender inn endringer i freeCodeCamp's kodelager. Det er viktig at vi utfører kvalitetssikring (QA) på trekkforespørsler før vi bestemmer om vi skal slå dem sammen eller lukke dem.

### Rulletyper trekkforespørsler

1. **Challenge Instruction Edits** These are changes to the text of challenges - the Description, Instructions, or Test Text. Du kan også gjennomgå disse rettighetene til GitHub og bestemme om du skal slå dem sammen. Vi må være litt mer forsiktige om disse, fordi millioner av mennesker vil møte denne teksten når de jobber gjennom læreplanverket freeCodeCamp . Gjør trekkforespørsel teksten tydeligere uten å gjøre den mye lenger? Er redigeringene relevante og ikke for fotgjengere? Husk at vårt mål er at utfordringene skal være så tydelig som mulig. De er ikke stedet for ting detaljer. Dessuten kan bidragsytere prøve å legge til lenker til ressurser til utfordringene. Du kan lukke disse trekkforespørslene og svare dem med dette:

   > Takk for din pull-forespørsel.
   > 
   > Jeg lukker denne pull forespørselen. Legg til linker og andre detaljer i dette nettstedet til utfordringscachen i stedet.
   > 
   > Hvis jeg tror jeg er feil med å avslutte dette problemet, kan jeg åpne det på nytt og gjøre avklaringer. Takk skal du og glad koding.

2. **Challenge Code Edits** Dette er endringer i koden i en utfordring - Utfordringsfrø, utfordringsløsning og teststrenger. Disse trekk-forespørslene må trekkes ned fra GitHub og testes på din lokale datamaskin for å sikre at oppgavetestene fortsatt kan bestås med gjeldende løsning, og den nye koden introduserer ikke noen feil. Noen bidragsytere kan prøve å legge til ytterligere prøvinger for å dekke pedantiske hjørnetilfeller. Vi må være forsiktige med å ikke gjøre utfordringen for komplisert. Utfordringene med testene bør være så enkle og intuitive som mulig. I tillegg til algoritmeutfordringene og intervju-prep bør en lærer kunne løse hver utfordring innen omtrent 2 minutter.

3. **Codebase Changes** Disse kodene endrer funksjonaliteten til selve freeCodeCamp plattformen. Noen ganger prøver bidragsytere å gjøre endringer uten særlig forklaring, men for å gjøre endringer i koden må vi sørge for at det er et reelt behov for endringen. So these pull requests should reference an existing GitHub issue where the reasons for the change are discused. Deretter kan du åpne trekkforespørselen på datamaskinen din og teste dem lokalt. Hvis endringene ser bra ut, må du ikke slå dem sammen helt ennå. Du kan kommentere på pull forespørselen at "LGTM" og deretter nevne @raisedadead slik at han kan ta en endelig utseende.

### Hvordan slå sammen eller lukke trekkforespørsler

Først av alt, når du velger en pull-forespørsel til QA, må du tildele deg selv til den. Du kan gjøre dette ved å klikke på "Tildel deg selv" linken under "oppdragstakere"-delen i høyre kolonne av GitHubs grensesnitt.

Avhengig av typen trekkforespørsel er, følger de tilsvarende reglene oppført ovenfor.

Før du går sammen om trekkforespørsel, må du sørge for at GitHub har grønne sjekkmerker for alt. Hvis det er noen X's, se nærmere på de først og finne ut hvordan de skal bli til grønne sjekkmerker først.

Noen ganger blir det en fusjonert konflikt. Dette betyr at en annen pull-forespørsel har gjort en endring til den eksakte samme delen av den samme filen. GitHub har et verktøy for å adressere disse fusjonene akkurat på GitHub. Du kan forsøke å adressere disse konfliktene. Bruk ditt beste skjønn. Trekk forespørselens endringer på toppen, og forslagene til hovedgrenene står på bunn. Noen ganger blir det overflødig informasjon i det som kan slettes. Før du er ferdig, må du virkelig slette `<<<<<<`, `======`, og `>>>>>>` at Git tilføyer å indikere områder med konflikt.

Hvis pull forespørselen ser klar til å slå seg sammen (og ikke krever godkjenning fra @raisedadead), kan du gå videre og slå den sammen. Sørg for å bruke standard funksjonalitet "Squash and Merge" på GitHub. Dette vil knuse alle pull-forespørsler som starter i en enkelt kommando, noe som gjør at Git historikken er mye enklere å lese.

Da bør du kommentere spørsmålet om trekkforespørselen, takke bidragsyteren på din personlige måte.

Hvis forfatteren av pull-forespørselen er en "første gangs bidragsyter" må du også gratulere dem med den første sammenslåtte pull-forespørselen til arkivet. Du kan se på øvre høyre hjørne av PRs kropp for å bestemme førstegangs bidragsyter.  Det vil vise `Først-time bidragsyter` som vist nedenfor:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCampations) 690x281](https://i.imgur.com/dTQMjGM.png)

Hvis trekket ikke ser klar ut til å slå seg sammen kan du høflig svare på forfatteren hva de skal gjøre for å gjøre det klart. Forhåpentligvis vil de svare og få en pull-forespørsel nærmere klar.

Ofte blir det tydelig lav innsats. Du kan ofte fortelle dette umiddelbart når bidragsyteren ikke plager å krysse av i avmerkingsboksene i trekkforespørselmalen, eller brukte en tittel for generisk hente forespørsel, som "made changes" eller "Update index. d".

Det er også situasjoner hvor bidragsyteren prøver å legge til en lenke til sin egen nettside, eller inkluder et bibliotek de selv er opprettet, eller har en fritak for redigering som ikke tjener for å hjelpe noen, men selv.

I begge disse situasjonene skal du gå videre og lukke deres trekkforespørsel og svare med denne standardmeldingen:

> Takk for at du åpnet denne pull forespørselen.
> 
> Dette er en standard melding som varsler deg at vi har gjennomgått din trekkforespørsel og bestemt at du ikke skal slå sammen den. Vi ønsker velkommen kommende pull forespørsler fra deg.
> 
> Takk og lykkelig koding.

Hvis du trenger en ny uttalelse om en trekkforespørsel, gå videre og legg igjen kommentarer på trekkforespørselen, legg deretter "diskuter"-etiketten til trekkforespørselen.

## Modererer GitHub-problemer

freeCodeCamp er et aktivt åpen kildekode-prosjekt. Vi får nye problemer hver dag, som alle må reise og merkes.

### Typer av GitHub saker

1. **Code Help Requests**, which people have mistenly created GitHub issues for. Hvis noen ber om hjelp, lim inn følgende melding, så lukk problemet.

   > Takk for at du rapporterer problemet.
   > 
   > Dette er en standard melding med beskjed om at dette problemet ser ut til å være en forespørsel om hjelp. I stedet for å spørre om hjelp her, klikk på \*\*"Hjelp"\* knappen på utfordringen på freeCodeCamp, som vil hjelpe deg med å opprette et spørsmål i den riktige delen av forumet. Frivillige på forumet svarer vanligvis på spørsmål innen få timer og kan bidra til å avgjøre om det er et problem med koden din, eller testene til utfordringen.
   > 
   > Hvis forummedlemmene bestemmer at det ikke er noe galt med koden din, kan du be om at dette problemet blir gjenåpnet. 
   > 
   > Takk og lykkelig koding.

2. **Feilrettingsproblemer eller avklaringsproblemer** Prøv å reprodusere feilen selv hvis du kan. Hvis ikke, be dem om å reprodusere feilen og om de har noen skjermbilder, videoer eller ytterligere detaljer som kan hjelpe deg å reprodusere problemet. Når du kan reprodusere problemet - eller i det minste bekrefte det er et legit problem - etikett det `bekreftet`. Deretter:

- Hvis det er en enkel endring til en eksisterende utfordring, etikett som `første nedtellinger bare`, ellers `vil hjelpet`. Bruk andre etiketter etter behov.
- Hvis problemet er mer signifikant, flagg som `bug`. &nbsp; Hvis det er tvetydighet med hensyn til hva som er riktig måte å handle på et problem, føler deg fri til å merke @raisedadead på problemet får sin mening på det, og legg deretter til `Diskutere` merket.

3. **Dupliser saker** Hvis en sak er det samme som en annen rapportert sak, skal det tidligere rapporterte problemet forrang. Markering som `dupliser`, lim inn følgende melding erstatter `#XXXXX` med problemnummeret, og lukk deretter feilen.

   > Takk for at du rapporterer problemet.
   > 
   > Dette er en standard melding som varsler deg at dette problemet ser ut til å være svært likt problemstillingen #XXXXX, så jeg lukker den som et duplikat.
   > 
   > Hvis jeg tror jeg er feil med å avslutte dette problemet, kan jeg åpne det på nytt og gjøre avklaringer. Takk og lykkelig koding.

4. **Fikset i testmiljøet** Noen problemer kan allerede ha blitt fikset i testsonen, men har ikke et GitHub problem tilknyttet dem. Hvis dette er tilfelle, kan du lime inn følgende melding, lukke problemet og legge til en `status: løst/frakt` etikett:

   > Takk for at du rapporterer problemet.
   > 
   > Dette er en standard melding med informasjon om at problemet du nevnte her viser i produksjon, men at den allerede har blitt faset i testingen. Det betyr at neste gang vi presser ned vår egen gren til produksjon, så skal problemet fikses. Jeg stenger saken på grunn av dette.
   > 
   > Hvis jeg tror jeg er feil med å avslutte dette problemet, kan jeg åpne det på nytt og gjøre avklaringer. Takk og lykkelig koding.

### Lukker Stilling, Utdatert, Inaktive problemer og Forespørsler om trekk

- Stale Issues eller PRs er de som ikke har sett noen aktivitet fra OP i 21 dager (3 uker fra den siste aktiviteten), men bare etter at en moderator har bedt om mer informasjon/endringer.  Disse kan lukkes i et automatisk skriptet eller av moderatorene selv.

- Aktivitet defineres som: Kommentarer som ber om en oppdatering av PR og prøveversjoner som `status: oppdatere nødvendige` etikett osv.

- Hvis Operatøren ber om tilleggsassistanse eller til og med tid, kan dette lempes på og revideres etter at det er gitt et svar. Moddene bør uansett bruke sin beste skjønn for å løse status på den uavklarte PR.

### Andre retningslinjer for moderatorer på GitHub

Selv om du vil ha skrivetilgang til freeCodeCamp's repository, **bør du aldri trykke kode direkte til freeCodeCamp kodelagre**. All kode skal legges inn i freeCodeCamp's codebase i form av en pull-forespørsel fra en forgrening av arkivet.

Du bør heller aldri akseptere dine egne PR'er. De må være 'Q' av en annen moderator, akkurat som med en annen PR.

Hvis du merker noen som knuser [koden med oppførsel](https://code-of-conduct.freecodecamp.org) på GitHub problemer, eller åpne trekkforespørsler med skadelig innhold eller kode, epost dev@freecodecamp. rg med en lenke til den pågående trekkforespørselen, og vi kan vurdere å utestenge dem fra freeCodeCamp's GitHub organisasjon helt.

# Modererer forumet

Som en moderator hjelper du samfunnet vårt til å holde orden på noen som helst for å lære og få hjelp. Du vil håndtere flaggede innlegg og håndtere spam, av-emne, og andre upassende samtaler.

Vær oppmerksom på at når du er en moderator på forumet, vil du begynne å se blå moderator hint om forummedlemmer, "Som dette er første gang [person] har postet - la oss ønske dem velkommen til samfunnet! eller "[person] har ikke postet på lang tid - la oss ønske dem velkommen tilbake.»

![En blå tekstmelding som sier "dette er første gang [person] har postet - la oss ønske dem velkommen til samfunnet!](https://i.imgur.com/mPmVgzK.png)

Dette er muligheter for at du skal ønske dem velkommen og få dem til å føle seg ekstra spesielle. Du vet aldri hvilken person som er marginalt involvert som blir vår neste superhjelper, og som hjelper mange andre til å hjelpe seg på sin kodereise. Også den minste godheten kan utløse gode gjerninger.

### Sletter foruminnlegg

Forum moderatorer har mulighet til å slette brukerens innlegg. Du bør kun gjøre dette i følgende tilfeller:

1. Noen har postet et pornografisk eller grafisk voldelig bilde.
2. Noen har postet en link eller kode som er ondsinnet i naturen og kan skade andre kamre som klikker på den.
3. Noen har oversvømt en tråd med masse spam meldinger.

### Forhandler med spam

For første søppelpost, send dem en melding som forklarer problemet, og fjern linken eller innlegget hvis det er aktuelt. Legg igjen et notat på brukerens profil som forklarer handlingen du har tatt. Hvis problemet vedvarer, følg prosessen ovenfor. Enkelt blokker brukeren fra å poste inn (ved å bruke silence-valget på brukerens Admin-panel), og send deretter en advarsel med Code of Conduct. Kryss av i boksen i privat melding som viser at meldingen er en "formell advarsel".

Du kan stille spørsmål og rapportere hendelser i [personalets del](https://forum.freecodecamp.com/c/staff).

### Håndtering av samtaler i off-topic

Innlegg eller emner som er på feil sted, kan kategoriseres eller omdøpes til noe som er egnet.

I spesielle tilfeller kan det være hensiktsmessig at en moderator forvandler en diskusjon inn i flere tråder.

Hvis du har problemer eller spørsmål, kan du også opprette et innlegg med handlingene dine i personalkategorien, og merk en annen moderator hvis du vil at de skal gjennomgå de modererende handlingene.

### Mindreårig bruker

Våre vilkår krever at freeCodeCamp brukere er minst 13 år gamle. I tilfelle en bruker avslører at de er under 13 år send dem denne meldingen og slett deres forum konto (hvis sletting ikke er tilgjengelig, er det tilstrekkelig å utsette kontoen permanent). Så epost [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) eller [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) for å slette også brukerens freeCodeCamp-konto.

```markdown
UNDER: Brukere under 13 har ikke lov til å bruke forumet per tjenestevilkår

Det har gjort oss oppmerksomme på at du er under 13 år. Per [freeCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), du må være minst 13 år til å bruke nettstedet eller forumet. Vi vil slette både din freeCodeCamp konto og din forumkonto. Denne begrensningen holder oss i samsvar med amerikanske lover.

Bli med på nytt når du har nådd minst 13 år.

Takk for forståelsen.
```

# Modererer Facebook

Hvis du ser noe som ser ut til å bryte vår [Code of Conduct](https://code-of-conduct.freecodecamp.org/), bør du slette den umiddelbart.

Noen ganger kommer folk til å poste ting som de tror er morsomme. De innser ikke at det de sa og hva de delte kan tolkes som offensiv. I disse sakene må posten slettes, men personen som postet den trenger ikke nødvendigvis å bli utestengt. Ved å få byttet ut vil de forhåpentligvis komme til å forstå at det de postet var upassende.

Men hvis det er en egens skyld som med rimelighet ikke kan tilskrives en kulturell forskjell eller misforståelser av det engelske språket, deretter bør du vurdere å blokkere medlemmet fra Facebook-gruppen.

# Modererer Discord

Her er hvordan moderatorer håndterer brudd på vår [Code of Conduct](https://code-of-conduct.freecodecamp.org/) på Discord:

1. **Sørg for at den var ment å bryte koden i dirigen.** Ikke alle brudd på CoC var ment som sådan. Et nytt kamper kan legge inn en stor mengde kode for hjelp, ikke kjent med at dette kan anses som spamming. I disse tilfellene kan du bare be dem om å lime inn koden med tjenester som Codepen eller Pastebin.

2. **Hvis kamper klart bryter koden i dirigen, fortsetter moderatoren som følger:**

- Suspender de skyldige kamper, men advarer ikke eller truer dem. I stedet kan du gi dem Suspend rollen på Discord, og så sende dem følgende melding:

```
Dette er en standard melding som varsler deg at jeg måtte midlertidig suspendere deg fra å snakke med freeCodeCamp Discord-serveren.

Jeg er en moderator som opptrer på vegne av samfunnet vårt. Jeg tenker på å fjerne suspensjonen din, men jeg trenger å ta de følgende 3 trinnene først:

1. Les vår Code of Conduct: https://code-of-conduct.freecodecamp.org/
2. Send tilbake en beskjed som bekrefter at du er ferdig med å lese den.
3. Forklar meg hvorfor du tror jeg har suspendert deg, og hvorfor skal jeg fjerne suspensjonen.
```

- Rapporter en kort oppsummering av hendelsen og hvordan de svarte på den i #admin kanalen. Her er et eksempel på hvordan en slik oppsummering kan se ut:

```
Suspendert: _@username_
Reason(s): _Spamming, trolling_
Evidence: _One eller flere lenker til den lovende melding(ene)_
CoC: _Sent_
```

- En rapport for å fjerne en suspensjon skal se ut:

```
Jeg har fjernet suspensjonen fra ` @username `. Jeg sendte dem Code of Conduct. De ble nettopp i dag innsett at de ble suspendert og beklaget på det de gjorde.
```

- Basert på lovgiverens svar vil moderatoren bestemme om den skal fjerne suspensjonen fra den forvendte kamperen. Hvis de virker respektfull og beklager, kan moderatoren fjerne suspensjonen. Når det gjelder politikk, vil moderatorer være høflige i denne prosessen, uansett hvor dårlig den falske utholdenheten kom. Hvis de ikke er respektfulle eller ikke villige til å godta CoC, bør suspensjonen følges med et forbud fra Discord-serveren. Bruk samme sammendrag som ovenfor, men erstatt "Suspendert:" med "Bannet:".

3. **Hvordan utestengelse og/eller oppheve utestengelsen**

- For å utestenge en person, høyreklikk på brukernavn/profilbilde og velg "Utesteng <username>". Du vil få muligheten til å slette de forrige meldingene deres - velg "Ikke slett noen", som meldingene bør fortsatt være til stede som en historisk post.
- Hvis du bestemmer deg for å forby noen, så betyr det at de er villige til å overholde våre etiske retningslinjer. Derfor bør det sjelden forekomme unbanning av en CamPal. Hvis likevel behovet oppstår, kan du gjøre det ved å klikke på servernavnet, velge "Server Innstillinger", velger du "Forbannelse", velger du brukeren du ønsker å utestenge, og du kan klikke "Revoke Ban".

Discord Bans er global - du kan ikke utestenge en bruker fra en bestemt kanal, kun fra hele serveren.

4. **Sletting av meldinger** Moderatorer har muligheten til å slette meldinger på Discord. De skal bare utøve denne evnen i fire svært spesifikke situasjoner:

- Noen har postet et pornografisk eller grafisk voldelig bilde.
- Noen har postet en link eller kode som er ondsinnet i naturen og kan skade andre kamre som klikker på den.
- Noen har oversvømt chatten med mange spam-meldinger i så stor grad (vanligvis med bots) for å gjengi chat helt ubrukelig.
- Noen har postet annonse og / eller selvfremmende melding / bilde (sosiale medier).

I alle andre situasjoner - også situasjoner der koden bryter - Moderatorer bør ikke slette meldingen ettersom disse er en viktig historisk journal. Når du sletter en melding, må du sørge for at du tar et skjermbilde av den først! Skjermbildet kan være logget på #mod-log kanalen, men for #aktivitetsloggen er det tilstrekkelig å si at beviset "ble fjernet på grunn av sensitivt innhold". Merk: Hvis meldingen inneholder materiale som ville være ulovlig å ta skjermbilde av, kopier meldingslenken i stedet - oppgi denne meldingslenken til @raisedadead for å videresende til Discord's Trust and Safety team.

5. **Bruk ikke @everyone eller @here** Bruk ikke @everyone eller @here under noen omstendigheter! Hver enkelt person som snakker rommet vil få et varsel. I enkelte tilfeller er det titusener av mennesker. Hvis du vil at folk skal se en kunngjøring, kan du i stedet feste den til kanalen slik at alle kan lese den.

6. **Ikke true til å utestenge eller suspendere** Hvis en kamper bryter adgangskoden, ikke true å forby eller suspendere dem, og aldri advare dem offentlig i det hele tatt. I stedet kan du snakke med dem privat, eller sende dem en suspensjon (per protokollen ovenfor). Ingen andre i denne kanalen må vite at du bannlyste / suspendert personen - kameraene kan se sammendraget i kanalen #aktivitetslogg hvis de vil holde følge med informasjonen deres. Hvis et brudd klart var utilsiktet, og ikke berettiget en suspensjon eller privat samtale, uten at det går som en advarsel at lovbruddet blir gjort kjent med sine handlinger. For eksempel:

- Kampanjeinnlegg en kodevegg som ber om hjelp

  Moderator: @brukernavn Vennligst bruk Codepen eller Pastebin ved lagring av store mengder kode.

- Eller hvis du virkelig må forklare hvorfor:

  Moderator: @brukernavn Vennligst bruk Codepen eller Pastebin ved lagring av store mengder kode, fordi det forstyrrer chatten for alle og kan anses å ha spamming i henhold til våre etiske retningslinjer.

- Ved milde og utilsiktede brudd på atferdsreglene

  Moderator: Dette er en vennlig påminnelse om at alle skal følge atferdskoden: https://code-of-conduct.freecodecamp.org/

7. **Ikke modig over å være en moderator** Ikke se deg selv som over samfunnet. Du er samfunnet. Og fellesskapet har stolt på deg for å hjelpe til med å beskytte noe sjeldent som vi alle deler - en _velkomst_ plass for nye utviklere. Hvis du modige om å være moderator kan det hende at folk føler seg urolig rundt deg, på samme måte som folk kjenner seg uenkle rundt politiet, selv om de ikke gjør noe feil. Dette er bare menneskelig natur.

8. **Ikke motsi andre moderatorer** Hvis du er uenig i handlingen til en moderator, snakke med dem i privat samtale eller ta det opp i #mod-chat kanalen. Aldri overstyr en utestengelse, og aldri motsier de andre moderatoren(e) offentlig I stedet må det diskuteres kjølig i mod-chat og overbevise moderatoren om at de selv burde omgjøre utestengelsen eller endre synspunkt. Husk: Vi er alle på samme lag. Vi ønsker å verne om rollen til moderatorer og vise en enhetlig front.

9. **Snakk med andre moderatorer** Vi har bare et rom for moderatorer. Bruk det! Spør andre moderatorer om hjelp dersom du føler deg ukomfortabel med hvordan du skal håndtere en bestemt situasjon. Hvis du tror noe skal diskuteres, gjør det. Du er en del av teamet og vi setter pris på inngangen til alle teammedlemmene! Selv om du er fullstendig uenig i noe i disse retningslinjene eller i Code of Conduct!

10. **Midlertidig inaktiv** Hvis du ikke vil være aktiv som en moderator i en stund på grunn av ferie, Sykdom eller annen grunn, sørg for å la de andre få vite i #mod-chat kanalen. Dette er slik at vi vet om vi kan telle på deg for å være regelmessig aktiv på serveren eller ikke.

# Slik blir du moderator

If you are helping people in the community consistently over time, our Moderator Team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). Det er ingen snarveier til å bli moderator.

Hvis du er godkjent, vil vi legge deg til i Moderatorteamet våre på [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **For GitHub:** Etter at du har blitt akseptert som en moderator, vil du motta en Github repository invitasjon. Du må gå over til [freeCodeCamp GitHub organisasjons invitasjon](https://github.com/orgs/freeCodeCamp/invitation) for å kunne akseptere invitasjonen. Dette kreves for at vi skal kunne gi deg skrivetilgang i noen av våre kodelagre.

# Hvordan vil vi pensjonere inaktive moderatorer

Vær oppmerksom på at vi ofte vil fjerne modifikasjoner som vi tror er inaktive. Når vi gjør dette, sender vi følgende melding:

> Dette er en standard melding som varsler deg om Siden du nylig ikke har vært en aktiv moderator, fjerner vi deg fra moderatorteamet. Vi setter stor pris på din hjelp i fortiden.

> Hvis du tror vi har gjort dette feil, eller så er du klar til å komme tilbake og bidra mer, bare svar på denne meldingen gir meg beskjed.

# Slik fungerer bidragsrommet vårt

Alle er velkommen i [Bidragsytere rom på vår Discord](https://discord.gg/KVUmVXA). Det er det angitte chatterommet for moderatorer og andre kamperer som på en hvilken som helst rekke bidra til samfunnet vår, inkludert gjennom studiegrupper.

Vår antagelse er at bidragsytere vil lese alt i dette rommet som direkte nevner dem med `@username`. Alt annet er valgfritt. Men du kan også lese alt du poster der og interakt.

# Håndtering av operatører

Du kan opptre av organisasjoner som vil medvirke eller være sammen med freeCodeCamp på en eller annen måte. Når du innser at det er det de er etter, må du slutte å snakke med dem og be dem om å sende en e-post til quincy@freecodecamp.org. Han får med seg forslag som hele tiden og har best forutsetninger for å vurdere om et slikt forhold vil være verdt det for samfunnet vårt (og det sjelden der).

# Håndtering av (mentale) helsehenvendelser

Dere kan komme på tvers av situasjoner der brukerne søker medisinsk rådgivning eller arbeider med psykiske plager og søker støtte. I politikkens saker skal du ikke snakke privat om disse forholdene. Skulle situasjonen på et tidspunkt reflektere tilbake til fCC, vil vi ha samtalen(e) i posten. Gjør det klart at vi ikke er medisinske fagfolk og at du oppfordrer brukeren til å finne profesjonell hjelp. Så vanskelig som det noen ganger kan være, unngå å gi andre tips eller råd enn å peke brukeren i retning av profesjonell hjelp!

Hvis dette skjer på Discord: Stopp brukeren. Dette er ikke for å straffe dem! Mistenke en bruker vil opprette en privat kanal som bare er tilgjengelig av brukeren og teamet. Det vil være gunstig for både bruker og fCC på flere måter:

- Brukeren er garantert personvern
- Offentlig chat er ikke lenger forstyrret
- Andre gruppemedlemmer kan delta i, hvis du er ubehagelig hvis du tar deg selv

> Å vente en bruker gir dem automatisk en melding om å lese vår etiske etiske veiledning. Pass på at du informerer brukeren om at du Suspenderte dem for å gi dem noe privatliv og at de ikke er straffet. Dette er veldig viktig! Vi ønsker helt enkelt å unngå å gi brukerne ideen om at de blir straffet for å nå ut til hjelp!

Hvis du tror at brukeren er i stand til å rebli med i samfunnet, høyreklikk på privat kanal og kopier IDen. Legg til følgende melding i #mod-log:

> Referansemedisinsk rådgivning: <channel ID> <username>

Etter dette kan du fjerne Suspensjonen fra brukeren slik du vanligvis gjør.

Nyttige nettadresser:

http://www.suicide.org/international-suicide-hotlines.html

# Notat om fri tale

Noen ganger kommer folk til å forsvare en offensiv eller incendiary som de sa som "gratis taler".

Denne XKCD tegneserien oppsummerer de fleste samfunnenes tanker om ytringsfrihet. Så hvis noen forsvarer noe de sier at "gratis tale" føler seg fri til dem.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Takk for at du leste dette, og takk for at du hjelper utviklersamfunnet!

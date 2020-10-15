# Den officiella freeCodeCamp moderator handboken.

Detta kommer att hjälpa dig att moderera olika platser i vår gemenskap, inklusive:

- GitHub problem & pull-förfrågningar
- Forum, chattrum, Facebook-grupper och andra mötesplatser online
- In-person händelser som studiegrupper, hackathons och konferenser

**Alla freeCodeCamp Moderatorer är moderatorer för hela samhället. Det betyder att vi litar på att ni övervakar någon av dessa platser.**

Detta sagt, du kan tjäna som moderator på vilka platser som är mest intressanta för dig. Vissa moderatorer hjälper bara till på GitHub. Andra hjälper bara till på forumet. Vissa moderatorer är aktiva överallt.

Summan av kardemumman är att vi vill att du ska njuta av att vara moderator, och investera din knappa tid på platser som är av intresse för dig.

> [!NOTE] "Med stor kraft kommer stort ansvar." - Farbror Ben

Som moderator är temperament viktigare än teknisk skicklighet.

Lyssna. Var hjälpsam. Missbruka inte din makt.

freeCodeCamp är ett allomfattande samhälle, och vi måste behålla det på det sättet.

Vi har en enda uppförandekod som styr hela vår gemenskap. Ju färre regler, desto lättare är det att komma ihåg. Du kan läsa dessa regler och engagera dem till minne [här](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderatorer har möjlighet att stänga frågor och acceptera eller stänga pull-förfrågningar.

Moderatorer har två huvudsakliga ansvar när det gäller GitHub:

1. QA'ing och sammanslagning av pull-förfrågningar
2. Utvärdera och svara på problem

## Modererar Pull-förfrågningar

Pull Requests (PRs) är hur bidragsgivare skickar in ändringar till freeCodeCamps repository. Det är viktigt att vi utför kvalitetssäkring (QA) på pull-förfrågningar innan vi bestämmer om vi ska slå ihop dem eller stänga dem.

### Typer av Pull förfrågningar

1. **Utmaningsinstruktioner Redigerar** Detta är ändringar i texten i utmaningar - Beskrivning, instruktioner eller Test Text. Du kan också granska dessa rätt på GitHub och besluta om att slå samman dem. Vi måste vara lite mer försiktiga med detta, eftersom miljontals människor kommer att stöta på denna text när de arbetar genom den fria CodeCamp-läroplanen. Gör pull-begäran texten tydligare utan att göra den mycket längre? Är redigeringarna relevanta och inte alltför pedantiska? Kom ihåg att vårt mål är att utmaningarna ska vara så tydliga och korta som möjligt. De är inte platsen för dunkla detaljer. Dessutom kan bidragsgivarna försöka lägga till länkar till resurser till utmaningarna. Du kan stänga dessa pull-förfrågningar och svara på dem med detta:

   > Tack för din pull-förfrågan.
   > 
   > Jag avslutar denna pull-begäran. Lägg istället till länkar och andra detaljer till utmaningens motsvarande guideartikel.
   > 
   > Om du tror att jag har fel med att avsluta denna fråga, vänligen öppna den igen och lägg till ytterligare förtydliganden. Tack, och lycklig kodning.

2. **Utmaningskod Redigerar** Detta är ändringar i koden i en utmaning - Challenge Seed, Challenge Solution och Test Strings. Dessa pull-förfrågningar måste dras ner från GitHub och testas på din lokala dator för att se till att Challenge-testerna fortfarande kan passeras med den nuvarande lösningen, och den nya koden introducerar inga fel. Vissa bidragsgivare kan försöka lägga till ytterligare tester för att täcka pedantiska hörnärenden. Vi måste vara försiktiga så att inte utmaningen blir alltför komplicerad. Dessa utmaningar och deras tester bör vara så enkla och intuitiva som möjligt. Bortsett från algoritmen utmaningar och intervju prep avsnitt, bör eleverna kunna lösa varje utmaning inom ca 2 minuter.

3. **Codebase Ändringar** Dessa kodredigeringar ändrar funktionaliteten för plattformen freeCodeCamp själv. Ibland försöker bidragsgivarna göra ändringar utan mycket förklaring, men för kodändringar måste vi se till att det finns ett verkligt behov av förändringen. Så dessa pull-förfrågningar bör hänvisa till en befintlig GitHub-fråga där skälen till ändringen diskuteras. Då kan du öppna pull-förfrågan på din dator och testa dem lokalt. När du har gjort det, om ändringarna ser bra ut, slå inte ihop dem riktigt ännu. Du kan kommentera på pull-begäran som säger "LGTM", sedan nämna @raisedadead så att han kan ta en sista titt.

### Hur man slår ihop eller stänger pull-förfrågningar

Först av allt, när du väljer en pull-förfrågan till QA, bör du tilldela dig själv till den. Du kan göra detta genom att klicka på "tilldela dig själv" länken nedanför "tilldelade personer" delen i den högra kolumnen i GitHubs gränssnitt.

Beroende på vilken typ av pull-förfrågan det är, följ motsvarande regler som anges ovan.

Innan du slår samman någon pull-begäran, se till att GitHub har gröna checkmarks för allt. Om det finns några Xs, undersöka dem först och räkna ut hur man får dem förvandlas till gröna checkmarks först.

Ibland kommer det att finnas en Merge Conflict. Detta innebär att en annan pull-förfrågan har gjort en ändring av exakt samma del av samma fil. GitHub har ett verktyg för att hantera dessa sammanslagningskonflikter direkt på GitHub. Du kan försöka ta itu med dessa konflikter. Använd bara ditt bästa omdöme. Förhållandets ändringar kommer att vara på toppen, och Mästarens ändringar kommer att vara på botten. Ibland kommer det att finnas överflödig information där som kan raderas. Innan du slutar, se till att ta bort `<<<<<<`, `======`, och `>>>>>>` som Git lägger till för att indikera konfliktområden.

Om pull-förfrågan ser klar ut att slås samman (och inte kräver godkännande från @raisedadead) kan du gå vidare och slå samman den. Var noga med att använda standardfunktionen "Squash and Merge" på GitHub. Detta kommer att krossa alla pull-förfrågningar ner i en enda commit, vilket gör Git-historiken mycket lättare att läsa.

Du bör sedan kommentera pull-begäran, tacka bidragsgivaren på ditt eget personliga sätt.

Om författaren till pull-förfrågan är en "första gången bidragsgivare" bör du också gratulera dem till deras första sammanslagna pull-förfrågan till förrådet. Du kan titta på övre högra hörnet av PR: s kropp för att bestämma en första gången bidragsgivare.  Det kommer att visa `Första gången bidragsgivare` som visas nedan:

![Kopier_ändringar_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp<unk> 690x281](https://i.imgur.com/dTQMjGM.png)

Om pull-förfrågan inte ser redo att slås samman kan du artigt svara på vad författaren ska göra för att göra den redo. Förhoppningsvis kommer de att svara och få sin pull-förfrågan närmare redo.

Ofta kommer en pull-förfrågan att bli uppenbart låg ansträngning. Du kan ofta berätta detta omedelbart när bidragsgivaren inte brydde sig om att markera kryssrutorna i Pull Request mallen, eller använd en generisk dragförfrågan titel som "gjorda ändringar" eller "Uppdatera index. d".

Det finns också situationer där bidragsgivaren försöker lägga till en länk till sin egen webbplats, eller inkludera ett bibliotek de själva skapat, eller har en lättsinnig redigering som inte hjälper någon annan än sig själv.

I båda dessa situationer bör du gå vidare och stänga deras pull-förfrågan och svara med detta standardmeddelande:

> Tack för att du öppnade denna pull-förfrågan.
> 
> Detta är ett standardmeddelande som meddelar dig att vi har granskat din pull-förfrågan och har beslutat att inte slå ihop den. Vi skulle välkomna framtida önskemål från er.
> 
> Tack och glad kodning.

Om du behöver en andra åsikt om en pull-begäran, gå vidare och lämna dina kommentarer på pull-begäran, lägg sedan till etiketten "diskutera" till pull-begäran.

## Moderera GitHub-ärenden

freeCodeCamp är ett aktivt projekt med öppen källkod. Vi får nya frågor varje dag, som alla måste prövas och märkas.

### Typer av GitHub-problem

1. **Code Help Requests**, som människor felaktigt har skapat GitHub problem för. Om någon ber om hjälp, klistra in följande meddelande, stäng sedan problemet.

   > Tack för att du rapporterar denna fråga.
   > 
   > Detta är ett standardmeddelande som meddelar dig att denna fråga verkar vara en begäran om hjälp. Istället för att be om hjälp här, klicka på \*\*"Hjälp"\*\* knappen på utmaningen på freeCodeCamp, vilket hjälper dig att skapa en fråga i rätt del av forumet. Volontärer på forumet svarar oftast på frågor inom några timmar och kan hjälpa till att avgöra om det finns ett problem med din kod eller utmaningens tester.
   > 
   > Om forumets medlemmar bestämmer att det inte är något fel med din kod, kan du begära att detta problem öppnas igen. 
   > 
   > Tack och glad kodning.

2. **Fel- eller klargörande problem** Försök att själv reproducera felet om du kan. Om inte, be dem om stegen för att reproducera buggen, och om de har några skärmdumpar, videor, eller ytterligare detaljer som kan hjälpa dig att återskapa problemet. När du kan reproducera problemet - eller åtminstone bekräfta att det är ett legit problem - märka det `bekräftat`. sedan:

- Om det är en enkel förändring till en befintlig utmaning, etikett som `endast första timers`, annars etikett som `hjälp ville`. Använd andra etiketter efter behov.
- Om problemet är mer signifikant, flagga som `bugg`. &nbsp; Om det finns någon tvetydighet när det gäller den rätta åtgärden i en fråga, känn dig fri att tagga @raisedadead i frågan få sin åsikt om det, lägg sedan till `Diskutera` etiketten.

3. **Duplicera problem** Om ett problem är detsamma som ett annat rapporterat problem, bör det tidigare rapporterade problemet ha företräde. Flagga som `Duplicera`, klistra in följande meddelande som ersätter `#XXXXX` med ärendenumret, och stäng sedan ärendet.

   > Tack för att du rapporterar denna fråga.
   > 
   > Detta är ett standardmeddelande som meddelar dig att detta problem verkar vara mycket likt problemet #XXXXX, så jag avslutar det som en dubblett.
   > 
   > Om du tror att jag har fel med att avsluta denna fråga, vänligen öppna den igen och lägg till ytterligare förtydliganden. Tack och glad kodning.

4. **Fast i mellanlagring** Vissa problem har kanske redan rättats i mellanlagring, men har inte ett GitHub-problem kopplat till dem. Om så är fallet, kan du klistra in följande meddelande, stänga problemet och lägga till en `status: löst/frakt` etikett:

   > Tack för att du rapporterar denna fråga.
   > 
   > Detta är ett standardmeddelande som meddelar dig att det problem som du nämnde här är närvarande i produktionen, men att det redan har fixats i mellanlager. Detta innebär att nästa gång vi driver vår iscensättning till produktionen, bör detta problem åtgärdas. På grund av detta avslutar jag den här frågan.
   > 
   > Om du tror att jag har fel med att avsluta denna fråga, vänligen öppna den igen och lägg till ytterligare förtydliganden. Tack och glad kodning.

### Stänger Stale, föråldrade, inaktiva problem och Pull förfrågningar

- Stala problem eller PRs är de som inte har sett någon aktivitet från OP i 21 dagar (3 veckor från den senaste aktiviteten), men bara efter att en moderator har begärt mer information/ändringar.  Dessa kan stängas i ett automatiserat/bot skript eller av moderatorerna själva.

- Aktivitet definieras som: Kommentarer som begär en uppdatering av PR och triage som `status: uppdatering behövs` etikett etc.

- Om OP ber om ytterligare hjälp eller tid, kan ovanstående vara avslappnad och återkomma efter ett svar ges. I vilket fall som helst bör moddarna använda sitt bästa för att lösa den utestående PR: s status.

### Andra riktlinjer för moderatorer på GitHub

Även om du har skrivrättigheter till freeCodeCamps utvecklingskatalog, **bör du aldrig trycka koden direkt till freeCodeCamps utvecklingskataloger**. All kod ska ange freeCodeCamps kodbas i form av en pull-förfrågan från en gaffel på förrådet.

Dessutom bör du aldrig acceptera dina egna PR. De måste vara QA'd av en annan moderator, precis som med alla andra PR.

Om du märker att någon bryter mot [uppförandekoden](https://code-of-conduct.freecodecamp.org) på GitHub problem, eller öppna pull-förfrågningar med skadligt innehåll eller kod, maila dev@freecodecamp. rg med en länk till den kränkande dra begäran och vi kan överväga att förbjuda dem från freeCodeCamps GitHub-organisation helt.

# Moderera forumet

Som moderator hjälper du till att hålla vår gemenskap en trevlig plats för alla att lära sig och få hjälp. Du kommer att hantera flaggade inlägg och hantera spam, off-topic, och andra olämpliga konversationer.

Observera att när du är moderator på forumet kommer du att börja se blå moderator tips om forummedlemmar, som "detta är första gången [person] har postat - låt oss välkomna dem till gemenskapen! eller "[person] har inte publicerat på länge - låt oss välkomna dem tillbaka."

![Ett blått textmeddelande som säger "detta är första gången [person] har publicerat - låt oss välkomna dem till gemenskapen!](https://i.imgur.com/mPmVgzK.png)

Detta är möjligheter för dig att välkomna dem och få dem att känna sig extra speciella. Du vet aldrig vilken person som är marginellt involverad kan bli vår nästa superhjälpare, hjälpa många andra människor på deras kodningsresa. Även den minsta vänlighet kan utlösa en kaskad av goda gärningar.

### Tar bort foruminlägg

Forummoderatorer har möjlighet att ta bort användarens inlägg. Du bör bara göra detta för följande instanser:

1. Någon har publicerat en pornografisk eller grafiskt våldsam bild.
2. Någon har skrivit en länk eller kod som är skadlig till sin natur, och kan skada andra campare som klickar på den.
3. Någon har översvämmat en tråd med massor av skräppostmeddelanden.

### Hanterar skräppost

För det första spam-inlägget av en användare, skicka dem ett meddelande som förklarar problemet, och ta bort länken eller posten som är lämplig. Lämna en anteckning på användarens profil som förklarar den åtgärd du har vidtagit. Om problemet kvarstår, följ sedan processen ovan. Blockera tyst användaren från att posta (med tystnadsalternativet på User Admin panel), skicka sedan en varning med Code of Conduct. Kryssa i rutan i det privata meddelandet som anger att ditt meddelande är en "formell varning".

Du kan ställa frågor och rapportera incidenter i avsnittet [personalforum](https://forum.freecodecamp.com/c/staff).

### Hanterar konversationer utanför ämnet

Inlägg eller ämnen som verkar vara på fel plats kan omkategoriseras eller döpas om till vad som skulle vara lämpligt.

Under exceptionella omständigheter kan det vara lämpligt för en moderator att forka en diskussion i flera trådar.

Återigen, om du har några problem eller frågor, gör ett inlägg med dina åtgärder i personalkategorin, tagga en annan moderator om du vill att de ska granska dina modereringsåtgärder.

### Minderåriga användare

Våra användarvillkor kräver att gratisCodeCamp-användare är minst 13 år. I händelse av att en användare avslöjar att de är under 13 år, skicka dem nedanstående meddelande och ta bort deras forumkonto (om borttagningen inte är tillgänglig, stänga av kontot är tillräcklig). Skicka sedan [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) eller [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) för att ta bort användarens freeCodeCamp-konto.

```markdown
SUBJECT: Användare under 13 år får inte använda forumet per användarvillkor

Det har kommit till vår kännedom att du är under 13 år. Per [freeCodeCamp användarvillkor](https://www.freecodecamp.org/news/terms-of-service), måste du vara minst 13 år gammal för att använda webbplatsen eller forumet. Vi kommer att ta bort både ditt freeCodeCamp-konto och ditt forumkonto. Denna begränsning håller oss i enlighet med Förenta staternas lagar.

Var snäll och återförenas när du har fyllt 13 år.

Tack för din förståelse.
```

# Modererar Facebook

Om du ser något som verkar bryta mot vår [uppförandekod](https://code-of-conduct.freecodecamp.org/), bör du ta bort det omedelbart.

Ibland kommer folk att lägga upp saker som de tycker är roliga. De inser inte att vad de sa eller vad de delade kan tolkas som offensivt. I dessa fall bör deras inlägg tas bort, men personen som postat det behöver inte nödvändigtvis förbjudas. Genom att få sin post raderad, kommer de förhoppningsvis att förstå att vad de postat var olämpligt.

Men om det är ett flagrant brott som inte rimligen kan tillskrivas en kulturell skillnad eller ett missförstånd av det engelska språket, då bör du starkt överväga att blockera medlemmen från Facebook-gruppen.

# Modererar Discord

Så här hanterar moderatorer kränkningar av vår [uppförandekod](https://code-of-conduct.freecodecamp.org/) på Discord:

1. **Se till att det var avsett att bryta mot uppförandekoden.** Inte alla brott mot CoC var avsedda som sådana. En ny husbil kan lägga upp en stor mängd kod för hjälp, omedveten om att detta kan betraktas som spamming. I dessa fall kan du bara be dem att klistra in sin kod med tjänster som Codepen eller Pastebin.

2. **Om husbilen tydligt bryter mot uppförandekoden kommer moderatorn att fortsätta enligt följande:**

- Stoppa stötande husbil, men varna inte eller hota dem. Istället, tyst ge dem den avbrutna rollen på Discord, sedan skicka dem följande meddelande:

```
Detta är ett standardmeddelande som meddelar er att jag var tvungen att tillfälligt avbryta er från att tala på freeCodeCamp Discord-servern.

Jag är en moderator som agerar på uppdrag av vår gemenskap med öppen källkod. Jag kan överväga att ta bort din avstängning, men jag behöver dig att ta följande 3 steg först:

1. Läs vår uppförandekod: https://code-of-conduct.freecodecamp.org/
2. Meddelande mig tillbaka som bekräftar att du har läst färdigt den.
3. Förklara för mig varför ni tror att jag avbröt er och varför jag skulle ta bort er avstängning.
```

- Rapportera en kort sammanfattning av händelsen och hur de svarade på den i #admin-kanalen. Här är ett exempel på hur en sådan sammanfattning kan se ut:

```
Suspended: _@username_
Anledning(ar): _Spamming, trolling_
Bevis: _En eller flera länkar till felande meddelandet_
CoC: _Skickat_
```

- En rapport för att ta bort en avstängning bör se ut:

```
Jag har tagit bort avstängningen från `@username `. Jag skickade dem uppförandekoden. De insåg just idag att de avbröts och bad om ursäkt för vad de gjorde.
```

- Baserat på de lagöverträdare svara, kommer moderatorn att besluta om att ta bort avstängningen från den kränkande camparen. Om de verkar respektfulla och apologetiska kan moderatorn ta bort suspensionen. Som en fråga om politik, moderatorer kommer att vara artiga under denna process, oavsett hur dåligt den kränkande camper har betett sig. Om de inte är respektfulla eller ovilliga att acceptera CoC, bör avstängningen följas med ett förbud från Discord-servern. Använd samma sammanfattning som ovan, men ersätt "Suspended:" med "Banned:".

3. **Hur man banar och/eller unban**

- För att förbjuda någon, högerklicka på deras användarnamn/profilbild och välj "Ban <username>". Du kommer att få möjlighet att ta bort sina tidigare meddelanden - välj "Ta inte bort någon", som budskapen bör förbli närvarande som ett historiskt rekord.
- Om du bestämmer dig för att förbjuda någon, betyder det att de är ovilliga att följa vår uppförandekod. Därför bör det sällan förekomma ett förbud mot en Camper. Men om behovet uppstår, kan du göra det genom att klicka på serverns namn och välja "Serverinställningar", välj "Bannlyser", välj den användare du vill avbanna, och klicka på "Återkalla Bannly".

Discord Bans är globala - du kan inte förbjuda en användare från en viss kanal, endast från hela servern.

4. **Ta bort meddelanden** Moderatorer har möjlighet att ta bort meddelanden på Discord. De bör endast utöva denna förmåga i fyra mycket specifika situationer:

- Någon har publicerat en pornografisk eller grafiskt våldsam bild.
- Någon har skrivit en länk eller kod som är skadlig till sin natur, och kan skada andra campare som klickar på den.
- Någon har översvämmat chatten med massor av skräppostmeddelanden i så stor utsträckning (vanligtvis involverar botar) som att göra chatten helt oanvändbar.
- Någon har publicerat annons och / eller ett självbefrämjande meddelande / bild (sociala medier).

I alla andra situationer - även situationer där uppförandekoden kränks - bör Moderatorer inte ta bort meddelandet eftersom detta är ett viktigt historiskt rekord. När du tar bort ett meddelande, se till att du tar en skärmdump av det först! Skärmdumpen kan loggas i #mod-log-kanalen, men för #aktivitetsloggen räcker det med att säga att beviset har tagits bort på grund av känsligt innehåll. Obs: Om meddelandet innehåller material som skulle vara olagligt att ta en skärmdump av, kopiera meddelandelänken istället - ge den där meddelandelänken till @raisedadead för att vidarebefordra till Discords Trust and Safety team.

5. **Använd inte @everyone eller @here** Använd inte @everyone eller @here under några omständigheter! Varenda person i det chattrummet kommer att få ett meddelande. I vissa fall tiotusentals människor. Istället, om du vill att folk ska se ett tillkännagivande, kan du fästa det på kanalen för att tillåta alla att läsa det.

6. **hotar inte att förbjuda eller stänga av** Om en husbil bryter mot uppförandekoden, Inte hotar att förbjuda eller avbryta dem, och aldrig varna dem offentligt. Istället prata med dem privat, eller skicka dem en DM och utfärda en avstängning (enligt ovan protokoll). Ingen annan i den kanalen behöver veta att du förbjöd / suspenderade personen - campare kan se sammanfattningen i #aktivitetslogg kanal om de vill hänga med på den informationen. Om en överträdelse var uppenbart oavsiktlig och inte motiverar en avstängning eller privat konversation, göra den kränkande camper medveten om hans / hennes åtgärder utan att göra det kommer över som en varning. Till exempel:

- Camper lägger upp en vägg av kod för att begära hjälp

  Moderator: @användarnamn Använd Codepen eller Pastebin när du lägger upp stora mängder kod.

- Eller om du verkligen måste förklara varför:

  Moderator: @användarnamn Använd Codepen eller Pastebin när du lägger upp stora mängder kod, eftersom det stör chatten för alla och kan betraktas som spamming enligt vår uppförandekod.

- För lindriga och oavsiktliga brott mot uppförandekoden

  Moderator: Detta är en vänlig påminnelse för alla att följa uppförandekoden: https://code-of-conduct.freecodecamp.org/

7. **Skryta inte om att vara moderator** Ser inte dig själv som ovan gemenskapen. Du är gemenskapen. Och gemenskapen har litat på dig att hjälpa till att skydda något ovanligt som vi alla delar - en _välkomnande_ plats för nya utvecklare. Om du skryter med att vara moderator kan folk känna sig oroliga omkring dig, På samma sätt som människor kan känna sig illa till mods kring en polis, även om de inte gör något fel. Detta är bara den mänskliga naturen.

8. **Motsäger inte andra moderatorer** Om du inte håller med en moderator prata med dem privat eller ta upp det i #mod-chat-kanalen. Aldrig åsidosätta ett förbud, och aldrig motsäga de andra moderatorerna offentligt. I stället för att föra en häftig diskussion i mod-chat och övertyga moderatorn om att de själva bör vända sitt förbud eller ändra sin åsikt. Kom ihåg: vi är alla i samma lag. Vi vill värna om moderatorernas roll och presentera en enhetlig front.

9. **Prata med andra moderatorer** Vi har endast ett rum för moderatorer. Använd det! Om du känner dig obekväm med hur du hanterar en viss situation, fråga andra moderatorer om hjälp. Om du tycker att något ska diskuteras, gör det. Du är en del av teamet och vi värdesätter input från varje teammedlem! Även om du är helt oense med något i dessa riktlinjer eller uppförandekodexen!

10. **Tillfälligt inaktiva** Om du inte kommer att vara aktiv som moderator på grund av semester, sjukdom eller någon annan anledning, se till att låta de andra veta i #mod-chat-kanalen. Detta är så vi vet om vi kan räkna med att du regelbundet är aktiv i servern eller inte.

# Hur man blir en moderator

Om du hjälper människor i communityn konsekvent över tid, kommer vårt Moderator-team så småningom att ta notis om och en av dem kommer att nämna dig som en möjlig moderator till [vår personal](https://forum.freecodecamp.org/g/Team). Det finns inga genvägar till att bli moderator.

Om du är godkänd, kommer vi att lägga till dig i våra Moderator-team på [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **För GitHub:** När du har blivit accepterad som moderator kommer du att få en Github repository invitation. Du måste gå över mot [freeCodeCamp GitHub Organisation Inbjudan](https://github.com/orgs/freeCodeCamp/invitation) för att kunna acceptera inbjudan. Detta krävs för att vi ska kunna ge dig skrivbehörighet på några av våra förråd.

# Hur vi pensionerar inaktiva moderatorer

Observera att vi ofta kommer att ta bort mods som vi tror är inaktiva. När vi gör detta skickar vi följande meddelande:

> Detta är ett standardmeddelande som meddelar dig att, eftersom du inte verkar ha varit en aktiv moderator nyligen, vi tar bort dig från vårt Moderator-team. Vi uppskattar er hjälp i det förflutna.

> Om du tror att vi gjorde detta av misstag, eller när du är redo att komma tillbaka och bidra mer, svara bara på detta meddelande som låter mig veta.

# Hur våra bidragsgivare rum fungerar

Vem som helst är välkommen i [Bidragsgivarens rum på vår Discord](https://discord.gg/KVUmVXA). Det är det utsedda chattrummet för moderatorer och andra campare som bidrar till vår gemenskap på valfritt antal sätt, inklusive genom studiegrupper.

Vårt antagande är att bidragsgivarna kommer att läsa allt i detta rum som direkt nämner dem med ett `@username`. Allt annat är valfritt. Men tveka inte att läsa vad som helst inlägg i det och interagera.

# Hanterar med advokater

Du kan bli kontaktad av organisationer som vill samarbeta eller samarbeta med freeCodeCamp på något sätt. När du inser att detta är vad de efter, var snäll och sluta prata med dem och berätta för dem att maila quincy@freecodecamp.org. Han får förslag som detta hela tiden och är i bästa läge för att bedöma om en sådan relation kommer att vara värt det för vår gemenskap (och det är sällan).

# Hantering av (psykiska) hälsofrågor

Du kan stöta på situationer där användare söker medicinsk rådgivning eller hanterar psykiska problem och letar efter stöd. När det gäller politiken bör ni undvika att tala privat om dessa frågor. Skulle situationen någon gång reflektera tillbaka till fCC, vill vi ha konversation(er) på skivan. Gör det klart att vi inte är läkare och att du uppmuntrar användaren att hitta professionell hjälp. Så svårt som det ibland kan vara, undvika att ge några tips eller råd annat än att peka användaren i riktning mot professionell hjälp!

Om detta händer på Discord: Stäng av användaren. Detta är inte att straffa dem! Suspending a user will create a private channel that only accessible by the user and the team. (Automatic Copy) Detta kommer att gynna både användaren och fCC på flera sätt:

- Användaren är garanterad viss integritet
- Offentlig chatt är inte längre störd
- Andra teammedlemmar kan pitcha in, om du är obekväm med att hantera situationen själv

> [!NOTE] Suspending a user automatically gives them a message about reading our Code of Conduct. Se till att du informerar användaren om att du upphävde dem för att ge dem viss integritet och att de inte straffas. Detta är mycket viktigt! Vi vill absolut undvika att ge användarna idén att de straffas för att de når ut för att få hjälp!

Om du tror att användaren är kapabel att återgå till gemenskapen, högerklicka på den privata kanalen och kopiera ID. Sätt följande meddelande i #mod-log:

> Referens medicinsk råd: <channel ID> <username>

Efter det kan du ta bort upphängningen från användaren som du normalt gör.

Hjälpsamma URL:er:

http://www.suicide.org/international-suicide-hotlines.html

# En anteckning om yttrandefrihet

Ibland kommer människor att försvara något offensivt eller uppviglande som de sade som "yttrandefrihet".

Denna XKCD serie sammanfattar perfekt de flesta gemenskapernas tankar om yttrandefrihet. Så om någon försvarar något de säger som "fritt tal" får du gärna skicka det till dem.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Tack för att du läser detta, och tack för att du hjälper utvecklargemenskapen!

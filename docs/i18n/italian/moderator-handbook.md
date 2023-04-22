# Il manuale ufficiale del moderatore di freeCodeCamp

Questo manuale ti aiuterà a moderare diversi luoghi nella nostra comunità. Questo comprende le conversazioni e le interazioni nei thread delle issue e delle pull request su GitHub, nel forum della community, nelle chat room e nelle altre comunità ufficiali che ospitiamo.

> [!NOTE] Tutti i moderatori di freeCodeCamp sono moderatori di tutta la comunità. Cioè confidiamo che tu supervisioni uno di questi posti.

Puoi fare da moderatore su qualunque piattorma ti interessi di più. Alcuni moderatori aiutano solo su GitHub, mentre altri aiutano solo sul forum. Alcuni sono attivi ovunque.

L'idea di fondo è che vogliamo che ti diverta ad essere un moderatore, e che tu investa il tuo poco tempo in luoghi che sono di tuo interesse.

> "Da grandi poteri derivano grandi responsabilità." - Zio Ben

Come moderatore, il carattere è più importante dell'abilità tecnica.

Ascolta. Sii utile. Non abusare del tuo potere.

freeCodeCamp è una comunità inclusiva ed è necessario lasciarla così.

Abbiamo un singolo [Codice di Condotta](https://code-of-conduct.freecodecamp.org) per gestire tutta la nostra comunità. Meno sono le regole, più facile sarà ricordarle. Puoi leggere queste regole e impegnarti a ricordarle [qui](https://code-of-conduct.freecodecamp.org).

> [!NOTE] As a moderator, we would add you to one or more teams on GitHub, our community forums & chat servers. Se ti manca l'accesso a una piattaforma che vorresti moderare, per favore [contatta un membro dello staff](FAQ.md#assistenza-aggiuntiva).

## Moderare GitHub

I moderatori hanno due responsabilità principali su GitHub:

1. Fare lo smistamento e rispondere alle issue.
2. Verificare e fare il merge delle pull request (cioè controllo qualità).

### Moderare gli issue di Github

Usiamo il repository principale [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) per tenere traccia delle issue su tutti i nostri repository. Riceviamo nuove issue ogni giorno e per tutte occorre fare lo smistamento, assegnare un'etichetta e indirizzarle. Questo è anche un ottimo posto per iniziare ad aiutare contribuendo al codice open source.

#### Smistamento delle issue

[Lo smistamento (triage)](https://en.wikipedia.org/wiki/Triage) è un processo in cui si decide con quale priorità rivolgere l'attenzione ad ogni nuovo problema riportato. Abbiamo una lunga lista di etichette che usiamo per contrassegnare priorità, categoria, status e scopo di ogni issue.

Puoi aiutarci ad organizzare e fare lo smistamento delle issue riportate applicando etichette da [questa lista](https://github.com/freeCodeCamp/freeCodeCamp/labels). Solitamente, è disponibile una descrizione accanto all'etichetta che ne spiega il significato.

Per favore, fai particolare attenzione alle etichette `"help wanted"` e `"first timers only"`. Queste devono essere aggiunte ai thread che pensi possano essere aperti a potenziali contributori per creare una pull request.

Un'etichetta `"first timer only"` dovrebbe essere applicata per problemi banali (es. un refuso) e dovrebbe includere informazioni addizionali. Puoi usare questo [modello di risposta](moderator-handbook.md#first-timer-only-issues) per lo smistamento.

#### Chiudere issues e pull request stantii, obsoleti e inattivi

- Le issue e le pull request stantie sono quelli che non hanno visto alcuna attività dall'autore per 21 giorni (3 settimane dall'ultima attività), ma solo dopo che un moderatore ha richiesto più informazioni/modifiche.

- L'attività è definita come: Commenti che richiedono un aggiornamento sulla PR e sullo smistamento come l'etichetta `status: update needed` etc.

- Se il contributore chiede ulteriore assistenza o anche del tempo, quanto sopra può essere rilassato e rivisitato dopo che è stata data una risposta. In ogni caso, i moderatori dovrebbero usare il loro buon senso per prendere una decisione sullo status in sospeso della PR.

> [!TIP] Ti consigliamo di usare questa lista di [modelli di risposta](moderator-handbook.md#reply-templates) mentre smisti le issue.

### Moderare le pull request

Le pull request (PR) sono il modo in cui i contributori sottopongono cambiamenti al repository di freeCodeCamp. Dobbiamo eseguire il Controllo Qualità sulle pull request prima di decidere se fare il merge, richiedere delle modifiche o chiuderle.

#### Tipi di Pull Request

1. **Modifiche alle istruzioni delle sfide**

   Queste sono le modifiche ai testi delle sfide - la descrizione, le istruzioni o il testo dei test.

   Puoi anche farne la revisione direttamente su GitHub e decidere se fare il merge. Dobbiamo fare un po' attenzione su questo perché milioni di persone incontreranno questo testo lavorando sul curriculum di freeCodeCamp. La pull request rende il testo più chiaro senza allungarlo troppo? Le modifiche sono rilevanti e non troppo pedanti? Ricorda che il nostro obbiettivo è che le sfide siano più chiare e più corte possibile. Non sono il luogo per dettagli incomprensibili. I contributori possono provare ad aggiungere link e risorse alle sfide.

   Puoi chiudere le pull request non valide e rispondervi con questi [modelli di risposta](moderator-handbook.md#closing-invalid-pull-requests).

   Se la modifica va bene, assicurati di lasciare un'approvazione con un commento "LGTM" (Looks Good To Me). Una volta che una pull request riceve almeno due approvazioni (inclusa la tua) dai moderatori o dal dev-team, puoi procedere e farne il merge.

2. **Modifiche al codice delle sfide**

   Queste sono modifiche al codice in una sfida - il seed della sfida, la soluzione della sfida e le stringhe di test.

   Queste pull request devono essere scaricate (pull) da GitHub e testate nel tuo computer locale o su Gitpod per assicurarti che i test della sfida possano essere superati con la soluzione corrente, e il nuovo codice non introduca errori.

   Alcuni contributori potrebbero provare ad aggiungere test addizionali per coprire casi limite pedanti. Dobbiamo fare attenzione a non rendere le sfide troppo complicate. Queste sfide e i loro test dovrebbero essere più semplici e intuitivi possibile. Ad eccezione delle sfide sugli algoritmi e della sezione di preparazione al colloquio di lavoro, gli studenti dovrebbero essere in grado di risolvere ogni sfida entro due minuti.

   Puoi chiudere le pull request non valide e rispondervi con questi [modelli di risposta](moderator-handbook.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with an "LGTM" comment. Una volta che una pull request ha ricevuto almeno due approvazioni (inclusa la tua) dai moderatori o dal dev-team, puoi procedere e farne il merge.

3. **Modifiche alla piattaforma**

   Queste modifiche al codice cambiano la funzionalità della piattaforma freeCodeCamp stessa.

   A volte i contributori cercano di apportare cambiamenti senza troppe spiegazioni, ma per le modifiche al codice, dobbiamo essere sicuri che ci sia un'autentica necessità di cambiamento. Queste pull request dovrebbero fare riferimento a un'issue esistente su GitHub dove vengono discusse le ragioni della modifica. Quindi puoi aprire la pull request sul tuo computer e testarla localmente.

   Dopo averlo fatto, se le modifiche funzionano, non farne ancora il merge. Puoi commentare le pull request scrivendo "LGTM", quindi menzionando **"@freeCodeCamp/dev-team"** in modo che possano dare un'occhiata finale.

4. **PR automatizzate (Dependabot)**

   Alcune PR sono aggiornamenti di dipendenze automatizzati fatti attraverso un'integrazione. Non dovresti fare il merge o approvare queste PR. Uno dei membri del dev-team si prenderà carico di rivedere queste PR automatizzate e di farne il merge.

#### How to Review, Merge, or Close Pull Requests

##### Assign yourself to a Pull Request:

Prima di tutto, quando scegli una pull request da rivedere, dovresti assegnarla a te stesso. Puoi farlo facendo clic sul collegamento "assign yourself" sotto la parte "assegnatari" nella colonna di destra dell'interfaccia di GitHub.

A seconda del tipo di pull request, segui le regole corrispondenti elencate in precedenza.

##### Ensure the CI Checks are Passing:

Prima di fare il merge di qualsiasi pull request, assicurati che GitHub contrassegni come superati tutti i controlli da fare (segni di spunta verdi) sulle pull request. Se noti che uno dei controlli non va a buon fine, indaga e chiarisci la causa principale. La modifica che viene apportata blocca i nostri test? Il sito verrà creato correttamente se la PR sarà unita? Questi controlli sono fondamentali per la stabilità della piattaforma.

> [!WARNING] L'unione di una PR che non supera i controlli CI/CD può causare difficoltà a tutte le parti interessate, incluso il team di sviluppo e i contributori.

##### Gestire i conflitti di merge:

A volte ci sarà un conflitto di merge.

Ciò significa che un'altra pull request ha apportato una modifica alla stessa parte di quello stesso file. GitHub ha uno strumento per affrontare questi conflitti di unione direttamente su GitHub. Puoi provare ad affrontare questi conflitti. Giudica al meglio.

Le modifiche della pull request saranno in alto e le modifiche del ramo main saranno in basso. A volte ci saranno informazioni ridondanti che possono essere cancellate. Prima di finire, assicura di cancellare i simboli `<<<<<<`, `======`, e `>>>>>>` che Git aggiunge per indicare le aree in conflitto.

Se non sei sicuro, chiedi assistenza a uno degli altri moderatori o al team di sviluppo.

##### Merging a Valid Pull Request:

Se la pull request sembra pronta per il merge (e non richiede ulteriori approvazioni, ricorda che ne servono almeno due), puoi procedere e unirla. Assicurati di utilizzare l'opzione predefinita **"Squash and Merge"**. Questo ridurrà tutti i commit della pull request a un singolo commit, rendendo la cronologia di Git molto più facile da leggere.

> Dovresti quindi commentare la pull request, ringraziando il contributore in modo personale!

Se l'autore della pull request è un "contributore per la prima volta" dovresti anche congratularti con lui per la sua prima pull request unita al repository. Puoi guardare nell'angolo in alto a destra nel corpo della PR per determinare chi ha contribuito per la prima volta. Mostrerà `First-time contributor` come nella figura:

<details>
   <summary>
      Badge first-time contributor sulle pull request (screenshot)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="Badge first time contributor sulle pull request" />
</details>

Se la pull request non sembra pronta per il merge, puoi rispondere educatamente dicendo all'autore cosa dovrebbe fare per prepararla. Si spera che rispondano e che la loro pull request sia più vicina ad essere pronta.

Se hai bisogno di una seconda opinione su una pull request, vai avanti e lascia i tuoi commenti sulla pull request, quindi aggiungi l'etichetta "discussing".

##### Chiudere una pull request invalida:

Spesso una pull request avrà richiesto uno sforzo minimo. Puoi capirlo immediatamente quando il contributore non si è preoccupato di selezionare le caselle di spunta nel template per le Pull Request o ha utilizzato un titolo generico per la Pull Request come "made changes" o "Update index.md".

Ci sono anche situazioni in cui il contributore sta cercando di aggiungere un collegamento al proprio sito Web, includere una libreria che ha creato o apportare una modifica frivola che non aiuta nessuno tranne se stesso.

Puoi chiudere le pull request non valide e rispondervi con questi [modelli di risposta](moderator-handbook.md#chiudere-le-pull-request-non-valide).

#### Altre linee guida per i Moderatori su GitHub

Anche se avrai accesso in scrittura al repository di freeCodeCamp, **non dovresti mai inviare il codice direttamente ai repository di freeCodeCamp**. Tutto il codice dovrebbe entrare nella codebase di freeCodeCamp sotto forma di una pull request da un fork del repository.

Inoltre, non dovresti mai accettare le tue proprie PR. Esse dovranno essere riviste da un altro moderatore, proprio come qualsiasi altra PR.

Se noti che qualcuno infrange il [codice di condotta](https://code-of-conduct.freecodecamp.org) sulle issue di GitHub o apre pull request con contenuto o codice dannoso, invia un'email a `support[at]freecodecamp.org` con un link alla pull request incriminata, e potremmo considerare di bandirli completamente dall'organizzazione GitHub di freeCodeCamp.

## Moderazione del Forum

Come Moderatore, aiuterai a mantenere la nostra comunità un posto piacevole in cui tutti possano imparare e ricevere aiuto. Avrai a che fare con post segnalati e maneggerai spam, argomenti fuori tema, e altre conversazioni inappropriate.

Nota che una volta che sarai un moderatore sul forum, inizierai a vedere suggerimenti ai moderatori in blu sui membri del forum, come "questa è la prima volta che [person] ha creato un post - diamogli il benvenuto nella community!" o "[person] non ha creato post per molto tempo - diamo loro il bentornato."

![Un testo blu che dice "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

Queste per te sono opportunità di dare loro il benvenuto e farli sentire ancora più speciali. Non sai mai quale persona marginalmente coinvolta possa diventare il nostro prossimo super aiutante, supportando molte altre persone nel loro percorso di programmazione. Anche la più piccola gentilezza può innescare una cascata di buone azioni.

### Eliminare dei post del forum

I moderatori del forum possono cancellare i post degli utenti. Dovresti farlo solo nei seguenti casi:

1. Qualcuno ha postato immagini pornografiche o graficamente violente.
2. Qualcuno ha postato un link o del codice di natura malevola e che potrebbe danneggiare altri camper che ci cliccano sopra.
3. Qualcuno ha inondato un thread con un sacco di spam.
4. Un account è stato creato, oltre ogni ragionevole dubbio, per spammare.

### Affrontare lo spam

Per il primo post di spam di un utente legittimo (il cui intento non è di mandare spam nel forum ma di imparare e contribuire al forum), invia un messaggio spiegando il problema e rimuovi il link o il post dove opportuno. Lascia una nota sul profilo dell'utente spiegando le azioni che hai intrapreso. Se il problema persiste, allora impedisci tranquillamente all'utente di postare (usando l'opzione silenzia sul pannello Amministratore Utente). Invia un avvertimento all'utente con il [Codice di Condotta](https://code-of-conduct.freecodecamp.org). Spunta la casella nel messaggio privato che indica che il tuo messaggio è un "ammonimento formale."

Come moderatore, puoi fare domande e riportare incidenti nella [sezione dedicata allo staff nel forum](https://forum.freecodecamp.org/c/mod-team/4).

### Affrontare conversazioni off-topic

Post o argomenti che sembrano essere nel posto sbagliato possono essere ri-categorizzati o rinominati in qualunque modo sia appropriato.

In circostanze eccezionali, può essere appropriato per un moderatore dividere una discussione in più thread.

Di nuovo, se hai problemi o domande, fai un post con le tue azioni nella categoria Staff e tagga un altro moderatore se vuoi che riveda le tue azioni di moderazione.

### Affrontare le soluzioni postate

Se un utente risponde in un thread di aiuto per il curriculum di freeCodeCamp con una soluzione, rimuovila e usa la risposta pronta **Solution Instead of Help** (o una risposta simile con le tue parole).

If the OP (Original Poster) replies within a freeCodeCamp curriculum help thread with their final solution, blur it, and use the **Blurred Spoiler Solution** canned reply.

Se un utente crea un thread richiedendo un feedback su una soluzione, sposta il thread nel subforum per i feedback e sfoca la soluzione, se necessario. Se l'utente sta postando la soluzione solo per mostrarla, togli il thread dall'elenco e usa la risposta pronta **Solutions Thread**.

### Utenti Minorenni

I nostri [Termini di servizio](https://freecodecamp.org/terms) richiedono che gli utenti di freeCodeCamp abbiano almeno 13 anni. Se un utente rivela di avere meno di 13 anni, inviagli il messaggio (qui sotto), sospendi il suo account e poi **manda un email a `support[at]freecodecamp.org` per cancellare gli account freeCodeCamp /learn e forum dell'utente (fornendo un link dell'account forum in questione).**

```markdown
OGGETTO: Gli utenti al di sotto dei 13 anni di età non possono utilizzare il forum per i nostri Termini di Servizio.

Ci è stato fatto notare che hai un età inferiore ai 13 anni. Secondo i [termini di servizio di freeCodeCamp](https://freecodecamp.org/terms), devi avere almeno 13 anni per utilizzare il sito o il forum. Elimineremo sia il tuo account freeCodeCamp che il tuo account del forum. Questa restrizione ci mantiene in conformità con le leggi degli Stati Uniti.

Per favore, iscriviti nuovamente una volta compiuti 13 anni di età.

Grazie per la comprensione.
```

### Moderating Via Cell Phone

Moderating the forum is possible via a cell phone but you may encounter some usage quirks. Questa non è una lista completa.

- Quando provi a includere una "risposta pronta" in una risposta, se il menu non si apre (dopo aver cliccato sull'ingranaggio), clicca sull'area del testo e poi riprova.
- La 'chiave inglese' del moderatore è nella parte inferiore del viewport ma se ci clicchi su e non riesci a vedere il pulsante "Select Posts" perché è fuori dal campo visivo, potresti aver di scorrere le opzioni, ma a volte ciò non funziona e in tal caso potrebbe essere necessario spostarsi su un monitor fisso o di un portatile.
- A volte cliccare sul menu con tre puntini sotto un post può nascondere l'icona reply. Ricarica la pagina per recuperarla.

## Moderazione di Facebook

Se vedi qualcosa che sembra violare il nostro [Codice di Condotta](https://code-of-conduct.freecodecamp.org/), dovresti eliminarlo immediatamente.

Alcune volte le persone posteranno cose che credono essere divertenti. Non si renderanno conto che ciò che hanno detto o condiviso potrebbe essere interpretato come offensivo. Dovresti eliminare quei post, ma non necessariamente bannare la persona. Si spera che l'utente capisca che ciò che ha postato era inappropriato e che quindi è stato cancellato.

A meno che non sia un'offesa oltraggiosa che non può essere ragionevolmente attribuita a una differenza culturale o a un fraintendimento della lingua inglese. In tal caso, dovresti fortemente considerare di bloccare il membro dal gruppo Facebook.

## Moderare Discord

Ecco come i moderatori affrontano le violazioni al [Codice di Condotta](https://code-of-conduct.freecodecamp.org/) sulla nostra chat:

> [!NOTE] Camperbot agisce come bot di moderazione e tutti i comandi utilizzano l'interfaccia di comando di Discord con la barra obliqua (slash). Puoi vedere la lista dei comandi digitando `/` in qualsiasi canale.

1. **Assicurati che l'utente abbia violato intenzionalmente il [Codice di Condotta](https://code-of-conduct.freecodecamp.org).**

   Non tutte le violazioni del [Codice di Condotta](https://code-of-conduct.freecodecamp.org) sono intenzionali. A new camper might post a large amount of code for help, unaware that this can be disruptive to the conversation. In questi casi puoi chiedergli di incollare il codice tramite servizi come CodePen o Pastebin.

2. **Se un utente viola chiaramente e intenzionalmente il [Codice di Condotta](https://code-of-conduct.freecodecamp.org), il moderatore procederà come segue:**

   Per violazioni minori, può essere emesso un avviso con il comando `/warn`. Per violazioni più importanti, puoi rimuovere un membro dal server temporaneamente con il comando `/kick`, o permanentemente con il comando `/ban`. In alcuni casi, un membro potrebbe aver solo bisogno di tempo per calmarsi e riflettere - il comando `/mute` ti permette di impedirgli di dialogare con la community per un determinato periodo. Un membro su cui è stato usato il comando mute può vedere le conversazioni, ma non può pubblicare messaggi o aggiungere reazioni.

   Tutti i comandi di moderazione richiederanno un parametro `reason`, che dovrebbe essere una breve spiegazione del perché l'azione è stata intrapresa. Le azioni di moderazione effettuate con il bot saranno registrate in `#mod-log`, che ci permette di rimanere tutti nella stessa pagina. Dovremmo evitare di utilizzare gli strumenti di moderazione integrati di Discord, in quanto non saranno registrati.

   > [!WARNING] La ragione fornita al comando di moderazione sarà anche inclusa nel messaggio di notifica all'utente. Per favore, ricorda di essere professionale.

3. **Creare una discussione privata**

   Potrebbero esserci situazioni in cui hai bisogno di rivolgerti a un camper in privato. Questo non dovrebbe essere fatto tramite messaggi diretti, che possono portare a situazioni in cui tu sostieni una cosa e il camper ne sostiene un'altra. Invece, usa la funzione del bot per creare una discussione privata:

   - Chiama il comando `/private`, dove `target` è l'utente con cui vuoi aprire un canale privato.
   - Il bot creerà un nuovo canale, e vi aggiungerà l'utente menzionato e tutti i moderatori con il ruolo `Your Friendly Moderator`. Anche se vengono aggiunti al canale tutti i moderatori per trasparenza, il moderatore che ha chiamato il comando dovrebbe essere l'unico ad interagire con l'utente a meno che non abbia bisogno di assistenza.
   - Quando la conversazione è conclusa, clicca il pulsante `❌ Close` _sul primo messaggio nel canale privato_ per fare in modo che il bot chiuda e cancelli il canale.

4. **Cancellare i messaggi**

   Il nostro bot di moderazione è configurato per registrare automaticamente i messaggi eliminati nel canale `#mod-log`. Se un messaggio non è in linea con il nostro Codice di Condotta o non appropriato per la nostra comunità, in genere puoi eliminarlo con certezza.

   Nota che se il messaggio contiene contenuti che violano i termini di servizio di Discord, dovrai segnalarlo tramite https://dis.gd/report **prima** di eliminarlo.

5. **Non minacciare di prendere provvedimenti**

   Se un utente infrange il [Codice di Condotta](https://code-of-conduct.freecodecamp.org), non minacciarlo di intraprendere un'azione da moderatore e non avvertirlo mai in pubblico. Invece, parlagli privatamente usando il comando `/private` del bot o usa i comandi di moderazione del bot.

   Se una violazione era chiaramente involontaria e non richiede una sospensione o una conversazione privata, rendi l'utente consapevole delle sue azioni senza farlo sembrare un ammonimento.

   Per esempio:

   - Un utente posta un muro di testo per chiedere aiuto:

     Moderatore: **@username** Per favore usa CodePen o Pastebin quando posti una grande quantità di codice.

   - O se devi proprio spiegare il perché:

     Moderatore: **@username** Per favore usa CodePen o Pastebin quando riporti grandi quantità di codice, perché disturba la chat per tutti e può essere considerato spam secondo il nostro [Codice di Condotta](https://code-of-conduct.freecodecamp.org).

   - Per violazioni minori e non intenzionali del [Codice di Condotta](https://code-of-conduct.freecodecamp.org):

     Moderatore: Questo è un promemoria amichevole per invitare tutti a seguire il [Codice di Condotta](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **Non vantarti di essere un moderatore**

   Non vederti come se fossi al di sopra della comunità. **Fai parte della community.**E la community si è affidata a te per proteggere qualcosa di raro che tutti condividiamo: un luogo _accogliente_ per i nuovi sviluppatori.

   Se ti vanti di essere un moderatore, le persone potrebbero sentirsi a disagio intorno a te, nello stesso modo in cui si sentono a disagio accanto a un agente di polizia, anche quando non hanno fatto niente di male. Questa è semplicemente la natura umana.

7. **Non contraddire gli altri moderatori**

   Se sei in disaccordo con l'azione di un moderatore, parla con loro in privato o faglielo presente nel canale #mod-chat. Non scavalcare mai l'azione di un moderatore e non contraddire mai gli altri moderatori pubblicamente. Invece, discuti a mente fredda su `#mod-chat` e convinci il moderatore che egli stesso dovrebbe annullare il ban o cambiare il proprio punto di vista.

   _Ricorda: siamo tutti nella stessa squadra. Vogliamo dare dignità al ruolo dei moderatori ed essere un fronte unito._

8. **Parla con gli altri moderatori**

   Abbiamo una stanza `#mod-chat` solo per i moderatori. Usala! Se ti senti a disagio nel gestire una determinata situazione, chiedi aiuto ad altri moderatori. Se pensi che qualcosa dovrebbe essere discusso, fallo. Fai parte di una squadra, e noi apprezziamo il contributo di ogni membro! Anche se sei totalmente in disaccordo con qualcosa presente in queste linee guida o nel [Codice di Condotta](https://code-of-conduct.freecodecamp.org)!

9. **Inattività temporanea**

   Se non sarai attivo come Moderatore per un po' a causa di vacanze, malattia o qualsiasi altro motivo, assicurati di farlo sapere agli altri nel canale `#mod-chat`. In questo modo sapremo se possiamo contare sul fatto che sei regolarmente attivo sul server oppure no.

## Come diventare un moderatore

Supponiamo che tu stia aiutando le persone della community con costanza nel tempo. In questo caso, il nostro Team dei Moderatori se ne accorgerà e uno di loro ti suggerirà come possibile moderatore al [nostro staff](https://forum.freecodecamp.org/g/Team). Per diventare moderatore non ci sono scorciatoie.

Se verrai approvato, ti aggiungeremo al nostro Team dei Moderatori su [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), sul [forum](https://forum.freecodecamp.org/g/moderators) e sulla chat.

> [!NOTE] Per GitHub: Dopo essere stato accettato come moderatore, riceverai l'invito a un repository Github. Dovrai andare all'[invito all'Organizzazione GitHub di freeCodeCamp](https://github.com/orgs/freeCodeCamp/invitation) per essere in grado di accettare l'invito.
> 
> Questo è necessario per consentirci di darti i permessi di scrittura su alcuni dei nostri repository.

## How Our Contributors Room Works

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an **@username**. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Dealing with Solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Dealing with (Mental) Health Inquiries

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. This can be done with the bot's `private` command.

- All'utente viene garantita privacy.
- La chat pubblica non è più interrotta.
- Altri membri del team possono contribuire, nel caso tu sia a disagio nell'affrontare la situazione da solo.

Helpful URLs:

http://suicide.org/international-suicide-hotlines.html

## A Note on Free Speech

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!

## Reply Templates

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues/pull requests.

> Puoi creare le tue con la feature integrata di GitHub [saved replies](https://github.com/settings/replies/) oppure utilizzare quelle qui sotto.

### Ringraziamenti

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Ringraziamenti e congratulazioni

> Per ringraziare e incoraggiare chi contribuisce per la prima volta.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Errore di compilazione

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](how-to-work-on-coding-challenges.md#testing-challenges) for instructions on running the CI build locally. ✅
```

### Sincronizzare il fork

> Quando la PR non è allineata con il branch `main`.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
````

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
````

¹ If a first-time-contributor has a merge conflict, maintainers will resolve the conflict for them.

### Duplicati

> Quando la pull request è una ripetizione o un duplicato.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as a duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ["Contributors" category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

### Chiudere le pull request non valide

> Quando una pull request non è valida.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> Quando una PR aggiunge link a risorse esterne.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Adding Comment About Newbie Mistakes

```markdown
Hi there, 

Thanks for creating this pull request.

Please ensure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously. Respect the requirements to earn the respect of your fellow maintainers. You will also save everyone time :)

Since you are new here, please slow down and read our [contributing guidelines](https://contribute.freecodecamp.org), as we see that you may still need to catch up on a few things.

<details>
<summary>Here are some examples (expand)</summary>

1. Do not edit files directly on GitHub – while you can, it's not a good idea. 

   Typos and formatting errors can break the tests.

2. Use the correct way to link issues. 

   Add the issue number only in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.

4. Keep mentions and review requests to a minimum. 

   We understand you are excited about contributing, and our maintainers will get back to you when they can.

5. Do not work directly off your `main` branch. 

   You can always create a new branch for the changes you are working on. That way, you can sync change to your PR branch as the main repository moves ahead while your PR is waiting in the merge queue.

</details>

Don't worry. You don't have to close this PR. Feel free to ask specific queries on improving your PR here; someone will guide you.

We are happy you are excited to contribute and appreciate you taking the time to help us. Looking forward to more contributions!

Happy Contributing.
```

### Chiudere le issue non valide

> Quando una issue è inerente al codice del camper.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> Quando un'issue è il duplicato di un'issue precedente.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> Quando una issue viene risolta durante lo staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Issue `first timer only`

> Quando un'issue è ritenuta idonea per chi contribuisce al codice per la prima volta.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```

### Richieste di assegnazione

```md
We typically do not assign issues. Instead, we accept the first pull request that comprehensively solves the issue.

Issues labelled with `help wanted` or `first timers only` are open for contributions.

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/). We prioritize contributors following the instructions in our guide. Join us in [our chat room](https://discord.gg/PRyKn3Vbay) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing - our community will be happy to assist you.
```

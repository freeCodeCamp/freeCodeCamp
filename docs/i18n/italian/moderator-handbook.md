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

For triaging a trivial issue such as a typo fix, it is recommended to apply a "first timers only" label along with additional information. You can utilize the [reply template](reply-templates.md#first-timer-only-issues) provided for this purpose.

#### Chiudere issues e pull request stantii, obsoleti e inattivi

- Le issue e le pull request stantie sono quelli che non hanno visto alcuna attività dall'autore per 21 giorni (3 settimane dall'ultima attività), ma solo dopo che un moderatore ha richiesto più informazioni/modifiche.

- L'attività è definita come: Commenti che richiedono un aggiornamento sulla PR e sullo smistamento come l'etichetta `status: update needed` etc.

- Se il contributore chiede ulteriore assistenza o anche del tempo, quanto sopra può essere rilassato e rivisitato dopo che è stata data una risposta. In ogni caso, i moderatori dovrebbero usare il loro buon senso per prendere una decisione sullo status in sospeso della PR.

> [!TIP] We recommend you use this list of standard [reply templates](reply-templates.md) while triaging issues.

### Moderare le pull request

Le pull request (PR) sono il modo in cui i contributori sottopongono cambiamenti al repository di freeCodeCamp. Dobbiamo eseguire il Controllo Qualità sulle pull request prima di decidere se fare il merge, richiedere delle modifiche o chiuderle.

#### Tipi di Pull Request

1. **Modifiche alle istruzioni delle sfide**

   Queste sono le modifiche ai testi delle sfide - la descrizione, le istruzioni o il testo dei test.

   Puoi anche farne la revisione direttamente su GitHub e decidere se fare il merge. Dobbiamo fare un po' attenzione su questo perché milioni di persone incontreranno questo testo lavorando sul curriculum di freeCodeCamp. La pull request rende il testo più chiaro senza allungarlo troppo? Le modifiche sono rilevanti e non troppo pedanti? Ricorda che il nostro obbiettivo è che le sfide siano più chiare e più corte possibile. Non sono il luogo per dettagli incomprensibili. I contributori possono provare ad aggiungere link e risorse alle sfide.

   You can close invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

   Se la modifica va bene, assicurati di lasciare un'approvazione con un commento "LGTM" (Looks Good To Me). Una volta che una pull request riceve almeno due approvazioni (inclusa la tua) dai moderatori o dal dev-team, puoi procedere e farne il merge.

2. **Modifiche al codice delle sfide**

   Queste sono modifiche al codice in una sfida - il seed della sfida, la soluzione della sfida e le stringhe di test.

   Queste pull request devono essere scaricate (pull) da GitHub e testate nel tuo computer locale o su Gitpod per assicurarti che i test della sfida possano essere superati con la soluzione corrente, e il nuovo codice non introduca errori.

   Alcuni contributori potrebbero provare ad aggiungere test addizionali per coprire casi limite pedanti. Dobbiamo fare attenzione a non rendere le sfide troppo complicate. Queste sfide e i loro test dovrebbero essere più semplici e intuitivi possibile. Ad eccezione delle sfide sugli algoritmi e della sezione di preparazione al colloquio di lavoro, gli studenti dovrebbero essere in grado di risolvere ogni sfida entro due minuti.

   You can close invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

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

You can close these invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

#### Filtering Pull Requests

To sort Pull Requests for Quality Assurance for quick access to PRs that are ready for review, do not have a merge conflict, are not blocked, and have all status checks in green, use the following link to apply the filters:

[Direct link with filter applied](https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Aopen+is%3Apr+-label%3A%22status%3A+blocked%22+-label%3A%22status%3A+merge+conflict%22+status%3Asuccess+draft%3Afalse)

#### Other Guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Moderazione del Forum

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Eliminare dei post del forum

Forum moderators can delete users' posts. You should only do this for the following instances:

1. Qualcuno ha postato immagini pornografiche o graficamente violente.
2. Qualcuno ha postato un link o del codice di natura malevola e che potrebbe danneggiare altri camper che ci cliccano sopra.
3. Qualcuno ha inondato un thread con un sacco di spam.
4. Un account è stato creato, oltre ogni ragionevole dubbio, per spammare.

### Affrontare lo spam

For the first spam post of a legitimate user (ie. whose intent isn't to spam the forum but to learn/contribute to the forum), send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Check the box in the private message indicating that your message is a "formal warning."

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Affrontare conversazioni off-topic

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### Affrontare le soluzioni postate

If a user replies in a help thread for the freeCodeCamp curriculum with a solution, remove it and use the **Solution Instead of Help** canned reply (or a similar response in your own words).

If the OP (Original Poster) replies within a freeCodeCamp curriculum help thread with their final solution, blur it, and use the **Blurred Spoiler Solution** canned reply.

If a user creates a thread asking for feedback on a solution, move the thread to the feedback subforum and blur the solution, as necessary. If the user is only posting the solution to show it off, then unlist the thread and use the **Solutions Thread** canned reply.

### Utenti Minorenni

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the message (below), suspend the account then **Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp /learn and forum accounts as well (providing a link to the offending forum account).**

```markdown
OGGETTO: Gli utenti al di sotto dei 13 anni di età non possono utilizzare il forum per i nostri Termini di Servizio.

Ci è stato fatto notare che hai un età inferiore ai 13 anni. Secondo i [termini di servizio di freeCodeCamp](https://freecodecamp.org/terms), devi avere almeno 13 anni per utilizzare il sito o il forum. Elimineremo sia il tuo account freeCodeCamp che il tuo account del forum. Questa restrizione ci mantiene in conformità con le leggi degli Stati Uniti.

Per favore, iscriviti nuovamente una volta compiuti 13 anni di età.

Grazie per la comprensione.
```

### Moderating Via Cell Phone

Moderating the forum is possible via a cell phone but you may encounter some usage quirks. This is not an exhaustive list.

- Quando provi a includere una "risposta pronta" in una risposta, se il menu non si apre (dopo aver cliccato sull'ingranaggio), clicca sull'area del testo e poi riprova.
- La 'chiave inglese' del moderatore è nella parte inferiore del viewport ma se ci clicchi su e non riesci a vedere il pulsante "Select Posts" perché è fuori dal campo visivo, potresti aver di scorrere le opzioni, ma a volte ciò non funziona e in tal caso potrebbe essere necessario spostarsi su un monitor fisso o di un portatile.
- A volte cliccare sul menu con tre puntini sotto un post può nascondere l'icona reply. Ricarica la pagina per recuperarla.

## Moderazione di Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Moderare Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

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

Suppose you are helping people in the community consistently over time. In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

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

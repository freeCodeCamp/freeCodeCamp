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

> [!NOTE] Come moderatore, ti aggiungeremo a uno o più team su GitHub, ai forum della community & ai server delle chat. Se ti manca l'accesso a una piattaforma che vorresti moderare, per favore [contatta un membro dello staff](FAQ.md#assistenza-aggiuntiva).

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

   Se la modifica va bene, assicurati di lasciare un'approvazione con un commento "LGTM". Una volta che una pull request ha ricevuto almeno due approvazioni (inclusa la tua) dai moderatori o dal dev-team, puoi procedere e farne il merge.

3. **Modifiche alla piattaforma**

   Queste modifiche al codice cambiano la funzionalità della piattaforma freeCodeCamp stessa.

   A volte i contributori cercano di apportare cambiamenti senza troppe spiegazioni, ma per le modifiche al codice, dobbiamo essere sicuri che ci sia un'autentica necessità di cambiamento. Queste pull request dovrebbero fare riferimento a un'issue esistente su GitHub dove vengono discusse le ragioni della modifica. Quindi puoi aprire la pull request sul tuo computer e testarla localmente.

   Dopo averlo fatto, se le modifiche funzionano, non farne ancora il merge. Puoi commentare le pull request scrivendo "LGTM", quindi menzionando **"@freeCodeCamp/dev-team"** in modo che possano dare un'occhiata finale.

4. **PR automatizzate (Dependabot)**

   Alcune PR sono aggiornamenti di dipendenze automatizzati fatti attraverso un'integrazione. Non dovresti fare il merge o approvare queste PR. Uno dei membri del dev-team si prenderà carico di rivedere queste PR automatizzate e di farne il merge.

#### Come rivedere, fare il merge o chiudere le pull request

##### Assegna a te stesso una pull request:

Prima di tutto, quando scegli una pull request da rivedere, dovresti assegnarla a te stesso. Puoi farlo facendo clic sul collegamento "assign yourself" sotto la parte "assegnatari" nella colonna di destra dell'interfaccia di GitHub.

A seconda del tipo di pull request, segui le regole corrispondenti elencate in precedenza.

##### Assicurati che i controlli di CI (Continuous Integration) siano superati:

Prima di fare il merge di qualsiasi pull request, assicurati che GitHub contrassegni come superati tutti i controlli da fare (segni di spunta verdi) sulle pull request. Se noti che uno dei controlli non va a buon fine, indaga e chiarisci la causa principale. La modifica che viene apportata blocca i nostri test? Il sito verrà creato correttamente se la PR sarà unita? Questi controlli sono fondamentali per la stabilità della piattaforma.

> [!WARNING] L'unione di una PR che non supera i controlli CI/CD può causare difficoltà a tutte le parti interessate, incluso il team di sviluppo e i contributori.

##### Gestire i conflitti di merge:

A volte ci sarà un conflitto di merge.

Ciò significa che un'altra pull request ha apportato una modifica alla stessa parte di quello stesso file. GitHub ha uno strumento per affrontare questi conflitti di unione direttamente su GitHub. Puoi provare ad affrontare questi conflitti. Giudica al meglio.

Le modifiche della pull request saranno in alto e le modifiche del ramo main saranno in basso. A volte ci saranno informazioni ridondanti che possono essere cancellate. Prima di finire, assicura di cancellare i simboli `<<<<<<`, `======`, e `>>>>>>` che Git aggiunge per indicare le aree in conflitto.

Se non sei sicuro, chiedi assistenza a uno degli altri moderatori o al team di sviluppo.

##### Fare il merge di una pull request valida:

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

### Affrontare lo spam

Al primo post di spam di un utente, mandagli un messaggio spiegando il problema e rimuovi il link o il post come appropriato. Lascia una nota sul profilo dell'utente spiegando le azioni che hai intrapreso. Se il problema persiste, allora impedisci tranquillamente all'utente di postare (usando l'opzione silenzia sul pannello Amministratore Utente). Invia un avvertimento all'utente con il [Codice di Condotta](https://code-of-conduct.freecodecamp.org). Spunta la casella nel messaggio privato che indica che il tuo messaggio è un "ammonimento formale."

Come moderatore, puoi fare domande e riportare incidenti nella [sezione dedicata allo staff nel forum](https://forum.freecodecamp.org/c/mod-team/4).

### Affrontare conversazioni off-topic

Post o argomenti che sembrano essere nel posto sbagliato possono essere ri-categorizzati o rinominati in qualunque modo sia appropriato.

In circostanze eccezionali, può essere appropriato per un moderatore dividere una discussione in più thread.

Di nuovo, se hai problemi o domande, fai un post con le tue azioni nella categoria Staff e tagga un altro moderatore se vuoi che riveda le tue azioni di moderazione.

### Utenti Minorenni

I nostri [Termini di servizio](https://freecodecamp.org/terms) richiedono che gli utenti di freeCodeCamp abbiano almeno 13 anni. Se un utente rivela di avere meno di 13 anni, mandagli il messaggio sottostante e cancella il suo account (se la cancellazione non è disponibile, sospendere l'account è sufficiente).

**Manda anche un'email a `support[at]freecodecamp.org` per eliminare l'account dell'utente.**

```markdown
OGGETTO: Gli utenti al di sotto dei 13 anni di età non possono utilizzare il forum per i nostri Termini di Servizio.

Ci è stato fatto notare che hai un età inferiore ai 13 anni. Secondo i [termini di servizio di freeCodeCamp](https://freecodecamp.org/terms), devi avere almeno 13 anni per utilizzare il sito o il forum. Elimineremo sia il tuo account freeCodeCamp che il tuo account del forum. Questa restrizione ci mantiene in conformità con le leggi degli Stati Uniti.

Per favore, iscriviti nuovamente una volta compiuti 13 anni di età.

Grazie per la comprensione.
```

## Moderazione di Facebook

Se vedi qualcosa che sembra violare il nostro [Codice di Condotta](https://code-of-conduct.freecodecamp.org/), dovresti eliminarlo immediatamente.

Alcune volte le persone posteranno cose che credono essere divertenti. Non realizzano che ciò che hanno detto o condiviso potrebbe essere interpretato come offensivo. Dovresti eliminare quei post, ma non necessariamente bannare la persona. Si spera che l'utente capisca che ciò che ha postato era inappropriato e che quindi è stato cancellato.

A meno che non sia un'offesa oltraggiosa che non può essere ragionevolmente attribuita a una differenza culturale o a un fraintendimento della lingua inglese. In tal caso, dovresti fortemente considerare di bloccare il membro dal gruppo Facebook.

## Moderating Discord

Ecco come i moderatori affrontano le violazioni al [Codice di Condotta](https://code-of-conduct.freecodecamp.org/) sulla nostra chat:

> [!NOTE] Camperbot serves as our moderation bot, and all of the commands use Discord's native slash command interface. You can see a list of all of the commands by typing `/` in any channel.

1. **Assicurati che l'utente abbia violato intenzionalmente il [Codice di Condotta](https://code-of-conduct.freecodecamp.org).**

   Non tutte le violazioni del [Codice di Condotta](https://code-of-conduct.freecodecamp.org) sono intenzionali. A new camper might post a large amount of code for help, unaware that this can be disruptive to conversation. In questi casi puoi chiedergli di incollare il codice tramite servizi come CodePen o Pastebin.

2. **Se un utente viola chiaramente e intenzionalmente il [Codice di Condotta](https://code-of-conduct.freecodecamp.org), il moderatore procederà come segue:**

   For minor offences, a warning may be issued with the `/warn` command. For more egregious offences, you can remove the member from the server temporarily with the `/kick` command, or permanently with the `/ban` command. In some cases, a member may just need some time to cool off and collect their thoughts - the `/mute` command allows you to prevent them from engaging with our community for a set period of time. A muted member can see the conversation, but cannot post messages or add reactions.

   All moderation commands will take a `reason` parameter, which should be a short explanation of why the action was taken. Moderation actions done with the bot will be logged in `#mod-log`, which allows us all to stay on the same page. As such, we should avoid using Discord's built-in moderation tools, as they will not be logged.

   > [!WARNING] The reason provided to a moderation command will also be included in the DM notification to the camper. Please remember to be professional here.

3. **Creare una discussione privata**

   Potrebbero esserci situazioni in cui hai bisogno di rivolgerti a un camper in privato. Questo non dovrebbe essere fatto tramite messaggi diretti, che possono portare a situazioni in cui tu sostieni una cosa e il camper ne sostiene un'altra. Invece, usa la funzione del bot per creare una discussione privata:

   - Call the `/private` command, where `username` is the camper's chat username.
   - Il bot creerà un nuovo canale, e vi aggiungerà il camper menzionato e tutti i moderatori con il ruolo `Your Friendly Moderator`. Anche se vengono aggiunti al canale tutti i moderatori per trasparenza, il moderatore che ha chiamato il comando dovrebbe essere l'unico ad interagire con il camper a meno che non abbia bisogno di assistenza.
   - Quando la conversazione è completa, chiama il comando `!fCC close` _nel canale privato_ per fare in modo che il bot chiuda ed elimini quel canale.

4. **Cancellare i messaggi**

   Our moderation bot is configured to log deleted messages automatically in the `#mod-log` channel. If a message is not in line with our Code of Conduct, or otherwise not appropriate for our community, you are generally safe to delete it.

   Note that if the message contains content that violates Discord's terms of service, you'll want to report it via https://dis.gd/report **prior to** deleting it.

5. **Don’t threaten to take action**

   If a camper breaks the [Code of Conduct](https://code-of-conduct.freecodecamp.org), don’t threaten to take moderator action, and never warn them in public. Instead, talk to them privately using the bot's `/private` command, or use the bot's moderation commands.

   If a violation was clearly unintended and doesn't warrant moderation action or private conversation, make the offending camper aware of their actions without making it come across as a warning.

   For example:

   - Camper posts a wall of code to request help:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code.

   - Or if you really have to explain why:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our [Code of Conduct](https://code-of-conduct.freecodecamp.org).

   - For mild and unintentional violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org):

     Moderator: This is a friendly reminder for everyone to follow the [Code of Conduct](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **Don’t brag about being a moderator**

   Do not see yourself as above the community. **You are the community.** And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers.

   If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

7. **Don’t contradict other moderators**

   If you disagree with a moderator's action, talk with them in private or bring it up in the #mod-chat channel. Never override a moderator's action, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in `#mod-chat` and convince the moderator that they themselves should reverse their ban or change their PoV (Point of View).

   _Remember: We’re all on the same team. We want to dignify the role of moderators and present a unified front._

8. **Talk with other moderators**

   We have a `#mod-chat` room for moderators only. Use it! If you feel uncomfortable with handling a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team, and we value every team member's input! Even if you totally disagree with anything in these guidelines or the [Code of Conduct](https://code-of-conduct.freecodecamp.org)!

9. **Temporarily inactive**

   If you're not going to be active as a Moderator for a while due to vacation, illness, or any other reason, make sure to let the others know in the `#mod-chat` channel. This is so we know if we can count on you to be regularly active on the server or not.

## Come diventare un moderatore

Supponi di stare aiutando le persone con costanza nel tempo. In questo caso, il nostro Team dei Moderatori se ne accorgerà e uno di loro ti suggerirà come possibile moderatore al [nostro staff](https://forum.freecodecamp.org/g/Team). Per diventare moderatore non ci sono scorciatoie.

Se verrai approvato, ti aggiungeremo al nostro Team dei Moderatori su [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), sul [forum](https://forum.freecodecamp.org/g/moderators) e sulla chat.

> [!NOTE] For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
> 
> This is required for us to be able to give you write access to some of our repositories.

## Come congediamo i moderatori inattivi

Per favore ricorda che rimuoviamo frequentemente i moderatori che riteniamo essere inattivi. Quando lo facciamo, inviamo il seguente messaggio:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting us know.
```

## Come funzionano le stanze dei contributori

Chiunque è il benvenuto nella [stanza dei contributori sul nostro server di chat](https://discord.gg/PRyKn3Vbay). È la chat room designata per i moderatori e per i camper che contribuiscono alla nostra comunità in altri modi, anche attraverso i gruppi di studio.

Diamo per assodato che i contributori leggano qualunque messaggio in cui siano nominati direttamente con **@username**. Tutto il resto è opzionale, ma sentiti libero di leggere qualunque cosa venga postata da chiunque, e interagire.

## Affrontare i sollecitatori

Potresti essere avvicinato da organizzazioni che vogliono collaborare o diventare un co-brand di freeCodeCamp in qualche modo. Una volta che ti sei reso conto che questo è ciò che vogliono, **smetti di parlare con loro** e dì loro di mandare una email a `team[at]freecodecamp.org`.

Riceviamo proposte del genere continuamente e lo staff è nella posizione migliore per giudicare se valga la pena che la comunità intraprenda quelle relazioni (cosa che succede raramente).

## Affrontare richieste sulla salute (mentale)

Potresti incontrare situazioni in cui gli utenti ricercano consigli medici o stanno affrontando problemi di salute mentale e cercano supporto.

Per una questioni di policy, dovesti evitare di parlare di questi temi privatamente. Se la situazione dovesse riflettersi su freeCodeCamp, vogliamo che le conversazioni siano registrate. Chiarifica che non siamo medici professionisti ed incoraggia l'utente a cercare aiuto professionale.

Per quanto a volte sia difficile, evita di dare suggerimenti o consigli diversi dall'indirizzare l'utente verso l'aiuto professionale!

Se questo accade sul server delle chat: Crea un canale privato per l'utente e il team dei moderatori. Questo può essere fatto con il comando `private` del bot.

- The user is guaranteed some privacy.
- Public chat is no longer disrupted.
- Other team members can pitch in, should you feel uncomfortable dealing with the situation yourself.

URL utili:

http://suicide.org/international-suicide-hotlines.html

## Una nota sulla libertà di parola

A volte le persone difenderanno qualcosa di offensivo o aggressivo che hanno detto, come "libertà di parola."

Questo fumetto di XKCD riassume perfettamente il pensiero di molte comunità a proposito della libertà di parola.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Grazie per aver letto e grazie per l'aiuto alla comunità degli sviluppatori!

## Modelli di risposta

Queste sono alcune delle risposte standard che potresti voler usare mentre verifichi le pull request e fai il triage delle issues e delle pull request.

> You can make your own saved replies with GitHub's built-in [saved replies](https://github.com/settings/replies/) feature or use the ones below.

### Ringraziamenti

```markdown
Thank you for your contribution to the page! We are happy to accept these changes and look forward to future contributions. 🎉.
 🎉
```

### Ringraziamenti e congratulazioni

> For thanking and encouraging first-time contributors.

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

### Sincronizzare le fork

> When PR is not up to date with the `main` branch.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Usando il terminale, puoi farlo in tre facili step:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
````

Se stai usando una GUI, puoi semplicemente cercare il comando `Add a new remote...` e usare il link `git://github.com/freeCodeCamp/freeCodeCamp.git` visto sopra.

Una volta che avrai sincronizzato il fork e superato la build, saremo in grado di rivedere la tua PR e farne il merge. 😊

---

Sentiti libero di fare riferimento all'articolo [Sincronizzare un fork](https://help.github.com/articles/syncing-a-fork/) su GitHub per ulteriori informazioni su come mantenere aggiornato il fork con il repository di upstream. 🔄
````

### Conflitti in fase di merge

> Quando una PR ha dei conflitti di fusione che devono essere risolti.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
````

¹ Se una persona che contribuisce per la prima volta ha un conflitto di merge, i manutentori risolveranno il conflitto per lui.

### Duplicati

> When PR is repetitive or a duplicate.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

### Chiudere le pull request non valide

> When PR is invalid.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> When PR adds links to external resources.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Chiudere le issue non valide

> When an issue relates to the camper's code.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> When an issue is fixed in staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### `first timer only` Issue

> When an issue is deemed to be eligible for first-time code contributors.

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

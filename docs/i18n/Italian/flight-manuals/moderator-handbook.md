# Il manuale ufficiale del moderatore del freeCodeCamp.

Questo ti aiuterà a moderare luoghi diversi nella nostra comunità, tra cui:

- Problemi GitHub & richieste pull
- Il forum, chat room, gruppi Facebook e altri luoghi di incontro online
- Eventi in persona come gruppi di studio, hackathon e conferenze

**Tutti i moderatori freeCodeCamp sono moderatori a livello di comunità. Ciò significa che siamo fiduciosi che lei supervisioni uno di questi luoghi.**

Ciò detto, si può servire come moderatore in qualsiasi luogo sono di maggiore interesse per voi. Alcuni moderatori aiutano solo su GitHub. Altri aiutano solo sul forum. Alcuni moderatori sono attivi ovunque.

La linea di fondo è che vogliamo che ti piaccia essere un moderatore, e investire il vostro tempo limitato in luoghi che sono di interesse per voi.

> [!NOTA] "Con grande potere viene grande responsabilità." - Zio Ben

Come moderatore, il temperamento è più importante dell'abilità tecnica.

Ascolta. Sii Aiutante. Non abusare del vostro potere.

freeCodeCamp è una comunità inclusiva e dobbiamo mantenerla in questo modo.

Abbiamo un codice di condotta unico che governa tutta la nostra comunità. Meno le regole, più facili sono da ricordare. Puoi leggere queste regole e inviarle alla memoria [qui](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

I moderatori hanno la capacità di chiudere i problemi e accettare o chiudere le richieste di richiamo.

I moderatori hanno due responsabilità primarie nei confronti di GitHub:

1. QA'ing and merging pull requests
2. Valutazione e risposta alle questioni

## Moderare Le Richieste Di Tiro

Pull Requests (PR) sono come i contributori inviano le modifiche al repository di freeCodeCamp. È importante eseguire Garanzia di Qualità (QA) sulle richieste di pull prima di decidere se unirle o chiuderle.

### Tipi di richieste Pull

1. **Modifiche alle istruzioni per la sfida** Queste sono modifiche al testo delle sfide - la descrizione, le istruzioni o il testo di prova. Puoi anche rivedere questi diritti su GitHub e decidere se unirli. Dobbiamo essere un po' più attenti su questi aspetti, perché milioni di persone incontreranno questo testo mentre lavorano attraverso il programma di studi freeCodeCamp. La richiesta pull rende il testo più chiaro senza allungarlo molto? Le modifiche sono pertinenti e non eccessivamente pedantiche? Ricordate che il nostro obiettivo è che le sfide siano il più possibile chiare e brevi. Non sono il posto per dettagli oscuri. Inoltre, i contributori possono cercare di aggiungere link alle risorse per le sfide. È possibile chiudere queste richieste di pull e rispondere con questo:

   > Grazie per la vostra richiesta di pull.
   > 
   > Chiudo questa richiesta di richiamo. Si prega di aggiungere link e altri dettagli al corrispondente articolo guida della sfida.
   > 
   > Se pensi che io abbia torto nel chiudere questo problema, riaprilo e aggiungi ulteriori chiarimenti. Grazie e codifica felice.

2. **Modifica codice Sfida** Queste sono modifiche al codice in una sfida - Sfida Seed, Challenge Solution, e Stringhe di prova. Queste richieste di pull devono essere tirate giù da GitHub e testate sul computer locale per assicurarsi che i test di sfida possano ancora essere passati con la soluzione corrente, e il nuovo codice non introduce alcun errore. Alcuni contributori possono cercare di aggiungere ulteriori test per coprire i casi angolari pedantici. Dobbiamo stare attenti a non rendere la sfida troppo complicata. Queste sfide e i loro test dovrebbero essere il più possibile semplici e intuitivi. A parte le sfide dell'algoritmo e la sezione di preparazione dell'intervista, gli studenti dovrebbero essere in grado di risolvere ogni sfida in circa 2 minuti.

3. **Modifiche del Codebase** Queste modifiche del codice cambiano la funzionalità della piattaforma freeCodeCamp stessa. A volte i collaboratori cercano di apportare modifiche senza molte spiegazioni, ma per i cambiamenti di codice abbiamo bisogno di assicurarsi che ci sia una vera e propria necessità di cambiamento. Quindi queste richieste pull dovrebbero fare riferimento a un problema esistente di GitHub in cui vengono discusse le ragioni del cambiamento. Poi è possibile aprire la pull request sul computer e testarli localmente. Dopo averlo fatto, se i cambiamenti sembrano buono, non unirli abbastanza ancora. Puoi commentare la pull request dicendo "LGTM", poi menzionare @raisedadead in modo che possa dare un'occhiata finale.

### Come unire o chiudere le richieste di pull

Prima di tutto, quando si sceglie una pull request per QA, si dovrebbe assegnarsi ad esso. Puoi farlo cliccando sul link "Assegnati" sotto la parte "assegnati" sulla colonna destra dell'interfaccia di GitHub.

A seconda del tipo di pull request che è, seguire le regole corrispondenti sopra elencate.

Prima di unire qualsiasi richiesta di pull, assicurati che GitHub abbia segni di spunta verdi per tutto. Se ci sono X's, indagare prima e capire come farli trasformare in segni di controllo verdi prima.

A volte ci sarà un Conflitto di fusione. Ciò significa che un'altra pull request ha apportato una modifica a quella stessa parte dello stesso file. GitHub ha uno strumento per affrontare questi conflitti di fusione proprio su GitHub. Puoi provare ad affrontare questi conflitti. Basta usare il tuo giudizio migliore. Le modifiche della richiesta di pull saranno in cima e le modifiche del ramo Master saranno in basso. A volte ci saranno informazioni ridondanti in lì che possono essere cancellate. Prima di finire, assicurati di eliminare il `<<<<<<`, `======`, e `>>>>>>` che Git aggiunge per indicare aree di conflitto.

Se la pull request sembra pronta per unire (e non richiede l'approvazione da @raisedadead), puoi andare avanti e unirla. Assicurati di utilizzare la funzionalità predefinita "Squash and Merge" su GitHub. Questo schiaccierà tutte le richieste di pull verso il basso in un singolo commit, che rende la storia di Git molto più facile da leggere.

Dovresti quindi commentare la pull request ringraziando il contributore a modo tuo.

Se l'autore della pull request è un "contributore per la prima volta" dovresti anche congratularti con loro per la loro prima pull request unita al repository. È possibile guardare l'angolo in alto a destra del corpo del PR, per determinare un contributore per la prima volta.  Mostrerà `Prima volta contributore` come mostrato di seguito:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp<unk> 690x281](https://i.imgur.com/dTQMjGM.png)

Se la pull request non sembra pronta per unirsi, puoi gentilmente rispondere dicendo all'autore cosa dovrebbe fare per prepararla. Speriamo che risponderanno e ottenere la loro richiesta di richiamo più vicino a pronti.

Spesso, una richiesta di pull sarà ovviamente uno sforzo basso. Spesso puoi dirlo immediatamente quando il collaboratore non ha infastidito controllando le caselle di controllo nel modello di richiesta Pull o usato un titolo generico pull request come "modifiche fatte" o "Aggiorna indice.

Ci sono anche situazioni in cui il contributore sta cercando di aggiungere un link al proprio sito web, o includere una libreria che essi stessi hanno creato, o ha una modifica frivola che non serve ad aiutare nessuno tranne se stessi.

In entrambe queste situazioni, si dovrebbe andare avanti e chiudere la loro pull request e rispondere con questo messaggio standard:

> Grazie per aver aperto questa pull request.
> 
> Questo è un messaggio standard che ti avvisa che abbiamo esaminato la tua pull request e abbiamo deciso di non unirla. Accoglieremmo con favore le future richieste di richiamo da parte vostra.
> 
> Grazie e codifica felice.

Se avete bisogno di un secondo parere su una pull request andate avanti e lasciate i vostri commenti sulla pull request poi aggiungere l'etichetta "discussione" alla richiesta di pull.

## Moderare Problemi GitHub

freeCodeCamp è un progetto open source attivo. Riceviamo ogni giorno nuove questioni, tutte da sperimentare ed etichettare.

### Tipi di problemi di GitHub

1. **Code Help Requests**, che le persone hanno erroneamente creato problemi GitHub per. Se qualcuno sta chiedendo aiuto, incolla il seguente messaggio, quindi chiudi il problema.

   > Grazie per aver segnalato questo problema.
   > 
   > Questo è un messaggio standard che ti avvisa che questo problema sembra essere una richiesta di aiuto. Invece di chiedere aiuto qui, clicca sul pulsante \*\*"Aiuto"\*\* sulla sfida su freeCodeCamp, che vi aiuterà a creare una domanda nella parte destra del forum. I volontari sul forum di solito rispondono alle domande entro poche ore e possono aiutare a determinare se c'è un problema con il tuo codice o con i test della sfida.
   > 
   > Se i membri del forum determinano che non c'è nulla di sbagliato nel tuo codice, puoi richiedere che questo problema venga riaperto. 
   > 
   > Grazie e codifica felice.

2. **Problemi di errore o chiarificazione** Prova a riprodurre il bug se puoi. In caso contrario, chiedere loro i passaggi per riprodurre il bug, e se hanno uno screenshot, video, o ulteriori dettagli che possono aiutare a riprodurre il problema. Una volta che è possibile riprodurre il problema - o almeno confermare che è un problema legit - etichetta `ha confermato`. Allora:

- Se si tratta di un semplice cambiamento a una sfida esistente, etichetta come solo `primi timer`, altrimenti etichetta come `aiuto desiderato`. Usare altre etichette a seconda dei casi.
- Se il problema è più significativo, flag come `bug`. &nbsp; Se c'è qualche ambiguità sul corretto corso di azione su un problema, sentitevi liberi di tag @raisedadead sul problema ottenere la sua opinione su di esso, quindi aggiungere l'etichetta `Discussione`.

3. **Problemi duplicati** Se un problema è lo stesso di un altro problema segnalato, il precedente problema segnalato dovrebbe avere la precedenza. Contrassegna come `Duplica`, incolla il seguente messaggio sostituendo `#XXXXX` con il numero di rilascio, quindi chiudi il problema.

   > Grazie per aver segnalato questo problema.
   > 
   > Questo è un messaggio standard che ti avvisa che questo problema sembra essere molto simile al problema #XXXXX, così lo sto chiudendo come un duplicato.
   > 
   > Se pensi che io abbia torto nel chiudere questo problema, riaprilo e aggiungi ulteriori chiarimenti. Grazie e codifica felice.

4. **Risolto nello staging** Alcuni problemi potrebbero essere già stati risolti nello staging, ma non c'è un problema GitHub associato a loro. Se questo è il caso, è possibile incollare il seguente messaggio, chiudere il problema e aggiungere un `stato: risolto/shipping` etichetta:

   > Grazie per aver segnalato questo problema.
   > 
   > Questo è un messaggio standard che ti informa che il problema che hai menzionato qui è presente nella produzione, ma che è già stato fissato in staging. Ciò significa che la prossima volta che spingeremo il nostro ramo di staging alla produzione, questo problema dovrebbe essere risolto. Per questo motivo, sto chiudendo questo problema.
   > 
   > Se pensi che io abbia torto nel chiudere questo problema, riaprilo e aggiungi ulteriori chiarimenti. Grazie, e la codifica felice.

### Stale di chiusura, problemi non attivi, obsoleti e richieste di ritiro

- Problemi temporanei o PR sono quelli che non hanno visto alcuna attività dal PO per 21 giorni (3 settimane dall'ultima attività), ma solo dopo che un moderatore ha richiesto maggiori informazioni/modifiche.  Questi possono essere chiusi in uno script automatizzato/bot o dai moderatori stessi.

- L'attività è definita come: Commenti che richiedono un aggiornamento sulla PR e triages come `status: aggiornamento necessario` etichetta ecc.

- Se il PO richiede assistenza supplementare o anche tempo, quanto sopra può essere rilassato e rivisitato dopo una risposta è dato. In ogni caso le mod dovrebbero utilizzare il loro giudizio migliore per risolvere lo status di PR.

### Altre linee guida per i Moderatori su GitHub

Anche se avrai accesso in scrittura al repository di freeCodeCamp, **non dovresti mai inviare il codice direttamente ai repository freeCodeCamp**. Tutto il codice dovrebbe inserire il codebase di freeCodeCamp sotto forma di una pull request da un fork del repository.

Inoltre, non dovresti mai accettare i tuoi PR. Devono essere QA'd da un altro moderatore, proprio come con qualsiasi altra PR.

Se noti che qualcuno infrange il [codice di condotta](https://code-of-conduct.freecodecamp.org) sui problemi di GitHub, o apertura di richieste pull con contenuti o codice dannosi, email dev@freecodecamp. rg con un link alla richiesta di pull offensiva e possiamo prendere in considerazione la possibilità di vietarli completamente dall'organizzazione GitHub di freeCodeCamp.

# Moderazione del Forum

Come moderatore, aiutate a mantenere la nostra comunità un luogo piacevole per chiunque impara e ottenere aiuto. Si occuperà di messaggi contrassegnati e gestire spam, off-topic, e altre conversazioni inappropriate.

Nota che una volta che sei un moderatore sul forum, inizierai a vedere i suggerimenti del moderatore blu sui membri del forum, come "questa è la prima volta [person] ha pubblicato - diamo il benvenuto alla comunità! o "[person] non ha pubblicato da molto tempo - diamo loro il benvenuto indietro."

![Un messaggio di testo blu che dice "questa è la prima volta [person] ha pubblicato - diamo il benvenuto alla comunità!](https://i.imgur.com/mPmVgzK.png)

Queste sono opportunità per voi di accoglierli e farli sentire extra speciale. Non si sa mai quale persona è marginalmente coinvolta può diventare il nostro prossimo super-aiutante, aiutando molte altre persone nel loro viaggio di programmazione. Anche la più piccola gentilezza può innescare una cascata di buone azioni.

### Eliminazione dei post del forum

I moderatori del forum hanno la possibilità di eliminare i post dell'utente. Si dovrebbe fare questo solo per le seguenti istanze:

1. Qualcuno ha pubblicato un'immagine pornografica o graficamente violenta.
2. Qualcuno ha pubblicato un link o un codice che è dannoso in natura, e potrebbe danneggiare altri campeggiatori che cliccano su di esso.
3. Qualcuno ha inondato un thread con molti messaggi di spam.

### Affrontare lo spam

Per il primo post spam di un utente, inviare loro un messaggio che spieghi il problema e rimuovere il link o post a seconda dei casi. Lascia una nota sul profilo dell'utente che spiega l'azione intrapresa. Se il problema persiste, seguire il processo di cui sopra. Blocca silenziosamente l'utente dalla pubblicazione (utilizzando l'opzione di silenzio sul pannello di amministrazione utente), quindi invia un avviso con il Codice di condotta. Seleziona la casella nel messaggio privato che indica che il tuo messaggio è un "avviso formale".

Puoi fare domande e segnalare gli incidenti nella sezione [del forum dello staff](https://forum.freecodecamp.com/c/staff).

### Affrontare conversazioni off-topic

I post o gli argomenti che sembrano essere nel posto sbagliato possono essere riclassificati o rinominati in qualsiasi cosa sarebbe appropriato.

In circostanze eccezionali, può essere opportuno che un moderatore condiscenda una discussione in più discussioni.

Ancora una volta, se hai problemi o domande, fai un post con le tue azioni nella categoria Staff, e tagga un altro moderatore se vuoi che riveda le tue azioni moderatrici.

### Utenti Minori

I nostri Termini di Servizio richiedono che gli utenti di freeCodeCamp abbiano almeno 13 anni di età. Nel caso in cui un utente riveli che sono sotto i 13 anni, invia loro il messaggio seguente e cancella il loro account del forum (se la cancellazione non è disponibile, sospendere l'account è sufficiente). Quindi email [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) o [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) per eliminare anche l'account freeCodeCamp dell'utente.

```markdown
OGGETTO: Gli utenti sotto i 13 anni non possono utilizzare il forum per i Termini di Servizio

È venuto alla nostra attenzione che tu abbia meno di 13 anni. Per [freeCodeCamp termini di servizio](https://www.freecodecamp.org/news/terms-of-service), devi avere almeno 13 anni per utilizzare il sito o il forum. Elimineremo sia il tuo account freeCodeCamp che il tuo account del forum. Questa restrizione ci mantiene nel rispetto delle leggi statunitensi.

Si prega di ricollegarsi una volta che hai raggiunto almeno 13 anni di età.

Grazie per la comprensione.
```

# Moderazione Di Facebook

Se vedi qualcosa che sembra infrangere il nostro [Codice di Condotta](https://code-of-conduct.freecodecamp.org/), dovresti eliminarlo immediatamente.

A volte la gente pubblicherà cose che pensano siano divertenti. Non si rendono conto che quello che hanno detto o quello che hanno condiviso potrebbe essere interpretato come offensivo. In questi casi, il loro post dovrebbe essere cancellato, ma la persona che lo ha postato non deve necessariamente essere vietato. Ottenendo il loro post eliminato, si spera di venire a capire che ciò che hanno pubblicato era inappropriato.

Ma se si tratta di un'offesa egregia che non può essere ragionevolmente attribuita ad una differenza culturale o ad un malinteso della lingua inglese, allora si dovrebbe considerare fortemente di bloccare il membro dal gruppo Facebook.

# Discord Moderatore

Ecco come i moderatori affrontano le violazioni del nostro [Codice di condotta](https://code-of-conduct.freecodecamp.org/) su Discord:

1. **Assicurarsi che fosse destinato a violare il Codice di condotta.** Non tutte le violazioni del CoC erano intese come tali. Un nuovo camper potrebbe postare una grande quantità di codice per aiuto, ignaro che questo può essere considerato spamming. In questi casi, puoi solo chiedere loro di incollare il loro codice con servizi come Codepen o Pastebin.

2. **Se il camper viola chiaramente il Codice di condotta, il moderatore procederà come segue:**

- Sospendere il camper offensivo, ma non avvertirli o minacciarli. Invece, tranquillamente dare loro il ruolo Sospeso su Discord, quindi inviare loro il seguente messaggio:

```
Questo è un messaggio standard che ti avvisa che ho dovuto temporaneamente sospenderti dal parlare sul server freeCodeCamp Discord.

Sono un moderatore che agisce a nome della nostra comunità open source. Posso considerare di rimuovere la tua sospensione, ma ho bisogno che tu prenda prima i seguenti 3 passi:

1. Leggi il nostro codice di condotta: https://code-of-conduct.freecodecamp.org/
2. Inviami un messaggio confermando che hai finito di leggerlo. 3. Spiegami perché pensi di averti sospeso e perché dovrei rimuovere la tua sospensione.
```

- Segnala un breve riassunto dell'evento e come hanno risposto ad esso nel canale #admin. Ecco un esempio di come potrebbe apparire un tale riassunto:

```
Sospeso: _@username_
Motivo(i): _Spamming, trolling_
Evidenza: _Uno o più link ai messaggi offensivi_
CoC: _Sent_
```

- Un rapporto per la rimozione di una sospensione dovrebbe assomigliare:

```
Ho rimosso la sospensione da ` @username `. Ho inviato loro il Codice di condotta. Proprio oggi si sono resi conto di essere stati sospesi e scusati per quello che hanno fatto.
```

- Sulla base della risposta dei trasgressori, il moderatore deciderà se rimuovere la sospensione dal camper offensivo. Se sembrano rispettosi e apologetici, il moderatore può rimuovere la sospensione. Per quanto riguarda la politica, i moderatori saranno educati durante questo processo, non importa quanto male il camper offendente si sia comportato. Se non sono rispettosi o non disposti ad accettare il CdC, la sospensione dovrebbe essere seguita con un divieto dal server di Discord. Utilizzare lo stesso riassunto di cui sopra, ma sostituire "Sospendiato:" con "Banned:".

3. **Come bandire e/o non vietare**

- Per vietare qualcuno, fare clic con il tasto destro sul nome utente/immagine del profilo e selezionare "Ban <username>". Ti verrà data l'opzione di eliminare i messaggi precedenti - selezionare "Non eliminare alcuni", poiché i messaggi devono rimanere presenti come record storico.
- Se si decide di vietare qualcuno, significa che non sono disposti a rispettare il nostro codice di condotta. Quindi lo sviamento di un Camper dovrebbe raramente accadere. Tuttavia, se si verifica la necessità, è possibile farlo facendo clic sul nome del server, scegliendo "Impostazioni server", scegliendo "Bans", selezionando l'utente che si desidera smettere e facendo clic su "Revoca Ban".

Discord Bans sono globali - non è possibile vietare un utente da un canale specifico, solo da tutto il server.

4. **Eliminazione dei messaggi** I moderatori hanno la possibilità di eliminare i messaggi su Discord. Essi dovrebbero esercitare questa capacità solo in quattro situazioni molto specifiche:

- Qualcuno ha pubblicato un'immagine pornografica o graficamente violenta.
- Qualcuno ha pubblicato un link o un codice che è dannoso in natura, e potrebbe danneggiare altri campeggiatori che cliccano su di esso.
- Qualcuno ha inondato la chat con un sacco di messaggi di spam in una misura così estrema (di solito coinvolgendo bot) da rendere la chat completamente inutilizzabile.
- Qualcuno ha pubblicato pubblicità e / o un messaggio / immagine di auto-promozione (social media).

In tutte le altre situazioni - anche in quelle in cui il codice di condotta è violato - i moderatori non dovrebbero cancellare il messaggio in quanto si tratta di un importante record storico. Quando si elimina un messaggio, assicurarsi di prendere prima uno screenshot di esso! Lo screenshot può essere registrato nel canale #mod-log, ma per il #activity-log è sufficiente dire che le prove sono state "rimosse a causa di contenuti sensibili". Nota: Se il messaggio contiene materiale che sarebbe illegale prendere uno screenshot di, copia invece il link del messaggio - inserisci quel link a @raisedadead per inoltrare al team di Discord Trust and Safety.

5. **Non usare @all o @here** Non usare @all o @here in nessuna circostanza! Ogni singola persona in quella stanza di chat riceverà una notifica. In alcuni casi, decine di migliaia di persone. Invece, se si desidera che le persone vedano un annuncio, si può pin al canale per consentire a tutti di leggerlo.

6. **Non minacciare di bandire o sospendere** Se un camper sta violando il codice di condotta, non minacciare di bandirli o sospenderli, e non metterli mai in guardia in pubblico. Invece, parlare con loro in privato, o inviare loro un DM e emettere una sospensione (per il protocollo di cui sopra). Nessun altro in quel canale deve sapere che hai bannato / sospeso la persona - i campeggiatori possono visualizzare il riassunto nel canale #activity-log se vogliono tenere il passo su tali informazioni. Se una violazione era chiaramente involontaria e non garantisce una sospensione o una conversazione privata, rendere il camper offendente consapevole della sua / le sue azioni senza farlo venire attraverso come un avvertimento. Per esempio:

- Camper pubblica un muro di codice per richiedere aiuto

  Moderatore: @username Si prega di utilizzare Codepen o Pastebin quando si pubblicano grandi quantità di codice.

- O se dovete davvero spiegare perché:

  Moderatore: @username Si prega di utilizzare Codepen o Pastebin quando si pubblicano grandi quantità di codice, perché interrompe la chat per tutti e potrebbe essere considerato spamming secondo il nostro Codice di condotta.

- Per violazioni lievi e involontarie del codice di condotta

  Moderatore: Questo è un promemoria amichevole per tutti di seguire il codice di condotta: https://code-of-conduct.freecodecamp.org/

7. **Non vantarsi di essere un moderatore** Non vederti come sopra la comunità. Tu sei la comunità. E la comunità si è fidata di te per aiutare a proteggere qualcosa di raro che tutti condividiamo - un posto _accogliente_ per i nuovi sviluppatori. Se ti vanti di essere un moderatore, le persone possono sentirsi a disagio intorno a te, allo stesso modo in cui le persone possono sentirsi a disagio intorno a un agente di polizia, anche se non stanno facendo nulla di sbagliato. Questa è solo la natura umana.

8. **Non contraddire altri moderatori** Se non sei d'accordo con l'azione di un moderatore, parlare con loro in privato o portarlo in su nel canale #mod-chat. Non sovrascrivere mai un divieto, e non contraddire mai gli altri moderatori pubblicamente. Invece, avere una discussione a testa fredda in mod-chat e convincere il moderatore che essi stessi dovrebbero invertire il loro divieto o modificare il loro punto di vista. Ricorda: siamo tutti nella stessa squadra. Vogliamo dignizzare il ruolo dei moderatori e presentare un fronte unitario.

9. **Parla con altri moderatori** Abbiamo una stanza solo per i moderatori. Usalo! Se ti senti a disagio con come gestire una certa situazione, chiedi aiuto ad altri moderatori. Se pensate che qualcosa dovrebbe essere discusso, fatelo. Fai parte del team e apprezziamo il contributo di ogni membro del team! Anche se si è completamente in disaccordo con nulla in queste linee guida o il Codice di condotta!

10. **Temporaneamente inattivo** Se non vuoi essere attivo come Moderatore per un po' a causa delle vacanze, malattia o qualsiasi altro motivo, assicurati di far sapere agli altri nel canale #mod-chat. Questo è quindi sappiamo se possiamo contare su di voi per essere regolarmente attivi nel server o no.

# Come diventare un moderatore

Se stai aiutando costantemente le persone della comunità nel corso del tempo, il nostro Team Moderatore alla fine prenderà nota, e uno di loro vi menzionerà come un possibile moderatore per [il nostro staff](https://forum.freecodecamp.org/g/Team). Non ci sono scorciatoie per diventare un moderatore.

Se sei approvato, ti aggiungeremo ai nostri Team Moderatori su [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), ecc.

> [!NOTA] > **Per GitHub:** Dopo essere stato accettato come moderatore, riceverai un invito al repository Github. Dovrai dirigerti verso [Free CodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) per poter accettare l'invito. Questo è necessario per noi per essere in grado di darti accesso in scrittura su alcuni dei nostri depositi.

# Come ritiriamo moderatori inattivi

Si prega di notare che rimuoveremo frequentemente le mod che pensiamo siano inattive. Quando lo faremo invieremo il seguente messaggio:

> Questo è un messaggio standard che ti avvisa che, dal momento che non sembri essere stato un moderatore attivo di recente, ti stiamo rimuovendo dal nostro team di Moderatori. Apprezziamo profondamente il vostro aiuto in passato.

> Se pensi che abbiamo fatto questo per errore, o una volta che sei pronto a tornare e contribuire di più, rispondi a questo messaggio che mi fa sapere.

# Come funziona la nostra sala Contributori

Chiunque è benvenuto nella sala [Contributori sul nostro Discord](https://discord.gg/KVUmVXA). È la stanza di chat designata per moderatori e altri campeggiatori che stanno contribuendo alla nostra comunità in qualsiasi modo, anche attraverso gruppi di studio.

Il nostro presupposto è che i collaboratori leggeranno qualsiasi cosa in questa stanza che li menziona direttamente con un `@username`. Tutto il resto è opzionale. Ma sentitevi liberi di leggere tutto ciò che chiunque scrive lì e interagire.

# Trattare con gli avvocati

Potresti essere contattato da organizzazioni che vogliono collaborare o co-brand con freeCodeCamp in qualche modo. Una volta che ti rendi conto che questo è quello che sono dopo, smettere di parlare con loro e dire loro per e-mail quincy@freecodecamp.org. Egli ottiene proposte come questo tutto il tempo ed è nella posizione migliore per valutare se un tale rapporto vale la pena per la nostra comunità (e raramente).

# Affrontare le indagini sanitarie (mentali)

Si possono incontrare situazioni in cui gli utenti stanno cercando consulenza medica o stanno affrontando problemi di salute mentale e sono alla ricerca di supporto. Per quanto riguarda la politica, si dovrebbe evitare di parlare privatamente di questi temi. Se la situazione a un certo punto riflettesse indietro a fCC, vogliamo avere la conversazione(i) sul record. Rendere chiaro che non siamo professionisti medici e che si incoraggia l'utente a trovare aiuto professionale. Come difficile come a volte può essere, evitare di dare consigli o consigli diversi da indicare l'utente nella direzione di aiuto professionale!

Se questo accade su Discord: Sospendi l'utente. Questo non è quello di punirli! Sospendendo un utente creerà un canale privato accessibile solo dall'utente e dal team. Ciò andrà a vantaggio sia dell'utente che della fCC in diversi modi:

- L'utente è garantito un po' di privacy
- La chat pubblica non è più interrotta
- Altri membri del team possono piazzare in, se si è a disagio affrontare la situazione da soli

> [!NOTA] Sospendere un utente dà loro automaticamente un messaggio sulla lettura del nostro Codice di condotta. Assicurati di informare l'utente che li hai sospesi per dare loro una certa privacy e che non vengono puniti. Questo è molto importante! Vogliamo assolutamente evitare di dare agli utenti l'idea che sono puniti per aver raggiunto per ottenere aiuto!

Se credi che l'utente sia in grado di ricongiungersi alla comunità, fai clic con il tasto destro sul canale privato e copia l'ID. Inserisci il seguente messaggio in #mod-log:

> Consulenza medica di riferimento: <channel ID> <username>

Dopo di che, è possibile rimuovere la sospensione dall'utente come si fa normalmente.

URL utili:

http://www.suicide.org/international-suicide-hotlines.html

# Una nota sulla libertà di parola

A volte le persone difenderanno qualcosa di offensivo o incendiario che hanno detto come "discorso libero".

Questo fumetto XKCD riassume perfettamente i pensieri della maggior parte delle comunità sulla libertà di parola. Quindi, se qualcuno difende qualcosa che sta dicendo come "discorso libero" sentitevi liberi di inviarlo a loro.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Grazie per aver letto questo, e grazie per aver aiutato la comunità degli sviluppatori!

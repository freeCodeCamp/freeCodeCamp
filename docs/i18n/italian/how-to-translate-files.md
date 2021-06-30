# Come tradurre le risorse di freeCodeCamp

Abbiamo il sogno di offrirti le risorse per imparare, non importa in che lingua del mondo tu parli. Per aiutarci con questo enorme sforzo, abbiamo integrato il nostro codebase open-source e il nostro curriculum con [Crowdin](https://crowdin.com/), uno strumento per aiutarci nella localizzazzione (cioè la traduzione nei vari "locale") del codebase.

Il workflow della traduzione è diviso in due attività principali:

- **Tradurre** i file del curriculum, la documentazione ed elementi dell'interfaccia come pulsanti, etichette, ecc.:

  Come traduttore puoi iscriverti alla [nostra piattaforma di traduzione](https://translate.freecodecamp.org) e contribuire a tradurre in una qualsiasi delle oltre 30 lingue disponibili sulla piattaforma.

- **Revisionare** (Proofread) le traduzioni per gli elementi nominati in precedenza.

  I revisori verificano che le traduzioni contribuite dalla community abbiano un tono uniforme e non abbiano problemi comuni come errori di spelling, ecc. In breve, si occupano di assicurare un'alta qualità della traduzione. Nota che non usiamo traduzioni automatiche per una ragione.

> [!WARNING] Non stiamo più usando GitHub per tradurre i file direttamente, se sei un contributore di vecchia data dirigiti invece alla [piattaforma di traduzione](https://translate.freecodecamp.org/).

## Preparati a contribuire

> La mappa per la localizzazione di freeCodeCamp – Non ci sono limiti di velocità

Puoi tradurre quanto vuoi, quando vuoi. È solo una questione di quanto tempo ed energie vuoi investire come traduttore volontario.

Chiediamo solo che tu comprenda i seguenti punti:

1. **Le traduzioni sono uno sforzo di gruppo.**

   Tradurre le risorse di freeCodeCamp è una delle esperienze più divertenti e gratificanti come contributore, e funziona meglio se coivolgi i tuoi amici e colleghi che parlano la tua stessa lingua.

   Raccomandiamo di unirti al [forum della community](https://forum.freecodecamp.org/c/contributors/3) e alla [chat room dei contributori](https://chat.freecodecamp.org/channel/contributors) con i tuoi amici e mostrare il tuo interesse prima di iniziare a tradurre. Crowdin rende più facile contribuire alle traduzioni, ma richiede comunque un sacco di lavoro.

   Vogliamo che ti diverta a contribuire e che tu non soffra di burnout o perda interesse.

   Un piccolo gruppo di 4-5 persone è una buona dimensione per iniziare la nicchia per la tua lingua. Puoi quindi reclutare ancora più amici perché si uniscano alla squadra.

2. **Costa un sacco creare i server per ogni lingua.**

   In superficie lo stack tecnico può non sembrare complicato, ma costa un sacco tenere i motori in funzione. Questo include mettere in piedi server aggiuntivi e dedicare personale a controllarli.

   freeCodeCamp.org si impegna a offrire queste cose gratuitamente come sempre, ma dobbiamo dare priorità alle risorse per chi ne ha più bisogno. L'ultima cosa che vogliamo è dover disattivare i server per una lingua se l'attività di traduzione si ferma e il materiale diventa obsoleto.

   Una volta che una lingua raggiunge almeno alcune certificazioni del curriculum possiamo iniziare a mettere la lingua live su [`/learn`](https://www.freecodecamp.org/learn), mentre continuate a tradurre le restanti certificazioni.

   Per esempio, vorremmo fare il deploy almeno di tutte le certificazioni front-ent quando attiviamo una nuova lingua per la prima volta.

3. **E per le lingue non elencate sulla piattaforma di traduzione?**

   Abbiamo analizzato la nostra user base e aggiunto le 30+ lingue più usate alla lista delle lingue disponibili sulla piattaforma di traduzione. Al momento alcune lingue come cinese, spagnolo e italiano sono già disponibili live su **"/learn"**.

   Sfortunatamente, la lista non include centinaia di lingue esistenti. Abbiamo dozzine di richieste da contributori come te ogni giorno che vogliono aiutare a tradurre il sito in una lingua che parlano.

   Vogliamo decisamente aggiungere più lingue alla lista, ma come puoi già indovinare, questo è fattibile soltanto se raggiungiamo un sufficiente momento per una certa lingua.

   Se vuoi includere una nuova lingua, ti raccomandiamo di entusiasmare i tuoi amici.

   Una volta che avrai un piccolo gruppo di persone (almeno 4-5) interessate e volenterose a impegnarsi, potremo fare una videochiamata. Spiegheremo tutti i dettagli e vi guideremo nell'uso degli strumenti e sui processi.

## Iniziare

Come prima cosa, assicurati di venire a presentarti nella [chat room dei contributori](https://chat.freecodecamp.org/channel/contributors). Postiamo aggiornamenti regolari sulla traduzione delle risorse e rispondiamo a un sacco delle vostre domande lì.

Poi, vai alla nostra [piattaforma di traduzione](https://translate.freecodecamp.org/) e fai login (se è la prima volta che contribuisci alle traduzioni, dovrai creare un account).

Infine, segui la guida dettagliata qua sotto per capire come funzionano gli strumenti di traduzione e il workflow a tua disposizione.

Buona traduzione.

## Selezionare un progetto e un file

Quando visiti la piattaforma di traduzione, dovresti vedere vari °progetti° disponibili per la traduzione:

1. Il progetto della [documentazione per contribuire (Contributing documentation)](https://translate.freecodecamp.org/contributing-docs) che contiene i file per questo sito di documentazione.
2. Il progetto del [Coding Curriculum](https://translate.freecodecamp.org/curriculum), che contiene i file delle sfide del curriculum per programmatori.
3. Il progetto dell'[interfaccia della piattaforma di apprendimento (Learn User Interface)](https://translate.freecodecamp.org/learn-ui), che contiene le stringhe per gli elementi dell'interfaccia come pulsanti, etichette, ecc.

Seleziona il progetto a cui vuoi contribuire, e vedrai una lista con le lingue disponibili per la traduzione.

![Immagine - Lista delle lingue disponibili](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Seleziona la lingua su cui vuoi lavorare, e vedrai l'albero dei file completo.

![Immagine - Lista dei file disponibili](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Ogni file e cartella mostrerà una barra di avanzamento. La parte **blu** della barra di avanzamento indica che percentuale del file è stata tradotta, mentre la parte **verde** indica quale percentuale del file è stata approvata dal team di revisione.

Seleziona un file su cui lavorare e Crowdin aprirà l'editor.

> [!NOTE] Quando l'editor si apre, dovrai cliccare sull'icona delle impostazioni (ha la forma di un ingranaggio) e mettere l'opzione 'HTML tags displaying' (mostrare i tag HTML) su 'SHOW' (mostra). Questo fa in modo che tu possa vedere i tag come `<code></code>` invece di `<0></0>`.

## Tradurre il curriculum

![Immagine - Editor View](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin separa un documento in "stringhe" (strings) da tradurre, in genere frasi. Ogni stringa è tradotta individualmente. Con riferimento all'immagine sopra:

1. Una stringa evidenziata in verde ha già una traduzione proposta.
2. Una stringa evidenziata in rosso _non_ ha una traduzione proposta.
3. Una stringa con testo in grigio non è traducibile. Questo è il caso per blocchi di codice e altro contenuto che non deve essere tradotto. Non sarai in grado di selezionare queste stringhe nell'editor.
4. Se un contributore ha già proposto una traduzione ad una stringa, Crowdin mostrerà qui queste proposte. Non sarai in grado di salvare una traduzione identica, invece se una traduzione è accurata dovresti usare l'icona `+` per darle un voto positivo. Una traduzione che è inaccurata può ricevere un voto negativo con l'icona `-`.
5. Crowdin proporrà delle traduzioni basate su Memoria di Traduzione (Translation Memory - TM) e Traduzioni Automatiche (Machine Translation - MT). La Memoria di Traduzione si riferisce a stringhe simili o identiche che sono state tradotte/approvate in altri file. Le Traduzioni Automatiche si riferiscono a traduzioni raccomandate dalla loro libreria integrata.
6. Questo è il pannello di modifica, dove puoi scrivere la tua proposta di traduzione per la stringa selezionata.
7. La stringa attualmente selezionata nell'editor è evidenziata in giallo.
8. Qui vedrai dei tag indicanti lo stato della stringa. `Done` significa che la stringa ha almento una traduzione proposta. `Todo` significa che la stringa non ha alcuna proposta di traduzione.
9. Qui puoi vedere la finestra dei commenti. Se hai domande o dubbi su una particolare stringa, puoi lasciare un commento sulla stringa qui perché altri traduttori li vedano.
10. Questi due pulsanti dei pannelli nasconderanno i pannelli a sinistra (documento) e a destra (commenti).

> [!NOTE] Se vedi una stringa nascosta (hidden string) che include una traduzione, per favore faccelo sapere usanto la [chat room dei contributori](https://chat.freecodecamp.org/channel/contributors) così potremo rimuovere la traduzione dalla memoria.

Quando hai finito la traduzione per una stringa, usa il pulsante `Save` per salvare la tua traduzione in Crowdin. Altri contributori potranno quindi votare la tua traduzione e i revisori potranno approvarla.

Sentiti libero di tradurre quante stringhe vuoi, non ci sono step additionali richiesti quando completi un intero file o proponi una nuova traduzione. Usare il pulsante `Save` è tutto quello che serve per memorizzare una traduzione.

> [!NOTE] Se vedi qualcosa nel file originale inglese che è inaccurato o non corretto, per favore non aggiustarlo con il processo di traduzione. Invece lascia un commento sulla stringa per farci sapere che c'è una discrepanza o crea una issue su GitHub.

## Tradurre la Documentazione

Tradurre la documentazione per contribuire è un processo simile alla traduzione dei file del curriculum.

> [!NOTE] La documentazione per contribuire è creata tramite `docsify`, e ci sono regole speciali per riquadri di messaggio come questo. Se vedi una stringa che inizia con `[!NOTE]`, `[!WARNING]`, o `[!TIP]`, queste parole non devono essere tradotte.

## Votare le traduzioni

Crowdin ti permette di votare le proposte di traduzione esistenti. Se provi a salvare una traduzione, potresti vedere un messaggio che indica che non puoi salvare una traduzione duplicata: questo significa che un altro contributore ha proposto una traduzione identica. Se sei d'accordo con quella traduzione, usa il pulsante `+` per darle un voto positivo.

Se vedi una traduzione che non è accurata o non è chiara come la stringa originale, usa il pulsante `-` per darle un voto negativo.

Crowdin usa questi voti per dare un punteggio alle proposte di traduzione per una stringa, e questo aiuta il gruppo di revisione a determinare quale traduzione è la migliore per ogni stringa.

## Controlli di qualità

Abbiamo attivato alcuni step per il controllo di qualità che verificano che una traduzione sia per quanto possibile accurata: questo aiuta il team di revisione a revisionare le traduzioni proposte.

Quando provi a salvare una traduzione, potresti vedere un messaggio di errore apparire relativamente alla tua proposta di traduzione.

![Immagine - Messaggio di errore del controllo qualità](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

Questo messaggio appare quando il sistema QA (Quality Assurance) di Crowdin identifica un potenziale errore nella traduzione proposta. In questo esempio, abbiamo modificato il testo di un tag `<code>` e Crowdin se ne è accorto.

> [!WARNING] Hai la possibilità di salvare una traduzione anche se ci sono degli errori. Se lo fai usando il pulsante "Save Anyway" (Salva comunque), dovresti anche taggare un proofreader o un project managet e spiegare perché il messaggio QA dovrebbe essere ignorato in questo caso.

## Buone pratiche per le traduzioni

Segui queste linee guida per assicurati che le nostre traduzioni siano il più possibile accurate:

- Non tradurre il contenuto dei tag `<code>`. Questi tag indicano testo trovato nel codice e dovrebbero essere lasciati in inglese.
- Non inserire contenuto aggiuntivo. Se pensi che una sfida richieda delle modifiche nel testo o informazioni aggiuntive dovresti proporre i cambiamenti tramite una issue su GitHub o una pull request che modifica i file inglesi.
- Non cambiare l'ordine del contenuto.

Se hai domande, scrivi nella [chat room per i contributori](https://chat.freecodecamp.org/channel/contributors) e saremo lieti di assisterti.

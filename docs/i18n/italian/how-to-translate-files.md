# Come tradurre le risorse di freeCodeCamp

## Preparati a contribuire

> Il piano d'azione per la localizzazione di freeCodeCamp – Non ci sono limiti di velocità

> [!TIP] Puoi iniziare a leggere [questo articolo](https://www.freecodecamp.org/italian/news/come-aiutare-a-tradurre-freecodecamp-nella-tua-lingua/). Ti raccomandiamo di unirti al [forum della nostra comunità](https://forum.freecodecamp.org/c/contributors/3) e alla [chat Discord](https://discord.gg/PRyKn3Vbay).

Puoi tradurre quanto vuoi e quando vuoi. È solo una questione di quante energie e quanto tempo desideri impiegare come traduttore volontario.

Ti chiediamo soltanto di comprendere che:

1. **Le traduzioni sono uno sforzo di gruppo.**

   Tradurre le risorse di freeCodeCamp è una delle esperienze più divertenti e gratificanti come contributore, e funziona meglio se coinvolgi i tuoi amici e colleghi che parlano la tua stessa lingua.

   Puoi iniziare leggendo [questo articolo](https://www.freecodecamp.org/italian/news/come-aiutare-a-tradurre-freecodecamp-nella-tua-lingua/). Ti raccomandiamo di unirti al [forum della nostra community](https://forum.freecodecamp.org/c/contributors/3) e alla [chat Discord](https://discord.gg/PRyKn3Vbay) insieme ai tuoi amici e di manifestare il tuo interesse prima di iniziare con la traduzione. Crowdin e altri strumenti renderanno più semplice contribuire alla traduzione, ma c'è comunque tanto lavoro da fare.

   Vogliamo che tu ti diverta a contribuire e non che ti annoi e perda interesse.

   Un piccolo gruppo di 4-5 persone è una buona dimensione per iniziare la nicchia per la tua lingua. Poi, puoi reclutare ancora più amici perché si uniscano alla squadra.

2. **Costa un sacco creare i server per ogni lingua.**

   In superficie lo stack tecnico può non sembrare complicato, ma costa un sacco tenere i motori in funzione. Questo include avere dei server aggiuntivi e il personale incaricato di controllarli.

   freeCodeCamp.org si impegna a offrire queste cose gratuitamente come sempre, ma dobbiamo dare priorità alle risorse per chi ne ha più bisogno. L'ultima cosa che vogliamo è dover disattivare i server per una lingua se l'attività di traduzione si ferma e il materiale diventa obsoleto.

   Per tradurre il curriculum, una volta che la lingua raggiunge almeno qualche certificazione tradotta, possiamo iniziare a metterle live su [`/learn`](https://www.freecodecamp.org/learn), mentre continui a tradurre le certificazioni rimanenti.

   Per esempio, vorremmo fare il deploy almeno di tutte le certificazioni front-ent quando attiviamo una nuova lingua per la prima volta.

3. **E per le lingue non elencate sulla piattaforma di traduzione?**

   Abbiamo analizzato la nostra user base e aggiunto le 30+ lingue più usate alla lista delle lingue disponibili sulla piattaforma di traduzione. Al momento alcune lingue come cinese, spagnolo e italiano sono già disponibili live su **"/learn"**.

   Sfortunatamente, la lista non include centinaia di lingue esistenti. Abbiamo dozzine di richieste da contributori come te ogni giorno che vogliono aiutare a tradurre il sito in una lingua che parlano.

   Vogliamo decisamente aggiungere più lingue alla lista, ma come puoi già indovinare, questo è fattibile soltanto se raggiungiamo un coinvolgimento sufficiente per una certa lingua.

   Se vuoi includere una nuova lingua, ti raccomandiamo di entusiasmare i tuoi amici.

   Una volta che avrai un piccolo gruppo di persone (almeno 4-5) interessate e volenterose a impegnarsi, potremo fare una videochiamata. Spiegheremo tutti i dettagli e vi guideremo nell'uso degli strumenti e sui processi.

## Panoramica di Crowdin

Il nostro sogno è fornirti le risorse per imparare, indipendentemente dalla lingua che parli. Per aiutarci con questo enorme sforzo, abbiamo integrato i nostri codebase & curriculum open source con [Crowdin](https://crowdin.com/) - Uno strumento che ci supporta nella localizzazione del codebase.

> [!NOTE] Utilizziamo uno strumento e una procedura differenti per la traduzione degli [articoli](https://www.freecodecamp.org/news). Se sei davvero interessato a tradurre articoli, leggi [questo articolo](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) e rivolgiti al leader della tua lingua.

La procedura di traduzione è divisa in due attività principali:

- **Tradurre** i file del curriculum, la documentazione e gli elementi dell'interfaccia come pulsanti, etichette, ecc.:

  Come traduttore puoi iscriverti alla [nostra piattaforma di traduzione](https://translate.freecodecamp.org) e contribuire a tradurre in una qualsiasi delle oltre 30 lingue disponibili sulla piattaforma.

- **Revisionare** (Proofread) le traduzioni per gli elementi nominati in precedenza.

  I revisori verificano che le traduzioni dei volontari della community abbiano un tono uniforme e non abbiano problemi comuni come errori di spelling, ecc. In breve, si occupano di assicurare un'alta qualità della traduzione. Nota che non usiamo traduzioni automatiche per una ragione.

> [!WARNING] Se hai contribuito in passato e non conosci le novità, sappi che non stiamo utilizzando più GitHub per tradurre file direttamente, quindi dirigiti alla nostra [piattaforma di traduzione](https://translate.freecodecamp.org/).

## Per iniziare

Prima di tutto, passa a salutarci sul nostro [Discord](https://discord.gg/PRyKn3Vbay). Lì postiamo aggiornamenti regolari sulla traduzione delle risorse e rispondiamo a un sacco delle vostre domande.

Poi, vai alla nostra [piattaforma di traduzione](https://translate.freecodecamp.org/) e fai login (se è la prima volta che contribuisci alle traduzioni, dovrai creare un account).

Infine, segui la guida dettagliata qua sotto per capire come funzionano gli strumenti di traduzione e il workflow a tua disposizione.

Buona traduzione.

## Selezionare un progetto e un file

Quando visiti la piattaforma di traduzione, dovresti vedere vari "progetti" disponibili per la traduzione:

1. Il progetto della [documentazione per contribuire (Contributing documentation)](https://translate.freecodecamp.org/contributing-docs) che contiene i file per questo sito di documentazione.
2. Il progetto del [Coding Curriculum](https://translate.freecodecamp.org/curriculum), che contiene i file delle sfide del curriculum per programmatori.
3. Il progetto dell'[interfaccia della piattaforma di apprendimento (Learn User Interface)](https://translate.freecodecamp.org/learn-ui), che contiene le stringhe per gli elementi dell'interfaccia come pulsanti, etichette, ecc.

Seleziona il progetto a cui vuoi contribuire, e vedrai una lista con le lingue disponibili per la traduzione.

![Immagine - Lista delle lingue disponibili](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Seleziona la lingua su cui vuoi lavorare, e vedrai l'albero dei file completo.

![Immagine - Lista dei file disponibili](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Ogni file e cartella mostrerà una barra di avanzamento. La parte **blu** della barra di avanzamento indica che percentuale del file è stata tradotta, mentre la parte **verde** indica quale percentuale del file è stata approvata dal team di revisione.

Seleziona un file su cui lavorare e Crowdin aprirà l'editor.

> [!NOTE] Quando l'editor si apre, dovrai cliccare sull'icona delle impostazioni (settings, mostrata come un ingranaggio) e impostare 'HTML tags displaying' sull'opzione 'SHOW'. Così sarai in grado di vedere i tag come `<code></code>` invece di `<0></0>`.

## Tradurre il Curriculum

![Immagine - Editor View](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin separa un documento in "stringhe" (strings) da tradurre, in genere frasi. Ogni stringa è tradotta individualmente. Con riferimento all'immagine sopra:

1. Una stringa evidenziata in verde ha già una traduzione proposta.
2. Una stringa evidenziata in rosso _non_ ha una traduzione proposta.
3. Una stringa con testo in grigio non è traducibile. Questo è il caso per blocchi di codice e altro contenuto che non deve essere tradotto. Non sarai in grado di selezionare queste stringhe nell'editor.
4. Se un contributore ha già proposto una traduzione per una stringa, Crowdin mostrerà qui queste proposte. Non sarai in grado di salvare una traduzione identica, invece se una traduzione è accurata dovresti usare l'icona `+` per darle un voto positivo. Una traduzione inaccurata può ricevere un voto negativo con l'icona `-`.
5. Crowdin proporrà delle traduzioni basate sulla Memoria di Traduzione (Translation Memory - TM) e Traduzioni Automatiche (Machine Translation - MT). La Memoria di Traduzione si riferisce a stringhe simili o identiche che sono state tradotte/approvate in altri file. Le Traduzioni Automatiche si riferiscono a traduzioni raccomandate dalla loro libreria integrata.
6. Questo è il pannello di modifica, dove puoi scrivere la tua proposta di traduzione per la stringa selezionata.
7. La stringa attualmente selezionata nell'editor è evidenziata in giallo.
8. Qui vedrai dei tag indicanti lo stato della stringa. `Done` significa che la stringa ha almeno una traduzione proposta. `Todo` significa che la stringa non ha alcuna proposta di traduzione.
9. Qui puoi vedere la finestra dei commenti. Se hai domande o dubbi su una particolare stringa, puoi lasciare un commento sulla stringa qui perché altri traduttori li vedano.
10. Questi due pulsanti dei pannelli nasconderanno i pannelli a sinistra (documento) e a destra (commenti).

> [!NOTE] Se vedi una stringa nascosta che include delle traduzioni, per favore, faccelo sapere su [Discord](https://discord.gg/PRyKn3Vbay), così potremo rimuovere la traduzione dalla memoria.

Quando hai finito la traduzione per una stringa, usa il pulsante `Save` per salvare la tua traduzione in Crowdin. Altri contributori potranno quindi votare la tua traduzione e i revisori potranno approvarla.

Sentiti libero di tradurre quante stringhe vuoi, non ci sono step addizionali richiesti quando completi un intero file o proponi una nuova traduzione. Usare il pulsante `Save` è tutto quello che serve per memorizzare una traduzione.

> [!NOTE] Se vedi qualcosa nel file originale inglese che è inaccurato o non corretto, per favore non aggiustarlo con il processo di traduzione. Invece lascia un commento sulla stringa per farci sapere che c'è una discrepanza o crea una issue su GitHub.

## Tradurre l'interfaccia di apprendimento

La nostra interfaccia `/learn` si basa su dei file JSON caricati nel plugin i18n per generare il testo tradotto. Questo processo di traduzione è diviso tra Crowdin e GitHub.

### Su GitHub

I file `links.json`, `meta-tags.json`, `motivation.json` e `trending.json` contengono informazioni che devono essere aggiornate per rispecchiare la tua lingua. Tuttavia, non possiamo caricarle su Crowdin, dato che il contenuto non è adatto per traduzioni individuali.

Questi file verranno probabilmente gestiti dal leader della tua lingua ma sei vuoi puoi [leggere qui come tradurli](language-lead-handbook.md).

### Su Crowdin

> [!ATTENTION] Non modificare i seguenti file con una PR su GitHub.

I file `intro.json` e `translations.json` sono tradotti entrambi su Crowdin, nel progetto Learn User Interface. La traduzione di questi file può essere complicata, dato che ogni singolo valore JSON appare come una singola stringa e a volte manca di contesto.

Tuttavia, le informazioni fornite da `Context` su Crowdin possono aiutarti a capire il ruolo della stringa all'interno della struttura che la contiene.

![Immagine con una freccia che punta alle informazioni di contesto di Crowdin](https://contribute.freecodecamp.org/images/crowdin/context.png)

Se hai domande sul ruolo di una stringa, puoi chiedere informazioni nella nostra [chat per i contributori](https://discord.gg/PRyKn3Vbay).

## Tradurre la documentazione

La traduzione della documentazione per la contribuzione si svolge in modo simile alla traduzione dei file del curriculum.

> [!NOTE] La nostra documentazione per la contribuzione sfrutta `docsify` e abbiamo delle regole particolari per riquadri informativi come questo. Se vedi stringhe che iniziano con `[!NOTE]`, `[!WARNING]` o `[!TIP]`, queste parole NON devono essere tradotte.

### Come tradurre la documentazione con link esterni

Quando lavori sulla traduzione della documentazione per la contribuzione, stai attento ai link esterni che rimandano a sezioni diverse della documentazione.

Assicurati di sostituire l'id della sezione (la parte dopo `#`) con l'id del documento tradotto. Ad esempio, in giapponese:

Prima della traduzione

```
// in HTML
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// in Markdown
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

Dopo la traduzione

```
// in HTML
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// in Markdown
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

I file reali in docs sono scritti in Markdown, ma appaiono come tag HTML su Crowdin.

Puoi scoprire come `docsify` converte una stringa nella tua lingua in un id guardando le pagine tradotte. Se la traduzione non è stata ancora distribuita, puoi avere una preview [eseguendo il sito della documentazione in locale](how-to-work-on-the-docs-theme.md#sservire-localmente-il-sito-di-documentazione).

Puoi avere più informazioni sui  [link esterni in docs qui](how-to-work-on-the-docs-theme.md#howcome-creare-un-link-interno).

## Tradurre LearnToCode RPG

LearnToCode RPG gira su Ren'Py, che utilizza una sintassi speciale per le stringhe tradotte: (Vedi [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- Le frasi da tradurre sono sempre tra virgolette `""`. Queste sono dialoghi o stringhe di UI. Le parole chiave che vengono prima o dopo i dialoghi sono parole chiave di controllo del game engine e saranno spiegate in regole seguenti. Nota che questa prima regola governa le seguenti regole elencate.
- Nel caso di `new "..."`, non tradurre la parola chiave `new`.
- Prefissi come `player`, `annika`, `layla`, `marco` (o varianti come `player happy`, `player @ happy`) non devono essere tradotti. Questi sono le parole chiave per visualizzare correttamente gli sprite dei personaggi nel gioco.
- Suffissi come `nointeract` non devono essere tradotti.
- Non tradurre stringhe tra `[]` e `{}`. Queste sono variabili interpolate e tag di testo. Queste devono rimanere parentesi a mezza larghezza `[]` e `{}` invece delle loro controparti a larghezza intera  `【】` e `「」`
- Non tradurre la parola chiave `nointeract` alla fine di una frase.
- Se proviamo a usare parentesi a larghezza intera `（）` ci sarà un avviso QA. Per evitarlo, usa parentesi a mezza larghezza  `()`

### Esempi

---

#### Prima della traduzione

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- questa è la riga da tradurre. vedi la traduzione sotto
```

#### Dopo la traduzione

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Nota: I tag `[]` e `{}` non devono essere modificati.

---

#### Prima della traduzione

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- traduci questa riga, vedi sotto
```

#### Dopo la traduzione

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Nota: Di nuovo, il prefisso `new` e il tag `{icon=icon-fast-forward}` non devono essere modificati.

---

#### Prima della traduzione

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### Dopo la traduzione

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Nota: `layla @ neutral` e `[player_name]` restano inalterati.

---

#### Prima della traduzione

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### Dopo la traduzione

```renpy
# player "Maybe this is all a dream?" nointeract
player "也许这都是一场梦？" nointeract
```

---

### Nota sulla segmentazione delle frasi in Crowdin

Fai attenzione a come Crowdin segmenta le frasi dei dialoghi circondate da virgolette `""`. Quando stiamo traducendo un dialogo, dobbiamo essere sicuri di mantenere le virgolette di apertura e di chiusura, anche se appaiono in segmenti diversi.

Ecco la riga che deve essere tradotta:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin la divide in tre parti:

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# originale
player @ surprised "{b}Full-stack{/b}
# tradotta, mantenendo le virgolette di apertura `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# originale
What is that?
# tradotta, nessuna virgoletta
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# originale
I better take notes so I can learn more about it."
# tradotta, mantenendo le virgolette di chiusura `"`
我最好做笔记，这样我可以学习更多东西。"
```

## Votare le traduzioni

Crowdin ti permette di votare le traduzioni esistenti. Se tenti di salvare una traduzione, potresti vedere un messaggio che ti avverte che non puoi il duplicato di una traduzione - questo significa che un altro contributore ha già proposto una traduzione identica. Se sei d'accordo con quella traduzione, clicca il pulsante `+` per darle un voto positivo.

Se vedi una traduzione che non è accurata o non fornisce la stessa chiarezza della stringa originale, clicca il pulsante `-` per darle un voto negativo.

Crowdin utilizza questi voti per dare un punteggio a ogni traduzione proposta per una stringa, facilitando il team di revisori che sceglie la traduzione che si adatta meglio a ogni stringa.

## Controlli di Qualità

Abbiamo abilitato alcuni passaggi relativi ai controlli di qualità che verificheranno che una traduzione sia la più accurata possibile - questo aiuta i nostri revisori a valutare le traduzioni proposte.

Quando stai cercando di salvare una traduzione, potresti veder apparire un messaggio di avvertimento con una notifica circa la traduzione proposta.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

Questo messaggio appare quando il sistema QA di Crowdin identifica un potenziale errore nella traduzione proposta.  In questo esempio, abbiamo modificato il testo di un tag `<code>` e Crowdin lo ha notato.

> [!WARNING] Sei in grado di salvare una traduzione nonostante gli errori. Se lo fai, cliccando su "Save Anyway", dovresti anche taggare un revisore o un responsabile del progetto e spiegare perché il messaggio QA deve essere ignorato in questo caso.

## Buone pratiche di traduzione

Segui le linee guida per far sì che le traduzioni siano le più accurate possibile:

- Non tradurre il contenuto dei tag `<code>`. Questi tag indicano testo trovato nel codice e dovrebbero essere lasciati in inglese.
- Non inserire contenuto aggiuntivo. Se pensi che una sfida richieda delle modifiche nel testo o informazioni aggiuntive dovresti proporre i cambiamenti tramite una issue su GitHub o una pull request che modifica i file inglesi.
- Non cambiare l'ordine del contenuto.

Se hai delle domande, puoi contattarci su [Discord](https://discord.gg/PRyKn3Vbay) e saremo felici di aiutarti.

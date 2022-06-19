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

   We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [contributors chat room](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin rende più facile contribuire alle traduzioni, ma richiede comunque un sacco di lavoro.

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

First, make sure you come say "Hi" in our [contributors chat room](https://discord.gg/PRyKn3Vbay). Postiamo aggiornamenti regolari sulla traduzione delle risorse e rispondiamo a un sacco delle vostre domande lì.

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

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [contributors chat room](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

Quando hai finito la traduzione per una stringa, usa il pulsante `Save` per salvare la tua traduzione in Crowdin. Altri contributori potranno quindi votare la tua traduzione e i revisori potranno approvarla.

Sentiti libero di tradurre quante stringhe vuoi, non ci sono step additionali richiesti quando completi un intero file o proponi una nuova traduzione. Usare il pulsante `Save` è tutto quello che serve per memorizzare una traduzione.

> [!NOTE] Se vedi qualcosa nel file originale inglese che è inaccurato o non corretto, per favore non aggiustarlo con il processo di traduzione. Invece lascia un commento sulla stringa per farci sapere che c'è una discrepanza o crea una issue su GitHub.

## Tradurre la Documentazione

Tradurre la documentazione per contribuire è un processo simile alla traduzione dei file del curriculum.

> [!NOTE] La documentazione per contribuire è creata tramite `docsify`, e ci sono regole speciali per riquadri di messaggio come questo. Se vedi una stringa che inizia con `[!NOTE]`, `[!WARNING]`, o `[!TIP]`, queste parole non devono essere tradotte.

### How to translate documentation with internal links

When you work on translating contributing documentation, watch out for internal links targeting a different section of the documentation.

Make sure to replace the id of the target section (the part after `#`) with the id on the translated document. For example, it will look like this in Japanese:

Before translation

```
// in HTML
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// in Markdown
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

After translation

```
// in HTML
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// in Markdown
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

The actual files in docs are written in Markdown, but they will appear as HTML tags on Crowdin.

You can find out how `docsify` converts a string in your language into an id by looking into the translated pages. If the translation is not deployed yet, you can preview it by [running the docs site locally](how-to-work-on-the-docs-theme.md#serving-the-documentation-site-locally).

You can learn more about [internal links in our docs here](how-to-work-on-the-docs-theme.md#how-to-create-an-internal-link).

## Tradurre LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- Le frasi da tradurre sono sempre tra virgolette `""`. Queste sono dialoghi o stringhe di UI. Le parole chiave che vengono prima o dopo i dialoghi sono parole chiave di controllo del game engine e saranno spiegate in regole seguenti. Nota che questa prima regola governa le seguenti regole elencate.
- Nel caso di `new "..."`, non tradurre la parola chiave `new`.
- Prefissi come `player`, `annika`, `layla`, `marco` (o varianti come `player happy`, `player @ happy`) non devono essere tradotti. Questi sono le parole chiave per visualizzare correttamente gli sprite dei personaggi nel gioco.
- Postfissi come `nointeract` non devono essere tradotti.
- Non tradurre stringhe tra `[]` e `{}`. Queste sono variabili interpolate e tag di testo. Queste devono rimanere parentesi a mezza larghezza `[]` e `{}` invece delle loro controparti a larghezza intera  `【】` e `「」`
- Non tradurre la parola chiave `nointeract` alla fine di una frase.
- Se proviamo a usare parentesi a larghezza intera `（）` ci sarà un avviso QA. Per evitarlo, usa parentesi a mezza larghezza  `()`

### Examples

---

#### Prima della traduzione

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- this is the line that needs to be translated. see translation below
```

#### Dopo la traduzione

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Note: The `[]` and `{}` tags should be left intact.

---

#### Prima della traduzione

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- translate this line, see below
```

#### Dopo la traduzione

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

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

Note: `layla @ neutral` and `[player_name]` are left unchanged.

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

### A Note on How Crowdin Segments a Sentence

Pay attention to how Crowdin segments a line of dialogue wrapped between opening and closing quotes `""`. When we are translating the dialogue, we need to make sure to retain the opening and closing quotes, even if the quotes appear in different segments.

This is the line to be translated:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin segments it into three parts like below:

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# translated, keeping the opening quotes `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# translated, no quotes on either side
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# translated, keeping the closing quotes `"`
我最好做笔记，这样我可以学习更多东西。"
```

## Votare le traduzioni

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Controlli di qualità

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING] Hai la possibilità di salvare una traduzione anche se ci sono degli errori. Se lo fai usando il pulsante "Save Anyway" (Salva comunque), dovresti anche taggare un proofreader o un project managet e spiegare perché il messaggio QA dovrebbe essere ignorato in questo caso.

## Buone pratiche per le traduzioni

Follow these guidelines to ensure our translations are as accurate as possible:

- Non tradurre il contenuto dei tag `<code>`. Questi tag indicano testo trovato nel codice e dovrebbero essere lasciati in inglese.
- Non inserire contenuto aggiuntivo. Se pensi che una sfida richieda delle modifiche nel testo o informazioni aggiuntive dovresti proporre i cambiamenti tramite una issue su GitHub o una pull request che modifica i file inglesi.
- Non cambiare l'ordine del contenuto.

If you have any questions, feel free to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.

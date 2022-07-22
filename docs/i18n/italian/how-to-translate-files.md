# Come tradurre le risorse di freeCodeCamp

## Preparati a contribuire

> Il piano d'azione per la localizzazione di freeCodeCamp – Non ci sono limiti di velocità

> [!TIP] You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay).

You can translate as much as you want, when you want. It's only a matter of how much time and energy you are willing to invest as a volunteer translator.

We just ask that you understand the following:

1. **Le traduzioni sono uno sforzo di gruppo.**

   Translating freeCodeCamp's resources is one of the most fun and rewarding experiences as a contributor, and it works best if you involve your friends and colleagues who speak the same world language as you.

   You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin and other tools make it easy to contribute translations, but it's still a lot of work.

   We want you to enjoy contributing and not burn out or lose interest.

   Un piccolo gruppo di 4-5 persone è una buona dimensione per iniziare la nicchia per la tua lingua. You can then recruit even more friends to join the team.

2. **Costa un sacco creare i server per ogni lingua.**

   In superficie lo stack tecnico può non sembrare complicato, ma costa un sacco tenere i motori in funzione. This includes provisioning additional servers and dedicating staff to look after them.

   freeCodeCamp.org si impegna a offrire queste cose gratuitamente come sempre, ma dobbiamo dare priorità alle risorse per chi ne ha più bisogno. L'ultima cosa che vogliamo è dover disattivare i server per una lingua se l'attività di traduzione si ferma e il materiale diventa obsoleto.

   For translating the curriculum, once a language reaches at least a few certifications we can begin deploying the language live on [`/learn`](https://www.freecodecamp.org/learn), while you continue to translate the remaining certifications.

   Per esempio, vorremmo fare il deploy almeno di tutte le certificazioni front-ent quando attiviamo una nuova lingua per la prima volta.

3. **E per le lingue non elencate sulla piattaforma di traduzione?**

   Abbiamo analizzato la nostra user base e aggiunto le 30+ lingue più usate alla lista delle lingue disponibili sulla piattaforma di traduzione. Al momento alcune lingue come cinese, spagnolo e italiano sono già disponibili live su **"/learn"**.

   Sfortunatamente, la lista non include centinaia di lingue esistenti. Abbiamo dozzine di richieste da contributori come te ogni giorno che vogliono aiutare a tradurre il sito in una lingua che parlano.

   We are definitely looking forward to adding more languages to the list, but as you may already guess, it would only be feasible if we get enough momentum around a world language.

   Se vuoi includere una nuova lingua, ti raccomandiamo di entusiasmare i tuoi amici.

   Una volta che avrai un piccolo gruppo di persone (almeno 4-5) interessate e volenterose a impegnarsi, potremo fare una videochiamata. Spiegheremo tutti i dettagli e vi guideremo nell'uso degli strumenti e sui processi.

## Overview of Crowdin

It's our dream to provide you with the resources to learn, no matter the world language you speak. To help us with this massive effort, we have integrated our open-source code-base & curriculum with [Crowdin](https://crowdin.com/) - A tool to help us localize our code-base.

> [!NOTE] We use a different tool and workflow for translating [news articles](https://www.freecodecamp.org/news). If you are interested in translating articles, read [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) and reach out to your Language Lead.

The translation workflow is split into two main activities:

- **Translating** curriculum files, documentation and UI elements like buttons, labels, etc.:

  Come traduttore puoi iscriverti alla [nostra piattaforma di traduzione](https://translate.freecodecamp.org) e contribuire a tradurre in una qualsiasi delle oltre 30 lingue disponibili sulla piattaforma.

- **Revisionare** (Proofread) le traduzioni per gli elementi nominati in precedenza.

  Proofreaders verify that the community contributed translations are uniform in tone and free of common issues like typos, etc. In breve, si occupano di assicurare un'alta qualità della traduzione. Nota che non usiamo traduzioni automatiche per una ragione.

> [!WARNING] We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Getting started

First, make sure you come say "Hi" in our [Discord](https://discord.gg/PRyKn3Vbay). We post regular updates about translating resources and answer a lot of your queries in there.

Poi, vai alla nostra [piattaforma di traduzione](https://translate.freecodecamp.org/) e fai login (se è la prima volta che contribuisci alle traduzioni, dovrai creare un account).

Infine, segui la guida dettagliata qua sotto per capire come funzionano gli strumenti di traduzione e il workflow a tua disposizione.

Buona traduzione.

## Select a Project and File

Once you visit the translation platform, you should see multiple "projects" available for translation:

1. Il progetto della [documentazione per contribuire (Contributing documentation)](https://translate.freecodecamp.org/contributing-docs) che contiene i file per questo sito di documentazione.
2. Il progetto del [Coding Curriculum](https://translate.freecodecamp.org/curriculum), che contiene i file delle sfide del curriculum per programmatori.
3. Il progetto dell'[interfaccia della piattaforma di apprendimento (Learn User Interface)](https://translate.freecodecamp.org/learn-ui), che contiene le stringhe per gli elementi dell'interfaccia come pulsanti, etichette, ecc.

Seleziona il progetto a cui vuoi contribuire, e vedrai una lista con le lingue disponibili per la traduzione.

![Immagine - Lista delle lingue disponibili](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Seleziona la lingua su cui vuoi lavorare, e vedrai l'albero dei file completo.

![Immagine - Lista dei file disponibili](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Ogni file e cartella mostrerà una barra di avanzamento. La parte **blu** della barra di avanzamento indica che percentuale del file è stata tradotta, mentre la parte **verde** indica quale percentuale del file è stata approvata dal team di revisione.

Seleziona un file su cui lavorare e Crowdin aprirà l'editor.

> [!NOTE] When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Translate Curriculum

![Immagine - Editor View](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin separa un documento in "stringhe" (strings) da tradurre, in genere frasi. Ogni stringa è tradotta individualmente. Con riferimento all'immagine sopra:

1. Una stringa evidenziata in verde ha già una traduzione proposta.
2. Una stringa evidenziata in rosso _non_ ha una traduzione proposta.
3. Una stringa con testo in grigio non è traducibile. Questo è il caso per blocchi di codice e altro contenuto che non deve essere tradotto. Non sarai in grado di selezionare queste stringhe nell'editor.
4. If a contributor has proposed a translation to a string, Crowdin will display those proposals here. Non sarai in grado di salvare una traduzione identica, invece se una traduzione è accurata dovresti usare l'icona `+` per darle un voto positivo. An inaccurate translation can be "downvoted" with the `-` icon.
5. Crowdin will recommend translations based on Translation Memory (TM) or Machine Translation (MT). La Memoria di Traduzione si riferisce a stringhe simili o identiche che sono state tradotte/approvate in altri file. Le Traduzioni Automatiche si riferiscono a traduzioni raccomandate dalla loro libreria integrata.
6. Questo è il pannello di modifica, dove puoi scrivere la tua proposta di traduzione per la stringa selezionata.
7. La stringa attualmente selezionata nell'editor è evidenziata in giallo.
8. Qui vedrai dei tag indicanti lo stato della stringa. `Done` means the string has at least one proposed translation. `Todo` significa che la stringa non ha alcuna proposta di traduzione.
9. Qui puoi vedere la finestra dei commenti. Se hai domande o dubbi su una particolare stringa, puoi lasciare un commento sulla stringa qui perché altri traduttori li vedano.
10. Questi due pulsanti dei pannelli nasconderanno i pannelli a sinistra (documento) e a destra (commenti).

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [Discord](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

Quando hai finito la traduzione per una stringa, usa il pulsante `Save` per salvare la tua traduzione in Crowdin. Altri contributori potranno quindi votare la tua traduzione e i revisori potranno approvarla.

You are welcome to translate as many strings as you like - there are no additional steps required when you complete a full file or propose a new translation. Usare il pulsante `Save` è tutto quello che serve per memorizzare una traduzione.

> [!NOTE] If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

## Translate the Learn Interface

Our `/learn` interface relies on JSON files loaded into an i18n plugin to generate translated text. This translation effort is split across both Crowdin and GitHub.

### On GitHub

The `links.json`, `meta-tags.json`, `motivation.json`, and `trending.json` files contain information that needs to be updated to reflect your language. However, we cannot load these into Crowdin, as the content isn't something that would be a one-to-one translation.

These files will most likely be maintained by your language lead but you are welcome to [read about how to translate them](language-lead-handbook.md).

### On Crowdin

> [!DANGER] Do not edit the following files through a GitHub PR.

The `intro.json` and `translations.json` files are both translated on Crowdin, in the Learn User Interface project. Translating these can be a bit tricky, as each individual JSON value appears as its own string and sometimes the context is missing.

However, the `Context` information provided in Crowdin can help understand where the string fits in to the larger structure.

![Image with an arrow pointing to Crowdin's context information](https://contribute.freecodecamp.org/images/crowdin/context.png)

If you have any questions about where a string fits in to the prose, reach out to us in our [contributor chat](https://discord.gg/PRyKn3Vbay).

## Translate Documentation

Translating our contributing documentation is a similar flow to translating our curriculum files.

> [!NOTE] Our contributing documentation is powered by `docsify`, and we have special parsing for message boxes like this one. If you see strings that start with `[!NOTE]`, `[!WARNING]`, or `[!TIP]`, these words should NOT be translated.

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

You can find out how `docsify` converts a string in your language into an id by looking into the translated pages. Se la traduzione non è stata ancora distribuita, puoi avere una preview [eseguendo il la il sito della documentazione in locale](how-to-work-on-the-docs-theme.md#sservire-localmente-il-sito-di-documentazione).

Puoi avere più informazioni sui  [link esterni in docs qui](how-to-work-on-the-docs-theme.md#howcome-creare-un-link-interno).

## Translate the LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- Le frasi da tradurre sono sempre tra virgolette `""`. Queste sono dialoghi o stringhe di UI. Le parole chiave che vengono prima o dopo i dialoghi sono parole chiave di controllo del game engine e saranno spiegate in regole seguenti. Nota che questa prima regola governa le seguenti regole elencate.
- Nel caso di `new "..."`, non tradurre la parola chiave `new`.
- Prefissi come `player`, `annika`, `layla`, `marco` (o varianti come `player happy`, `player @ happy`) non devono essere tradotti. Questi sono le parole chiave per visualizzare correttamente gli sprite dei personaggi nel gioco.
- Postfixes like `nointeract` should not be translated.
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

## Rate Translations

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Quality Assurance Checks

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING] You have the option to save a translation in spite of errors. If you do, by clicking "Save Anyway", you should also tag a proofreader or project manager and explain why the QA message needs to be ignored in this case.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Non tradurre il contenuto dei tag `<code>`. Questi tag indicano testo trovato nel codice e dovrebbero essere lasciati in inglese.
- Non inserire contenuto aggiuntivo. Se pensi che una sfida richieda delle modifiche nel testo o informazioni aggiuntive dovresti proporre i cambiamenti tramite una issue su GitHub o una pull request che modifica i file inglesi.
- Non cambiare l'ordine del contenuto.

If you have any questions, feel free to reach out to us in our [Discord](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.

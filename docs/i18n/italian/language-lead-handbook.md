# La guida ufficiale dei Leader di lingua di freeCodeCamp

Questa guida ti aiuterà a configurare e utilizzare gli strumenti per la localizzazione dei contenuti nella tua lingua.

## How to Invite New Contributors to Ghost

Ghost allows you to set contributors with different levels of authorization.

La maggior parte dei tuoi inviti sarà per il livello "Contributor". Questo livello consente all'utente di creare bozze. Seleziona questo ruolo quando inviti un nuovo traduttore.

Il livello "Author" consente all'utente di creare bozze e pubblicarle.

Il livello "Editor" consente all'utente di accedere a tutte le bozze e pubblicarle. Seleziona questo ruolo quando inviti un nuovo revisore (proofreader).

Il livello "Administrator" è riservato allo staff di freeCodeCamp e ai leader di lingua.

### How are the Articles Built

Usiamo un approccio basato su [JAMStack](https://www.google.com/search?q=what+is+jamstack) per il build e il deployment degli articoli. Questa strategia rende un rapido sito statico memorizzato nella cache e servito da un CDN.

[Ghost](https://ghost.org) costituisce la nostra piattaforma di gestione dei contenuti e [11ty](https://11ty.dev) si occupa del build degli articoli in risorse statiche – semplice HTML, JavaScript e CSS. Solo queste risorse statiche sono distribuite sui nostri server.

Questo processo è automatizzato e viene eseguito periodicamente. Se pubblichi qualcosa ora, sarà disponibile sul sito di notizie in poche ore.

Qui puoi trovare gli orari di build aggiornati e lo stato: https://github.com/freeCodeCamp/news#build

## How to Mention the Original Author of a Translated Article

The original author and the original article are linked automatically adding this code to the Code Injection -> head section in the Draft Settings on Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

`link` è il link all'articolo originale.

## How to Update Trending Articles

> [!TIP] Changing the articles in the footer at least once a month means giving a boost to the linked articles on Google results.

Ci sono due posti in cui cambiare gli articoli di tendenza.

- [Il repository del curriculum](https://github.com/freeCodeCamp/freeCodeCamp/)
- [Il repository CDN](https://github.com/freeCodeCamp/cdn)

For each article, you will need to create a shorter title to use in the footer.

### Change Trending Articles in the Curriculum

Gli articoli di tendenza nel piè di pagina del curriculum possono essere cambiati modificando il file `client/i18n/locales/<language>/trending.json`.

Questo è un file `*.json` che ha la struttura di un oggetto con chiavi di proprietà in forma di `article0title` e `article0link`.

Each number represents one of the 30 articles in the footer. Assicurati di abbinare correttamente il titolo e il link.

Questo è un esempio di come deve essere una parte del file `trending.json`.

```json
{
  "article0title": "Unire CSV con Python",
  "article0link": "https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/",
  "article1title": "Il comando Git push",
  "article1link": "https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/",
  "article2title": "Centrare immagini in CSS",
  "article2link": "https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/",
  "article3title": "I codici Alt",
  "article3link": "https://www.freecodecamp.org/italian/news/codici-alt/",
  "article4title": "Tenere a bada il footer",
  "article4link": "https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/",
  "article5title": "Cosa è un'API?",
  "article5link": "https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/",
  ...
}
```

Dovrai [fare il build in locale del client tradotto](how-to-enable-new-languages.md) per vedere se i titoli hanno la giusta lunghezza. Ogni titolo deve rimanere su una sola riga e non andare sulla successiva.

### How to Update the Trending Articles in the CDN

The file in the CDN repository is the file `universal/trending/<language>.yaml`.

This file is shaped differently. For example, here is the file content for the first 6 articles:

```yaml
article0title: 'Unire CSV con Python'
article0link: 'https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/'
article1title: 'Il comando Git push'
article1link: 'https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/'
article2title: 'Centrare immagini in CSS'
article2link: 'https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/'
article3title: 'I codici Alt'
article3link: 'https://www.freecodecamp.org/italian/news/codici-alt/'
article4title: 'Tenere a bada il footer'
article4link: 'https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/'
article5title: 'Cosa è API?'
article5link: 'https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/'
```

Puoi passare da un formato all'altro cambiandolo con attenzione manualmente. Oppure puoi usare [lo script in questo repl](https://replit.com/@Ieahleen/convert-json-to-yaml).

> [!TIP] Un nuovo workflow è in fase di sviluppo, ci sarà solo un posto in cui apportare modifiche in futuro.

## How to Translate Articles in the Footer Links

There are some links listed at the bottom of the footer (About, Alumni Network, Open Source, etc.) and some of them can be translated into your language in the same way as other articles.

Articoli che possono essere tradotti:

- About
- Support
- Academic Honesty
- Code of Conduct

I seguenti articoli **non** dovrebbero essere tradotti:

- Shop
- Sponsors
- Privacy Policy
- Terms of Service
- Copyright Policy

I seguenti link puntano a siti esterni e non possono essere tradotti:

- Alumni Network
- Open Source

### Change the Footer Links in the News

Una volta che hai tradotto e pubblicato gli articoli elencati come "possono essere tradotti", puoi aggiornare i link a piè di pagina per `/news` modificando il file `news/config/i18n/locales/<your language>/links.json` nel repository [freeCodeCamp/news](https://github.com/freeCodeCamp/news).

> [!NOTE] Le pull request a questo repository sono attualmente limitate allo staff. Se vuoi aggiornare questo file, chiedi aiuto a qualcuno del team dello staff.

Aggiorna la seguente parte nel file:

```json
{
  ...
  "footer": {
    "about": "https://www.freecodecamp.org/news/about/",
    "support": "https://www.freecodecamp.org/news/support/",
    "honesty": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc": "https://www.freecodecamp.org/news/code-of-conduct/"
  }
}
```

### Change the Footer Links in the Curriculum

Una volta che hai tradotto e pubblicato gli articoli elencati come "possono essere tradotti", così come quando il curriculum è pronto per il rilascio nella tua lingua, puoi aggiornare i link a piè di pagina per `/learn` modificando il file `client/i18n/locales/<your language>/links.json` nel repository [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp).

> [!WARNING] Solo "About", "Support", "Academic Honesty", e "Code of Conduct" possono essere tradotti. Lascia gli altri URL invariati.

Aggiorna la seguente parte nel file:

```json
{
  ...
  "footer": {
    "about-url": "https://www.freecodecamp.org/news/about/",
    "shop-url": "https://www.freecodecamp.org/shop/",
    "support-url": "https://www.freecodecamp.org/news/support/",
    "sponsors-url": "https://www.freecodecamp.org/news/sponsors/",
    "honesty-url": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc-url": "https://www.freecodecamp.org/news/code-of-conduct/",
    "privacy-url": "https://www.freecodecamp.org/news/privacy-policy/",
    "tos-url": "https://www.freecodecamp.org/news/terms-of-service/",
    "copyright-url": "https://www.freecodecamp.org/news/copyright-policy/"
  },
  ...
}
```

## How to Translate the Info Boxes Headers in the Documentation

Puoi trovare questi riquadri in tutta la documentazione:

> [!NOTE] Sono una nota

> [!TIP] Sono un suggerimento

> [!WARNING] Sono un avvertimento

> [!ATTENTION] Sono un avviso per richiamare la tua attenzione

Di default, le loro intestazioni appaiono in inglese anche nella documentazione tradotta.

Puoi avere le intestazioni tradotte nella documentazione nella tua lingua cambiando il file `docs/index.html`, in questo modo:

All'interno dell'elemento `script` c'è un oggetto, trova la proprietà `flexibleAlerts`, che ha questa struttura:

```js
flexibleAlerts: {
  note: {
    label: {
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/': 'Attention'
    }
  }
}
```

All'interno dell'oggetto della proprietà label, prima della proprietà `'/'`, dovrai aggiungere una nuova proprietà per la tua lingua, come `/i18n/<language>/`.

Ad esempio, per aggiungere le traduzioni in portoghese:

```js
flexibleAlerts: {
  note: {
    label: {
      '/i18n/portuguese/': 'Observação',
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/i18n/portuguese/': 'Dica',
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/i18n/portuguese/': 'Aviso',
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/i18n/portuguese/': 'Atenção',
      '/': 'Attention'
    }
  }
}
```

## How to Translate the Motivational Quotes

Le citazioni motivazionali possono essere trovate nel [repository del curriculum](https://github.com/freeCodeCamp/freeCodeCamp/) nel file `/client/i18n/locales/<language>/motivation.json`.

Il file ha questa struttura generale:

```json
{
  "compliments": [],
  "motivationalQuotes": []
}
```

I complimenti sono brevi frasi che appaiono al termine di una sfida.

Non è necessario tradurre direttamente le frasi usate in inglese, è possibile scrivere una serie di frasi corte che sono appropriate per essere mostrate al completamento di una sfida.

The `compliments` array is an array of strings. So, for example, you would write:

```json
{
  "compliments": ["A tutta birra!", "Pikachu, scelgo te!"],
  "motivationalQuotes": []
}
```

> [!TIP] Dovresti iniziare almeno con una dozzina di complimenti per avere un po' di varietà quando gli utenti completano le sfide.

Le citazioni motivazionali sono le frasi che appaiono su https://freecodecamp.org/learn.

`motivationalQuotes` è un array di oggetti, i quali includono una proprietà `quote` e una proprietà `author`. Come questo:

```json
{
  "compliments": [],
  "motivationalQuotes": [
    {
      "quote": "Se i costruttori costruissero come i programmatori programmano, il primo picchio che passa potrebbe distruggere la civiltà.",
      "author": "Artur Bloch, Seconda legge di Weinberg"
    },
    {
      "quote": "I bravi programmatori sanno cosa scrivere. I migliori sanno cosa riscrivere.",
      "author": "Eric Steven Raymond"
    }
  ]
}
```

> [!TIP] Dovresti iniziare con almeno una dozzina di citazioni, per avere un po' di varietà. A new quote is shown every time the user reloads the page.

## How to Update the Common Links

Gestiamo un file di link comuni usati in tutto il [curriculum](https://github.com/freecodecamp/freecodecamp) nel file `/client/i18n/locales/<language>/links.json`.

Alcuni di questi link non cambieranno - ma dovresti aggiornare gli articoli in `/news` per rimandare alla versione tradotta nella tua lingua di un articolo, una volta pubblicato.

Dovresti anche aggiornare le categorie `help` in modo che rimandino nel subforum nella tua lingua (di solito `language/category`, come `Italiano/HTML-CSS`). Questo permetterà agli utenti di freeCodeCamp di creare delle "richieste di aiuto" nella posizione corretta del forum.

## How to Update the Site Meta-Data

I meta-dati del sito si trovano nel file `/client/i18n/locales/<language>/meta-tags.json`. Questo file ha cinque chiavi: `title`, `description`, `social-description`, `keywords` e `youre-unsubscribed`.

Il valore `youre-unsubscribed` dovrebbe essere tradotto direttamente. Gli altri valori dovranno essere tradotti nel miglior modo possibile, tenendo conto anche dei termini e delle frasi di ricerca comunemente utilizzati nella tua lingua.

Se hai bisogno di aiuto, contattaci nella chat per i [contributori](https://discord.gg/PRyKn3Vbay)

## Effettuare il Pre-Translate su Crowdin

La funzionalità Pre-Translate può essere usata per applicare le traduzioni da Translation Memory alle stringhe.

> [!TIP] È molto utile per ripristinare le traduzioni da Translation Memory in blocco quando sono stati aggiornati molti file.

Puoi trovare il Pre-Translate nella parte superiore della pagina nella console di un progetto. Se vedi "Go to console" nell'angolo in alto a destra, clicca prima lì.

![pulsante go to console](./images/crowdin/pre-translate2.png)

![procedura pre-translate](./images/crowdin/pre-translate1.png)

Puoi scegliere "From Machine Translation" o "From Translation Memory". Scegli "Translation Memory" per recuperare le traduzioni dalla memoria.

Poi ci sono tre passaggi da completare:

1. Files. Choose which files to translate, you can do all the projects, or specific folders or files.
2. Languages. Imposta qui la tua lingua.
3. Existing Translations. La migliore combinazione è "100% match" e "Apply to untranslated strings only". Non approvare automaticamente, in quanto è sempre meglio che ci sia una persona a effettuare la revisione.

![pre-translate traduzioni esistenti](./images/crowdin/pre-translate3.png)

Quando hai finito con le impostazioni, premi il pulsante Pre-Translate e attendi. Ti avviserà al termine. Può richiedere più o meno tempo a seconda di quante stringhe non tradotte sono presenti nei file scelti.

## How to Update Crowdin Glossary

> [!TIP] An updated glossary helps in having a homogeneous translation of technical terms.

Puoi trovare il glossario di Crowdin nel repository [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

In the `glossaries` folder, there are various `*.csv` (comma,separated values) files, one for each of the crowdin projects that have a glossary that can be updated from this workflow.

Il file `client.csv` è per il progetto Learn User Interface, il file `curriculum.csv` è per il progetto Coding Curriculum, il file `docs.csv` è per il progetto Contributing Documentation.

To update the Crowdin Glossaries, you need to clone this repo locally. Open the `.csv` file with an appropriate program, for example, Microsoft Excel.

Nel file `.csv` troverai che la lingua inglese occupa le prime tre colonne, `Term:English` è la colonna per i termini inglesi, `Description:English` è la colonna per le descrizioni inglesi, `Part:English` è la parte del discorso (sostantivo, verbo, ecc.).

Poi, ogni lingua ha due colonne. Se traduci in Dothraki, sarai interessato alle colonne `Term:Dothraki` e `Description:Dothraki`. La colonna `Term:Dothraki` è per la traduzione dei termini dothraki e la colonna `Description:Dothraki` è per la descrizione dei termini dothraki.

> [!TIP] In programs like Microsoft Excel, you can hide the columns of the other languages to free up screen real-estate and see the English columns and the target language columns near each other.

Dopo aver apportato le modifiche e salvato il file, dovrai effettuare una PR con le modifiche proposte. Una volta che la PR è stata accettata, dovrai eseguire le procedure GitHub Action per aggiornare il glossario. I cambiamenti apportati al glossario non saranno immediati.

## Come Promuovere un Contributore a Revisore

If you consider that a contributor could become a Crowdin Proofreader, you can give the proofreader role to them this way:

In Crowdin, individuate the `User management` on the left-hand side menu.

Aprirà gli strumenti di gestione degli utenti e sarai in grado di vedere la lista di tutti gli utenti.

Search for the user that will become a proofreader. Utilizzare il menu a tre punti nella riga dell'utente per aprire un menu e selezionare "Add to team". I team di revisori hanno il nome standard di `Proof Readers (<language>)`, puoi cercare il team usando il nome della lingua. Una volta selezionato il team, utilizza il pulsante "ADD" in fondo alla pagina per finalizzare il processo.

L'utente ora è un revisore.

> [!TIP] I revisori appena promossi possono trarre vantaggio dalla lettura della documentazione [Come revisionare le traduzioni](how-to-proofread-files.md).

## How to Add or Update a Language

Check out the [how to enable new language](how-to-enable-new-languages.md) docs. If you are updating a language the section on [configuring the language superblock order](how-to-enable-new-languages.md#configure-the-language-superblock-order) should be helpful.

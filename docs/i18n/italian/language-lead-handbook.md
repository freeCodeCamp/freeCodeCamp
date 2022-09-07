# La guida ufficiale dei Leader di lingua di freeCodeCamp

Questa guida ti aiuterà a configurare e utilizzare gli strumenti per la localizzazione dei contenuti nella tua lingua.

## Come invitare nuovi contributori su Ghost

Ghost consente di fornire ai contributori diversi livelli di autorizzazioni.

La maggior parte dei tuoi inviti sarà per il livello "Contributor". Questo livello consente all'utente di creare bozze. Seleziona questo ruolo quando inviti un nuovo traduttore.

Il livello "Author" consente all'utente di creare bozze e pubblicarle.

Il livello "Editor" consente all'utente di accedere a tutte le bozze e pubblicarle. Seleziona questo ruolo quando inviti un nuovo revisore (proofreader).

Il livello "Administrator" è riservato allo staff di freeCodeCamp e ai leader di lingua.

## Come menzionare l'autore originale di un articolo tradotto

L'autore e l'articolo originali vengono linkati automaticamente aggiungendo questo codice alla sezione Code Injection -> head nelle impostazioni della bozza on ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

`link` è il link all'articolo originale.

## Come aggiornare gli articoli di tendenza

> [!TIP] Cambiare gli articoli nel footer almeno una volta al mese dà una spinta nei risultati di Google agli articoli linkati.

Ci sono due posti in cui cambiare gli articoli di tendenza.

- [Il repository del curriculum](https://github.com/freeCodeCamp/freeCodeCamp/)
- [Il repository CDN](https://github.com/freeCodeCamp/cdn)

Per ogni articolo è necessario creare un titolo più breve da utilizzare nel piè di pagina.

### Cambiare gli articoli di tendenza nel curriculum

Gli articoli di tendenza nel piè di pagina del curriculum possono essere cambiati modificando il file `client/i18n/locales/<language>/trending.json`.

Questo è un file `*.json` che ha la struttura di un oggetto con chiavi di proprietà in forma di `article0title` e `article0link`.

Ogni numero rappresenta uno dei 30 articoli nel piè di pagina. Assicurati di abbinare correttamente il titolo e il link.

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

### Come aggiornare gli articoli di tendenza nel cdn

Il file nel repository cdn è il file `universal/trending/<language>.yaml`.

Questo file è strutturato in modo diverso, ad esempio, questo è il contenuto del file per i primi 6 articoli:

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

## Come tradurre le intestazioni dei riquadri informativi nella documentazione

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

## Come tradurre le citazioni motivazionali

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

`compliments` è un array di stringhe, quindi per esempio potresti scrivere:

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

> [!TIP] Dovresti iniziare con almeno una dozzina di citazioni, per avere un po' di varietà. Ogni volta che un utente ricarica la pagina viene mostrata una nuova citazione.

## Come aggiornare i link comuni

Gestiamo un file di link comuni usati in tutto il [curriculum](https://github.com/freecodecamp/freecodecamp) nel file `/client/i18n/locales/<language>/links.json`.

Alcuni di questi link non cambieranno - ma dovresti aggiornare gli articoli in `/news` per rimandare alla versione tradotta nella tua lingua di un articolo, una volta pubblicato.

Dovresti anche aggiornare le categorie `help` in modo che rimandino nel subforum nella tua lingua (di solito `language/category`, come `Italiano/HTML-CSS`). Questo permetterà agli utenti di freeCodeCamp di creare delle "richieste di aiuto" nella posizione corretta del forum.

## Come aggiornare i meta-dati del sito

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

1. Files. Scegli quali file tradurre, puoi scegliere tutto il progetto, oppure cartelle o file specifici.
2. Languages. Imposta qui la tua lingua.
3. Existing Translations. La migliore combinazione è "100% match" e "Apply to untranslated strings only". Non approvare automaticamente, in quanto è sempre meglio che ci sia una persona a effettuare la revisione.

![pre-translate traduzioni esistenti](./images/crowdin/pre-translate3.png)

Quando hai finito con le impostazioni, premi il pulsante Pre-Translate e attendi. Ti avviserà al termine. Può richiedere più o meno tempo a seconda di quante stringhe non tradotte sono presenti nei file scelti.

## Come aggiornare il glossario di Crowdin

> [!TIP] Un glossario aggiornato aiuta ad avere una traduzione omogenea dei termini tecnici.

Puoi trovare il glossario di Crowdin nel repository [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

Nella cartella `glossaries` ci sono vari file `*.csv` (comma separated values), uno per ogni progetto su Crowdin che ha un glossario che può essere aggiornato con questa procedura.

Il file `client.csv` è per il progetto Learn User Interface, il file `curriculum.csv` è per il progetto Coding Curriculum, il file `docs.csv` è per il progetto Contributing Documentation.

Per aggiornare il glossario di Crowdin è necessario clonare questo repository localmente. Apri il file `.csv` con un programma appropriato, ad esempio Microsoft Excel.

Nel file `.csv` troverai che la lingua inglese occupa le prime tre colonne, `Term:English` è la colonna per i termini inglesi, `Description:English` è la colonna per le descrizioni inglesi, `Part:English` è la parte del discorso (sostantivo, verbo, ecc.).

Poi, ogni lingua ha due colonne. Se traduci in Dothraki, sarai interessato alle colonne `Term:Dothraki` e `Description:Dothraki`. La colonna `Term:Dothraki` è per la traduzione dei termini dothraki e la colonna `Description:Dothraki` è per la descrizione dei termini dothraki.

> [!TIP] In programmi come Microsoft Excel puoi nascondere le colonne delle altre lingue per liberare spazio sullo schermo e vedere le colonne per l'inglese e per la tua lingua affiancate.

Dopo aver apportato le modifiche e salvato il file, dovrai effettuare una PR con le modifiche proposte. Una volta che la PR è stata accettata, dovrai eseguire le procedure GitHub Action per aggiornare il glossario. I cambiamenti apportati al glossario non saranno immediati.

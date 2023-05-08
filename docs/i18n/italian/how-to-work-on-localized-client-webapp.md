# How to Work on Localized Client Webapp

The React-based client web app that powers our learning platform is built using Gatsby. È tradotta in varie lingue internazionali usando [react-i18next](https://react.i18next.com/) e [i18next](https://www.i18next.com/).

Puoi scoprire di più su come configurare l'applicazione client localmente per lo sviluppo seguendo [la nostra guida alla configurazione in locale](how-to-setup-freecodecamp-locally.md). By default, the application is available only in English.

Once you have set up the project locally you should be able to follow this documentation to run the client in the language of your choice from the list of available languages.

Questo può essere utile quando stai lavorando su una caratteristica che riguarda specificatamente qualcosa che coinvolge la localizzazione e ti richiede ad esempio l'etichetta di un bottone in una lingua diversa.

> [!TIP] Non hai bisogno di seguire questo documento per tradurre il curriculum di freeCodeCamp o per contribuire alla documentazione. Invece, leggi [questa guida](how-to-translate-files.md).

Andiamo a vedere come funzionano il framework e gli strumenti.

## Struttura dei file

Most of the files for translating the platform are located in the [`client/i18n`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/client/i18n) folder. Ogni lingua ha una directory al suo interno che contiene file JSON con le traduzioni.

```console
  config
  └── i18n.ts
  ...
  client/i18n
  ├── configForTests.js
  ├── config.js
  ├── locales
  │   ├── chinese
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   └── translations.json
  ... ...
  │   ├── dothraki
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   └── translations.json
  ... ...
  │   ├── english
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   └── translations.json
  │   └── espanol
  │       ├── intro.json
  │       ├── links.json
  │       ├── meta-tags.json
  │       ├── motivation.json
  │       └── translations.json
  ├── locales.test.js
  ├── schema-validation.js
  └── validate-keys.ts
```

Some of these files are translated on our translation platform (Crowdin) and some are translated or created via PR's on GitHub.

**File tradotti con la nostra piattaforma di traduzione:**

- Il file `translations.json` contiene la maggior parte del testo che compare sugli elementi dell'interfaccia utente. Le chiavi sono usate nel codice per ottenere i testo corretto per qualunque lingua sia impostata. This file needs to have the same keys in all languages.

- Il file `intro.json` contiene le coppie chiave-valore relative al testo introduttivo sulle pagine delle certificazioni.

  Se vuoi aggiungere/aggiornare le traduzioni per le chiavi, per favore [leggi questa guida](how-to-translate-files.md).

**File NON tradotti con la nostra piattaforma di traduzione:**

- I file `motivation.json` non devono avere per forza le stesse frasi, complimenti o lunghezze degli array. Basta che abbiano la stessa struttura JSON.

- Il file `meta-tags.json` contiene le informazioni per il tag meta del nostro sito.

  I cambiamenti su questi file sono tipicamente fatti dallo staff. Se vedi qualcosa fuori dall'ordinario, ti raccomandiamo di metterti in contatto con noi sulla [chat dei contributori](https://discord.gg/PRyKn3Vbay).

## Testing the Client App in a World Language

Puoi testare la app client in ogni lingua disponibile nell'[elenco `availableLangs` qui](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts).

```js
export const availableLangs = {
  client: [
    Languages.English,
    Languages.Espanol,
    Languages.Chinese,
    Languages.ChineseTraditional,
    Languages.Italian,
    Languages.Portuguese,
    Languages.Ukrainian,
    Languages.Japanese,
    Languages.German,
    Languages.Arabic
  ],
  ...
};
```

Se stai testando una nuova lingua, crea una cartella con il nome della lingua come titolo accanto alle altre lingue e copia i file JSON da un'altra lingua alla tua cartella.

Aggiungi una nuova lingua all'enum `Languages` e all'array `client` in cima al file [`config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts).

Successivamente, segui le istruzioni nei commenti nello stesso file per aggiungere/aggiornare il resto delle variabili secondo necessità.

Infine, imposta la variabile `CLIENT_LOCALE` nel tuo file `.env` con la stringa della lingua di cui vuoi eseguire il build dall'enum `Languages` nel file qui sopra.

## Come strutturare i componenti

Se stai lavorando su una caratteristica o un bug per la client web app, ad esempio aggiungendo nuovi elementi di interfaccia utente sulla pagina delle impostazioni, dovresti seguire le linee guida qui sotto. Ti aiuteranno a preparare i componenti per la localizzazione in tutte le lingue supportate.

### Componenti funzionali

```js
import { useTranslation } from 'react-i18next';

// nel metodo render:
const { t } = useTranslation();

// chiama la funzione "t" con una chiave dal file JSON:
<p>{t('key')}</p>; // altri dettagli sotto
```

### Componenti classe

```js
import { withTranslation } from 'react-i18next';

// withTranslation aggiunge la funzione "t" alle props:
const { t } = this.props;

// chiama la funzione "t" con una chiave dal file JSON:
<h1>{t('key')}</h1> // più dettagli sotto

// esporta senza redux:
export default withTranslation()(Component);

// o con redux:
export default connect(...)(withTranslation()(Component));
```

## Tradurre usando la funzione "t"

### Traduzione di base

```js
// nel componente:
<p>{t('p1')}</p>

// nel file JSON:
{
  "p1": "My paragraph"
}

// output:
<p>My paragraph</p>
```

### Con dati dinamici

```js
// nel componente:
const username = 'moT';

<p>{t('welcome', { username: username })}</p>

// nel file JSON:
{
  "welcome": "Welcome {{username}}"
}

// output:
<p>Welcome moT</p>
```

L'esempio qui sopra passa alla funzione `t` un oggetto con una variabile `username`. La variabile verrà usata nel valore JSON al posto di `{{username}}`.

## Traduci con il componente `Trans`

La regola generale è usare la funzione "t" quando puoi. Ma c'è un componente `Trans` per quando questo non basta, solitamente quando hai elementi incorporati nel testo. Puoi usare il componente `Trans`  con ogni tipo di componente react.

### Elementi di base annidati

```js
// nel componente:
import { Trans } from 'react-i18next'

<p>
  <Trans>fcc.greeting</Trans>
</p>

// nel file JSON:
{ 
  "fcc": {
    "greeting": "Welcome to <strong>freeCodeCamp</strong>"
  }
}

// output:
<p>Welcome to <strong>freeCodeCamp</strong></p>
```

You can place the key inside the component tags like in the above example if the text contains "simple" tags with no attributes. `br`, `strong`, `i`, e `p` sono quelli predefiniti, ma la lista può essere ampliata nel file i18n config.

### Elementi complessi annidati

Altre volte, vorrai avere un certo testo all'interno di un altro elemento, un buon esempio è il tag anchor:

```js
// nel componente:
<p>
  <Trans i18nKey='check-forum'>
    <a href='https://forum.freecodecamp.org/'>placeholder</a>
  </Trans>
</p>

// nel file JSON:
{ 
  "check-forum": "Check out <0>our forum</0>."
}

// output:
<p>Check out <a href='https://forum.freecodecamp.org/'>our forum</a></p>
```

Nell'esempio sopra, la chiave è impostata negli attributi del componente `Trans`. I tag `<0>` e `</0>` nel JSON rappresentano il primo figlio del componente, in questo caso l'elemento anchor. Se ci fossero più elementi figli, verrebbero contati a partire da lì, usando la stessa sintassi. Puoi trovare i figli di un componente negli strumenti per sviluppatori react ispezionandolo. `placeholder` è lì semplicemente perché il linter protesterebbe per un elemento `<a>` lasciato vuoto.

### Con una variabile

```js
// nel componente:
const email = 'team@freecodecamp.org';

<p>
  <Trans email={email} i18nKey='fcc.email'>
    <a href={`mailto:${email}`}>
      {{ email }}
    </a>
  </Trans>
</p>

// nel file JSON:
{
  "fcc": {
    "email": "Send us an email at: <0>{{email}}</0>"
  }
}

// output:
<p>Send us an email at: <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a><p>
```

Nell'esempio sopra, la chiave e una variabile sono impostate negli attributi del componente `Trans`. Anche `{{ email }}` deve essere da qualche parte nel componente `Trans`, non importa dove.

## Cambiare il testo

Per cambiare il testo sul lato client, vai al relativo file `.json`, trova la chiave che viene usata nel componente React e cambiane il valore con il nuovo testo che vuoi. Dovresti cercare quella chiave nel codice, per assicurarti che non venga usata da qualche altra parte. O, se lo è, che il cambiamento abbia senso ovunque.

## Aggiungere testo

Se il testo che vuoi aggiungere al client esiste nel relativo file `.json`, usa la chiave esistente. Altrimenti, crea un'altra chiave.

Il file in inglese è la "fonte della verità" per tutti i file `.json` che condividono lo stesso nome. Se hai bisogno di aggiungere una nuova chiave, aggiungila lì. Dopodiché, aggiungi la chiave a **tutti** i file `translations.json`.

> [!NOTE] Usa del testo in inglese per tutte le lingue se il file è tradotto tramite Crowdin. Se non lo fai, i test falliranno.

Sarebbe utile anche tenere tutte le chiavi nello stesso ordine in tutti i file. Inoltre, prova a mettere tutta la punteggiatura, spaziatura, virgolette, etc nei file JSON e non nei componenti o nei file del server.

> [!NOTE] The underscore (`_`) is a reserved character for keys in the client-side files. Vedi [la documentazione](https://www.i18next.com/translation-function/plurals) per il suo utilizzo.

## Documentazione utile

- [Documentazione react-i18next ](https://react.i18next.com/latest/usetranslation-hook)
- [Documentazione i18next](https://www.i18next.com/translation-function/essentials)

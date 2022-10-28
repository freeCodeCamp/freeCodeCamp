# Rilasciare nuove lingue su `/learn`

Prima di poter rilasciare una nuova lingua, è necessario consentire alle lingue di fare il download da Crowdin.

## Aggiornare le impostazioni di Crowdin

Nei progetti `Curriculum` e `Learn UI`, dovrai selezionare `Project Settings` dalla barra laterale. Poi scorri fino a `Language Mapping`, dove vedrai un'opzione per aggiungere dei codici personalizzati per le lingue. Aggiungi una nuova voce per la lingua che vuoi rilasciare, selezionando `language` come valore `Placeholder` e inserendo il nome della lingua in minuscolo e in un formato adatto a un URL per il `Custom code`. Se non sei sicuro di cosa usare, contattaci nella chat per contributori e ti aiuteremo.

## Aggiornare i processi automatici

Dovrai aggiungere uno step a `crowdin-download.client-ui.yml` e `crowdin-download.curriculum.yml`. Lo step sarà lo stesso per entrambi. Ad esempio, se vuoi abilitare il download per il Dothraki:

```yml
##### Download Dothraki #####
- name: Crowdin Download Dothraki Translations
  uses: crowdin/github-action@master
  # options: https://github.com/crowdin/github-action/blob/master/action.yml
  with:
    # uploads
    upload_sources: false
    upload_translations: false
    auto_approve_imported: false
    import_eq_suggestions: false

    # downloads
    download_translations: true
    download_language: mis
    skip_untranslated_files: false
    export_only_approved: true

    push_translations: false

    # pull-request
    create_pull_request: false

    # global options
    config: './crowdin-config.yml'
    base_url: ${{ secrets.CROWDIN_BASE_URL_FCC }}

    # Uncomment below to debug
    # dryrun_action: true
```

Nota che la chiave `download_language` deve essere impostata sul codice della lingua mostrato su Crowdin.

## Attivare una lingua

> [!NOTE] Prima di procedere dovresti completare la sezione precedente aggiornando i processi automatici - devono essere effettuate in step separati o il build fallirà.

Ci sono alcuni step da svolgere per consentire il build del codebase nella lingua scelta.

Per prima cosa, visita il file `config/i18n/all-langs.ts` per aggiungere la lingua alle lingue disponibili nella lista e configurare i valori. Qui ci sono diversi oggetti.

- `availableLangs`: per entrambi gli array `client` e `curriculum`, aggiungi il testo del nome della lingua. Questo è il valore che sarà usato nel file `.env` più tardi.
- `auditedCerts`: Aggiungi il nome della lingua come _chiave_ e aggiungi un array di variabili `SuperBlocks.{cert}` come _valore_. Questo dice al client quali certificazioni sono completamente tradotte.
- `i18nextCodes`: Questi sono i codici ISO per le varie lingue. Dovrai aggiungere il codice ISO appropriato per la lingua che stai attivando. Devono essere unici per ogni lingua.
- `LangNames`: Questi sono i nomi delle lingue visualizzati nel menu di navigazione.
- `LangCodes`: Questi sono i codici delle lingue usati per formattare date e numeri. Questi devono essere codici Unicode CLDR invece di codici ISO.
- `hiddenLangs`: Queste lingue non saranno mostrate nel menu di navigazione. Viene usato per le lingue che non sono ancora pronte per il rilascio.

Per esempio, se vuoi attivare la lingua Dothraki, il tuo oggetto `all-langs.js` dovrebbe essere come segue:

```js
export const availableLangs = {
  client: ['english', 'espanol', 'chinese', 'chinese-traditional', 'dothraki'],
  curriculum: [
    'english',
    'espanol',
    'chinese',
    'chinese-traditional',
    'dothraki'
  ]
};

export const auditedCerts = {
  espanol: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis
  ],
  chinese: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  'chinese-traditional': [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs,
    SuperBlocks.DataVis,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy
  ],
  dothraki: [
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
};

export const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

export enum LangNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）',
  dothraki: 'Dothraki'
};

export enum LangCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

export const hiddenLangs = ['dothraki'];
```

> [!NOTE] Quando è stato impostato il deployment per una lingua che ha già una sezione `/news` live, può essere rimossa dall'array `hiddenLangs` e resa disponibile al pubblico.

Poi, apri il file `client/src/utils/algolia-locale-setup.ts`. Questi dati sono usati dalla barra di ricerca che carica gli articoli in `/news`. Anche se è poco probabile che tu stia testando questa funzione, se questi dati mancano per la tua lingua possono esserci degli errori nel costruire il codebase localmente.

Aggiungi un oggetto per la tua lingua all'oggetto `algoliaIndices`. Dovresti usare gli stessi valori dell'oggetto `english` per testare in locale, sostituendo la chiave `english` con il valore della tua lingua in `availableLangs`.

> [!NOTE] Se abbiamo già distribuito un'istanza della pubblicazione nella tua lingua target, puoi aggiornare i valori così da rispecchiare le istanze live. Altrimenti, usa i valori della pubblicazione inglese.

Se volessi aggiungere Dothraki:

```js
const algoliaIndices = {
  english: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  espanol: {
    name: 'news-es',
    searchPage: 'https://www.freecodecamp.org/espanol/news/search/'
  },
  chinese: {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search/'
  },
  'chinese-traditional': {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search'
  },
  dothraki: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  }
};
```

### Rilasciare un superblocco

Dopo che un superblocco è stato completamente tradotto in una lingua, ci sono due step per rilasciarlo. Come prima cosa aggiungi il superblocco enum all'array `auditedCerts` di quella lingua. Quindi, se vuoi rilasciare il nuovo superblocco Web Design Responsivo per Dothraki, l'array dovrebbe essere così:

```ts
export const auditedCerts = {
  // other languages
  dothraki: [
    SuperBlocks.RespWebDesignNew, // the newly translated superblock
    SuperBlocks.RespWebDesign,
    SuperBlocks.JsAlgoDataStruct,
    SuperBlocks.FrontEndDevLibs
  ]
```

Infine, se il superblocco è nello stato "nuovo" (cioè sostituisce un superblocco legacy), l'array `languagesWithAuditedBetaReleases` dovrebbe essere aggiornato per includere la nuova lingua in questo modo:

```ts
export const languagesWithAuditedBetaReleases: ['english', 'dothraki'];
```

Questo sposterà il nuovo superblocco nel posto corretto nella mappa del curriculum su `/learn`.

## Attivare video localizzati

Per le sfide video, devi cambiare alcune cose. Come prima cosa aggiungi la nuova lingua alla query per GraphQL nel file `client/src/templates/Challenges/video/Show.tsx`. Per esempio, in questo modo aggiungeresti Dothraki alla query:

```tsx
  query VideoChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      videoId
      videoLocaleIds {
        espanol
        italian
        portuguese
        dothraki
      }
      ...
```

Quindi aggiungi un id per la nuova lingua ogni sfida video in un blocco verificato (`auditedCerts`). Per esempio, se `auditedCerts` in `all-langs.ts` include `scientific-computing-with-python` per `dothraki`, allora devi aggiungere `dothraki` in `videoLocaleIds`. Il frontespizio dovrebbe essere simile a questo:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: nuovo-id-qui
dashedName: introduction-why-program
---
```

Aggiorna l'interfaccia `VideoLocaleIds` in `client/src/redux/prop-types` così che includa la nuova lingua.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

Infine aggiorna lo schema delle sfide in `curriculum/schema/challengeSchema.js`.

```js
videoLocaleIds: Joi.when('challengeType', {
  is: challengeTypes.video,
  then: Joi.object().keys({
    espanol: Joi.string(),
    italian: Joi.string(),
    portuguese: Joi.string(),
    dothraki: Joi.string()
  })
}),
```

## Interfaccia utente client

Dovrai fare un ulteriore passo per gestire le traduzioni dell'interfaccia utente client.

I processi automatici scaricano da Crowdin _una parte_ delle traduzioni dell'interfaccia, ma ci sono alcuni file che devono essere creati manualmente.

Dovrai copiare i seguenti file da `/client/i18n/locales/english` a `/client/i18n/locales/<your-language>` e applicare le traduzioni se necessario:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Testare traduzioni in locale

Se desideri testare le traduzioni localmente, prima di aggiungerle al nostro repository principale - salta i cambiamenti delle procedure di Crowdin. Segui i passaggi per abilitare una lingua, quindi scarica le traduzioni da Crowdin e caricale nel tuo codice locale.

Poiché la lingua non è ancora stata approvata per la produzione, i nostri script non scaricheranno automaticamente le traduzioni. Solo lo staff ha accesso al download diretto delle traduzioni - sei il benvenuto a rivolgerti a noi attraverso la [chat room per i contributori](https://discord.gg/PRyKn3Vbay), o puoi tradurre i file markdown inglesi per le esigenze di test.

Una volta che avrai i file, li dovrai mettere nelle cartelle giuste. Per le sfide del curriculum, dovresti mettere le cartelle dei certificati (ad esempio `01-responsive-web-design`) nella cartella `curriculum/challenges/{lang}`. Per la nostra traduzione in Dothraki, sarebbe `curriculum/challenges/dothraki`. I file `.json` con le traduzioni del client vanno nella cartella `client/i18n/locales/{lang}`.

Aggiorna il file `.env` in modo da poter utilizzare la tua lingua per `CLIENT_LOCALE` e `CURRICULUM_LOCALE`.

Una volta che questi saranno in posizione, dovresti essere in grado di eseguire `npm run develop` per vedere la versione tradotta di freeCodeCamp.

> [!TIP] Se costruisci il client in una lingua e poi vuoi costruirlo in una lingua diversa, dovrai usare il comando `npm run clean-and-develop` dopo aver cambiato il file `.env`, dato che Gatsby memorizzerà nella cache la prima lingua.

> [!ATTENTION] Anche se puoi farei delle traduzioni localmente per i test, ricordiamo che le traduzioni _non_ devono essere inviate attraverso GitHub ma solo tramite Crowdin. Assicurati di resettare il tuo codebase locale dopo che avrai finito con i test.

# Rilasciare nuove lingue su `/learn`

Per distribuire News per una nuova lingua, dovrai creare due PR. Una Pr sarà al [repo CDN](https://github.com/freeCodeCamp/cdn), e l'altra sarà al [repo News](https://github.com/freeCodeCamp/news).

## Preparare il Repo CDN per la nuova lingua

News ottiene i link di tendenza e i titoli degli articoli dal nostro CDN durante il build e li aggiunge al piè di pagina. News recupera anche i file Day.js dal CDN durante il build per localizzare date e orari per ogni lingua.

### Aggiungere un file YAML per gli articoli di tendenza

Clona il [repo CDN](https://github.com/freeCodeCamp/cdn) e crea un nuovo branch.

Nella cartella [`build/universal/trending`](https://github.com/freeCodeCamp/cdn/tree/main/build/universal/trending), crea un nuovo file e chiamalo `language.yaml`. Ad esempio, se stai lanciando le News in Dothraki, chiama il file `dothraki.yaml`.

Quindi copia il contenuto del file con gli articoli di tendenza [`english.yaml`](https://github.com/freeCodeCamp/cdn/blob/main/build/universal/trending/english.yaml) e incollalo nel nuovo file YAML che hai appena creato.

Il suo contenuto assomiglierà a questo:

```yaml
article0title: 'Learn JavaScript'
article0link: 'https://www.freecodecamp.org/news/learn-javascript-free-js-courses-for-beginners/'
article1title: 'Linux ln Example'
article1link: 'https://www.freecodecamp.org/news/linux-ln-how-to-create-a-symbolic-link-in-linux-example-bash-command'
article2title: 'JS document.ready()'
article2link: 'https://www.freecodecamp.org/news/javascript-document-ready-jquery-example/'
article3title: ...
article3link: ...
  ...
```

### Aggiungere un file Day.js locale per la nuova lingua

Per impostazione predefinita, Day.js include solo l'inglese come locale. Per abilitarlo a lavorare con altre lingue, è necessario aggiungere un nuovo file locale Day.js al CDN.

Nella cartella [`build/news-assets/dayjs/<version>/locale`](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale), crea un nuovo file e chiamalo `isocode.min.js`. Ad esempio, se stai lanciando le News in Dothraki, chiama il file `mis.min.js`.

> [!NOTE] Il numero della versione cambierà in quanto le dipendenze vengono aggiornate.

Quindi, visita [questa pagina su cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) con tutti i file Day.js disponibili per la versione che stiamo usando, trova il link `https://cdnjs.cloudflare.com/ajax/libs/dayjs/<version>/locale/isocode.min.js` per la nuova lingua e aprilo in una nuova scheda.

> [!NOTE] Devi soltanto aggiungere il file .../dayjs/\<version\>/_locale_/isocode.min.js locale. Non è necessario aggiungere altri file Day.js.

Copia il codice locale Day.js dalla nuova scheda nel nuovo file che hai creato. Per esempio, ecco una versione non minificata del codice locale inglese per Day.js:

```js
!(function (e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define(n)
    : (e.dayjs_locale_en = n());
})(this, function () {
  'use strict';
  return {
    name: 'en',
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_'
    ),
    months:
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      )
  };
});
```

Quindi apri una PR al repo CDN per aggiungere i file YAML e Day.js per la revisione.

## Preparare il Repo News per la nuova lingua

Il [repo News](https://github.com/freeCodeCamp/news) prende i dati da un'istanza di Ghost, i file che hai aggiunto al CDN, fa il build di News e il deployment.

> [!WARN] Le pull request al repo news _devono_ provenire dallo stesso repo. Non dovresti lavorare fuori da un fork per questo passaggio.

### Modificare il file di configurazione principale

Clona il repo News e crea un nuovo branch.

Apri il file `config/index.js` per aggiungere la nuova lingua e configurare i valori necessari. Ci sono alcuni oggetti e array da modificare:

- `locales`: Questo array contiene le lingue attive e le prossime lingue di News. Sono i valori che vengono usati nel file `.env` per scegliere l'istanza di Ghost e l'interfaccia utente da usare in ogni build. Aggiungi il nome della nuova lingua in minuscolo a questo array.
- `localeCodes`: Questo oggetto è una mappa dei codici ISO per ogni lingua, e viene usato per configurare i18next prima del build dell'interfaccia utente. Per aggiungere una nuova lingua, usa il nome della lingua minuscolo come _chiave_ e il codice ISO 639-1 della lingua come _valore_.
- `algoliaIndices`: Questo oggetto è una mappa degli indici Algolia per ogni lingua. Per aggiungere una nuova lingua, usa il nome della lingua minuscolo come _chiave_ e `news-`, seguito dal codice minuscolo ISO 639-1 della lingua come _valore_.

> [!NOTE] Se non sei sicuro della stringa da usare per impostare `algoliaIndices`, manda un messaggio a Kris (@scissorsneedfoodtoo), o qualcun altro con accesso ad Algolia, e chiedigli di controllare.

Ad esempio, se stai lanciando News in Dothraki, ecco come dovrebbero apparire gli oggetti / array sopra:

```js
const locales = ['arabic', 'bengali', 'chinese', 'english', 'dothraki'];

const localeCodes = {
  arabic: 'ar',
  bengali: 'bn',
  chinese: 'zh',
  english: 'en',
  dothraki: 'mis'
};

const algoliaIndices = {
  arabic: 'news-ar',
  bengali: 'news-bn',
  chinese: 'news-zh',
  english: 'news',
  dothraki: 'news-mis'
};
```

### Aggiungere il file JSON i18next per la nuova lingua

Successivamente, vai nella cartella `config/i18n/locales`, crea una nuova cartella e dalle il nome della nuova lingua che stai aggiungendo. Ad esempio, se stai lanciando le News in Dothraki, crea una nuova cartella chiamata `dothraki`.

Quindi copia i file JSON dalla cartella `english` nella tua nuova cartella.

Nella nuova cartella, apri il file `serve.json` e sostituisci il suo contenuto con quanto segue:

```json
{
  "redirects": []
}
```

Quindi fail il commit e il push del tuo branch direttamente dal repo News.

> [!NOTE] Hai bisogno di essere in uno dei team con l'accesso al repo News per fare il push direttamente a News. Attualmente, solo i team dev, i18n e staff sono autorizzati a farlo.

Infine, apri una PR per la revisione.

Una volta che entrambe le PR per i repo CDN e News sono state approvate, è possibile effettuare il merge.

> [!NOTE] Deployment will be handled subsequently by the staff. Here is a sample PR: [freeCodeCamp/news#485](https://github.com/freeCodeCamp/news/pull/485) of how they do it and more details are available in the [staff-wiki](https://staff-wiki.freecodecamp.org/docs/flight-manuals/news-instances#jamstack---news--assets).

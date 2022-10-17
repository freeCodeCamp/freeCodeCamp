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

> [!ATTENTION] Anche se puoi farei delle traduzioni localmente per i test, ricordiamo che le traduzioni _non_ devono essere inviate attraverso GitHub ma solo tramite Crowdin. Assicurati di resettare il tuo codebase locale dopo che avrai finito con i test.

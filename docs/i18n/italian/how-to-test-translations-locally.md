# Come testare le traduzioni in locale

> [!NOTE] Questo processo non è richiesto, ma documentato nel caso tu voglia vedere la preview delle tue traduzioni.

Se vuoi testare le tue traduzioni in una istanza locale della piattaforma `/learn` di freeCodeCamp, assicurati prima di aver [preparato il codebase](how-to-setup-freecodecamp-locally.md).

## Attivare una lingua

Ci sono alcuni step da fare per avere una build del codebase nella lingua di tua scelta.

Prima, visita il file `config/i18n/all-langs.ts` per aggiungere la lingua alle lingue disponibili nella lista e configurare i valori. Ci sono quattro oggetti qui.

- `availableLangs`: Aggiungi il nome testuale della lingua agli array `client` e `curriculum`. Questo è il valore che sarà usato nel file `.env` più tardi.
- `auditedCerts`: Aggiungi il nome testuale della lingua come _chiave_, e aggiungi un array di variabili `SuperBlocks.{cert}` come _valori_. Questo dice al client quali certificazioni sono completamente tradotte.
- `i18nextCodes`: questi sono i codici ISO per le varie lingue. Dovrai aggiungere il codice ISO appropriato per la lingua che stai attivando. Questi devono essere unici per ogni lingua.
- `LangNames`: Questi sono i nomi delle lingue visualizzati nel menù di navigazione.
- `LangCodes`: Questi sono i codici delle lingue usati per formattare date e numeri. Questi devono essere codici Unicode CLDR invece di codici ISO.

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
```

Poi, apri il file `client/src/utils/algolia-locale-setup.ts`. Questi dati sono usati dalla barra di ricerca che carica gli articoli in `/news`. Anche se è poco probabile che tu stia testando questa funzione, se questi dati mancano per la tua lingua possono esserci degli errori nel costruire il codebase localmente.

Aggiungi un oggetto per la tua lingua all'oggetto `algoliaIndices`. Dovresti usare gli stessi valori dell'oggetto `english` per testare in locale, sostituendo la chiave `english` con il valore della tua lingua in `availableLangs`.

> [!NOTE] Se abbiamo già distribuito un'istanza della pubblicazione nella tua lingua target, puoi aggironare i valori per riflettere le istanze live. Altrimenti, usa i valori della pubblicazione inglese.

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

Infinine, nel file `.env`, dai a `CLIENT_LOCALE` e `CURRICULUM_LOCALE` il valore della tua nuova lingua (usando il valore in `availableLangs`.)

```txt
CLIENT_LOCALE=dothraki
CURRICULUM_LOCALE=dothraki
```

### RIlasciare un superblocco

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

Infine, l'array `languagesWithAuditedBetaReleases` dovrebbe essere aggiornato per includere la nuova lingua in questo modo:

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

## Caricare le traduzioni

Poiché la lingua non è ancora stata approvata per la produzione, i nostri script ancora non scaricheranno automaticamente le traduzioni. Solo lo staff ha accesso al download diretto delle traduzioni - sei il benvenuto a rivolgerti a noi attraverso la [chat room per i contributori](https://discord.gg/PRyKn3Vbay), o puoi tradurre i file markdown inglesi per le esigenze di test.

Una volta che avrai i file, li dovrai mettere nelle cartelle giuste. Per le sfide del curriculum, dovresti mettere le cartelle dei certificati (ad esempio `01-responsive-web-design`) nella cartella `curriculum/challenges/{lang}`. Per la nostra traduzione in Dothraki, questo sarebbe `curriculum/challenges/dothraki`. I file `.json` con le traduzioni del client vanno nella cartella `client/i18n/locales/{lang}`.

Una volta che questi saranno in posizione, dovresti essere in grado di eseguire `npm run develop` per vedere la versione tradotta di freeCodeCamp.

> [!ATTENTION] Anche se puoi farei delle traduzioni localmente per i test, ricordiamo che le traduzioni _non_ devono essere inviate attraverso GitHub ma solo tramite Crowdin. Assicurati di resettare il tuo codebase locale dopo che avrai finito con i test.

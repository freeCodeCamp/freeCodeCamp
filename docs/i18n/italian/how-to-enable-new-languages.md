# Rilasciare nuove lingue su `/learn`

To enable a new language on `/learn` (curriculum), you need to complete the following steps:

- Complete translating and approving the first 3 certifications on Crowdin. (New Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries)
- Complete translating and approving all strings in Learn UI project on Crowdin.
- Update Crowdin settings to add a custom language code for the new language.
- Open the 1st PR to configure GitHub Actions. You need to update 2 files:
  - `crowdin-download.client-ui.yml`
  - `crowdin-download.curriculum.yml`
- Open the 2nd PR to add other configurations. You need to update/add the following files:
  - Update `i18n.ts`
  - Update `superblocks.ts`
  - Update `algolia-locale-setup.ts`
  - Add `links.json`
  - Add `meta-tags.json`
  - Add `motivation.json`
- Ask infrastructure team to spin up the VM for the new language.
- Once the VM is ready, open the 3rd PR to show the new language in the navigation menu.

We will explain each step in the following sections.

## Aggiornare le impostazioni di Crowdin

Prima di poter rilasciare una nuova lingua, è necessario consentire alle lingue di fare il download da Crowdin. To configure that, you need to add a custom language code for your language.

In the `Curriculum` and `Learn UI` projects on Crowdin, you will need to select `Settings` > `Languages` from the sidebar. Poi scorri fino a `Language Mapping`, dove vedrai un'opzione per aggiungere dei codici personalizzati per le lingue. Aggiungi una nuova voce per la lingua che vuoi rilasciare, selezionando `language` come valore `Placeholder` e inserendo il nome della lingua in minuscolo e in un formato adatto a un URL per il `Custom code`. If you aren't sure what to use, or you don't have an admin role and can't see the settings, reach out in our contributor chat and we will assist you.

## Updating Workflows for GitHub Actions

Then you need to configure the syncing between Crowdin and GitHub.

You will need to add a step to the [`crowdin-download.client-ui.yml`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/.github/workflows/crowdin-download.client-ui.yml) and [`crowdin-download.curriculum.yml`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/.github/workflows/crowdin-download.curriculum.yml). Lo step sarà lo stesso per entrambi. Ad esempio, se vuoi abilitare il download per il Dothraki:

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

First, visit the [`config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts) file to add the language to the list of available languages and configure the values. Qui ci sono diversi oggetti.

- `Languages`: Aggiunge la nuova lingua all'enum `Languages` simile agli altri. Il valore della stringa qui sarà usato nel file `.env` per impostare un build della lingua in seguito.
- `availableLangs`: Aggiunge la nuova proprietà dall'enum `Languages` a entrambi gli array `client` e `curriculum`.
- `i18nextCodes`: Questi sono i codici ISO per le varie lingue. Dovrai aggiungere il codice ISO appropriato per la lingua che stai attivando. Devono essere unici per ogni lingua.
- `LangNames`: Questi sono i nomi delle lingue visualizzati nel menu di navigazione.
- `LangCodes`: Questi sono i codici delle lingue usati per formattare date e numeri. Questi devono essere codici Unicode CLDR invece di codici ISO.
- `hiddenLangs`: Queste lingue non saranno mostrate nel menu di navigazione. Viene usato per le lingue che non sono ancora pronte per il rilascio. Include your language in this array in the first PR and ask staff team to prepare the VM instance for your language. When the VM is ready, make another PR to remove it from the array.
- `rtlLangs`: Sono le lingue che si leggono da destra a sinistra.

Per esempio, se vuoi attivare la lingua Dothraki, il tuo oggetto `i18n.ts` dovrebbe essere come segue:

```js
export enum Languages {
  English = 'english',
  Espanol = 'espanol',
  Chinese = 'chinese',
  ChineseTraditional = 'chinese-traditional',
  Dothraki = 'dothraki'
}

export const availableLangs = {
  client: [
    Languages.English,
    Languages.Espanol,
    Languages.Chinese,
    Languages.ChineseTraditional,
    Languages.Dothraki
  ],
  curriculum: [
    Languages.English,
    Languages.Espanol,
    Languages.Chinese,
    Languages.ChineseTraditional,
    Languages.Dothraki
  ]
};

export const i18nextCodes = {
  [Languages.English]: 'en',
  [Languages.Espanol]: 'es',
  [Languages.Chinese]: 'zh',
  [Languages.ChineseTraditional]: 'zh-Hant',
  [Languages.Dothraki]: 'mis'
};

export enum LangNames = {
  [Languages.English]: 'English',
  [Languages.Espanol]: 'Español',
  [Languages.Chinese]: '中文（简体字）',
  [Languages.ChineseTraditional]: '中文（繁體字）',
  [Languages.Dothraki]: 'Dothraki'
};

export enum LangCodes = {
  [Languages.English]: 'en-US',
  [Languages.Espanol]: 'es-419',
  [Languages.Chinese]: 'zh',
  [Languages.ChineseTraditional]: 'zh-Hant',
  [Languages.Dothraki]: 'mis'
};

export const hiddenLangs = ['dothraki'];

export const rtlLangs = [''];
```

> [!NOTE] When a language has been set up in the deployment pipeline AND has a public `/learn` instance live, it can be removed from the `hiddenLangs` array and be made available to the public.

### Set Translated SuperBlocks

In the [config/superblocks.ts](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/superblocks.ts) file, add the new language to the `notAuditedSuperBlocks` object. This lists all the superblocks which are not fully translated. Add an array of superblocks which have not been fully translated to it. For example:

```js
export const notAuditedSuperBlocks: NotAuditedSuperBlocks = {
  ...
  [Languages.Dothraki]: [
    SuperBlocks.DataVis,
    SuperBlocks.RelationalDb,
    SuperBlocks.BackEndDevApis,
    SuperBlocks.QualityAssurance,
    SuperBlocks.SciCompPy,
    SuperBlocks.DataAnalysisPy,
    SuperBlocks.InfoSec,
    SuperBlocks.MachineLearningPy,
    SuperBlocks.CollegeAlgebraPy,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject
  ]
}
```

Be sure to only add the superblocks which are **not** fully translated and approved. The translated superblocks will be calculated from this object. When a new superblock is finished being fully translated, remove it from the array for that language.

See the `SuperBlocks` enum at the beginning of the same file for the full list of superblocks.

### Configurare la ricerca

Next, open the [`client/src/utils/algolia-locale-setup.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/src/utils/algolia-locale-setup.ts) file. Questi dati sono usati dalla barra di ricerca che carica gli articoli in `/news`. Anche se è poco probabile che tu stia testando questa funzione, se questi dati mancano per la tua lingua possono esserci degli errori nel costruire il codebase localmente.

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

  // If we already have /news in the target language up and running, you can update the values like this:
  // dothraki: {
  //   name: 'news-mis',
  //   searchPage: 'https://www.freecodecamp.org/dothraki/news/search/'
  // }
};
```

### Client UI

Dovrai fare un ulteriore passo per gestire le traduzioni dell'interfaccia utente client.

I processi automatici scaricano da Crowdin _una parte_ delle traduzioni dell'interfaccia, ma ci sono alcuni file che devono essere creati manualmente.

You will want to copy the following files from [`/client/i18n/locales/english`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/client/i18n/locales/english) to `/client/i18n/locales/<your-language>`, and apply translations as needed:

- `links.json`
- `meta-tags.json`
- `motivation.json`

You don't have to have everything in these 3 files translated at first. It's possible to translate only the relevant parts and make adjustments later.

#### `links.json`

You can replace any URLs that you have corresponding pages ready in your language.

For example, if you have the publication in your language, you can replace the URL for `"news"`. If you want to translate articles listed in the footer links, see [How to Translate Articles in the Footer Links](language-lead-handbook.md#how-to-translate-articles-in-the-footer-links).

#### `meta-tags.json`

This file contains metadata for the web page of `/learn` in your language. You can translate the values for `"title"`, `"description"`, and `"social-description"`. The value for `"youre-unsubscribed"` is used when someone unsubscribes from Quincy's weekly email.

Also, you can translate or add relevant keywords in your language to the `"keywords"` array.

#### `motivation.json`

This file contains the compliments that will be displayed to campers when they complete a challenge, and motivational quotes that are displayed on the top page of `/learn`.

You can translate them, or even replace them with relevant compliments/quotes of your choice in your language.

### Enabling Localized Videos

This section is applicable only if you have localized videos in the challenges. Otherwise, you can skip this section.

Per le sfide video, devi cambiare alcune cose. First, add the new locale to the GraphQL query in the [`client/src/templates/Challenges/video/Show.tsx`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/src/templates/Challenges/video/show.tsx) file. Per esempio, in questo modo aggiungeresti Dothraki alla query:

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

Quindi aggiungi un id per la nuova lingua ogni sfida video in un blocco verificato (`auditedCerts`). Per esempio, se `auditedCerts` in `i18n.ts` include `scientific-computing-with-python` per `dothraki`, allora devi aggiungere l'elemento `dothraki` in `videoLocaleIds`. Il frontespizio dovrebbe essere simile a questo:

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

And finally, update the challenge schema in `curriculum/schema/challengeSchema.js`.

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

## Testing Translations Locally

Se desideri testare le traduzioni localmente, prima di aggiungerle al nostro repository principale - salta i cambiamenti delle procedure di Crowdin. Segui i passaggi per abilitare una lingua, quindi scarica le traduzioni da Crowdin e caricale nel tuo codice locale.

Poiché la lingua non è ancora stata approvata per la produzione, i nostri script non scaricheranno automaticamente le traduzioni. Solo lo staff ha accesso al download diretto delle traduzioni - sei il benvenuto a rivolgerti a noi attraverso la [chat room per i contributori](https://discord.gg/PRyKn3Vbay), o puoi tradurre i file markdown inglesi per le esigenze di test.

Una volta che avrai i file, li dovrai mettere nelle cartelle giuste. Per le sfide del curriculum, dovresti mettere le cartelle dei certificati (ad esempio `01-responsive-web-design`) nella cartella `curriculum/challenges/{lang}`. Per la nostra traduzione in Dothraki, sarebbe `curriculum/challenges/dothraki`. I file `.json` con le traduzioni del client vanno nella cartella `client/i18n/locales/{lang}`.

Aggiorna il file `.env` in modo da poter utilizzare la tua lingua per `CLIENT_LOCALE` e `CURRICULUM_LOCALE`.

Una volta che questi saranno in posizione, dovresti essere in grado di eseguire `pnpm run develop` per vedere la versione tradotta di freeCodeCamp.

> [!TIP] Se costruisci il client in una lingua e poi vuoi costruirlo in una lingua diversa, dovrai usare il comando `pnpm run clean-and-develop` dopo aver cambiato il file `.env`, dato che Gatsby memorizzerà nella cache la prima lingua.

> [!ATTENTION] Anche se puoi farei delle traduzioni localmente per i test, ricordiamo che le traduzioni _non_ devono essere inviate attraverso GitHub ma solo tramite Crowdin. Assicurati di resettare il tuo codebase locale dopo che avrai finito con i test.

## Show the language in the navigation menu

When your prior PR is merged and the VM for your language is ready, make another PR to show your language in the navigation menu.

In [`config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts) file, you have included your language in `hiddenLangs` array in the prior PR. Remove it from the array now.

```js
export const hiddenLangs = []; // Remove your language from the array
```

When this PR is merged and gets deployed, the curriculum in your language will be live.

# Rilasciare nuove lingue su `/learn`

Per distribuire News per una nuova lingua, dovrai creare due PR. Una Pr sarà al [repo CDN](https://github.com/freeCodeCamp/cdn), e l'altra sarà al [repo News](https://github.com/freeCodeCamp/news).

## Prep the CDN Repo for the New Language

News ottiene i link di tendenza e i titoli degli articoli dal nostro CDN durante il build e li aggiunge al piè di pagina. News recupera anche i file Day.js dal CDN durante il build per localizzare date e orari per ogni lingua.

### Add a YAML File for Trending Articles

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

### Add a Day.js Locale File for the New Language

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

## Prep the News Repo for the New Language

Il [repo News](https://github.com/freeCodeCamp/news) prende i dati da un'istanza di Ghost, i file che hai aggiunto al CDN, fa il build di News e il deployment.

> [!WARN] Pull requests to the News repo _must_ come from the same repo. Non dovresti lavorare da un fork per questo passaggio.

### Modify the Main Config File

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

### Add the i18next JSON Files for the New Language

Successivamente, vai nella cartella `config/i18n/locales`, crea una nuova cartella e dalle il nome della nuova lingua che stai aggiungendo. Ad esempio, se stai lanciando le News in Dothraki, crea una nuova cartella chiamata `dothraki`.

Quindi copia i file JSON dalla cartella `english` nella tua nuova cartella.

In your new folder, open the `redirects.json` file and replace its contents with an empty array:

```json
[]
```

Quindi fail il commit e il push del tuo branch direttamente dal repo News.

> [!NOTE] Hai bisogno di essere in uno dei team con l'accesso al repo News per fare il push direttamente a News. Attualmente, solo i team dev, i18n e staff sono autorizzati a farlo.

Infine, apri una PR per la revisione.

Una volta che entrambe le PR per i repo CDN e News sono state approvate, è possibile effettuare il merge.

> [!NOTE] Il deployment sarà successivamente gestito dallo staff. Ecco una PR di esempio: [freeCodeCamp/news#485](https://github.com/freeCodeCamp/news/pull/485) su come si fa e altri dettagli disponibili in [staff-wiki](https://staff-wiki.freecodecamp.org/docs/flight-manuals/news-instances#jamstack---news--assets).

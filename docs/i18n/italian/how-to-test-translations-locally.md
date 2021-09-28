# Come testare le traduzioni in locale

> [!NOTE] Questo processo non è richiesto, ma documentato nel caso tu voglia vedere la preview delle tue traduzioni.

Se vuoi testare le tue traduzioni in una istanza locale della piattaforma `/learn` di freeCodeCamp, assicurati prima di aver [preparato il codebase](how-to-setup-freecodecamp-locally.md).

## Attivare una lingua

Ci sono alcuni step da fare per avere una build del codebase nella lingua di tua scelta.

Prima, visita il file `config/i18n/all-langs.js` per aggiungere la lingua alle lingue disponibili nella lista e configurare i valori. Ci sono quattro oggetti qui.

- `availableLangs`: Aggiungi il nome testuale della lingua agli array `client` e `curriculum`. Questo è il valore che sarà usato nel file `.env` più tardi.
- `i18nextCodes`: questi sono i codici ISO per le varie lingue. Dovrai aggiungere il codice ISO appropriato per la lingua che stai attivando. Questi devono essere unici per ogni lingua.
- `langDisplayNames`: Questi sono i nomi delle lingue visualizzati nel menù di navigazione.
- `langCodes`: Questi sono i codici delle lingue usati per formattare date e numeri. Questi devono essere codici Unicode CLDR invece di codici ISO.

Per esempio, se vuoi attivare la lingua Dothraki, il tuo oggetto `all-langs.js` dovrebbe essere come segue:

```js
const availableLangs = {
  client: ['english', 'espanol', 'chinese', 'chinese-traditional', 'dothraki'],
  curriculum: [
    'english',
    'espanol',
    'chinese',
    'chinese-traditional',
    'dothraki'
  ]
};

const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};

const langDisplayNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）',
  dothraki: 'Dothraki'
};

const langCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant',
  dothraki: 'mis'
};
```

Successivamente, apri il file `client/src/utils/algolia-locale-setup.js`. Questi dati sono usati dalla barra di ricerca che carica gli articoli in `/news`. Anche se è poco probabile che tu stia testando questa funzione, se questi dati mancano per la tua lingua possono esserci degli errori nel costruire il codebase localmente.

Aggiungi un oggetto per la tua lingua all'oggetto `algoliaIndices`. Dovresti usare i valori dell'oggetto `english` per testare in locale, sostituiendo la chiave `english` con il valore della tua lingua in `availableLangs`.

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

Quindi, devi dire al client quali certificazioni sono tradotte e quali sono ancora in inglese. Apri il file `utils/is-audited.js`. Aggiungi a `auditedCerts` una nuova chiave con il valore della tua lingua in `availableLangs`. Assegna il valore di quella chiave a un array contenente i _nomi con trattino_ (dashed name) per le certificazioni che sono state tradotte. Riferisciti ai dati esistenti per i nomi con trattino.

Continuando il lavoro per attivare Dothraki, abbiamo tradotto le prime tre certificazioni:

```js
const auditedCerts = {
  espanol: [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures'
  ],
  chinese: [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'front-end-development-libraries',
    'data-visualization',
    'back-end-development-and-apis',
    'quality-assurance'
  ],
  'chinese-traditional': [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'front-end-development-libraries',
    'data-visualization',
    'back-end-development-and-apis',
    'quality-assurance'
  ],
  dothraki: [
    'responsive-web-design',
    'javascript-algorithms-and-data-structures',
    'front-end-development-libraries'
  ]
};
```

Infinine, nel file `.env`, dai a `CLIENT_LOCALE` e `CURRICULUM_LOCALE` il valore della tua nuova lingua (usando il valore in `availableLangs`.)

```txt
CLIENT_LOCALE="dothraki"
CURRICULUM_LOCALE="dothraki"
```

## Enabling Localized Videos

For the video challenges, you need to change a few things. First add the new locale to the GraphQL query in the `client/src/templates/Challenges/video/Show.tsx` file. For example, adding Dothraki to the query:

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

Then add an id for the new language to any video challenge in an audited block. For example, if `auditedCerts` in `all-langs.js` includes `scientific-computing-with-python` for `dothraki`, then you must add a `dothraki` entry in `videoLocaleIds`.  The frontmatter should then look like this:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Update the `VideoLocaleIds` interface in `client/src/redux/prop-types` to include the new language.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

And finally update the challenge schema in `curriculum/schema/challengeSchema.js`.

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

## Loading Translations

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://chat.freecodecamp.org/channel/contributors), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] Anche se puoi farei delle traduzioni localmente per i test, ricordiamo che le traduzioni _non_ devono essere inviate attraverso GitHub ma solo tramite Crowdin. Assicurati di resettare il tuo codebase locale dopo che avrai finito con i test.

# Wie man Übersetzungen lokal testet

> [!NOTE] Dieser Vorgang ist nicht erforderlich, wird aber dokumentiert, falls du eine Vorschau darauf haben möchtest, wie deine Übersetzungen aussehen werden.

Wenn du deine Übersetzungen auf einer lokalen Instanz der freeCodeCamp `/learn`-Seite testen möchtest, stelle zuerst sicher, dass du die [Codebasis](how-to-setup-freecodecamp-locally.md) eingerichtet hast.

## Eine Sprache aktivieren

Es gibt ein paar Schritte, die du unternehmen musst, damit die Codebasis in deiner gewünschten Sprache erstellt werden kann.

Gehe zuerst in die Datei `config/i18n/all-langs.ts`, um die Sprache zur Liste der verfügbaren Sprachen hinzuzufügen und die Werte zu konfigurieren. Hier gibt es vier Objekte.

- `availableLangs`: Füge sowohl für den `client` als auch für das Studienplan(`curriculum`)-Array den Textnamen der Sprache hinzu. Dies ist der Wert, der später in der `.env`-Datei verwendet wird.
- `auditedCerts`: Füge den Textnamen der Sprache als _Schlüssel_ und ein Array von `SuperBlocks.{cert}`-Variablen als _Wert_ hinzu. So erfährt der Client, welche Zertifikate vollständig übersetzt sind.
- `i18nextCodes`: Das sind die ISO-Sprachcodes für jede Sprache. Du musst den entsprechenden ISO-Code für die Sprache hinzufügen, die du aktivieren willst. Diese müssen für jede Sprache einzigartig sein.
- `LangNames`: These are the display names for the language selector in the navigation menu.
- `LangCodes`: These are the language codes used for formatting dates and numbers. Dies sollten Unicode CLDR-Codes statt ISO-Codes sein.

Wenn du zum Beispiel Dothraki als Sprache aktivieren möchtest, sollten deine `all-langs.js`-Objekte wie folgt aussehen:

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

Als nächstes öffnest du die Datei `client/src/utils/algolia-locale-setup.ts`. Diese Daten werden für die Suchleiste verwendet, die `/news `-Artikel lädt. Es ist zwar unwahrscheinlich, dass du diese Funktion testen wirst, aber das Fehlen der Daten für deine Sprache kann zu Fehlern führen, wenn du versuchst, die Codebasis lokal zu erstellen.

Füge ein Objekt für deine Sprache zum `algoliaIndices`-Objekt hinzu. You should use the the same values as the `english` object for local testing, replacing the `english` key with your language's `availableLangs` value.

> [!NOTE] Wenn wir bereits eine Instanz von news in deiner Zielsprache bereitgestellt haben, kannst du die Werte aktualisieren, damit sie die Live-Instanz widerspiegeln. Andernfalls verwendest du die englischen Werte.

Wenn du Dothraki hinzufügen würdest:

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

Schließlich stellst du in deiner `.env`-Datei `CLIENT_LOCALE` und `CURRICULUM_LOCALE` auf deine neue Sprache ein (verwende den `availableLangs` Wert).

```txt
CLIENT_LOCALE=dothraki
CURRICULUM_LOCALE=dothraki
```

### Releasing a Superblock

After a superblock has been fully translated into a language, there are two steps to release it. First add the superblock enum to that language's `auditedCerts` array. So, if you want to release the new Responsive Web Design superblock for Dothraki, the array should look like this:

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

Finally, the `languagesWithAuditedBetaReleases` array should be updated to include the new language like this:

```ts
export const languagesWithAuditedBetaReleases: ['english', 'dothraki'];
```

This will move the new superblock to the correct place in the curriculum map on `/learn`.

## Aktivieren von lokalisierten Videos

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

Then add an id for the new language to any video challenge in an audited block. For example, if `auditedCerts` in `all-langs.ts` includes `scientific-computing-with-python` for `dothraki`, then you must add a `dothraki` entry in `videoLocaleIds`. The frontmatter should then look like this:

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

## Übersetzungen laden

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] Du kannst zwar lokal Übersetzungen zu Testzwecken vornehmen, aber wir erinnern alle daran, dass Übersetzungen _nicht_ über GitHub eingereicht werden sollten und nur über Crowdin erfolgen sollten. Achte darauf, dass du deine lokale Codebasis zurücksetzt, wenn du mit dem Testen fertig bist.

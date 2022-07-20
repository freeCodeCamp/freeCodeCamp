# How to Test Translations Locally

> [!NOTE] This process is not required, but documented in case you would like to preview what your translations will look like.

If you would like to test your translations on a local instance of the freeCodeCamp `/learn` site, first ensure you have [set up the codebase](how-to-setup-freecodecamp-locally.md).

## Enabling a Language

There are a few steps to take in order to allow the codebase to build in your desired language.

First, visit the `config/i18n/all-langs.ts` file to add the language to the available languages list and configure the values. There are four objects here.

- `availableLangs`: For both the `client` and `curriculum` arrays, add the text name of the language. This is the value that will be used in the `.env` file later.
- `auditedCerts`: Add the text name of the language as the _key_, and add an array of `SuperBlocks.{cert}` variables as the _value_. This tells the client which certifications are fully translated.
- `i18nextCodes`: These are the ISO language codes for each language. You will need to add the appropriate ISO code for the language you are enabling. These do need to be unique for each language.
- `LangNames`: These are the display names for the language selector in the navigation menu.
- `LangCodes`: These are the language codes used for formatting dates and numbers. These should be Unicode CLDR codes instead of ISO codes.

As an example, if you wanted to enable Dothraki as a language, your `all-langs.js` objects should look like this:

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
  chinese: '中文（簡體字）',
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

Next, open the `client/src/utils/algolia-locale-setup.ts` file. This data is used for the search bar that loads `/news` articles. While it is unlikely that you are going to test this functionality, missing the data for your language can lead to errors when attempting to build the codebase locally.

Add an object for your language to the `algoliaIndices` object. You should use the the same values as the `english` object for local testing, replacing the `english` key with your language's `availableLangs` value.

> [!NOTE] If we have already deployed an instance of news in your target language, you can update the values to reflect the live instance. Otherwise, use the English values.

If you were to add Dothraki:

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

Finally, in your `.env` file, set `CLIENT_LOCALE` and `CURRICULUM_LOCALE` to your new language (use the `availableLangs` value.)

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

## Loading Translations

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] While you may perform translations locally for the purpose of testing, we remind everyone that translations should _not_ be submitted through GitHub and should only be done through Crowdin. Be sure to reset your local codebase after you are done testing.

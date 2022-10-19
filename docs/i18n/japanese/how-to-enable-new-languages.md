# Deploying New Languages on `/learn`

Before you can release a new language, you will need to allow the languages to download from Crowdin.

## Updating Crowdin Settings

In the `Curriculum` and `Learn UI` projects, you will need to select `Project Settings` from the sidebar. Then scroll down to `Language Mapping`, where you will see an option to add custom language codes. Add a new entry for the language you are releasing, selecting `language` as the `Placeholder` value, and entering a URL-friendly lower-case spelling of your language's name for the `Custom code`. If you aren't sure what to use, reach out in our contributor chat and we will assist you.

## Updating Workflows

You will need to add a step to the `crowdin-download.client-ui.yml` and `crowdin-download.curriculum.yml`. The step for these will be the same. For example, if you want to enable Dothraki downloads:

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

Note that the `download_language` key needs to be set to the language code displayed on Crowdin.

## Enabling a Language

> [!NOTE] The above section with updating the workflows should be completed before proceeding - these need to be done in separate steps or the builds will fail.

There are a few steps to take in order to allow the codebase to build in your desired language.

First, visit the `config/i18n/all-langs.ts` file to add the language to the available languages list and configure the values. There are several objects here.

- `availableLangs`: For both the `client` and `curriculum` arrays, add the text name of the language. This is the value that will be used in the `.env` file later.
- `auditedCerts`: Add the text name of the language as the _key_, and add an array of `SuperBlocks.{cert}` variables as the _value_. This tells the client which certifications are fully translated.
- `i18nextCodes`: These are the ISO language codes for each language. You will need to add the appropriate ISO code for the language you are enabling. These do need to be unique for each language.
- `LangNames`: These are the display names for the language selector in the navigation menu.
- `LangCodes`: These are the language codes used for formatting dates and numbers. These should be Unicode CLDR codes instead of ISO codes.
- `hiddenLangs`: These languages will not be displayed in the navigation menu. This is used for languages that are not yet ready for release.

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

> [!NOTE] When a language has been set up in the deployment pipeline AND has a public `/news` instance live, it can be removed from the `hiddenLangs` array and be made available to the public.

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
};
```

Finally, if the superblock is in a "new" state (that is, replacing a legacy superblock), the `languagesWithAuditedBetaReleases` array should be updated to include the new language like this:

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

## Client UI

You will need to take an additional step to handle the client UI translations.

The Crowdin workflows will automatically pull down _some_ of the UI translations, but there are a couple of files that need to be moved manually.

You will want to copy the following files from `/client/i18n/locales/english` to `/client/i18n/locales/<your-language>`, and apply translations as needed:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Testing Translations Locally

If you would like to test translations locally, before adding them to our main repository - skip the Crowdin workflow changes. Follow the steps for enabling a language, then download the translations from Crowdin and load them into your local code.

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Update your `.env` file to use your new language for `CLIENT_LOCALE` and `CURRICULUM_LOCALE`.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] While you may perform translations locally for the purpose of testing, we remind everyone that translations should _not_ be submitted through GitHub and should only be done through Crowdin. Be sure to reset your local codebase after you are done testing.

# Deploying New Languages on `/news`

To deploy News for a new language, you'll need to create two PRs. One PR will be to the [CDN repo](https://github.com/freeCodeCamp/cdn), and the other will be to the [News repo](https://github.com/freeCodeCamp/news).

## Prep the CDN Repo for the New Language

News sources trending links and article titles from our CDN during the build and adds them to the footer. News also fetches Day.js files from the CDN during the build to localize dates and times for each language.

### Add a YAML File for Trending Articles

Clone the [CDN repo](https://github.com/freeCodeCamp/cdn) and create a new branch.

In the [`build/universal/trending`](https://github.com/freeCodeCamp/cdn/tree/main/build/universal/trending) directory, create a new file and name it `language.yaml`. For example, if you are launching Dothraki News, name the file `dothraki.yaml`.

Then copy the contents of the [`english.yaml`](https://github.com/freeCodeCamp/cdn/blob/main/build/universal/trending/english.yaml) trending file and paste it into the new YAML file you just created.

The contents will look something like this:

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

By default, Day.js only includes English as a locale. To enable it to work with other languages, you need to add a new Day.js locale file to the CDN.

In the [`build/news-assets/dayjs/<version>/locale`](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale) directory, create a new file and name it `isocode.min.js`. For example, if you are launching Dothraki News, name the file `mis.min.js`.

> [!NOTE] The version number will change as the dependencies are updated.

Then, visit [this page on cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) with all available Day.js files for the version we're using, find the `https://cdnjs.cloudflare.com/ajax/libs/dayjs/<version>/locale/isocode.min.js` link for the new language, and open it in a new tab.

> [!NOTE] You only need to add the .../dayjs/\<version\>/_locale_/isocode.min.js locale file. You do not need to add any other Day.js files.

Copy the Day.js locale code from the new tab into the new file you created. For example, here is an un-minified version of the English locale code for Day.js:

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

Then open a PR to the CDN repo to add both the YAML and Day.js files for review.

## Prep the News Repo for the New Language

The [News repo](https://github.com/freeCodeCamp/news) pulls data from a Ghost instance, the files you added to the CDN, builds News, and deploys it.

> [!WARN] Pull requests to the news repo _must_ come from the same repo. You should not work off of a fork for this step.

### Modify the Main Config File

Clone the News repo and create a new branch.

Open the `config/index.js` file to add the new language and configure the necessary values. There are a few objects and arrays to modify:

- `locales`: This array contains the active and upcoming News languages. These are the values that are used in the `.env` file to choose the Ghost instance and UI to use for each build. Add the text name of the new language in lowercase to this array.
- `localeCodes`: This object is a map of ISO codes for each language, and is used to configure i18next before building the UI. To add a new language, use the lowercase language name as the _key_ and the ISO 639-1 language code as the _value_.
- `algoliaIndices`: This object is a map of Algolia indices for each language. To add a new language, use the lowercase language name as the _key_, and `news-` followed by the lowercase ISO 639-1 language code as the _value_.

> [!NOTE] If you are unsure about the string to use while setting `algoliaIndices`, send a message to Kris (@scissorsneedfoodtoo), or someone else with access to Algolia, and ask them to check.

For example, if you are launching Dothraki News, here are what the objects / arrays above should look like:

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

Next, go to the `config/i18n/locales` directory, create a new folder, and give it the name of the new language you're adding. For example, if you're launching Dothraki News, create a new folder named `dothraki`.

Then copy the JSON files from the `english` directory to your new folder.

In your new folder, open the `serve.json` file and replace its contents with the following:

```json
{
  "redirects": []
}
```

Then commit and push your branch directly to the News repo.

> [!NOTE] You need to be on one of the teams with access to the News repo to push branches directly to News. Currently, only the dev, i18n, and staff teams are allowed to do this.

Finally, open a PR for review.

Once both your PRs to the CDN and News repo have been approved, they can be merged. Deployment will be handled subsequently by the staff.

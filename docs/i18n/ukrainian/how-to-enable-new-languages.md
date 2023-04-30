# Deploying New Languages on `/learn`

Before you can release a new language, you will need to allow the languages to download from Crowdin.

## Оновлення налаштувань Crowdin

На бічній панелі проєктів `Curriculum` та `Learn UI` вам потрібно обрати `Project Settings`. Прокрутіть вниз до `Language Mapping`, де ви побачите опцію додавання нового коду мови. Додайте нову мову, обравши значення `language` для `Placeholder` та ввівши назву мови у нижньому регістрі для `Custom code`. Якщо ви не впевнені, що вводити, ми допоможемо у нашому чаті помічників.

## Оновлення потоку робіт

Вам потрібно буде додати крок до `crowdin-download.client-ui.yml` та `crowdin-download.curriculum.yml`. Він буде однаковим. Наприклад, якщо ви хочете завантажувати дотракійську мову:

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

Зауважте, що ключ `download_language` потрібно встановити на код мови, вказаний на Crowdin.

## Додавання мови

> [!NOTE] Перед тим як продовжити, потрібно виконати вищеподаний розділ оновлення потоку робіт. Їх потрібно виконати окремо, інакше збірка не виконуватиметься.

Щоб дозволити кодовій базі функціонувати на обраній вами мові, потрібно зробити декілька кроків.

Спочатку відвідайте файл `config/i18n.ts`, щоб додати мову до списку доступних мов та налаштувати значення. У ньому розміщено декілька об’єктів.

- `Languages`: додайте нову мову до запису `Languages`, схоже до інших. Значення рядка пізніше буде використане у файлі `.env`, щоб налаштувати збірку мови.
- `availableLangs`: додайте нову властивість із запису `Languages` до масивів `client` та `curriculum`.
- `i18nextCodes`: мовні коди ISO для кожної мови. Вам потрібно додати відповідний код ISO для мови, з якою працюєте. Вони повинні бути унікальними для кожної мови.
- `LangNames`: назви мов для перемикача мови у навігаційному меню.
- `LangCodes`: мовні коди, які використовуються для форматування дат і чисел. Ними повинні бути коди Unicode CLDR замість кодів ISO.
- `hiddenLangs`: мови, які не показано у навігаційному меню. Використовують для мов, які не готові до випуску.
- `rtlLangs`: мови, які читаються справа наліво.

Наприклад, якщо ви хочете використовувати дотракійську мову, об’єкти `i18n.ts` повинні виглядати так:

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

> [!NOTE] Коли мова буде налаштована у послідовності розгортання ТА матиме публічний активний екземпляр `/news`, її можна видалити з масиву `hiddenLangs` та зробити доступною.

### Configure the Language Superblock Order

In the [config/superblock-order.ts](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/superblock-order.ts) file, you need to set the order and state of all the superblocks for the new language in the `superBlockOrder` object. Copy one of the language keys and all its values, paste it to the bottom of the object (or wherever), and change the key to your new language from the `Languages` enum.

```js
export const superBlockOrder: SuperBlockOrder = {
  ...
  [Languages.Dothraki]: {
    [CurriculumMaps.Landing]: [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy
    ],
    [CurriculumMaps.Learn]: {
      [TranslationStates.Audited]: {
        [SuperBlockStates.Current]: [
          SuperBlocks.RespWebDesignNew,
          SuperBlocks.JsAlgoDataStruct,
          SuperBlocks.FrontEndDevLibs,
          SuperBlocks.DataVis,
          SuperBlocks.RelationalDb,
          SuperBlocks.BackEndDevApis,
          SuperBlocks.QualityAssurance,
          SuperBlocks.SciCompPy,
          SuperBlocks.DataAnalysisPy,
          SuperBlocks.InfoSec,
          SuperBlocks.MachineLearningPy,
          SuperBlocks.CodingInterviewPrep
        ],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [SuperBlocks.JsAlgoDataStructNew],
        [SuperBlockStates.Legacy]: [SuperBlocks.RespWebDesign]
      },
      [TranslationStates.NotAudited]: {
        [SuperBlockStates.Current]: [],
        [SuperBlockStates.New]: [],
        [SuperBlockStates.Upcoming]: [],
        [SuperBlockStates.Legacy]: []
      }
    }
  }
}
```

The order of the superblocks in this object is how they appear on the "Landing" page and "Learn" maps. Follow the comments in that file so you know how you are allowed to order the superblocks, then move them to their proper places for the new language.

> [!ATTENTION] Do not change the order of any of the keys in the object, just move the superblocks to the different arrays

The `CurriculumMaps.Landing` array should contain exactly one superblock for all our current certifications, and the `CurriculumMaps.Learn` object should have all existing superblocks in it. Translated superblocks go in `TranslationStates.Audited` and non-translated superblocks go in `TranslationStates.NotAudited`. Each of those two objects has four different states a superblock can be in.

- `SuperBlockStates.Current`: Means that the superblock is current, `Responsive Web Design` for example.
- `SuperBlockStates.New`: These only show up when `SHOW_NEW_CURRICULUM` is set to `true` in your `.env` file. It is for displaying new superblocks on a specific build. For example, when we released the new RWD, we only showed it on English to start.
- `SuperBlockStates.Upcoming`: These only show up when `SHOW_UPCOMING_CHANGES` is set to `true` in your `.env` file. It is to show superblocks locally while they are in development. Or, if you just need to hide a superblock from the map for some other reason.
- `SuperBlockStates.Legacy`: A superblock is moved here when a newer version of that superblock has been fully translated and replaced it.

### Налаштування пошуку

Потім відкрийте файл `client/src/utils/algolia-locale-setup.ts`. Ці дані використовуються для рядка пошуку, який завантажує статті `/news`. Хоча й малоймовірно, що ви будете тестувати цю функціональність, відсутність даних мови може призвести до помилок при спробі створити кодову базу локально.

Додайте об’єкт своєї мови до об’єкта `algoliaIndices`. Використовуйте значення об’єкта `english` для локального тестування, замінивши ключ `english` на значення своєї мови `availableLangs`.

> [!NOTE] Якщо ви вже розгорнули екземпляр новин потрібною мовою, ви можете оновити значення, щоб зобразити активний екземпляр. В іншому випадку використовуйте значення англійської мови.

Якби ви додали дотракійську:

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

## Додавання локалізованих відео

Вам потрібно дещо змінити стосовно відеозавдань. Спочатку додайте нову локаль до запиту GraphQL у файлі `client/src/templates/Challenges/video/Show.tsx`. Ось так додається дотракійська мова:

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

Потім додайте ідентифікатор нової мови до будь-якого відеозавдання в перевіреному блоці. Наприклад, якщо `auditedCerts` у `i18n.ts` містить `scientific-computing-with-python` для `dothraki`, тоді ви повинні додати запис `dothraki` в `videoLocaleIds`. Тоді вступна частина має виглядати так:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Оновіть інтерфейс `VideoLocaleIds` у `client/src/redux/prop-types`, додавши нову мову.

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

Вкінці оновіть схему завдань у `curriculum/schema/challengeSchema.js`.

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

## Інтерфейс клієнта

Вам потрібно здійснити додатковий крок для роботи з перекладами інтерфейсу клієнта.

Робочі процеси на Crowdin автоматично завантажують _деякі_ переклади інтерфейсу, однак певні файли потрібно перемістити вручну.

Вам потрібно скопіювати наступні файли з `/client/i18n/locales/english` до `/client/i18n/locales/<your-language>` та застосувати переклади там, де потрібно:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Тестування перекладів локально

Якщо ви хочете перевірити переклади локально, перш ніж додати їх до нашого основного репозиторію, то пропустіть зміни робочого процесу на Crowdin. Виконайте кроки для додавання мови, а потім завантажте переклади з Crowdin і додайте їх до свого локального коду.

Оскільки мова не затверджена для випуску, наші скрипти поки не завантажуватимуть переклади автоматично. Лише робочий персонал має доступ до завантаження перекладів. Ви можете звернутися до нас у [чаті](https://discord.gg/PRyKn3Vbay) або можете локально перекласти файли розмітки з метою тестування.

Як тільки ви отримаєте файли, їх потрібно розмістити у правильному каталозі. Щодо завдань навчальної програми: вам потрібно розмістити папки сертифікацій (наприклад, `01-responsive-web-design`) в межах каталогу `curriculum/challenges/{lang}`. Для перекладів дотракійською це був би `curriculum/challenges/dothraki`. Файли `.json` з перекладом клієнта будуть розміщені в каталозі `client/i18n/locales/{lang}`.

Оновіть файл `.env` так, щоб він використовував нову мову для `CLIENT_LOCALE` та `CURRICULUM_LOCALE`.

Як тільки все на місці, ви зможете запустити `pnpm run develop`, щоб переглянути перекладену версію freeCodeCamp.

> [!TIP] Якщо ви побудували клієнта однією мовою та потім хочете побудувати його іншою мовою, вам потрібно використати команду `pnpm run clean-and-develop` після зміни файлу `.env`, оскільки Gatsby кешуватиме першу мову.

> [!ATTENTION] Ви можете працювати з перекладами локально, щоб провести тестування. Ми нагадуємо, що переклади _не_ потрібно надсилати через GitHub, а лише через Crowdin. Не забудьте скинути локальну кодову базу після закінчення тестування.

# Deploying New Languages on `/news`

To deploy News for a new language, you'll need to create two PRs. One PR will be to the [CDN repo](https://github.com/freeCodeCamp/cdn), and the other will be to the [News repo](https://github.com/freeCodeCamp/news).

## Prep the CDN Repo for the New Language

News sources trending links and article titles from our CDN during the build and adds them to the footer. News also fetches Day.js files from the CDN during the build to localize dates and times for each language.

### Додайте файл YAML для популярних статей

Клонуйте [репозиторій CDN](https://github.com/freeCodeCamp/cdn) та створіть нову гілку.

Створіть новий файл у каталозі [`build/universal/trending`](https://github.com/freeCodeCamp/cdn/tree/main/build/universal/trending) та назвіть його `language.yaml`. Наприклад, якщо ви запускаєте новини дотракійською мовою, назвіть файл `dothraki.yaml`.

Потім скопіюйте вміст файлу [`english.yaml`](https://github.com/freeCodeCamp/cdn/blob/main/build/universal/trending/english.yaml) до нового файлу YAML, який ви щойно створили.

Вміст виглядатиме приблизно так:

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

### Додайте файл локалі Day.js для нової мови

Day.js містить лише англійську локаль за замовчуванням. Щоб дозволити роботу з іншими мовами, потрібно додати новий файл локалі Day.js до CDN.

Створіть новий файл у каталозі [`build/news-assets/dayjs/<version>/locale`](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale) та назвіть його `isocode.min.js`. Наприклад, якщо ви запускаєте новини дотракійською мовою, назвіть файл `mis.min.js`.

> [!NOTE] Номер версії буде змінено, оскільки залежності оновлюються.

Потім відвідайте [цю сторінку на cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) з усіма доступними файлами Day.js для вашої версії, знайдіть посилання `https://cdnjs.cloudflare.com/ajax/libs/dayjs/<version>/locale/isocode.min.js` для нової мови та відкрийте його у новій вкладці.

> [!NOTE] Вам потрібно додати лише файл локалі .../dayjs/\<version\>/_locale_/isocode.min.js. Не додавайте інших файлів Day.js.

Скопіюйте код локалі Day.js з нової вкладки до файлу, який ви створили. Наприклад, ось мінімізована версія коду англійської локалі для Day.js:

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

Потім відкрийте PR до репозиторію CDN, щоб додати файли YAML та Day.js для перегляду.

## Prep the News Repo for the New Language

The [News repo](https://github.com/freeCodeCamp/news) pulls data from a Ghost instance, the files you added to the CDN, builds News, and deploys it.

> [!WARN] Pull requests to the News repo _must_ come from the same repo. You should not work off of a fork for this step.

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

### Додайте файли JSON i18next для нової мови

Перейдіть до каталогу `config/i18n/locales`, створіть нову папку та надайте їй назву мови, яку додаєте. Наприклад, якщо ви додаєте новини дотракійською мовою, створіть папку під назвою `dothraki`.

Потім скопіюйте файли JSON з каталогу `english` до нової папки.

Відкрийте файл `serve.json` у новій папці та замініть його вміст на наступне:

```json
{
  "redirects": []
}
```

Then commit and push your branch directly to the News repo.

> [!NOTE] You need to be on one of the teams with access to the News repo to push branches directly to News. Currently, only the dev, i18n, and staff teams are allowed to do this.

Finally, open a PR for review.

Once both your PRs to the CDN and News repo have been approved, they can be merged.

> [!NOTE] Deployment will be handled subsequently by the staff. Here is a sample PR: [freeCodeCamp/news#485](https://github.com/freeCodeCamp/news/pull/485) of how they do it and more details are available in the [staff-wiki](https://staff-wiki.freecodecamp.org/docs/flight-manuals/news-instances#jamstack---news--assets).

# Додавання нових мов для `/learn`

Перш ніж випустити нову мову, потрібно дозволити завантаження мов з Crowdin.

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

### Налаштуйте порядок суперблоків мови

У файлі [config/superblock-order.ts](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/superblock-order.ts) потрібно встановити порядок та стан усіх суперблоків нової мови з об’єкту `superBlockOrder`. Скопіюйте один з мовних ключів і всі його значення, вставте їх знизу об’єкта та змініть ключ на нову мову з переліку `Languages`.

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

У такому порядку суперблоки з’являються на цільовій сторінці та навчальних картах. Дотримуйтесь коментарів у цьому файлі, щоб розмістити суперблоки у правильному порядку, а потім перемістіть їх до потрібних місць нової мови.

> [!ATTENTION] Не змінюйте порядок ключів у об‘єкті, а просто перемістіть суперблоки в інші масиви

Масив `CurriculumMaps.Landing` повинен містити один суперблок для всіх актуальних сертифікацій, а об’єкт `CurriculumMaps.Learn` повинен містити всі наявні суперблоки. Перекладені суперблоки розміщуються у `TranslationStates.Audited`, а неперекладені — у `TranslationStates.NotAudited`. Суперблоки цих двох об’єктів можуть перебувати у чотирьох станах.

- `SuperBlockStates.Current`: означає, що суперблок є актуальним (наприклад, `Responsive Web Design`).
- `SuperBlockStates.New`: з’являється лише тоді, коли `SHOW_NEW_CURRICULUM` налаштовано на `true` у файлі `.env`. Використовується для показу нових суперблоків певної збірки. Наприклад, коли ми опублікували новий адаптивний вебдизайн, він був доступний лише на англійській версії.
- `SuperBlockStates.Upcoming`: з’являється лише тоді, коли `SHOW_UPCOMING_CHANGES` налаштовано на `true` у файлі `.env`. Використовується для локального показу суперблоків у розробці. Або у випадку, якщо потрібно приховати суперблок з карти.
- `SuperBlockStates.Legacy`: суперблок переміщено сюди, коли його новіша версія була повністю перекладена та замінила стару.

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

# Додавання нових мов для `/news`

Щоб започаткувати новини новою мовою, потрібно створити два PR. Один PR буде для [репозиторію CDN](https://github.com/freeCodeCamp/cdn), а інший — для [репозиторію News](https://github.com/freeCodeCamp/news).

## Приготуйте репозиторій CDN для нової мови

News отримує популярні посилання й назви статей із нашого CDN під час збірки та додає їх у нижній колонтитул. News також отримує файли Day.js із CDN під час збірки, щоб локалізувати дати та час кожної мови.

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

## Приготуйте репозиторій News для нової мови

[Репозиторій News](https://github.com/freeCodeCamp/news) отримує дані з екземпляра Ghost, файли, додані до CDN, будує News та розробляє їх.

> [!WARN] PR для репозиторію News _повинні_ надходити з одного репозиторію. Не працюйте над цим кроком з форку.

### Змініть головний файл конфігурації

Клонуйте репозиторій News та створіть нову гілку.

Відкрийте файл `config/index.js`, щоб додати нову мову та налаштувати потрібні значення. Потрібно змінити декілька об’єктів та масивів:

- `locales`: масив, який містить активні та майбутні мови для новин. Це значення, які використовуються у файлі `.env`, щоб обрати екземпляр та інтерфейс Ghost для кожної збірки. Додайте назву нової мови в нижньому регістрі до цього масиву.
- `localeCodes`: цей об’єкт є картою кодів ISO для кожної мови, який використовують, щоб налаштувати i18next перед побудовою інтерфейсу. Щоб додати нову мову, використайте назву мови в нижньому регістрі як _ключ_ та код мови ISO 639-1 як _значення_.
- `algoliaIndices`: цей об’єкт є картою індексів Algolia для кожної мови. Щоб додати нову мову, використайте назву мови в нижньому регістрі як _ключ_ та `news-` із кодом мови ISO 639-1 у нижньому регістрі як _значення_.

> [!NOTE] Якщо ви невпевнені, який рядок потрібно використовувати при налаштуванні `algoliaIndices`, напишіть Крісу (@scissorsneedfoodtoo) або комусь іншому з доступом до Algolia.

Наприклад, якщо ви запускаєте новини дотракійською мовою, об’єкти/масиви повинні виглядати ось так:

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

Потім зафіксуйте та відправте гілку до репозиторію News.

> [!NOTE] Ви повинні знаходитись в одній з команд з доступом до репозиторію News, щоб відправити гілки одразу до News. Наразі такий доступ мають лише dev, i18n та staff.

Вкінці відкрийте PR для розгляду.

Як тільки ваші PR для CDN та News затверджені, їх можна об’єднати.

> [!NOTE] Розгортання оброблятиме робочий персонал. Ось зразок PR [freeCodeCamp/news#485](https://github.com/freeCodeCamp/news/pull/485) з прикладом. Для детальнішої інформації див. [staff-wiki](https://staff-wiki.freecodecamp.org/docs/flight-manuals/news-instances#jamstack---news--assets).

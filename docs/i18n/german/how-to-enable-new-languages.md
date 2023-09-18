# Neue Sprachen auf `/learn` bereitstellen

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

## Aktualisierung der Crowdin-Einstellungen

Bevor du eine neue Sprache freigeben kannst, musst du zulassen, dass die Sprachen von Crowdin heruntergeladen werden können. To configure that, you need to add a custom language code for your language.

In the `Curriculum` and `Learn UI` projects on Crowdin, you will need to select `Settings` > `Languages` from the sidebar. Danach scrollst du nach unten zu `Language Mapping`, wo du eine Option zum Hinzufügen eigener Sprachcodes findest. Füge einen neuen Eintrag für die Sprache hinzu, die du veröffentlichen willst, indem du `language` als `Placeholder`-Wert auswählst und eine URL-freundliche Kleinschreibung des Namens deiner Sprache für den `Custom code` einträgst. If you aren't sure what to use, or you don't have an admin role and can't see the settings, reach out in our contributor chat and we will assist you.

## Updating Workflows for GitHub Actions

Then you need to configure the syncing between Crowdin and GitHub.

You will need to add a step to the [`crowdin-download.client-ui.yml`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/.github/workflows/crowdin-download.client-ui.yml) and [`crowdin-download.curriculum.yml`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/.github/workflows/crowdin-download.curriculum.yml). Der Schritt für die beiden ist der gleiche. Zum Beispiel, wenn du Dothraki-Downloads aktivieren möchtest:

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

Beachte, dass der Schlüssel `download_language` auf den Sprachcode festgelegt werden muss, der auf Crowdin angezeigt wird.

## Eine Sprache aktivieren

> [!NOTE] Der obige Abschnitt mit der Aktualisierung der Workflows sollte abgeschlossen sein, bevor du fortfährst - dies muss in getrennten Schritten geschehen, sonst schlagen die Builds fehl.

Es gibt ein paar Schritte, die du unternehmen musst, damit die Codebasis in deiner gewünschten Sprache erstellt werden kann.

First, visit the [`shared/config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts) file to add the language to the list of available languages and configure the values. Hier gibt es mehrere Objekte.

- `Languages`: Add the new language to `Languages` enum, similar to the others. The string value here will be used in the `.env` file to set a build language later.
- `availableLangs`: Add the new property from the `Languages` enum to both the `client` and `curriculum` arrays.
- `i18nextCodes`: Dies sind die ISO-Sprachcodes für jede Sprache. Du musst den entsprechenden ISO-Code für die Sprache hinzufügen, die du aktivieren möchtest. Diese müssen für jede Sprache einzigartig sein.
- `LangNames`: Dies sind die Anzeigenamen für die Sprachauswahl im Navigationsmenü.
- `LangCodes`: Dies sind die Sprachcodes, die für die Formatierung von Datumsangaben und Zahlen verwendet werden. Dies sollten Unicode CLDR-Codes statt ISO-Codes sein.
- `hiddenLangs`: Diese Sprachen werden im Navigationsmenü nicht angezeigt. Dies wird für Sprachen verwendet, die noch nicht zur Veröffentlichung bereit sind. Include your language in this array in the first PR and ask staff team to prepare the VM instance for your language. When the VM is ready, make another PR to remove it from the array.
- `rtlLangs`: These are languages that read from right to left.

As an example, if you wanted to enable Dothraki as a language, your `i18n.ts` objects should look like this:

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

In the [shared/config/superblocks.ts](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/shared/config/superblocks.ts) file, add the new language to the `notAuditedSuperBlocks` object. This lists all the superblocks which are not fully translated. Add an array of superblocks which have not been fully translated to it. For example:

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
    SuperBlocks.FoundationalCSharp,
    SuperBlocks.CodingInterviewPrep,
    SuperBlocks.ProjectEuler,
    SuperBlocks.JsAlgoDataStructNew,
    SuperBlocks.TheOdinProject
  ]
}
```

Be sure to only add the superblocks which are **not** fully translated and approved. The translated superblocks will be calculated from this object. When a new superblock is finished being fully translated, remove it from the array for that language.

See the `SuperBlocks` enum at the beginning of the same file for the full list of superblocks.

### Configure Search

Next, open the [`client/src/utils/algolia-locale-setup.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/src/utils/algolia-locale-setup.ts) file. Diese Daten werden für die Suchleiste verwendet, die `/news `-Artikel lädt. Es ist zwar unwahrscheinlich, dass du diese Funktion testen wirst, aber das Fehlen der Daten für deine Sprache kann zu Fehlern führen, wenn du versuchst, die Codebasis lokal zu erstellen.

Füge ein Objekt für deine Sprache zum `algoliaIndices`-Objekt hinzu. Du solltest die gleichen Werte wie das `english`-Objekt für lokale Tests verwenden, indem du den `english`-Schlüssel durch den `availableLangs`-Wert deiner Sprache ersetzt.

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

  // If we already have /news in the target language up and running, you can update the values like this:
  // dothraki: {
  //   name: 'news-mis',
  //   searchPage: 'https://www.freecodecamp.org/dothraki/news/search/'
  // }
};
```

### Client UI

Du musst einen zusätzlichen Schritt unternehmen, um die Übersetzungen der Client-UI zu übernehmen.

Die Crowdin-Workflows ziehen automatisch _einige_ der UI-Übersetzungen herunter, aber es gibt ein paar Dateien, die manuell verschoben werden müssen.

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

Für die Videoaufgaben musst du ein paar Dinge ändern. First, add the new locale to the GraphQL query in the [`client/src/templates/Challenges/video/Show.tsx`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/src/templates/Challenges/video/show.tsx) file. Zum Beispiel, indem man Dothraki zur Abfrage hinzufügt:

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

Füge dann eine ID für die neue Sprache zu jeder Videoaufgabe in einem geprüften Block hinzu. For example, if `auditedCerts` in `i18n.ts` includes `scientific-computing-with-python` for `dothraki`, then you must add a `dothraki` entry in `videoLocaleIds`. Das Front Matter sollte dann so aussehen:

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

Aktualisiere das `VideoLocaleIds`-Interface in `client/src/redux/prop-types`, um die neue Sprache aufzunehmen.

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

Wenn du Übersetzungen lokal testen möchtest, bevor du sie zu unserem main-Repository hinzufügst, kannst du die Änderungen am Crowdin-Workflow überspringen. Folge den Schritten zur Aktivierung einer Sprache, lade dann die Übersetzungen von Crowdin herunter und lade sie in deinen lokalen Code.

Da die Sprache noch nicht für die Produktion freigegeben wurde, laden unsere Skripte die Übersetzungen noch nicht automatisch herunter. Nur Mitarbeiter haben die Möglichkeit, die Übersetzungen direkt herunterzuladen - Du kannst uns gerne in unserem ["Contributors" Chatraum](https://discord.gg/PRyKn3Vbay) ansprechen, oder du kannst die englischen Markdown-Dateien lokal zu Testzwecken übersetzen.

Sobald du die Dateien hast, musst du sie im richtigen Verzeichnis ablegen. Für die Studienplanaufgaben solltest du die Zertifizierungsordner (z.B. `01-responsive-web-design`) in das Verzeichnis `curriculum/challenges/{lang}` ablegen. Für unsere Dothraki-Übersetzungen wäre dies `curriculum/challenges/dothraki`. Die Client-Übersetzungsdateien `.json` werden im Verzeichnis `client/i18n/locales/{lang}` abgelegt.

Aktualisiere deine `.env`-Datei, um deine neue Sprache für `CLIENT_LOCALE` und `CURRICULUM_LOCALE` zu verwenden.

Once these are in place, you should be able to run `pnpm run develop` to view your translated version of freeCodeCamp.

> [!TIP] If you build the client in one language and then want to build it in a different language, you will need to use the command `pnpm run clean-and-develop` after changing the `.env` file, as Gatsby will cache the first language.

> [!ATTENTION] Du kannst zwar lokal Übersetzungen zu Testzwecken vornehmen, aber wir erinnern alle daran, dass Übersetzungen _nicht_ über GitHub eingereicht werden sollten und nur über Crowdin erfolgen sollten. Achte darauf, dass du deine lokale Codebasis zurücksetzt, wenn du mit dem Testen fertig bist.

## Show the language in the navigation menu

When your prior PR is merged and the VM for your language is ready, make another PR to show your language in the navigation menu.

In [`shared/config/i18n.ts`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n.ts) file, you have included your language in `hiddenLangs` array in the prior PR. Remove it from the array now.

```js
export const hiddenLangs = []; // Remove your language from the array
```

When this PR is merged and gets deployed, the curriculum in your language will be live.

# Neue Sprachen auf `/news` bereitstellen

Um die News für eine neue Sprache bereitzustellen, musst du zwei PRs erstellen. Ein PR geht an das [CDN Repo](https://github.com/freeCodeCamp/cdn) und der andere an das [News Repo](https://github.com/freeCodeCamp/news).

## Prep the CDN Repo for the New Language

News bezieht während des Builds angesagte Links und Artikeltitel aus unserem CDN und fügt sie in den Footer ein. News holt sich während des Builds auch Day.js-Dateien aus dem CDN, um Datum und Uhrzeit für jede Sprache zu lokalisieren.

### Add a YAML File for Trending Articles

Klone das [CDN Repo](https://github.com/freeCodeCamp/cdn) und erstelle einen neuen Zweig.

Im Verzeichnis [`build/universal/trending`](https://github.com/freeCodeCamp/cdn/tree/main/build/universal/trending) erstellst du eine neue Datei und nennst sie `language.yaml`. Wenn du zum Beispiel Dothraki News startest, nennst du die Datei `dothraki.yaml`.

Kopiere dann den Inhalt der [`english.yaml`](https://github.com/freeCodeCamp/cdn/blob/main/build/universal/trending/english.yaml)-Datei für angesagte Artikel und füge ihn in die neue YAML-Datei ein, die du gerade erstellt hast.

Der Inhalt sieht dann etwa so aus:

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

Standardmäßig enthält Day.js nur Englisch als Gebietsschema. Damit es mit anderen Sprachen funktioniert, musst du eine neue Day.js Gebietsschemadatei zum CDN hinzufügen.

Im Verzeichnis [`build/news-assets/dayjs/<version>/locale`](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale) erstellst du eine neue Datei und nennst sie `isocode.min.js`. Wenn du zum Beispiel Dothraki News startest, nennst du die Datei `mis.min.js`.

> [!NOTE] Die Versionsnummer wird sich ändern, wenn die Abhängigkeiten aktualisiert werden.

Dann besuche [diese Seite auf cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) mit allen verfügbaren Day.js-Dateien für die von uns verwendete Version, suche den Link `https://cdnjs.cloudflare.com/ajax/libs/dayjs/<version>/locale/isocode.min.js` für die neue Sprache und öffne ihn in einem neuen Tab.

> [!NOTE] Du musst nur die .../dayjs/\<version\>/_locale_/isocode.min.js Locale-Datei hinzufügen. Du musst keine weiteren Day.js-Dateien hinzufügen.

Kopiere den Code des Gebietsschema aus Day.js von dem neuen Tab in die neue Datei, die du erstellt hast. Hier ist zum Beispiel eine ungekürzte Version des englischen Gebietsschemas für Day.js:

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

Erstelle dann einen PR für das CDN-Repository, um sowohl die YAML- als auch die Day.js-Dateien zur Überprüfung hinzuzufügen.

## Prep the News Repo for the New Language

Das [News Repo](https://github.com/freeCodeCamp/news) zieht die Daten von einer Ghost-Instanz, die Dateien, die du dem CDN hinzugefügt hast, erstellt die News und stellt sie bereit.

> [!WARN] Pull requests to the News repo _must_ come from the same repo. Du solltest bei diesem Schritt nicht von einem Fork aus arbeiten.

### Modify the Main Config File

Klone das News-Repository und erstelle einen neuen Zweig.

Öffne die Datei `config/index.js`, um die neue Sprache hinzuzufügen und die notwendigen Werte zu konfigurieren. Es müssen ein paar Objekte und Arrays geändert werden:

- `locales`: Dieses Array enthält die aktiven und kommenden News-Sprachen. Das sind die Werte, die in der `.env`-Datei verwendet werden, um die Ghost-Instanz und die Benutzeroberfläche für jeden Build zu wählen. Füge den Textnamen der neuen Sprache in Kleinbuchstaben zu diesem Array hinzu.
- `localeCodes`: Dieses Objekt ist eine Übersicht der ISO-Codes für jede Sprache und wird verwendet, um i18next zu konfigurieren, bevor die Benutzeroberfläche erstellt wird. Um eine neue Sprache hinzuzufügen, verwende den Namen der Sprache in Kleinbuchstaben als _Schlüssel_ und den ISO 639-1 Sprachcode als _Wert_.
- `algoliaIndices`: Dieses Objekt ist eine Übersicht der Algolia-Indizes für jede Sprache. Um eine neue Sprache hinzuzufügen, verwende den Namen der Sprache in Kleinbuchstaben als _Schlüssel_ und `news-` gefolgt von dem ISO 639-1 Sprachcode in Kleinbuchstaben als _Wert_.

> [!NOTE] Wenn du dir nicht sicher bist, welchen String du beim Setzen von `algoliaIndices` verwenden sollst, schicke eine Nachricht an Kris (@scissorsneedfoodtoo) oder eine andere Person mit Zugang zu Algolia und bitte sie, das zu überprüfen.

Wenn du zum Beispiel Dothraki News startest, sollten die oben genannten Objekte / Arrays wie folgt aussehen:

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

Next, go to the `shared/config/i18n/locales` directory, create a new folder, and give it the name of the new language you're adding. Wenn du zum Beispiel Dothraki News startest, erstelle einen neuen Ordner namens `dothraki`.

Kopiere dann die JSON-Dateien aus dem Verzeichnis `english` in deinen neuen Ordner.

In your new folder, open the `redirects.json` file and replace its contents with an empty array:

```json
[]
```

Dann commitest und pushst du deinen Zweig direkt in das News-Repository.

> [!NOTE] Du musst zu einem der Teams gehören, die Zugriff auf das News-Repository haben, um Zweige direkt zu News zu pushen. Derzeit dürfen nur die Entwickler-, i18n- und Staff-Teams dies tun.

Eröffne schließlich einen PR zur Überprüfung.

Sobald die PRs für das CDN und das News Repo genehmigt wurden, können sie zusammengeführt werden.

> [!NOTE] Deployment will be handled subsequently by the staff. Here is a sample PR: [freeCodeCamp/news#485](https://github.com/freeCodeCamp/news/pull/485) of how they do it and more details are available in the [staff-wiki](https://staff-wiki.freecodecamp.org/docs/flight-manuals/news-instances#jamstack---news--assets).

# Neue Sprachen auf `/learn` bereitstellen

Bevor du eine neue Sprache freigeben kannst, musst du zulassen, dass die Sprachen von Crowdin heruntergeladen werden können.

## Aktualisierung der Crowdin-Einstellungen

In den Projekten `Curriculum` und `Learn UI` musst du `Project Settings` in der Seitenleiste auswählen. Danach scrollst du nach unten zu `Language Mapping`, wo du eine Option zum Hinzufügen eigener Sprachcodes findest. Füge einen neuen Eintrag für die Sprache hinzu, die du veröffentlichen willst, indem du `language` als `Placeholder`-Wert auswählst und eine URL-freundliche Kleinschreibung des Namens deiner Sprache für den `Custom code` einträgst. Wenn du dir nicht sicher bist, was du verwenden sollst, melde dich in unserem "Contributor"-Chat und wir werden dir helfen.

## Workflows aktualisieren

Du musst einen Schritt in der `crowdin-download.client-ui.yml` und `crowdin-download.curriculum.yml` hinzufügen. Der Schritt für die beiden ist der gleiche. Zum Beispiel, wenn du Dothraki-Downloads aktivieren möchtest:

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

First, visit the `config/i18n.ts` file to add the language to the list of available languages and configure the values. Hier gibt es mehrere Objekte.

- `Languages`: Add the new language to `Languages` enum, similar to the others. The string value here will be used in the `.env` file to set a build language later.
- `availableLangs`: Add the new property from the `Languages` enum to both the `client` and `curriculum` arrays.
- `i18nextCodes`: Dies sind die ISO-Sprachcodes für jede Sprache. Du musst den entsprechenden ISO-Code für die Sprache hinzufügen, die du aktivieren möchtest. Diese müssen für jede Sprache einzigartig sein.
- `LangNames`: Dies sind die Anzeigenamen für die Sprachauswahl im Navigationsmenü.
- `LangCodes`: Dies sind die Sprachcodes, die für die Formatierung von Datumsangaben und Zahlen verwendet werden. Dies sollten Unicode CLDR-Codes statt ISO-Codes sein.
- `hiddenLangs`: Diese Sprachen werden im Navigationsmenü nicht angezeigt. Dies wird für Sprachen verwendet, die noch nicht zur Veröffentlichung bereit sind.
- `rtlLangs`: These are languages that read from right to left.

As an example, if you wanted to enable Dothraki as a language, your `i18n.ts` objects should look like this:

```js
export enum Languages {
  English = 'english',
  Espanol = 'espanol',
  Chinese = 'chinese',
  ChineseTrandational = 'chinese-traditional',
  Dothraki = 'dothraki'
}

export const availableLangs = {
  client: [
    Languages.English,
    Languages.Espanol,
    Languages.Chinese,
    Languages.ChineseTrandational,
    Languages.Dothraki
  ],
  curriculum: [
    Languages.English,
    Languages.Espanol,
    Languages.Chinese,
    Languages.ChineseTrandational,
    Languages.Dothraki
  ]
};

export const i18nextCodes = {
  [Languages.English]: 'en',
  [Languages.Espanol]: 'es',
  [Languages.Chinese]: 'zh',
  [Languages.ChineseTrandational]: 'zh-Hant',
  [Languages.Dothraki]: 'mis'
};

export enum LangNames = {
  [Languages.English]: 'English',
  [Languages.Espanol]: 'Español',
  [Languages.Chinese]: '中文（简体字）',
  [Languages.ChineseTrandational]: '中文（繁體字）',
  [Languages.Dothraki]: 'Dothraki'
};

export enum LangCodes = {
  [Languages.English]: 'en-US',
  [Languages.Espanol]: 'es-419',
  [Languages.Chinese]: 'zh',
  [Languages.ChineseTrandational]: 'zh-Hant',
  [Languages.Dothraki]: 'mis'
};

export const hiddenLangs = ['dothraki'];

export const rtlLangs = [''];
```

> [!NOTE] Wenn eine Sprache in der Deployment-Pipeline eingerichtet wurde UND eine öffentliche `/news`-Instanz live ist, kann sie aus dem `hiddenLangs`-Array entfernt und der Öffentlichkeit zugänglich gemacht werden.

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

- `SuperBlockStates.Current`: Means that the superblock is current, `(New) Responsive Web Design` for example.
- `SuperBlockStates.New`: These only show up when `SHOW_NEW_CURRICULUM` is set to `true` in your `.env` file. It is for displaying new superblocks on a specific build. For example, when we released the new RWD, we only showed in on English to start.
- `SuperBlockStates.Upcoming`: These only show up when `SHOW_UPCOMING_CHANGES` is set to `true` in your `.env` file. It is to show superblocks locally while they are in development. Or, if you just need to hide a superblock from the map for some other reason.
- `SuperBlockStates.Legacy`: A superblock is moved here when a newer version of that superblock has been fully translated and replaced it.

### Configure Search

Als nächstes öffnest du die Datei `client/src/utils/algolia-locale-setup.ts`. Diese Daten werden für die Suchleiste verwendet, die `/news `-Artikel lädt. Es ist zwar unwahrscheinlich, dass du diese Funktion testen wirst, aber das Fehlen der Daten für deine Sprache kann zu Fehlern führen, wenn du versuchst, die Codebasis lokal zu erstellen.

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
};
```

## Aktivieren von lokalisierten Videos

Für die Videoaufgaben musst du ein paar Dinge ändern. Füge zunächst das neue Gebietsschema zur GraphQL-Abfrage in der Datei `client/src/templates/Challenges/video/Show.tsx` ein. Zum Beispiel, indem man Dothraki zur Abfrage hinzufügt:

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

Aktualisiere schließlich das Challenge-Schema in `curriculum/schema/challengeSchema.js`.

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

Du musst einen zusätzlichen Schritt unternehmen, um die Übersetzungen der Client-UI zu übernehmen.

Die Crowdin-Workflows ziehen automatisch _einige_ der UI-Übersetzungen herunter, aber es gibt ein paar Dateien, die manuell verschoben werden müssen.

Du musst die folgenden Dateien von `/client/i18n/locales/english` nach `/client/i18n/locales/<deine-Sprache>` kopieren und die Übersetzungen nach Bedarf durchführen:

- `links.json`
- `meta-tags.json`
- `motivation.json`
- `trending.json`

## Übersetzungen lokal testen

Wenn du Übersetzungen lokal testen möchtest, bevor du sie zu unserem main-Repository hinzufügst, kannst du die Änderungen am Crowdin-Workflow überspringen. Folge den Schritten zur Aktivierung einer Sprache, lade dann die Übersetzungen von Crowdin herunter und lade sie in deinen lokalen Code.

Da die Sprache noch nicht für die Produktion freigegeben wurde, laden unsere Skripte die Übersetzungen noch nicht automatisch herunter. Nur Mitarbeiter haben die Möglichkeit, die Übersetzungen direkt herunterzuladen - Du kannst uns gerne in unserem ["Contributors" Chatraum](https://discord.gg/PRyKn3Vbay) ansprechen, oder du kannst die englischen Markdown-Dateien lokal zu Testzwecken übersetzen.

Sobald du die Dateien hast, musst du sie im richtigen Verzeichnis ablegen. Für die Studienplanaufgaben solltest du die Zertifizierungsordner (z.B. `01-responsive-web-design`) in das Verzeichnis `curriculum/challenges/{lang}` ablegen. Für unsere Dothraki-Übersetzungen wäre dies `curriculum/challenges/dothraki`. Die Client-Übersetzungsdateien `.json` werden im Verzeichnis `client/i18n/locales/{lang}` abgelegt.

Aktualisiere deine `.env`-Datei, um deine neue Sprache für `CLIENT_LOCALE` und `CURRICULUM_LOCALE` zu verwenden.

Once these are in place, you should be able to run `pnpm run develop` to view your translated version of freeCodeCamp.

> [!TIP] If you build the client in one language and then want to build it in a different language, you will need to use the command `pnpm run clean-and-develop` after changing the `.env` file, as Gatsby will cache the first language.

> [!ATTENTION] Du kannst zwar lokal Übersetzungen zu Testzwecken vornehmen, aber wir erinnern alle daran, dass Übersetzungen _nicht_ über GitHub eingereicht werden sollten und nur über Crowdin erfolgen sollten. Achte darauf, dass du deine lokale Codebasis zurücksetzt, wenn du mit dem Testen fertig bist.

# Neue Sprachen auf `/news` bereitstellen

Um die News für eine neue Sprache bereitzustellen, musst du zwei PRs erstellen. Ein PR geht an das [CDN Repo](https://github.com/freeCodeCamp/cdn) und der andere an das [News Repo](https://github.com/freeCodeCamp/news).

## Bereite das CDN Repo für die neue Sprache vor

News bezieht während des Builds angesagte Links und Artikeltitel aus unserem CDN und fügt sie in den Footer ein. News holt sich während des Builds auch Day.js-Dateien aus dem CDN, um Datum und Uhrzeit für jede Sprache zu lokalisieren.

### Hinzufügen einer YAML-Datei für angesagte Artikel

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

### Füge eine Day.js Gebietsschemadatei (Locale) für die neue Sprache hinzu

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

## Bereite das News Repo auf die neue Sprache vor

Das [News Repo](https://github.com/freeCodeCamp/news) zieht die Daten von einer Ghost-Instanz, die Dateien, die du dem CDN hinzugefügt hast, erstellt die News und stellt sie bereit.

> [!WARN] Pull Requests für das News-Repos _müssen_ aus demselben Repo kommen. Du solltest bei diesem Schritt nicht von einem Fork aus arbeiten.

### Anpassung der Hauptkonfigurationsdatei (Main Config)

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

### Füge die i18next JSON-Dateien für die neue Sprache hinzu

Als nächstes gehst du in das Verzeichnis `config/i18n/locales`, erstellst einen neuen Ordner und gibst ihm den Namen der neuen Sprache, die du hinzufügst. Wenn du zum Beispiel Dothraki News startest, erstelle einen neuen Ordner namens `dothraki`.

Kopiere dann die JSON-Dateien aus dem Verzeichnis `english` in deinen neuen Ordner.

Öffne in deinem neuen Ordner die Datei `serve.json` und ersetze ihren Inhalt durch den folgenden:

```json
{
  "redirects": []
}
```

Dann commitest und pushst du deinen Zweig direkt in das News-Repository.

> [!NOTE] Du musst zu einem der Teams gehören, die Zugriff auf das News-Repository haben, um Zweige direkt zu News zu pushen. Derzeit dürfen nur die Entwickler-, i18n- und Staff-Teams dies tun.

Eröffne schließlich einen PR zur Überprüfung.

Sobald die PRs für das CDN und das News Repo genehmigt wurden, können sie zusammengeführt werden.

> [!NOTE] Deployment will be handled subsequently by the staff. Here is a sample PR: [freeCodeCamp/news#485](https://github.com/freeCodeCamp/news/pull/485) of how they do it and more details are available in the [staff-wiki](https://staff-wiki.freecodecamp.org/docs/flight-manuals/news-instances#jamstack---news--assets).

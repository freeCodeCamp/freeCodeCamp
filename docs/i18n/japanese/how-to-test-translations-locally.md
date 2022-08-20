# 翻訳文をローカルでテストする方法

> [!NOTE] このプロセスは必須ではありませんが、翻訳文がどのように見えるかをプレビューしたいという場合に備えて文書化されました。

翻訳文を freeCodeCamp の `/learn` サイトでテストしたい場合は、まず [コードベースが設定済み](how-to-setup-freecodecamp-locally.md) であることを確認してください。

## 言語を有効にする

コードベースをご希望の言語で構築するために、いくつかのステップがあります。

まず、`config/i18n/all-langs.ts` ファイルにアクセスして、利用可能な言語リストに言語を追加し、値を設定します。 ここには 4 つのオブジェクトがあります。

- `availableLangs`: `client` と `curriculum` 両方の配列で、言語のテキスト名を追加します。 これは `.env` ファイルで使用される値です。
- `auditedCerts`: 言語のテキスト名を _key_ として追加し、`SuperBlocks.{cert}` 変数の配列を _value_ として追加します。 これは、クライアントにどの認定講座の翻訳が完了しているのかを伝えます。
- `i18nextCodes`: これらは各言語の ISO の言語コードです。 有効にしようとしている言語に適切な ISO コードを追加する必要があります。 言語コードは、各言語に固有のものである必要があります。
- `LangNames`: These are the display names for the language selector in the navigation menu.
- `LangCodes`: These are the language codes used for formatting dates and numbers. ISO コードではなく、Unicode CLDR コードである必要があります。

一例を挙げると、Dothraki という言語を有効にしたい場合、`all-langs.js` の各オブジェクトは次のようになります。

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

次に、`client/src/utils/algolia-locale-setup.ts` ファイルを開きます。 このデータは、`/news` 記事を読み込む検索バーに使用されます。 この機能をテストする可能性は低いですが、 言語のデータがないと、ローカルでコードベースを構築しようとする際にエラーが発生する可能性があります。

`algoliaIndices` オブジェクトに言語のオブジェクトを追加します。 You should use the the same values as the `english` object for local testing, replacing the `english` key with your language's `availableLangs` value.

> [!NOTE] 既に対象言語でニュースのインスタンスをデプロイしている場合は、値を更新してライブインスタンスを反映することができます。 それ以外の場合は、英語の値を使用します。

Dothraki を追加する場合は、次のとおりです。

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

最後に、`.env` ファイルの中で、`CLIENT_LOCALE` と `CURRICULUM_LOCALE` を新しい言語 (`availableLangs` 値を使用) に設定します。

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

## ローカライズされた動画を有効にする

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

## 翻訳内容を読み込む

Because the language has not been approved for production, our scripts are not automatically downloading the translations yet. Only staff have the access to directly download the translations - you are welcome to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay), or you can translate the English markdown files locally for testing purposes.

Once you have the files, you will need to place them in the correct directory. For the curriculum challenges, you should place the certification folders (i.e. `01-responsive-web-design`) within the `curriculum/challenges/{lang}` directory. For our Dothraki translations, this would be `curriculum/challenges/dothraki`. The client translation `.json` files will go in the `client/i18n/locales/{lang}` directory.

Once these are in place, you should be able to run `npm run develop` to view your translated version of freeCodeCamp.

> [!ATTENTION] テスト目的でローカルで翻訳を実行することもできますが、翻訳は GitHub を介して送信 _するのではなく_ 、Crowdin を介してのみ送信する必要があることをご承知おきください。 テストが終了したら、必ずローカルコードベースをリセットしてください。

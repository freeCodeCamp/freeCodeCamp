# 翻訳文をローカルでテストする方法

> [!NOTE] このプロセスは必須ではありませんが、翻訳文がどのように見えるかをプレビューしたいという場合に備えて文書化されました。

翻訳文を freeCodeCamp の `/learn` サイトでテストしたい場合は、まず [コードベースが設定済み](how-to-setup-freecodecamp-locally.md) であることを確認してください。

## 言語を有効にする

コードベースをご希望の言語で構築するために、いくつかのステップがあります。

まず、`config/i18n/all-langs.ts` ファイルにアクセスして、利用可能な言語リストに言語を追加し、値を設定します。 ここには 4 つのオブジェクトがあります。

- `availableLangs`: `client` と `curriculum` 両方の配列で、言語のテキスト名を追加します。 これは `.env` ファイルで使用される値です。
- `auditedCerts`: 言語のテキスト名を _key_ として追加し、`SuperBlocks.{cert}` 変数の配列を _value_ として追加します。 これは、クライアントにどの認定講座の翻訳が完了しているのかを伝えます。
- `i18nextCodes`: これらは各言語の ISO の言語コードです。 有効にしようとしている言語に適切な ISO コードを追加する必要があります。 言語コードは、各言語に固有のものである必要があります。
- `langDisplayNames`: これらはナビゲーションメニューの言語セレクターで使用する表示名です。
- `langCodes`: これらは日付と数字の書式設定に使用する言語コードです。 ISO コードではなく、Unicode CLDR コードである必要があります。

一例を挙げると、Dothraki という言語を有効にしたい場合、`all-langs.js` の各オブジェクトは次のようになります。

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

次に、`client/src/utils/algolia-locale-setup.ts` ファイルを開きます。 このデータは、`/news` 記事を読み込む検索バーに使用されます。 この機能をテストする可能性は低いですが、 言語のデータがないと、ローカルでコードベースを構築しようとする際にエラーが発生する可能性があります。

`algoliaIndices` オブジェクトに言語のオブジェクトを追加します。 ローカルテスト用に `english` オブジェクトの値を使用する必要があります。`english` キーを、言語の `availableLangs` 値に置き換えます。

> [!NOTE] すでに対象言語でニュースのインスタンスをデプロイしている場合は、値を更新してライブインスタンスを反映することができます。 それ以外の場合は、英語の値を使用します。

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
CLIENT_LOCALE="dothraki"
CURRICULUM_LOCALE="dothraki"
```

## ローカライズされた動画を有効にする

ビデオチャレンジのために、いくつかの変更が必要です。 まず、`client/src/templates/Challenges/video/Show.tsx` ファイルの中の GraphQL クエリに新しいロケールを追加します。 例えば、クエリに Dothraki を追加します。

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

次に、監査済みブロック内の任意のビデオチャレンジに新しい言語の id を追加します。 例えば、 `all-langs.ts` 中の `auditedCerts` に `dothraki` の `scientific-computing-with-python` が含まれる場合、`videoLocaleIds` に `dothraki` を追加しなければなりません。 フロントマターは次のようになります。

```yml
videoLocaleIds:
  espanol: 3muQV-Im3Z0
  italian: hiRTRAqNlpE
  portuguese: AelGAcoMXbI
  dothraki: new-id-here
dashedName: introduction-why-program
---
```

`client/src/redux/prop-types` の `VideoLocaleIds` インターフェースを更新して、新しい言語を入れます。

```ts
export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
  dothraki?: string;
}
```

そして最後に、`curriculum/schema/challengeSchema.js` のチャレンジスキーマを更新します。

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

言語が本番用に承認されていないため、スクリプトは翻訳を自動的にダウンロードしていません。 スタッフのみ、翻訳を直接ダウンロードすることができます - [contributors チャットルーム](https://chat.freecodecamp.org/channel/contributors) にお問い合わせください。 または、テスト目的で、ローカルで英語のマークダウンファイルを翻訳することもできます。

ファイルを入手したら、それらを正しいディレクトリに配置する必要があります。 カリキュラムのチャレンジについては、認定講座のフォルダ (すなわち、`01-responsive-web-design`) を `curriculum/challenges/{lang}` ディレクトリ内に配置する必要があります。 Dothraki の翻訳では、これが `curriculum/challenges/dothraki` になります。 クライアント翻訳の `.json` ファイルは、 `client/i18n/locales/{lang}` ディレクトリに移動します。

以上の準備が整ったら、 `npm run develop` を実行することで freeCodeCamp の翻訳版を表示できるはずです。

> [!ATTENTION] テスト目的でローカルで翻訳を実行することもできますが、翻訳は GitHub を介して送信 _するのではなく_、Crowdin を介してのみ送信する必要があることをご承知おきください。 テストが終了したら、必ずローカルコードベースをリセットしてください。

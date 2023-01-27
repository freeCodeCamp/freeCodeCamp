# カリキュラムファイルの構造

名前が付けられた `curriculum` ディレクトリ内に、コア教育コンテンツがあります。 このページでは、それらのファイルがどのように整理されているのかを説明します。

## 用語

カリキュラム内容を説明する際に使用する用語がいくつかあります。

- `certification`: この場合、ユーザーが求める実際の認定講座を意味します。 これは、スーパーブロック名とは別のものです。
- `superBlock`: スーパーブロックは、チャレンジの最上位レベルのコレクションです。 Each superblock corresponds to a certification in the curriculum (e.g. Responsive Web Design).
- `block`: ブロックは、スーパーブロック内のセクションです。 A block corresponds to a group of challenges in a given certification (e.g. Basic HTML and HTML5)
- `challenge` : A challenge is a single lesson within the curriculum (e.g. Say Hello to HTML Elements)

## ファイルツリー

これらの用語を使用して、以下のようにファイル構造が定義されます。

<!-- prettier-ignore -->
```md

curriculum/
├─ _meta/
│  ├─ {block}/
│  │  ├─ meta.json
├─ {language}/
│  ├─ {superBlock}/
│  │  ├─ {block}/
│  │  │  ├─ {challenge}.md
```

## `_meta` ディレクトリ

`_meta` ディレクトリは、`.json` ファイルを含む特別なディレクトリです。 これらのファイルは、カリキュラム内の各ブロックに相当します。ブロックが属するスーパーブロックと、そのブロック内のチャレンジの順序を決めるために使用されます。

## ファイル名を変更する

認定講座、スーパーブロック名、ブロック名、もしくはチャレンジ名を変更する必要がある場合があります。 このセクションでは、ビルドエラーを避けるために必要な手順を概説します。

> [!ATTENTION] カリキュラム構造内のファイル名を変更すると、メインの Web ページ上のコンテンツパス (または URL) が変更されることがあります。 変更ごとにリダイレクトを設定する必要があるため、注意して行ってください。

### 認定講座名を変更する

認定講座名を変更する際、関連付けられているスーパーブロック名も一緒に変更することも検討するでしょう。 以下は、認定講座名のみを変更するための手順です。

1. `curriculum/challenges/_meta/{superBlock}-certificate` フォルダ名を変更します。
1. フォルダの `meta.json` ファイル内で、`name`、`dashedName`、`challengeOrder` の値を新しい認定講座名に変更します。
1. `curriculum/challenges/english/12-certificate` 内で、`{superBlock}-certificate` フォルダ名と、その中の YAML ファイル名を変更します。
1. YAML ファイルの `title` 名を変更します。
1. Rename the file and folder from step 3 for the rest of the curriculum languages.
1. `client/src/redux/index.ts` を更新して、正しい `title` を使用してください。
1. 必要に応じて、同じファイル内のスーパーブロックの `certSlug` を更新します。**注:** `certSlug` 名を変更すると、認定講座の URL が変更されるため、慎重に変更します。
1. `client/src/resources/cert-and-project-map.ts` 内の `title` を新しい値に更新してください。**注:** ここで `title` を変更すると、関連する認定講座のスーパーブロックのページ が **壊れます**。 そのページは、スーパーブロックのタイトルに依存しており、認定講座タイトルと一致します。 スーパーブロック名も同時に変更したい場合があるからです。
1. 手順 7 で、`certSlug` 名を変更した場合は、認定講座とネストされた `projects` の値を変更します。
1. `config/certification-settings.js` で、`certTypeTitleMap` の値を新しい名前に更新します。
1. 手順 7 で `certSlug` を変更した場合、同じファイル内の `certSlugTypeMap` のキーを更新します。
1. 必要に応じて、`client/src/client-only-routes/show-project-links.tsx` の `legacyCerts` 配列内の認定講座名を更新します。
1. メイン `README.md` ファイル名を新しい名前に更新します。

### スーパーブロック名を変更する

> [!NOTE] スーパーブロック名を変更すると、新しいフォルダ名がパスとして使用され、「正しい」フォルダ名とみなされます。 その変更を反映するために、その他のすべての値を更新する必要があります。

Also, you will likely want to rename the certificate and the `{superBlock}-projects` block when you rename a superBlock since they all share a name. 以下は、スーパーブロック名のみを変更するための手順です。

1. スーパーブロックのフォルダ名を `curriculum/challenges/english` ディレクトリに変更します。
1. _他の_ すべての `curriculum/challenges/{language}` ディレクトリのスーパーブロックフォルダ名を変更します。
1. スーパーブロック内の各ブロックについて、`meta.json` ファイル内の `superBlock` の値をその dashedName に更新します。 ここでは、フォルダ名を変更する必要はありません。 ブロック名変更時に、フォルダ名を変更します。
1. `client/src/pages/learn` 内のスーパーブロックのフォルダ名を変更します。
1. 上記フォルダの `index.md` ファイルを更新し、`title` と `superBlock` の値を新しい名前に変更します。
1. 上記の各ブロックフォルダで、`index.md` を更新して、正しい `superBlock` の値を使用します。
1. `client/src/resources/cert-and-project-map.ts` ファイルで、ファイルの先頭にある認定講座パスと、スーパーブロックの `title` 値を更新します。**注:** ここで `title` を変更すると、スーパーブロックの実際の認定講座を表示する機能が **壊れます**。 表示機能は、スーパーブロックのタイトルに依存しており、認定講座タイトルと一致します。 認定講座名も同時に変更したいものです。
1. `config/certification-settings.js` の `superBlockCertTypeMap` キーを新しいスーパーブロック名に更新します。
1. `client/src/assets/icons/index.tsx` のパス値を更新します。
1. `client/i18n/locales` の言語ごとに、`intro.json` ファイルを更新して新しいスーパーブロック `dashedName` を使用します。英語のファイルの `title` も更新します。
1. i18n ビルドでスーパーブロックが使用可能かどうかを確認するには、`config/i18n/all-langs.js` ファイルを確認します。 使用しているすべての値を更新します。
1. メイン `README.md` ファイルを新しい名前に更新します。

### ブロック名を変更する

以下の手順に従い、カリキュラムブロック名を変更します。

1. `curriculum/challenges/english/{superBlock}` ディレクトリ内のブロックフォルダ名を変更します。
1. 他の言語ディレクトリ _すべて_ において、同じブロックフォルダの名前を一致させます。 これらすべてが英語の構造と同じでないと、ビルドエラーになります。
1. `_meta` ディレクトリ内のブロックフォルダ名を変更します。
1. ブロックの `meta.json` ファイルの `name` と `dashedName` プロパティを更新します。
1. `client/utils/help-category-map.json` を更新して、新しいブロック名をキーとして使用します。
1. `client/src/pages/learn/{superBlock}` のブロックフォルダを更新します。
1. 上記フォルダの `index.md` ファイルで、フロントマターの `ブロック` の値を更新します。
1. `client/i18n/locales/{language}/intro.json` ファイルで、全言語のブロック名を更新します。英語の `intro.json` ファイルでは、`title` も更新します。
1. メイン `README.md` ファイルを新しい名前に更新します。

### チャレンジ名を変更する

以下の手順に従い、単一のチャレンジファイル名を変更します。

1. `urriculum/challenges/english` ディレクトリのチャレンジファイル名を変更します。
1. ファイル内の `title` 名と `dashedName` 名を変更します。
1. ファイル名と他の言語ディレクトリ _すべて_ のファイルの `dashedName` を変更して一致させます。
1. 該当する `meta.json` ファイルのチャレンジ名を更新します。 ここでのチャレンジ名は、ビルドでは使用されませんが、チャレンジの順序を識別するためのユーザーフレンドリーな方法を提供します。
1. チャレンジが認定講座プロジェクトの場合、 `curriculum/english/12-certificates/<superBlock>` 内の YAML ファイルを新しい名前に更新します。
1. チャレンジが認定講座プロジェクトの場合、`client/src/resources/cert-and-project-map.ts` の `title` と `link` を更新します。
1. チャレンジが認定講座プロジェクトの場合、メイン `README.md` ファイルを新しい名前に更新します。

## `dashedName` プロパティ

`dashedName` プロパティは、スーパーブロック、ブロック、またはチャレンジの URL パスを生成するために使用されます。これらは通常 `/utils/slugs.js` ヘルパーがファイル名に対して出力するものと一致します。

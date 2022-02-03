# プラクティスプロジェクトに貢献する

`tools/challenge-helper-scripts` フォルダには、freeCodeCamp プロジェクトベースのカリキュラムの作成とメンテナンスを容易にするためのツールが含まれています。

## 新規プロジェクトを作成する

`npm run create-project` を実行します。 これにより、プロセスをガイドするコマンドライン UI が開きます。 そうすると、英語のカリキュラムに新しいチャレンジがあるはずですので、プロジェクトの最初のステップに使用できます。 例えば、レスポンシブ Web デザイン認定講座で `test-project` というプロジェクトを作成した場合、`curriculum/challenges/english/01-responsive-web-design/test-project` になります。

新しいステップを作成したい場合は、以下のツールでそのプロセスを簡素化できます。

## 次のステップを作成する

一時スクリプトにより `step-xxx.md` と付番される最後のステップに基づいて、次のステップを自動的に追加します。`xxx` は最後のステップの 3 桁のステップ数を表します。 チャレンジシードコードは、前のステップのチャレンジシードコードを使用します。このシードコードでは編集可能なリージョンマーカー(ERM) が削除されています。

**注: ** このスクリプトは [ステップの並べ替え](#reorder-steps) も実行します。

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run create-next-step
```

## 空のステップを作成する

一時スクリプトにより、特定の開始ステップ番号に指定されたステップ数を自動的に追加します。 作成された全ステップのチャレンジシードコードは空になります。

**注: ** このスクリプトは [ステップの並べ替え](#reorder-steps) も実行します。

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run create-empty-steps start=X num=Y # where X is the starting step number and Y is the number of steps to create.
```

## 中間ステップを作成する

一時スクリプトにより、 2 つの既存の連続したステップの間に自動的に新しいステップを追加します。 チャレンジシードコードは、既存の開始ステップのチャレンジシードコードを使用します。このシードコードでは編集可能なリージョンマーカー(ERM) が削除されています。

**注: ** このスクリプトは [ステップの並べ替え](#reorder-steps) も実行します。

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run create-step-between start=X # where X is the starting step number
```

## ステップを削除する

一時スクリプトにより、既存のステップを削除して、プロジェクトフォルダー内の残りのステップファイルを並べ替えるます。また、プロジェクトの `meta.json` 内の `challengeOrder` プロパティ配列を、新しいステップ順序で更新します。

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run delete-step num=x # where x is the step number to be deleted.
```

## ステップを並べ替える

一時スクリプトにより、ファイル名に基づいて、プロジェクトのマークダウンファイル内のステップファイルを自動的に並べ替えます。 また、プロジェクトの `meta.json` 内の `challengeOrder` プロパティ配列を、新しいステップ順序で更新します。

### 作業例

例えば、次のプロジェクト構造から始めるとします。

```bash
step-001.md
step-002.md
step-003.md
step-004.md
step-005.md
step-006.md
```

ある時点で、ステップが不要になったため `step-002.md` を削除する必要があると判断します。 また、`step-004.md` を 1 つではなく 3 つのステップに分解することにします。

この構造を再構築するには、`step-002.md` を削除し、 `step-004a.md` と `step-004b.md` を追加する必要があります。 新しいフォルダ構造は次のようになります。

```bash
step-001.md
step-003.md
step-004.md
step-004a.md
step-004b.md
step-005.md
step-006.md
```

ここで、ファイル名は `step-001.md` から `step-007.md` である必要があります。これは、1 つ削除して、2つ追加したので、正味差は1ファイルだからです。 また、削除されたステップまたは追加されたステップの各ファイルの Frontmatterは、`title` キー値を新しいステップ数と一致させた上で変更する必要があります。 例えば、`step-3.md` を `step-2.md` に変更した後、 `step-2.md` のタイトルを `Step 03` から `Step 02` へ変更する必要があります。

以下は、実際のプロジェクトフォルダの変更です。

```bash
step-001.md
step-003.md renamed to step-002.md and title changes to "Step 2"
step-004.md renames to step-003.md and title changes to "Step 3"
step-004a.md renames to step-004.md and title changes to "Step 4"
step-004b.md renames to step-005.md and title changes to "Step 5"
step-005.md renames to step-006.md and title changes to "Step 6"
step-006.md renames to step-007.md and title changes to "Step 7"
```

上記の変更に伴い、プロジェクトの `meta.json` ファイル内の `challengeOrder` キーは、新しいステップの順序を反映する必要があります。 これは、ステップの削除や追加に伴い、その下にある各ステップが、影響を受けるステップのチャレンジ `id` に関連する `title` を変更するためです。

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run reorder-steps
```

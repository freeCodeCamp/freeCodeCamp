# プラクティスプロジェクトに貢献する

`tools/challenge-helper-scripts` フォルダには、freeCodeCamp プロジェクトベースのカリキュラムの作成とメンテナンスを容易にするためのツールが含まれています。

## 新規プロジェクトを作成する

`npm run create-project` を実行します。 これにより、プロセスをガイドするコマンドライン UI が開きます。 そうすると、英語のカリキュラムに新しいチャレンジがあるはずですので、プロジェクトの最初のステップに使用できます。 例えば、レスポンシブ Web デザイン認定講座で `test-project` というプロジェクトを作成した場合、`curriculum/challenges/english/01-responsive-web-design/test-project` になります。

新しいステップを作成したい場合は、以下のツールでそのプロセスを簡素化できます。

## 次のステップを作成する

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run create-next-step
```

## 空のステップを作成する

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run create-empty-steps X # where X is the number of steps to create.
```

## insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run insert-step X # where X is the position to insert the new step.
```

## ステップを削除する

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

### スクリプトを実行する方法

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run delete-step X # where X is the step number to be deleted.
```

## update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

### How to run script

1. プロジェクトのディレクトリに変更します。
2. 以下の npm コマンドを実行します。

```bash
npm run update-step-titles
```

# Cypress テストを追加する方法

ページの機能やレイアウトを変更する可能性がある JavaScript、CSS、または HTML を変更する際には、対応する [Cypress](https://docs.cypress.io) 統合テストを追加することが重要です。

Cypress テストもしくは「specs」の書き方については、Cypress の公式 [ドキュメント](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) をご覧ください。

## テストを追加する場所

- Cypress テストは `./cypress` ディレクトリにあります。

- カリキュラムモジュールの Cypress テストは、対応するカリキュラムディレクトリ、すなわち `cypress/integration/learn/responsive-web-design/basic-css/index.js` にあります。

## テストを実行する方法

> [!NOTE] GitPod を使用している場合は、[Cypress と GitPod の設定](how-to-add-cypress-tests.md#cypress-と-gitpod-の設定) を参照してください。

### 1. MongoDB とクライアントアプリケーションが動作していることを確認する

- [MongoDB を起動し、データベースをシードします。](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [freeCodeCamp クライアントアプリケーションと API サーバーを起動します。](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Cypress テストを実行する

`dev` を `prd` に置き換えて本番ビルドに対するテストを実行します。

- `./cypress` ディレクトリで、すべてのテストを実行します。

  ```console
  pnpm run cypress:dev:run
  ```

- 単一のテストを実行します。

  ```console
  pnpm run cypress -- run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```console
  pnpm run cypress -- run --spec=cypress/e2e/default/landing.js
  ```

- 開発ビルドを作成するには、開発サーバーを起動し、既存の cypress エンドツーエンドテストをすべて実行します。

  ```console
  pnpm run e2e:dev:run
  ```

## Cypress と GitPod の設定

### 1. 開発環境が稼働していることを確認する

GitPod 環境を起動しても自動的に環境が構築されない場合は、以下を実行します。

- データベースを起動します。

```console
mongod
```

- データベースをシードします。

```console
pnpm run seed
```

- サーバーとクライアントを構築します。

```console
pnpm run develop
```

### 2. Cypress ビルドツールをインストールする

```console
pnpm run cypress:install-build-tools
```

- 端末でプロンプトが表示されたら、言語/エリアでキーボードのレイアウトを選択してください。

これで、[Cypress を実行することができます](how-to-add-cypress-tests.md#_2-cypress-テストを実行する)。

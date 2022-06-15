# Cypress テストを追加する方法

ページの機能やレイアウトを変更する可能性がある JavaScript、CSS、または HTML を変更する際には、対応する [Cypress](https://docs.cypress.io) 統合テストを追加することが重要です。

Cypress テストもしくは「specs」の書き方については、Cypress の公式 [ドキュメント](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) をご覧ください。

## テストを追加する場所

- Cypress テストは `./cypress` ディレクトリにあります。

- カリキュラムモジュールの Cypress テストは、対応するカリキュラムディレクトリ、すなわち `cypress/integration/learn/responsive-web-design/basic-css/index.js` にあります。

## テストを実行する方法

> [!NOTE] If using GitPod, please see [Cypress-GitPod Setup](how-to-add-cypress-tests#cypress-gitpod-setup)

### 1. MongoDB とクライアントアプリケーションが動作していることを確認する

- [MongoDB を起動し、データベースをシードします。](how-to-setup-freecodecamp-locally#step-3-start-mongodb-and-seed-the-database)

- [freeCodeCamp クライアントアプリケーションと API サーバーを起動します。](how-to-setup-freecodecamp-locally#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Cypress テストを実行する

`dev` を `prd` に置き換えて本番ビルドに対するテストを実行します。

- `./cypress` ディレクトリで、すべてのテストを実行します。

  ```console
  npm run cypress:dev:run
  ```

- 単一のテストを実行します。

  ```console
  npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
  ```

- 開発ビルドを作成するには、開発サーバーを起動し、既存の cypress エンドツーエンドテストをすべて実行します。

  ```console
  npm run e2e:dev:run
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
npm run seed
```

- サーバーとクライアントを構築します。

```console
npm run develop
```

### 2. Cypress ビルドツールをインストールする

```console
npm run cypress:install-build-tools
```

- 端末でプロンプトが表示されたら、言語/エリアでキーボードのレイアウトを選択してください。

Now, [Cypress can be run](how-to-add-cypress-tests#_2-run-the-cypress-tests)

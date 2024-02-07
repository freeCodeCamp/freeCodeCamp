# Cypress テストを追加する方法

ページの機能やレイアウトを変更する可能性がある JavaScript、CSS、または HTML を変更する際には、対応する [Cypress](https://docs.cypress.io) 統合テストを追加することが重要です。

Cypress テストもしくは「specs」の書き方については、Cypress の公式 [ドキュメント](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) をご覧ください。

## Where to Add a Test

- Cypress テストは `./cypress` ディレクトリにあります。

- カリキュラムモジュールの Cypress テストは、対応するカリキュラムディレクトリ、すなわち `cypress/integration/learn/responsive-web-design/basic-css/index.js` にあります。

## How to Run Tests

> [!NOTE] If using Gitpod, please see [Cypress-Gitpod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Ensure that MongoDB and Client Applications are Running

- [MongoDB を起動し、データベースをシードします。](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [freeCodeCamp クライアントアプリケーションと API サーバーを起動します。](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Cypress Tests

`dev` を `prd` に置き換えて本番ビルドに対するテストを実行します。

- `./cypress` ディレクトリで、すべてのテストを実行します。

  ```bash
  pnpm run cypress:dev:run
  ```

- 単一のテストを実行します。

  ```bash
  pnpm run cypress run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```bash
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- 開発ビルドを作成するには、開発サーバーを起動し、既存の cypress エンドツーエンドテストをすべて実行します。

  ```bash
  pnpm run e2e:dev:run
  ```

## Cypress-Gitpod Setup

### 1. 開発環境が稼働していることを確認する

If starting the Gitpod environment did not automatically develop the environment:

- Follow the [MongoDB installation guide](https://www.mongodb.com/basics/get-started).
- Create a config file.

```bash
pnpm run create:shared
```

- データベースをシードします。

```bash
pnpm run seed
```

- サーバーとクライアントを構築します。

```bash
pnpm run develop
```

### 2. Cypress ビルドツールをインストールする

```bash
pnpm run cypress:install-build-tools
```

- 端末でプロンプトが表示されたら、言語/エリアでキーボードのレイアウトを選択してください。

これで、[Cypress を実行することができます](how-to-add-cypress-tests.md#_2-cypress-テストを実行する)。

## Troubleshooting

### Unable to Connect to Port 8000

If Cypress fails to run with the following error:

```
CypressError: `cy.visit()` failed trying to load:

http://localhost:3000/signin

We attempted to make an http request to this URL but the request failed without a response.

We received this error at the network level:

  > Error: connect ECONNREFUSED 127.0.0.1:8000

Common situations why this would fail:
  - you don't have internet access
  - you forgot to run / boot your web server
  - your web server isn't accessible
  - you have weird network configuration settings on your computer

This error occurred while creating the session. Because the session setup failed, we failed the test.
```

You can resolve the issue by:
- Going to the root `package.json` file and adding `--host 0.0.0.0` to the `develop:client` command:
    ```json
    "scripts": {
      "develop:client": "cd ./client && pnpm run develop --host 0.0.0.0"
    }
    ```
- Then, re-running `pnpm run develop`

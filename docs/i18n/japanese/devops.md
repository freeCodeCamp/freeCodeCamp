# DevOps ハンドブック

このガイドは、インフラストラクチャスタックとプラットフォームをどのように維持するかを理解するのに役立ちます。 このガイドで、すべての操作について詳しく説明しているわけではありませんが、システムを理解する上での参考になります。

ご意見やご質問があれば、どうぞご連絡ください。喜んでご説明いたします。

# フライトマニュアル - コードデプロイ

このリポジトリは、継続的に構築され、テストされ、**インフラストラクチャの個別のセット (サーバー、データベース、CDNなど)** にデプロイされます。

これには3つのステップが含まれます。

1. 新規変更 (修正および機能変更の両方を含む) は、プルリクエストによりプライマリ開発ブランチ (`main`) にマージされます。
2. これらの変更は、一連の自動テストで実行されます。
3. テストに合格すると、インフラストラクチャ上でのデプロイメントに対して変更をリリースします(または必要に応じて更新します)。

#### コードベースのビルド - Git ブランチのデプロイメントへのマッピング

通常、[`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (デフォルトの開発ブランチ) は、[`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) ブランチに 1 日 1 回マージされ、分離されたインフラストラクチャにリリースされます。

これは開発者とボランティアのコントリビューター用の中間リリースです。 「ステージング」または「ベータ」リリースとも呼ばれます。

それは `freeCodeCamp.org` のライブプロダクション環境と同じで、データベース、サーバー、Web プロキシなどの別々のセットを使用しています。 この分離により、freeCodeCamp.org の main プラットフォームの正規ユーザーに影響を与えることなく、「本番」のようなシナリオで継続的な開発と機能をテストすることができます。

開発者チーム [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) が、ステージングプラットフォームでの変更に満足したら、これらの変更は数日ごとに [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current) ブランチに移されます。

これが freeCodeCamp.org で本番プラットフォームに変更を加えた最終リリースです。

#### 変更のテスト - 統合テストとユーザー承認テスト

私たちは、コードの品質を確認するために、様々なレベルの統合と受け入れテストを採用しています。 すべてのテストは、[GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) や [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) のようなソフトウェアにより実行されます。

私たちは、チャレンジソリューション、Server API、クライアントユーザーインターフェースをテストするための単体テストを行っています。 これらは、異なるコンポーネント間の統合をテストするのに役立ちます。

> [!NOTE] また、メールの更新や API やサードパーティサービスへの呼び出しなど、現実世界のシナリオを再現するのに役立つエンドユーザーテストを作成中です。

これらのテストを組み合わせることで、問題が繰り返されるのを防ぎ、別のバグや機能の作業中にバグが発生しないようにします。

#### 変更のデプロイ - 変更をサーバーにプッシュする

開発サーバーと本番サーバーに変更をプッシュする継続的デリバリーソフトウェアを設定しています。

保護されたリリースブランチに変更がプッシュされると、そのブランチに対してビルドパイプラインが自動的にトリガーされます。 ビルドパイプラインは、アーティファクトを構築し、後で使用するためにコールドストレージに保管する責任があります。

実行が正常に完了すると、ビルドパイプラインは対応するリリースパイプラインをトリガーします。 リリースパイプラインは、ビルドアーティファクトを収集し、それらをサーバーに移動し、稼働させる責任があります。

ビルドとリリースのステータスは [こちら](#ビルド、テスト、デプロイのステータス) からご確認いただけます。

## ビルドをトリガー・テスト・デプロイする

現時点では、開発チームのメンバーのみが本番ブランチにプッシュできます。 `production-*` ブランチへの変更は、[`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) への早送りマージによってのみ可能です。

> [!NOTE] 今後、アクセス管理と透明性を向上させるために、プルリクエストを介してこのフローを改善します。

### ステージングアプリケーションに変更をプッシュする

1. リモートを正しく構成します。

   ```sh
   git remote -v
   ```

   **結果:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. `main` ブランチが初期状態であり、アップストリームと同期していることを確認してください。

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. GitHub CI がアップストリームの `main` ブランチを渡していることを確認してください。

   [継続的インテグレーション](https://github.com/freeCodeCamp/freeCodeCamp/actions) テストは、`main` ブランチに関して、緑色であり PASSING でなければなりません。 `main` ブランチコードを表示する際、コミットハッシュの横にある緑色のチェックマークをクリックします。

    <details> <summary> GitHub Actionsでステータスを確認する (スクリーンショット) </summary>
      <br>
      ![GitHub Actions でビルドステータスを確認する](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   これに失敗した場合は、停止してエラーの確認をします。

4. リポジトリをローカルにビルドできることを確認します。

   ```
   npm run clean-and-develop
   ```

5. 早送りマージにより、変更を `main` から `prod-staging` に移行します。

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] 強制的にプッシュすることはできません。履歴を書き直した場合、これらのコマンドはエラーになります。
   > 
   > エラーになったとしたら、誤った操作をしたかもしれませんので、やり直します。

上記手順では、`prod-staging` ブランチのビルドパイプラインで自動的に実行がトリガーされます。 ビルドが完了すると、アーティファクトは `.zip` ファイルとしてコールドストレージで保存され、後で取り出され使用されます。

接続されたビルドパイプラインから新たなアーティファクトが利用可能になると、リリースパイプラインが自動的にトリガーされます。 ステージングプラットフォームでは、このプロセスに手動での承認は含まれません。また、アーティファクトは クライアント CDN および API サーバーにプッシュされます。

### 本番アプリケーションに変更をプッシュする

プロセスはほとんどステージングプラットフォームと同じですが、いくつかの追加のチェックが行われます。 これは、何百人ものユーザーが常に使用している freeCodeCamp.org 上で何も壊さないようにするためです。

| すべてがステージングプラットフォームで動作していることを確認しない限り、これらのコマンドを実行しないでください。 先に進む前に、ステージング上のテストを回避またはスキップしないでください。 |
|:---------------------------------------------------------------------------------------------- |
|                                                                                                |

1. `prod-staging` ブランチが初期状態であり、アップストリームと同期していることを確認してください。

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. 早送りマージにより、変更を `prod-staging` から `prod-current` に移行します。

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] 強制的にプッシュすることはできません。履歴を書き直した場合、これらのコマンドはエラーになります。
   > 
   > エラーになったとしたら、誤った操作をしたかもしれませんので、やり直します。

上記手順では、`prod-current` ブランチのビルドパイプラインで自動的に実行がトリガーされます。 ビルドアーティファクトの準備が完了すると、リリースパイプラインで実行がトリガーされます。

**スタッフアクションの追加手順**

リリースの実行がトリガーされると、開発者スタッフチームのメンバーは自動的に手動介入メールを受け取ります。 彼らはリリース実行を _承認_、または _拒否_ することができます。

変更がうまく動作し、ステージングプラットフォームでテストされている場合は、承認することができます。 承認は、自動的に拒否される前に、リリースがトリガーされてから4時間以内に行われる必要があります。 拒否された実行が拒否された場合、スタッフは手動でリリース実行を再トリガーするか、リリースの次のサイクルを待つことになります。

スタッフ用:

| ビルドの実行が完了したら、直接リンクについて E メールを確認するか、[リリースダッシュボードにアクセス](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) してください。 |
|:--------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                             |

スタッフがリリースを承認すると、パイプラインは freeCodeCamp.org の本番用 CDN および API サーバーにその変更を反映させます。

## ビルド、テスト、デプロイのステータス

ここでは、コードベースの現在のテスト、ビルド、およびデプロイの状況を示します。

| ブランチ                                                                             | 単体テスト                                                                                                                                                                                                                            | 統合テスト                                                                                                                                                                                                                  | ビルド & デプロイ                                                                                                                        |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E テスト](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E テスト](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E テスト](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (試験的、予定)                                                             | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                      | -                                                                                                                                 |

## 早期アクセスとベータテスト

皆さんがこれらのリリースを **"パブリックベータテスト"** モードでテストし、プラットフォームの今後の機能に早期アクセスできるようにします。 これらの機能 / 変更は、**ネクスト、ベータ、ステージング** などと呼ばれます。

フィードバックや Issue 報告を通じた貢献は、**復元力**、**一貫性** および **安定性** のある `freeCodeCamp.org` 本番プラットフォームを構築するのに役立ちます。

見つけたバグの報告や、freeCodeCamp.orgをより良くする支援に感謝します。 素晴らしい皆さんです！

### プラットフォームの今後のバージョンを特定する

現在、パブリックベータテストバージョンは次の場所で利用できます。

| アプリケーション | 言語    | URL                                      |
|:-------- |:----- |:---------------------------------------- |
| 学習       | 英語    | <https://www.freecodecamp.dev>           |
|          | スペイン語 | <https://www.freecodecamp.dev/espanol>   |
|          | 中国語   | <https://chinese.freecodecamp.dev>       |
| ニュース     | 英語    | <https://www.freecodecamp.dev/news>      |
| フォーラム    | 英語    | <https://forum.freecodecamp.dev>         |
|          | 中国語   | <https://chinese.freecodecamp.dev/forum> |
| API      | -     | `https://api.freecodecamp.dev`           |

> [!NOTE] ドメイン名は **`freeCodeCamp.org`** とは異なります。 これは、検索エンジンのインデックス作成を防止し、プラットフォームの通常ユーザーの混乱を避けるための、意図的なものです。
> 
> 上記リストは、提供するアプリケーションを包括したものではありません。 また、リソースを節約するために、すべての言語バリエーションがステージングにデプロイされるわけではありません。

### プラットフォームの現在のバージョンを特定する

**プラットフォームの現在のバージョンは [`freeCodeCamp.org`](https://www.freecodecamp.org) で常に利用できます。**

開発者チームは、リリース変更時に、`prod-staging` ブランチから `prod-current` への変更をマージします。 トップコミットは、サイト上で表示されるもののはずです。

ステータスセクションにあるビルド & デプロイログにアクセスして、デプロイされた正確なバージョンを確認できます。 または[コントリビューターチャットルーム](https://discord.gg/PRyKn3Vbay)で問い合わせてください。

### 既知の制限

プラットフォームのベータ版を使用する場合、いくつかの既知の制限とトレードオフがあります。

- #### これらのベータプラットフォーム上のデータ / 個人的な進捗は、保存されたり本番環境に移行されることはありません。

  **ベータ版のユーザーは本番とは異なるアカウントを持つことになります。** ベータ版は本番と物理的に分離されたデータベースを使用します。 これにより、偶発的なデータ損失や変更を防ぐことができます。 開発チームは、必要に応じてこのベータ版のデータベースを削除する可能性があります。

- #### ベータ版プラットフォームの稼働時間と信頼性については保証はありません。

  デプロイは頻繁に行われ、時には非常に速いペースで 1 日に複数回行われることになります。 その結果、ベータ版において、不測のダウンタイムが発生したり機能が壊れることがあります。

- #### 修正を確認する手段として、このサイトに一般ユーザーを送らないでください。

  ベータサイトは、ローカルの開発とテストを強化するためのものでしたし、今もそうです。 それはこれから起こることを約束するものではありませんが、取り組まれていることを垣間見るものです。

- #### サインインページが本番環境とは異なる場合があります。

  Auth0 上で freeCodeCamp.dev にはテストテナントを使用しているため、カスタムドメインを設定することはできません。 そのため、すべてのリダイレクトコールバックとログインページが `https://freecodecamp-dev.auth0.com/` のようなデフォルトドメインに表示されます。 これが機能に影響を与えることはありませんし、本番環境に近いものです。

## Issue の報告とフィードバック

ディスカッションやバグ報告をする場合、新しい Issue を開いてください。

ご質問があれば、`dev[at]freecodecamp.org` にメールをご送信ください。 セキュリティ脆弱性は、公開トラッカーやフォーラムではなく、`security[at]freecodecamp.org` に報告する必要があります。

# フライトマニュアル - サーバーメンテナンス

> [!WARNING]
> 
> 1. ガイドは、**freeCodeCamp スタッフのみ** に適用されます。
> 2. インストラクションは包括的なものではありませんので、ご注意ください。

スタッフの一員として、Azure、Digital Ocean などのクラウドサービスプロバイダーへのアクセスが許可されている可能性があります。

仮想マシン (VM) で作業するために使用できる便利なコマンドをいくつか紹介します。例えばメンテナンスの更新や一般的なハウスキーピングの実行です。

## VM のリストを取得する

> [!NOTE] 既に VM へ SSH アクセスできるかもしれませんが、クラウドポータルへのアクセスが許可されていない限り VMを一覧表示することはできません。

### Azure

Azure CLI のインストール `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(一回のみ) [`homebrew`](https://brew.sh) で macOS にインストールします。**

```
brew install azure-cli
```

> **(一回のみ) ログインします。**

```
az login
```

> **VM 名と IP アドレスのリストを取得します。**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Digital Ocean CLI `doctl` のインストール: https://github.com/digitalocean/doctl#installing-doctl

> **(一回のみ) [`homebrew`](https://brew.sh) で macOS にインストールします。**

```
brew install doctl
```

> **(一回のみ) ログインします。**

認証とコンテキストの切り替え: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **VM 名と IP アドレスのリストを取得します。**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## 新しいリソースをスピンする

私たちは IaC 設定の作成に取り組んでいます。そして、その作業中は Azure ポータルまたは Azure CLI を使用して、新しい仮想マシンやその他のリソースをスピンさせることができます。

> [!TIP] スピニングリソースの選択に関係なく、docker のインストールや SSH キーの追加など基本的なプロビジョニングを行うのに役立つ [便利な cloud-init 設定ファイル](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) がいくつかあります。

## VM を最新に保つ

アップデートとアップグレードを行うことで、VM を最新の状態に保つ必要があります。 これにより、仮想マシンが最新のセキュリティ修正でパッチされるようになります。

> [!WARNING] これらのコマンドを実行する前に下記を実行します。
> 
> - VM が完全にプロビジョニングされており、インストール後の手順が実行されていないことを確認してください。
> - アプリケーションを既に提供している VM 上で、パッケージを更新する場合は、アプリが停止 / 保存されていることを確認してください。 パッケージ更新により、ネットワーク帯域幅や、メモリ、CPU の使用率が急増し、 実行中のアプリケーションが停止します。

パッケージ情報を更新します。

```console
sudo apt update
```

インストール済みパッケージをアップグレードします。

```console
sudo apt upgrade -y
```

未使用のパッケージをクリーンアップします。

```console
sudo apt autoremove -y
```

## Web サーバーでの作業 (プロキシ)

Web サーバーのために、負荷分散 (Azure Load Balancer) インスタンスを実行しています。 これらのサーバーは NGINX を実行しています。NGINX は、独自インフラストラクチャで実行される様々なアプリケーションから freeCodeCamp.org へと、トラフィックを中継するリバースプロキシとして使用されます。

NGINX 設定は [このリポジトリ](https://github.com/freeCodeCamp/nginx-config) で確認できます。

### 最初のインストール

コードを使用して VM をプロビジョニング

1. NGINX をインストールし、リポジトリから設定します。

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Cloudflare のオリジン証明書とアップストリームアプリケーション設定をインストールします。

   安全なストレージから Cloudflare のオリジン証明書を取得し、 必要な場所にインストールします。

   **または**

   既存の証明書を移動させます。

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   アップストリーム設定を更新します。

   ```console
   vi configs/upstreams.conf
   ```

   ソース / オリジンアプリケーションの IP アドレスを追加 / 更新します。

3. ネットワーキングとファイアウォールを設定します。

   必要に応じて、イングレスオリジンアドレスに Azure ファイアウォールと `ufw` を設定します。

4. VM をロードバランサーバックエンドプールに追加します。

   必要に応じて、ロードバランサーにルールを設定し追加します。 バランサーバックエンドプールをロードするために、VM を追加する必要があるかもしれません。

### ログとモニタリング

1. 以下のコマンドを使用して NGINX サービスのステータスを確認します。

   ```console
   sudo systemctl status nginx
   ```

2. サーバーのログとモニタリングは以下で行います。

   現行の基本的なモニタリングダッシュボードは、NGINX Amplify ([https://amplify.nginx.com]('https://amplify.nginx.com')) です。 監視向上のため、より細かいメトリックに取り組んでいます。

### インスタンスの更新 (メンテナンス)

NGINX インスタンスへの設定変更は、GitHub 上でメンテナンスされています。これらは、以下のように各インスタンスにデプロイされる必要があります。

1. SSH でインスタンスに接続し、sudo と入力します。

```console
sudo su
```

2. 最新の設定コードを取得します。

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. 設定 [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx) をテストして再度読み込みます。

```console
nginx -t
nginx -s reload
```

## API インスタンスでの作業

1. ノードバイナリのビルドツール (`node-gyp`) をインストールします。

```console
sudo apt install build-essential
```

### 最初のインストール

コードを使用して VM をプロビジョニング

1. ノード LTS をインストールします。

2. `npm` を更新して PM2 をインストールし、`logrotate` を設定して起動します。

   ```console
   npm i -g npm@8
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. freeCodeCamp をクローンし、env とキーをセットアップします。

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout prod-current # or any other branch to be deployed
   ```

4. セキュア認証情報ストレージから `.env` を作成します。

5. セキュア認証ストレージから `google-credentials.json` を作成します。

6. 依存関係をインストールします。

   ```console
   npm ci
   ```

7. サーバーを構築します。

   ```console
   npm run create:config && npm run build:curriculum && npm run build:server
   ```

8. インスタンスを開始します。

   ```console
   cd api-server
   pm2 reload ecosystem.config.js
   ```

### ログとモニタリング

```console
pm2 logs
```

```console
pm2 monit
```

### インスタンスの更新 (メンテナンス)

コードの変更は、適宜 API インスタンスにデプロイする必要があります。 ローリング更新または手動更新により実行できます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が必須です。

> [!ATTENTION] 自動パイプラインは、分単位で依存関係の更新を処理していません。 デプロイパイプラインが実行される前に、手動で更新する必要があります。

#### 1. 手動更新 - 依存関係や env 変数の更新に使用します。

1. すべてのインスタンスを停止します。

```console
pm2 stop all
```

2. 依存関係をインストールします。

```console
npm ci
```

3. サーバーを構築します。

```console
npm run create:config && npm run build:curriculum && npm run build:server
```

4. インスタンスを開始します。

```console
pm2 start all --update-env && pm2 logs
```

#### 2. ローリング更新 - コードの論理的な変更に使用されます。

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] パイプライン経由で、コードやロジックの更新をロールリング処理しています。 これらのコマンドを実行する必要はありません。 ドキュメント用として、ここに記載されているだけです。

## クライアントインスタンスでの作業

1. ノードバイナリのビルドツール (`node-gyp`) をインストールします。

```console
sudo apt install build-essential
```

### 最初のインストール

コードを使用して VM をプロビジョニング

1. ノード LTS をインストールします。

2. `npm` を更新して PM2 をインストールし、`logrotate` を設定して起動します。

   ```console
   npm i -g npm@8
   npm i -g pm2@4
   npm install -g serve@13
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. クライアントの設定をクローンし、envとキーをセットアップします。

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Web クライアントのプレイスホルダーインスタンスを開始します。これらは、Azure パイプラインのアーティファクトで更新されます。

   > Todo: この設定は S3 または Azure Blob ストレージに移動する必要があります。 
   > 
   > ```console
   >    echo "serve -c ../serve.json -p 50505 www" > client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../serve.json -p 52525 www" > client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### ログとモニタリング

```console
pm2 logs
```

```console
pm2 monit
```

### インスタンスの更新 (メンテナンス)

コードの変更は、適宜 API インスタンスにデプロイする必要があります。 ローリング更新または手動更新により実行できます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が必須です。

> [!ATTENTION] 自動パイプラインは、分単位で依存関係の更新を処理していません。 デプロイパイプラインが実行される前に、手動で更新する必要があります。

#### 1. 手動更新 - 依存関係、env 変数の更新に使用します。

1. すべてのインスタンスを停止します。

   ```console
   pm2 stop all
   ```

2. 依存関係をインストールまたは更新します。

3. インスタンスを開始します。

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. ローリング更新 - コードの論理的な変更に使用されます。

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] パイプライン経由で、コードやロジックの更新をロールリング処理しています。 これらのコマンドを実行する必要はありません。 ドキュメント用として、ここに記載されているだけです。

## チャットサーバーでの作業

チャットサーバーは、[Rocket.Chat ドキュメントで推奨されている](https://docs.rocket.chat/installation/docker-containers/high-availability-install) HA 構成で利用可能です。 そのために使用する `docker-compose` ファイルは、[こちらで入手可能](https://github.com/freeCodeCamp/chat-config) です。

Rocket.Chat クラスタの前で、負荷分散型 (Azure ロードバランサー) の冗長 NGINX インスタンスを提供します。 NGINX 設定ファイルは、[こちらで入手可能](https://github.com/freeCodeCamp/chat-nginx-config) です。

### 最初のインストール

コードを使用して VM をプロビジョニング

**NGINX クラスタ:**

1. NGINX をインストールし、リポジトリから設定します。

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Cloudflare のオリジン証明書とアップストリームアプリケーション設定をインストールします。

   安全なストレージから Cloudflare のオリジン証明書を取得し、 必要な場所にインストールします。

   **または**

   既存の証明書を移動させます。

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   アップストリーム設定を更新します。

   ```console
   vi configs/upstreams.conf
   ```

   ソース / オリジンアプリケーションの IP アドレスを追加 / 更新します。

3. ネットワーキングとファイアウォールを設定します。

   必要に応じて、イングレスオリジンアドレスに Azure ファイアウォールと `ufw` を設定します。

4. VM をロードバランサーバックエンドプールに追加します。

   必要に応じて、ロードバランサーにルールを設定し追加します。 バランサーバックエンドプールをロードするために、VM を追加する必要があるかもしれません。

**Docker クラスタ:**

1. Docker をインストールし、リポジトリから設定します。

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. 必要な環境変数とインスタンス IP アドレスを設定します。

3. Rocket-chat サーバーを実行します。

   ```console
   docker-compose config
   docker-compose up -d
   ```

### ログとモニタリング

1. 以下のコマンドを使用して NGINX サービスのステータスを確認します。

   ```console
   sudo systemctl status nginx
   ```

2. docker インスタンスの実行ステータスを確認します。

   ```console
   docker ps
   ```

### インスタンスの更新 (メンテナンス)

**NGINX クラスタ:**

NGINX インスタンスへの設定変更は、GitHub 上でメンテナンスされています。これらは、以下のように各インスタンスにデプロイされる必要があります。

1. SSH でインスタンスに接続し、sudo と入力します。

   ```console
   sudo su
   ```

2. 最新の設定コードを取得します。

   ```console
   cd /etc/nginx
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. 設定をテストし、[シグナルを使用して](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx)リロードします。

   ```console
   nginx -t
   nginx -s reload
   ```

**Docker クラスタ:**

1. インスタンスに SSH で接続し、チャット設定パスに移動します。

   ```console
   cd ~/chat
   ```

2. 最新の設定コードを取得します。

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Rocket.Chat の最新 docker イメージをプルダウンします。

   ```console
   docker-compose pull
   ```

4. 実行中のインスタンスを更新します。

   ```console
   docker-compose up -d
   ```

5. インスタンスが起動していることを検証します。

   ```console
   docker ps
   ```

6. 不要なリソースをクリーンアップします。

   ```console
   docker system prune --volumes
   ```

   出力:

   ```console
   WARNING! This will remove:
     - all stopped containers
     - all networks not used by at least one container
     - all volumes not used by at least one container
     - all dangling images
     - all dangling build cache

   Are you sure you want to continue? [y/N] y
   ```

   使用していないものをすべて削除するには、「はい」(y) を選択しします。 これにより、停止されたコンテナ、コンテナによって使用されていないネットワークとボリューム、および宙ぶらりんイメージ (dangling image) とビルドキャッシュを削除します。

## Contributor ツールでの作業

### 更新をデプロイする

(Digital Ocean 上でホストされている) VM に ssh で接続します。

```console
cd tools
git pull origin master
npm ci
npm run build
pm2 restart contribute-app
```

## VM での Node.js のバージョン更新

現在インストールされている node と npm のバージョンをリストアップします。

```console
nvm -v
node -v
npm -v

nvm ls
```

最新の Node.js LTS をインストールし、グローバルパッケージを再インストールします。

```console
nvm install --lts --reinstall-packages-from=default
```

インストールされたパッケージを確認します。

```console
npm ls -g --depth=0
```

エイリアス `default` Node.js バージョンを現在の LTS に設定します (最新のメジャーバージョンに固定します)。

```console
nvm alias default 16
```

(オプション) 旧バージョンをアンインストールします。

```console
nvm uninstall <version>
```

> [!ATTENTION] クライアントアプリケーションでは、`pm2 resurrect` を使用して、Node.js バージョン間でシェルスクリプトを復元することはできません。 ゼロからプロセスをデプロイします。 docker ベースの設定に移行すると、より良くなるはずです。
> 
> プロセスに PM2 を使用する場合は、アプリケーションを起動し、再起動時に自動リカバリを行うためのプロセスリストを保存する必要があります。

`unstartup` コマンドでアンインストールの手順 / コマンドを取得し、出力を使用して systemctl サービスを削除します。

```console
pm2 unstartup
```

`startup` コマンドでインストールの手順 / コマンドを取得し、出力を使用して systemctl サービスを追加します。

```console
pm2 startup
```

以下は、PM2 からリストへのクイックコマンド、保存されたプロセスの復元などです。

```console
pm2 ls
```

```console
pm2 resurrect
```

```console
pm2 save
```

```console
pm2 logs
```

## Azure Pipeline エージェントのインストールと更新

https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops を参照し、手順に従ってエージェントを停止、削除、再インストールします。 一般的には、ここに記載されている手順に従います。

https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens から入手できる PAT が必要です。

### デプロイターゲットへのエージェントのインストール

[Azure Devops](https://dev.azure.com/freeCodeCamp-org) に移動し、必要な [デプロイグループ](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup) でエージェントをゼロから登録します。

> [!NOTE] スクリプトをホームディレクトリで実行し、他の `azagent` ディレクトリが存在しないことを確認します。

### エージェントの更新

現在、エージェントを更新するには、エージェントを削除して再設定する必要があります。 これは、`PATH` の値や他のシステム環境変数を正しく取り出すために必要です。 デプロイターゲット VM 上で、Node.js を更新する場合は、以下を実行する必要があります。

1. 移動して、サービスのステータスを確認します。

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. サービスを停止します。

   ```console
   sudo ./svc.sh stop
   ```

3. サービスをアンインストールします。

   ```console
   sudo ./svc.sh uninstall
   ```

4. パイプラインプールからエージェントを削除します。

   ```console
   ./config.sh remove
   ```

5. 設定ファイルを削除します。

   ```console
   cd ~
   rm -rf ~/azagent
   ```

上記の手順を完了したら、エージェントのインストールと同じ手順を繰り返すことができます。

# フライトマニュアル - 一斉配信メール

[CLIツール](https://github.com/freecodecamp/sendgrid-email-blast) で、ウィークリーニュースレターを送信します。 プロセスは次のとおりです。

1. DigitalOcean にサインインし、`Sendgrid` プロジェクトの下に新しい droplet を作成してください。 最新の日付の Ubuntu Sendgrid スナップショットを使用します。 これには データベースからメールをフェッチするスクリプトと CLI ツールがあらかじめロードされています。 現在の容量では、3 つの droplet でメールをタイムリーに送信できます。

2. メールリストをフェッチするスクリプトを設定します。

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   `.env` ファイルのプレイスホルダー値を認証情報に置き換える必要があります。

3. スクリプトを実行します。

   ```console
   node get-emails.js emails.csv
   ```

   `emails.csv` ファイルにメールリストを保存します。

4. 必要な droplet の数に応じて、メールを複数のファイルに分割します。 `scp` を使用してローカルにメールリストをプルし、お好みのテキストエディターを使用して複数のファイルに分割するのが最も簡単な方法です。 各ファイルに、`email,unsubscribeId` ヘッダーが必要です。

5. `cd /home/sendgrid-email-blast` で CLI ディレクトリに切り替え、[ドキュメントに従って](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md) ツールを構成します。

6. [使用ドキュメント](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md) に従って、ツールを実行してメールを送信します。

7. メールの一斉配信が完了したら、droplet を破棄する前に、メール送信に問題がなかったかどうかを確認します。

# フライトマニュアル - 新規言語の新しいインスタンスの追加

### テーマの変更

ニュースの掲載には、カスタム [テーマ](https://github.com/freeCodeCamp/news-theme) を使用します。 テーマに以下の変更を加えることで、新しい言語の追加が可能になります。

1. 新規 [ISO 言語コード](https://www.loc.gov/standards/iso639-2/php/code_list.php) の `else if` ステートメントを [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js) に含めます。
2. [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) フォルダをコピーし、フォルダ名を新規言語コードに変更して、初期設定フォルダを作成します。 (スペイン語の場合は、`en` —> `es` となります)。
3. 新規言語フォルダ内で、`main.js` と `footer.js` の変数名を、該当言語のショートコードに変更します  (スペイン語の場合は、`enMain` —> `esMain` となります)。
4. [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) をコピーして、新規言語コード名に変更します。
5. [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs) で、新たに作成された設定ファイルのスクリプトを追加します。
6. 関連する言語 `day.js` スクリプトを [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) から [freeCodeCamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale) に追加します。

### Ghost ダッシュボードの変更

Ghost ダッシュボード > 設定 > 一般と進み、出版物の [アイコン](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png)、[ロゴ](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png) および [カバー](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png) をアップロードすることで、出版物アセットを更新します。

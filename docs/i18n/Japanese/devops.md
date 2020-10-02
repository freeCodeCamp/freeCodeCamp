# freeCodeCamp.orgの開発者操作

このガイドは、私たちのインフラストラクチャスタックと私たちのプラットフォームをどのように維持するかを理解するのに役立ちます。 このガイドでは、すべての操作について詳しく説明されているわけではありませんが、システムを理解するための参考として使用することができます。

ご意見やご質問があれば、お知らせください。

## コードベースを構築、テスト、デプロイするにはどうすればよいでしょうか?

このリポジトリは、継続的に構築され、テストされ、インフラストラクチャの **個別のセット(サーバー、データベース、CDNなど)**にデプロイされます。

これには3つのステップが含まれます。

1. 新しい変更(修正と機能の両方)は、プルリクエストによりプライマリ開発ブランチ(`master`)にマージされます。
2. これらの変更は、一連の自動テストで実行されます。
3. テストが合格すると、インフラストラクチャ上でのデプロイメントに変更をリリース(または必要に応じて更新)します。

#### コードベースのビルド - Git ブランチのデプロイメントへのマッピング

通常 [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (デフォルトの開発ブランチ) が [`プロダクションステージングにマージされます`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) 1日1回分岐し、孤立したインフラストラクチャに解放されます。

これは開発者とボランティアの方の中間リリースです。 私たちの「ステージング」または「ベータ」リリースとも呼ばれます。

それは `freeCodeCamp.org`のライブプロダクション環境と同じで、データベース、サーバー、ウェブプロキシなどの別々のセットを使用しています。 この分離により、freeCodeCamp.orgのメインプラットフォームの正規ユーザーに影響を与えることなく、シナリオのような「本番」で継続的な開発と機能をテストすることができます。

Once the developer team [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) is happy with the changes on the staging platform, these changes are moved every few days to the [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) branch.

こちらはfreeCodeCamp.orgで本番プラットフォームに変更を加えた最終リリースです。

#### テストの変更 - 統合とユーザー承認テスト。

私たちは、コードの品質を確認するために、さまざまなレベルの統合と受け入れテストを採用しています。 すべてのテストは、 [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) や [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) のようなソフトウェアを介して行われます。

当社では、チャレンジソリューション、Server API、クライアントユーザーインターフェイスをテストするための単体テストを行っています。 これらは、異なるコンポーネント間の統合をテストするのに役立ちます。

> [!NOTE] また、メールの更新やAPIやサードパーティサービスへの呼び出しなど、現実世界のシナリオを再現するのに役立つエンドユーザーテストを作成しています。

これらのテストを組み合わせることで、問題が繰り返されるのを防ぎ、他のバグや機能の作業中にバグを導入しないようにします。

#### 変更をデプロイする - 変更をサーバーにプッシュします。

当社では、開発サーバーと本番サーバーに変更をプッシュする継続的なデリバリーソフトウェアを設定しています。

変更が保護されたリリースブランチにプッシュされると、そのブランチに対してビルドパイプラインが自動的にトリガーされます。 ビルドパイプラインは、アーティファクトを構築し、後で使用するために冷蔵庫に保管する責任があります。

ビルドパイプラインは、成功した実行が完了した場合、対応するリリースパイプラインをトリガーします。 リリースパイプラインは、ビルドアーティファクトを収集し、それらをサーバーに移動してライブ配信する責任があります。

ビルドとリリースのステータスは [こちら](#build-test-and-deployment-status)からご確認いただけます。

## ビルド、テスト、デプロイをトリガーします。

現時点では、開発チームのメンバーのみが本番ブランチにプッシュできます。 `production-*` ブランチへの変更は、 [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) への早送りマージによってのみ着陸できます。

> [!NOTE] 今後、アクセス管理と透明性を向上させるために、プルリクエストを介してこのフローを改善します。

### ステージングアプリケーションに変更をプッシュしています。

1. リモートを正しく構成します。

   ```sh
   git remote -v
   ```

   **結果:**

   ```
   origin git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedad/freeCodeCamp.git (push)
   upstream git@git.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@git@git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. `master` ブランチが手つかずで、上流に同期していることを確認してください。

   ```sh
   git checkout master
   git fetch --all -prune
   git reset --hard upstream/master
   ```

3. TravisのCIが `マスター` ブランチを上流に渡していることを確認してください。

   [継続的インテグレーション](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) テストは緑色で、 `マスター` ブランチのPASSINGでなければなりません。

    <details> <summary> Travis CI (スクリーンショット) でステータスを確認中 </summary>
      <br>
      ![Travis CIでビルド状況を確認する](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   これが失敗した場合は、停止してエラーを調査する必要があります。

4. リポジトリをローカルにビルドできることを確認します。

   ```
   npm run clean-and-develop
   ```

5. 早送りマージで `マスター` から `プロダクションステージ` へ変更を移動

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > [!NOTE] 強制的にプッシュすることはできず、とにかく履歴を書き直した場合、これらのコマンドはエラーになります。
   > 
   > 彼らがそうした場合、あなたは間違って何かをしたかもしれませんし、あなたはちょうどやり直す必要があります。

上記の手順は、 `production-staging` ブランチのビルド パイプラインで自動的に実行をトリガーします。 ビルドが完了すると、アーティファクトは `.zip` ファイルとして保存され、後で取得して使用されます。

接続されたビルドパイプラインから新たなアーティファクトが利用可能になると、リリースパイプラインが自動的にトリガーされます。 ステージングプラットフォームでは、このプロセスには手動での承認は含まれず、アーティファクトはクライアントCDNおよびAPIサーバーにプッシュされます。

> [!TIP|label:見積もり] リリースの実行には、通常、クライアントインスタンスごとに約15~20分、APIインスタンスごとに約5~10分かかります。 コードプッシュから本番プラットフォーム上でのライブまで、全体のプロセスは合計で **~90~120分** かかります(スタッフの承認待ち時間はカウントされません)。

### 本番アプリケーションへの変更のプッシュ。

プロセスはほとんどステージングプラットフォームと同じで、いくつかの追加のチェックが行われます。 これは、freeCodeCamp.orgでは何も壊さず、何百人ものユーザーがいつでも使用しているのを見ることができます。

| すべてがステージングプラットフォームで動作していることを確認しない限り、これらのコマンドを実行しないでください。 さらに進む前に、ステージング上のテストをバイパスまたはスキップしないでください。 |
|:------------------------------------------------------------------------------------------------- |
|                                                                                                   |


1. `production-staging` ブランチが手つかずで、上流に同期していることを確認してください。

   ```sh
   git checkout production-staging
   git fetch -all --prune
   git reset --hard upstream/production-staging
   ```

2. 早送りマージで `プロダクションステージング` から `プロダクションカレント` へ変更を移動

   ```
   git checkout production-current
   git merge production-staging
   git push upstream
   ```

   > [!NOTE] 強制的にプッシュすることはできず、とにかく履歴を書き直した場合、これらのコマンドはエラーになります。
   > 
   > 彼らがそうした場合、あなたは間違って何かをしたかもしれませんし、あなたはちょうどやり直す必要があります。

上記のステップは、 `production-current` ブランチのビルドパイプラインで自動的に実行をトリガーします。 ビルドアーティファクトの準備が完了すると、リリースパイプラインで実行がトリガーされます。

> [!TIP|label:見積もり] 通常、ビルド実行には約20~25分かかります。

**スタッフアクションの追加手順**

リリースの実行がトリガーされると、開発者スタッフチームのメンバーは自動的に手動介入メールを受け取ります。 彼らは __ を承認するか、 _リリースの実行を_ 拒否することができます。

変更がうまく動作し、ステージングプラットフォームでテストされている場合は、それを承認することができます。 承認は、自動的に拒否される前に、リリースがトリガーされてから4時間以内に行われる必要があります。 スタッフは、拒否された実行のために手動でリリース実行を再トリガーするか、リリースの次のサイクルを待つことができます。

スタッフ用:

| メールアドレスに直接リンクがないか、 [ビルドの実行が完了したら](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) リリースダッシュボードに移動してください。 |
|:--------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                       |


スタッフメンバーがリリースを承認すると、パイプラインはfreeCodeCamp.orgのプロダクションCDNおよびAPIサーバーに変更を反映させます。 クライアントには通常15~20分、APIサーバーには5分ほどかかります。

> [!TIP|label:見積もり] 通常、ビルドの実行には20~25分ほどかかり、その後はクライアントにとって15~20分ほどかかるリリースランが続きます。 APIがライブ配信されるまで5~10分ほどかかります。 コードプッシュから本番プラットフォーム上でのライブまで、全体のプロセスは合計で **~90~120分** かかります(スタッフの承認待ち時間はカウントされません)。

## ビルド、テスト、デプロイステータス

ここでは、コードベースの現在のテスト、ビルド、およびデプロイの状況を示します。

| タイプ         | ブランチ                                                                                         | ステータス                                                                                                                                                                                                                                        | ダッシュボード                                                                            |
|:----------- |:-------------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------- |
| CI テスト      | [`マスター`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                           | ![Travis CI ビルド状況](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [ステータスダッシュボードに移動](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI テスト      | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis CI ビルド状況](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [ステータスダッシュボードに移動](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| パイプラインを構築する | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![ビルド状態](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [ステータスダッシュボードに移動](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| パイプラインをリリース | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                              | [ステータスダッシュボードに移動](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI テスト      | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Travis CI ビルド状況](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [ステータスダッシュボードに移動](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| パイプラインを構築する | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![ビルド状態](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [ステータスダッシュボードに移動](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| パイプラインをリリース | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                              | [ステータスダッシュボードに移動](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## 早期アクセスとベータテスト

これらのリリースを **"パブリックベータテスト"** モードでテストし、プラットフォームへの今後の機能への早期アクセスをお届けすることを歓迎します。 場合によっては、これらの機能/変更は **、次のベータ、ステージング、** などと呼ばれます。

フィードバックやレポートの発行を通じたあなたの貢献は、 `freeCodeCampでのプロダクションプラットフォームの構築に役立ちます。 rg <code> more` **resilient**, **consistent** and **stable** for everyone.

freeCodeCamp.orgをより良くするために出会ったバグを報告してくれてありがとうございます。 ロックしました！

### プラットフォームの今後のバージョンを特定する

現在、パブリックベータテストバージョンは次の場所で利用できます:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE] ドメイン名は **`freeCodeCamp.org`** とは異なります。 これは、検索エンジンのインデックス作成を防止し、プラットフォームの正規ユーザーにとって混乱を避けるために意図的です。

### プラットフォームの現在のバージョンを特定する

**プラットフォームの現在のバージョンは [`freeCodeCamp.org`](https://www.freecodecamp.org) で常に利用できます。**

開発チームは、 `production-staging` ブランチから `production-current` への変更をリリースするときにマージします。 トップコミットは、サイト上でライブで見るものでなければなりません。

状況セクションで使用可能なビルドおよびデプロイのログにアクセスして、デプロイされた正確なバージョンを確認できます。 あるいは、 [投稿者のチャットルーム](https://gitter.im/FreeCodeCamp/Contributors) で確認を行うこともできます。

### 既知の制限

プラットフォームのベータ版を使用する場合、いくつかの既知の制限とトレードオフがあります。

- #### これらのベータプラットフォーム上のすべてのデータ / 個人的な進捗状況は `保存されたり本番環境に` 渡されたりすることはありません。

  **ベータ版のユーザーは本番と別のアカウントを持つことになります。 ** ベータ版は本番と物理的に分離されたデータベースを使用します。 これにより、偶発的なデータの損失や変更を防ぐことができます。 開発チームは、必要に応じてこのベータ版のデータベースを削除する可能性があります。

- #### ベータ版プラットフォームの稼働時間と信頼性については保証はありません。

  展開は頻繁で、迅速な反復では、時には1日に複数回行われることが期待されます。 その結果、ベータ版で予期しないダウンタイムや機能が壊れることがあります。

- #### 修正を確認する手段として、このサイトに正規ユーザーを送信しないでください

  ベータサイトは、常にローカルの開発とテストを拡張することであり、他のものではありません。 それは何が来るかの約束ではありませんが、何が取り組まれているかを垣間見ることができます。

- #### サインページがプロダクションと異なる場合があります

   Auth0のfreecodecamp.dev用のテストテナントを使用しているため、カスタムドメインを設定することはできません。 これにより、すべてのリダイレクトコールバックとログインページが以下のようなデフォルトドメインに表示されるようになります: `https://freecodecamp-dev.auth0.com/`. これは、私たちが得ることができるように生産に近い機能に影響を与えません。

## 問題の報告とフィードバックの残す

ディスカッションやバグの報告のために、新たな課題を開いてください。 **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** というラベルを付けることができます。

質問があれば、 `dev[at]freecodecamp.org` にメールを送信できます。 すべてのセキュリティ脆弱性は、公開トラッカーやフォーラムではなく、 `security[at]freecodecamp.org` に報告する必要があります。

> **注記:** これは **オプション** ステップであり、メールワークフローを使用する場合にのみ必要です。

- [はじめに](#introduction)
- [MailHog のインストール](#installing-mailhog)
- [MailHog の使用](#using-mailhog)
- [有用なリンク](#useful-links)

## はじめに

ユーザーのメールを更新するなどの一部のメールワークフローでは、バックエンドの api-server が送信メールを送信します。 MailHog は、実際のメールメッセージを送信する電子メールサービスプロバイダの代わりになります。 これは、freeCodeCamp インスタンスから送信されたメールメッセージをキャッチするメールテスト用の開発ツールです。

## MailHog のインストール

MailHog は、macOS、Windows、Linux にインストールすることも、Docker 経由で使用することもできます。

<details><summary>Dockerで MailHog をインストールする</summary>

インストールされた Docker があれば、それを使用できます。

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

上記コマンドによりバックグラウンドで MailHog を起動できます。

```bash
docker stop mailhog
```

上記コマンドにより MailHog を停止できます。

インストールが完了すると、[using MailHog](#using-mailhog) を起動できます。

</details>

<details><summary>macOS に MailHog をインストールする</summary>

[Homebrew](https://brew.sh/) を使用して macOS に MailHog をインストールします。

```bash
brew install mailhog
brew services start mailhog
```

上記コマンドにより、バックグラウンドで mailhog サービスを起動します。

インストールが完了すると、[using MailHog](#using-mailhog) を起動できます。

</details>

<details><summary>Windows に MailHog をインストールする</summary>

[MailHog の公式リポジトリ](https://github.com/mailhog/MailHog/releases) から最新バージョンの MailHog をダウンロードします。 Windows バージョン (32 ビットまたは 64 ビット) のリンクをクリックすると、.exe ファイルがコンピュータにダウンロードされます。

ダウンロードが完了したら、クリックしてファイルを開きます。 Windows ファイアウォールの通知が表示され、MailHog のアクセス許可を要求する場合があります。 ファイアウォールへのアクセスが許可されると、標準の Windows コマンドラインプロンプトが開き、MailHog が実行されます。

コマンドプロンプトウィンドウを閉じて、MailHog を閉じます。 MailHog を再度起動するには、最初にダウンロードした MailHog 実行可能ファイル (. xe)  をクリックします。新たにMailHog インストールファイルをダウンロードする必要はありません。

[using MailHog](#using-mailhog) を起動します。

</details>

<details><summary>Linux に MailHog をインストールする</summary>

まず、[GO](https://golang.org) をインストールします。

次のコマンドを実行して、Ubuntu や Linux Mint などの Debian ベースのシステムに GO をインストールします。

```bash
sudo apt-get install golang
```

次のコマンドを実行して、CentOS、Fedora、Red Hat Linux などの RPM ベースのシステムに GO をインストールします。

```bash
sudo dnf install golang
```

代わりに、次のコマンドを実行して GO をインストールすることもできます。

```bash
sudo yum install golang
```

次のコマンドで GO のパスを設定します。

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

最後に、以下のコマンドを入力して MailHog をインストールして実行します。

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

[using MailHog](#using-mailhog) を起動します。

</details>

## MailHog の使用

新しいブラウザータブまたはウィンドウを開き、[http://localhost:8025](http://localhost:8025) に移動します。MailHog がインストールされ、実行されたら、受信トレイを開きます。 受信トレイは、下のスクリーンショットと同じように表示されます。

![MailHog のスクリーンショット 1](https://contribute.freecodecamp.org/images/mailhog/1.jpg)

freeCodeCamp のインストールにより送信されたメールは、以下のように表示されます。

![MailHog のスクリーンショット 2](https://contribute.freecodecamp.org/images/mailhog/2.jpg)

指定のメールを開く際、2 つのタブを使用して、プレーンテキストまたはソースコンテンツのいずれかを表示できます。 プレーンテキストタブが以下のように選択されていることを確認してください。

![MailHog のスクリーンショット 3](https://contribute.freecodecamp.org/images/mailhog/3.jpg)

電子メール内のすべてのリンクはクリック可能であり、その URL を解決します。

## 有用なリンク

- MailHog に関連する詳細情報については、 [MailHog](https://github.com/mailhog/MailHog) リポジトリを参照してください。 カスタム MailHog 設定に関する追加情報も入手できます。

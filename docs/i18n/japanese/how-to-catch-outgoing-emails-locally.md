> **注:** これは **オプション** ステップであり、メールワークフローを使用する場合にのみ必要です。

- [はじめに](#introduction)
- [MailHog のインストール](#installing-mailhog)
- [MailHog の使用](#using-mailhog)
- [有用なリンク](#useful-links)

## はじめに

ユーザーのメールを更新するなどの一部のメールワークフローでは、バックエンドの API サーバーが送信メールを送信します。 MailHog は、実際のメールメッセージを送信する電子メールサービスプロバイダの代わりになります。 これは、freeCodeCamp インスタンスから送信されたメールメッセージをキャッチするメールテスト用の開発ツールです。

## MailHog のインストール

MailHog は、macOS、Windows、Linux にインストールすることも、Docker 経由で使用することもできます。

<details><summary>Dockerで MailHog をインストールする</summary>

Docker がインストールされていれば、次のコマンドが使用できます。

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

上記コマンドによりバックグラウンドで MailHog を起動できます。

```bash
docker stop mailhog
```

上記コマンドにより MailHog を停止できます。

インストールが完了すると、[MailHog の使用](#mailhog-の使用) を開始できます。

</details>

<details><summary>macOS に MailHog をインストールする</summary>

[Homebrew](https://brew.sh/) を使用して macOS に MailHog をインストールします。

```bash
brew install mailhog
brew services start mailhog
```

上記コマンドにより、バックグラウンドで mailhog サービスを起動します。

インストールが完了すると、[MailHog の使用](#mailhog-の使用) を開始できます。

</details>

<details><summary>Windows に MailHog をインストールする</summary>

[MailHog の公式リポジトリ](https://github.com/mailhog/MailHog/releases) から最新バージョンの MailHog をダウンロードします。 Locate and click on the link for your Windows version (32 or 64 bit) and a `.exe` file will be downloaded to your computer.

ダウンロードが完了したら、クリックしてファイルを開きます。 Windows ファイアウォールの通知が表示され、MailHog のアクセス許可を要求する場合があります。 ファイアウォールへのアクセスが許可されると、標準の Windows コマンドラインプロンプトが開き、MailHog が実行されます。

コマンドプロンプトウィンドウを閉じて、MailHog を閉じます。 To start MailHog again, click on the MailHog executable (`.exe`) file that was downloaded initially - it is not necessary to download a new MailHog installation file.

[MailHog の使用](#mailhog-の使用) を開始します。

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

[MailHog の使用](#mailhog-の使用) を開始します。

</details>

## MailHog の使用

Open a new browser tab or window and navigate to [http://localhost:8025](http://localhost:8025) to open your MailHog inbox when the MailHog installation has completed and MailHog is running.

## 有用なリンク

- MailHog に関連する詳細情報については、 [MailHog](https://github.com/mailhog/MailHog) リポジトリを参照してください。 カスタム MailHog 設定に関する追加情報も入手できます。

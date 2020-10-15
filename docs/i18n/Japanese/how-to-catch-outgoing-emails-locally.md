> **Note:** This is an **optional** step and is only only when with email workflow

## はじめに

ユーザーのメールを更新するなどの一部のメールワークフローでは、バックエンドの api-server が送信メールを送信する必要があります。 実際の電子メールメッセージを送信するために電子メールサービスプロバイダを使用する代わりに Mailhogはメールテスト用の開発ツールで、freeCodeCampインスタンスから送信されたメールメッセージをキャッチします。

## MailHog のインストール

MailHog は macOS、Windows、Linux にインストールできます。

- [はじめに](#introduction)
- [MailHog のインストール](#installing-mailhog)
  - [macOSへのMailHogのインストール](#installing-mailhog-on-macos)
  - [WindowsへのMailHogのインストール](#installing-mailhog-on-windows)
  - [LinuxへのMailHogのインストール](#installing-mailhog-on-linux)
- [MailHog の使用](#using-mailhog)
- [有用なリンク](#useful-links)

### macOSへのMailHogのインストール

[Homebrew](https://brew.sh/) を使って macOS に MailHog をインストールする :

```bash
brew install mailhog
brew services start mailhog
```

上記のコマンドは、バックグラウンドでmailhog サービスを開始します。

インストールが完了したら、MailHog [を使用して](#using-mailhog) を起動できます。

### WindowsへのMailHogのインストール

[MailHog の公式リポジトリ](https://github.com/mailhog/MailHog/releases) から最新バージョンの MailHog をダウンロードしてください。 Windows版(32ビットまたは64ビット)のリンクをクリックすると、.exeファイルがコンピュータにダウンロードされます。

ダウンロードが完了したら、クリックしてファイルを開きます。 Windowsファイアウォールの通知が表示されたり、MailHogのアクセス許可を要求したりすることがあります。 ファイアウォールへのアクセスが許可されると、MailHog が実行される標準の Windows コマンドラインプロンプトが開きます。

コマンドプロンプトウィンドウを閉じてMailHogを閉じます。 MailHog を再度起動するには、MailHog 実行可能ファイル (. xe) 最初にダウンロードされたファイル - 新しいMailHogインストールファイルをダウンロードする必要はありません。

MailHog [を使用して](#using-mailhog) を開始します。

### LinuxへのMailHogのインストール

まず、 [Go](https://golang.org) をインストールします。

UbuntuやLinux MintなどのDebianベースのシステムにGOをインストールするには、次のコマンドを実行します。

```bash
sudo apt-get install golang
```

CentOS、Fedora、Red Hat LinuxなどのRPMベースのシステムにGOをインストールするには、次のコマンドを実行します。

```bash
sudo dnf install golang
```

または、GOをインストールするには、次のコマンドを実行します。

```bash
sudo yum install golang
```

次のコマンドで Go のパスを設定します。

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

最後に、MailHog をインストールして実行するために以下のコマンドを入力します。

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

MailHog [を使用して](#using-mailhog) を開始します。

## MailHog の使用

新しいブラウザータブまたはウィンドウを開き、 [http://localhost:8025](http://localhost:8025) に移動して、MailHog のインストールが完了し、MailHog が実行されているときに受信トレイを開きます。 受信トレイは以下のスクリーンショットと同様に表示されます。

![MailHog のスクリーンショット1](images/mailhog/1.jpg)

freeCodeCampのインストールによって送信されたメールは以下のように表示されます

![MailHog スクリーンショット2](images/mailhog/2.jpg)

特定の電子メールを開くと、プレーンテキストまたはソースコンテンツのいずれかを表示できる2つのタブが表示されます。 プレーンテキストタブが以下のように選択されていることを確認します。

![MailHog スクリーンショット3](images/mailhog/3.jpg)

メール内のすべてのリンクはクリック可能で、そのURLに解決される必要があります。

## 有用なリンク

- MailHog に関連する詳細情報については、 [MailHog](https://github.com/mailhog/MailHog) リポジトリを参照してください。 カスタム MailHog 設定に関する追加情報も入手できます。

# Windows HomeでDockerを使用する方法

Windows Homeでdockerを設定する際に避けるべき落とし穴がいくつかあります。 まず、 [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) を管理者として使用する必要があります。 残念ながら、Windows Home は Docker for Windows デスクトップをサポートしていないため、代わりにツールボックスを使用する必要があります。 インストールでは、シンボリックリンクを使用するため、管理者として実行する必要があります。

ツールボックスをインストールしたら、管理者として Docker Quickstart Terminal を実行します。 これは、 `既定の` 仮想マシンを作成します。 まだ存在しない場合。 それが起こったら、ターミナルを閉じて(再び管理者として)VirtualBoxを開きます。 `デフォルト` マシンを見ることができます。 サイトはかなりリソース集約的ですので、仮想マシンを停止し、特にメモリをできるだけ多くの設定を上げます。 4GBのラムで動作することが確認されています。

Dockerが動作していることに満足したら、freeCodeCampリポジトリを `C:\Users`内のディレクトリにクローンします。 これらのディレクトリは共有され、インストール中に必要なローカルディレクトリに Docker アクセスを提供します。

次のようなメッセージが表示される場合

```shell
bash: change_volumes_owner.sh: そのようなファイルやディレクトリがありません
```

npm run docker:init `` が犯人である可能性があります。

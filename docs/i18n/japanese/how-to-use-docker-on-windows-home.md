# Windows Homeで Docker を使用する方法

Windows Home で Docker を設定する際に避けるべき落とし穴がいくつかあります。 まず、[Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) を管理者として使用する必要があります。 残念ながら、Windows Home は Docker for Windows Desktop をサポートしていないため、代わりに Toolbox を使用する必要があります。 インストールでシンボリックリンクを使用するため、管理者として実行する必要があります。

Toolbox をインストールしたら、管理者として Docker Quickstart Terminal を実行します。 既存の仮想マシンが存在しない場合は、 `default` 仮想マシンが作成されます その後、ターミナルを閉じて (再び管理者として) VirtualBoxを開きます。 `デフォルト` マシンが表示されます。 サイトはかなりリソースが多いので、仮想マシンを停止し、できるだけメモリの容量を増やしてください。 4GBの RAM で動作することが確認されています。

Docker が正常に動作していることを確認したら、freeCodeCamp リポジトリを `C:\Users` 内のディレクトリにクローンします。 これらのディレクトリは共有され、インストール中に必要なローカルディレクトリに Docker アクセスを提供します。

次のようなメッセージが表示される場合

```shell
bash: change_volumes_owner.sh: No such file or directory
```

`npm run docker:init` が原因である可能性があります。

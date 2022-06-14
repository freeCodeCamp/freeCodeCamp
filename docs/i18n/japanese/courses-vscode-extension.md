# VSCode 拡張機能「Courses」について

ここでは、[freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) リポジトリのメンテナンス方針について説明します。このリポジトリには、[freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses) 拡張機能のソースコードが含まれています。

## 拡張機能を公開する

`prod` ブランチにプッシュされ次第、GitHub Action が拡張機能を自動的に Visual Studio Marketplace に公開します。

`main` ブランチがチェックアウトされていることを確認してください。

```bash
git checkout main
```

`upstream` からローカルリポジトリを最新の状態にし、`main` をリセットしてください。

```bash
git fetch upstream
git reset --hard upstream/main
```

`prod` ブランチをチェックアウトしてください。

```bash
git checkout prod
```

`prod` にデプロイしたいコミットをマージしてください。

```bash
git merge main
```

ローカルブランチを `upstream` にプッシュしてください。

```bash
git push upstream
```

> [!NOTE] `upstream` にプッシュするには、`freeCodeCamp/courses-vscode-extension` リポジトリへの書き込み権限が必要です。

## 拡張機能を手動で公開する

手作業での Visual Studio Marketplace への公開は、次の手順に従って行うことができます:

1. https://marketplace.visualstudio.com/ にアクセスし、サインイン
2. [freeCodeCamp Publisher page](https://marketplace.visualstudio.com/manage/publishers/freecodecamp) に移動する
3. 該当する拡張機能を選択し、`Update` をクリックする
4. ローカルからファイルをアップロードする

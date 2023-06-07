---
id: 5e46f979ac417301a38fb932
title: ポートスキャナー
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-port-scanner" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用して取り組んでください</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


Python カリキュラムの対話式教育コンテンツを引き続き開発中です。 現在、下記の freeCodeCamp.org YouTube チャンネルで、このプロジェクトの完了に必要なすべての知識について説明する動画をいくつか公開しています。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">「みんなの Python」動画コース</a> (14 時間)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Python の基礎を詳しく学ぶ</a> (4 時間)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Python 中級コース</a> (6 時間)

# --instructions--

Python を使用してポートスキャンプログラムを作成してください。

`port_scanner.py` ファイルで、`target` と `port_range` を引数に取る `get_open_ports` という関数を作成してください。 `target` には URL または IP アドレスを指定できます。 `port_range` は、チェック対象のポート範囲の最初と最後を示す 2 つの数値のリストです。

関数呼び出しの例を次に示します。

```py
get_open_ports("209.216.230.240", [440, 445])
get_open_ports("www.stackoverflow.com", [79, 82])
```

この関数は、指定した範囲の中で開いているポートのリストを返す必要があります。

`get_open_ports` 関数はまた、オプションの 3 つ目の引数として、「詳細」モードであることを示す `True` を受け取る必要があります。 これが true に設定されている場合、関数はポートのリストの代わりに説明的な文字列を返す必要があります。

詳細モードで返される文字列の形式は次のとおりです (`{}` で囲まれたテキストは表示すべき情報を示しています)。

```bash
Open ports for {URL} ({IP address})
PORT     SERVICE
{port}   {service name}
{port}   {service name}
```

`common_ports.py` の辞書を使用して、各ポートの正しいサービス名を取得できます。

たとえば、関数を

```py
port_scanner.get_open_ports("scanme.nmap.org", [20, 80], True)
```

ように呼び出した場合は、次を返す必要があります。

```bash
Open ports for scanme.nmap.org (45.33.32.156)
PORT     SERVICE
22       ssh
80       http
```

必ず適切なスペースと改行文字を含めてください。

`get_open_ports` 関数に渡された URL が無効な場合、関数は文字列 "Error: Invalid hostname" を返す必要があります。

`get_open_ports` 関数に渡された IP アドレスが無効な場合、関数は文字列 "Error: Invalid IP address" を返す必要があります。

## 開発

`port_scanner.py` にコードを記述してください。 開発には `main.py` を使用してコードをテストすることができます。 「実行」ボタンをクリックすると `main.py` が実行されます。

## テスト

このプロジェクトの単体テストは `test_module.py` にあります。 すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「実行」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

すべての Python テストが成功する必要があります。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

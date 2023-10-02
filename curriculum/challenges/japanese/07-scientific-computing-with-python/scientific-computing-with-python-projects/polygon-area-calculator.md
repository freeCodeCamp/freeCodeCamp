---
id: 5e444147903586ffb414c94f
title: 四角形の面積計算プログラム
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用します</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


# --instructions--

このプロジェクトでは、オブジェクト指向プログラミングを使用して、Rectangle クラスと Square クラスを作成します。 Square クラスは Rectangle のサブクラスであり、メソッドと属性を継承する必要があります。

## Rectangle クラス

Rectangle オブジェクトを作成する際、`width` 属性と `height` 属性を与えて初期化できるようにします。 このクラスには次のメソッドも含める必要があります。

- `set_width`
- `set_height`
- `get_area`: 面積を返します (`width * height`)
- `get_perimeter`: 外周を返します (`2 * width + 2 * height`)
- `get_diagonal`: 対角線を返します(`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: "\*" の行を使用して図形を表す文字列を返します。 行数は高さと等しく、各行の"\*"の数は幅と等しくする必要があります。 各行の末尾に改行 (`\n`) が必要です。 幅または高さが 50 より大きい場合は、文字列 "Too big for picture." を返す必要があります。
- `get_amount_inside`: 引数として別の図形 (正方形または長方形) を受け取ります。 渡された図形が、その図形の中に何個収まるかを返します (回転はしません)。 たとえば、幅が 4 で高さが 8 の長方形には、一辺が 4 の正方形が 2つ収まります。

また、Rectangle のインスタンスを文字列で表現すると `Rectangle(width=5, height=10)` のようになります。

## Square クラス

Square クラスは Rectangle のサブクラスである必要があります。 Square オブジェクトが生成されるときは、一辺の長さを渡します。 `__init__` メソッドでは、一辺の長さを Rectangle クラスの `width` 属性と `height` 属性の両方に格納する必要があります。

Square クラスは、Rectangle クラスのメソッドにアクセスできる必要があり、加えて `set_side` メソッドも含める必要があります。 Square のインスタンスを文字列で表現すると `Square(side=9)` のようになります。

また、Square クラスの `set_width` と `set_height` メソッドでは、幅と高さの両方を設定する必要があります。

## 使用例

```py
rect = shape_calculator.Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = shape_calculator.Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))
```

上記のコードは次を返す必要があります。

```bash
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8
```

このプロジェクトの単体テストは `test_module.py` にあります。

## 開発

`shape_calculator.py` でコードを記述してください。 開発には `main.py` を使用して `shape_calculator()` 関数をテストすることができます。 「Run」ボタンをクリックすると `main.py` が実行されます。

## テスト

すでに `test_module.py` から `main.py` にテストをインポートしてあります。 「Run」ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

Rectangle クラスと Square クラスを作成し、すべてのテストを成功させる必要があります。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

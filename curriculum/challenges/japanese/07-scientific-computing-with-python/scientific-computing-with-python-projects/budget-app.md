---
id: 5e44413e903586ffb414c94e
title: 予算アプリ
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

<a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">このプロジェクトには Replit スターターコードを使用します</a>。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。


# --instructions--

`budget.py` の `Category` クラスを完成させてください。 このクラスは *food* (食費)、*clothing* (服飾費)、*entertainment* (娯楽費) など、さまざまな予算のカテゴリーに応じてオブジェクトをインスタンス化できるようにする必要があります。 オブジェクトを作成する際に、カテゴリーの名前をオブジェクトに渡します。 クラスには、リスト型の `ledger` (帳簿) というインスタンス変数を持たせてください。 このクラスには次のメソッドも含める必要があります。

- `deposit` (預け入れ) メソッド。金額と説明を受け取ります。 説明がない場合は、デフォルトで空の文字列にします。 このメソッドでは、`{"amount": amount, "description": description}` という形式で帳簿リストの末尾にオブジェクトを追加する必要があります。
- `withdraw` (引き出し) メソッド。`deposit` メソッドに似ていますが、渡された金額を負の数として帳簿に保存する必要があります。 十分な資金がない場合は、帳簿に何も追加しないでください。 このメソッドは、引き出しが行われた場合は `True` を返し、それ以外の場合は `False` を返す必要があります。
- `get_balance` (残高確認) メソッド。発生した入出金に基づいて予算カテゴリの現在の残高を返します。
- `transfer` (送金) メソッド。引数として金額と別の予算カテゴリを受け取ります。 このメソッドでは、金額と "Transfer to [Destination Budget Category]" ([送金先の予算カテゴリ] への送金) という記述からなる出金を追加する必要があります。 そして、金額と "Transfer from [Destination Budget Category]" ([送金元の予算カテゴリ] からの送金) という記述からなる入金額が送金先予算カテゴリに追加されます。 十分な資金がない場合は、どちらの帳簿にも何も追加しないでください。 このメソッドは、送金が行われた場合は `True` を返し、それ以外の場合は `False` を返す必要があります。
- `check_funds` (資金確認) メソッド。引数として金額を受け取ります。 金額が予算カテゴリの残高よりも大きい場合は `False` を返し、それ以外の場合は `True` を返します。 このメソッドは `withdraw` メソッドと `transfer` メソッドの両方で使用する必要があります。

予算オブジェクトを出力するときは以下の項目を表示する必要があります。

- 30 文字のタイトル行。`*` 文字を並べて 1 行とし、中央にカテゴリの名前を置きます。
- 帳簿にある品目のリスト。 各行に説明と金額を表示します。 説明の最初の 23 文字を表示し、その後に金額を表示します。 金額は右揃えで、小数点以下 2 桁までを含み、最大 7 文字まで表示します。
- カテゴリの合計を表示する行。

出力の例を次に示します。

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

`Category` クラスの他に、カテゴリのリストを引数に取る `create_spend_chart` という関数を (クラスの外で) 作成してください。 この関数は棒グラフとなる文字列を返す必要があります。

グラフでは、関数に渡された各カテゴリについて、その出費の割合を表示するようにしてください。 出費の割合は、引き出し額でのみ計算する必要があり、預け入れ額では計算しません。 グラフの左端に沿って、0 ～ 100 のラベルを付けてください。 棒グラフの「棒」は文字 "o" を使用して作成してください。 各棒の高さは最も近い 10 ごとの数字に切り下げる必要があります。 グラフの下の水平線は最後の棒からスペース 2 つ分だけ伸ばす必要があります。 各カテゴリ名は棒の下に縦書きで表示してください。 一番上には "Percentage spent by category" (カテゴリ別の出費の割合) というタイトルを付けてください。

この関数は最大 4 つのカテゴリでテストされます。

次の出力例を参考にして、出力の間隔を例と正確に合わせてください。

```bash
Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
```

このプロジェクトの単体テストは `test_module.py` にあります。

## 開発

`budget.py` にコードを記述してください。 開発時には `main.py` を使用して `Category` クラスをテストできます。 "Run" ボタンをクリックすると `main.py` が実行されます。

## テスト

すでに `test_module.py` から `main.py` にテストをインポートしてあります。 "Run" ボタンを押すと自動的にテストが実行されます。

## 提出

プロジェクトの URL をコピーし、freeCodeCamp に提出してください。

# --hints--

Category クラスを作成し、すべてのテストを成功させる必要があります。

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

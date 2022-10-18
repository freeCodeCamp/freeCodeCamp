---
id: 5e44413e903586ffb414c94e
title: 予算アプリ
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

# --instructions--

Complete the `Category` class in `budget.py`. It should be able to instantiate objects based on different budget categories like *food*, *clothing*, and *entertainment*. When objects are created, they are passed in the name of the category. The class should have an instance variable called `ledger` that is a list. The class should also contain the following methods:

- `deposit` (預け入れ) メソッド。金額と説明を受け取ります。 説明がない場合は、デフォルトで空の文字列にします。 The method should append an object to the ledger list in the form of `{"amount": amount, "description": description}`.
- A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. このメソッドは、引き出しが行われた場合は `True` を返し、それ以外の場合は `False` を返す必要があります。
- `get_balance` (残高確認) メソッド。発生した入出金に基づいて予算カテゴリの現在の残高を返します。
- `transfer` (送金) メソッド。引数として金額と別の予算カテゴリを受け取ります。 The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. このメソッドは、送金が行われた場合は `True` を返し、それ以外の場合は `False` を返す必要があります。
- `check_funds` (資金確認) メソッド。引数として金額を受け取ります。 It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. このメソッドは `withdraw` メソッドと `transfer` メソッドの両方で使用する必要があります。

When the budget object is printed it should display:

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

The chart should show the percentage spent in each category passed in to the function. The percentage spent should be calculated only with withdrawals and not with deposits. Down the left side of the chart should be labels 0 - 100. The "bars" in the bar chart should be made out of the "o" character. 各棒の高さは最も近い 10 に切り下げる必要があります。 The horizontal line below the bars should go two spaces past the final bar. Each category name should be written vertically below the bar. There should be a title at the top that says "Percentage spent by category".

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

Write your code in `budget.py`. For development, you can use `main.py` to test your `Category` class. Click the "run" button and `main.py` will run.

## テスト

We imported the tests from `test_module.py` to `main.py` for your convenience. The tests will run automatically whenever you hit the "run" button.

## 提出

Copy your project's URL and submit it to freeCodeCamp.

# --hints--

It should create a Category class and pass all tests.

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

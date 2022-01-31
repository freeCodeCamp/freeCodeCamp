---
id: 59e09e6d412c5939baa02d16
title: マルコフアルゴリズム
challengeType: 5
forumTopicId: 302260
dashedName: execute-a-markov-algorithm
---

# --description--

[マルコフアルゴリズム](https://en.wikipedia.org/wiki/Markov algorithm "wp: Markov algorithm") のインタプリタを作成します。

ルールの構文は以下のとおりです。

<pre>[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[any character]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>

1行に1つのルールがあります。

\[replacement] の前に`.` (ピリオド) がある場合、インタプリタが演算を停止する規則があります。

ルールセットは、任意のコメントを含む一連のルールで構成されます。

ルールセット

以下のテストを入力に使用します。

**ルールセット1:**

<pre># This rules file is extracted from Wikipedia:
# <code>http://en.wikipedia.org/wiki/Markov_Algorithm</code>
A -> apple
B -> bag
S -> shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

`I bought a B of As from T S.` というサンプルテキストで、 `I bought a bag of apples from my brother.` が出力されます。

**ルールセット2:**

停止規則のテスト

<pre># Slightly modified from the rules on Wikipedia
A -> apple
B -> bag
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

`I bought a B of As from T S.` というサンプルテキストで、 `I bought a bag of apples from T shop.` が出力されます。

**ルールセット3:**

これは正しい置換順序をテストします。特別な正規表現文字がエスケープされない場合、単純な正規表現ベースの置換ルーチンをトラップする場合があります。

<pre># BNF Syntax testing rules
A -> apple
WWWW -> with
Bgage -> ->.*
B -> bag
->.* -> money
W -> WW
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

`I bought a B of As W my Bgage from T S.` というサンプルテキストで、 `I bought a bag of apples with my money from T shop.` が出力されます。

**ルールセット4:**

これはルールスキャンの正しい順序をテストし、誤った順序でスキャンする置換ルーチンをトラップする場合があります。 一般的な単項乗算エンジンを実装します。 (この実装では、入力式をアンダースコア内に置くことに注意してください。）

<pre>### Unary Multiplication Engine, for testing Markov Algorithm implementations
### By Donal Fellows.
# Unary addition engine
_+1 -> _1+
1+1 -> 11+
# Pass for converting from the splitting of multiplication into ordinary
# addition
1! -> !1
,! -> !+
_! -> _
# Unary multiplication by duplicating left side, right side times
1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# Next phase of applying
1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# Termination cleanup for addition
_1 -> 1
1+_ -> 1
_+_ ->
</pre>

`_1111*11111_` というサンプルテキストで、`11111111111111111111` が出力されます。

**ルールセット5:**

シンプルな [チューリングマシン](http://en.wikipedia.org/wiki/Turing_machine "link: http&#x3A;//en.wikipedia.org/wiki/Turing_machine")は、3-状態 [ビジービーバー](http://en.wikipedia.org/wiki/Busy_beaver "link: http&#x3A;//en.wikipedia.org/wiki/Busy_beaver")を実装します。

このテープは `0`と`1`からなり、状態は `A`、`B`、`C` および`H` (`H`altの場合) であり、先頭の位置は先頭文字の前に状態文字を書くことにより示されます。 マシンが操作する元のテープをすべて入力する必要あります。

マルコフアルゴリズムがチューリング完全であることを示すだけでなく、 最初の4つのルールセットでは見つからなかったC++実装のバグを検出することができました。

<pre># Turing machine: three-state busy beaver
#
# state A, symbol 0 => write 1, move right, new state B
A0 -> 1B
# state A, symbol 1 => write 1, move left, new state C
0A1 -> C01
1A1 -> C11
# state B, symbol 0 => write 1, move left, new state A
0B0 -> A01
1B0 -> A11
# state B, symbol 1 => write 1, move right, new state B
B1 -> 1B
# state C, symbol 0 => write 1, move left, new state B
0C0 -> B01
1C0 -> B11
# state C, symbol 1 => write 1, move left, halt
0C1 -> H01
1C1 -> H11
</pre>

このルールセットで `000000A000000` が `00011H1111000`に変更されます。

# --hints--

`markov` という関数です。

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")`は「I bought a bag of apples from my brother.」を返します。

```js
assert.deepEqual(markov(rules[0], tests[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` は「I bought a bag of apples from T shop.」を返します。

```js
assert.deepEqual(markov(rules[1], tests[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` は「I bought a bag of apples with my money from T shop.」を返します。

```js
assert.deepEqual(markov(rules[2], tests[2]), outputs[2]);
```

`markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")` should return "11111111111111111111".

```js
assert.deepEqual(markov(rules[3], tests[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` は「00011H1111000」を返します。

```js
assert.deepEqual(markov(rules[4], tests[4]), outputs[4]);
```

# --seed--

## --after-user-code--

```js

let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
            ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let tests=["I bought a B of As from T S.",
            "I bought a B of As from T S.",
            "I bought a B of As W my Bgage from T S.",
            "_1111*11111_",
            "000000A000000"];
let outputs=["I bought a bag of apples from my brother.",
            "I bought a bag of apples from T shop.",
            "I bought a bag of apples with my money from T shop.",
            "11111111111111111111",
            "00011H1111000"]

```


## --seed-contents--

```js
function markov(rules,test) {

}
```

# --solutions--

```js
function markov(rules,test) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origTest = test;

    let captures = [];

    rules.forEach(function(rule){
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++)
            m[j] = m[j + 1];
        captures.push(m);
    });

    test = origTest;
    let copy = test;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        test = test.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (test!=copy) {
            j = -1;
            copy = test;
        }
    }
    return test;
}
```

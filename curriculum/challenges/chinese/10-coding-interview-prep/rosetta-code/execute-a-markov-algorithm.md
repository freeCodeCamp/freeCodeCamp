---
id: 59e09e6d412c5939baa02d16
title: 执行马尔可夫算法
challengeType: 5
videoUrl: ''
dashedName: execute-a-markov-algorithm
---

# --description--

任务：

为[马尔可夫算法](<https://en.wikipedia.org/wiki/Markov algorithm> "wp：马尔可夫算法")创建解释器。

规则的语法如下：

<pre>[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[any character]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>

每行有一条规则。

如果在 \[replacement] 之前有一个 `.`（句点），那么这就是一个终止规则。在这种情况下，解释器必须停止执行。

规则集由一系列规则组成，可能包含一些注释。

规则集

我们会对你提交的代码进行如下测试：

**规则集 1：**

<pre># 此条规则来自 Wikipedia：
# <code>http://en.wikipedia.org/wiki/Markov_Algorithm</code>
A -> apple
B -> bag
S -> shop
T -> the
the shop -> my brother
(终止规则) -> .
</pre>

对于这段文本：

`I bought a B of As from T S.`

应该输出：

`I bought a bag of apples from my brother.`

**规则集 2：**

终止规则的测试

<pre># 基于 Wikipedia 的规则稍做修改
A -> apple
B -> bag
S -> .shop
T -> the
the shop -> my brother
(终止规则) -> .
</pre>

对于这段文本：

`I bought a B of As from T S.`

应该输出：

`I bought a bag of apples from T shop.`

**规则集 3：**

这条不仅可以用来测试替换顺序是否正确，还可以测试你的代码中对正则表达式的处理是否完备。如果你的代码没有对正则表达式进行正确的转义处理，那在替换的时候就会出现问题。

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
(终止规则) -> .
</pre>

对于这段文本：

`I bought a B of As W my Bgage from T S.`

应该输出：

`I bought a bag of apples with my money from T shop.` 

**规则集 4：**

这条是用来测试规则扫描的顺序是否正确，并可能捕获以错误顺序扫描的替换例程。这里我们选取了通用的一元乘法引擎（请注意，在此实现中，输入的表达式必须放在两个下划线之间）。

<pre> ##一元乘法引擎，用于测试马尔可夫算法实现
### by Donal Fellows
# 一元加法引擎
_+1 -> _1+
1+1 -> 11+
# 将乘法转换为普通加法
1! -> !1
,! -> !+
_! -> _
# 一元乘法，左侧为被乘数，右侧为乘数
1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# 下一阶段
1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# 加法的终止条件
_1 -> 1
1+_ -> 1
_+_ ->
</pre>

对于这段文本：

`_1111*11111_`

应该输出：

`11111111111111111111`

**规则集5：**

一台简单的[图灵机](http://en.wikipedia.org/wiki/Turing_machine)包含三个状态的["忙碌海狸"](http://en.wikipedia.org/wiki/Busy_beaver)。纸带由 0 和 1 组成，状态为 A、B、C 和代表终止（Halt）的 H。通过在字符前写状态字母来的方式来指示读写头的位置。机器运行时需要的初始纸带必须通过输入在一开始全部给出。

这一规则集除了可以证明 Markov 算法是图灵完备的，它还帮我找出了使用 C++ 完成此题中的一个错误，而且这个错误没有被前四个规则集抓到。

<pre># 图灵机：三个状态的"忙碌海狸"
# 状态 A，符号 0 => 写入 1，向右移动，新状态 B
A0 -> 1B
# 状态 A，符号 1 => 写入 1，向左移动，新状态 C
0A1 -> C01
1A1 -> C11
# 状态 B，符号 0 => 写入 1，向左移动，新状态 A
0B0 -> A01
1B0 -> A11
# 状态 B，符号 1 => 写入 1，向右移动，新状态 B
B1  - > 1B
# 状态 C，符号 0 => 写入 1，向左移动，新状态 B
0C0  - > B01
1C0  - > B11
# 状态 C，符号 1 => 写入 1，向左移动，停止
0C1  - > H01
1C1  - > H11
</pre>

这个规则集应将这段输入：

`000000A000000` 

转换成：

`00011H1111000`

# --hints--

`markov` 应是一个函数。

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` 应返回 "I bought a bag of apples from my brother."。

```js
assert.deepEqual(markov(rules[0], tests[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` 应返回 "I bought a bag of apples from T shop."。

```js
assert.deepEqual(markov(rules[1], tests[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` 应返回 "I bought a bag of apples with my money from T shop."。

```js
assert.deepEqual(markov(rules[2], tests[2]), outputs[2]);
```

`markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")` 应返回 "11111111111111111111"。

```js
assert.deepEqual(markov(rules[3], tests[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` 应返回 "00011H1111000"。

```js
assert.deepEqual(markov(rules[4], tests[4]), outputs[4]);
```

# --seed--

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

// tail:
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
            "00011H1111000"];
```

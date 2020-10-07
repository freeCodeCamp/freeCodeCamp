---
id: 59e09e6d412c5939baa02d16
challengeType: 5
videoUrl: ''
title: 执行马尔可夫算法
---

## Description
<section id="description">任务： <p>为<a href="https://en.wikipedia.org/wiki/Markov algorithm" title="wp：马尔可夫算法">马尔可夫算法</a>创建解释器。 </p><p>规则具有以下语法： </p><p><ruleset> :: =（（ <comment> | <rule> ） <newline> +）* </newline></rule></comment></ruleset></p><p><comment> :: =＃{ <any character=""> } </any></comment></p><p><rule> :: = <pattern><whitespace> - > <whitespace> [。] <replacement></replacement></whitespace></whitespace></pattern></rule></p><p><whitespace> :: =（ <tab> | <space> ）[ <whitespace> ] </whitespace></space></tab></whitespace></p><p>每行有一条规则。 </p><p>如果有的话<b>。</b> （期间）出席之前<replacement> ，那么这是一个终止规则，在这种情况下，解释器必须停止执行。 </replacement></p><p>规则集由一系列规则和可选注释组成。 </p><p> <big><big>规则集</big></big> </p><p>对条目使用以下测试： </p>规则集1： <pre>此规则文件是从Wikipedia中提取的：
http://en.wikipedia.org/wiki/Markov_AlgorithmA  - > apple
B  - >包
S  - >店
T  - >
商店 - >我的兄弟
一个从未使用过的 - >。终止规则
</pre><p>示例文本： </p><p> <code>I bought a B of As from T S.</code> </p> <p>应该生成输出： </p><p> <code>I bought a bag of apples from my brother.</code> </p>规则集2： <p>终止规则的测试</p><pre>从维基百科的规则略有修改 - >苹果
B  - >包
S  - > .shop
T  - >
商店 - >我的兄弟
一个从未使用过的 - >。终止规则</pre><p>示例文本： </p><p> <code>I bought a B of As from T S.</code> </p> <p>应该生成： </p><p> <code>I bought a bag of apples from T shop.</code> </p>规则集3： <p>如果没有转义特殊的正则表达式字符，这将测试正确的替换顺序并可能捕获简单的基于正则表达式的替换例程。 </p><pre> BNF语法测试规则A  - > apple
WWWW  - >用
行李 - >  - >。*
B  - >包
 - >。*  - >钱
W  - > WW
S  - > .shop
T  - >
商店 - >我的兄弟
一个从未使用过的 - >。终止规则
</pre><p>示例文本： </p><p> <code>I bought a B of As W my Bgage from T S.</code> </p> <p>应该生成： </p><p> <code>I bought a bag of apples with my money from T shop.</code> </p>规则集4： <p>这将测试规则扫描的正确顺序，并可能捕获以错误顺序扫描的替换例程。它实现了一般的一元乘法引擎。 （请注意，在此实现中，输入表达式必须放在下划线中。） </p><pre> ##一元乘法引擎，用于测试马尔可夫算法实现
## Donal Fellows。
一元加法引擎_ + 1  - > _1 +
1 + 1  - > 11+
通过将乘法的分裂转换为普通的
addition1！ - >！1
，！ - >！+
_！ - > _
通过复制左侧，右侧乘以1 * 1  - > x，@ y进行一元乘法
1x  - > xX
X， - > 1,1
X1  - > 1X
_x  - > _X
，x  - >，X
y1  - > 1y
y_  - > _
apply1 @ 1  - > x，@ y的下一阶段
1 @ _  - > @_
，@ _  - >！_
++  - > +
添加终止清除_1  - > 1
1 + _  - > 1
_ + _  - >
</pre><p>示例文本： </p><p> <code>_1111*11111_</code> </p> <p>应该生成输出： </p><p> <code>11111111111111111111</code> </p>规则集5： <p>一台简单的<a href="http://en.wikipedia.org/wiki/Turing_machine" title="链接：http：//en.wikipedia.org/wiki/Turing_machine">图灵机</a> ， </p><p>实施三态<a href="http://en.wikipedia.org/wiki/Busy_beaver" title="链接：http：//en.wikipedia.org/wiki/Busy_beaver">繁忙的海狸</a> 。 </p><p>磁带由0和1组成，状态为A，B，C和H（对于Halt），并且通过在头部所在的字符之前写入状态字母来指示磁头位置。 </p><p>必须在输入中给出机器操作的初始磁带的所有部分。 </p><p>除了证明Markov算法是Turing-complete之外，它还让我抓住了C ++实现中的一个错误，这个错误没有被前四个规则集捕获。 </p><pre>图灵机：三态繁忙的海狸
状态A，符号0 =>写1，向右移动，新状态BA0  - > 1B
状态A，符号1 =>写1，向左移动，新状态C0A1  - > C01
1A1  - > C11
状态B，符号0 =>写1，向左移动，新状态A0B0  - > A01
1B0  - > A11
状态B，符号1 =>写1，向右移动，新状态BB1  - > 1B
状态C，符号0 =>写1，向左移动，新状态B0C0  - > B01
1C0  - > B11
状态C，符号1 =>写1，向左移动，停止0C1  - > H01
1C1  - > H11
</pre><p>这个规则集应该转向</p><p> <code>000000A000000</code> </p> <p>成</p><p> <code>00011H1111000</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>markov</code>是一个功能。
    testString: assert(typeof markov === 'function');
  - text: <code>markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code>应该回复“我从我兄弟那里买了一袋苹果”。
    testString: assert.deepEqual(markov(rules[0],tests[0]),outputs[0]);
  - text: <code>markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code>应该回来“我从T商店买了一袋苹果。”
    testString: assert.deepEqual(markov(rules[1],tests[1]),outputs[1]);
  - text: <code>markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")</code>应该返回”我从T商店用我的钱买了一袋苹果。“
    testString: assert.deepEqual(markov(rules[2],tests[2]),outputs[2]);
  - text: <code>markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")</code>应返回”11111111111111111111“。
    testString: assert.deepEqual(markov(rules[3],tests[3]),outputs[3]);
  - text: <code>markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")</code>应返回”00011H1111000“。
    testString: assert.deepEqual(markov(rules[4],tests[4]),outputs[4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function markov (rules,test) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

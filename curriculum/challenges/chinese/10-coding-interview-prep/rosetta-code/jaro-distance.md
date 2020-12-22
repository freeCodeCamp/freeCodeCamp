---
id: 5a23c84252665b21eecc7ec2
title: Jaro距离
challengeType: 5
videoUrl: ''
---

# --description--

Jaro距离是两个弦之间相似性的度量。两个弦的Jaro距离越高，弦越相似。对得分进行归一化，使得**0**等于没有相似性， **1**等于完全匹配。定义两个给定字符串\\（s_1 \\）和\\（s_2 \\）的Jaro距离\\（d_j \\）是\\ begin {align} d_j = \\ begin {cases} 0 && \\ text {if} m = 0 \\\\\\ \\ {\\ frac {1} {3}} \\ left（{\\ frac {m} {| s\_ {1} |}} + {\\ frac {m} {| s\_ {2} |}} + {\\ frac { mt} {m}} \\ right）&& \\ text {otherwise} \\ end {cases} \\ end {align}其中：

-   \\（m \\）是*匹配字符*的数量;
-   \\（t \\）是*换位*次数的一半。

分别来自\\（s_1 \\）和\\（s_2 \\）的两个字符只有在相同且不远于\\（\\ left \\ lfloor \\ frac {\\ max（| s_1 |，| s_2 |）}时才被认为是*匹配的* {2} \\右\\ rfloor-1 \\）。将\\（s_1 \\）的每个字符与\\（s_2 \\）中的所有匹配字符进行比较。匹配（但不同的序列顺序）字符除以2的数量定义了*转置*的数量。 **示例**给定字符串\\（s_1 \\） *DWAYNE*和\\（s_2 \\） *DUANE*我们发现：

-   \\（m = 4 \\）
-   \\（| s_1 | = 6 \\）
-   \\（| s_2 | = 5 \\）
-   \\（t = 0 \\）

我们发现Jaro得分为：\\（d_j = \\ frac {1} {3} \\ left（\\ frac {4} {6} + \\ frac {4} {5} + \\ frac {4-0} {4} \\ right）= 0.822 \\）。编写一个函数a，它接受两个字符串作为参数并返回相关的Jaro距离。

# --hints--

`jaro`应该是一个功能。

```js
assert(typeof jaro == 'function');
```

`jaro(""+tests[0][0]+"",""+tests[0][1]+"")`应返回一个数字。

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro(""+tests[0][0]+"",""+tests[0][1]+"")`应该返回`"+results[0]+"` 。

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro(""+tests[1][0]+"",""+tests[1][1]+"")`应返回`"+results[1]+"` 。

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro(""+tests[2][0]+"",""+tests[2][1]+"")`应返回`"+results[2]+"` 。

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro(""+tests[3][0]+"",""+tests[3][1]+"")`应返回`"+results[3]+"` 。

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro(""+tests[4][0]+"",""+tests[4][1]+"")`应该返回`"+results[4]+"` 。

```js
assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);
```

# --solutions--


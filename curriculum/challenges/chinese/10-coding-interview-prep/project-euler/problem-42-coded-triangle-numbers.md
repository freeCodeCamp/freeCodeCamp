---
id: 5900f3961000cf542c50fea9
title: 问题42：编码的三角形数字
challengeType: 5
videoUrl: ''
---

# --description--

三角形编号序列的第n个项由下式给出：tn =½n（n +1）; 所以前十个三角形数字是：

1，3，6，10，15，21，28，36，45，55，...

通过将单词中的每个字母转换为与其字母位置相对应的数字并添加这些值，我们形成了单词值。 例如，SKY的单词值为19 + 11 + 25 = 55 = t10。 如果单词值是一个三角形数字，那么我们将其称为三角形单词。

使用n长度的单词数组，三角形单词有几个？

# --hints--

`codedTriangleNumbers(1400)`应该返回129。

```js
assert(codedTriangleNumbers(1400) == 129);
```

`codedTriangleNumbers(1500)`应该返回137。

```js
assert(codedTriangleNumbers(1500) == 137);
```

`codedTriangleNumbers(1600)`应该返回141。

```js
assert(codedTriangleNumbers(1600) == 141);
```

`codedTriangleNumbers(1786)`应该返回162。

```js
assert(codedTriangleNumbers(1786) == 162);
```

# --solutions--


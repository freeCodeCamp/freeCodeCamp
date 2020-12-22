---
id: ab6137d4e35944e21037b769
title: 标题案例句子
challengeType: 5
videoUrl: ''
---

# --description--

返回提供的字符串，每个单词的首字母大写。确保单词的其余部分为小写。出于本练习的目的，您还应该将诸如“the”和“of”之类的连接词大写。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`titleCase("I'm a little tea pot")`应该返回一个字符串。

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")`应该归还`I'm A Little Tea Pot` 。

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")`应返回`Short And Stout` 。

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` `Here Is My Handle Here Is My Spout` `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")`应该回到`Here Is My Handle Here Is My Spout` 。

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --solutions--


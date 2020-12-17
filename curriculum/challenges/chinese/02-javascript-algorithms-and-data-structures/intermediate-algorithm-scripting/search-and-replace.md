---
id: a0b5010f579e69b815e7c5d6
title: 搜索和替换
challengeType: 5
forumTopicId: 16045
---

# --description--

在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。

这个函数接收的第一个参数为待替换的句子。

第二个参数为句中需要被替换的单词。

第三个参数为替换后的单词。

**注意：**  
你需要保留被替换单词首字母的大小写格式。即如果传入的第二个参数为 "Book"，第三个参数为 "dog"，那么替换后的结果应为 "Dog"

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`myReplace('Let us go to the store', 'store', 'mall')`应该返回 'Let us go to the mall'。

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')`应该返回 'He is Sitting on the couch'。

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace('This has a spellngi error', 'spellngi', 'spelling')`应该返回 'This has a spelling error'。

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace('His name is Tom', 'Tom', 'john')`应该返回 'His name is John'。

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace('Let us get back to more Coding', 'Coding', 'algorithms')`应该返回 'Let us get back to more Algorithms'。

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --solutions--


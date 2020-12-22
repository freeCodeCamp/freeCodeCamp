---
id: aff0395860f5d3034dc0bfc9
title: 电话号码验证器
challengeType: 5
forumTopicId: 16090
---

# --description--

如果传入的字符串是一个有效的美国电话号码格式，则返回`true`。

只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。以下是一些正确的例子（其他格式变形请参考以下例子）：

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

在这个挑战中，你将会看到例如`800-692-7753`或者`8oo-six427676;laskdjf`的号码。你的任务是根据上面不同的格式组合，判断它是否美国号码。区号是必须的。如果提供国家代码，则必须确认国家代码为`1`。如果这是有效的美国电话就返回`true`，否则返回`false`。

# --hints--

`telephoneCheck('555-555-5555')`应该返回布尔值。

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck('1 555-555-5555')`应该返回 true。

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck('1 (555) 555-5555')`应该返回 true。

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck('5555555555')`应该返回 true。

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck('555-555-5555')`应该返回 true。

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck('(555)555-5555')`应该返回 true。

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck('1(555)555-5555')`应该返回 true。

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck('555-5555')`应该返回 false。

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck('5555555')`应该返回 false。

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck('1 555)555-5555')`应该返回 false。

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck('1 555 555 5555')`应该返回 true。

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck('1 456 789 4444')`应该返回 true。

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck('123**&!!asdf#')`应该返回 false。

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck('55555555')`应该返回 false。

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck('(6054756961)')`应该返回 false。

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck('2 (757) 622-7382')`应该返回 false。

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck('0 (757) 622-7382')`应该返回 false。

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck('-1 (757) 622-7382')`应该返回 false。

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck('2 757 622-7382')`应该返回 false。

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck('10 (757) 622-7382')`应该返回 false。

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck('27576227382')`应该返回 false。

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck('(275)76227382')`应该返回 false。

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck('2(757)6227382')`应该返回 false。

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck('2(757)622-7382')`应该返回 false。

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck('555)-555-5555')`应该返回 false。

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck('(555-555-5555')`应该返回 false。

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck('(555)5(55?)-5555')`应该返回 false。

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

# --solutions--


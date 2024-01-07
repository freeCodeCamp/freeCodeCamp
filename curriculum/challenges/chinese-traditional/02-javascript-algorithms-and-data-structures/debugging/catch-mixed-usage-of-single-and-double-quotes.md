---
id: 587d7b84367417b2b2512b37
title: 捕捉單引號和雙引號的混合用法
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript 允許使用單引號（`'`）和雙引號（`"`）聲明字符串。 決定使用哪一個通常看個人偏好，但有一些例外。

如果字符串中有縮寫或存在一段帶引號的文本，你就會明白爲什麼 JavaScript 允許兩種引號了。 請注意，不要提前用引號結束字符串，這會導致語法錯誤。

下面是混合使用引號的一些示例：

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

前兩項是正確的，但第三項是不正確的。

當然，只使用一種引號也是可以的。 可以使用反斜槓（`\`）來轉義字符串內的引號：

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

修復字符串，使其對 `href` 值使用不同的引號，或者轉義現有的引號。 在整個字符串周圍保留雙引號。

# --hints--

你應通過更改或轉義來修復 `href` 的值 `#Home` 周圍的引號。

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

你應該在整個字符串外圍保留雙引號。

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```

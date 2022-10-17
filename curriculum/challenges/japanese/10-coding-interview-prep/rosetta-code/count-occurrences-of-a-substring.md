---
id: 596fda99c69f779975a1b67d
title: 部分文字列の出現回数を数える
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

関数を作成するか、組み込み関数を表示して、文字列内で重複しない部分文字列の発生回数を数えます。

関数は二つの引数を取ります。

<ul>
  <li>1つ目の引数は検索文字列です。</li>
  <li>2つ目の引数は検索する部分文字列です。</li>
</ul>

整数カウントを返します。

照合は、重複しない最大一致数になります。

通常、これは左から右へ、または右から左への照合を意味します。

# --hints--

`countSubstring` という関数です。

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` は `3` を返します。

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` は `2` を返します。

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` は `2` を返します。

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

## --seed-contents--

```js
function countSubstring(str, subStr) {

  return true;
}
```

# --solutions--

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```

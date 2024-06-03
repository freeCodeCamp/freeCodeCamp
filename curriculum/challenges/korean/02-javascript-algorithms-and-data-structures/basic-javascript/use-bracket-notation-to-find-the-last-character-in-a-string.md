---
id: bd7123c9c451eddfaeb5bdef
title: 브라켓 표기법을 사용해서 문자열의 마지막 문자를 찾기
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

문자열의 마지막 문자를 얻기 위해서는, 문자열의 길이에서 하나를 빼서 얻을 수 있습니다.

예를 들어 `const firstName = "Ada"`의 경우에는 `firstName[firstName.length - 1]`를 사용해서 문자열의 마지막 문자의 값을 얻을 수 있습니다.

예:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter`의 값은 문자열 `a`가 될 것입니다.

# --instructions--

<dfn>브라켓 표기법</dfn>을 사용해서 `lastName` 변수의 마지막 문자를 찾으세요.

**힌트:** 막혔을 때는 위의 예시를 다시 봐주세요.

# --hints--

`lastLetterOfLastName` 문자 `e`가 되어야 합니다.

```js
assert(lastLetterOfLastName === 'e');
```

당신은 `.length`를 사용해서, 마지막 문자를 얻어야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```

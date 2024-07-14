---
id: ab6137d4e35944e21037b769
title: '제목 케이스(Title Case: 주요 단어의 첫글자를 대문자로 쓰는 것)로 변환하기'
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

주어진 문자열을 반환하되, 각 단어의 첫 글자를 대문자로 만듭니다. 나머지 부분은 모두 소문자여야 합니다.

이 연습의 목적을 위해 `the`와 `of`와 같은 연결 단어도 대문자여야 합니다.

# --hints--

`titleCase("I'm a little tea pot")`은(는) 문자열을 반환해야 합니다.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")`은(는) 문자열 `I'm A Little Tea Pot`을 반환해야 합니다.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")`는 문자열 `Short And Stout`를 반환해야 합니다.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")`는 문자열 `Here Is My Handle Here Is My Spout`를 반환해야 합니다.

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# --solutions--

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```

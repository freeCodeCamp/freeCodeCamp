---
id: 5e6dd14797f5ce267c2f19d0
title: Послідовність "подивися-і-скажи"
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

The Look and say sequence is a recursively defined sequence of numbers.

Визначення послідовності

<ul><li>Take a decimal number</li>
<li><span>Подивіться</span>на число, візуально групуючи цифри, які послідовно повторюються.</li>
<li><span>Назвіть</span> число зліва направо, група за групою; скільки таких цифр можливо.</li></ul><span> Це число стає наступним у послідовності.</span>

Наприклад:

<ul><li>Починаючи з числа 1, у вас є <span>одна</span> одиниця, що утворює 11</li>
<li>Починаючи з числа 11, у вас є <span>дві</span> одиниці. Тобто 21</li>
<li>Починаючи з числа 21, у вас є <span>одна</span> двійка та <span>одна</span> одиниця. Тобто (12)(11), що утворює 1211</li>
<li>Починаючи з числа 1211, у вас є <span>одна</span> одиниця, <span>одна</span> двійка та <span>дві</span> одиниці. Тобто (11)(12)(21), що утворює 111221</li></ul>

# --instructions--

Напишіть функцію, яка приймає рядок в якості параметра, обробляє його, і повертає результат.

# --hints--

`lookAndSay` має бути функцією.

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` повинен повернути рядок.

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` повинен повертати `"11"`.

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` повинен повертати `"21"`.

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` повинен повертати `"1211"`.

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` повинен повертати `"111221"`.

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` повинен повертати `"13151412"`.

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```

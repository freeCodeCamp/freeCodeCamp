---
id: 5e6dd14797f5ce267c2f19d0
title: Послідовність «глянь і скажи»
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

Послідовність «глянь і скажи» — це рекурсивно визначена послідовність чисел.

Визначення послідовності

<ul><li>Візьміть десяткове число</li>
<li><span>Погляньте</span> на число, візуально групуючи послідовні цифри, які повторюються.</li>
<li><span>Скажіть</span> число зліва направо по групах. Тобто назвіть кількість повторюваних цифр та саму цифру.</li></ul><span> Це число стане наступним числом в послідовності.</span>

Наприклад:

<ul><li>Починаючи з числа 1, у вас є <span>одна</span> одиниця, що утворює 11</li>
<li>Починаючи з числа 11, у вас є <span>дві</span> одиниці. Тобто 21</li>
<li>Починаючи з числа 21, у вас є <span>одна</span> двійка та <span>одна</span> одиниця. Тобто (12)(11), що утворює 1211</li>
<li>Починаючи з числа 1211, у вас є <span>одна</span> одиниця, <span>одна</span> двійка та <span>дві</span> одиниці. Тобто (11)(12)(21), що утворює 111221</li></ul>

# --instructions--

Напишіть функцію, яка приймає рядок як параметр, обробляє його і повертає кінцевий рядок.

# --hints--

`lookAndSay` має бути функцією.

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` має повернути рядок.

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` має повернути `"11"`.

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` має повернути `"21"`.

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` має повернути `"1211"`.

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` має повернути `"111221"`.

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` має повернути `"13151412"`.

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

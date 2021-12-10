---
id: 5a23c84252665b21eecc7eb0
title: 'І перед Е (виняток: окрім після С)'
challengeType: 5
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

Вираз ["I перед E, але не після C"](https://en.wikipedia.org/wiki/I before E except after C) - це загальновідомий мнемонічний вираз, який допомагає при написанні англійський слів.

Використовуючи надані слова, перевірте, чи два підпункти фрази переконливі окремо:

<ol>
  <li>
    <i>"Я до E, коли не передував С".</i>
  </li>
  <li>
    <i>"E до того, коли перед мною передувала С".</i>
  </li>
</ol>

Вихідна фраза є правдоподібною, якщо обидві субфрази правдоподібні.

# --instructions--

Напишіть функцію, яка допускає слово і перевірте, чи воно підлягає правилу. Якщо слово підлягає правилу, то функція успішна, якщо ні - функція хибна.

# --hints--

`IBeforeExceptC` має бути функцією.

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` має повертати логічне значення.

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` має повертати `true`.

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` має повертати `false`.

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` має повертати `true`.

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` має повертати `true`.

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` має повертати `false`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` має повертати `false`.

```js
assert.equal(IBeforeExceptC('omniscient'), false);
```

# --seed--

## --seed-contents--

```js
function IBeforeExceptC(word) {

}
```

# --solutions--

```js
function IBeforeExceptC(word)
{
    if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
        return true;
    else if(word.indexOf("cei")!=-1)
        return true;
    return false;
}
```

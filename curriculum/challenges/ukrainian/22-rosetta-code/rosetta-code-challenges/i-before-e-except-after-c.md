---
id: 5a23c84252665b21eecc7eb0
title: Правило «I before E except after C»
challengeType: 1
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

**<a href="http://www.rosettacode.org/wiki/I_before_E_except_after_C" target="_blank" rel="noopener noreferrer nofollow">«I before E, except after C»</a>** — це загальне правило для вимови в англійській мові. Якщо ви не впевнені, як правильно писати слово: `ei` чи `ie`, то рима вказує на те, що правильний порядок `ie`. Але, якщо перед цими літерами стоїть `c`, то може бути `ei`.

Використовуючи надані слова, перевірте, чи два підпункти фрази правдиві:

<ol>
  <li>
    <i>«I before E when not preceded by C» (укр. «I перед E, але перед C»).</i>
  </li>
  <li>
    <i>«E before I when preceded by C» (укр. «E перед I, але після C»).</i>
  </li>
</ol>

Якщо обидва підпункти правдиві, то початкова фраза також правдива.

# --instructions--

Напишіть функцію, яка приймає слово і перевіряє, чи воно відповідає правилу. Функція має повернути true, якщо слово відповідає правилу, або false, якщо навпаки.

# --hints--

`IBeforeExceptC` має бути функцією.

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` має повернути булеве значення.

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` має повернути `true`.

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` має повернути `false`.

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` має повернути `true`.

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` має повернути `true`.

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` має повернути `false`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` має повернути `false`.

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

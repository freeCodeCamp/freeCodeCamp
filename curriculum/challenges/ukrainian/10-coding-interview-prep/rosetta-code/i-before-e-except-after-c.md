---
id: 5a23c84252665b21eecc7eb0
title: 'І перед Е (виняток: окрім після С)'
challengeType: 1
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

**<a href="http://www.rosettacode.org/wiki/I_before_E_except_after_C" target="_blank" rel="noopener noreferrer nofollow">"I before E, except after C"</a>** is a general rule for English language spelling. If one is unsure whether a word is spelled with the digraph `ei` or `ie`, the rhyme suggests that the correct order is `ie` unless the preceding letter is `c`, in which case it may be `ei`.

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

`IBeforeExceptC("receive")` має повертати булеве значення.

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

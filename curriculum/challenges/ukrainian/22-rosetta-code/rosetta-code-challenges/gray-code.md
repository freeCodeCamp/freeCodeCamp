---
id: 5a23c84252665b21eecc7e80
title: Код Грея
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

This is a useful encoding for reducing hardware data hazards with values that change rapidly and/or connect to slower hardware as inputs.

It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.

# --instructions--

Create a function to encode a number to and decode a number from Gray code. Функція повинна мати 2 параметри.

The first would be a boolean. The function should encode for true and decode for false. The second parameter would be the number to be encoded/decoded.

Поккажіть нормальні бінарні значення, значення коду Грея, і декодування даних коду Грея для всіх 5-бінарних чисел (0-31 включно, провідні нулі не є необхідними).

Існує багато можливих кодів Грея. Наступні кодування називаються "двійковим відображувальним кодом Грея."

Кодування (MSB є бітом 0, b є бінарним, g - кодом Грея):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

Або:

<pre>g = b xor (b логічно зміщено праворуч 1 раз)
</pre>

Декодування (MSB є бітом 0, b є бінарним, g - кодом Грея):

<pre>b[0] = g[0]<br>
для інших бітів:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` має бути функцією.

```js
assert(typeof gray == 'function');
```

`gray(true,177)` має повернути число.

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` має повернути `233`.

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` має повернути `381`.

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` має повернути `725`.

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` має повернути `177`.

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` має повернути `425`.

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` should return `870`.

```js
assert.equal(gray(false, 725), 870);
```

# --seed--

## --seed-contents--

```js
function gray(enc, number) {

}
```

# --solutions--

```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```

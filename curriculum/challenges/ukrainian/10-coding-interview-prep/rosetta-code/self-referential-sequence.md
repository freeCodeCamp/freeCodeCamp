---
id: 5eb3e4a21f462f409d656c73
title: Самовідносна послідовність
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

Існує декілька шляхів створення самовідносної послідовності. One very common one (the <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

Створені умови геометрично збільшуються у довжину і ніколи не сходяться.

Іншим шляхом створення самовідносної послідовності є узагальнення попередніх значень.

Порахуйте, скільки тут однакових цифр, тоді об'єднайте суму і цифру для кожної з відсортованих перелічених цифр. Зверніть увагу, що перші п'ять термінів такі ж, як і для попередньої послідовності.

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

Класифікуйте цифри від найбільшої до найменшої. Не враховуйте кількість цифр, які не з'являються у попередньому значенні.

Залежно від початкового значення, ряди згенеровані таким чином, що завжди або будуть наближені до стабільного значення, або до короткого циклічного шаблону. (Для наших цілей, збіг означає те, що елемент відповідає елементу, який раніше переглядали.) Послідовність, яка представлена з нульовим значенням, наближається до стабільного 1433223110 після 11 ітерацій. Початкове значення, яке збігається найшвидше – нуль. Воно стає стабільним після першого елементу. (Наступний елемент 22, який був розглянутий раніше)

# --instructions--

Створіть функцію, що приймає початкове значення як параметр, генерує самовідносну послідовність допоки вона сходиться, і повертає це як масив.

# --hints--

`selfReferential` має бути функцією.

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)`має повернути масив.

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)`повинен повернути`["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`.

```js
assert.deepEqual(selfReferential(40), [
  '40',
  '1410',
  '142110',
  '14123110',
  '1413124110',
  '2413125110',
  '151413224110',
  '152413225110',
  '251413324110',
  '152423224110',
  '152413423110'
]);
```

`selfReferential(132110)`повинен повернути`["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(132110), [
  '132110',
  '13123110',
  '23124110',
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(132211)`повинен повернути`["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`.

```js
assert.deepEqual(selfReferential(132211), [
  '132211',
  '132231',
  '232221',
  '134211',
  '14131231',
  '14231241',
  '24132231',
  '14233221'
]);
```

`selfReferential(1413223110)`повинен повернути`["1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)`повинен повернути`["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`.

```js
assert.deepEqual(selfReferential(251413126110), [
  '251413126110',
  '16151413225110',
  '16251413226110',
  '26151413325110',
  '16251423225110',
  '16251413424110',
  '16153413225110'
]);
```

# --seed--

## --seed-contents--

```js
function selfReferential(n) {

}
```

# --solutions--

```js
function selfReferential(n) {
  var descending,
    i,
    incr,
    j,
    max_i,
    max_len,
    max_seq,
    seq,
    sequence,
    indexOf =
      [].indexOf ||
      function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };

  sequence = function(n) {
    var c, cnt, cnts, d, digit, i, j, l, len, new_cnts, ref, s, seq;
    cnts = {};
    ref = n.toString();
    for (j = 0, len = ref.length; j < len; j++) {
      c = ref[j];
      d = parseInt(c);
      incr(cnts, d);
    }
    seq = [ref];
    while (true) {
      s = '';
      for (i = l = 9; l >= 0; i = --l) {
        if (cnts[i]) {
          s += '' + cnts[i] + i;
        }
      }
      if (indexOf.call(seq, s) >= 0) {
        break;
      }
      seq.push(s);
      new_cnts = {};
      for (digit in cnts) {
        cnt = cnts[digit];
        incr(new_cnts, cnt);
        incr(new_cnts, digit);
      }
      cnts = new_cnts;
    }
    return seq;
  };

  incr = function(h, k) {
    if (h[k] == null) {
      h[k] = 0;
    }
    return (h[k] += 1);
  };

  descending = function(n) {
    var tens;
    if (n < 10) {
      return true;
    }
    tens = n / 10;
    if (n % 10 > tens % 10) {
      return false;
    }
    return descending(tens);
  };

  return sequence(n);
}
```

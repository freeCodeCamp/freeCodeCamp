---
id: 5a23c84252665b21eecc7ec2
title: Подібність Джаро
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

Подібність Джаро — це міра схожості між двома рядками. Чим більший показник подібності Джаро для двох рядків, тим більше вони схожі. Оцінка нормується таким чином: `0` — схожість відсутня, а `1` — це точна схожість.

**Визначення**

Подібність Джаро \\( d_j \\) з двох вибраних рядків \\((\\1\\) і \\(s_2\\) є

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

Де:

<ul>
  <li>\(m\) є числом <i>відповідних символів</i>;</li>
  <li> \(t\) — це половина числа <i>транспозицій</i>.</li>
</ul>

Два символи з \\(s_1\\) та \\(s_2\\) відповідно, вважаються *співпадінням*, якщо вони однакові і розташовані не далі, ніж \\(\\left\\lfloor\\frac{\\max(|s_1|, s_2|)}{2}\\right\\rfloor-1\\).

Кожен символ \\(s_1\\) порівнюється з усіма відповідними символами у \\(s_2\\) . Кількість відповідних (але в різному порядку) символів, розділених на 2, визначає кількість * транспозицій *.

**Наприклад**

У рядках \\(s_1\\) *DWAYNE* та \\(s_2\\) *DUANE* виявили:

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

Ми знайшли: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\).

# --instructions--

Напишіть функцію а, у параметрах встановіть дві рядки. Це має бути схоже на подібність Джаро.

# --hints--

`jaro` має бути функцією.

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` має повернути число.

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` має повернути `0.9444444444444445`.

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` має повернути `0.7666666666666666`.

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` має повернути `0.8962962962962964`.

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` має повернути `0.888888888888889`.

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` має повернути `0.8333333333333334`.

```js
assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);
```

# --seed--

## --seed-contents--

```js
function jaro(s, t) {

}
```

# --solutions--

```js
function jaro(s, t) {
  var s_len = s.length;
  var t_len = t.length;

  if (s_len == 0 && t_len == 0) return 1;

  var match_distance = Math.max(s_len, t_len) / 2 - 1;

  var s_matches = new Array(s_len);
  var t_matches = new Array(t_len);

  var matches = 0;
  var transpositions = 0;

  for (var i = 0; i < s_len; i++) {
    var start = Math.max(0, i - match_distance);
    var end = Math.min(i + match_distance + 1, t_len);

    for (var j = start; j < end; j++) {
      if (t_matches[j]) continue;
      if (s.charAt(i) != t.charAt(j)) continue;
      s_matches[i] = true;
      t_matches[j] = true;
      matches++;
      break;
    }
  }

  if (matches == 0) return 0;

  var k = 0;
  for (var i = 0; i < s_len; i++) {
    if (!s_matches[i]) continue;
    while (!t_matches[k]) k++;
    if (s.charAt(i) != t.charAt(k)) transpositions++;
    k++;
  }

  return ((matches / s_len) +
    (matches / t_len) +
    ((matches - transpositions / 2.0) / matches)) / 3.0;
}
```

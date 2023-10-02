---
id: 5a23c84252665b21eecc7eaf
title: IBAN
challengeType: 1
forumTopicId: 302289
dashedName: iban
---

# --description--

The International Bank Account Number (IBAN) is an internationally agreed means of identifying bank accounts across national borders with a reduced risk of propagating transcription errors.

The <abbr title="International Bank Account Number">IBAN</abbr> consists of up to 34 alphanumeric characters:

<ul>
  <li>first the two-letter <abbr title="International Organization for Standardization">ISO</abbr> 3166-1 alpha-2 country code</li>
  <li>потім дві контрольні цифри, та</li>
  <li>нарешті, базовий номер банківського рахунку для конкретної країни (BBAN).</li>
</ul>

Контрольні цифри дають змогу перевірити правильність номеру банківського рахунку, щоб підтвердити його цілісність навіть перед поданням транзакції.

# --instructions--

Напишіть функцію, яка приймає рядок IBAN як параметр. Якщо вона допустима, поверніть true. Якщо ні, поверніть false.

# --hints--

`isValid` має бути функцією.

```js
assert(typeof isValid == 'function');
```

`isValid("GB82 WEST 1234 5698 7654 32")` має повернути логічне значення.

```js
assert(typeof isValid('GB82 WEST 1234 5698 7654 32') == 'boolean');
```

`isValid("GB82 WEST 1234 5698 7654 32")` має повернути `true`.

```js
assert.equal(isValid('GB82 WEST 1234 5698 7654 32'), true);
```

`isValid("GB82 WEST 1.34 5698 7654 32")` має повернути `false`.

```js
assert.equal(isValid('GB82 WEST 1.34 5698 7654 32'), false);
```

`isValid("GB82 WEST 1234 5698 7654 325")` має повернути `false`.

```js
assert.equal(isValid('GB82 WEST 1234 5698 7654 325'), false);
```

`isValid("GB82 TEST 1234 5698 7654 32")` має повернути `false`.

```js
assert.equal(isValid('GB82 TEST 1234 5698 7654 32'), false);
```

`isValid("SA03 8000 0000 6080 1016 7519")` має повернути `true`.

```js
assert.equal(isValid('SA03 8000 0000 6080 1016 7519'), true);
```

# --seed--

## --seed-contents--

```js
function isValid(iban) {

}
```

# --solutions--

```js
function isValid(iban) {
  var ibanLen = {
    NO:15, BE:16, DK:18, FI:18, FO:18, GL:18, NL:18, MK:19,
    SI:19, AT:20, BA:20, EE:20, KZ:20, LT:20, LU:20, CR:21,
    CH:21, HR:21, LI:21, LV:21, BG:22, BH:22, DE:22, GB:22,
    GE:22, IE:22, ME:22, RS:22, AE:23, GI:23, IL:23, AD:24,
    CZ:24, ES:24, MD:24, PK:24, RO:24, SA:24, SE:24, SK:24,
    VG:24, TN:24, PT:25, IS:26, TR:26, FR:27, GR:27, IT:27,
    MC:27, MR:27, SM:27, AL:28, AZ:28, CY:28, DO:28, GT:28,
    HU:28, LB:28, PL:28, BR:29, PS:29, KW:30, MU:30, MT:31
  }
    iban = __helpers.removeWhiteSpace(iban)
    if (!iban.match(/^[\dA-Z]+$/)) return false
    var len = iban.length
    if (len != ibanLen[iban.substring(0,2)]) return false
    iban = iban.substring(4) + iban.substring(0,4)
    for (var s='', i=0; i<len; i+=1) s+=parseInt(iban.charAt(i),36)
    for (var m=s.substring(0,15)%97, s=s.substring(15); s; s=s.substring(13)) m=(m+s.substring(0,13))%97
    return m == 1
}
```

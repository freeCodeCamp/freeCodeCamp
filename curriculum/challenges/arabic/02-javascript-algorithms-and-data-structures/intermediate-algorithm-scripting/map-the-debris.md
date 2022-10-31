---
id: af4afb223120f7348cdfc9fd
title: Map the Debris
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

وفقا لقانون كيبلر الثالث، فإن المدّة المدارية $T$ من كتلتين نقطتين تدور في مدار دائري أو إهليجي هي:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ هو المحور شبه الرئيس للمدار
- $μ = GM$ هو معلمة الجاذبية القياسية
- $G$ هو الثبات الجاذبي،
- $M$ هو كتلة الجسم الأكثر كثافة.

أنشئ قائمة جديدة تحوِّل الارتفاع المتوسط للعناصر إلى فترات مدارية (بالثواني).

سوف تحتوي القائمة على كائنات بالتنسيق الآتي `{name: 'name', avgAlt: avgAlt}`.

وينبغي تقريب القيم إلى أقرب عدد صحيح. الجسم الموجود في المدار هو الأرض.

نصف قطر الأرض هو 6367.4447 كيلومتر، و GM الأرض هو 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

يجب أن ينتج `orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` قائمة `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

يجب أن ينتج `orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` قائمة `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

```js
assert.deepEqual(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ]),
  [
    { name: 'iss', orbitalPeriod: 5557 },
    { name: 'hubble', orbitalPeriod: 5734 },
    { name: 'moon', orbitalPeriod: 2377399 }
  ]
);
```

# --seed--

## --seed-contents--

```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

# --solutions--

```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}
```

---
id: 5900f37f1000cf542c50fe92
title: 问题19：计算星期日
challengeType: 5
videoUrl: ''
dashedName: problem-19-counting-sundays
---

# --description--

您将获得以下信息，但您可能更愿意为自己做一些研究。

-   1900年1月1日是星期一。
-   九月是三十天  
    四月，六月和十一月。  
    其余的都有三十一个，  
    仅拯救二月，  
    其中有二十八，风雨无阻。  
    在闰年，二十九岁。
-   闰年发生在任何一年，可被4整除，但除非可被400整除，否则不会在一个世纪上。
-   在二十世纪的第一个月（1901年1月1日至2000年12月31日），有多少个星期日下降？

# --hints--

`countingSundays(1943, 1946)`应该返回6。

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)`应该返回9。

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)`应该返回171。

```js
assert.strictEqual(countingSundays(1901, 2000), 171);
```

# --seed--

## --seed-contents--

```js
function countingSundays(firstYear, lastYear) {

  return true;
}

countingSundays(1943, 1946);
```

# --solutions--

```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```

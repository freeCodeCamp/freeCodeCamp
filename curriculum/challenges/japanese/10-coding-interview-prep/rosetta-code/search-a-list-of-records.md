---
id: 5eb3e497b8d6d7f63c5517ea
title: レコードリストを検索する
challengeType: 1
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

レコードはエンティティを記述する複数の属性で構成されます。 各属性には名前と値があります。 たとえば、ある人は値が 25 である属性 `age` を持つなどです。 レコードのリストで重要な操作は、特定の属性値を持つレコードを見つけることです。

# --instructions--

パラメータとして文字列を取る関数を記述してください。 この関数は、`name` 属性の値が指定された文字列と一致する `list`内の項目のインデックスを返す必要があります。

# --hints--

`searchCity` は関数とします。

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` は数値を返す必要があります。

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` は `6` を返す必要があります。

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` は `9` を返す必要があります。

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` は `1` を返す必要があります。

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` は `4` を返す必要があります。

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` は `0` を返す必要があります。

```js
assert.equal(searchCity('Lagos'), 0);
```

# --seed--

## --seed-contents--

```js
function searchCity(name) {

}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

# --solutions--

```js
function searchCity(name) {
  return list.findIndex(item => item.name === name);
}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

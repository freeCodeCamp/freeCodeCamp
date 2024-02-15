---
id: 5ea28156e79528a9ab248f27
title: Тест Луна для валідації кредитних карток
challengeType: 1
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

Тест Луна використовується деякими компаніями кредитних карток, щоб відрізнити дійсні номери кредитних карток від випадкового набору цифр.

Ці компанії використовують для своїх кредитних карт такі числа, які можна перевірити за допомогою тесту Луна та які проходять наступний тест:

<ol>
  <li> Розставте цифри в зворотному порядку.</li>
  <li> Візьміть першу, третю та інші непарні цифри зі зворотного порядку і додайте їх, щоб утворити часткову суму s1</li>
  <li> Візьміть другу, четверту та інші парні цифри зі зворотного порядку:</li>
    <ol>
      <li>Помножте кожну цифру на два та додайте цифри отриманих чисел, якщо відповідь більша за дев’ять, щоб утворити часткові суми парних чисел.</li>
      <li>Додайте часткові суми парних цифр, щоб утворити s2.</li>
    </ol>
  <li>Якщо сума s1 + s2 закінчується нулем, то початкове число є форматом дійсного номера кредитної картки, перевіреного за допомогою тесту Луна.</li>
</ol>

Наприклад, якщо числом для перевірки є 49927398716:

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

# --instructions--

Напишіть функцію, яка дозволить перевірити номер картки за допомогою тесту Луна. Поверніть true, якщо це дійсне число. Якщо ні — поверніть false.

# --hints--

`luhnTest` має бути функцією.

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` має повернути булеве значення.

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` має повернути `true`.

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` має повернути `false`.

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` має повернути `true`.

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` має повернути `false`.

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` має повернути `false`.

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` має повернути `true`.

```js
assert.equal(luhnTest('1234567812345670'), true);
```

# --seed--

## --seed-contents--

```js
function luhnTest(str) {

}
```

# --solutions--

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```

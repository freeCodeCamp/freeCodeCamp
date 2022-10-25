---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

من الانماط الشائعة أثناء العمل مع ال arrays هو عندما تريد إزالة العناصر والحفاظ على بقية الـ array. يقدم JavaScript طريقة `splice` للقيام بذلك، والتي تأخذ arguments لفهرس مكان بدء إزالة العناصر، ثم عدد العناصر المراد إزالتها. إذا لم يتم تقديم الـ argument الثانية، فالافتراضي هو إزالة العناصر حتي النهاية. ومع ذلك، فإن طريقة `splice` تغير الـ array الأصلية التي يتم استدعاؤها عليها. إليك مثال:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

هنا `splice` ترجع السلسلة `London` وتحذفها من cities array. `cities` سيكون لها القيمة `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

وكما رأينا في التحدي الأخير، فإن طريقة `slice` لا تغير الـ array الأصلية، ولكن ترجع واحدة جديدة يمكن حفظها في متغير. تذكر أن طريقة `slice` تأخذ وسيطين (arguments) للفهارس لبدء الـ slice وإنهائه (النهاية غير مشمولة) ، وإرجاع هذه العناصر في array جديدة. ويساعد استخدام طريقة `slice` بدلاً من `splice` على تجنب أي تأثيرات جانبية تغير في الـ array.

# --instructions--

قم بإعادة كتابة الدالة `nonMutatingSplice` باستخدام `slice` بدلاً من `splice`. يجب أن يقصر طول مصفوفة `cities` المقدمة على 3، ويعيد array جديدة تحتوي على العناصر الثلاثة الأولى فقط.

لا تقم بتغيير ال array الأصلية المقدمة للـ function.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `slice`.

```js
assert(code.match(/\.slice/g));
```

يجب ألا يستخدم الكود الخاص بك دالة `splice`.

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

يجب ألا تتغير مصفوفة `inputCities`.

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` يجب أن ترجع `["Chicago", "Delhi", "Islamabad"]`.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```

---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
videoUrl: ''
localeTitle: فهم البرمجة الوظيفية المصطلحات
---

## Description
<section id="description"> كان فريق لجنة الاتصالات الفيدرالية قد تأرجح المزاج ويريد الآن نوعين من الشاي: الشاي الأخضر والشاي الأسود. حقائق عامة: تقلبات مزاج العميل شائعة جدًا. باستخدام هذه المعلومات ، سنحتاج إلى إعادة النظر في وظيفة <code>getTea</code> من التحدي الأخير للتعامل مع طلبات الشاي المختلفة. يمكننا تعديل <code>getTea</code> لقبول وظيفة كمعلمة لتكون قادرة على تغيير نوع الشاي الذي تقوم بإعداده. وهذا يجعل <code>getTea</code> أكثر مرونة ، ويعطي للمبرمج مزيدًا من التحكم عند تغيير طلبات العميل. لكن أولاً ، دعونا نغطي بعض المصطلحات الفنية: <code>Callbacks</code> هي الوظائف التي يتم تمريرها أو تمريرها إلى وظيفة أخرى لتحديد طلب هذه الوظيفة. ربما تكون قد شاهدتهم مروراً بطرق أخرى ، على سبيل المثال في <code>filter</code> ، تخبر وظيفة معاودة الاتصال JavaScript عن كيفية تصفية مصفوفة. تدعى الدالات التي يمكن تعيينها لمتغير ، يتم تمريرها إلى دالة أخرى ، أو يتم إرجاعها من دالة أخرى تمامًا مثل أي قيمة عادية أخرى ، وظائف <code>first class</code> . في JavaScript ، تعد جميع الوظائف من وظائف <code>first class</code> . تسمى الدالات التي تأخذ دالة كوسيطة ، أو ترجع دالة كقيمة إرجاع ، وظائف <code>higher order</code> . عندما يتم تمرير الوظائف إلى وظيفة أخرى أو يتم إرجاعها من وظيفة أخرى ، فإن تلك الوظائف التي يتم تمريرها أو إعادتها يمكن أن تسمى <code>lambda</code> . </section>

## Instructions
<section id="instructions"> إعداد 27 أكواب من الشاي الأخضر و 13 أكواب من الشاي الأسود وتخزينها في <code>tea4GreenTeamFCC</code> و <code>tea4BlackTeamFCC</code> المتغيرات، على التوالي. لاحظ أن وظيفة <code>getTea</code> قد تم تعديلها بحيث تأخذ الآن وظيفة كالوسيطة الأولى. ملاحظة: يتم توفير البيانات (عدد أكواب الشاي) كوسيطة أخيرة. سنناقش هذا أكثر في الدروس اللاحقة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>tea4GreenTeamFCC</code> المتغير <code>tea4GreenTeamFCC</code> على 27 كوب شاي أخضر للفريق.
    testString: 'assert(tea4GreenTeamFCC.length === 27, "The <code>tea4GreenTeamFCC</code> variable should hold 27 cups of green tea for the team.");'
  - text: يجب أن يحتفظ المتغير <code>tea4GreenTeamFCC</code> من الشاي الأخضر.
    testString: 'assert(tea4GreenTeamFCC[0] === "greenTea", "The <code>tea4GreenTeamFCC</code> variable should hold cups of green tea.");'
  - text: يجب أن يحتفظ المتغير <code>tea4BlackTeamFCC</code> 13 كوب من الشاي الأسود.
    testString: 'assert(tea4BlackTeamFCC.length === 13, "The <code>tea4BlackTeamFCC</code> variable should hold 13 cups of black tea.");'
  - text: يجب أن يحتفظ المتغير <code>tea4BlackTeamFCC</code> الشاي الأسود.
    testString: 'assert(tea4BlackTeamFCC[0] === "blackTea", "The <code>tea4BlackTeamFCC</code> variable should hold cups of black tea.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = null; // :(
const tea4BlackTeamFCC = null; // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

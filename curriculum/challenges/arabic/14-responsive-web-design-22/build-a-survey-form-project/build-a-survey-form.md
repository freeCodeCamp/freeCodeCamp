---
id: 587d78af367417b2b2512b03
title: أنشئ نموذج استطلاع رأي
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objective:** أنشئ تطبيق يشبه وظيفيا إلي <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>

**المطلبيات:**

1. يجب أن يكون لديك عنوان صفحة في عنصر `h1` مع `id` بقيمة `title`
1. يجب أن يكون لديك شرح قصير في عنصر `p` مع `id` بقيمة `description`
1. يجب أن يكون لديك عنصر `form` مع `id` بقيمة `survey-form`
1. داخل عنصر النموذج، أنت **مطلوب** منك إدخال اسمك في `input` الذي يحتوي على `id` بقيمة `name` و `type` بقيمة `text`
1. داخل عنصر النموذج، أنت **مطلوب** منك إدخال بريدك الإلكتروني في `input` الذي يحتوي على `id` بقيمة `email`
1. إذا قمت بإدخال بريد إلكتروني غير منسق بشكل صحيح، سترى خطأ HTML5 validation error
1. داخل النموذج، يمكنك إدخال رقم في حقل `input` الذي يحتوي على معرف `id` بقيمة `number`
1. لا ينبغي أن يقبل input رقم غير حقيقي، إما عن طريق منعك من الكتابة عليها أو عن طريق عرض خطأ في التحقق من صحة HTML5 (اعتمادا على متصفحك).
1. إذا قمت بإدخال أرقام خارج نطاق حقل إدخال الرقم، التي تم تعريفها بواسطة سمات `min` و `max`، سترى خطأ HTML5 validation error
1. بالنسبة لحقول الاسم والبريد الإلكتروني وإدخال الأرقام ، يمكنك رؤية عناصر `label` المقابلة في النموذج، التي تصف الغرض من كل حقل بالـ id's التالية: `id="name-label"` و `id="email-label"` و `id="number-label"`
1. بالنسبة لحقول الاسم والبريد الإلكتروني والرقم، يمكنك أن ترى الـ placeholder text الذي يعطي وصفا أو تعليمات لكل حقل
1. داخل عنصر النموذج، يجب أن يكون لديك عنصر `select` للـ dropdown مع `id` بقيمة `dropdown` وخيارين على الأقل للاختيار من بينها
1. داخل عنصر النموذج، يمكنك تحديد خيار من مجموعة من زرين راديو (radio buttons) على الأقل تم تجميعها باستخدام السمة `name`
1. داخل عنصر النموذج، يمكنك تحديد عدة حقول من سلسلة من مربعات الاختيار (checkboxes)، يجب أن يكون لكل منها سمة `value`
1. في داخل عنصر النموذج، يتم تقديم `textarea` لاي تعليقات إضافية
1. في داخل عنصر النموذج، يتم تقديم زر مع `id` بقيمة `submit` لإرسال (submit) جميع المدخلات (inputs)

أكمل المطلبيات و قم باجتياز جميع الاختبارات أدناه لإكمال هذا المشروع. أعطيها أسلوبك الشخصي الخاص. برمجة سعيدة!

**ملاحظة:** تأكد من إضافة `<link rel="stylesheet" href="styles.css">` في HTML الخاص بك لربط ورقة الأنماط الخاصة بك وتطبيق CSS

# --hints--

يجب أن يكون لديك عنصر `h1` مع `id` بقيمة `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

يجب ألا يكون `#title` فارغاً.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

يجب أن يكون لديك عنصر `p` مع `id` بقيمة `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

يجب ألا يكون `#description` فارغاً.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

يجب أن يكون لديك عنصر `form` مع `id` بقيمة `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

يجب أن يكون لديك عنصر `input` مع `id` بقيمة `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

`#name` الخاص بك يجب أن يكون له `type` بقيمة `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

يجب أن يتطلب `#name` الإدخال.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

يجب أن يكون `#name` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

يجب أن يكون لديك عنصر `input` مع `id` بقيمة `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

`#email` الخاص بك يجب أن يكون له `type` بقيمة `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

يجب أن يتطلب `#email` الإدخال.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

يجب أن يكون `#email` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

يجب أن يكون لديك عنصر `input` مع `id` بقيمة `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

يجب أن يكون `#number` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

`#number` الخاص بك يجب أن يكون له `type` بقيمة `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

يجب أن يحتوي `#number` على سمة `min` بقيمة رقمية.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

يجب أن يحتوي `#number` على سمة `max` بقيمة رقمية.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

يجب أن يكون لديك عنصر `label` مع `id` بقيمة `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

يجب أن يكون لديك عنصر `label` مع `id` بقيمة `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

يجب أن يكون لديك عنصر `label` مع `id` بقيمة `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

يجب أن يحتوي `#name-label` على نص يصف المدخلات.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

يجب أن يحتوي `#email-label` على نص يصف المدخلات.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

يجب أن يحتوي `#number-label` على نص يصف المدخلات.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

يجب أن يكون `#name-label` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

يجب أن يكون `#email-label` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

يجب أن يكون `#number-label` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

يجب أن يكون للـ `#name` سمة وقيمة للـ `placeholder`.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

يجب أن يكون للـ `#email` سمة وقيمة للـ `placeholder`.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

يجب أن يكون للـ `#number` سمة وقيمة للـ `placeholder`.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

يجب أن يكون لديك الحقل `select` مع `id` بقيمة `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

يجب أن يحتوي `#dropdown` على عنصرين `option` قابلين للتحديد (غير معطلين).

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

يجب أن يكون `#dropdown` الخاص بك فرع من `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

يجب أن يكون لديك على الأقل عنصرين `input` من `type` بقيمة `radio` (أزرار الراديو) (radio buttons).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

يجب أن يكون لديك على الأقل زرين راديو تابعين لـ `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

جميع أزرار الراديو الخاصة بك يجب أن يكون لها سمة وقيمة لـ `value`.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

جميع أزرار الراديو الخاصة بك يجب أن يكون لها سمة وقيمة لـ`name`.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

لكل مجموعة أزرار الراديو يجب أن يكون هناك زرين على الأقل.

```js
const radioButtons = document.querySelectorAll('input[type="radio"]');
const groups = {}

if (radioButtons) {
  radioButtons.forEach(el => {
    if (!groups[el.name]) groups[el.name] = []
    groups[el.name].push(el)
  })
}

const groupKeys = Object.keys(groups)

groupKeys.forEach(key => {
  if (groups[key].length < 2) assert(false)
})

assert(groupKeys.length > 0)
```

يجب أن يكون لديك على الأقل عنصرين `input` مع `type` بقيمة `checkbox` (خانات الاختيار) تابعة لـ `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

جميع خانات الاختيار الخاصة بك داخل `#survey-form` يجب أن تحتوي على سمة وقيمة لـ `value`.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

يجب أن يكون لديك عنصر `textarea` واحد على الأقل تابع لـ `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

يجب أن يكون لديك عنصر `input` أو `button` مع `id` بقيمة `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

`#submit` الخاص بك يجب أن يكون له `type` بقيمة `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

`#submit` الخاص بك يجب أن يكون تابعا لـ `#survey-form`.

```js
const el = document.querySelector('#survey-form #submit')
assert(!!el)
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <title>Survey Form</title>
  </head>
  <body>
    <h1>Survey Form</h1>
    <p>The card below was built as a sample survey form for freeCodeCamp.</p>
    <main id="main">
      <h1 id="title">Join the Togepi Fan Club!</h1>
      <p id="description">
        Enter your information here to receive updates about club activities,
        our monthly newsletter, and other email communications.
      </p>
      <form id="survey-form" action="#">
        <label for="name" id="name-label"
          ><p>Name:</p>
          <input type="text" id="name" placeholder="e.g. John Smith" required />
        </label>
        <label for="email" id="email-label"
          ><p>Email:</p>
          <input
            type="email"
            id="email"
            placeholder="e.g. john.smith@email.com"
            required
          />
        </label>
        <label for="age" id="number-label"
          ><p>Age<em>(optional)</em>:</p>
          <input
            type="number"
            id="number"
            placeholder="e.g. 19"
            min="18"
            max="99"
          />
        </label>
        <label for="interest" id="interest-label"
          ><p>What are you most interested in?</p>
          <select id="dropdown">
            <option selected disabled hidden></option>
            <option id="battles">Battling</option>
            <option id="breeding">Breeding</option>
            <option id="catching">Completing my Pokedex</option>
            <option id="exploring">Exploring new regions</option>
          </select>
        </label>
        <p>Who is your favourite Pokemon?</p>
        <label for="togepi">
          <input
            id="togepi"
            type="radio"
            name="favorite"
            value="togepi"
          />Togepi!
        </label>
        <label for="pikachu">
          <input
            id="pikachu"
            type="radio"
            name="favorite"
            value="pikachu"
          />Pikachu
        </label>
        <label for="other">
          <input id="other" type="radio" name="favorite" value="other" />Other
        </label>
        <p>Which communications do you want to receive?</p>
        <label for="newsletter">
          <input
            id="newsletter"
            type="checkbox"
            name="communications"
            value="newsletter"
          />Newsletter
        </label>
        <label for="events">
          <input
            id="events"
            type="checkbox"
            name="communications"
            value="events"
          />Event updates
        </label>
        <label for="updates">
          <input
            id="updates"
            type="checkbox"
            name="communications"
            value="updates"
          />Club updates
        </label>
        <p>Any other information you would like to share?</p>
        <textarea id="additional-information" rows="4" cols="50">
You can provide comments, suggestions, or feedback here.</textarea
        >
        <p>
          <em
            >Please note: This form is a proof of concept. Submitting the form
            will not actually transmit your data.</em
          >
        </p>
        <button type="Submit" id="submit">Submit</button>
      </form>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
main {
  text-align: center;
  background-color: #92869c;
  background-blend-mode: lighten;
  max-width: 500px;
  margin: 20px auto;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
  color: black;
}
body {
  text-align: center;
  background: #3a3240;
  color: white;
}
input, textarea, select, button {
  background: #3a3240;
  color: white;
}
a {
  color: white;
}
```

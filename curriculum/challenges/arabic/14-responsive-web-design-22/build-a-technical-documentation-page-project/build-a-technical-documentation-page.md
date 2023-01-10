---
id: 587d78b0367417b2b2512b05
title: أنشئ صفحة التوثيق التقنية
challengeType: 14
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**Objective:** أنشئ تطبيق يشبه وظيفيا إلى <a href="https://technical-documentation-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://technical-documentation-page.freecodecamp.rocks</a>

**المتطلبات:**

1. يمكنك مشاهدة عنصر `main` مع `id="main-doc"`، الذي يحتوي على المحتوى الرئيسي للصفحة (الوثائق التقنية)
1. ضمن عنصر `#main-doc` ، يمكنك رؤية عدة عناصر `section`، كل منها مع class بقيمة `main-section`. وينبغي أن يكون هناك خمسة على الأقل
1. العنصر الأول في كل `.main-section` يجب أن يكون عنصر `header`، والذي يحتوي على نص يصف موضوع ذلك القسم.
1. كل عنصر من عناصر `section` مع class بقيمة `main-section` يجب أن يكون لديه `id` يتوافق مع نص كل `header` موجود داخله. يجب استبدال أي مسافات بتسطير سفلي (underscore) (على سبيل المثال القسم الذي يحتوي على header "JavaScript and Java" يجب أن يكون لديه `id="JavaScript_and_Java"`)
1. عناصر `.main-section` يجب أن تحتوي على الأقل على عشرة عناصر `p` إجمالية (ليس لكل واحد)
1. يجب أن تحتوي عناصر `.main-section` على خمسة عناصر `code` كلية (ليس لكل منها)
1. يجب أن تحتوي عناصر `.main-section` على خمسة عناصر `li` كلية (ليس لكل منها)
1. يمكنك رؤية عنصر `nav` مع `id="navbar"`
1. يجب أن يحتوي عنصر navbar على عنصر `header` يحتوي على نص يصف موضوع الوثائق التقنية
1. بالإضافة إلى ذلك، يجب أن يحتوي navbar على عناصر للروابط (`a`) مع class بقيمة `nav-link`. يجب أن يكون هناك واحد لكل عنصر `main-section`
1. عنصر `header` في `#navbar` يجب أن يأتي قبل أي رابط (`a`) في الـ navbar
1. يجب أن يحتوي كل عنصر من class بقيمة `nav-link` على نص يطابق نص `header` داخل كل `section` (على سبيل المثال ، إذا كان لديك "Hello world" section/header، يجب أن يحتوي الـ navbar الخاص بك على عنصر يحتوي على النص" Hello world ")
1. عند النقر على عنصر navbar، يجب أن تنتقل الصفحة إلى القسم المقابل من عنصر `#main-doc` (على سبيل المثال. إذا قمت بالنقر على عنصر `.nav-link` الذي يحتوي على النص "Hello world"، الصفحة تنتقل إلى عنصر `section` بهذا الـ id ، وتحتوي على الـ header المقابل)
1. على الأجهزة العادية الحجم (الحواسيب المحمولة، الحواسيب المكتبية)، يجب أن يظهر العنصر `id="navbar"` على الجانب الأيسر من الشاشة ويجب أن يكون دائماً مرئيًا للمستخدم
1. الوثائق التقنية الخاصة بك يجب أن تستخدم media query واحد على الأقل

أكمل المطلبيات و قم باجتياز جميع الاختبارات أدناه لإكمال هذا المشروع. أعطيها أسلوبك الشخصي الخاص. برمجة سعيدة!

**ملاحظة:** تأكد من إضافة `<link rel="stylesheet" href="styles.css">` في HTML الخاص بك لربط ورقة الأنماط الخاصة بك وتطبيق CSS

# --hints--

يجب أن يكون لديك عنصر `main` مع `id` بقيمة `main-doc`.

```js
const el = document.getElementById('main-doc')
assert(!!el)
```

يجب أن يكون لديك على الأقل خمسة عناصر `section` مع class بقيمة `main-section`.

```js
const els = document.querySelectorAll('#main-doc section')
assert(els.length >= 5)
```

جميع عناصر `.main-section` يجب أن تكون عناصر `section`.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if (el.tagName !== 'SECTION') assert(false)
})
assert(els.length > 0)
```

يجب أن يكون لديك على الأقل خمسة عناصر `.main-section` تابعة لـ `#main-doc`.

```js
const els = document.querySelectorAll('#main-doc .main-section')
assert(els.length >= 5)
```

أول طفل (child) لكل `.main-section` يجب أن يكون عنصر `header`.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if(el.firstElementChild?.tagName !== 'HEADER') assert(false)
})
assert(els.length > 0)
```

يجب ألا يكون أي عنصر من عناصر `header` فارغاً.

```js
const els = document.querySelectorAll('header')
els.forEach(el => {
  if (el.innerText?.length <= 0) assert(false)
})
assert(els.length > 0)
```

جميع عناصر `.main-section` يجب أن يكون لديها `id`.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if (!el.id || el.id === '') assert(false)
})
assert(els.length > 0)
```

يجب أن يحتوي كل `.main-section` على `id` يطابق نص طفله الأول ، مع استبدال أي مسافات في نص الطفل بالشرطات السفلية (`_`) للـ id's.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  const text = el.firstElementChild?.innerText?.replaceAll(' ', '_')
  if (el.id?.toUpperCase() !== text?.toUpperCase()) assert(false)
})
assert(els.length > 0)
```

يجب أن يكون لديك على الأقل 10 عناصر `p` (إجمالي) داخل عناصر `.main-section`.

```js
const els = document.querySelectorAll('.main-section p')
assert(els.length >= 10)
```

يجب أن يكون لديك على الأقل خمسة عناصر `code` تابعة لـ `.main-section`.

```js
const els = document.querySelectorAll('.main-section code')
assert(els.length >= 5)
```

يجب أن يكون لديك على الأقل خمسة عناصر `li` تابعة لـ `.main-section`.

```js
const els = document.querySelectorAll('.main-section li')
assert(els.length >= 5)
```

يجب أن يكون لديك عنصر `nav` مع `id` بقيمة `navbar`.

```js
const el = document.getElementById('navbar')
assert(!!el && el.tagName === 'NAV')
```

`#navbar` يجب أن يحتوي على عنصر واحد `header` داخله.

```js
const els = document.querySelectorAll('#navbar header')
assert(els.length === 1)
```

يجب أن يكون لديك عنصر `a` واحد على الأقل مع class بقيمة `nav-link`.

```js
const els = document.querySelectorAll('a.nav-link')
assert(els.length >= 1)
```

جميع عناصر `.nav-link` يجب أن تكون روابط (`a`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (el.tagName !== 'A') assert(false)
})
assert(els.length > 0)
```

جميع عناصر `.nav-link` يجب أن تكون في `#navbar`.

```js
const els1 = document.querySelectorAll('.nav-link')
const els2 = document.querySelectorAll('#navbar .nav-link')
assert(els2.length > 0 && els1.length === els2.length)
```

يجب أن يكون لديك نفس العدد من عناصر `.nav-link` و `.main-section`.

```js
const els1 = document.querySelectorAll('.main-section')
const els2 = document.querySelectorAll('.nav-link')
assert(els1.length > 0 && els2.length > 0 && els1.length === els2.length)
```

عنصر `header` في `#navbar` يجب أن يأتي قبل أي رابط (`a`) أيضا في `#navbar`.

```js
const navLinks = document.querySelectorAll('#navbar a.nav-link');
const header = document.querySelector('#navbar header');
navLinks.forEach((navLink) => {
  if (
    (
      header.compareDocumentPosition(navLink) &
      Node.DOCUMENT_POSITION_PRECEDING
    ) 
  ) assert(false)
});
assert(!!header)
```

يجب أن يحتوي كل `.nav-link` على نص يتوافق مع نص `header` في الـ `section` ذي الصلة (على سبيل المثال ، إذا كان لديك "Hello world" section/header، يجب أن يحتوي `#navbar` على `.nav-link` الذي يحتوي على النص "Hello world").

```js
const headerText = Array.from(document.querySelectorAll('.main-section')).map(el =>
  el.firstElementChild?.innerText?.trim().toUpperCase()
)
const linkText = Array.from(document.querySelectorAll('.nav-link')).map(el =>
  el.innerText?.trim().toUpperCase()
)
const remainder = headerText.filter(str => linkText.indexOf(str) === -1)
assert(headerText.length > 0 && headerText.length > 0 && remainder.length === 0)
```

يجب أن يكون لكل `.nav-link` سمة `href` التي تربط مع `.main-section` (على سبيل المثال، إذا نقرت على العنصر `.nav-link` الذي يحتوي على النص "Hello world"، تنتقل الصفحة إلى عنصر `section` بهذا المعرف (id)).

```js
const hrefValues = Array.from(document.querySelectorAll('.nav-link')).map(el => el.getAttribute('href'))
const mainSectionIDs = Array.from(document.querySelectorAll('.main-section')).map(el => el.id)
const missingHrefValues = mainSectionIDs.filter(str => hrefValues.indexOf('#' + str) === -1)
assert(hrefValues.length > 0 && mainSectionIDs.length > 0 && missingHrefValues.length === 0)
```

`#navbar` الخاص بك يجب أن يكون دائماً على الحافة اليسرى للنافذة.

```js
const el = document.getElementById('navbar')
const left1 = el?.offsetLeft
const left2 = el?.offsetLeft
assert(!!el && left1 >= -15 && left1 <= 15 && left2 >= -15 && left2 <= 15)
```

مشروع التوثيق التقني الخاص بك يجب أن يستخدم media query واحد على الأقل.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
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
    <title>Technical Documentation Page</title>
  </head>
  <body>
    <nav id="navbar">
      <header><br />Algebraic Concepts</header>
      <hr />
      <a href="#introduction" class="nav-link">Introduction</a><br />
      <hr />
      <a href="#definitions" class="nav-link">Definitions</a><br />
      <hr />
      <a href="#examples" class="nav-link">Examples</a><br />
      <hr />
      <a href="#solving_equations" class="nav-link">Solving Equations</a><br />
      <hr />
      <a href="#solving_equations_ii" class="nav-link">Solving Equations II</a
      ><br />
      <hr />
      <a href="#solving_equations_iii" class="nav-link">Solving Equations III</a
      ><br />
      <hr />
      <a href="#system_of_equations" class="nav-link">System of Equations</a
      ><br />
      <hr />
      <a href="#try_it_yourself!" class="nav-link">Try it Yourself!</a><br />
      <hr />
      <a href="#more_information" class="nav-link">More Information</a><br />
    </nav>
    <main id="main-doc">
      <section class="main-section" id="introduction">
        <header>Introduction</header>
        <p>
          Welcome to a basic introduction of algebra. In this tutorial, we will
          review some of the more common algebraic concepts.
        </p>
      </section>
      <section class="main-section" id="definitions">
        <header>Definitions</header>
        <p>
          To start with, let's define some of the more common terms used in
          algebra:
        </p>
        <ul>
          <li>
            <b>Variable:</b> A variable is an unknown value, usually represented
            by a letter.
          </li>
          <li>
            <b>Expression:</b> Essentially a mathematical object. For the
            purpose of this tutorial, an expression is one part of an equation.
          </li>
          <li>
            <b>Equation:</b> An equation is a mathematical argument in which two
            expressions result in the same value.
          </li>
        </ul>
      </section>
      <section class="main-section" id="examples">
        <header>Examples</header>
        <p>
          Sometimes it is easier to understand the definitions when you have a
          physical example to look at. Here is an example of the above terms.<br /><br />
          <code>x + 5 = 12 </code><br /><br />
          In this above example, we have:
        </p>
        <ul>
          <li><b>Variable:</b> The variable in the example is "x".</li>
          <li>
            <b>Expression:</b> There are two expressions in this example. They
            are "x+5" and "12".
          </li>
          <li>
            <b>Equation:</b> The entire example, "x+5=12", is an equation.
          </li>
        </ul>
      </section>
      <section class="main-section" id="solving_equations">
        <header>Solving Equations</header>
        <p>
          The primary use for algebra is to determine an unknown value, the
          "variable", with the information provided. Continuing to use our
          example from above, we can find the value of the variable "x".<br /><br />
          <code>x + 5 = 12 </code><br /><br />
          In an equation, both sides result in the same value. So you can
          manipulate the two expressions however you need, as long as you
          perform the same operation (or change) to each side. You do this
          because the goal when solving an equation is to
          <b
            >get the variable into its own expression, or by itself on one side
            of the = sign.</b
          ><br />For this example, we want to remove the "+5" so the "x" is
          alone. To do this, we can <em>subtract 5</em>, because subtraction is
          the opposite operation to addition. But remember, we have to perform
          the same operation to both sides of the equation. Now our equation
          looks like this.<br /><br />
          <code>x + 5 - 5 = 12 - 5</code><br /><br />
          The equation looks like a mess right now, because we haven't completed
          the operations. We can <b>simplify</b> this equation to make it easier
          to read by performing the operations "5-5" and "12-5". The result
          is:<br /><br />
          <code>x = 7</code><br /><br />
          We now have our solution to this equation!
        </p>
      </section>
      <section class="main-section" id="solving_equations_ii">
        <header>Solving Equations II</header>
        <p>
          Let us look at a slightly more challenging equation.<br /><br />
          <code>3x + 4 = 13</code><br /><br />
          Again we can start with subtraction. In this case, we want to subtract
          4 from each side of the equation. We will also go ahead and simplify
          with each step. So now we have:<br /><br />
          <code>3x = 9</code><br /><br />
          "3x" translates to "3*x", where the "*" symbol indicates
          multiplication. We use the "*" to avoid confusion, as the "x" is now a
          variable instead of a multiplication symbol. The opposite operation
          for multiplication is division, so we need to
          <b>divide each expression by 3</b>.<br /><br />
          <code>x = 3</code><br /><br />
          And now we have our solution!
        </p>
      </section>
      <section class="main-section" id="solving_equations_iii">
        <header>Solving Equations III</header>
        <p>
          Now we are getting in to more complex operations. Here is another
          equation for us to look at:<br /><br />
          <code>x^2 - 8 = 8</code><br /><br />
          Our very first step will be to <b>add</b> 8 to each side. This is
          different from our previous examples, where we had to subtract. But
          remember, our goal is to get the variable alone by performing opposite
          operations.<br /><br />
          <code>x^2 = 16</code><br /><br />
          But what does the "^2" mean? The "^" symbol is used to denote
          exponents in situations where superscript is not available. When
          superscript <b>is</b> available, you would see it as x<sup>2</sup>.
          For the sake of this project, however, we will use the "^" symbol.<br />
          An exponent tells you how many times the base (in our case, "x") is
          multiplied by itself. So, "x^2" would be the same as "x*x". Now the
          opposite function of multiplication is division, but we would have to
          <b>divide both sides by "x"</b>. We do not want to do this, as that
          would put an "x" on the other side of the equation. So instead, we
          need to use the root operation! For an exponent of "2", we call this
          the "square root" and denote it with "√". Our equation is now:
          <br /><br />
          <code>x = √9</code><br /><br />
          Performing a root operation by hand can be a tedious process, so we
          recommend using a calculator when necessary. However, we are lucky in
          that "9" is a
          <a href="https://en.wikipedia.org/wiki/Square_number"
            >perfect square</a
          >, so we do not need to calculate anything. Instead, we find our
          answer to be:<br /><br />
          <code>x = 3</code>
        </p>
      </section>
      <section class="main-section" id="system_of_equations">
        <header>System of Equations</header>
        <p>
          As you explore your algebra studies further, you may start to run
          across equations with more than one variable. The first such equations
          will likely look like:<br /><br />
          <code>y = 3x</code><br /><br />
          An equation like this does <b>not have one single solution</b>.
          Rather, there are a series of values for which the equation is true.
          For example, if "x=3" and "y=9", the equation is true. These equations
          are usually used to plot a graph. <br />
          Getting more complicated, though, you may be given a <b>pair</b> of
          equations. This is called a "system of equations", and CAN be solved.
          Let's look at how we do this! Consider the following system of
          equations:<br /><br />
          <code>y = 3x | y - 6 = x</code>
          A system of equations IS solvable, but it is a multi-step process. To
          get started, we need to choose a variable we are solving for. Let's
          solve for "x" first. From the second equation, we know that "x" equals
          "y - 6", but we cannot simplify that further because we do not have a
          value for "y". Except, thanks to the system of equations, we DO have a
          value for "y". We know that "y" equals "3x". So, looking at our second
          equation, we can replace "y" with "3x" because they have the same
          value. We then get:<br /><br />
          <code>3x - 6 = x</code><br /><br />
          Now we can solve for "x"! We start by adding 6 to each side.<br /><br />
          <code>3x = x + 6</code><br /><br />
          We still need to get "x" by itself, so we subtract "x" from both sides
          and get:<br /><br />
          <code>2x = 6</code><br /><br />
          If this confuses you, remember that "3x" is the same as "x+x+x".
          Subtract an "x" from that and you get "x+x", or "2x". Now we divide
          both sides by 2 and have our value for x!<br /><br />
          <code>x = 3</code><br /><br />
          However, our work is not done yet. We still need to find the value for
          "y". Let's go back to our first equation:<br /><br />
          <code>y = 3x</code><br /><br />
          We have a value for "x" now, so let's see what happens if we put that
          value in.<br /><br />
          <code>y = 3*3</code><br /><br />
          We perform the multiplication and discover that "y=9"! Our solution to
          this system of equations then is:<br /><br />
          <code>x = 3 and y = 9</code><br /><br />
        </p>
      </section>
      <section class="main-section" id="try_it_yourself!">
        <header>Try it Yourself!</header>
        <p>Coming Soon!</p>
        <p>Keep an eye out for new additions!</p>
      </section>
      <section class="main-section" id="more_information">
        <header>More Information</header>
        <p>Check out the following links for more information!</p>
        <ul>
          <li>
            <a href="https://www.wolframalpha.com/examples/mathematics/algebra/"
              >Wolfram Alpha</a
            >
            is a great source for multiple mathematic fields.
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Algebra"
              >Wikipedia's Algebra page</a
            >
            for more general information.
          </li>
        </ul>
      </section>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
* {
  background-color: #3a3240;
}
a {
  color: #92869c;
}
a:hover {
  background-color: #92869c;
  color: #3a3240;
}
#navbar {
  border-style: solid;
  border-width: 5px;
  border-color: #92869c;
  height: 100%;
  top: -5px;
  left: -5px;
  padding: 5px;
  text-align: center;
  color: #92869c
}
@media (min-width: 480px) {
  #navbar {
    position: fixed;
  }
}
main {
  margin-left: 220px;
  color: #92869c
}
header {
  font-size: 20pt;
}
code {
  background-color: #92869c;
  border-style: dashed;
  border-width: 2px;
  border-color: #92869c;
  padding: 5px;
  color: black;
}
footer {
  text-align: center;
}
```

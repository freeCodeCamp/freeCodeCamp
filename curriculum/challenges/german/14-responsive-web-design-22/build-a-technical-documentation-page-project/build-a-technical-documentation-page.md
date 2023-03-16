---
id: 587d78b0367417b2b2512b05
title: Erstellen einer Seite zur technischen Dokumentation
challengeType: 14
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://technical-documentation-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://technical-documentation-page.freecodecamp.rocks</a> aufweist

**User Stories:**

1. Du kannst ein `main`-Element mit einer entsprechenden `id="main-doc"` sehen, das den Hauptinhalt der Seite enthält (technische Dokumentation)
1. Innerhalb des `#main-doc`-Elements kannst du mehrere `section`-Elemente sehen, jedes mit einer `main-section`-Klasse. Es sollten mindestens 5 sein
1. Das erste Element innerhalb jeder `.main-section` sollte ein `header`-Element sein, das einen Text enthält, der das Thema dieses Abschnitts beschreibt.
1. Jedes `section`-Element der Klasse `main-section` sollte auch eine `id` haben, die mit dem Text von jedem `header` übereinstimmt. Alle Leerzeichen sollten durch Unterstriche ersetzt werden (z.B. sollte der Abschnitt, der die Überschrift „JavaScript und Java“ enthält, eine entsprechende `id="JavaScript_and_Java"` enthalten)
1. Die `.main-section`-Elemente sollten mindestens zehn `p`-Elemente enthalten (insgesamt)
1. Die `.main-section`-Elemente sollten mindestens fünf `code`-Elemente enthalten (insgesamt)
1. Die `.main-section`-Elemente sollten mindestens fünf `li`-Elemente enthalten (insgesamt)
1. Du kannst ein `nav`-Element mit entsprechender `id="navbar"` sehen
1. Das navbar-Element sollte ein `header`-Element enthalten, das einen Text enthält, der das Thema der technischen Dokumentation beschreibt
1. Außerdem sollte die Navigationsleiste auch (`a`) -Link-Elemente der Klasse `nav-link` enthalten. Es sollte eines für jedes Element der Klasse `main-section` geben
1. Das `header`-Element in der `#navbar` muss vor jedem Link-Element (`a`) in der Navigationsleiste stehen
1. Jedes Element der Klasse `nav-link` sollte einen Text enthalten, der zu dem entsprechenden `header`-Text jeder `section` passt (wenn du z.B. einen Header bzw. eine Sektion mit „Hello world" hast, sollte deine Navigationsleiste ein Element mit eben jenem Text enthalten)
1. Wenn du auf ein Element der Navigationsleiste klickst, sollte die Seite zu der entsprechenden Sektion des `#main-doc`-Elements navigieren (klickst du z.B. auf ein `.nav-link`-Element, das den Text „Hello World" enthält, sollte die Seite zu einem `section`-Element mit dieser ID navigieren und nun den entsprechenden Header enthalten)
1. Auf Geräten mit regulärer Größe (Laptops, Desktop-PCs) sollte das Element mit der `id="navbar"` auf der linken Seite des Bildschirms angezeigt werden und für den Nutzer immer sichtbar sein
1. Deine technische Dokumentation sollte mindestens eine Media Query verwenden

Erfülle die folgenden User Stories und bestehe alle Tests, um dieses Projekt abzuschließen. Gib dem Ganzen deinen persönlichen Stil. Viel Spaß beim Programmieren!

**Hinweis:** Füge unbedingt `<link rel="stylesheet" href="styles.css">` in dein HTML ein, um dein Stylesheet zu verlinken und dein CSS anzuwenden

# --hints--

Du solltest ein `main`-Element mit einer `id` von `main-doc` haben.

```js
const el = document.getElementById('main-doc')
assert(!!el)
```

Du solltest mindestens fünf `section`-Elemente der Klasse `main-section` haben.

```js
const els = document.querySelectorAll('#main-doc section')
assert(els.length >= 5)
```

All deine `.main-section`-Elemente sollten `section`-Elemente sein.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if (el.tagName !== 'SECTION') assert(false)
})
assert(els.length > 0)
```

Du solltest mindestens fünf `.main-section`-Elemente haben, die Nachfahren (descendants) von `#main-doc` sind.

```js
const els = document.querySelectorAll('#main-doc .main-section')
assert(els.length >= 5)
```

Das erste untergeordnete Element jeder `.main-section` sollte ein `header`-Element sein.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if(el.firstElementChild?.tagName !== 'HEADER') assert(false)
})
assert(els.length > 0)
```

Keines deiner `header`-Elemente sollte leer sein.

```js
const els = document.querySelectorAll('header')
els.forEach(el => {
  if (el.innerText?.length <= 0) assert(false)
})
assert(els.length > 0)
```

All deine `.main-section`-Elemente sollten eine `id` haben.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if (!el.id || el.id === '') assert(false)
})
assert(els.length > 0)
```

Jede `.main-section` sollte eine `id` haben, die dem Text seines ersten untergeordneten Elementes entspricht, wobei bei den IDs Leerzeichen mit Unterstrichen (`_`) ersetzt werden.

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  const text = el.firstElementChild?.innerText?.replaceAll(' ', '_')
  if (el.id?.toUpperCase() !== text?.toUpperCase()) assert(false)
})
assert(els.length > 0)
```

Du solltest (insgesamt) mindestens 10 `p`-Elemente innerhalb deiner `.main-section`-Elemente haben.

```js
const els = document.querySelectorAll('.main-section p')
assert(els.length >= 10)
```

Du solltest mindestens fünf `code`-Elemente haben, die Nachfahren (descendants) von `.main-section`-Elementen sind.

```js
const els = document.querySelectorAll('.main-section code')
assert(els.length >= 5)
```

Du solltest mindestens fünf `li`-Elemente haben, die Nachfahren (descendants) von `.main-section`-Elementen sind.

```js
const els = document.querySelectorAll('.main-section li')
assert(els.length >= 5)
```

Du solltest ein `nav`-Element mit einer `id` von `navbar` haben.

```js
const el = document.getElementById('navbar')
assert(!!el && el.tagName === 'NAV')
```

Deine `#navbar` sollte genau ein `header`-Element enthalten.

```js
const els = document.querySelectorAll('#navbar header')
assert(els.length === 1)
```

Du solltest mindestens ein `a`-Element der Klasse `nav-link` haben.

```js
const els = document.querySelectorAll('a.nav-link')
assert(els.length >= 1)
```

All deine `.nav-link`-Elemente sollten Ankerelemente (`a`) sein.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (el.tagName !== 'A') assert(false)
})
assert(els.length > 0)
```

All deine `.nav-link`-Elemente sollten sich in der `#navbar` befinden.

```js
const els1 = document.querySelectorAll('.nav-link')
const els2 = document.querySelectorAll('#navbar .nav-link')
assert(els2.length > 0 && els1.length === els2.length)
```

Du solltest die gleiche Anzahl an `.nav-link`- und `.main-section`-Elementen haben.

```js
const els1 = document.querySelectorAll('.main-section')
const els2 = document.querySelectorAll('.nav-link')
assert(els1.length > 0 && els2.length > 0 && els1.length === els2.length)
```

Das `header`-Element in der `#navbar` sollte auch vor jedem Linkelement (`a`) in der `#navbar` stehen.

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

Jedes `.nav-link`-Element sollte einen Text beinhalten, der dem `header`-Text der jeweiligen `section` entspricht (wenn du z.B. ein "Hello-World"-Sektion/Header hast, sollte dein `#navbar` ein `.nav-link` mit dem Text "Hello World" haben).

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

Jede `.nav-link` sollte über ein `href`-Attribut verfügen, das auf die zugehörige `.main-section` verweist (klickst du bspw. auf ein `.nav-link`-Element, das den Text „Hello world“ enthält, navigiert die Seite zu dem `section`-Element mit eben jener ID).

```js
const hrefValues = Array.from(document.querySelectorAll('.nav-link')).map(el => el.getAttribute('href'))
const mainSectionIDs = Array.from(document.querySelectorAll('.main-section')).map(el => el.id)
const missingHrefValues = mainSectionIDs.filter(str => hrefValues.indexOf('#' + str) === -1)
assert(hrefValues.length > 0 && mainSectionIDs.length > 0 && missingHrefValues.length === 0)
```

Deine `#navbar` sollte sich immer am linken Rand des Fensters befinden.

```js
const el = document.getElementById('navbar')
const left1 = el?.offsetLeft
const left2 = el?.offsetLeft
assert(!!el && left1 >= -15 && left1 <= 15 && left2 >= -15 && left2 <= 15)
```

Dein Projekt für die Technische Dokumentation sollte mindestens eine Media Query (Medienabfrage) verwenden.

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

---
id: 5900f3991000cf542c50feac
challengeType: 5
title: 'Problem 45: Triangular, pentagonal, and hexagonal'
videoUrl: ''
localeTitle: 'المشكلة 45: مثلثة ، خماسية ، سداسية'
---

## Description
<section id="description"> يتم إنشاء الأرقام المثلثة والخماسية والسداسي من خلال الصيغ التالية: <div style="display: inline-grid; text-align: center; grid-template-columns: repeat(3, minmax(117px, 12%)); grid-template-rows: auto;;text-align:right;direction:rtl"><div style=";text-align:right;direction:rtl"> مثلث </div><div style=";text-align:right;direction:rtl"> T <sub>n</sub> = <var>n</var> ( <var>n</var> +1) / 2 </div><div style=";text-align:right;direction:rtl"> 1 ، 3 ، 6 ، 10 ، 15 ، ... </div></div><div style="display: inline-grid; text-align: center; grid-template-columns: repeat(3, minmax(117px, 12%)); grid-template-rows: auto;;text-align:right;direction:rtl"><div style=";text-align:right;direction:rtl"> خماسي الزوايا و الأضلاع </div><div style=";text-align:right;direction:rtl"> P <sub>n</sub> = <var>n</var> (3 <var>n</var> −1) / 2 </div><div style=";text-align:right;direction:rtl"> 1 و 5 و 12 و 22 و 35 ... </div></div><div style="display: inline-grid; text-align: center; grid-template-columns: repeat(3, minmax(117px, 12%)); grid-template-rows: auto;;text-align:right;direction:rtl"><div style=";text-align:right;direction:rtl"> مسدس الشكل </div><div style=";text-align:right;direction:rtl"> H <sub>n</sub> = <var>n</var> (2 <var>n</var> −1) </div><div style=";text-align:right;direction:rtl"> 1 ، 6 ، 15 ، 28 ، 45 ، ... </div></div> يمكن التحقق من أن T <sub>285</sub> = P <sub>165</sub> = H <sub>143</sub> = 40755. العثور على رقم المثلث التالي الذي هو أيضا خماسي وسداسي. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع triPentaHexa <code>triPentaHexa(40756)</code> 1533776805.
    testString: 'assert.strictEqual(triPentaHexa(40756), 1533776805, "<code>triPentaHexa(40756)</code> should return 1533776805.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function triPentaHexa(n) {
  // Good luck!
  return true;
}

triPentaHexa(40756);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

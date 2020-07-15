---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
isHidden: false
forumTopicId: 301186
---

## Description
<section id='description'>
The <code>console.log()</code> and <code>typeof</code> methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.
Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.
</section>

## Instructions
<section id='instructions'>
Fix the two spelling errors in the code so the <code>netWorkingCapital</code> calculation works.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".'
    testString: 'assert(netWorkingCapital === 2);'
  - text: There should be no instances of mis-spelled variables in the code.
    testString: assert(!code.match(/recievables/g));
  - text: The <code>receivables</code> variable should be declared and used properly in the code.
    testString: assert(code.match(/receivables/g).length == 2);
  - text: There should be no instances of mis-spelled variables in the code.
    testString: assert(!code.match(/payable;/g));
  - text: The <code>payables</code> variable should be declared and used properly in the code.
    testString: assert(code.match(/payables/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

</section>

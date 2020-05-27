---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
challengeType: 5
isHidden: false
forumTopicId: 302303
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/S-Expression" title="wp: S-Expression" target="_blank">S-Expressions</a> are one convenient way to parse and store data.
</section>

## Instructions
<section id='instructions'>
Write a simple reader/parser for S-Expressions that handles quoted and unquoted strings, integers and floats.
The function should read a single but nested S-Expression from a string and return it as a (nested) array.
Newlines and other whitespace may be ignored unless contained within a quoted string.
"<tt>()</tt>"  inside quoted strings are not interpreted, but treated as part of the string.
Handling escaped quotes inside a string is optional; thus "<tt>(foo"bar)</tt>" may be treated as a string "<tt>foo"bar</tt>", or as an error.
For this, the reader need not recognize "<tt>\</tt>" for escaping, but should, in addition, recognize numbers if the language has appropriate data types.
Note that with the exception of "<tt>()"</tt>" ("<tt>\</tt>" if escaping is supported) and whitespace there are no special characters. Anything else is allowed without quotes.
The reader should be able to read the following input
<pre>
((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>
and turn it into a native data structure. (See the <a href="https://rosettacode.org/wiki/S-Expressions#Pike" title="#Pike" target="_blank">Pike</a>, <a href="https://rosettacode.org/wiki/S-Expressions#Python" title="#Python" target="_blank">Python</a> and <a href="https://rosettacode.org/wiki/S-Expressions#Ruby" title="#Ruby" target="_blank">Ruby</a> implementations for examples of native data structures.)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>parseSexpr</code> should be a function.
    testString: assert(typeof parseSexpr === 'function');
  - text: <code>parseSexpr('(data1 data2 data3)')</code> should return <code>['data1', 'data2', 'data3']</code>
    testString: assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
  - text: <code>parseSexpr('(data1 data2 data3)')</code> should return an array with 3 elements.
    testString: assert.deepEqual(parseSexpr(basicSExpr), basicSolution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function parseSexpr(str) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const simpleSExpr = '(data1 data2 data3)';
const simpleSolution = ['data1', 'data2', 'data3'];

const basicSExpr = '((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))';
const basicSolution = [["data","\"quoted data\"",123,4.5],["data",["!@#",[4.5],"\"(more\"","\"data)\""]]];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\'', '\\\'')}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}

```

</section>

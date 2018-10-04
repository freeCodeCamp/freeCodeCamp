---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
challengeType: 5
---

## Description
<section id='description'>
<p>
<a href="https://en.wikipedia.org/wiki/S-Expression" title="wp: S-Expression">S-Expressions</a> are one convenient way to parse and store data.
</p>
Task:
<p>
    Write a simple reader/parser for S-Expressions that handles quoted and unquoted strings, integers and floats.
</p>
<p>
The function should read a single but nested S-Expression from a string and
return it as a (nested) array.
</p>
<p>
    Newlines and other whitespace may be ignored unless contained within a quoted string.
</p>
<p>“<tt>()</tt>”  inside quoted strings are not interpreted, but treated as part of the string.
</p>
<p>
Handling escaped quotes inside a string is optional;  thus “<tt>(foo"bar)</tt>” maybe treated as a string “<tt>foo"bar</tt>”, or as an error.
</p>
<p>
For this, the reader need not recognize “<tt>\</tt>” for escaping, but should, in addition, recognize numbers if the language has appropriate datatypes.
</p>
<p>
Note that with the exception of “<tt>()"</tt>” (“<tt>\</tt>” if escaping is supported) and whitespace there are no special characters. Anything else is allowed without quotes.
</p>
<p>The reader should be able to read the following input</p>
<p>
<pre>
    ((data "quoted data" 123 4.5)
    (data (!@# (4.5) "(more" "data)")))
</pre>
</p>
<p>
and turn it into a native datastructure. (see the
<a href="http://rosettacode.org/wiki/#Pike" title="#Pike">Pike</a>, 
<a href="http://rosettacode.org/wiki/#Python" title="#Python">Python</a> and
<a href="http://rosettacode.org/wiki/#Ruby" title="#Ruby">Ruby</a> implementations
for examples of native data structures.)
</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>parseSexpr</code> is a function.
    testString: 'assert(typeof parseSexpr === ''function'', ''<code>parseSexpr</code> is a function.'');'
  - text: '<code>parseSexpr(''(data1 data2 data3)'')</code> should return [''data1'', ''data2'', ''data3'']")'
    testString: 'assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution, "<code>parseSexpr(''(data1 data2 data3)'')</code> should return [''data1'', ''data2'', ''data3'']");'
  - text: <code>parseSexpr('(data1 data2 data3)')</code> should return an array with 3 elements")
    testString: 'assert.deepEqual(parseSexpr(basicSExpr), basicSolution, "<code>parseSexpr(''(data1 data2 data3)'')</code> should return an array with 3 elements");'

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
console.info('after the test');
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

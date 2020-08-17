---
title: Execute a Markov algorithm
id: 59e09e6d412c5939baa02d16
challengeType: 5
isHidden: false
forumTopicId: 302260
---

## Description
<section id='description'>
Create an interpreter for a <a href="https://en.wikipedia.org/wiki/Markov algorithm" title="wp: Markov algorithm" target="_blank">Markov Algorithm</a>.
Rules have the syntax:
<pre>
[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[any character]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>
There is one rule per line.
If there is a <code>.</code> (period) present before the  [replacement], then this is a terminating rule in which case the interpreter must halt execution.
A ruleset consists of a sequence of rules, with optional comments.
<span style="font-size: 1.5rem">Rulesets</span>
Use the following tests on entries:
<strong>Ruleset 1:</strong>
<pre>
# This rules file is extracted from Wikipedia:
# http://en.wikipedia.org/wiki/Markov_Algorithm
A -> apple
B -> bag
S -> shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>
Sample text of:
<code>I bought a B of As from T S.</code>
Should generate the output:
<code>I bought a bag of apples from my brother.</code>
<strong>Ruleset 2:</strong>
A test of the terminating rule
<pre>
# Slightly modified from the rules on Wikipedia
A -> apple
B -> bag
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>
Sample text of:
<code>I bought a B of As from T S.</code>
Should generate:
<code>I bought a bag of apples from T shop.</code>
<strong>Ruleset 3:</strong>
This tests for correct substitution order and may trap simple regexp based replacement routines if special regexp characters are not escaped.
<pre>
# BNF Syntax testing rules
A -> apple
WWWW -> with
Bgage -> ->.*
B -> bag
->.* -> money
W -> WW
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>
Sample text of:
<code>I bought a B of As W my Bgage from T S.</code>
Should generate:
<code>I bought a bag of apples with my money from T shop.</code>
<strong>Ruleset 4:</strong>
This tests for correct order of scanning of rules, and may trap replacement routines that scan in the wrong order.  It implements a general unary multiplication engine.  (Note that the input expression must be placed within underscores in this implementation.)
<pre>
### Unary Multiplication Engine, for testing Markov Algorithm implementations
### By Donal Fellows.
# Unary addition engine
_+1 -> _1+
1+1 -> 11+
# Pass for converting from the splitting of multiplication into ordinary
# addition
1! -> !1
,! -> !+
_! -> _
# Unary multiplication by duplicating left side, right side times1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# Next phase of applying1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# Termination cleanup for addition_1 -> 1
1+_ -> 1
_+_ ->
</pre>
Sample text of:
<code>_1111*11111_</code>
should generate the output:
<code>11111111111111111111</code>
<strong>Ruleset 5:</strong>
A simple <a href="http://en.wikipedia.org/wiki/Turing_machine" title="link: http://en.wikipedia.org/wiki/Turing_machine" target="_blank">Turing machine</a>, implementing a three-state <a href="http://en.wikipedia.org/wiki/Busy_beaver" title="link: http://en.wikipedia.org/wiki/Busy_beaver" target="_blank">busy beaver</a>.
The tape consists of <code>0</code>s and <code>1</code>s, the states are <code>A</code>, <code>B</code>, <code>C</code> and <code>H</code> (for <code>H</code>alt), and the head position is indicated by writing the state letter before the character where the head is. All parts of the initial tape the machine operates on have to be given in the input.
Besides demonstrating that the Markov algorithm is Turing-complete, it also made me catch a bug in the C++ implementation which wasn't caught by the first four rulesets.
<pre>
# Turing machine: three-state busy beaver
#
# state A, symbol 0 => write 1, move right, new state B
A0 -> 1B
# state A, symbol 1 => write 1, move left, new state C
0A1 -> C01
1A1 -> C11
# state B, symbol 0 => write 1, move left, new state A
0B0 -> A01
1B0 -> A11
# state B, symbol 1 => write 1, move right, new state B
B1 -> 1B
# state C, symbol 0 => write 1, move left, new state B
0C0 -> B01
1C0 -> B11
# state C, symbol 1 => write 1, move left, halt
0C1 -> H01
1C1 -> H11
</pre>
This ruleset should turn
<code>000000A000000</code>
into
<code>00011H1111000</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>markov</code> should be a function.
    testString: assert(typeof markov === 'function');
  - text: <code>markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from my brother.".
    testString: assert.deepEqual(markov(rules[0],tests[0]),outputs[0]);
  - text: <code>markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from T shop.".
    testString: assert.deepEqual(markov(rules[1],tests[1]),outputs[1]);
  - text: <code>markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")</code> should return "I bought a bag of apples with my money from T shop.".
    testString: assert.deepEqual(markov(rules[2],tests[2]),outputs[2]);
  - text: <code>markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")</code> should return "11111111111111111111".
    testString: assert.deepEqual(markov(rules[3],tests[3]),outputs[3]);
  - text: <code>markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")</code> should return "00011H1111000".
    testString: assert.deepEqual(markov(rules[4],tests[4]),outputs[4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function markov(rules,test) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function markov(rules,test) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origTest = test;

    let captures = [];

    rules.forEach(function(rule){
		let m = pattern.exec(rule);
		for (let j = 0; j < m.length; j++)
		    m[j] = m[j + 1];
		captures.push(m);
    });

    test = origTest;
    let copy = test;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        test = test.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (test!=copy) {
            j = -1;
            copy = test;
        }
    }
    return test;
}

// tail:
let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
			["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
			["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
			["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
			["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let tests=["I bought a B of As from T S.",
			"I bought a B of As from T S.",
			"I bought a B of As W my Bgage from T S.",
			"_1111*11111_",
			"000000A000000"];
let outputs=["I bought a bag of apples from my brother.",
			"I bought a bag of apples from T shop.",
			"I bought a bag of apples with my money from T shop.",
			"11111111111111111111",
			"00011H1111000"];
```

</section>

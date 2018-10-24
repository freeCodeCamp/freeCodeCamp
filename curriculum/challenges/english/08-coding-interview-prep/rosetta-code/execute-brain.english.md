---
title: Execute Brain****
id: 59e0a8df964e4540d5abe599
challengeType: 5
---

## Description
<section id='description'>
<p>Write a function to implement a Brain**** interpreter. The function will take a string as a parameter and should return a string as the output. More details are given below : </p>
<p>RCBF is a set of <a href="http://rosettacode.org/wiki/Brainf***" title="Brainf***">Brainf***</a> compilers and interpreters written for Rosetta Code in a variety of languages.</p><p>Below are links to each of the versions of RCBF.</p><p>An implementation need only properly implement the following instructions:</p>
<p>{|</p>
<p>!Command</p>
<p>!Description</p>
<p>|-</p>
<p>| style="text-align:center"| <code>&gt;</code> || Move the pointer to the right</p>
<p>|-</p>
<p>| style="text-align:center"| <code>&lt;</code> || Move the pointer to the left</p>
<p>|-</p>
<p>| style="text-align:center"| <code>+</code> || Increment the memory cell under the pointer</p>
<p>|-</p>
<p>| style="text-align:center"| <code>-</code> || Decrement the memory cell under the pointer</p>
<p>|-</p>
<p>| style="text-align:center"| <code>.</code> || Output the character signified by the cell at the pointer</p>
<p>|-</p>
<p>| style="text-align:center"| <code>,</code> || Input a character and store it in the cell at the pointer</p>
<p>|-</p>
<p>| style="text-align:center"| <code>[</code> || Jump past the matching <code>]</code> if the cell under the pointer is 0</p>
<p>|-</p>
<p>| style="text-align:center"| <code>]</code> || Jump back to the matching <code>[</code> if the cell under the pointer is nonzero</p>
<p>|}</p>
<p>Any cell size is allowed,  EOF   (<u>E</u>nd-<u>O</u>-<u>F</u>ile)  support is optional, as is whether you have bounded or unbounded memory.</p>

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>brain(bye)</code> should retuen a string
    testString: assert(typeof brain(bye) === 'string', '<code>brain(bye)</code> should return a string');
  - text: <code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"
    testString: assert.equal(brain("++++++[>++++++++++<-]>+++++."),"A", '<code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"');
  - text: <code>brain(bye)</code> should return <code>Goodbye, World!\\r\\n</code>
    testString: assert.equal(brain(bye), 'Goodbye, World!\r\n', '<code>brain(bye)</code> should return <code>Goodbye, World!\\r\\n</code>');
  - text: <code>brain(hello)</code> should return <code>Hello World!\\n</code>'
    testString: assert.equal(brain(hello), "Hello World!\n", '<code>brain(hello)</code> should return <code>Hello World!\\n</code>');
  - text: <code>brain(fib)</code> should return <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>
    testString: assert.equal(brain(fib), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89", '<code>brain(fib)</code> should return <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function brain (prog) {
  // Good luck!
}
```

</div>

### Before Test
<div id='js-setup'>

```js
let fib=`+

++

+++

++++

+>+>>

>>++++

+++++++

++++++++

+++++++++

++++++++++

++++++>++++

++++++++++++

+++++++++++++

+++<<<<<<[>[>>

>>>>+>+<<<<<<<-

]>>>>>>>[<<<<<<<

+>>>>>>>-]<[>++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++.[-]]++++++++++<[

->-<]>+++++++++++++++++++++

+++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
let bye='++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.';
```

</div>


</section>

## Solution
<section id='solution'>


```js
function brain(prog){
  var output="";
	var code; // formatted code
  var ip = 0; // current instruction within code
  var nest = 0; // current bracket nesting (for Out button)
  var ahead = []; // locations of matching brackets

  var data = [0]; // data array (mod by +, -)
  var dp = 0; // index into data (mod by <, >)

  var inp = 0; // current input character (fetch with ,)
  var quit = 0;
	var commands = {
	'>':function() { if (++dp >= data.length) data[dp]=0 },
	'<':function() { if (--dp < 0) quit++ },
	'+':function() { ++data[dp] },
	'-':function() { --data[dp] },
	'[':function() { if (!data[dp]) ip = ahead[ip]; else ++nest },
	']':function() { if ( data[dp]) ip = ahead[ip]; else --nest },
	',':function() {
		var c = document.getElementById("input").value.charCodeAt(inp++);
		data[dp] = isNaN(c) ? 0 : c; // EOF: other options are -1 or no change
	},
	'.':function() {
    		output+=String.fromCharCode(data[dp]);
    		/*var s = document.getElementById("output").innerHTML)
    		 + String.fromCharCode(data[dp]);
    		s = s.replace(/\n/g,"<br>").replace(/ /g,"&amp;nbsp;");
    		document.getElementById("output").innerHTML = s;*/
    	},
    };

	let ar=prog.split('');
	var st = [], back, error = -1;
	for (ip=0; ip<ar.length; ip++) {
		switch(ar[ip]) {
		case '[':
			st.push(ip);
			break;
		case ']':
			if (st.length == 0) error = ip;
			back = st.pop();
			ahead[ip] = back;
			ahead[back] = ip;
			break;
		}
	}

	for(ip=0;ip<ar.length;ip++){
    if(commands.hasOwnProperty(ar[ip]))
		  commands[ar[ip]]();
	}

	return output;
}

```

</section>

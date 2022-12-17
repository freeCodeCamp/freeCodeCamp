---
id: 59e0a8df964e4540d5abe599
title: Execute Brain****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Напишіть функцію для запуску Brain\*\*\*\* перекладача. Функція бере рядок як параметр і на виході також виходить рядок. Деталі наведено нижче:

RCBF is a set of <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> compilers and interpreters written for Rosetta Code in a variety of languages.

Нижче наведено посилання на кожну з версій RCBF.

Впровадження потребує чіткого дотримання таких інструкцій:Пропустіть збіг <code> якщо комірка під курсором дорівнює 0&lt;/td>
&lt;/tr>
&lt;tr>
  &lt;td> <code>]</code>&lt;/td>
  &lt;td>Поверніться до функції збігу <code>/</code> якщо комірка під курсором не є 0&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>

&lt;p spaces-before="0">Розмір комірки може бути довільним, EOF (&lt;em x-id="3">E&lt;/em>nd-&lt;em x-id="3">O&lt;/em>-&lt;em x-id="3">F&lt;/em>ile) підтримка не є обов’язковою, так само як і наявність обмеженої й необмеженої пам’яті.&lt;/p>

&lt;h1 spaces-before="0">--hints--&lt;/h1>

&lt;p spaces-before="0">&lt;code>brain(bye)</code> повинен вивести рядок</p> 



```js
assert(typeof brain(bye) === 'string');
```


`brain ("++++++[>++++++++++<-]>+++++.")` повинен вивести рядок “A”



```js
assert.equal(brain('++++++[>++++++++++<-]>+++++.'), 'A');
```


`brain(bye)`повинен вивести `Goodbye, World!\r\n`



```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```


`brain(hello)`повинен вивести`Hello World!\n`



```js
assert.equal(brain(hello), 'Hello World!\n');
```


`brain(fib)`повинен вивести`1, 1, 2, 3, 4, 5, 8, 13, 21, 34, 55, 89`



```js
assert.equal(brain(fib), '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89');
```




# --seed--



## --before-user-code--



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




## --seed-contents--



```js
function brain(prog) {

}
```




# --solutions--



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

---
title: Execute Brain****
id: 59e0a8df964e4540d5abe599
challengeType: 5
forumTopicId: 302261
localeTitle: Выполнить мозг ****
---

## Description
<section id='description'>
<p> Напишите функцию для реализации интерпретатора Brain ****. Функция примет строку как параметр и должна вернуть строку в качестве вывода. Более подробная информация приведена ниже: </p><p> RCBF представляет собой набор компиляторов и интерпретаторов <a href="http://rosettacode.org/wiki/Brainf***" title="Brainf ***">Brainf ***,</a> написанных для Rosetta Code на разных языках. </p><p> Ниже приведены ссылки на каждую из версий RCBF. </p><p> Для реализации необходимо только правильно выполнить следующие инструкции: </p><p> {| </p><p> ! Command </p><p> !Описание </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>&gt;</code> || Переместите указатель вправо </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>&lt;</code> || Переместите указатель влево </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>+</code> || Увеличение ячейки памяти под указателем </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>-</code> || Уменьшить ячейку памяти под указателем </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>.</code> || Вывести символ, обозначенный ячейкой указателем </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>,</code> || Введите символ и сохраните его в ячейке указателя </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>[</code> || Перейти мимо соответствия <code>]</code> если ячейка под указателем равна 0 </p><p> | - </p><p> | стиль = «выравнивание текста: центр» | <code>]</code> || Вернитесь к совпадению <code>[</code> если ячейка под указателем отлична от нуля </p><p> |} </p><p> Любой размер ячейки разрешен, поддержка EOF ( <u>E</u> nd- <u>O-</u> <u>F</u> ile) необязательна, равно как и ограниченная или неограниченная память. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>brain(bye)</code> should return a string
    testString: assert(typeof brain(bye) === 'string');
  - text: <code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"
    testString: assert.equal(brain("++++++[>++++++++++<-]>+++++."),"A");
  - text: <code>brain(bye)</code> should return <code>Goodbye, World!\\r\\n</code>
    testString: assert.equal(brain(bye), 'Goodbye, World!\r\n');
  - text: <code>brain(hello)</code> should return <code>Hello World!\\n</code>
    testString: assert.equal(brain(hello), "Hello World!\n");
  - text: <code>brain(fib)</code> should return <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>
    testString: assert.equal(brain(fib), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function brain(prog) {
  // Good luck!
}

```

</div>

### Before Tests
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

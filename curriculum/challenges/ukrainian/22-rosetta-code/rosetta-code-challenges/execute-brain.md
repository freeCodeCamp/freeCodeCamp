---
id: 59e0a8df964e4540d5abe599
title: Execute Brain****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Write a function to implement a Brain\*\*\*\* interpreter. The function will take a string as a parameter and should return a string as the output. More details are given below:

RCBF є множиною <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> компіляторів та інтерпретаторів, написаних для Rosetta code різними мовами.

Нижче наведено посилання на кожну з версій RCBF.

Впровадження потребує чіткого дотримання таких інструкцій:

| Команда                   | Опис                                                                             |
| ------------------------- | -------------------------------------------------------------------------------- |
| <code>></code> | Перемістити курсор праворуч                                                      |
| <code>&lt;</code> | Перемістити курсор ліворуч                                                       |
| <code>+</code> | Збільшити поточну комірку під курсором                                           |
| <code>-</code> | Зменшити поточну комірку під курсором                                            |
| <code>.</code> | Вивести значення комірки під курсором                                            |
| <code>,</code> | Ввести значення та зберегти його в комірці під курсором                          |
| <code>\[</code> | Перейти до <code>]</code>, якщо значенням комірки під курсором є 0     |
| <code>]</code> | Перейти до <code>\[</code>, якщо значенням комірки під курсором не є 0 |

Розмір комірки може бути довільним, EOF (*E*nd-*O*-*F*ile) підтримка не є обов’язковою, так само як і наявність обмеженої й необмеженої пам’яті.

# --hints--

`brain(bye)` повинен вивести рядок

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++++++.")` should return "A"

```js
assert.equal(brain('++++++[>++++++++++++++.'), 'A');
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

+++++++

+>+>>

>>++++++++++++++++++++++++

+++++++++++++++++++

++++++++++++

+++++++++++++

+++++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++++++++++++<[

->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++++>++++++++++++.>>.<-.<.+++++++++++++[>+>+++++++>+++++++>++++++++>+++++++++++++++++++>+++++++++++++++++++++++++++++++.<++.>>>+++++++.>>>.++++++++++++.---.';
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

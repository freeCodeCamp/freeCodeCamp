---
id: 59e0a8df964e4540d5abe599
title: Виконання Brain****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Напишіть функцію, щоб реалізувати інтерпретатор Brain\*\*\*\*. Функція прийматиме рядок як параметр і має повернути рядок як вихідні дані. Деталі наведено нижче:

RCBF — це набір компіляторів та інтерпретаторів <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a>, написаних для Rosetta Code різними мовами програмування.

Нижче наведено посилання на кожну з версій RCBF.

Реалізація потребує лише чіткого дотримання наступних інструкцій:

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

Дозволений будь-який розмір комірок, підтримка EOF (*E*nd-*O*-*F*ile) не є обов’язковою, так само як обмежена чи необмежена пам’ять.

# --hints--

`brain(hello)` має повернути рядок

```js
assert(typeof brain(hello) === 'string');
```

`brain("++++++[>++++++++++++++.")` має повернути "A"

```js
assert.equal(brain('++++++[>++++++++++++++.'), 'A');
```

`brain(hello)` має повернути `Hello World!\n`

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` має повернути `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

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
let hello='++++++++[>++++++>++++++++++++.>>.<-.<.+++.------.--------.>>+.>++.'
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

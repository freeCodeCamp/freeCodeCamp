---
id: 59e0a8df964e4540d5abe599
title: 执行脑 ****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Write a function to implement a Brain\*\*\*\* interpreter. The function will take a string as a parameter and should return a string as the output. More details are given below:

RCBF is a set of <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> compilers and interpreters written for Rosetta Code in a variety of languages.

以下是每个 RCBF 版本的链接。

一个实现只需要正确地实现以下指令：

| Command                   | 描述                                             |
| ------------------------- | ---------------------------------------------- |
| <code>></code> | Move the pointer to the right                  |
| <code>&lt;</code> | 向左移动指针                                         |
| <code>+</code> | 递增指针下的存储单元                                     |
| <code>-</code> | 递减指针下的存储单元                                     |
| <code>.</code> | 输出指针所在存储单元所代表的字符                               |
| <code>,</code> | 输入一个字符并将其存储在指针所在的存储单元中                         |
| <code>\[</code> | 如果指针下的存储单元为 0，则跳过匹配的 <code>]</code>  |
| <code>]</code> | 如果指针下的存储单元非 0，则跳回匹配的 <code>\[</code> |

允许任何单元格大小，EOF (*E*nd-*O*-*F*ile) 支持是可选的，就像你有有界或无界内存一样。

# --hints--

`brain(bye)` 应该返回一个字符串

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++++++.")` should return "A"

```js
assert.equal(brain('++++++[>++++++++++++++.'), 'A');
```

`brain(bye)` 应该返回 `Goodbye, World!\r\n`

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` 应该返回 `Hello World!\n`

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` 应该返回 `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

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

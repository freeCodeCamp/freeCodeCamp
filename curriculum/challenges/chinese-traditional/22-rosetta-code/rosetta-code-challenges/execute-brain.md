---
id: 59e0a8df964e4540d5abe599
title: 執行腦 ****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Write a function to implement a Brain\*\*\*\* interpreter. The function will take a string as a parameter and should return a string as the output. More details are given below:

RCBF is a set of <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> compilers and interpreters written for Rosetta Code in a variety of languages.

以下是每個 RCBF 版本的鏈接。

一個實現只需要正確地實現以下指令：

| Command                   | 描述                                             |
| ------------------------- | ---------------------------------------------- |
| <code>></code> | Move the pointer to the right                  |
| <code>&lt;</code> | 向左移動指針                                         |
| <code>+</code> | 遞增指針下的存儲單元                                     |
| <code>-</code> | 遞減指針下的存儲單元                                     |
| <code>.</code> | 輸出指針所在存儲單元所代表的字符                               |
| <code>,</code> | 輸入一個字符並將其存儲在指針所在的存儲單元中                         |
| <code>\[</code> | 如果指針下的存儲單元爲 0，則跳過匹配的 <code>]</code>  |
| <code>]</code> | 如果指針下的存儲單元非 0，則跳回匹配的 <code>\[</code> |

允許任何單元格大小，EOF (*E*nd-*O*-*F*ile) 支持是可選的，就像你有有界或無界內存一樣。

# --hints--

`brain(bye)` 應該返回一個字符串

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++++++.")` should return "A"

```js
assert.equal(brain('++++++[>++++++++++++++.'), 'A');
```

`brain(bye)` 應該返回 `Goodbye, World!\r\n`

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` 應該返回 `Hello World!\n`

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` 應該返回 `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

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

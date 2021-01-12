---
id: 59e0a8df964e4540d5abe599
title: 执行大脑****
challengeType: 5
videoUrl: ''
dashedName: execute-brain
---

# --description--

<p>编写一个函数来实现Brain ****解释器。该函数将字符串作为参数，并应返回一个字符串作为输出。更多细节如下： </p><p> <a href='http://rosettacode.org/wiki/Brainf***' title='Brainf ***'>RCBF</a>是一套为各种语言的Rosetta Code编写的<a href='http://rosettacode.org/wiki/Brainf***' title='Brainf ***'>Brainf ***</a>编译器和解释器。 </p><p>以下是RCBF每个版本的链接。 </p><p>实现只需要正确实现以下指令： </p><p> {| </p><p> ！命令</p><p> ！描述</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>></code> ||将指针向右移动</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>&#x3C;</code> ||将指针移到左侧</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>+</code> ||增加指针下的内存单元格</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>-</code> ||减少指针下的内存单元格</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>.</code> ||输出指针处单元格表示的字符</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>,</code> ||输入一个字符并将其存储在指针的单元格中</p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>[</code> ||如果指针下的单元格为0，则跳过匹配<code>]</code> </p><p> |  - </p><p> |风格=“文本对齐：中心” | <code>]</code> ||跳回匹配<code>[</code>如果指针下的单元格非零</p><p> |} </p><p>允许任何单元格大小，EOF（ <u>E</u> nd- <u>O</u> - <u>F</u> ile）支持是可选的，无论您是否有有界或无界内存。 </p>

# --hints--

`brain(bye)`应该重新调整一个字符串

```js
assert(typeof brain(bye) === 'string');
```

<code>brain("++++++[>++++++++++<-]>+++++.")&lt;/code should return "A"

```js
assert.equal(brain('++++++[>++++++++++<-]>+++++.'), 'A');
```

`brain(bye)`应该回归`Goodbye, World!\\r\\n`

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)`应该回归`Hello World!\\n`

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)`应该返回`1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

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

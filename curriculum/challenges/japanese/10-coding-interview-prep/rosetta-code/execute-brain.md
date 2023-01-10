---
id: 59e0a8df964e4540d5abe599
title: Brain****の実行
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Brain\*\*\*\*\* インタプリタを実行する関数を作成します。 関数はパラメータとして文字列を取り、出力文字列を返します。 詳細は以下の通りです。

RCBF is a set of <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> compilers and interpreters written for Rosetta Code in a variety of languages.

以下は、RCBFの各バージョンへのリンクです。

実装には以下の手順を適切に実行する必要があります。

| コマンド                      | 説明                                                          |
| ------------------------- | ----------------------------------------------------------- |
| <code>></code> | ポインタを右に移動します                                                |
| <code>&lt;</code> | ポインタを左に移動します                                                |
| <code>+</code> | ポインタの下にあるメモリーセルを増やします                                       |
| <code>-</code> | ポインタの下にあるメモリーセルを減らします                                       |
| <code>.</code> | ポインターのセルで示された文字を出力します                                       |
| <code>,</code> | 文字を入力し、ポインタのセルに格納します                                        |
| <code>\[</code> | ポインタの下のセルが 0 の場合、一致する <code>]</code> をジャンプします      |
| <code>]</code> | ポインタの下のセルがゼロでない場合、一致する <code>\[</code> にジャンプして戻ります |

セルのサイズに制限はありません。メモリに制限があるかどうかに関わらず、EOF (*E*nd-*O*-*F*ile) のサポートは任意です。

# --hints--

`brain(bye)` は文字列を返します。

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++<-]>+++++.")` は「A」を返します。

```js
assert.equal(brain('++++++[>++++++++++<-]>+++++.'), 'A');
```

`brain(bye)` は `Goodbye, World!\r\n` を返します。

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` は `Hello World!\n` を返します。

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` は `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89` を返します。

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

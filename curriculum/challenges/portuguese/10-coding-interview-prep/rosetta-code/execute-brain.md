---
id: 59e0a8df964e4540d5abe599
title: Executar Brain****
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Escreva uma função para implementar um interpretador de Brain\*\*\*\*. A função receberá uma string como um parâmetro e deve retornar uma string como saída. Mais detalhes são fornecidos abaixo:

RCBF é um conjunto de interpretadores e compiladores <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> escritos pelo Rosetta Code em diversas linguagens.

Abaixo, encontramos os links para cada uma das versões do RCBF.

Uma implementação só precisa implementar corretamente as seguintes instruções:

| Comando                   | Descrição                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| <code>></code> | Mova o ponteiro para a direita                                                                 |
| <code>&lt;</code> | Mova o ponteiro para a esquerda                                                                |
| <code>+</code> | Incremente a célula de memória sob o ponteiro                                                  |
| <code>-</code> | Decremente a célula de memória sob o ponteiro                                                  |
| <code>.</code> | Produza o caractere representado pela célula no ponteiro                                       |
| <code>,</code> | Insira um caractere e armazene-o na célula do ponteiro                                         |
| <code>\[</code> | Salte para além da correspondência de <code>]</code> se a célula sob o ponteiro for 0 |
| <code>]</code> | Volte à célula correspondente <code>\[</code> se a célula sob o ponteiro não for zero |

Qualquer tamanho de célula é permitido, suporte a EOF (*E*nd-*O*f-*F*ile) é opcional, bem como ter memória limitada ou não limitada.

# --hints--

`brain(bye)` deve retornar uma string

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++<-]>+++++.")` deve retornar "A"

```js
assert.equal(brain('++++++[>++++++++++<-]>+++++.'), 'A');
```

`brain(bye)` deve retornar `Goodbye, World!\r\n`

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` deve retornar `Hello World!\n`

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` deve retornar `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

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

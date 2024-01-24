---
id: 59e0a8df964e4540d5abe599
title: Brain**** ausführen
challengeType: 1
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

Write a function to implement a Brain\*\*\*\* interpreter. The function will take a string as a parameter and should return a string as the output. More details are given below:

RCBF ist eine Menge von <a href="https://rosettacode.org/wiki/Brainf***" target="_blank" rel="noopener noreferrer nofollow">Brainf\*\*\*</a> Übersetzer und Interpeter, die für Rosetta Code in einer Vielzahl von Sprachen geschrieben wurde.

Unten findst du Links zu jeden Versionen von RCBF.

Eine Implementierung muss lediglich die folgenden Anweisungen ordnungsgemäß implementieren:

| Command                   | Beschreibung                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| <code>></code> | Move the pointer to the right                                                                  |
| <code>&lt;</code> | Bewege den Zeiger nach links                                                                   |
| <code>+</code> | Erhöhe die Speicherzelle des Zeigers                                                           |
| <code>-</code> | Verringere die Speicherzelle des Zeigers                                                       |
| <code>.</code> | Gebe das der Zelle zugehörige Zeichen am Zeiger aus                                            |
| <code>,</code> | Übergebe und speichere ein Zeichen in der Zelle des Zeigers                                    |
| <code>\[</code> | Überspringe das jeweilige <code>]</code>, wenn Zelle des Zeigers 0 ist               |
| <code>]</code> | Springe zum jeweiligen <code>[</code> zurück, wenn Zelle des Zeigers ein nonzero ist |

Jede Zellgröße ist erlaubt, EOF-Unterstützung (*E*nd-*O**F*ile – Ende der Datei) ist optional, je nachdem, ob es eine Speicherbegrenzung gibt.

# --hints--

`brain(bye)` sollte einen String zurückgeben

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++++++.")` should return "A"

```js
assert.equal(brain('++++++[>++++++++++++++.'), 'A');
```

`brain(bye)` sollte `Goodbye, World!\r\n` zurückgeben

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` sollte `Hello World!\n` zurückgeben

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` sollte `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89` zurückgeben

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

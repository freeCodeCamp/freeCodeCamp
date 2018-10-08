---
title: Execute a Markov algorithm
id: 59e09e6d412c5939baa02d16
localeTitle: 59e09e6d412c5939baa02d16
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Crear un intérprete para un <a href="https://en.wikipedia.org/wiki/Markov algorithm" title="wp: algoritmo de Markov">algoritmo de Markov</a> . </p><p> Las reglas tienen la sintaxis: </p> 
<p> <ruleset> :: = (( <comment> | <rule> ) <newline> +) * </p> 
<p> <comment> :: = # { <any character> } </p> 
<p> <rule> :: = <pattern><whitespace> -&gt; <whitespace> [.] <replacement></p> 
<p> <whitespace> :: = ( <tab> | <space> ) [ <whitespace> ] </p> 
<p> Hay una regla por línea. </p><p> Si hay un <b>.</b> (periodo) presente antes del <replacement> , entonces esta es una regla de terminación, en cuyo caso el intérprete debe detener la ejecución. </p><p> Un conjunto de reglas consiste en una secuencia de reglas, con comentarios opcionales. </p> 
<p> <big><big>Reglas</big></big> </p><p> Utilice las siguientes pruebas en las entradas: </p> 
Reglas 1: 
<pre> 
Este archivo de reglas se extrae de Wikipedia: 
http://en.wikipedia.org/wiki/Markov_AlgorithmA -&gt; apple 
B -&gt; bag 
S -&gt; shop 
T -&gt; the 
the shop -&gt; my brother 
a nunca usado -&gt; regla de terminación 
</pre> 
<p> Texto de ejemplo de: </p> 
<p> <code>I bought a B of As from T S.</code> </p> 
<p> Debe generar la salida: </p> 
<p> <code>I bought a bag of apples from my brother.</code> </p> 
Reglas 2: 
<p> Una prueba de la regla de terminación. </p> 
<pre> 
Modificado ligeramente de las reglas de WikipediaA -&gt; manzana 
B -&gt; bolsa 
S -&gt; .shop 
T -&gt; el 
la tienda -&gt; mi hermano 
una regla nunca utilizada -&gt; .terminating </pre> 
<p> Texto de ejemplo de: </p> 
<p> <code>I bought a B of As from T S.</code> </p> 
<p> Debe generar: </p> 
<p> <code>I bought a bag of apples from T shop.</code> </p> 
Reglas 3: 
<p> Esto prueba el orden de sustitución correcto y puede interceptar rutinas de reemplazo basadas en expresiones regulares simples si no se escapan los caracteres de expresiones regulares especiales. </p> 
<pre> 
BNF Reglas de prueba de sintaxisA -&gt; apple 
WWWW -&gt; con 
Bgage -&gt; -&gt;. * 
B -&gt; bolsa 
-&gt;. * -&gt; money 
W -&gt; WW 
S -&gt; .shop 
T -&gt; the 
la tienda -&gt; mi hermano 
a nunca usado -&gt; .terminando la regla 
</pre> 
<p> Texto de ejemplo de: </p> 
<p> <code>I bought a B of As W my Bgage from T S.</code> </p> 
<p> Debe generar: </p> 
<p> <code>I bought a bag of apples with my money from T shop.</code> </p> 
Reglas 4: 
<p> Esto prueba el orden correcto de escaneo de las reglas y puede interceptar las rutinas de reemplazo que escanean en el orden incorrecto. Implementa un motor general de multiplicación unaria. (Tenga en cuenta que la expresión de entrada se debe colocar dentro de los guiones bajos en esta implementación). </p> 
<pre> 
## Unary Multiplication Engine, para probar las implementaciones del algoritmo de Markov 
## Por Donal Fellows. 
Motor de suma unitaria_ + 1 -&gt; _1 + 
1 + 1 -&gt; 11+ 
Pase para convertir de la división de la multiplicación en 
suma ordinaria1! -&gt;! 1 
,! -&gt;! + 
_! -&gt; _ 
Multiplicación unaria duplicando el lado izquierdo, lado derecho veces1 * 1 -&gt; x, @ y 
1x -&gt; xX 
X, -&gt; 1,1 
X1 -&gt; 1X 
_x -&gt; _X 
, x -&gt; , X 
y1 -&gt; 1y 
y_ -&gt; _ 
Siguiente fase de aplicación1 @ 1 -&gt; x, @ y 
1 @ _ -&gt; @_ 
, @ _ ​​-&gt;! _ 
++ -&gt; + 
Limpieza de terminación para el agregado_1 -&gt; 1 
1 + _ -&gt; 1 
_ + _ -&gt; 
</pre> 
<p> Texto de ejemplo de: </p> 
<p> <code>_1111*11111_</code> </p> 
<p> debe generar la salida: </p> 
<p> <code>11111111111111111111</code> </p> 
Reglas 5: 
<p> Una simple <a href="http://en.wikipedia.org/wiki/Turing_machine" title="enlace: http://en.wikipedia.org/wiki/Turing_machine">máquina de Turing</a> , </p> 
<p> Implementando un <a href="http://en.wikipedia.org/wiki/Busy_beaver" title="enlace: http://en.wikipedia.org/wiki/Busy_beaver">castor ocupado de</a> tres estados. </p><p> La cinta consta de 0s y 1s, los estados son A, B, C y H (para Halt), y la posición del encabezado se indica escribiendo la letra del estado antes del carácter donde está el encabezado. </p> 
<p> Todas las partes de la cinta inicial en la que opera la máquina deben incluirse en la entrada. </p><p> Además de demostrar que el algoritmo de Markov está completo en Turing, también me hizo detectar un error en la implementación de C ++ que no se detectó en los primeros cuatro conjuntos de reglas. </p> 
<pre> 
Máquina de Turing: castor ocupado de tres estados 
# estado A, símbolo 0 =&gt; escribir 1, mover a la derecha, nuevo estado BA0 -&gt; 1B 
estado A, símbolo 1 =&gt; escribir 1, mover a la izquierda, nuevo estado C0A1 -&gt; C01 
1A1 -&gt; C11 
estado B, símbolo 0 =&gt; escritura 1, mover a la izquierda, nuevo estado A0B0 -&gt; A01 
1B0 -&gt; A11 
estado B, símbolo 1 =&gt; escribir 1, mover a la derecha, nuevo estado BB1 -&gt; 1B 
estado C, símbolo 0 =&gt; escribir 1, mover a la izquierda, nuevo estado B0C0 -&gt; B01 
1C0 -&gt; B11 
estado C, símbolo 1 =&gt; escribir 1, mover a la izquierda, halt0C1 -&gt; H01 
1C1 -&gt; H11 
</pre> 
<p> Este conjunto de reglas debe girar </p> 
<p> <code>000000A000000</code> </p> 
<p> dentro </p> 
<p> <code>00011H1111000</code> </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>markov</code> es una función.
    testString: 'assert(typeof markov === "function", "<code>markov</code> is a function.");'
  - text: &#39; <code>markov([&quot;A -&gt; apple&quot;,&quot;B -&gt; bag&quot;,&quot;S -&gt; shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As from T S.&quot;)</code> debería devolver&quot; Compré una bolsa de manzanas de mi hermano &quot;.
    testString: 'assert.deepEqual(markov(rules[0],tests[0]),outputs[0],"<code>markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from my brother.".");'
  - text: &#39; <code>markov([&quot;A -&gt; apple&quot;,&quot;B -&gt; bag&quot;,&quot;S -&gt; .shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As from T S.&quot;)</code> debería devolver&quot; Compré una bolsa de manzanas en la tienda de T &quot;.
    testString: 'assert.deepEqual(markov(rules[1],tests[1]),outputs[1],"<code>markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")</code> should return "I bought a bag of apples from T shop.".");'
  - text: &#39; <code>markov([&quot;A -&gt; apple&quot;,&quot;WWWW -&gt; with&quot;,&quot;Bgage -&gt; -&gt;.*&quot;,&quot;B -&gt; bag&quot;,&quot;-&gt;.* -&gt; money&quot;,&quot;W -&gt; WW&quot;,&quot;S -&gt; .shop&quot;,&quot;T -&gt; the&quot;,&quot;the shop -&gt; my brother&quot;,&quot;a never used -&gt; .terminating rule&quot;],&quot;I bought a B of As W my Bgage from T S.&quot;)</code> debería devolver&quot; Compré una bolsa de manzanas con mi dinero de la tienda &quot;. &#39;
    testString: 'assert.deepEqual(markov(rules[2],tests[2]),outputs[2],"<code>markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")</code> should return "I bought a bag of apples with my money from T shop.".");'
  - text: &#39; <code>markov([&quot;_+1 -&gt; _1+&quot;,&quot;1+1 -&gt; 11+&quot;,&quot;1! -&gt; !1&quot;,&quot;,! -&gt; !+&quot;,&quot;_! -&gt; _&quot;,&quot;1*1 -&gt; x,@y&quot;,&quot;1x -&gt; xX&quot;,&quot;X, -&gt; 1,1&quot;,&quot;X1 -&gt; 1X&quot;,&quot;_x -&gt; _X&quot;,&quot;,x -&gt; ,X&quot;,&quot;y1 -&gt; 1y&quot;,&quot;y_ -&gt; _&quot;,&quot;1@1 -&gt; x,@y&quot;,&quot;1@_ -&gt; @_&quot;,&quot;,@_ -&gt; !_&quot;,&quot;++ -&gt; +&quot;,&quot;_1 -&gt; 1&quot;,&quot;1+_ -&gt; 1&quot;,&quot;_+_ -&gt; &quot;],&quot;_1111*11111_&quot;)</code> debe devolver&quot; 11111111111111111111 &quot;. &#39;
    testString: 'assert.deepEqual(markov(rules[3],tests[3]),outputs[3],"<code>markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")</code> should return "11111111111111111111".");'
  - text: &#39; <code>markov([&quot;A0 -&gt; 1B&quot;,&quot;0A1 -&gt; C01&quot;,&quot;1A1 -&gt; C11&quot;,&quot;0B0 -&gt; A01&quot;,&quot;1B0 -&gt; A11&quot;,&quot;B1 -&gt; 1B&quot;,&quot;0C0 -&gt; B01&quot;,&quot;1C0 -&gt; B11&quot;,&quot;0C1 -&gt; H01&quot;,&quot;1C1 -&gt; H11&quot;],&quot;&quot;)</code> debe devolver&quot; 00011H1111000 &quot;. &#39;
    testString: 'assert.deepEqual(markov(rules[4],tests[4]),outputs[4],"<code>markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")</code> should return "00011H1111000".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function markov (rules,test) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function markov(rules,test) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origTest = test;

    let captures = [];

    rules.forEach(function(rule){
		let m = pattern.exec(rule);
		for (let j = 0; j < m.length; j++)
		    m[j] = m[j + 1];
		captures.push(m);
    });

    test = origTest;
    let copy = test;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        test = test.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (test!=copy) {
            j = -1;
            copy = test;
        }
    }
    return test;
}

// tail:
let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
			["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
			["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
			["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
			["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let tests=["I bought a B of As from T S.",
			"I bought a B of As from T S.",
			"I bought a B of As W my Bgage from T S.",
			"_1111*11111_",
			"000000A000000"];
let outputs=["I bought a bag of apples from my brother.",
			"I bought a bag of apples from T shop.",
			"I bought a bag of apples with my money from T shop.",
			"11111111111111111111",
			"00011H1111000"];
```

</section>

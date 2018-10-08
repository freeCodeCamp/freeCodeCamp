---
title: 'Sailors, coconuts and a monkey problem'
id: 59da22823d04c95919d46269
localeTitle: 59da22823d04c95919d46269
challengeType: 5
---

## Description
<section id='description'> 
<p> 
Cinco marineros naufragan en una isla y 
recogen una gran pila de cocos durante el día. 
</p> 
<p> Esa noche, el primer marinero se despierta y decide 
tomar su primera parte temprano, así que trata de dividir el montón de cocos igualmente 
en cinco pilas, pero encuentra que le queda un coco, así que lo arroja 
a un mono y luego se esconde. &quot;su&quot; uno de los cinco pilas de igual tamaño de 
cocos y empuja los otros cuatro pilas juntas para formar una única pila visible 
de cocos otra vez y va a la cama. 
</p> 
<p> 
Para abreviar una larga historia, cada uno de los marineros en 
turnos se levanta una vez durante la noche y realiza las mismas acciones de dividir 
la pila de coco en cinco, encontrando que queda un coco y le da 
ese resto de coco. el mono. 
</p> 
<p> 
En la mañana (después de la subrepticia y 
acción separada de cada uno de los cinco marineros durante la noche), los restantes 
cocos se dividen en cinco pilas iguales para cada uno de los marineros, después de lo cual 
se encuentra que la pila de cocos divide Igualmente entre los marineros con 
sin resto. (Nada para el mono por la mañana.) 
</p> 

La tarea: 


Crea una función que devuelva al 
el tamaño mínimo posible 
de la pila inicial de cocos recolectada durante el día para los navegantes N 
. 


Nota: 


Por supuesto, la historia se cuenta en un mundo 
donde la recolección de cualquier cantidad de cocos en un día y varias divisiones 
de la pila, etc., puede ocurrir al tiempo que se ajusta a la línea de la historia, por lo que 
No afectar a las matemáticas. 



Cf: 

<a<code> 0 href = &quot;https://www.youtube.com/watch?v=U9qU20VmvaU&quot; title = &quot;enlace: https://www.youtube.com/watch?v=U9qU20VmvaU&quot;&gt; 
Monkeys and Coconuts - Numberphile (Video ) Solucion analitica. 


<a<code> 0 href = &quot;http://oeis.org/A002021&quot; title = &quot;link: http://oeis.org/A002021&quot;&gt;A002021 Problema con la pila de cocos La Enciclopedia en línea 
de secuencias de números enteros. (Aunque algunas de sus referencias pueden usar 
la forma alternativa del cuento). 



</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>splitCoconuts</code> es una función.
    testString: 'assert(typeof splitCoconuts === "function", "<code>splitCoconuts</code> is a function.");'
  - text: <code>splitCoconuts(5)</code> debe devolver 3121.
    testString: 'assert(splitCoconuts(5) === 3121, "<code>splitCoconuts(5)</code> should return 3121.");'
  - text: <code>splitCoconuts(6)</code> debe devolver 233275.
    testString: 'assert(splitCoconuts(6) === 233275, "<code>splitCoconuts(6)</code> should return 233275.");'
  - text: <code>splitCoconuts(7)</code> debe devolver 823537.
    testString: 'assert(splitCoconuts(7) === 823537, "<code>splitCoconuts(7)</code> should return 823537.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function splitCoconuts(intSailors) {
  // Good luck!
  return true;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
// noprotect
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}

```

</section>

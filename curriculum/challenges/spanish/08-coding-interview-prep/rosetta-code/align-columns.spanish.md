---
title: Align columns
id: 594810f028c0303b75339ad0
localeTitle: 594810f028c0303b75339ad0
challengeType: 5
---

## Description
<section id='description'> 
<p> Dado un archivo de texto de muchas líneas, donde los campos dentro de una línea están delineados por un solo carácter de <code>$</code> , escriba un programa que alinee cada columna de campos asegurándose de que las palabras en cada columna estén separadas por al menos un espacio. Además, permita que cada palabra en una columna se justifique a la izquierda, a la derecha o al centro dentro de su columna. </p> 
<p> Usa el siguiente texto para probar tus programas: </p> 
<pre> 
Dado $ a $ texto $ archivo $ de $ muchas $ líneas 
donde $ campos $ dentro de $ a $ línea $ 
son $ delineados $ por $ a $ simple $ &#39;dólar&#39; $ carácter 
escribe $ a $ programa 
ese $ alinea $ cada $ columna $ de $ campos 
por $ asegurando $ que $ palabras $ en $ cada $ 
columna $ están $ separados $ por $ en $ al menos $ un $ espacio. 
Además, $ permita $ por $ cada $ palabra $ en $ a $ columna $ a $ sea $ o bien $ dejó $ 
justificado, $ derecho $ justificó 
o $ centro $ justificado dentro de $ su $ columna. 
</pre> 
<p> Tenga en cuenta que: </p> 
Las líneas de texto de entrada de ejemplo pueden, o no, tener caracteres de dólar al final. 
Todas las columnas deben compartir la misma alineación. 
Los caracteres de espacio consecutivo producidos adyacentes al final de las líneas son insignificantes para los propósitos de la tarea. 
El texto de salida se verá en una fuente mono-espaciada en un editor de texto plano o terminal básico. 
El espacio mínimo entre columnas debe calcularse a partir del texto y no estar codificado. 
No es un requisito agregar caracteres de separación entre o alrededor de las columnas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>formatText</code> es una función.
    testString: 'assert(typeof formatText === "function", "<code>formatText</code> is a function.");'
  - text: &#39; <code>formatText</code> con la entrada anterior y la justificación &quot;correcta&quot; debe producir lo siguiente:&#39;
    testString: 'assert.strictEqual(formatText(testInput, "right"), rightAligned, "<code>formatText</code> with the above input and "right" justification should produce the following: ");'
  - text: &#39; <code>formatText</code> con la entrada anterior y la justificación &quot;izquierda&quot; debe producir lo siguiente:&#39;
    testString: 'assert.strictEqual(formatText(testInput, "left"), leftAligned, "<code>formatText</code> with the above input and "left" justification should produce the following: ");'
  - text: &#39; <code>formatText</code> con la entrada anterior y la justificación &quot;central&quot; debe producir lo siguiente:&#39;
    testString: 'assert.strictEqual(formatText(testInput, "center"), centerAligned, "<code>formatText</code> with the above input and "center" justification should produce the following: ");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

function formatText (input, justification) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

String.prototype.repeat = function (n) { return new Array(1 + parseInt(n)).join(this); };

function formatText (input, justification) {
  let x, y, max, cols = 0, diff, left, right;
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].split('$');
    if (input[x].length > cols) {
      cols = input[x].length;
    }
  }
  for (x = 0; x < cols; x++) {
    max = 0;
    for (y = 0; y < input.length; y++) {
      if (input[y][x] && max < input[y][x].length) {
        max = input[y][x].length;
      }
    }
    for (y = 0; y < input.length; y++) {
      if (input[y][x]) {
        diff = (max - input[y][x].length) / 2;
        left = ' '.repeat(Math.floor(diff));
        right = ' '.repeat(Math.ceil(diff));
        if (justification === 'left') {
          right += left; left = ";
        }
        if (justification === 'right') {
          left += right; right = ";
        }
        input[y][x] = left + input[y][x] + right;
      }
    }
  }
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].join(' ');
  }
  input = input.join('\n');
  return input;
}

```

</section>

---
title: Comparison Operators
localeTitle: Operadores de Comparação
---
O JavaScript possui comparações de **conversão** **estrita** e de **tipo** .

*   Uma comparação estrita (por exemplo, ===) só é verdadeira se os operandos forem do mesmo tipo.
    
*   A comparação abstrata mais usada (por exemplo, ==) converte os operandos para o mesmo tipo antes de fazer a comparação.
    
*   Para comparações abstratas relacionais (por exemplo, <=), os operandos são primeiro convertidos em primitivos, depois para o mesmo tipo, antes da comparação.
    
*   As cadeias de caracteres são comparadas com base na ordem lexicográfica padrão, usando valores Unicode.
    

## Recursos de comparações:

*   Duas strings são estritamente iguais quando possuem a mesma sequência de caracteres, o mesmo comprimento e os mesmos caracteres nas posições correspondentes.
    
*   Dois números são estritamente iguais quando são numericamente iguais (possuem o mesmo valor numérico). NaN não é igual a nada, incluindo NaN. Zeros positivos e negativos são iguais entre si.
    
*   Dois operandos booleanos são estritamente iguais se ambos forem verdadeiros ou se ambos forem falsos.
    
*   Dois objetos distintos nunca são iguais para comparações estritas ou abstratas.
    
*   Uma expressão comparando Objetos só é verdadeira se os operandos fizerem referência ao mesmo Objeto.
    
*   Tipos nulos e indefinidos são estritamente iguais a si mesmos e abstratamente iguais entre si.
    

## Operadores de igualdade

### Igualdade (==)

O operador de igualdade converte os operandos, se eles **não** forem **do mesmo tipo** , e aplicará uma comparação estrita. Se **ambos os operandos são objetos** , então o JavaScript compara referências internas que são iguais quando operandos se referem ao mesmo objeto na memória.

#### Sintaxe
```
 x == y 
```

#### Exemplos
```
 1   ==  1        // true 
 "1"  ==  1        // true 
 1   == '1'       // true 
 0   == false     // true 
 0   == null      // false 
 
   0   == undefined   // false 
 null  == undefined   // true 
```

### Desigualdade (! =)

O operador de desigualdade retorna verdadeiro se os operandos não forem iguais. Se os dois operandos **não** forem **do mesmo tipo** , o JavaScript tentará converter os operandos em um tipo apropriado para a comparação. Se os **dois operandos são objetos** , o JavaScript compara referências internas que não são iguais quando operandos se referem a objetos diferentes na memória.

#### Sintaxe
```
x != y 
```

#### Exemplos
```
1 !=   2     // true 
 1 !=  "1"    // false 
 1 !=  '1'    // false 
 1 !=  true   // false 
 0 !=  false  // false 
```

### Identidade / igualdade estrita (===)

O operador de identidade retorna true se os operandos forem estritamente iguais **sem conversão de tipo** .

#### Sintaxe
```
x === y 
```

#### Exemplos
```
3 === 3   // true 
 3 === '3' // false 
```

### Não identidade / desigualdade estrita (! ==)

O operador não identificador retorna true se os operandos **não forem iguais e / ou não do mesmo tipo** .

#### Sintaxe
```
x !== y 
```

#### Exemplos
```
3 !== '3' // true 
 4 !== 3   // true 
```

## Operadores relacionais

### Maior que o operador (>)

O operador maior que retorna true se o operando esquerdo for maior que o operando direito.

#### Sintaxe
```
x > y 
```

#### Exemplos
```
4 > 3 // true 
```

### Operador maior que ou igual (> =)

O operador maior que ou igual retorna verdadeiro se o operando esquerdo for maior ou igual ao operando direito.

#### Sintaxe
```
x >= y 
```

#### Exemplos
```
4 >= 3 // true 
 3 >= 3 // true 
```

### Menos que o operador (<)

O operador menor que retorna true se o operando esquerdo for menor que o operando direito.

#### Sintaxe
```
x < y 
```

#### Exemplos
```
3 < 4 // true 
```

### Operador menor que ou igual (<=)

O operador menor que ou igual retorna verdadeiro se o operando esquerdo for menor ou igual ao operando direito.

#### Sintaxe
```
x <= y 
```

#### Exemplos
```
3 <= 4 // true 
```

_Você pode encontrar mais informações no [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ._

## Comparando null e undefined

Quando comparamos nulo e indefinido, vemos um comportamento diferente. Vamos verificar diferentes cenários através de exemplos

#### Exemplo - verificação de igualdade estrita (===)

console.log (null === indefinido); // O / P - falso

Otuput é falso e isso é correto porque sabemos que "nulo" e "indefinido" são tipos diferentes.

#### Exemplo - verificação de igualdade não estrita (==)

console.log (null == indefinido); // O / P: - true

Como? Isso ocorre porque existe uma regra especial para "null" e "undefined". Devido a que eles são iguais em caso de verificação não estrita (==), mas não são iguais a qualquer outro valor.

Se usarmos operadores de comparação como <,>, <=,> = etc., "nulo" e "indefinido" serão convertidos em números e, nesses casos, "nulo" se tornará 0 e "indefinido" será NaN. Vamos verificar alguns desses exemplos.

#### Exemplo - comparar nulo com 0 (zero)

console.log (nulo> 0); // O / P - falso console.log (null> = 0); // O / P - true console.log (null == 0); // O / P - falso

Estranho? De acordo com a primeira instrução, nulo não é maior que 0 e da segunda instrução nulo é maior ou igual a 0. Então, se pensarmos matematicamente e compararmos ambas as declarações, chegaremos ao resultado que nulo é igual a 0. Mas , conforme a terceira afirmação não é verdadeira. Por quê?

A razão é "comparação" e "verificação de igualdade" ambos funcionam de maneira diferente. Em comparação, "null / undefined" é primeiro convertido em number, portanto, nos dois primeiros casos, "null" se torna 0 e, portanto, case1) (null> 0) -> false e case2) (null> = 0) -> true. Mas, na verificação de igualdade (==), "null / undefined" funciona sem qualquer conversão e como explicado acima (regra especial), na verificação de igualdade "null / undefined" são apenas iguais entre si e não são iguais a qualquer outra coisa. Daí (null == 0) -> falso.

#### Exemplo - comparar indefinido com 0 (zero)

console.log (indefinido> 0); // O / P - falso console.log (indefinido> = 0); // O / P - falso console.log (indefinido == 0); // O / P - falso

Aqui, testamos os mesmos casos que fizemos para null, mas novamente o resultado é diferente. Por quê?

As razões são as seguintes. Nos dois primeiros casos, estamos comparando undefined com 0 e como mencionado acima na comparação undefined é convertido para NaN. NaN é um valor especial que sempre retorna falso quando comparado com qualquer número e é por isso que temos resultados falsos nos dois primeiros casos. Para a terceira instrução, a razão é a mesma mencionada para "null". Na verificação de igualdade, "null / undefined" são apenas iguais entre si e não iguais a qualquer outra coisa. Daí (indefinido == 0) -> falso.
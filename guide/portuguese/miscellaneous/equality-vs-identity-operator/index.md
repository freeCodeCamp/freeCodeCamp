---
title: Equality Vs Identity Operator
localeTitle: Equality Vs Identity Operator
---
No JavaScript, existem 2 operadores que podem ser usados ​​para comparar dois valores: _\==_ e _\===_ . Eles parecem ser exatamente iguais, mas funcionam de forma diferente e, em alguns casos, dão resultados diferentes.

## Operador de capital

O operador de igualdade (==) compara dois valores após todas as conversões de tipo necessárias. Vamos dar uma olhada em alguns exemplos:
```
0 == ''             // -> true 
 false == 'false'    // -> false 
```

No primeiro exemplo, tanto 0 quanto '' (string vazia) sofrem conversão automática. Ambos são convertidos em falsas doações:
```
false == false 
```

O que é obviamente _verdade_ . No segundo exemplo _'false'_ , uma String não vazia é avaliada como true, tornando toda a expressão falsa.

## Operador de identidade

Em comparação, o operador de identidade (===) retornará verdadeiro se e somente se ambos os valores que estão sendo comparados forem do mesmo tipo e tiverem o mesmo valor. Se tentarmos comparar valores de dois tipos diferentes, ele sempre retornará _falso_ .
```
false === 0            // -> false 
 0 === ''              // -> false 
 5 === 5                  // -> true 
```

Para ser preciso, === verifica se duas variáveis ​​referenciam o mesmo objeto, ou no caso de tipos de valor (como _int_ , _double_ , _String_ , _bool_ , etc.) se ambos tiverem o mesmo valor.
```
var array1 = [ 5, 6, 7 ]; 
 var array2 = [ 5, 6, 7 ]; 
 var array3 = array2; 
 
 array1 === array2      // -> false 
 array1 == array2      // -> false 
 
 array2 === array3      // -> true 
 array2 == array3      // -> true 
```

Tanto _array1_ quanto _array2_ têm o mesmo tipo e são iguais, mas _array1 de_ comparação _\=== array2_ retorna false, pois se referem a objetos diferentes. _array2 === array3_ retorna verdadeiro como as duas variáveis ​​se referem ao mesmo objeto.

## Qual operadora devo usar?

É importante entender a diferença entre _\==_ e _\===,_ mas qual operador deve ser usado?

Ao usar o operador _\==_ , o JavaScript realizará todas as conversões necessárias para comparar dois valores. Parece ser muito conveniente, mas os efeitos dessa conversão podem ser confusos e causar muito dificuldade em rastrear bugs.

Douglas Crockford, autor do livro _JavaScript: The Good Parts_ sugere que _\===_ deve ser usado em todos os lugares, ao invés do operador _\==_ para evitar possíveis erros. Na maioria dos casos, você deve seguir este conselho, a menos que queira especificamente aproveitar a conversão de tipo automática.
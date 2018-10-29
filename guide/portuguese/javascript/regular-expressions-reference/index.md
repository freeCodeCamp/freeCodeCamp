---
title: Regular Expressions Reference
localeTitle: Referência de expressões regulares
---
## Referência de expressões regulares

Em JavaScript, as expressões regulares são um atalho usado para corresponder à parte desejada de uma string. Isso é benéfico ao tentar manipular ou validar as strings usadas no seu código.

### Sintaxe

Expressões regulares são compostas de duas partes - o `pattern` e as `flags` (opcional). O padrão é gravado entre duas barras, seguido pelos sinalizadores opcionais: `var exp = /pattern/flags` .

#### Padrões

O uso de caracteres alfanuméricos (AZ, az, 0-9) faz uma correspondência direta. No entanto, o poder real das expressões regulares vem com classes de caracteres.

Digamos, por exemplo, você quer para todos os lugares uma string que tenha um número de 0 a 9. Em vez de chamar explicitamente `/[0-9]/` , você pode usar a classe de caractere especial de `/\d/` . A barra invertida escapa do caractere `d` (portanto, não corresponde à letra `d` ), mas usa as habilidades de correspondência especiais de `\d` .

Esse mesmo princípio se aplica a caracteres não numéricos, espaços em branco e outros grupos de correspondência ampla. Expressões regulares podem se tornar ainda mais sofisticadas com o uso de certos modificadores, como o caractere `+` .

Esse quantificador permite que você corresponda ao caractere precedente em seu padrão uma ou mais vezes. `/s+/` iria coincidir com os `s` no `desert` e os dois `s` 's em `dessert` !

Há muito mais modificadores que permitem que seu padrão corresponda ao que você possa precisar. Veja a seção More Information abaixo para ver todas as opções de caracteres possíveis para uso em expressões regulares.

#### Bandeiras

Existem 5 sinalizadores que você pode usar para aplicar regras específicas a toda a expressão regular que está escrevendo. Eles são:

`g` - o jogo global; Isso permite que você corresponda a todas as instâncias de sua expressão, em vez de parar após a primeira ocorrência.

`i` - o caso de ignorar correspondência (auto-explicativo)

`m` - o jogo de várias linhas; isso aplica seu padrão a cada linha como nova; Se você estiver procurando por uma linha que comece com um padrão específico, isso será feito para todas as linhas, em vez de apenas para a primeira.

`u` - a correspondência Unicode; isso sinaliza para ler seu padrão como Unicode em vez de texto simples

`y` - o fósforo pegajoso; isso corresponde ao seu padrão somente começando no índice encontrado na propriedade `RegExp.lastIndex`

### Criando uma expressão regular

Uma expressão regular é um tipo de objeto. Pode ser construído com o construtor RegExp ou escrito como um valor literal, colocando o padrão em caracteres de barra (/).
```
var re1 = new RegExp (" abc ") ; 
 var re2 = / abc /; 
```

Ambos os objetos de expressão regular representam o mesmo padrão: um um caractere seguido por ab seguido por um c.

### O objeto RegExp

`RegExp` é um construtor que cria um objeto a partir do padrão de expressão regular que você cria. Além da notação literal descrita acima, você também pode usar o formato do construtor para criar uma expressão regular: `new RegExp(pattern[, flags])`

### Teste para jogos
```
console . log (/ abc /. test (" abcde ") ); 
 // → true 
 console . log (/ abc /. test (" abxde ") ); 
 // → false 
```

### Combinando um conjunto de caracteres
```
console . log (/[0123456789]/. test (" in 1992") ); 
 // → true 
 console . log (/[0 -9]/. test (" in 1992") ); 
 // → true 
```

### Padrões de escolha
```
var animalCount = /\ b \ d + ( pig | cow | chicken )s ?\ b /; 
 console . log ( animalCount . test ("15 pigs ") ); 
 // → true 
 console . log ( animalCount . test ("15 pigchickens ") ); 
 // → false 
```

#### Métodos

Você provavelmente usará expressões regulares nos métodos `String` , como `String.replace()` , mas há alguns métodos que pertencem ao objeto `RegExp` .

Por exemplo, `RegExp.test()` retornará um booleano para saber se existe uma correspondência entre o padrão de expressão regular e a sequência em questão. `RegExp.toString()` irá transformar o objeto de expressão em uma string, o que pode ser útil ao executar testes em seu código.

O primeiro argumento também pode ser uma expressão regular, caso em que a primeira correspondência da expressão regular é substituída. Quando a opção ag (para global) é adicionada à expressão regular, todas as correspondências na sequência serão substituídas, não apenas a primeira.
```
console . log (" Borobudur ". replace (/[ ou ]/ , "a ") ); 
 // → Barobudur 
 console . log (" Borobudur ". replace (/[ ou ]/g , "a ") ); 
 // → Barabadar 
```

### Mais Informações:

*   [Aqui você pode ler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) sobre todos os caracteres de correspondência de padrões, propriedades de objetos, ver alguns exemplos e mais.
    
*   [Aqui está um ótimo site](https://regex101.com/) que permite testar padrões de expressão regular em tempo real, salvar seus favoritos e explorar padrões criados por outras pessoas.
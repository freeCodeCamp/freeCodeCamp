---
title: Caesars Cipher
localeTitle: Cifra Caesars
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

*   Você precisa escrever uma função, que terá uma string codificada com a _cifra de César_ como um parâmetro e decodificá-la.
*   O usado aqui é ROT13, onde o valor da carta é deslocado por 13 lugares. por exemplo, 'A' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'N', 'T' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'G'.
*   Você tem que mudar 13 posições, de tal forma que 'N' ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'UMA'.

#### Links Relevantes

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Use _String.charCodeAt ()_ para converter o caractere em inglês para ASCII.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Use _String.fromCharCode ()_ para converter ASCII em inglês.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Deixe qualquer coisa que não esteja entre o AZ como está.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function rot13(str) { 
      // Split str into a character array 
      return str.split('') 
      // Iterate over each character in the array 
        .map.call(str, function(char) { 
          // Convert char to a character code 
          x = char.charCodeAt(0); 
          // Checks if character lies between AZ 
          if (x < 65 || x > 90) { 
            return String.fromCharCode(x);  // Return un-converted character 
          } 
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places 
          else if (x < 78) { 
            return String.fromCharCode(x + 13); 
          } 
          // Otherwise shift the character 13 places backward 
          return String.fromCharCode(x - 13); 
        }).join('');  // Rejoin the array into a string 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/38)

### Explicação do código:

*   Uma variável de string `nstr` é declarada e inicializada para armazenar a string decodificada.
*   O loop for é usado para percorrer cada caractere da string de entrada.
*   Se o caracter não for alfabético inglês em maiúsculas (ou seja, seu ascii não fica entre 65 e 91), deixaremos como está e [continuaremos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) com a próxima iteração.
*   Se for o alfabeto em letras maiúsculas, subtrairemos 13 do seu código ascii.
*   Se o código ascii for menor que 78, ele ficará fora do intervalo quando subtraído por 13, então adicionaremos 26 (número de letras em alfabetos em inglês) para que, depois de A, ele volte para Z. por exemplo, M (77) ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 77-13 = 64 (não é um alfabeto inglês) +26 = 90 ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") Z (90).

#### Links Relevantes

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    // Solution with Regular expression and Array of ASCII character codes 
    function rot13(str) { 
      var rotCharArray = []; 
      var regEx = /[AZ]/ ; 
      str = str.split(""); 
      for (var x in str) { 
        if (regEx.test(str[x])) { 
          // A more general approach 
          // possible because of modular arithmetic 
          // and cyclic nature of rot13 transform 
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65); 
        } else { 
          rotCharArray.push(str[x].charCodeAt()); 
        } 
      } 
      str = String.fromCharCode.apply(String, rotCharArray); 
      return str; 
    } 
 
    // Change the inputs below to test 
    rot13("LBH QVQ VG!"); 
```

### Explicação do código:

*   Uma matriz vazia é criada em uma variável chamada `rotCharArray` para armazenar os códigos de caracteres.
*   A variável `regEx` armazena uma expressão regular para todas as letras maiúsculas de A a Z.
*   Nós dividimos `str` em uma matriz de caracteres e, em seguida, usamos um loop for para percorrer cada caractere na matriz.
*   Usando uma instrução if, testamos para ver se a string contém apenas letras maiúsculas de A a Z.
*   Se retornar true, usamos a função `charCodeAt()` e a transformação rot13 para retornar o valor correto, caso contrário, retornaremos o valor inicial.
*   Em seguida, retornamos a string com os códigos de caracteres da variável `rotCharArray` .

### Algoritmo Explicação:
```
ALPHA    KEY BASE             ROTATED    ROT13 
 ------------------------------------------------------------- 
 [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N] 
 [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O] 
 [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P] 
 [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q] 
 [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R] 
 [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S] 
 [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T] 
 [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U] 
 [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V] 
 [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W] 
 [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X] 
 [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y] 
 [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z] 
 [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A] 
 [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B] 
 [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C] 
 [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D] 
 [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E] 
 [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F] 
 [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G] 
 [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H] 
 [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I] 
 [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J] 
 [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K] 
 [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L] 
 [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M] 
```

#### Links Relevantes

*   [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [Regex](https://forum.freecodecamp.com/t/regular-expressions-resources/15931)
*   [Regex.test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/39)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function rot13(str) { // LBH QVQ VG! 
  return str.replace(/[AZ]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65)); 
 } 
```

### Algoritmo Explicação:

Entender o operador de módulo ( _às vezes chamado de operador de módulo_ ) simbolicamente representado como `%` em JavaScript é a chave para entender o algoritmo.  
Este é um operador interessante que aparece em vários lugares da Engenharia, por exemplo, em criptografia.

Basicamente, operado em um número, ele divide o número pelo divisor dado e fornece o resto da divisão.  
Por exemplo,

*   `0 % 5 = 0` porque `0 / 5 = 0` e o restante é `0` .
    
*   `2 % 5 = 2` porque `2 / 5 = 0` e o restante é `2`
    
*   `4 % 5 = 4` porque `4 / 5 = 0` e o restante é `4`
    
*   `5 % 5 = 0` porque `5 / 5 = 1` e o restante é `0`
    
*   `7 % 5 = 2` porque `7 / 5 = 1` e o restante é `2`
    
*   `9 % 5 = 4` porque `9 / 5 = 1` e o restante é `4`
    
*   `10 % 5 = 0` porque `10 / 5 = 2` e o restante é `0`
    

Mas você deve ter notado um padrão aqui.  
Como você deve ter notado, o incrível operador de módulo envolve o valor de LHS quando ele atinge apenas múltiplos do valor de RHS.  
por exemplo, no nosso caso, quando `LHS = 5` , o resultado é `0`  
OU  
quando `LHS = 10` , passou novamente para `0` .

Assim, vemos o seguinte padrão emergindo
```
 0 ⇔ 0 
 1 ⇔ 1 
 2 ⇔ 2 
 3 ⇔ 3 
 4 ⇔ 4 
 5 ⇔ 0 
 6 ⇔ 1 
 7 ⇔ 2 
 8 ⇔ 3 
 9 ⇔ 4 
 10 ⇔ 0 
```

Portanto, concluímos que, usando o operador de módulo, é possível mapear um intervalo de valores para um intervalo entre \[ `0` a `DIVISOR - 1` \]. No nosso caso, mapeamos \[ `5 - 9` \] entre \[ `0 - 4` \] ou mapeamos \[ `6 - 10` \] entre \[ `0 - 4` \].

Você entendeu até isso?

Agora, vamos considerar o mapeamento de um intervalo de `26` números, isto é, entre \[ `65 - 90` \], que representa maiúsculas \[ **alfabetos ingleses** \] no [conjunto de caracteres Unicode](http://unicode-table.com/en/alphabets/) para um intervalo de números entre \[ `0 - 25` \].
```
[A]  65 % 26 ⇔ 13 
 [B]  66 % 26 ⇔ 14 
 [C]  67 % 26 ⇔ 15 
 [D]  68 % 26 ⇔ 16 
 [E]  69 % 26 ⇔ 17 
 [F]  70 % 26 ⇔ 18 
 [G]  71 % 26 ⇔ 19 
 [H]  72 % 26 ⇔ 20 
 [I]  73 % 26 ⇔ 21 
 [J]  74 % 26 ⇔ 22 
 [K]  75 % 26 ⇔ 23 
 [L]  76 % 26 ⇔ 24 
 [M]  77 % 26 ⇔ 25 
 [N]  78 % 26 ⇔  0 
 [O]  79 % 26 ⇔  1 
 [P]  80 % 26 ⇔  2 
 [Q]  81 % 26 ⇔  3 
 [R]  82 % 26 ⇔  4 
 [S]  83 % 26 ⇔  5 
 [T]  84 % 26 ⇔  6 
 [U]  85 % 26 ⇔  7 
 [V]  86 % 26 ⇔  8 
 [W]  87 % 26 ⇔  9 
 [X]  88 % 26 ⇔ 10 
 [Y]  89 % 26 ⇔ 11 
 [Z]  90 % 26 ⇔ 12 
```

Como você pode notar, cada número no intervalo de \[ `65 - 90` \] é mapeado para um número único entre \[ `0 - 25` \].  
Você também deve ter notado que cada número dado (por exemplo, `65` ) é mapeado para outro número (por exemplo, `13` ) que pode ser usado como um valor de deslocamento (ou seja, `65 + OFFSET` ) para obter o ROT13 do número fornecido.

Por exemplo, `65` mapas para `13` que podem ser tomados como um valor de deslocamento e adicionados a `65` para dar `78` .
```
[A]  65 % 26 ⇔ 13 + 65 =  78 [N] 
 [B]  66 % 26 ⇔ 14 + 65 =  79 [O] 
 [C]  67 % 26 ⇔ 15 + 65 =  80 [P] 
 [D]  68 % 26 ⇔ 16 + 65 =  81 [Q] 
 [E]  69 % 26 ⇔ 17 + 65 =  82 [R] 
 [F]  70 % 26 ⇔ 18 + 65 =  83 [S] 
 [G]  71 % 26 ⇔ 19 + 65 =  84 [T] 
 [H]  72 % 26 ⇔ 20 + 65 =  85 [U] 
 [I]  73 % 26 ⇔ 21 + 65 =  86 [V] 
 [J]  74 % 26 ⇔ 22 + 65 =  87 [W] 
 [K]  75 % 26 ⇔ 23 + 65 =  88 [X] 
 [L]  76 % 26 ⇔ 24 + 65 =  89 [Y] 
 [M]  77 % 26 ⇔ 25 + 65 =  90 [Z] 
 [N]  78 % 26 ⇔  0 + 65 =  65 [A] 
 [O]  79 % 26 ⇔  1 + 65 =  66 [B] 
 [P]  80 % 26 ⇔  2 + 65 =  67 [C] 
 [Q]  81 % 26 ⇔  3 + 65 =  68 [D] 
 [R]  82 % 26 ⇔  4 + 65 =  69 [E] 
 [S]  83 % 26 ⇔  5 + 65 =  70 [F] 
 [T]  84 % 26 ⇔  6 + 65 =  71 [G] 
 [U]  85 % 26 ⇔  7 + 65 =  72 [H] 
 [V]  86 % 26 ⇔  8 + 65 =  73 [I] 
 [W]  87 % 26 ⇔  9 + 65 =  74 [J] 
 [X]  88 % 26 ⇔ 10 + 65 =  75 [K] 
 [Y]  89 % 26 ⇔ 11 + 65 =  76 [L] 
 [Z]  90 % 26 ⇔ 12 + 65 =  77 [M] 
```

### Explicação do código:

*   `String.prototype.replace` [função](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942) `String.prototype.replace` permite transformar uma `String` base em alguma correspondência de padrão (definida por uma expressão regular) e a [função de transformação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) (que é aplicada a cada uma das correspondências de padrão).
*   [A](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sintaxe da [função de seta](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) é usada para gravar o parâmetro de função para `replace()` .
*   `L` representa uma única unidade, de cada correspondência de padrões com `/[AZ]/g` - que é toda letra maiúscula no alfabeto, de `A` a `Z` , presente na string.
*   A função de seta aplica a transformação `rot13` em todas as letras maiúsculas do alfabeto inglês presente na string dada.

#### Links Relevantes

*   [String.prototype.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTA PARA OS COLABORADORES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.
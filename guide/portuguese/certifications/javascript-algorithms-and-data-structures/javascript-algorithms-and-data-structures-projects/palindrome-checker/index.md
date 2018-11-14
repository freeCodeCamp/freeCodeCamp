---
title: Palindrome Checker
localeTitle: Verificador de palíndromo
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/c/ca86619bb0ec05531dbb02be3c0b7b8383e67f01.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Nosso objetivo para resolver este problema é arrumar a seqüência passada e verificar se é de fato um palíndromo.

*   Se você não tem certeza do que é um palíndromo, é uma palavra ou frase que, quando invertida, soletra a mesma coisa para frente ou para trás. Um exemplo simples é a `mom` , quando você inverte as letras, soletra a mesma coisa! Outro exemplo de um palíndromo é o `race car` . Quando tiramos tudo o que não é um personagem, torna-se o `racecar` que é o mesmo escrito para a frente ou para trás!

Uma vez que tenhamos determinado se é um palíndromo ou não, queremos retornar `true` ou `false` base em nossas descobertas.

#### Links Relevantes

*   [String.prototype.replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [String.prototype.toLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Expressões regulares, `RegEx` , podem ser usadas para remover caracteres indesejados da string.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Os `Array.prototype.split` e `Array.prototype.join` métodos podem ser de uso aqui. `For` e `while` loops são outra alternativa, ou porque nem mesmo `map` !

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

`String.prototype.toLowerCase` pode ser usado para criar uma cadeia em minúsculo.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function palindrome(str) { 
      return str.replace(/[\W_]/g, '').toLowerCase() === 
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/2)

### Explicação do código:

*   Começamos usando expressões regulares para substituir qualquer espaço em branco ou caracteres não alfanuméricos por nada (ou `null` ), o que essencialmente os remove da string.
    
*   Em seguida, _encadeamos_ `.toLowerCase()` para remover quaisquer letras maiúsculas, porque `A` é um caractere diferente de `a` . O problema não nos pedia para nos preocuparmos em garantir que o caso dos personagens fosse idêntico, apenas a grafia.
    
*   Nosso próximo passo é pegar nossa string e `.split()` , `.reverse()` e, finalmente, `.join()` novamente.
    
*   O último passo é verificar se a sequência é a mesma para a frente e para trás e retornar nosso resultado!
    

#### Links Relevantes

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.reverse](http://forum.freecodecamp.com/t/javascript-array-prototype-reverse/14300)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function palindrome(str) { 
      str = str.toLowerCase().replace(/[\W_]/g, ''); 
      for(var i = 0, len = str.length - 1; i < len/2; i++) { 
        if(str[i] !== str[len-i]) { 
          return false; 
        } 
      } 
      return true; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/3)

### Explicação do código:

*   Começamos usando os mesmos métodos de substituir os caracteres que não queremos na string usando expressões regulares do `RegEx` , e então fazer a nossa string em minúsculo.
    
*   Em seguida, configuramos nosso loop `for` e declaramos um índice `i` para acompanhar o loop. Nós definimos nossa sequência de escape para quando `i` é maior que o comprimento da string dividida por dois, o que faz com que o loop pare após o ponto intermediário da string. E finalmente definimos `i` para incrementar após cada loop.
    
*   Dentro de cada loop, queremos verificar se a letra no elemento `[i]` é igual à letra no comprimento da string menos i, `[str.length - i]` . Cada loop, o elemento que é verificado em ambos os lados da corda se aproxima do centro até que tenhamos verificado todas as letras. Se em algum momento as letras não coincidirem, retornaremos `false` . Se o loop for concluído com sucesso, significa que temos um palíndromo e, portanto, retornamos `true` !
    

#### Links Relevantes

*   Regex

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código (mais desempenho):

```javascript
    //this solution performs at minimum 7x better, at maximum infinitely better. 
    //read the explanation for the reason why. I just failed this in an interview. 
    function palindrome(str) { 
      //assign a front and a back pointer 
      let front = 0 
      let back = str.length - 1 
 
      //back and front pointers won't always meet in the middle, so use (back > front) 
      while (back > front) { 
        //increments front pointer if current character doesn't meet criteria 
        if ( str[front].match(/[\W_]/) ) { 
          front++ 
          continue 
        } 
        //decrements back pointer if current character doesn't meet criteria 
        if ( str[back].match(/[\W_]/) ) { 
          back-- 
          continue 
        } 
        //finally does the comparison on the current character 
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false 
        front++ 
        back-- 
      } 
 
      //if the whole string has been compared without returning false, it's a palindrome! 
      return true 
 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/4)

### Explicação do código:

*   Foi-me dado este problema em uma entrevista (spoiler: eu não fui contratado ![:frowning:](https://forum.freecodecamp.com/images/emoji/emoji_one/frowning.png?v=3 ": franzindo a testa:") Rapidamente cheguei à solução básica, e o entrevistador me disse para melhorar. O algoritmo demoraria muito se ele passasse a Bíblia como a string. Ele queria que fosse instantâneo.
    
*   As soluções mais simples executam muito mal em strings longas porque elas operam em toda a string várias vezes (toLowerCase (), replace (), split (), reverse (), join ()) antes de comparar a string **inteira** duas vezes.
    
*   A beleza desta solução é que ela nunca **precisa** ler toda a seqüência, nem mesmo uma vez, para saber que não é um palíndromo. Por que ler toda a seqüência se você pode dizer que não é um palíndromo apenas olhando para duas letras?
    
*   Usa um loop while em vez de um loop for como uma melhor prática - porque estamos usando duas variáveis, uma é o índice começando do início da string, e a outra inicia no final da string.
    

#### Links Relevantes

*   [Complexidade ciclomática](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.
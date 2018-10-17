---
title: Dna Pairing
localeTitle: Dna Emparelhamento
---
![DNA](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

*   Você obterá uma seqüência de fita de DNA e precisará obter o par e devolvê-lo como uma matriz 2D dos pares de bases. Tenha em mente que o fio fornecido deve ser o primeiro sempre.
    
*   Outra maneira de interpretar o problema: existem quatro caracteres potenciais que existem no DNA: "A", "T", "G" e "C". "A" e "T" estão sempre emparelhados, e "G" e "C" estão sempre emparelhados.  
    Este problema apresenta uma entrada, por exemplo, "ATCGA". Cada um desses cinco personagens está faltando seus pares.  
    Por exemplo, o primeiro caractere "A" precisa ser emparelhado com "T" para fornecer o elemento da matriz \["A", "T"\].  
    O segundo caractere "T" precisa ser emparelhado com "A" para fornecer o elemento da matriz \["T", "A"\].  
    O número de elementos na saída final é igual ao número de caracteres na entrada.
    

Esse problema não envolve reorganizar a entrada em combinações ou permutações diferentes.

#### Links Relevantes

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [String.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   Existem dois casos básicos, AT e CG, ambos em ambos os sentidos. Você pode usar expressões regulares, se declarações de qualquer coisa que você pode pensar.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Eu recomendaria usar um switch, pois torna as coisas muito mais suaves.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   O resultado deve ser uma matriz de matrizes, por isso tenha isso em mente ao empurrar as coisas.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function pairElement(str) { 
      // Return each strand as an array of two elements, the original and the pair. 
      var paired = []; 
 
      // Function to check with strand to pair. 
      var search = function(char) { 
        switch (char) { 
          case 'A': 
            paired.push(['A', 'T']); 
            break; 
          case 'T': 
            paired.push(['T', 'A']); 
            break; 
          case 'C': 
            paired.push(['C', 'G']); 
            break; 
          case 'G': 
            paired.push(['G', 'C']); 
            break; 
        } 
      }; 
 
      // Loops through the input and pair. 
      for (var i = 0; i < str.length; i++) { 
        search(str[i]); 
      } 
 
      return paired; 
    } 
 
    // test here 
    pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmz/0)

### Explicação do código:

*   O programa é muito simples, a melhor solução que tenho é usar um switch para capturar todos os quatro elementos possíveis. Usando instruções if levaria muito código. Você também pode usar expressões regulares.
*   Já que temos o original e o par, decidi pegar todos os quatro casos ao invés dos dois básicos.
*   Crie uma matriz vazia e use a função de `search` para enviar os valores corretos para a matriz e retorná-los.

#### Links Relevantes

*   [Switch Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function pairElement(str) { 
    //create object for pair lookup 
    var pairs = { 
      "A": "T", 
      "T": "A", 
      "C": "G", 
      "G": "C" 
    } 
    //split string into array of characters 
    var arr = str.split(""); 
    //map character to array of character and matching pair 
    return arr.map(x => [x,pairs[x]]); 
  } 
 
  //test here 
  pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/repls/ThoroughSphericalComputeranimation)

## Explicação do código:

*   Primeiro defina um objeto com todas as possibilidades de pares, isso nos permite encontrar facilmente por chave ou valor.
*   Dividir `str` em uma matriz de caracteres para que possamos usar cada letra para encontrar seu par.
*   Use a função map para mapear cada caractere na matriz para uma matriz com o caractere e seu par correspondente, criando uma matriz 2D.

#### Links Relevantes

*   [Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [Acessores de propriedade](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
*   [Funções de seta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.
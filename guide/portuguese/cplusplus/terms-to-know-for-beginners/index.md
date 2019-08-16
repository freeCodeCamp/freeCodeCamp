---
title: IDE and Printing different text 
localeTitle: IDE e impressão de texto diferente
---
# Introdução a um IDE e impressão de texto diferente:

*   No último artigo, alguns links para download de software necessários para a programação. Um software como esse é conhecido como IDE. **IDE significa Integrated Development Environment**

## Os IDEs consistem principalmente em 3 tipos de software:

**1 Editor:** Um editor de texto ligeiramente modificado para facilitar a codificação. Um exemplo de editor para codificação é o Notepad ++.

**2 Debugger:** Software que ajuda você a encontrar erros no seu programa e resolvê-los antes da execução. Imagine o FaceBook travando no carregamento de um aplicativo ou um jogo travando de repente. Para evitar a execução defeituosa de um programa, o depurador é o melhor amigo de um programador.

**3 Compiler:** Um compilador é a parte do computador que converte seu código de programa de alto nível em código de máquina simples: 0s & 1s; para que um computador entenda os comandos e os execute. De agora em diante, estaremos usando o **compilador de** palavras com frequência.

_P: Tente pesquisar um IDE no Google e execute seu primeiro programa nele. Verifique a saída_

Agora, instale o IDE e tente alterar o texto do programa no último artigo.

### Alterando o texto em C ++

*   Para alterar o texto, altere o que é digitado no `""` após `cout<<`

Um programa de amostra:

```cpp
#include <iostream> 
 using namespace std : 
 int main() 
 { 
    cout << "I Love freeCodeCamp ! "; 
 } 
```

O código acima retorna um erro porque na linha 2, usamos dois pontos (:) em vez de um ponto-e-vírgula (;) Então, vamos depurar o erro:
```cpp
#include <iostream> 
 using namespace std ; 
 int main() 
 { 
    cout << "I Love freeCodeCamp ! "; 
    return 0; 
 } 
```

Note que agora o programa funciona perfeitamente. A saída será: `I Love freeCodeCamp!`

### Agora vamos mudar o texto para algo assim:

```cpp
    cout << "Hello World!\t I love freeCodeCamp!"; 
```

A saída será algo diferente desta vez:
```
Hello World!     I love freeCodeCamp! 
```

Se você percebeu, o comando `\t` criou um _espaço de tabulação_ entre os dois textos. Este é um tipo de comando especial em C ++. Esses comandos especiais são conhecidos como _seqüências de escape_ . Eles são usados ​​para imprimir certos caracteres especiais que um compilador não pode exibir.

#### Sequências de escape úteis:

*   `\'` Para imprimir uma única vírgula invertida
*   `\"` para imprimir uma vírgula invertida dupla
*   `\n` para imprimir em uma nova linha
*   `\t` para uma guia horizontal
*   `\f` para uma nova página
*   `\\` por uma barra invertida
*   `\?` para um ponto de interrogação

##### Agora, vamos tentar imprimir números e caracteres especiais com algumas seqüências de escape:

```cpp
    cout << "40158 \t 236708 ! \n \\ @ \?" << endl; 
```

A saída muda para:
```
40158      236708 ! 
 \ @ ? 
```

##### Vamos tentar algumas outras formas de impressão:

```cpp
    cout << "1+2" << endl; 
    cout << 1+2 << endl; 
```

Saída:

*   A primeira declaração de saída é `1+2`
*   A segunda declaração de saída é `3`

Isso ocorre porque não adicionamos as aspas invertidas para a segunda instrução de impressão e, portanto, o compilador adicionou os números antes de imprimi-los.

#### Comentários:

*   Comentários são uma característica importante de muitas linguagens de programação. Eles permitem que o programador faça anotações para autoajuda e não afetará a execução do programa.

**Os diferentes tipos de comentários e sintaxe de um comentário** :

1 `//` ~ _Single Line Comments_ : O comprimento desses comentários é de 1 linha (a linha em que é digitado). 2 `/* */` ~ _Multi Line Comments_ : Estes comentários podem ocupar um espaço de mais de uma linha.

#### Exemplo de uso de comentários:

\`\` \`cpp cout << "Olá Comentário" << endl; // cout << "Hello Comment" << endl; Comentário de linha única.
```
/* This is an example of a multi line comment. No output is generated for this . 
 I now end the comment.  :) */ 
```

\`\` \`

A saída será:

`Hello Comment`

Como você pode perceber, os comentários são ignorados durante a execução do programa e não aparecem na verificação da saída do programa. Deve-se notar que, embora os comentários adicionem um nível extra de legibilidade ao código, é um mau hábito confiar demais nos comentários para descrever a lógica em seu código. Em geral, seu código deve falar por si e refletir a intenção do programador.

Como você pode perceber, os comentários são ignorados durante a execução do programa e não aparecem na verificação da saída do programa.

#### Operadores

*   Os operadores permitem comparar duas ou mais expressões
*   `==` igual a
*   `!=` não é igual a
*   `<` menos de
*   `>` maior que
*   `<=` menor ou igual a
*   `>=` maior que ou igual a

```cpp
    (7==5); 
```

Isso é avaliado como falso

`cpp (7!=5);` Isso é avaliado como verdadeiro

[Um resumo de todas as declarações de impressão usadas neste artigo. Sinta-se à vontade para mexer no código! :)](https://repl.it/L4ox)

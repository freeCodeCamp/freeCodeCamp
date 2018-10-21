---
title: Continue Control Statement
localeTitle: Continue a declaração de controle
---
# Continue a declaração de controle

A instrução `continue` faz um loop pular todas as linhas seguintes após o continue e pular para o início da próxima iteração. Em um `for` loop, o controle passa para a instrução de atualização, e em um `while` ou `do while` loop, controle salta para a expressão booleana / condição.

```java
for (int j = 0; j < 10; j++) 
 { 
    if (j == 5) 
    { 
        continue; 
    } 
    System.out.print (j + " "); 
 } 
```

O valor de `j` será impresso para cada iteração, exceto quando for igual a `5` . A instrução de impressão será ignorada por causa da `continue` e a saída será:
```
0 1 2 3 4 6 7 8 9 
```

Digamos que você queira contar o número de `i` s em uma palavra `mississippi` . Aqui você pode usar um loop com a instrução `continue` , da seguinte maneira:

```java
String searchWord = "mississippi"; 
 
 // max stores the length of the string 
 int max = searchWord.length(); 
 int numPs = 0; 
 
 for (int i = 0; i < max; i++) 
 { 
    // We only want to count i's - skip other letters 
    if (searchWord.charAt(i) != 'i') 
    { 
        continue; 
    } 
 
    // Increase count_i for each i encountered 
    numPs++; 
 } 
 
 System.out.println("numPs = " + numPs); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJZH/0)

Além disso, você pode usar rótulos para escolher um loop específico fora de um conjunto aninhado para pular para a próxima iteração.
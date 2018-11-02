---
title: For Loop
localeTitle: Para loop
---
# Para loop

O loop `for` oferece uma maneira compacta de iterar em um intervalo de valores. Uma instrução básica `for` tem três partes: uma inicialização de variável, uma expressão booleana e uma expressão de incremento.

```java
for (variable initialization; boolean expression; increment expression) 
 { 
    // Statements 
 } 
```

*   `initialization` - Inicializa o loop e é executado apenas uma vez, no início.

Você pode inicializar mais de uma variável do mesmo tipo na primeira parte da declaração básica `for` loop; Cada inicialização deve ser separada por uma vírgula.

*   `expression` - avaliada no início de cada iteração. Se a `expression` avaliada como `true` , as `Statements` serão executadas.
*   `increment` - Chamado após cada iteração através do loop. Você pode aumentar / diminuir o valor das variáveis ​​aqui. Certifique-se de que o incremento esteja funcionando em relação ao valor da expressão, para evitar um loop infinito.

Uma maneira comum `for` loop é usado é se você precisa para percorrer o seu código de um número específico de vezes. Por exemplo, se você quiser gerar os números de 0 a 10, inicialize a variável do seu contador com 0, depois verifique se o valor é menor que 10 e adicione um ao contador após cada iteração.

Observe que você deve verificar se o valor é menor que 10, não menor que ou igual a 10, pois você está iniciando o contador em 0.

```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
 { 
    System.out.print(iter_For + " "); 
    // Iterated 10 times, iter_For 0,1,2...9 
 } 
 
 System.out.println("iter_For Value: " + iter_For); 
```

Nota: Também é aceitável declarar uma variável dentro do loop for como uma única instrução.

```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
 { 
    System.out.print (iter_For + " "); 
    // Iterated 10 times, iter_For 0,1,2...9 
 } 
```

Saída:
```
0 1 2 3 4 5 6 7 8 9 
 iter_For Value: 10 
```

Outro exemplo de loop for que adiciona os primeiros 50 números seria assim. i ++ significa i = i + 1.

```java
int addUntil = 50; 
 int sum 0; 
 
 for (int i = 1; i <= addUntil; i++) 
 { 
    sum+=i 
 } 
 
 System.out.println("The sum of the first 50 numbers is: " + 50); 
```

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJYr/0)

### Extras

Você não pode usar um número (antiga construção de linguagem no estilo C) ou qualquer coisa que não avalie um valor booleano como uma condição para uma instrução if ou construção de loop. Você não pode, por exemplo, dizer if (x), a menos que x seja uma variável booleana.

Além disso, é importante ter em mente que a expressão booleana deve, em algum momento, ser avaliada como verdadeira. Caso contrário, seu programa ficará preso em um loop infinito.
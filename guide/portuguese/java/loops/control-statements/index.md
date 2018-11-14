---
title: Jump Statements
localeTitle: Saltar Declarações
---
# Saltar Declarações

Instruções de salto são um tipo de instruções de [_fluxo_](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html) de [_controle_](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html) . Basicamente, você pode usá-los para alterar a ordem na qual as instruções são executadas a partir do curso normal da execução. Em essência, essas instruções fazem com que o controle do programa "pule" do próximo ponto esperado de execução para outro local no programa.

As seguintes instruções de salto são comumente usadas com loops:

*   [pausa](http://forum.freecodecamp.com/t/java-loops-break-control-statement)
*   [continuar](http://forum.freecodecamp.com/t/java-loops-continue-control-statement)

A instrução de controle 'break' quebra o loop quando a condição é atendida. Isso significa que o restante do loop não será executado. Por exemplo, no loop abaixo, se eu atingir 5, o loop será interrompido, portanto, ele não continuará.

```java
for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the loop. 
    break; 
  } 
 
 System.out.println(i); 
 } 
```

Saída:
```
    0 1 2 3 4 
```

A instrução de controle 'continue' é a versão menos intensa de 'break'. Só sai da instância atual do loop e continua. No loop abaixo, se eu for 5, o loop continua, então ele irá pular a instrução print abaixo e seguir em frente até que eu alcance 10 e o loop pare.

```java
for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the current instance loop. 
    continue; 
  } 
 
 System.out.println(i); 
 } 
```

Saída:
```
    0 1 2 3 4 6 7 8 9 

```
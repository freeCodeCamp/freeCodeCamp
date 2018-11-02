---
title: Switch Case
localeTitle: Caso do interruptor
---
# Caso do interruptor

Switch é uma instrução de seleção que escolhe uma seção de caso de switch, dependendo do valor correspondente à expressão / valor que está sendo avaliado. 1 Se nenhuma das declarações case corresponder ao valor da variável comutada, o caminho padrão será escolhido. A instrução switch é como um conjunto de `if statements` . Nós saímos do interruptor por `break` .

## Exemplo
```
public enum Colors { Red, Blue, Green, Orange } 
 
 Colors myColor; 
 
 ... myColor is set to one of the enum values ... 
 
 switch(myColor){ 
  case Colors.Red: 
    Console.WriteLine("How you like them apples?"); 
    break; 
  case Colors.Blue: 
    Console.WriteLine("Ice Ice Baby..."); 
    break; 
  case Colors.Green: 
    Console.WriteLine("Fore!"); 
    break; 
  default: 
    Console.WriteLine("I have a hard time when I try to rhyme."); 
 } 
```

## Saída
```
If myColor is Colors.Red: 
 > How you like them apples? 
 
 If myColor is Colors.Blue: 
 > Ice Ice Baby... 
 
 If myColor is Colors.Green: 
 > Fore! 
 
 If myColor is Colors.Orange: 
 > I have a hard time when I try to rhyme. 
```

### Fontes:

*   1 https://docs.microsoft.com/pt-br/dotnet/csharp/language-reference/keywords/switch
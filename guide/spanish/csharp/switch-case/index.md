---
title: Switch Case
localeTitle: Caja de interruptores
---
# Caja de interruptores

Switch es una declaración de selección que elige una sección de mayúsculas y minúsculas según el valor que coincida con la expresión / valor que se evalúa. 1 Si ninguna de las declaraciones de casos coincide con el valor de la variable conmutada, se elige la ruta predeterminada. La instrucción switch es como un conjunto de `if statements` . Salimos del interruptor por `break` .

## Ejemplo
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

## Salida
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

### Fuentes:

*   1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch
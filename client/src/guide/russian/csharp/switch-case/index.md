---
title: Switch Case
localeTitle: Корпус выключателя
---
# Корпус выключателя

Switch - это оператор выбора, который выбирает секцию случая переключателя в зависимости от значения, совпадающего с оцененным выражением / значением. 1 Если ни один из операторов case не соответствует значению переключаемой переменной, выбирается путь по умолчанию. Оператор switch похож на набор `if statements` . Мы выходим из коммутатора на `break` .

## пример
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

## Вывод
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

### Источники:

*   1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch
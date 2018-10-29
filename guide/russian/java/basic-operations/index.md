---
title: Basic Operations
localeTitle: Основные операции
---
# Основные операции

Java поддерживает следующие операции над переменными:

*   **Арифметика** : `Addition (+)` , `Subtraction (-)` , `Multiplication (*)` , `Division (/)` , `Modulus (%)` , `Increment (++)` , `Decrement (--)` .
*   **Конкатенация строк** : `+` может использоваться для конкатенации строк, но вычитание `-` на Строке не является допустимой операцией.
*   **Реляционная:** `Equal to (==)` , `Not Equal to (!=)` , `Greater than (>)` , `Less than (<)` , `Greater than or equal to (>=)` , `Less than or equal to (<=)`
*   **Побитовое** `Bitwise And (&)` , `Bitwise Or (|)` , `Bitwise XOR (^)` , `Bitwise Compliment (~)` , `Left shift (<<)` , `Right Shift (>>)` , `Zero fill right shift (>>>)`
*   **Логический** : `Logical And (&&)` , `Logical Or (||)` , `Logical Not (!)`
*   **Назначение** : `=` , `+=` , `-=` , `*=` , `/=` , `%=` , `<<=` , `>>=` , `&=` , `^=` , `|=`
*   **Другие** : `Conditional/Ternary(?:)` , `instanceof`

Хотя большинство операций не требуют пояснений, Условный (тройной) оператор работает следующим образом:

`expression that results in boolean output ? return this value if true : return this value if false;`

Пример: Истинное состояние:

```java
    int x = 10; 
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true 
```

Ложно Состояние:

```java
    int x = 25; 
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false 
```

Экземпляр оператора используется для проверки типов. Его можно использовать для проверки, является ли объект экземпляром класса, подкласса или интерфейса. Общий формат - _**экземпляр** объекта класса / подкласса / интерфейса_

Вот программа для иллюстрации instanecof оператора: \`\` \`Java Person obj1 = new Person (); Person obj2 = new Boy ();
```
    // As obj is of type person, it is not an 
    // instance of Boy or interface 
    System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */ 
```

\`\` \`
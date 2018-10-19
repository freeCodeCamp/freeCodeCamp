---
title: Control Flow
localeTitle: Поток управления
---
# Поток управления

Операторы потока управления - это именно то, что означает этот термин. Это инструкции, которые изменяют поток выполнения на основе решений, циклов и ветвлений, чтобы программа могла условно выполнять блоки кода.

Прежде всего, Java имеет следующие конструкции для управления потоком:

*   `if`
    
    ```java
    if( <expression that results in a boolean> ){ 
        //code enters this block if the above expression is 'true' 
     } 
    
    ```
    
*   `if...else`
    
    ```java
    if( <expression that results in a boolean> ){ 
        //execute this block if the expression is 'true' 
     } else{ 
        //execute this block if the expression is 'false' 
     } 
    
    ```
    
*   `switch`
    

Коммутатор является альтернативой конструкции `if...else` когда есть несколько значений и случаев для проверки.

```java
switch( <integer / String / Enum > ){ 
    case <int/String/Enum>: 
        <statements> 
        break; 
    case <int/String/Enum>: 
        <statements> 
        break; 
    default: 
        <statements> 
 } 
```

Примечание. Поток программы проходит `falls through` следующий `case` если оператор `break` отсутствует. например, скажем, вы говорите стандарт «Привет» всем в офисе, но вы очень милы с девушкой, которая сидит рядом с вами и звучит сердито вашему боссу. Способ представления будет выглядеть примерно так:

```java
switch(person){ 
    case 'boss': 
        soundGrumpy(); 
        break; 
    case 'neighbour': 
        soundExtraNice(); 
        break; 
    case 'colleague': 
        soundNormal(); 
        break; 
    default: 
        soundNormal(); 
 } 
```

```
Note: The `default` case runs when none of the `case` matches. Remember that when a case has no `break` statement, it `falls through` to the next case and will continue to the subsequent `cases` till a `break` is encountered. Because of this, make sure that each case has a `break` statement. The `default` case does not require a `break` statement. 
```

*   `nested statements`

Любой из предыдущих потоков управления может быть вложен. Это означает, что вы можете иметь вложенные, `if` `if..else` и `switch..case` . т. е. вы можете иметь любую комбинацию этих утверждений внутри другой, и нет ограничений на глубину `nesting` .

Например, рассмотрим следующий сценарий:

*   Если у вас меньше 25 баксов, вы получаете себе чашку кофе.
*   Если у вас более 25 баксов, но менее 60 баксов, вы получаете приличную еду.
*   Если у вас более 60 баксов, но менее 100, вы получаете приличную еду вместе с бокалом вина.
*   Однако, когда у вас есть более 100 баксов, в зависимости от того, с кем вы работаете, вы либо отправляетесь на ужин, освещенный свечами (с женой), либо отправляетесь в спортивный бар (с друзьями).

Один из способов представить это будет:

```java
int cash = 150; 
 String company = "friends"; 
 
 if( cash < 25 ){ 
    getCoffee(); 
 } else if( cash < 60 ){ 
    getDecentMeal(); 
 } else if( cash < 100 ){ 
    getDecentMeal(); 
    getGlassOfWine(); 
 } else { 
    switch(company){ 
        case "wife": 
            candleLitDinner(); 
            break; 
        case "friends": 
            meetFriendsAtSportsBar(); 
            break; 
        default: 
            getDecentMeal(); 
    } 
 } 
```

В этом примере будет выполняться `meetFriendsAtSportsBar()` .

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJZi/1)
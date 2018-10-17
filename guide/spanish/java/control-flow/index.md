---
title: Control Flow
localeTitle: Flujo de control
---
# Flujo de control

Las declaraciones de flujo de control son exactamente lo que significa el término. Son declaraciones que alteran el flujo de ejecución basándose en decisiones, bucles y bifurcaciones para que el programa pueda ejecutar condicionalmente bloques de código.

Principalmente, Java tiene las siguientes construcciones para el control de flujo:

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
    

Switch es una alternativa para la construcción `if...else` cuando hay varios valores y casos con los que se puede verificar.

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

Nota: El flujo del programa `falls through` del siguiente `case` si falta la instrucción `break` . por ejemplo, digamos que dices el "Hola" estándar a todos en la oficina, pero eres muy amable con la chica que se sienta a tu lado y le suena gruñón a tu jefe. La forma de representar sería algo como:

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

Cualquiera de los flujos de control anteriores puede ser anidado. Esto significa que puede haber anidado `if` , `if..else` y `switch..case` declaraciones. es decir, puede tener cualquier combinación de estas declaraciones dentro de la otra y no hay limitación en cuanto a la profundidad del `nesting` .

Por ejemplo, consideremos el siguiente escenario:

*   Si tienes menos de 25 dólares, puedes conseguirte una taza de café.
*   Si tienes más de 25 dólares pero menos de 60 dólares, obtienes una comida decente.
*   Si tienes más de 60 dólares pero menos de 100, obtienes una comida decente junto con una copa de vino.
*   Sin embargo, cuando tienes más de 100 dólares, dependiendo de con quién estés, o bien vas a una cena a la luz de las velas (con tu esposa) o vas a un bar deportivo (con tus amigos).

Una de las formas de representarlo será:

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

En este ejemplo, se `meetFriendsAtSportsBar()` .

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJZi/1)
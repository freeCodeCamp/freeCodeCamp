---
title: Control Flow
---
# Control Flow

Control flow statements are exactly what the term means. They are statements that alter execution flow based on decisions, loops and branching so that the program can conditionally execute blocks of code.

Primarily, Java has the following constructs for flow control:

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

Switch is an alternative for the `if...else` construct when there are multiple values and cases to check against.

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

Note: The program flow `falls through` the next `case` if the `break` statement is missing. e.g. Let's say you say the standard 'Hello' to everyone at office, but you are extra nice to the girl who sits next to you and sound grumpy to your boss. The way to represent would be something like:
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

    Note: The `default` case runs when none of the `case` matches. Remember that when a case has no `break` statement, it `falls through` to the next case and will continue to the subsequent `cases` till a `break` is encountered. Because of this, make sure that each case has a `break` statement. The `default` case does not require a `break` statement. 

*   `nested statements`

Any of the previous control flows can be nested. Which means you can have nested `if`,`if..else`and`switch..case`statements. i.e., you can have any combination of these statements within the other and there is no limitation to the depth of`nesting`.

For example, let's consider the following scenario:

*   If you have less than 25 bucks, you get yourself a cup of coffee.
*   If you have more than 25 bucks but less than 60 bucks, you get yourself a decent meal.
*   If you have more than 60 bucks but less than a 100, you get yourself a decent meal along with a glass of wine.
*   However, when you have more than a 100 bucks, depending on who you are with, you either go for a candle lit dinner (with your wife) or you go to a sports bar (with your friends).

One of the ways to represent this will be:

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
In this example, `meetFriendsAtSportsBar()` will be executed.

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJZi/1' target='_blank' rel='nofollow'>Run Code</a>

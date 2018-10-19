---
title: Change Styles Based on Data
localeTitle: Изменение стилей на основе данных
---
## Изменение стилей на основе данных

Напомните себе еще раз, какова функция обратного вызова с [этим](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

Существует два способа завершить эту часть: либо с логикой if-else, либо с тройным оператором.

**логика if-else**

Пример из [w3school](https://www.w3schools.com/js/js_if_else.asp)

\`\` \`Javascript

const money = 50;

если (деньги <50) {

возвращение «Я богатый»;

}

else {

верните «Я бедный»;

}
```
What you need to remember is the bracket that the if-else logic associate with, (argument) and {statement} 
 
 **Try Yourself Now**  👩‍💻👨‍💻 
 
 
 
 **Ternary operator** 
 
 A more detailed explanation [here](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff). Ternary operator is a lot more concise and quicker to remember for a simple true or false statement. Read [this](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394) 
```

Javascript

состояние ? value if true: значение if false
```
For someone who still not sure here is a solution by using If-else statement 
```

Javascript .style ("color", (d) => { если (d <20) { return 'red' } else { return 'green' } }) \`\` \`
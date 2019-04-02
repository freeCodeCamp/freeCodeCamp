---
title: Labeled Statement
localeTitle: Обозначенное заявление
---
## Обозначенное заявление

**Обозначенный** оператор используется с инструкциями `break` и `continue` и служит для определения оператора, к которому применяются заявления `break` и `continue` .

### Синтаксис

\`\` \`javascript Метка\_строки: заявления
```
### Usage 
 Without the use of a `labeled` statement the `break` statement can only break out of a loop or a `switch` statement. Using a `labeled` statement allows `break` to jump out of any code block. 
 #### Example 
```

Javascript foo: { console.log («This prints:»); break foo; console.log («Это никогда не будет печататься»); } console.log («Потому что выполнение прыгает сюда!») /\* выход Это печатает: Потому что выполнение прыгает сюда! \* /
```
When used with a `continue` statement the `labeled` statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a `labeled` statement you could only jump out of the existing loop iteration to the `next iteration of the same loop.` 
 #### Example 
```

Javascript // без помеченной инструкции, когда j == i внутренний цикл переходит к следующей итерации function test () { для (var i = 0; i <3; i ++) { console.log ("i =" + i); для (var j = 0; j <3; j ++) { if (j === i) { Продолжать; } console.log ("j =" + j); } } }

/\* выход i = 0 (примечание j = 0 отсутствует) J = 1 J = 2 = 1 j = 0 (примечание j = 1 отсутствует) J = 2 я = 2 J = 0 j = 1 (примечание j = 2 отсутствует) \* /

// используя помеченный оператор, мы можем перейти к внешнему (i) циклу function test () { external: for (var i = 0; i <3; i ++) { console.log ("i =" + i); для (var j = 0; j <3; j ++) { if (j === i) { продолжать внешний; } console.log ("j =" + j); } } }

/ \* i = 0 (j регистрируется только при менее i) = 1 J = 0 я = 2 J = 0 J = 1 \* / \`\` \`

### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
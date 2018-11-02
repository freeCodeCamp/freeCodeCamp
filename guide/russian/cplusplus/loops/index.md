---
title: Loops
localeTitle: Loops
---
# Loops

## Введение

Теперь давайте обсудим что-то известное как цикл. Предположим, вы хотите напечатать четные цифры от 1 до 1000 на экране. В одну сторону для этого нужно написать следующие строки

\`\` \`c ++ cout << 0 << endl; cout << 2 << endl; cout << 4 << endl; .... .... .... cout << 1000 << endl;
```
But the problem with this approach is that you have to write the same line again and again. And if suppose you have to print 
 prime numbers from 1 to 1000 then this will be more hectic. 
 Therefore, in order to solve such problems loops are introduced. 
 
 There are different types of loop functions: 
 ### While and do while loops 
 
 While and do while loops allow you to make the loop until a condition finishes. 
 The difference between While and Do while is that Do while always executes once. 
 Here you can see an example: 
```

C ++ while (условие) { // Код, который будет выполняться, когда условие истинно } делать { // Выполняется один раз и до тех пор, пока условие не будет ложным } while (условие);
```
### For loops 
 
 For loops are usually used when you know how many times the code will execute. 
 The flow can be seen in this [graph](https://www.tutorialspoint.com/cplusplus/images/cpp_for_loop.jpg). 
 
 They are declared this way: 
```

C ++ for (инициализировать переменную, проверить условие, прирастить инициализированную переменную) { // Код для выполнения }
```
Lets write a program which will print numbers from 0 to 1000 including 1000 on the screen using a for loop. 
```

C ++ for (int i = 0; i <= 1000; i ++) { cout << i << endl; }
```
When you execute this code in a c++ program numbers from 1 to 1000 will be printed. 
 Now lets discuss how the for loop works. 
 
 * You start a for loop by typing the keyword 'for'. It means you are starting a for loop 
 ` for ` 
 * Next you open and close a round bracket. In this brackets you write some conditions which will be discussed later 
 ` for()` 
 * Inside the brackets first you write the initial condition ie the value from where the loop will start. Like in the 
  above program we write int i = 0 
 ` for(int i = 0)` 
 * Then you write the semicolon and then condition until when the loop will be executed. In the above code you define 
   i < 1000. It means until value of i is less then 1000 execuete the loop. 
   ` for(int i=0;i<=1000) ` 
 * Then you define the incremented value that is how much i has to be incremented in each iteration. In the above code 
   we write i++. It means value of i will be incremented by 1 every time. 
    ` for(int i=0;i<=1000;i++) ` 
 * If there is only one statement inside the loop then the curly bracket is optional but its better to write loop code 
   within brackets so that you don't get confused. 
    ``` c++ 
    for(int i=0;i<=1000;i++) 
        { 
        } 
     ``` 
 * Then inside the loop you write what do you want to do. In the above program we output the value of i. 
 
 So, in this way the for loop works 
 
 If you want to print even numbers from 1 to 1000 then your program will look like this 
```

C ++ для (int i = 0; i <= 1000; i = i + 2) { cout << i << endl; }

\`\` \`

*   Разница в первой программе и вторая - часть приращения. Остальная часть кода такая же. Эта программа будет печатать 0 и затем добавьте 2 к нему и распечатайте 2 на консоли и так далее до значения i станет равным 1000.
    
    Наша окончательная программа для печати четных чисел от 0 до 1000 будет выглядеть так.
    
    \`\` \`c ++
    
    # включают
    
    использование пространства имен std; int main () { для (int i = 0; i <= 1000; i = i + 2) { cout << i << endl; } return 0; } \`\` \`
---
title: Input and Output
localeTitle: 输入和输出
---
## 使用Streams输入和输出

要将内容打印到控制台或从中读取内容，请使用`cout`和`cin` ，即所谓的`streams` 。使用这个比喻是因为你使用的流就像使用接收器或水龙头一样：你要么将数据刷新到接收器（ `cout` ），要么从tap（ `cin` ）中获取数据。

### 用cout输出

“Hello World”程序使用`cout`打印“Hello World！”到控制台：

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  cout << "Hello world!" << endl; 
 } 
```

顶部的前两行是您使用`cout`和其他流所必需的。 `#include<iostream>`使流对象可以`using namespace std;` ，并`using namespace std;`让你直接输入`cout`而不必输入`std::cout` ，也就是说，必须指定我们要从`std`命名空间使用`cout` 。

`cout`代表“控制台输出”，是代表控制台的所谓_输出流_ 。当你想在控制台上打印东西时，你可以将它放入`cout` ;想象它是一个通往终端的洞。要把东西放进这个洞，一次一个，你使用`<<`运算符，也就是_插入运算符_ 1 。操作员可以被链接，也就是说，您可以将多个东西一个接一个地放在一起。以下将打印“蛋糕是谎言。”：

`cout << "The cake " << "is " << "a " << "lie." << endl;`

`endl`代表“End Line”，是另一个来自`<iostream>` 。当你把`endl`到`cout` ，它会打印一个换行符（“\\ n”）到控制台，并_刷新_ `cout` ，这意味着它会迫使`cout`打印你_现在_已经投入它的一切。如果您没有将`endl`放入`cout` ， `cout`可能会保留您放入其中的数据，但在实际打印之前需要等待更多数据。这称为_缓冲_ ，非常适合性能，但如果您已经将它应该打印的所有内容都给了它，那么您希望`cout`立即打印它。因此，在有意义的地方结束使用`endl`是一种非常好的做法。

几乎所有东西都可以放入一个流：字符串，数字，变量，表达式等。这里有一些有效的流插入示例：

```cpp
// Notice we can use the number 42 and not the string "42". 
 cout << "The meaning of life is " << 42 << endl;` // Output: The meaning of life is 42 
```

```cpp
string name = "Tim"; 
 cout << "Except for you, " << name << endl;`// Output: Except for you, Tim 
```

```cpp
string name = "Tim"; 
 cout << name; 
 cout << " is a great guy!" << endl;` 
 // Output: Tim is a great guy! 
```

```cpp
int a = 3; 
 cout << a*2 + 18/a << endl;`// Output: 12 
```

### 关于空白的说明

C ++总是让_你_掌控，并且只完成你告诉它要做的事情。这有时会令人惊讶，如下例所示：

```cpp
string name = "Sarah"; 
 cout << "Good morning" << name << "how are you today? << endl; 
```

你可能期望它打印出来“早上好莎拉你今天过得怎么样？”，但实际上，输出将是“早上好，你今天好吗？”。出现此错误的原因是您没有在`name`周围的字符串中写入空格，因此，由于您没有指定任何空格，因此`cout`不会打印任何空格。正确的版本将是： `cout << "Good morning " << name << " how are you today? << endl;`

换行也不会自己发生。你可能会认为这会在四行打印一个食谱：

```cpp
cout << "To make bread, you need:"; 
 cout << "* One egg"; 
 cout << "* One water"; 
 cout << "* Two wheat"; 
```

但实际上产量都在一条线上：“要做面包，你需要：\*一个鸡蛋\*一个水\*两个小麦”。这是因为行的末尾没有换行符，所以很自然地，C ++假设我们不希望它打印换行符。

您可以通过在每行之后添加`endl`来解决此问题，因为如前所述， `endl`在换行流中插入换行符。但是，它也会强制冲洗缓冲区，这会让我们失去一点性能，因为我们可以一次打印所有的线条。因此，最好的方法是在行尾添加实际的换行符，并且最后只使用`endl` ：

```cpp
cout << "To make bread, you need:\n"; 
 cout << "* One egg\n"; 
 cout << "* One water\n"; 
 cout << "* Two wheat" << endl; 
```

如果你只是打印一个小食谱，你节省的时间是微不足道的，不值得麻烦，但如果你打印数百万的项目，差异可能是非常明显的。

### 用cin输入

要从控制台中读取，您可以像使用`cout`一样使用_输入流_ `cin` ，但不要将内容放入`cin` ，而是“将它们取出”。以下程序从用户读取两个数字并将它们加在一起：

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  int a, b; // Variables to hold the two numbers. 
 
  cout << "Please enter the first number:" << endl; 
  cin >> a; 
  cout << "Please enter the second number:" << endl; 
  cin >> b; 
 
  cout << "The sum of your numbers is: " << a + b << endl; 
 } 
```

`cin`代表“控制台输入”，是表示来自控制台的_输入的输入流_ 。在表达`cin >> a;` ，使用运算符`>>` ， _提取运算符_ 2 ，从`cin`读取数据并保存到变量`a` 。提取操作符读取写入我们指定的变量所需的数据，并跳过任何空格，因此如果用户键入“6”，将只读取值`6` 。

值得注意的是， `cin`将停止整个程序等待用户输入其值。在用户按下回车之前程序将不会继续，并且有一些数据要写入变量。如果用户只是在不输入任何内容的情况下按Enter键，则`cin`将继续等待值。

提取运算符`<<`也可以链接。这是与上次相同的程序，但是以更简洁的方式编写：

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  int a, b; // Variables to hold the two numbers. 
 
  cout << "Please enter two numbers:" << endl; 
  cin >> a >> b; 
  cout << "The sum of your numbers is: " << a + b << endl; 
 } 
```

链接时，提取操作符将首先从`cin`读取数据以填充`a` ，然后读取数据以填充`b` 。

C的标准printf和scanf语句也可以通过导入'与c ++一起使用' '头文件。

## 来源

1.  http://www.cplusplus.com/reference/ostream/ostream/operator%3C%3C/
2.  http://www.cplusplus.com/reference/istream/istream/operator%3E%3E/
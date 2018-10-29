---
title: Python Input Function
localeTitle: Python输入函数
---
很多时候，在程序中我们需要来自用户的一些输入。从用户那里获取输入使程序感觉互动。在Python 3中，为了从用户那里获取输入，我们有一个函数`input()` 。如果调用输入函数，程序流将停止，直到用户给出输入并用返回键结束输入。我们来看一些例子：

1.  当我们想要输入时：
    
    # 这只会给出一个没有任何消息的提示
    
    inp = input（）
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CUqX/0)

1.  要给出带有消息的提示：
    
    _具有_消息输入=提示（” “）
    
    # \_
    
    # 输出中的“\_”是提示符
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CUqX/1)

3.当我们想要一个整数输入时：
```
number = int(input('Please enter a number: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CUqX/2)

如果输入非整数值，则Python将抛出错误`ValueError` 。 **所以每当你使用它时，请确保你也能抓住它。**否则，您的程序将在提示后意外停止。
```
number = int(input('Please enter a number: ')) 
 # Please enter a number: as 
 # Enter a string and it will throw this error 
 # ValueError: invalid literal for int() with base 10 'as' 
```

4.当我们想要一个字符串输入时：
```
string = str(input('Please enter a string: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CUqX/3)

但是，输入默认存储为字符串。使用`str()`函数使代码阅读器清楚输入将是一个'字符串'。提及将事先采用何种类型的输入是一种很好的做法。

[官方文件](https://docs.python.org/3/library/functions.html#input)
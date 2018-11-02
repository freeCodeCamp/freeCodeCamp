---
title: Lambda Expressions
localeTitle: تعبيرات لامدا
---
## تعبيرات لامدا

تستخدم Lambda Expressions بشكل مثالي عندما يكون لدينا شيء بسيط يمكن القيام به ، فنحن مهتمون أكثر بإنجاز المهمة بسرعة بدلاً من تسمية الوظيفة بشكل رسمي. تعرف تعبيرات لامدا أيضًا بالوظائف المجهولة. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md) .

تعبيرات Lambda في Python هي طريقة قصيرة لإعلان وظائف صغيرة ومجهولة (ليس من الضروري توفير اسم لوظائف lambda). وظائف Lambda تتصرف مثل الوظائف العادية المعلنة `def` المفتاحية. أنها تأتي في متناول اليدين عندما تريد تحديد وظيفة صغيرة بطريقة موجزة. يمكن أن تحتوي على تعبير واحد فقط ، لذلك فهي ليست الأنسب للوظائف مع عبارات تدفق التحكم. رئيس

#### بناء جملة دالة لامبدا

`lambda arguments: expression`

يمكن أن تحتوي دالات Lambda على أي عدد من الوسيطات ولكن فقط تعبير واحد

#### كود المثال

 `# Lambda function to calculate square of a number 
 square = lambda x: x ** 2 
 print(square(3)) # Output: 9 
 
 # Traditional function to calculate square of a number 
 def square1(num): 
  return num ** 2 
 print(square(5)) # Output: 25 
` 

في المثال lambda أعلاه lambda `lambda x: x ** 2` ينتج كائن دالة مجهول يمكن ربطه بأي اسم. لذا ، قمنا بربط كائن الدالة مع `square` وبالتالي من الآن فصاعداً يمكننا استدعاء الكائن `square` مثل أي وظيفة تقليدية. مثل `square(10)`

## أمثلة

### مبتدئ

 `lambda_func = lambda x: x**2 # Function that takes an integer and returns its square 
 lambda_func(3) # Returns 9 
` 

### متوسط

 `lambda_func = lambda x: True if x**2 >= 10 else False 
 lambda_func(3) # Returns False 
 lambda_func(4) # Returns True 
` 

### مركب

 `my_dict = {"A": 1, "B": 2, "C": 3} 
 sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B'] 
` 

### حالة الاستخدام

لنفترض أنك تريد تصفية الأرقام الفردية من `list` . يمكنك استخدام حلقة `for` :

 `my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 filtered = [] 
 
 for num in my_list: 
     if num % 2 != 0: 
         filtered.append(num) 
 
 print(filtered)      # Python 2: print filtered 
 # [1, 3, 5, 7, 9] 
 ``` 
 
 You could write this as a one liner with list-comprehensions 
` 

الثعبان filtered = \[x for x in \[1، 2، 3، 4، 5، 6، 7، 8، 9، 10\] if x٪ 2! = 0\] \`\` \`

ولكن قد تميل إلى استخدام وظيفة `filter` المضمنة. لماذا ا؟ المثال الأول هو قليلاً للتطويق ، يمكن أن يكون من الصعب فهم الخط الواحد ، حيث يقدم `filter` أفضل ما في الكلمتين. ما هو أكثر من ذلك ، عادة ما تكون الوظائف المضمنة أسرع.

\`\` \`الثعبان my\_list = \[1 ، 2 ، 3 ، 4 ، 5 ، 6 ، 7 ، 8 ، 9 ، 10\]

filtered = filter (lambda x: x٪ 2! = 0، my\_list)

قائمة (تصفية)

# \[1 ، 3 ، 5 ، 7 ، 9\]

` `` NOTE: in Python 3 built in function return generator objects, so you have to call` معادة ` `` NOTE: in Python 3 built in function return generator objects, so you have to call` القائمة `, while in Python 2 they return a` قائمة `,` مجموعة `or` سلسلة.

ماذا حدث؟ لقد أخبرت `filter` أن تأخذ كل عنصر في `my_list` وتطبيق تعبيرات lambda. يتم تصفية القيم التي تُرجع `False` .

#### معلومات اكثر:

*   [الوثيقة الرسمية](https://docs.python.org/3/reference/expressions.html#lambda)
*   [اقرأ المزيد](https://dbader.org/blog/python-lambda-functions)
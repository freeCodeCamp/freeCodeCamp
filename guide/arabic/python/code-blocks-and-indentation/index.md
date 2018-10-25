---
title: Python Code Blocks and Indentation
localeTitle: كتل بيثون كود و المسافة البادئة
---
من الممارسات الجيدة عمومًا عدم مزج علامات التبويب والمسافات عند التشفير في Python. قد يؤدي القيام بذلك إلى حدوث `TabError` ، `TabError` البرنامج. كن ثابتًا عند التعليمة البرمجية - اختر إما للمسافة البادئة باستخدام علامات التبويب أو المساحات واتبع الاصطلاح الذي اخترته في البرنامج.

#### كتل رمز و المسافة البادئة

واحدة من السمات الأكثر تميزًا في بايثون هي استخدام المسافات البادئة لوضع علامات على الكود. فكر في if-statement من برنامج بسيط لفحص كلمة المرور:

\`\` \`الثعبان إذا كان pwd == "apple ': طباعة ("تسجيل الدخول ...") آخر: طباعة ("كلمة مرور غير صحيحة.")

طباعة ("كل ذلك!")

 `The lines print('Logging on ...') and print('Incorrect password.') are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements. 
 
 To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python. 
 
 In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print('All done!') is not indented, and so is not part of the else-block. 
 
 Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation. 
 
 #### If/elif-statements 
 An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay: 
` 

الثعبان

# airfare.py

age = int (input ("كم عمرك؟")) إذا كان العمر <= 2: طباعة ("مجاني") elif 2 <age <13: طباعة (أجرة الطفل) آخر: طباعة ("أجرة البالغين")

 `After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block. 
 
 #### Conditional expressions 
 Python has one more logical operator that some programmers like (and some don't!). It's essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code: 
` 

الثعبان food = input ("ما هو طعامك المفضل؟") رد = 'ياك' إذا كان الطعام == 'خروف' آخر 'يم'

 `The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either 'yuck' or 'yum'. It's equivalent to the following: 
` 

الثعبان food = input ("ما هو طعامك المفضل؟") إذا كان الطعام == "الضأن": رد = "يغت" آخر: رد = "يم" \`\` \`

عادةً ما تكون التعبيرات الشرطية أقصر من العبارات المقابلة في حالة / else- ، على الرغم من أنها ليست مرنة أو سهلة القراءة. بشكل عام ، يجب عليك استخدامها عند جعل الرمز الخاص بك أبسط.

[توثيق بايثون - المسافة البادئة](https://docs.python.org/3/reference/lexical_analysis.html#indentation)
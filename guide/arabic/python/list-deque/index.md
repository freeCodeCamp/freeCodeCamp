---
title: Deque
localeTitle: و
---
## استخدام قائمة كقوائم انتظار

من الممكن أيضًا استخدام قائمة كقائمة انتظار ، حيث يلزم إجراء عملية FIFO ("أول دخول ، أول"). القوائم ليست فعالة كقائمة انتظار أثناء استخدام إلحاقات و الملوثات العضوية الثابتة ، كما يمكن أن يكون بطيء كما سيتم تحويل كافة العناصر بواسطة واحد لكل إلحاق / الملوثات العضوية الثابتة.

لتنفيذ قائمة انتظار ، استخدم collections.deque الذي تم تصميمه ليكون له إلحاق سريع وملوثات من كلا الطرفين.

#### مثال للاستخدام

 `from collections import deque 
 queue = deque(["January", "February", "March", "April"] ) 
 
 queue.append("May") 
 
 queue.popleft() 
 queue.popleft() 
 
 print "Spring months in the list: ", queue 
` 

#### انتاج |

 `Spring months in the list:  deque(['March', 'April', 'May']) 
` 

#### معلومات اكثر:

الوثائق الرسمية ل `collections.deque` يمكن العثور عليها [هنا](https://docs.python.org/3/library/collections.html#collections.deque)
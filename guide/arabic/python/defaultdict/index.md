---
title: Python defaultdict
localeTitle: Python defaultdict
---
## Python defaultdict

القاموس هو واحد من أكثر هياكل البيانات المستخدمة في بايثون. القاموس هو مجموعة غير مرتبة من العناصر وعادة ما يكون لدينا مفاتيح وقيم مخزنة في القاموس. دعونا نلقي نظرة على بعض الأمثلة لكيفية استخدام القاموس عادة.

 `# dictionary declaration 1 
 dict1 = dict() 
 
 # dictionary declaration 2 
 dict2 = {} 
 
 # Add items to the dictionary 
 # The syntax to add and retrieve items is same for either of the two objects we defined above. 
 key = "X" 
 value = "Y" 
 dict1[key] = value 
 
 # The dictionary doesn't have any specific data-type. 
 # So, the values can be pretty diverse. 
 dict1[key] = dict2 
` 

دعونا ننظر الآن في بعض طرق الاسترجاع.

 ``# Since "X" exists in our dictionary, this will retrieve the value 
 value = dict1[key] 
 
 # This key doesn't exist in the dictionary. 
 # So, we will get a `KeyError` 
 value = dict1["random"] 
`` 

### تجنب KeyError: استخدم وظيفة .get

في حالة عدم وجود المفتاح المحدد في القاموس ، فإن Python `KeyError` . هناك حل بسيط لهذا. دعونا ننظر في كيف يمكننا تجنب `KeyError` باستخدام مدمج وظيفة `.get` .

 `dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 # The most basic way of doing this is to check if the key 
 # exists in the dictionary or not and only retrieve if the 
 # key exists. Otherwise not. 
 if random_key in dict_: 
  print(dict_[random_key]) 
 else: 
  print("Key = {} doesn't exist in the dictionary".format(dict_)) 
` 

في كثير من الأحيان ، نوافق على الحصول على قيمة افتراضية عندما لا يكون المفتاح موجودًا. على سبيل المثال عندما بناء عداد. هناك طريقة أفضل للحصول على القيم الافتراضية من القاموس في حالة مفاتيح مفقودة بدلاً من الاعتماد على معيار `if-else` .

 `# Let's say we want to build a frequency counter for items in the following array 
 arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1] 
 
 freq = {} 
 
 for item in arr: 
  # Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value 
  freq[item] = freq.get(item, 0) + 1 
` 

لذا ، تعد عملية `get(<key>, <defaultval>)` عملية سهلة لاسترجاع القيمة الافتراضية لأي مفتاح محدد من القاموس. تأتي مشكلة هذه الطريقة عندما نريد التعامل مع هياكل البيانات القابلة للتغيير مثل القيم على سبيل المثال `list` أو `set` .

 `dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 dict_[random_key] = dict_.get(random_key, []).append("Hello World!") 
 print(dict_) # {'random': None} 
 
 dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()).add("Hello World!") 
 print(dict_) # {'random': None} 
` 

هل رأيت المشكلة؟

لا يتم `set` الجديدة أو `list` الجديدة لمفتاح القاموس. يجب علينا تعيين `list` جديدة أو `set` إلى المفتاح في حالة القيمة المفقودة ثم `append` أو `add` على التوالي. نظرة لي على سبيل المثال لهذا.

 `dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
 print(dict_) # {'random': set(['Hello World!'])}. Yay! 
` 

### تجنب KeyError: استخدم defaultdict

هذا يعمل أكثر من مرة. ومع ذلك ، هناك طريقة أفضل للقيام بذلك. طريقة أكثر `pythonic` . `defaultdict` هو فئة فرعية للفئة dict المضمنة. يقوم `defaultdict` ببساطة بتعيين القيمة الافتراضية التي `defaultdict` في حالة وجود مفتاح مفقود. لذا ، فإن الخطوتين:

 `dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
` 

يمكن الآن دمجها في خطوة واحدة. على سبيل المثال

 `from collections import defaultdict 
 
 # Yet another random key 
 random_key = "random_key" 
 
 # list defaultdict 
 list_dict_ = defaultdict(list) 
 
 # set defaultdict 
 set_dict_ = defaultdict(set) 
 
 # integer defaultdict 
 int_dict_ = defaultdict(int) 
 
 list_dict_[random_key].append("Hello World!") 
 set_dict_[random_key].add("Hello World!") 
 int_dict_[random_key] += 1 
 
 """ 
  defaultdict(<class 'list'>, {'random_key': ['Hello World!']}) 
  defaultdict(<class 'set'>, {'random_key': {'Hello World!'}}) 
  defaultdict(<class 'int'>, {'random_key': 1}) 
 """ 
 print(list_dict_, set_dict_, int_dict_) 
` 

* * *

[المستندات الرسمية](https://docs.python.org/2/library/collections.html)
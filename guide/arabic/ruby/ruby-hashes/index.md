---
title: Ruby Hashes
localeTitle: روبي هاشز
---
## روبي هاشز

التجزئة هي مجموعة من المفاتيح والقيم. يشبه ما يسمى عادةً قاموسًا بلغات أخرى. في روبي ، تشبه التجزئة [صفيفًا](https://raw.githubusercontent.com/freeCodeCamp/guides/master/src/pages/ruby/ruby-arrays/index.md) ، ولكن بدلاً من تخزين قيمة تخزن زوجًا رئيسيًا ذا قيمة.

 `array = ["value"] 
 hash = { "key" => "value" } 
` 

هناك طريقتان مختلفتان لإنشاء تجزئة جديدة:

 `hash1 = {a: 100, b: "200"} 
 hash2 = Hash.new 
 hash3 = Hash.new(0) # with default value set to 0 
` 

يمكن للمبرمج بعد ذلك الوصول إلى قيمة تجزئة باستخدام مفتاحه ، بدلاً من الفهرس.

 `array[0] # => "value" 
 hash["key"] # => "value" 
` 

وبهذه الطريقة ، يعمل تجزئة مثل القاموس حيث يمكنك البحث عن قيمة من خلال مفتاحه.

 `dictionary = { "Aardvark" => "a large, nocturnal, burrowing mammal", 
               "Zyzzyva" => "a genus of tropical weevils" } 
 dictionary["Aardvark"] # => "a large, nocturnal, burrowing mammal" 
 dictionary["Zyzzyva"] # => "a genus of tropical weevils" 
` 

يمكنك أيضًا إنشاء تجزئة باستخدام [الرموز](#) كمفاتيح.

 `hash = { :symbol => "value" } 
 hash[:symbol] # => "value" 
` 

بالإضافة إلى ذلك ، إذا كانت جميع المفاتيح الخاصة بك هي [رموز](#) ، فيمكنك كتابة التجزئة في هذا التنسيق البديل ، ولكن يمكنك الوصول إليها بنفس الطريقة:

 `hash = { symbol: "value" } 
 hash[:symbol] # => "value" 
` 

#### معلومات اكثر:

[وثائق روبي هاش](https://ruby-doc.org/core-2.4.2/Hash.html)
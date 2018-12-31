---
title: Learn About Ruby Hashes
localeTitle: تعرف على روبي هاشز
---
### الأساسيات:

*   تجدر الإشارة إلى أن روبي تجاورها كائنات جافا سكريبت أو قواميسها بلغات مثل بايثون.
*   تحتوي العناصر على عناصر يتم تخزينها بواسطة `key: value` أزواج `key: value` .
*   يمكن إنشاء تجزئات Ruby باستخدام الطرق التالية:
    *   `my_hash = {}`
    *   `my_hash = Hash.new`
*   هناك العديد من الطرق المضمنة في Ruby للعثور على معلومات وتحديثات التجزئة.

## أمثلة:

 `my_hash = {'name' => 'Batman', 'age' => 25} 
 # is equivalent to: 
 my_hash = Hash.new 
 my_hash<a href='http://www.randomhacks.net/2007/01/20/13-ways-of-looking-at-a-ruby-symbol/' target='_blank' rel='nofollow'>'name'] = 'Batman' 
 my_hash['age'] = 25 
 # Both of these examples return: 
 {"name"=>"Batman", "age"=>25} 
 
 # here is an alternative way to create the array: 
 {name: 'Batman', age: 25} 
 # this example return: 
 {:name=>"Batman", :age=>25} 
 # learn more about [symbols here</a> 
` 

## المراجع:

*   [وثائق روبي الرسمية عن تجزئة](http://ruby-doc.org/core-2.2.0/Hash.html) .
---
title: Range For Loop
localeTitle: نطاق للحلقة
---
## النطاق القائم للحلقة

ومقرها تراوحت `for` حلقة يسمح سهلة حلقات على مجموعة من العناصر (مثل عناصر في وعاء).

مع التقليدية `for` حلقة:

 `std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (size_t il; il < stringList.size(); il++ 
 { 
  std::cout << stringList.at(il) << std::endl; 
 } 
` 

مع مجموعة المستندة `for` حلقة:

 `std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (auto& singleString : stringList) 
 { 
  std:cout << singleString << std::endl; 
 } 
`
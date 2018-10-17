---
title: Nested If Statement
localeTitle: متداخلة If بيان
---
# متداخلة If بيان

يتم استخدام البيان المتداخل If عند إنشاء عبارة if تريد نقطة ثانوية للتحقق أو إذا كانت عبارة داخلها.

 `int Price = 100; 
 int Quantity = 20; 
 
 if (Price == 100) 
 { 
  if (Quantity == 20) 
  { 
    Console.WriteLine("Price of an item is 200, and we have 20 in quantity."); 
  } 
 } 
` 

لذلك ، وبما أننا حددنا مسبقاً السعر والكمية ، سيكون الناتج:

 `Price of an item is 200, and we have 20 in quantity. 
`
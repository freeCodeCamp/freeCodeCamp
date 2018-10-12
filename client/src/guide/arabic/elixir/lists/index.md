---
title: Lists
localeTitle: قوائم
---
## قوائم

في الإكسير ، القوائم هي هياكل بيانات تتألف من قيم داخل أقواس مربعة. يمكن أن تكون القيم في القائمة أي نوع.

 `iex> [1, "string", true] 
 [1, "string", true] 
` 

## ثبات

هياكل البيانات في Elixir غير قابلة للتغيير ، لذا فإن أي عمليات يتم تنفيذها في قائمة ستعيد قائمة جديدة ، تاركة الأصلي سليمة.

 `iex> list = [1, "string", true] 
 [1, "string", true] 
 iex> list ++ [2] 
 [1, "string", true, 2] 
 iex> list 
 [1, "string", true] 
` 

## رؤساء والذيول

يمكن الوصول بسهولة إلى الرأس (العنصر الأول) من القائمة والذيل (القيم المتبقية) مع مشغلي `hd/1` و `tl/1` .

 `iex> list = [1, "string", true] 
 iex> hd(list) 
 1 
 iex> tl(list) 
 ["string", true] 
` 

#### معلومات اكثر:

*   [elixir-lang.org | العودية](https://elixir-lang.org/getting-started/basic-types.html#linked-lists)
*   [hexdocs | التعداد](https://hexdocs.pm/elixir/List.html)
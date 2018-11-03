---
title: Strings
localeTitle: سلاسل
---
## سلاسل

يتم التفاف سلاسل في الإكسير مع علامات اقتباس مزدوجة ، في حين يتم سرد القوائم الفردية. هم الثنائيات المشفرة UTF-8.

 `iex> "Hello world!" 
 "Hello world!" 
` 

سلسلة الاستيفاء ممكن في الإكسير مع octothorp تليها الأقواس المجعد.

 `iex> variable = "world!" 
 "world!" 
 iex> "Hello #{variable}" 
 "Hello world!" 
` 

تحتوي الوحدة النمطية السلسلة على العديد من الوظائف المضمنة المفيدة استنادًا إلى معيار Unicode.

 `iex> example = "string" 
 "string" 
 iex> String.capitalize(example) 
 "String" 
 iex> String.duplicate(example, 2) 
 "stringstring" 
` 

#### معلومات اكثر:

*   [elixir-lang.org | العودية](https://elixir-lang.org/getting-started/basic-types.html#strings)
*   [hexdocs | التعداد](https://hexdocs.pm/elixir/String.html)
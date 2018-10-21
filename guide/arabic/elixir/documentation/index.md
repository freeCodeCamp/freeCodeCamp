---
title: Documentation
localeTitle: كابل بيانات
---
## كابل بيانات

واحدة من أفضل المتطور من إكسير بالمقارنة مع لغات البرمجة الأخرى هو نظام التوثيق الخاص بها. يتم إنشاء وثائق Elixir بواسطة تعليقات الكود الخاص بك وجعلها في موقع HTML جميل لتصفح بسهولة وفهم كيفية عمل التطبيق. بمجرد فهم كيفية التعليق على الكود بشكل صحيح في الإكسير ، ستتمكن من شرح كيفية عمل التطبيق الخاص بك مع المبرمجين الآخرين بسهولة. في الأمثلة أدناه ، نعرض استخدام وظائف وثائق Elixir في وحدة خادم الويب الخيالية.

### الوثائق المضمنة

يستخدم المستند المضمن `#` أمام نص يصف شيئًا عن الشفرة.

 `def get(path) do 
    # This is an inline comment for documentation purposes. 
    "http get request response" 
  end 
` 

### وثائق الوحدة

يصف مستند الوحدة النمطية الغرض من وحدة نمطية. تشبه Moduledocs التعليقات متعددة الأسطر التي قد تجدها في لغات البرمجة الأخرى.

 `defmodule WebServer do 
  @moduledoc """ 
    Provides a set of functions to accept and respond to HTTP requests. 
    This module provides the @get/1, @post/1, and @put/1 functions. 
  """ 
 end 
` 

### وثائق الوظيفة

تصف وثائق الوظيفة الغرض من وظيفة واحدة واستخدامها. تتشابه أداة Functiondocs مع التعليقات متعددة الأسطر التي قد تجدها في لغات البرمجة الأخرى. كما تعرض أمثلة على الدالة بحيث يعرف مبرمج آخر ما يمكن توقعه.

 `  @doc """ 
    Responds to a get request 
 
    ## Parameters 
     - path: A path to the desired resource 
 
    ## Examples 
     - iex> WebServer.get(/documentation.pdf) 
       "Returning documentation.pdf 
     - iex> WebServer.get(/downloads.html) 
       "Returning downloads.html" 
  """ 
  def get(path) do 
    "http get request response" 
  end 
` 

#### معلومات اكثر:

*   [ElixirSchool - التوثيق](https://elixirschool.com/en/lessons/basics/documentation/)
*   [ExDoc](https://github.com/elixir-lang/ex_doc)
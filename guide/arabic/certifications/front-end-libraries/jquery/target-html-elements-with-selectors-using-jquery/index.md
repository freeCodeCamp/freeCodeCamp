---
title: Target HTML Elements with Selectors Using jQuery
localeTitle: عناصر HTML الهدف مع المحددات باستخدام jQuery
---
*   تتيح لك أدوات اختيار JQuery تحديد عناصر HTML والتعامل معها.
*   تبدأ هذه المحددات مع علامة الدولار والأقواس: $ ()
*   يمكنك "إيجاد" (أو تحديد) عناصر HTML استنادًا إلى الاسم والمعرف والفئات والأنواع والسمات وقيم السمات وغير ذلك الكثير.

## مثال

 `//You can select all <p> elements on a page like this  =  $("p") 
  $(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
` 

## حل

 `<script> 
  $(document).ready(function() { 
      $("button").addClass("animated bounce"); // We are selecting the button elements and adding "animated bounce" class to them. 
  }); 
 </script> 
`
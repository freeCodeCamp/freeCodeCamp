---
title: Tables
localeTitle: الجداول
---
### تحديد جدول HTML

يتم تعريف جدول HTML مع العلامة.

يتم تعريف كل صف الجدول بـ

العلامة. داخل الصف قد تكون هناك رؤوس جدول أو بيانات جدول.

*   يتم تعريف رأس الجدول مع

العلامة. بشكل افتراضي ، تكون عناوين الجدول غامقة ويتم توسيطها.*   يتم تعريف بيانات الجدول / الخلية مع

العلامة.

قد يتضمن جدول HTML أكثر تعقيدًا أيضًا عناصر `<caption>` و `<col>` و `<colgroup>` و `<thead>` و `<tfoot>` و `<tbody>` في ذلك.

### مثال بسيط على الجدول

 `
<table style="width:100%"> 
  <tr> 
    <th>Firstname</th> 
    <th>Lastname</th> 
    <th>Age</th> 
  </tr> 
  <tr> 
    <td>Jill</td> 
    <td>Smith</td> 
    <td>50</td> 
  </tr> 
  <tr> 
    <td>Eve</td> 
    <td>Jackson</td> 
    <td>94</td> 
  </tr> 
 </table> 
` 

[DEMO](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table)

### مثال الجدول مع مزيد من المعلومات الدلالية

 `
<!DOCTYPE html> 
    <html> 
    <body> 
       <table> 
      <thead> 
        <tr> 
          <th>Item</th> 
          <th>Amount</th> 
        </tr> 
      </thead> 
      <tfoot> 
        <tr> 
          <td>Apple</td> 
          <td>10</td> 
        </tr> 
      </tfoot> 
      <tbody> 
        <tr> 
          <td>Peach</td> 
          <td>15</td> 
        </tr> 
        <tr> 
          <td>Watermelon</td> 
          <td>3</td> 
        </tr> 
      </tbody> 
    </table> 
    </body> 
   </html> 
` 

نتيجة:

بند

كمية

تفاحة

10

خوخ

15

البطيخ

3

#### معلومات اكثر:

[المادة MDN على HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [بطاقة](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
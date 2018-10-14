---
title: Go Functions
localeTitle: الذهاب وظائف
---
## الذهاب وظائف

تأخذ الدالة صفرًا أو أكثر من أي معلمة من أي نوع ، وتقوم ببعض المنطق معها وقد ترجع واحدة أو أكثر من القيم. بناء جملة الدالة Golang هو:

 `func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
 } 
` 

هنا ، اسم الوظيفة هو `add` . فإنه يأخذ إلى المعلمات ، `parameter1` و `parameter2` من النوع `int64` وإرجاع int64 آخر ، مجموع المعلمتين.

### إرجاع

بعد `return` التوصل، مخارج وظيفة دون تنفيذ المزيد من التعليمات البرمجية.

 `func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
  // Unreachable code 
  fmt.Printf("Don't print me") 
 } 
` 

### استدعاء وظيفة

سيتم تسمية الوظيفة المذكورة أعلاه على النحو التالي:

 `sum(4, 5) 
` 

قيمة هذا التعبير هي 9.

### احذف نوع المعلمة

إذا كانت معلمتان متتاليتان أو أكثر من نفس النوع ، فيمكن ذكرها مرة واحدة فقط.

 `function foo(x, y, z int64, name string) { 
  fmt.Printf("%d %d %d %s", x, y, z, name) 
 } 
` 

هنا `x` و `y` و `z` اكتب `int64` ، `name` عبارة عن سلسلة.

### إرجاع قيم متعددة

يمكن أن تقوم الدالة بإرجاع قيم الصفر أو أكثر. لإرجاع أي شيء ، احذف نوع الإرجاع:

 `function helloWorld() { 
  fmt.Printf("Hello world!") 
 } 
` 

لإرجاع قيمة واحدة حدد نوعه:

 `function getHelloWorld() string { 
  return "Hello world!" 
 } 
` 

لإرجاع أكثر من قيمة ، حدد أنواعها ، ملفوفة في `()` ومفصولة بفواصل:

 `function getHelloWorldAndBestLanguage() (string, string) { 
  return "Hello world!", "Golang" 
 } 
` 

لتلقي هذه القيم ، قم ببساطة بتعريف المتغيرات المفصولة بفواصل مثل:

 `helloWorld, bestLanguage := getHelloWorldAndBestLanguage() 
 // helloWorld == "Hello world!" 
 // bestLanguage == "Golang" 
` 

### عوائد عارية

يمكنك تسمية أنواع الإرجاع بحيث لا تحتاج إلى تمرير متغير إلى بيان الإرجاع:

 `func duplicate(s string) (first, second string) { 
  first = s 
  last = s 
    return 
 } 
 
 func main() { 
    fmt.Println(split("Hello world!")) // ("Hello world!", "Hello world!") 
 } 
` 

#### معلومات اكثر:

https://tour.golang.org/basics/4
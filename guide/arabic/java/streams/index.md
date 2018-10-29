---
title: Streams
localeTitle: تيارات
---
# تيارات

في Java 8 Streams تمت إضافتها كميزة جديدة في مربع أدوات Java. تتيح لك مجموعات البث معالجة المجموعات بسرعة وسهولة.

يرجى قراءة الفصل حول lambdas والبرمجة الوظيفية قبل المتابعة.

## كيف تعمل

يقوم الدفق بتكرار عناصر المجموعة لك. يتم استدعاء كل عملية وسيطة وعملية لكل كائن. بمجرد الانتهاء من جميع العمليات للكائنات الأولى ، ثم يتم تحميل الكائن الثاني.

## طرق مهمة

### خلق

*   `Collection.stream()` : إنشاء دفق من أي كائن من أي فئة تنفيذ `Collection`
*   `Arrays.stream(array)` : إنشاء دفق من صفيف

### العمليات الوسيطة

هذه العمليات تحويل "كائنات دفق" بطريقة أو بأخرى.

*   `Stream.map(Function<In,Out> function)` : تطبيق وظيفة لتحويل In إلى Out
*   `Stream.filter(Predicate<In> predicate)` : إزالة كائنات من Stream التي لا `Stream.filter(Predicate<In> predicate)` true
*   `Stream.distinct()` : إزالة كائنات من دفق والتي هي مكررة
*   `Stream.sorted()` : فرز الكائنات في الدفق
*   `Stream.limit(int n)` : end Stream after n Objects

### العمليات الطرفية

هذه العمليات تلقي "كائنات دفق" وإنهاء "دفق".

*   `Stream.collect(Collector<In,?,Out> collector)` : جمع كافة الكائنات في دفق في كائن
*   `Stream.forEach(Consumer<In> consumer)` : تستهلك كافة الكائنات في دفق باستخدام الدالة المستهلك
*   `Stream.count()` : حساب كافة الكائنات في دفق
*   `Stream.findFirst()` : إرجاع الكائن الأول من الدفق وإيقاف
*   `Stream.anyMatch(Predicate<In> predicate)` : إرجاع true إذا كان أي كائن في Stream اختبارات true لـ Predicate
*   `Stream.allMatch(Predicate<In> predicate)` : إرجاع true إذا كان كل كائن في اختبار Stream صحيح لـ Predicate

## أمثلة

 `// print the length of all Strings in a List 
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    int length = string.length(); 
    System.out.println(length); 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .map(String::length) 
        .forEach(System.out::println); 
 
 // output: 3 2 1 3 
` 

 `// print all Strings in a List with a Length greater than 2 
 for (String string : Arrays.asList("abc", "de", "f", "abc")) { 
    if (string.length() > 2) { 
        System.out.println(string); 
    } 
 } 
 
 Arrays.asList("abc", "de", "f", "abc") 
        .stream() 
        .filter(string -> string.length() > 2) 
        .forEach(System.out::println); 
 
 // output: abc abc 
` 

 `// create a sorted List with all unique Strings from another List which are longer than or requal 2 
 List<String> result = new ArrayList<>(); 
 for (String string : Arrays.asList("de", "abc", "f", "abc")) { 
    if (string.length() >= 2 
            && ! result.contains(string)) { 
        result.add(string); 
    } 
 } 
 Collections.sort(result); 
 
 List<String> result2 = Arrays.asList("de", "abc", "f", "abc") 
        .stream() 
        .filter(string -> string.length() >= 2) 
        .distinct() 
        .sorted() 
        .collect(Collectors.toList()); 
 
 // result: abc de 
` 

### مصادر

1.  [معالجة البيانات باستخدام Java SE 8 Stream ، الجزء الأول](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)
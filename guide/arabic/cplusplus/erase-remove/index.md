---
title: Erase–remove idiom
localeTitle: مسح-إزالة لغة
---
## Desctiprion

كيفية إزالة العناصر من الحاوية هي سؤال شائع في C ++ ، حتى تتمكن من كسب بعض النقاط ، إذا قرأت هذه الصفحة بعناية. إن عبارة idase – remove هي تقنية C ++ للقضاء على العناصر التي تستوفي معيارًا معينًا من الحاوية. Heverever ، من الممكن إزالة العناصر ذات العروق التقليدية المكتوبة يدويًا ، إلا أن عبارة idase – remove لها مزايا عديدة.

### مقارنة

 `// Using a hand-written loop 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 for (auto iter = v.cbegin(); iter < v.cend(); /*iter++*/) 
 { 
    if (is_odd(*iter)) 
    { 
        iter = v.erase(iter); 
    } 
    else 
    { 
        ++iter; 
    } 
 } 
 
 // Using the erase–remove idiom 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
` 

كما ترون ، يتطلب التعليمة البرمجية ذات حلقة مكتوبة يدويًا كتابة أكثر قليلاً ، ولكن لها أيضًا مشكلة في الأداء. يجب أن تقوم كل مكالمة `erase` بتحويل جميع العناصر بعد المحذوفة ، لتجنب "الفجوات" في المجموعة. داعيا `erase` عدة مرات على نفس الحاوية يولد الكثير من النفقات العامة من تحريك العناصر.

ومن ناحية أخرى ، فإن الشفرة التي تحتوي على المصطلح "إزالة - إزالة" ليست فقط أكثر تعبيرا ، ولكنها أيضا أكثر كفاءة. أولاً ، يمكنك استخدام `remove_if/remove` لنقل جميع العناصر التي لا تلائم معايير الإزالة إلى مقدمة النطاق ، مع الاحتفاظ بالترتيب النسبي للعناصر. لذلك ، بعد استدعاء `remove_if/remove` ، `remove_if/remove` مكالمة واحدة من `erase` جميع العناصر المتبقية في نهاية النطاق.

### مثال

 `#include <vector> // the general-purpose vector container 
 #include <iostream> // cout 
 #include <algorithm> // remove and remove_if 
 
 bool is_odd(int i) 
 { 
    return (i % 2) != 0; 
 } 
 
 void print(const std::vector<int> &vec) 
 { 
    for (const auto& i : vec) 
        std::cout << i << ' '; 
    std::cout << std::endl; 
 } 
 
 int main() 
 { 
    // initializes a vector that holds the numbers from 1-10. 
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
    print(v); 
 
    // removes all elements with the value 5 
    v.erase(std::remove(v.begin(), v.end(), 5), v.end()); 
    print(v); 
 
    // removes all odd numbers 
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
    print(v); 
 
    // removes multiples of 4 using lambda 
    v.erase(std::remove_if(v.begin(), v.end(), [](int n) { return (n % 4) == 0; }), v.end()); 
    print(v); 
 
    return 0; 
 } 
 
 /* 
 Output: 
 1 2 3 4 5 6 7 8 9 10 
 1 2 3 4 6 7 8 9 10 
 2 4 6 8 10 
 2 6 10 
 */ 
` 

### مصادر

"مسح - إزالة كلمة" ويكيبيديا: الموسوعة الحرة. Wikimedia Foundation، Inc. [en.wikipedia.org/wiki/Erase-remove\_idiom](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom)

مايرز ، سكوت (2001). STL فعالة: 50 طرق محددة لتحسين استخدامك لمكتبة النماذج القياسية. أديسون ويسلي.
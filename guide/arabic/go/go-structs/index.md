---
title: Go Structs
localeTitle: الذهاب الهياكل
---
## الذهاب الهياكل

في الذهاب ، يتم استخدام البنى لتخزين البيانات والوظائف ذات الصلة. قد يكون أحد الأمثلة بنية لتمثيل مستخدم:

 `type User struct { 
    FirstName string 
    LastName  string 
    Email     string 
    Age       int 
 } 
` 

هنا يمكننا تخزين الاسم الأول للمستخدم واسم العائلة وعنوان البريد الإلكتروني والعمر. يتبع اسم الخاصية نوع البيانات التي نريد تخزينها. على سبيل المثال ، الخاصية `FirstName` هي `string` بينما تكون الخاصية `Age` `int` .

### خلق الأشياء

لتهيئة كائن جديد ، يمكننا استخدام صيغة Go المختصرة لإنشاء وتعيين المتغيرات. يمكننا إما تمرير البيانات في هذه المرحلة أو تعيين البيانات في وقت لاحق:

 `func main() { 
    // Create a user and set both the first and last name properties 
    user1 := User{ 
        FirstName: "John", 
        LastName: "Wick", 
    } 
 
    // Now we have our user object, we can set the data like this 
    user1.Email = "john@wick.com" 
    user1.Age = 30 
 } 
` 

### طرق الكائن

Go تمكن من تخصيص طرق للبنى. يتيح ذلك تجميع العمليات ذات الصلة بالبيانات التي تؤثر عليها. في هذا المثال ، سنكتب طريقة في بنية `User` لإنشاء الاسم الكامل للمستخدم:

 `func (u User) FullName() string { 
    return strings.Join([]string{u.FirstName, u.LastName}, " ") 
 } 
` 

ستنضم هذه الطريقة إلى الاسم الأول والأخير للمستخدم مع وجود مسافة بينهما. قد يبدو استدعاء الطريقة كما يلي:

 `    println(user1.FullName()) 
` 

### العلامات الهيكلية

تُستخدم علامات الهيكل لتعديل كيفية معالجة برامج التشفير للبيانات. على سبيل المثال ، تعيين أسماء المفاتيح عند الترميز إلى JSON:

 ``type User struct { 
    FirstName string `json:"first_name"` 
    LastName  string `json:"last_name"` 
    Email     string `json:"email"` 
    Age       int    `json:"age"` 
 } 
`` 

### البيانات المصدرة

يمكن أن تحتوي الهياكل على كل من المصدرين (العام) والخصائص غير المُصدرة (الخاصة). يتم تعيين هذا إما عن طريق وجود حرف كبير لأول حرف للتصدير أو الحرف الأول صغير لم يتم تصديره. في هذا المثال ، سنجعل خاصية البريد الإلكتروني خاصة:

 `type User struct { 
    // Exported Data 
    FirstName string 
    LastName  string 
    Age       int 
 
    // Unexported Data 
    email     string 
 } 
` 

سيجعل هذا الإجراء التعليمة البرمجية التالية بطرح خطأ في وقت الإنشاء أثناء محاولة التفاعل مع خاصية unexported:

 `    user1.email = "john@wick.com" 
` 

هذا ينطبق أيضًا على الطرق:

 `// Exported method. This can be called from anywhere 
 func (u User) Email() { 
    return u.email 
 } 
 
 // Unexported method. This can only be called by other methods on this struct 
 func (u User) updateLoginCount { 
    // code to update login count... 
 } 
` 

### تعديل الخصائص عبر الطرق

لتعديل بيانات كائن من داخل إحدى طرقه ، يجب أن يكون الكائن مؤشرًا. قد يبدو مثل هذا المثال:

\`\` \`الذهاب // SetEmail يحدد عنوان البريد الإلكتروني للمستخدم func (u \* User) SetEmail (سلسلة البريد الإلكتروني) { u.email = email }

// ملحق البريد الإلكتروني func (u \* User) Email () string { عودة u.email }

func main () { // إنشاء مؤشر user1 user1 = & المستخدم { الاسم الأول: "جون" ، اسم العائلة: "Wick" ، }

 `// Set the user's email address 
 user1.SetEmail("john@wick.com") 
 
 // Access and print the user's email address 
 println(user1.Email()) 
` 

}
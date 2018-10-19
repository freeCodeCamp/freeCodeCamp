---
title: Automating Tasks
localeTitle: أتمتة المهام
---
### أتمتة المهام أو جدولة المهام

هناك ميزة من نظام لينكس مستخدمة بشكل حصري في خادم الويب ، المعروف باسم CRON كما نعلم أن إحدى الميزات الأكثر إقناعًا بأي خادم ويب هي أنه دائمًا تعمل على اتصال دائم بالإنترنت. هذا يعني أنه يمكننا توجيه الخادم الخاص بنا لأداء المهام تلقائيًا ، دون الحاجة إلى إدخال أمر في قذيفة. أحد أكثر البرامج شيوعًا لتنفيذ _البرامج الأخرى_ مع تردد منتظم يسمى `cron` . دعونا نلقي نظرة على كيفية استخدامها `cron` لجدولة برنامج ليتم تشغيلها.

برنامج `cron` هو جزء من عائلة برامج تسمى **daemons** . خفي هو برنامج يعمل دائمًا في خلفية الكمبيوتر. أول، دعونا نرى ما إذا كان `cron` قيد التشغيل. يمكننا الحصول على قائمة بجميع البرامج قيد التشغيل باستخدام الأمر `ps` أثناء استخدام العلامة `-A` :

\`\` \`{r، engine = 'bash'، eval = FALSE} PS -A

## PID TTY TIME CMD

## 1؟ 00:00:13 systemd

## 2؟ 00:00:00 kthreadd

## 3؟ 00:00:03 ksoftirqd / 0

## 5؟ 00:00:00 kworker / 0: 0H

## 7؟ 00:00:11 rcu\_sched

## 8؟ 00:00:00 rcu\_bh

## 9؟ 00:00:00 الترحيل / 0

## ...

 ``You probably have a huge list of programs in your terminal now! Instead of 
 shifting through this listing line-by-line, let's pipe the output of this command 
 to `grep` and we'll look for `cron`: 
`` 

{r، engine = 'bash'، eval = FALSE} ps -A | grep "cron"

## 1273؟ 00:00:01 كرون

 ``# You might or might not get a `cron` running . 
 
 Looks like the `cron` daemon is running! In order to assign programs to be 
 executed with `cron` we need to edit a special text file called the `cron` 
 table. Before we edit the `cron` table we need to select the default text 
 editor. If you like using `nano` (the text editor we've been using throughout 
 this book) then enter `select-editor` into the console, type in the number 
 that corresponds to `nano` (usually `2`) and then press enter: 
`` 

{r، engine = 'bash'، eval = FALSE} حدد محرر

## اختر المحرر. للتغيير لاحقًا ، شغل "select-editor".

## 1\. / بن / إد

## 2\. / بن / نانو <---- أسهل

## 3\. /usr/bin/vim.basic

## 4\. /usr/bin/vim.tiny

## اختر 1-4 \[2\]:

 ``Now that we've chosen a text editor we can edit the `cron` table using the 
 command `crontab -e` (**`cron`** **tab**le **e**dit) which will automatically 
 open `nano` with the appropriate file. 
`` 

{r، engine = 'bash'، eval = FALSE} crontab -e

# تحرير هذا الملف لتقديم المهام ليتم تشغيلها بواسطة cron.

#

# م ح دوم مون داو الأمر

 ``Let's go over the layout of the `cron` table. First you should notice that any 
 text after a pound sign (`#`) is a comment, so it's not seen by `cron` (just 
 like bash comments). The `cron` table has six columns: 
 
 1. Minute (`m`) 
 2. Hour (`h`) 
 3. Day of Month (`dom`) 
 4. Month (`mon`) 
 5. Day of Week (`dow`) 
 6. Command to be run (`command`) 
 
 Each column is separated by a single space in the table. The first five columns 
 allow you to specify when you want a particular command to be run. Only certain 
 values are valid in each column: 
 
 1. Minute: `00 - 59` (A particular minute in an hour) 
 2. Hour: `00 - 23` (0 is the midnight hour) 
 3. Day of Month: `01 - 31` (1 is the first day of the month) 
 4. Month: `01 - 12` (1 is January) 
 5. Day of Week `0 - 6` (0 is Sunday) 
 
 There are also a few other characters that are valid in the `cron` table. The 
 most commonly used character is a star (`*`) which represents *all* of the 
 possible values in a column. So a star in the Minute column means "run every 
 minute," and a star in the Hour column means "run during every hour." 
 Knowing this let's make our first entry in the `cron` table. If we want a 
 command to be executed every minute, during every hour, on every day of the 
 month, during every month, on every day of the week, then we can put stars in 
 all of the first five 
 columns, followed by the command that we want to run. In this case the command 
 that `cron` will run every minute will be `date >> ~/date-file.txt`, which will 
 append the date and time when the command is executed to a file in our home 
 directory called `date-file.txt`. This is what your `cron` table should look 
 like before you save and exit from `nano`: 
`` 

# تحرير هذا الملف لتقديم المهام ليتم تشغيلها بواسطة cron.

#

# م ح دوم مون داو الأمر

*   \* \* \* \* date >> ~ / date-file.txt

 ``Save and exit `nano` just like you would for a regular text file and then wait 
 a little bit! After a minute has gone by use `cat` to look at `~/date-file.txt`: 
`` 

{r، engine = 'bash'، eval = FALSE} القرص المضغوط تاريخ القط ملف

## Thu Jun 8 18:50:01 UTC 2017

 ``Look like our entry in the `cron` table is working! Wait another minute and then 
 look at the file again: 
`` 

{r، engine = 'bash'، eval = FALSE} تاريخ القط ملف

## Thu Jun 8 18:50:01 UTC 2017

## الخميس 8 يونيو 18:51:01 UTC 2017

 ``Unless we delete the line that we entered in the `cron` table, the output from 
 `date` will be appended to `date-file.txt` every minute. 
 
 The single line of bash `date >> ~/date-file.txt` is a much simpler program than 
 we would probably use in a `cron` table, though it's good for illustrating how 
 a `cron` table works. If you want to do more complex tasks with `cron` it's 
 better for `cron` to execute a bash script that you've written in advance. That 
 way you can just specify `bash /path/to/script.sh` in the last column of the 
 table. 
 
 Using stars in all columns is the simplest line of a `cron` table, so let's 
 look at some examples of more complex table entries: 
`` 

# م ح دوم مون داو الأمر

00 \* \* \* \* bash /path/to/script.sh # يتم تشغيل كل ساعة في بداية الساعة 00 12 \* \* \* bash /path/to/script.sh # يعمل كل يوم عند الظهر

*   12 \* \* \* bash /path/to/script.sh # يتم تشغيل كل دقيقة بين الساعة 12 ظهرًا و 12:59 مساءً 00 00 05 \* \* bash /path/to/script.sh # يتم تشغيل اليوم الخامس من كل شهر في منتصف الليل 00 00 \* 07 \* bash /path/to/script.sh # تشغيل كل يوم في شهر تموز عند منتصف الليل 00 00 \* \* 2 bash /path/to/script.sh # يتم التشغيل كل ثلاثاء في منتصف الليل

 ``Besides numbers and the star there are a few other characters that you can use 
 in `cron` table columns including a hyphen (`-`) for specifying ranges and a 
 comma (`,`) for specifying lists of items. For example `00-29` in the Minutes 
 column would specify the first thirty minutes of an hour, while `1,5` in the 
 Day of Week column would specify Monday and Friday. 
 
 Let's take a look at another example of a `cron` table that uses hyphens and 
 ranges so you can get a sense of how each character works. 
`` 

# م ح دوم مون داو الأمر

00-04 \* \* \* \* bash /path/to/script.sh # يتم تشغيل كل دقيقة في الدقائق الخمس الأولى من كل ساعة 00 00 \* \* 0،6 bash /path/to/script.sh # يتم التشغيل عند منتصف ليل السبت والأحد 00 03 01-15 \* \* bash /path/to/script.sh # يتم التشغيل في الساعة الثالثة صباحًا في أول خمسة عشر يومًا من كل شهر 00،30 \* \* \* \* bash /path/to/script.sh # يتم تشغيله في بداية كل ساعة وفي منتصفها 00 00،12 \* \* \* bash /path/to/script.sh # تشغيل كل يوم في منتصف الليل وظهرا 00 \* 01-07 01،06 \* bash /path/to/script.sh # يتم تشغيله في بداية كل ساعة في الأيام السبعة الأولى من شهري يناير ويونيو \`\` \`

إن البرنامج الذي يتم تشغيله بواسطة `cron` يكون فقط بنفس قوة خيالك يمكن أن تمتد! إذا كنت على دراية بالشبكة الاجتماعية [Twitter](https://twitter.com/) ربما تكون قد صادفت بعض التغريد الحسابات التي تنشئ وظائف تلقائيا مثل [Emoji Aquarium](https://twitter.com/emojiaquarium) ، [صور الفاكهة القديمة](https://twitter.com/pomological) ، أو [صراخ لانهائي](https://twitter.com/infinite_scream) . كثير من هذه "بوت" يتم تشغيل الحسابات بواسطة `cron` ، والذي يستخدم واجهة برمجة تطبيقات HTTP للتويتر لنشر التغريدات بشكل منتظم.
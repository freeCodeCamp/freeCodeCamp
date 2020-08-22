<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

<div dir="rtl" style="direction: rtl" markdown="1">

# كيفية فتح طلب سحب

## كيفية إعداد عنوان طلب سحب جيد:

عند فتح طلب سحب (PR) ، استخدم جدول النطاق التالي لتقرير ما الذي يجب أن يميز عنوان العلاقات العامة الخاص بك بالتنسيق التالي:
`fix/feat/chore/refactor/docs/perf (scope): PR Title`

مثال على ذلك`fix(learn): Fixed tests for the do...while loop challenge`.

| نطاق | توثيق |
|---|---|
| `learn`,`curriculum` | لطلبات السحب ، إجراء تغييرات على تحديات المناهج الدراسية. |
| `client` | لطلبات السحب ، إجراء تغييرات على منطق نظام العميل أو واجهة المستخدم |
| `guide` | لطلبات السحب التي تجري تغييرات على الدليل. |
| `docs` | لطلبات السحب ، إجراء تغييرات على وثائق المشروع. |

## اقتراح طلب سحب (PR)

1. بمجرد إجراء التعديلات ، سيُطلب منك إنشاء طلب سحب على صفحة GitHub الخاصة بشركتك.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. بشكل افتراضي ، يجب أن تكون جميع طلبات السحب مقابل المخزن الرئيسي لـ freeCodeCamp ، وهو الفرع الرئيسي.

    تأكد من ضبط Base Fork على freeCodeCamp/freeCodeCamp عند رفع طلب السحب.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. أرسل طلب السحب من فرعك إلى فرع freeCodeCamp's `master`.

4. في نص ملخص العلاقات العامة الخاص بك تتضمن ملخصًا أكثر تفصيلًا عن التغييرات التي أجريتها ولماذا.

- سيتم تقديمك مع نموذج طلب السحب. هذه قائمة مراجعة يجب عليك اتباعها قبل فتح طلب السحب.

    - املأ التفاصيل التي تراها مناسبة. ستتم مراجعة هذه المعلومات وسيقرر المراجعون ما إذا كان قد تم قبول طلب السحب الخاص بك أم لا.

    - إذا كان الهدف من العلاقات العامة هو معالجة مشكلة جيثب الحالية ، في نهاية
      نص وصف العلاقات العامة الخاص بك ، استخدم الكلمة الأساسية _Closes_ مع رقم الإصدار [automatically close that issue if the PR is accepted and merged](https://help.github.com/en/articles/closing-issues-using-keywords).
      
      > Example: `Closes #123` will close issue 123

5. حدد ما إذا كنت قد اختبرت على نسخة محلية من الموقع أم لا.

    هذا مهم جدًا عند إجراء تغييرات ليست مجرد تعديلات على محتوى نصي مثل الوثائق أو وصف التحدي. تتضمن أمثلة التغييرات التي تحتاج إلى اختبار محلي جافا سكريبت أو CSS أو HTML والتي يمكن أن تغير وظيفة أو تخطيط الصفحة.
</div>

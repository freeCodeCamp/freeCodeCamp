---
title: Bash chmod
localeTitle: باش touch
---

## ايعاز باش: touch (لمس)

**تغير تاريخ ووقت الملفات.**

```
touch [options] filename
```

بإمكان الايعاز انشاء ملف جديد او اذا استخدمنا الايعاز على اي ملف فسيقوم بتحديث تاريخ الملف للوقت الحالي.

بعض الخيارات الاكثر استخداما:
- `-t` تعديل التاريخ والوقت، بادخال الوقت بالشكل التالي (YYYYMMDDHHMM.SS).
- `-r` نسخ الوقت والتاريخ من ملف الى اخر.

أمثلة:

```
touch -t YYYYMMDDHHMM.SS filename
touch -r file1 file2
```

### للمزيد من المعلومات:
* [صفحة الكتيب](http://man7.org/linux/man-pages/man1/touch.1.html)

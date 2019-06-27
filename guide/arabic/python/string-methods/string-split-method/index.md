---
title: String Split Method
localeTitle: طريقة تقسيم السلسلة
---
يتم استخدام الدالة `split()` بشكل شائع لتقسيم السلسلة في Python.

#### طريقة `split()`

قالب: `string.split(separator, maxsplit)`

`separator` : سلسلة محدد. قمت بتقسيم السلسلة بناءً على هذا الحرف. على سبيل المثال. يمكن ان تكون " "، ":"، "؛" إلخ

`maxsplit` : عدد مرات تقسيم السلسلة استنادًا إلى `separator` . إذا لم يتم تحديدها أو -1 ، يتم تقسيم السلسلة استنادًا إلى كل تواجدات `separator`

هذا الأسلوب بإرجاع قائمة substrings delimited بواسطة `separator`

#### أمثلة

1) سلسلة الانقسام في الفضاء: ""

```python
string = "freeCodeCamp is fun."
print(string.split(" "))
``` 

انتاج:

```python
['freeCodeCamp', 'is', 'fun.']
``` 

2) سلسلة الانقسام في الفاصلة: "،"

```python
string = "freeCodeCamp,is fun, and informative"
print(string.split(","))
``` 

انتاج:

```python
['freeCodeCamp', 'is fun', ' and informative']
``` 

3) لا يوجد `separator` محدد

```python
string = "freeCodeCamp is fun and informative"
print(string.split())
``` 

انتاج:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative']
``` 

ملاحظة: إذا لم يتم تحديد `separator` ، فسيتم تجريد السلسلة من **جميع** المسافات البيضاء

```python
string = "freeCodeCamp        is     fun and    informative"
print(string.split())
``` 

انتاج:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative']
``` 

3) تقسيم السلسلة باستخدام `maxsplit` . هنا نقسم السلسلة على "" مرتين:

```python
string = "freeCodeCamp is fun and informative"
print(string.split(" ", 2))
``` 

انتاج:

```python
['freeCodeCamp', 'is', 'fun and informative']
``` 

#### معلومات اكثر

تحقق من [مستندات Python على تقسيم السلسلة](https://docs.python.org/2/library/stdtypes.html#str.split)
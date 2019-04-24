---
title: Python
localeTitle: питон
---
## Что такое Python?

[Python](https://www.python.org) - это язык программирования общего назначения, который динамически типизируется, интерпретируется и известен своей легкостью чтения с отличными принципами проектирования.

Чтобы узнать больше о Python, ознакомьтесь с этими страницами на python.org:

[Что такое Python?](https://www.python.org/doc/essays/blurb/)

[Часто задаваемые вопросы по Python](https://docs.python.org/3/faq/general.html) .

## Python 2 или Python 3

*   Эти две версии схожи, и знание одного перехода на другой код написано легко.
*   [Python 2 или Python 3](https://wiki.python.org/moin/Python2orPython3)
    *   [Python 2.x не будет поддерживаться до 2020 года.](https://www.python.org/dev/peps/pep-0373/)
    *   3.x находится в активной разработке. Это означает, что все последние усовершенствования стандартной библиотеки, например, доступны только по умолчанию в Python 3.x.
    *   На протяжении многих лет экосистема Python накопила значительное количество качественного программного обеспечения. Недостатком отлаженной обратной совместимости в версии 3.x является то, что часть этого программного обеспечения (особенно собственного программного обеспечения в компаниях) до сих пор не работает на 3.x.

## Установка

Большинство операционных систем на базе nix поставляются с установленным Python (как правило, Python 2, Python 3 в большинстве последних). Замена системы Python не рекомендуется и может вызвать проблемы. Тем не менее, различные версии Python можно безопасно установить рядом с системой Python. См. [Настройка и использование Python](https://docs.python.org/3/using/index.html) .

Windows не поставляется с Python, установщик и инструкции можно найти [здесь](https://docs.python.org/3/using/windows.html)

## Интерпретатор Python

Интерпретатор Python - это то, что используется для запуска скриптов Python.

Если он доступен и в пути поиска оболочки Unix можно запустить его, введя команду `python` за которой следует имя сценария, вызывается интерпретатор и запускается скрипт.

`hello_campers.py`

```python
print('Hello campers!') 
```

Из терминала:
```
$ python hello_campers.py 
 Hello campers! 
```

«Когда установлены несколько версий Python, их можно использовать в зависимости от конфигурации установки. В пользовательской среде Cloud9 ide они могут быть вызваны, например:
```
$ python --version 
 Python 2.7.6 
 $ python3 --version 
 Python 3.4.3 
 $ python3.5 --version 
 Python 3.5.1 
 $ python3.6 --version 
 Python 3.6.2 
 $ python3.7 --version 
 Python 3.7.1 
```

## Интерактивный режим интерпретатора Python

Интерактивный режим можно запустить, вызвав интерпретатор Python с помощью флага `-i` или без каких-либо аргументов.

Интерактивный режим имеет приглашение, в котором могут быть введены и запущены команды Python:
```
$ python3.5 
 Python 3.5.1 (default, Dec 18 2015, 00:00:00) 
 GCC 4.8.4 on linux 
 Type "help", "copyright", "credits" or "license" for more information. 
 >>> print("Hello campers!") 
 Hello campers! 
 >>> 1 + 2 
 3 
 >>> exit() 
 $ 
```

## Дзен Питона

Некоторые из принципов, которые повлияли на дизайн Python, включены в пасхальное яйцо и могут быть прочитаны с помощью команды внутри интерактивного режима интерпретатора Python:
```
>>> import this 
 The Zen of Python, by Tim Peters 
 
 Beautiful is better than ugly. 
 Explicit is better than implicit. 
 Simple is better than complex. 
 Complex is better than complicated. 
 Flat is better than nested. 
 Sparse is better than dense. 
 Readability counts. 
 Special cases aren't special enough to break the rules. 
 Although practicality beats purity. 
 Errors should never pass silently. 
 Unless explicitly silenced. 
 In the face of ambiguity, refuse the temptation to guess. 
 There should be one-- and preferably only one --obvious way to do it. 
 Although that way may not be obvious at first unless you're Dutch. 
 Now is better than never. 
 Although never is often better than *right* now. 
 If the implementation is hard to explain, it's a bad idea. 
 If the implementation is easy to explain, it may be a good idea. 
 Namespaces are one honking great idea -- let's do more of those! 
```

## Плюсы и минусы Python

### Pros

1.  Интерактивный язык с поддержкой модуля практически для всех функций.
2.  Открытый исходный код: Итак, вы можете внести вклад в сообщество, функции, которые вы разработали для будущего использования, и помочь другим
3.  Много хороших переводчиков и ноутбуков доступно для лучшего опыта, такого как ноутбук jupyter.

### Cons

1.  Будучи с открытым исходным кодом, многие разные способы развивались в течение года для одной и той же функции. Иногда это создает хаос для других, чтобы читать код другого.
2.  Это медленный язык. Итак, очень плохой язык для разработки общих алгоритмов.

## Документация

[Python хорошо документирован](https://docs.python.org/3/) . Эти документы включают в себя руководства, пособия, ссылки и метаинформацию для языка.

Другой важной ссылкой является [PEP](https://www.python.org/dev/peps/)( предложения по улучшению Python ). В PEP входит руководство по стилю написания кода Python - [`PEP 8`](https://www.python.org/dev/peps/pep-0008/) .

## Отладка

Встроенный оператор `print` может использоваться для простой отладки:

> **... часто самый быстрый способ отладки программы состоит в том, чтобы добавить в исходный код несколько операторов печати: быстрый цикл редактирования-тестирования-отладки делает этот простой подход очень эффективным.**
> 
> \--[Сводная информация](https://www.python.org/doc/essays/blurb/)

Python также включает более мощные инструменты для отладки, такие как:

*   модуль логирования [_logging_](https://docs.python.org/3/library/logging.html)
*   модуль отладки [_pdb_](https://docs.python.org/3/library/pdb.html)

Просто отметьте, что они существуют на данный момент.

## Привет, мир!

Возвращаясь к документации, мы можем прочитать о [_встроенной функции_](https://docs.python.org/3/library/functions.html) [стандартной библиотеки Python](https://docs.python.org/3/library/index.html)  [`print`](https://docs.python.org/3/library/functions.html#print).
```
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) 
```

Встроенные функции перечислены в алфавитном порядке. За именем следует скопированный список формальных параметров с необязательными значениями по умолчанию. При этом дается краткое описание функции и ее параметры, а иногда и пример.

Функция [`print`](https://docs.python.org/3/library/functions.html#print) в Python 3 заменяет оператор [`print`](https://docs.python.org/2/reference/simple_stmts.html#print) в Python 2.
```
>>> print("Hello world!") 
 Hello world! 
```

Вызывается функция, когда за именем функции следует `()` . Для Hello world! Например, функция print вызывается со строкой в ​​качестве аргумента для первого параметра. Для остальных параметров используются значения по умолчанию.

Аргументом, который мы назвали функцией `print` является `str` объект или _строка_ , один из [_встроенных типов_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) Python. Также самое важное в python заключается в том, что вам не нужно указывать тип данных при объявлении переменной, компилятор python будет делать это сам по типу присвоенного значения.

Параметр `objects` имеет префикс с `*` который указывает, что функция примет произвольное количество аргументов для этого параметра.

## Хотите узнать больше?

В Free Code Camp есть отличные ресурсы. Сеть - большое место, есть еще много возможностей для изучения:

*   Практическая книга по Python: http://anandology.com/python-practice-book/index.html
*   Think Python: http://greenteapress.com/thinkpython/html/index.html
*   Практический бизнес Python: http://pbpython.com/
*   Другой курс: https://realpython.com/?utm_source=fsp&utm_medium=promo&utm\_campaign=bestresources
*   Общее: https://www.fullstackpython.com/
*   Изучение основ: https://www.codecademy.com/learn/learn-python
*   Компьютерные науки, использующие Python: https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11?ref=hackernoon#!
*   Список ресурсов для изучения python: https://github.com/vinta/awesome-python
*   Интерактивный Python: http://interactivepython.org/runestone/static/thinkcspy/index.html
*   Руководство разработчика для Python: https://devguide.python.org/
*   Изучение Python по непростому пути: https://learnpythonthehardway.org/python3/
*   Вводный курс для программирования на Python: https://www.udacity.com/course/introduction-to-python--ud1110

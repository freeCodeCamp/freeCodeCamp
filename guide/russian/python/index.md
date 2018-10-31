---
title: Python
localeTitle: питон
---
![alt text](https://www.python.org/static/community_logos/python-logo-master-v3-TM.png)

## Что такое Python?

[Python](https://www.python.org) - это интерпретируемый язык программирования общего назначения с динамической типизацией, который известен легкостью чтения кода и принципами проектирования. Python был разработан Гвидо ван Россумом и был представлен миру в 1991 году. С тех пор язык набирал популярность с огромной скоростью.

Чтобы узнать больше о Python, ознакомьтесь с этими страницами на python.org:

[Что такое Python?](https://www.python.org/doc/essays/blurb/)

[Часто задаваемые вопросы по Python](https://docs.python.org/3/faq/general.html) .

## Python 2 или Python 3

*   Эти две версии похожи, и со знанием одной из них легко переключаться на другую.
*   [Python 2 или Python 3](https://wiki.python.org/moin/Python2orPython3)
    *   [Python 2.x не будет поддерживаться после 2020 года.](https://www.python.org/dev/peps/pep-0373/)
    *   Python 3.x находится в активной разработке. Это означает, что все последние усовершенствования стандартной библиотеки доступны только в Python 3.x.
    *   На протяжении многих лет экосистема Python накопила значительное количество качественного программного обеспечения. Недостатком совместимости между версиями 2.x и 3.x является то, что часть программного обеспечения версий 2.x (особенно собственного программного обеспечения в компаниях) до сих пор не работает на версиях 3.x.

## Операционные системы и установка Python

Большинство операционных систем на базе \*nix поставляются с предустановленным Python (как правило, с Python 2.x, но Python 3.x в большинстве последних версий операционных систем). Замена предустановленного Python в операционной системе не рекомендуется и может вызвать некоторые проблемы. Тем не менее, различные версии Python можно безопасно устанавливать вместе с предустановленной версией Python. См. [Настройка и использование Python](https://docs.python.org/3/using/index.html) .

Windows не поставляется с Python, установщик и инструкции можно найти [здесь](https://docs.python.org/3/using/windows.html)

## Python Interpreter

Интерпретатор Python - это то, что используется для запуска скриптов Python.

Если интерпретатор доступен в пути поиска оболочки Unix, то можно запустить его введя команду `python` за которой следует имя скрипта. После этого вызывается интерпретатор и запускается скрипт.

`hello_campers.py`

```python
print('Hello campers!') 
```

Запуск из терминала:
```
$ python hello_campers.py 
 Hello campers! 
```

Если установлено несколько версий Python, то их версии можно можно вызывать в зависимости от конфигурации установки. В пользовательской среде Cloud9 ide они могут быть вызваны, например:
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

## Интерпретатор Python в интерактивном режиме

Интерактивный режим можно запустить, вызвав интерпретатор Python с помощью флага `-i` или без каких-либо аргументов.

Интерактивный режим имеет консоль, в котором могут быть введены и запущены команды Python:
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

## Преимущества и недостатки Python

### Преимущества

1.  Интерактивный язык программирования с модулями для практически всех задач.
2.  Открытый исходный код: Вы можете вносить вклад в Python сообщество и этот вклад будет использован для того, чтобы помочь другим разработчикам.
3.  Существует много хороших версий интерпретатора, а также т.н. "ноутбуков", таких как Jupyter Notebook.
4.  Язык считается лёгким для изучения, написания кода и его отладки. Для того, чтобы проверить работоспособность небольшого кусочка кода, можно просто открыть интерпретатор и протестировать его.
5.  Для Python доступно множество библиотек: numpy, pandas и др.

#### Недостатки

1.  Будучи языком с открытым исходным кодом, разработаны разные способы решения для одной и той же функции. Иногда это создает проблему чтения кода других разработчиков.
2.  Это медленный язык. Он очень плох для разработки общих алгоритмов.

## Документация

[Python хорошо документирован](https://docs.python.org/3/). Эта документация включают в себя различные руководства, ссылки и метаинформацию для языка.

Другой важной ссылкой являются предложения по улучшению Python ( [PEP](https://www.python.org/dev/peps/) ). В PEP входит руководство по стилю написания кода Python, [`PEP 8`](https://www.python.org/dev/peps/pep-0008/) .

## Отладка

Оператор `print` может использоваться для простой отладки:

> **... часто самый быстрый способ отладки программы состоит в том, чтобы добавить в исходный код несколько операторов `print`: быстрый цикл редактирования-тестирования-отладки делает этот простой подход очень эффективным.**
> 
> \- [Резюме](https://www.python.org/doc/essays/blurb/)

Python также включает более мощные инструменты для отладки, такие как:

*   модуль [_регистрации_](https://docs.python.org/3/library/logging.html) , [_протоколирование_](https://docs.python.org/3/library/logging.html)
*   модуль отладки, [_pdb_](https://docs.python.org/3/library/pdb.html)

Просто отметьте, что они существуют на данный момент.

## Привет, мир!

Возвращаясь к документам, мы можем прочитать о функции [`print`](https://docs.python.org/3/library/functions.html#print) и [_встроенных функциях_](https://docs.python.org/3/library/functions.html) [стандартной библиотеки Python](https://docs.python.org/3/library/index.html) .
```
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) 
```

Встроенные функции перечислены в алфавитном порядке. За именем следует скопированный список формальных параметров с необязательными значениями по умолчанию. При этом дается краткое описание функции и ее параметров, а иногда предоставляется пример использования.

Функция [`print`](https://docs.python.org/3/library/functions.html#print) в Python 3 заменяет оператор [`print`](https://docs.python.org/2/reference/simple_stmts.html#print) в Python 2.
```
>>> print("Hello world!") 
 Hello world! 
```

Функция вызывается, когда за именем функции следует `()` . Для примера Hello world! функция print вызывается со строкой в качестве аргумента для первого параметра. Для остальных параметров используются значения по умолчанию.

Аргументом для функции `print` является объект `str` или _string_, один из [_встроенных типов_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) Python. Также самое важное в Python заключается в том, что вам не нужно указывать тип данных при объявлении переменной, компилятор Python будет делать это сам по типу присвоенного значения.

Параметр `objects` имеет префикс с `*` который указывает, что функция примет произвольное количество аргументов для этого параметра.

## Что может делать Python
Как уже было сказано ранее, Python - это язык общего назначения. Вы можете использовать его для всех задач, но один из основных вариантов использования - это машинное обучение и искуственный интеллект. Также Python является популярным языком для веб-разработки с использованием таких фреймворков, как [Django](https://www.djangoproject.com/) и [Flask](http://flask.pocoo.org/). Также это очень популярный скриптовый язык. С его легко читаемым синтаксисом Python становится одним из самых популярных языков программирования, быстро растущим в разных сферах программирования.

## Хотите узнать больше?

В Free Code Camp есть отличные ресурсы. Сеть - большое место, есть еще много возможностей для изучения:

*   Практическая книга Питона: http://anandology.com/python-practice-book/index.html
*   Think Python: http://greenteapress.com/thinkpython/html/index.html
*   Практический бизнес Python: http://pbpython.com/
*   Другой курс: https://realpython.com/?utm _source = fsp & utm_ medium = promo & utm\_campaign = bestresources
*   Общее: https://www.fullstackpython.com/
*   Изучите основы: https://www.codecademy.com/learn/learn-python
*   Компьютерные науки, использующие Python: https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11?ref=hackernoon#!
*   Список ресурсов для изучения python: https://github.com/vinta/awesome-python
*   Интерактивный Python: http://interactivepython.org/runestone/static/thinkcspy/index.html
*   Руководство разработчика для Python: https://devguide.python.org/

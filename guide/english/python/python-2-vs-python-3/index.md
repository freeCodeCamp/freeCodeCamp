---
title: Python 2 vs Python 3
---
We aren't taking a side in the debate. If you are interested in knowing more about it for academic purposes, perhaps <a href='https://wiki.python.org/moin/Python2orPython3' target='_blank' rel='nofollow'>this article comparing Python 2 and Python 3</a> would intrigue you.

But, we cannot also be ignorant of the fact that there are two major flavors of Python out there. Why shoud you care, you ask? Because code written for one version of Python can result in syntax errors in other versions of Python.

The following is a valid `print` statement in Python 2, but does not work on Python 3:

```py
print "Hello World"
```

In Python 3, the same statement throws an error like this:

    >>> print "hello"
      File "<stdin>", line 1
        print "hello"
                    ^
    SyntaxError: Missing parentheses in call to 'print'
    
In Python 2, “print” is treated as a statement rather than a function. There is no need to wrap the text you want to print in parentheses, although you can if you want.
In contrast, Python 3 explicitly treats “print” as a function, which means you have to pass the items you need to print to the function in parentheses in the standard way, or you will get a syntax error.

Using the `print()` function is 'safe' in both Python 2 and 3:

```python
print("Hello World")
```

Another difference between Python 2 and Python 3 is what data structure is returned when you call the `map()` function.

In Python 2, `map()` returns a list:

    >>> result = map(int,['10','20','30','40'])  
    >>> print result
    >>> [10,20,30,40]

In Python 3, `map()` returns an iterator:

    >>> result = map(int,['10','20','30','40']) 
    >>> print (result)
    >>> <map object at 0x7f40896b4630>

To get a list in Python 3, you need to convert it:

    >>> result = list(map(int,['10','20','30','40'])) 
    >>> print (result)
    >>> [10,20,30,40]


So, the only question you need to concern yourself with right now; is which one you should pick? If you are new to Python, you should pick Python 3. Python 2 currently has its <a href='https://www.python.org/dev/peps/pep-0373/#update' target='_blank' rel='nofollow'>End Of Life</a> date set to 2020. This means that regular bugfixes are not guaranteed going forward. Please note that it takes time to get familiar with even the most common aspects with either Python, and your limited time is important. So, invest your time and effort wisely!

While Python 2 is well-supported and popular, most common libraries and frameworks in Python prefer Python 3\. Django officially <a href='https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support' target='_blank' rel='nofollow'>recommends</a> Python 3\. Flask and all its dependencies are also <a href='http://flask.pocoo.org/docs/0.10/python3/#python3-support' target='_blank' rel='nofollow'>supported</a> on Python 3.

Both Python 2 and Python 3 are great. Most Linux and macOS distributions come pre-installed with Python 2 as the default version of Python. Python 3 itself was born out of the insatiable quest for more readable and more beautiful language constructs.

This article uses Python 3 to set up the web-frameworks in your development environment. But before you can begin using these frameworks, you need to ensure you have Python 3 and know how to use it!

#### More Information:
- <a href='https://wiki.python.org/moin/Python2orPython3' target='_blank' rel='nofollow'>Python 2 or 3 Article</a>

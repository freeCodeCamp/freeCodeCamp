---
title: Setting Up Python Web Framework Django and Flask
---
In this article, we shall be discussing how to install <a href='https://www.djangoproject.com/' target='_blank' rel='nofollow'>Django</a> and <a href='http://flask.pocoo.org/' target='_blank' rel='nofollow'>Flask</a> - two popular web frameworks written in Python.

Perhaps you are already familiar with the widespread usage and community support for Python; in web-development. You might as well be aware as to what a web framework is; and the options available for Python.

In case these assumptions are untrue, you might want to take a look at this <a>wiki article</a>. If you are all caught up, let's go ahead with setting up Python web frameworks in your local development machine.

But it would be unfair if we completely ignore the <a href='http://docs.python-guide.org/en/latest/starting/which-python/#the-state-of-python-2-vs-3' target='_blank' rel='nofollow'>Python 2 vs Python 3</a> debate.

If you do not have Python already installed check out our <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/python/installing-and-using-python-3/index.md'>Python Installation Guide</a>

## Virtual environment

Before we install Django we will get you to install an extremely useful tool to help keep your coding environment tidy on your computer. It's possible to skip this step, but it's highly recommended. Starting with the best possible setup will save you a lot of trouble in the future!

So, let's create a virtual environment (also called a virtualenv). Virtualenv will isolate your Python/Django setup on a per-project basis. This means that any changes you make to one website won't affect any others you're also developing. Neat, right?

For more information on virtual environments see the relevent section <a href='https://guide.freecodecamp.org/python/virtual-environments/' target='_blank' rel='nofollow'>here<a>.

## Wrapping Up

If you have already installed `pip` then simply:
```
$ pip install django
```
After installation it's complete we can create a new project:
```
$ django-admin startproject myproject
$ cd myproject
$ python manage.py runserver
```
Go to `http://localhost:8000`! :rocket:

We have successfully installed the web-framework of our need. However, it's not yet complete. Most web applications are content and data driven - so we need a data storage. Or, a Database, if you will.

In next article, we would be discussing how to install PostgreSQL and use it with our Python web application.

A point to ponder - we have been using `pip` heavily, but we have barely said anything about it. Well, for now, it's just a package manager like `npm`. It has some differences with `npm`; but, you don't need to worry about that now. If you are interested, do check out the <a href='http://pip-python3.readthedocs.org/en/latest/index.html' target='_blank' rel='nofollow'>official `pip` documentation</a>.

_If you have suggestions or questions, come join us on <a href='https://gitter.im/FreeCodeCamp/FreeCodeCamp' target='_blank' rel='nofollow'>gitter</a>_.

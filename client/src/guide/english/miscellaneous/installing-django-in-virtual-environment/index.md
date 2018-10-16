---
title: Installing Django in Virtual Environment
---
<a href='https://www.djangoproject.com' target='_blank' rel='nofollow'>Django</a> is an opinionated framework that helps you become productive. For instance, the file structure when you create a Django project. But, if you wish to explore the field of web development in Python in detail; perhaps <a href='http://flask.pocoo.org/' target='_blank' rel='nofollow'>Flask</a> is more up your alley. Feel free to skip this part of the article, and jump directly to the [Flask Installation help](#installing-flask-in-virtual-environment)

As of this writing, current Django version was Django 1.9.2\. But when you are reading this, right now, it could be higher.

The official installation guide is available <a href='https://docs.djangoproject.com/en/1.9/intro/install/#install-django' target='_blank' rel='nofollow'>here</a>. You should install the latest stable and official release; and **not** the latest development version (unless you know what you are doing and you like to live dangerously!)

But before you start installing, make sure you are inside an **activated** virtual environment; where running the following command in terminal would look like this:

    $ python --version
    Python 3.5.1

It might not be `3.5.1` for you. It could very well be `3.4.3`. But that is ok, just as long as it does not show it as `2.7.9` or something else that starts with `2`.

Once you have ensured you are in an activated virtual environment, and `python` command points to a Python of version 3; you are ready to install Django. Just follow the official <a href='https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release' target='_blank' rel='nofollow'>installation guide</a> and install it with `pip`, the Python package manager.

Once installed; it would be a great idea to check what all did `pip` install; by executing the following command:

    $ pip freeze

This would output a list of modules installed with current Python; and you should see Django with proper version (something like `Django==1.9.2` in the list.

If you wish to use Windows, the above discussion is not applicable to you. Perhaps you only have access to a Windows machine, and for some personal reasons, you would prefer not working on a browser-based Linux box on the cloud (slow connection, perhaps?).

You might be able to follow this <a href='https://docs.djangoproject.com/en/1.9/howto/windows/' target='_blank' rel='nofollow'>tutorial</a> and set up Django with Python 3 in your Windows machine.

Or, you can use <a href='https://www.virtualbox.org/' target='_blank' rel='nofollow'>Virtualbox</a> with a <a href='https://www.vagrantup.com/' target='_blank' rel='nofollow'>Vagrant</a> box for Django development directly in your machine!
---
title: Python Using Pip
---
We have seen how to use `import` statements to `import` various modules and to use them in our programs. Python itself comes with several built-in modules, but the Python community has more to offer.

> It's the modules that make Python so powerful!

Third party modules add so much more functionality to Python. Now we would learn how to install these modules so that we can use those in our programs.

The simplest way to install these modules is by using `pip`.

    pip install <module_name>

If you have used `npm`, then you can think of it as _npm_ of Python.

Side note: The difference is that with npm, `npm install` by default installs packages locally to a project, whereas `pip install` by default installs globally.  To install modules locally, you need to create and activate what is called a [virtual environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/), so `pip install` installs to the folder where that virtual environment is located, instead of globally (which may require administrator privileges).

Last time, in <a>`import-statements`</a> wiki we used `requests` module as an example. As it is a third party module we have to install it separately after installing python.

Installing it would be as simple as `pip install requests` . You can even pass various arguments along with it. The one that you'll come across more often is `--upgrade`. You can upgrade a python module by :

    pip install <module_name> --upgrade

For example, to upgrade the requests module to its latest version would be as simple as `pip install requests --upgrade`.
To update pip itself, you can use `pip install --upgrade pip`

To find other useful commands for pip, use `pip help`. This will give you a list of useful commands and arguments you can use, such as `uninstall`, `list` or `search`.

Before using `pip`, you will need to install it (it's quite simple). You can install it from <a href='https://bootstrap.pypa.io/get-pip.py' target='_blank' rel='nofollow'>here</a>

Just click on the link. And save the file as `get-pip.py` _Please don't forget the `.py` extension._ And run it.

An alternative to using pip would be to try <a href='https://bootstrap.pypa.io/ez_setup.py' target='_blank' rel='nofollow'>`easy_install`</a>.

Using `easy_install` is also simple. The syntax is:

    easy_install <module_name>

However, `pip` is more popular than using `easy_install`, and `easy_install` is <a href='https://setuptools.readthedocs.io/en/latest/easy_install.html'> deprecated</a>.


**Note:** On some systems where both Python 2 & Python 3 is installed, `pip` and `pip3` will do different things. `pip` installs the Python 2 version of the package, and `pip3` will install the Python 3 version of the package. For more information on the difference between Python 2 & 3, see [this](https://guide.freecodecamp.org/python/python-2-vs-python-3) guide. 
You can check the `pip` version by doing `pip --version` and/or `pip3 --version`:

    pip3 --version
    pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5)
    

We can also create a txt file containing a list of modules which should be installed using pip. 
For example, we could create the file `requirements.txt` and its content:

    Kivy-Garden==0.1.4
    macholib==1.5.1
    idna==2.6
    geoip2nation==0.1.2
    docutils>=0.14
    Cython
    
 In this file, we could also set a version for the installation.
 After this, by invoking pip with:
 
     pip install -r <FILE CONTAINING MODULES>
     
              OR IN OUR CASE
     
     pip install -r requirements.txt
     
 Should install all the modules listed on the file.


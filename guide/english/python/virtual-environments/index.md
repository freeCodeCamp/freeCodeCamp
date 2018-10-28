---
title: Virtual Environments
---

# Virtual Environemnts

Virtual environments can be described as isolated installation directories. This isolation allows you to localized the installation of your project's dependencies, without forcing you to install them system-wide.

Imagine you have two applications App1 and App2. Both require the package Pak, but with different versions. If you install Pak version 2.3 for App1, you would not be able to run App2, because it requires version 3.1. Here is when virtual environments come in handy.

Benefits:
* You can have multiple environments, with multiple sets of packages, without conflicts among them. This way, different projects' requirements can be satisfied at the same time.
* You can easily release your project with its own dependent modules.


## Tools used for creating Python virtual environments

### Libraries  
#### 1. Virtualenv

[`virtualenv`](https://virtualenv.pypa.io/en/stable/) is a tool used to create isolated Python environments. It creates a folder which contains all the necessary executables to use the packages that a Python project would need.

You can install it with `pip`:
```
pip install virtualenv
```

Verify the installation with the following command:
```
virtualenv --version
```

To create a virtual environment use:
```
virtualenv --no-site-packages my-env
```
This creates a folder in the current directory with the name of the environment (`my-env/`). This folder contains the directories for installing modules and Python executables.

You can also specify the Python version you want to work with. Just use the argument `--python=/path/to/python/version`. For instance, `python2.7`:
```
virtualenv --python=/usr/bin/python2.7 my-env
```

You can list the available environments with:
```
ls virtualenv
```

Activate an Environment:

Before you can start using the environment you need to activate it:
```
source my-env/bin/activate
```
This ensures that only packages under `my-env/` are used.
You will notice that the name of the environment is shown on the left of the prompt. This way you can see which is the active environment.

You can install packages one by one, or by setting a `requirements.txt` file for your project.
```
pip install some-package
pip install -r requirements.txt
```

If you want to create a `requirements.txt` file from the already installed packages, run the following command:
```
pip freeze > requirements.txt
```
The file will contain the list of all the packages installed in the current environment, and their respective versions. This will help you release your project with its own dependent modules.

If you are done working with the virtual environment you can deactivate it with:
```
deactivate
```
This puts you back to the system’s default Python interpreter with all its installed libraries.

To delete an Environment simply delete the environment folder.


#### 2. venv

[`venv`](https://docs.python.org/3/library/venv.html) is available by default in Python 3.3 and later.

To create a virtual environment use:
```
python3 -m venv venv
```


#### 3. pyenv

[`pyenv`](https://github.com/yyuu/pyenv) simple Python version management based on [`rbenv`](https://github.com/rbenv/rbenv).
Used togrther with [`pyenv-virtualenv`](https://github.com/pyenv/pyenv-virtualenv) plugin
Create an Environemnt:

To create a virtual environment use:
```
pyenv virtualenv venv34
```


#### 4. pyvenv

Deprecated in Python 3.6.


### Dependency managers
#### 1. Pipenv

[`Pipenv`](https://docs.pipenv.org/) manages dependencies on a per-project basis. It is like Node.js’ [`npm`](https://www.npmjs.com/)  or Ruby’s [`bundler`](https://bundler.io/).

To create a virtual environment use:
```
pipenv --three
```


### Separate software stacks
#### 1. Conda

[`Conda`](https://conda.io/docs/index.html) is a package, dependency and environment management for many languages, including Python.

To install Conda, follow these [instructions](https://conda.io/docs/user-guide/install/index.html).

To create a virtual environment use:
```
conda create --name my-env
```
Conda will create the corresponding folder inside the Conda installation directory.

You can also specify which version of Python you want to work with:
```
conda create --name my-env python=3.6
```

You can list all the available environments with:
```
conda info --envs
```

Before you can start using the environment you need to activate it:
```
source activate my-env
```

Install packages like with `virtualenv`.

If you are done working with the virtual environment you can deactivate it with:
```
source deactivate
```

If you want to remove an environment from Conda use:
```
conda remove --name my-env
```


## More Information:

* [Python Packaging Authority - Tool recommendations](https://packaging.python.org/guides/tool-recommendations/)
* [Python Packaging Authority - Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-virtual-environments)

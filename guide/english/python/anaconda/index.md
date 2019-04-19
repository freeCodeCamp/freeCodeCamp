---
title: Anaconda
---

# Anaconda

**Anaconda** is a package manager, environment manager and Python distribution with a collection of over [1,500 open source packages](https://docs.anaconda.com/anaconda/packages/pkg-docs/), and it offers [free community support](https://groups.google.com/a/anaconda.com/forum/?fromgroups#!forum/anaconda). Anaconda is platform-agnostic, so you can use it whether you are on Windows, macOS or Linux.

Anaconda easily creates, saves, loads and switches between environments on your system. It was initially created for Python programs, but it can package and distribute software for any language.

Anaconda, as a package manager, helps you find and install packages. If you need a package that requires a different version of Python, you do not need to switch to a different environment manager, because Anaconda is also an environment manager. With just a few commands, you can set up a totally separate environment to run that different version of Python, while continuing to run your usual version of Python in your normal environment.

To try Anaconda get the [Anaconda Cheat Sheet](https://docs.anaconda.com/_downloads/Anaconda-Starter-Guide-Cheat-Sheet.pdf) and [download Anaconda](https://www.anaconda.com/downloads).

## Overview

To use the Anaconda prompt (or Terminal on Linux or macOS), instead of a graphical user interface (GUI), then do so along with conda. You can also switch between them.

The quickest ways to start using conda are to take the [30-minute conda test drive](http://conda.pydata.org/docs/test-drive.html), download the [conda cheat sheet](http://conda.pydata.org/docs/_downloads/conda-cheatsheet.pdf) and visit [Using conda](http://conda.pydata.org/docs/using) for creative/fun things to do with conda.

The ``conda`` command is the primary interface for managing
installations of various packages. It can:

* Query and search the Anaconda package index and current
  Anaconda installation.

* Create new conda environments.

* Install and update packages into existing conda environments.

TIP: You can abbreviate many frequently used command options that
are preceded by 2 dashes (``--``) to just 1 dash and the first
letter of the option. So ``--name`` and ``-n`` are the same, and
``--envs`` and ``-e`` are the same.

For full usage of each command, including abbreviations, see
[Command reference](https://conda.io/docs/commands.html).
You can also type ``conda`` or ``conda help`` to access the list of commands and help text for each command available.


## Packages Available in Anaconda
- Over [200 packages](https://docs.anaconda.com/anaconda/packages/pkg-docs/) are automaticlly installed with Anaconda.
- Over 1,500 additional packages can be installed a la carte from the Anaconda repository using the ``conda install`` command.
- Thousands of more packages are available on [Anaconda Cloud](https://anaconda.org/).
- The ability to install other packages is possible using the ``pip install`` command that is installed with Anaconda. [Pip Packages](https://conda.io/docs/user-guide/tasks/manage-pkgs.html#installing-non-conda-packages) offer many of the same features as conda packages. Ideally, using the conda package, if available, is preferred.
- Anaconda allows for the development of your own [custom packages](http://conda.pydata.org/docs/building/build.html) via the ``conda build`` command. You can then share the packages on [Anaconda Cloud](http://anaconda.org/), PyPi, and more repositories.

### Sources
1. [Anaconda Documentation](https://docs.anaconda.com/)
2. [Conda Documentation](https://conda.io/docs/)

#### More Information
- [Conda cheat sheet](https://conda.io/docs/user-guide/cheatsheet.html)

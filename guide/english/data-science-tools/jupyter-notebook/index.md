---
title: Jupyter Notebook
---
## Jupyter Notebook

Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.

Some of Jupyter Notebook's applications are:
* data cleaning and transformation
* numerical simulation
* statistical modeling
* data visualization
* machine learning

<img alt="Jupyter Notebook with code cells and a bar chart" src="https://github.com/indianmoody/images/blob/master/guide_fcc/guides_jupyter_snap.jpeg" width="400" height="300" />
See your results as you go step by step, just like in this image.

### What Is A Jupyter Notebook?
In this case, "notebook" or "notebook documents" denote documents that contain both code and rich text elements, such as figures, links, or equations. Because of this mix, people use Jupyter Notebooks to show the description of an analysis and its results. Also, they can run the notebook to execute the code and perform the data analysis in real time.

The name "Jupyter" is a loose acronym combining **Ju**lia, **Py**thon, and **R**, which were the first target programming languages of the Jupyter application. The notebook technology now supports many other languages. You can check the [list of available Jupyter kernels here](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels).

### What does it do?

As a server-client application, Jupyter Notebook allows you to edit and run your notebooks via a web browser. You can run the application on a PC without Internet access, or you can install it on a remote server, where you access it through the Internet.

Its two main components are **kernels** and a **dashboard**.

A **kernel** is a program that runs and inpects the user’s code. The Jupyter Notebook application has a kernel for Python code, but there are also kernels available for other programming languages.

The application **dashboard** not only shows you the notebook documents that you have made and can reopen, but can also be used to manage the kernels: you can select which ones are running and shut them down if necessary.

### Features
* No need to run your complete code file every time. Just run individual Notebook cells to evaluate a specific piece of code.
* The Notebook has support for over 40 programming languages, including Python, R, Julia, and Scala.
* Notebooks can be shared with others using email, Dropbox, GitHub, and the Jupyter Notebook Viewer.
* Your code can produce rich, interactive output: HTML, images, videos, LaTeX, and custom MIME types.
* Leverage big data tools, such as Apache Spark, Python, R, and Scala. Explore that same data with pandas, scikit-learn, ggplot2, or TensorFlow.

### Installation
Jupyter notebooks automatically come with the distribution. You'll be able to use notebooks from the default environment. You can use Anaconda or Pip to install Jupyter notebook.

To install Jupyter notebooks in an Anaconda environment, run the command: `conda install jupyter notebook`.

To install Jupyter notebooks with pip, run the command: `pip install jupyter notebook`.

For more more information on installation, refer to the
<a href='https://jupyter.readthedocs.io/en/latest/install.html'>official guide here.</a>

### The origin of Jupyter Notebooks
Jupyter notebooks grew out of the IPython project started by Fernando Perez. IPython is an interactive shell, similar to the normal Python shell but with great features like syntax highlighting and code completion. Originally, notebooks worked by sending messages from the web app (the notebook you see in the browser) to an IPython kernel (an IPython application running in the background). The kernel executed the code, then sent it back to the notebook.
![Notebook architecture](https://jupyter.readthedocs.io/en/latest/_images/notebook_components.png)

When you save the notebook, it is written to the server as a JSON file with a **.ipynb** file extension

### More Information:
* [Jupyter Org Website](http://jupyter.org)
* [Jupyter/IPython Notebook Quick Start Guide](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)
* [What is Jupyter Notebook by codebasics, duration 8:24](https://www.youtube.com/watch?v=q_BzsPxwLOE)
* [Jupyter Notebook Tutorial / Ipython Notebook Tutorial, by codebasics, duration 24:07](https://www.youtube.com/watch?v=EEEZX_0FMEc)
* [Datacamp Jupyter Notebook tutorial](https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook)

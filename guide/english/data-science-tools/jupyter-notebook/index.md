---
title: Jupyter Notebook
---
## Jupyter Notebook

Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.

Jupyter Notebook helps you create and share documents containing live code, equations, visualizations, and rich text.   
 
You can use it for:
* data cleaning and transformation
* numerical simulation
* statistical modeling
* data visualization
* machine learning

<img src="https://github.com/indianmoody/images/blob/master/guide_fcc/guides_jupyter_snap.jpeg" width="400" height="300" />
See your results as you go step by step, just like in this image.

## What Is A Jupyter Notebook?

In this case, "notebook" or "notebook documents" denote documents that contain both code and rich text elements, such as figures, links, and equations. Because of the mix of code and text elements, these notebook documents are the ideal place to bring together an analysis description with its results, which can be executed to perform data analysis in real time.

The name "Jupyter" is a loose acronym combining Julia, Python, and R, which were the first target programming languages of the Jupyter application. The notebook technology now supports many other languages.

And there you have it: the Jupyter Notebook.

## What does it do? 

As a server-client application, the Jupyter Notebook App allows you to edit and run your notebooks via a web browser. The application can be executed on a PC without Internet access, or it can be installed on a remote server, where you can access it through the Internet.

Its two main components are kernels and a dashboard.

A kernel is a program that runs and inpects the user’s code. The Jupyter Notebook App has a kernel for Python code, but there are also kernels available for other programming languages. The application dashboard not only shows you the notebook documents that you have made and can reopen, but can also be used to manage the kernels: you can select which ones are running and shut them down if necessary.

## Installation
You can use Anaconda or Pip to install Jupyter notebook.
For steps to do so, refer to the official guide 
<a href='https://jupyter.readthedocs.io/en/latest/install.html'> here.</a>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

=======
### Features
* No need to run your complete code file every time. Just run individual Notebook cell to evaluate a specific piece of code.
* The Notebook has support for over 40 programming languages, including Python, R, Julia, and Scala.
* Notebooks can be shared with others using email, Dropbox, GitHub, and the Jupyter Notebook Viewer.
* Your code can produce rich, interactive output: HTML, images, videos, LaTeX, and custom MIME types.
* Leverage big data tools, such as Apache Spark, Python, R, and Scala. Explore that same data with pandas, scikit-learn, ggplot2, or TensorFlow.

The Jupyter notebook combines two components:

### A web application:  

The Jupyter Notebook App helps to edit and run notebook documents in a web browser,  combining explanatory text, mathematics, computations and rich media.

### Notebook document:

The Jupyter Notebook App can create a 'Notebook document' containing both code and rich text elements. A Notebook document can be both readable and executable.

These documents are produced by the Jupyter Notebook App.

## Jupyter Notebook App
As a server-client application, the Jupyter Notebook App allows you to edit and run your notebooks via a web browser.  
The application can be executed on a PC without Internet access or it can be installed on a remote server, where you can access it through the Internet.  

Its two main components are kernels and a dashboard.

### Kernels
A kernel is a program that runs and introspects the user’s code. The Jupyter Notebook App has a kernel for Python code, but there are also kernels available for other programming languages.

### Dashboard
The dashboard of the application not only shows you the notebook documents that you have made and can reopen but can also be used to manage the kernels: you can which ones are running and shut them down if necessary.

### How notebooks work
Jupyter notebooks grew out of the IPython project started by Fernando Perez. IPython is an interactive shell, similar to the normal Python shell but with great features like syntax highlighting and code completion. Originally, notebooks worked by sending messages from the web app (the notebook you see in the browser) to an IPython kernel (an IPython application running in the background). The kernel executed the code, then sent it back to the notebook.
![Notebook architecture](https://jupyter.readthedocs.io/en/latest/_images/notebook_components.png)

When you save the notebook, it is written to the server as a JSON file with a **.ipynb** file extension
The new name Jupyter comes from the combination of **Ju**lia, **Py**thon, and **R**. there are a lot of kernels for different languages to use Jupyter. you could check the [list of available Jupyter kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels).

### Installing Jupyter Notebook
Jupyter notebooks automatically come with the distribution. You'll be able to use notebooks from the default environment.
To install Jupyter notebooks in a conda environment: `conda install jupyter notebook`
To install Jupyter notebooks with pip: `pip install jupyter notebook`

#### More Information:
* [Jupyter Org Website](http://jupyter.org)
* [Jupyter/IPython Notebook Quick Start Guide](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)
* [What is Jupyter Notebook by codebasics, duration 8:24](https://www.youtube.com/watch?v=q_BzsPxwLOE)
* [Jupyter Notebook Tutorial / Ipython Notebook Tutorial, by codebasics, duration 24:07](https://www.youtube.com/watch?v=EEEZX_0FMEc)
* [More Information](https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook)

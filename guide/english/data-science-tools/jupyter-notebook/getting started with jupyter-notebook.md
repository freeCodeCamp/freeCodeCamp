This tutorial is for installing and start playing around with Jupyter Notebook in Ubuntu. This works also for VM running Ubunutu. I
encourage users of other operating systems
(1) From a shell:

      jupyter notebook

    This does two things.  First, it starts a notebook server
    listening on port 8888 and it runs a web browser that connects to
    the server.

    If a browser does not run, the start one and go to the following
    URL:

      localhost:8888/tree

(2) On the right-hand side click "New" and then choose "Python".
You'll get an empty notebook, which is essentially a Python shell.

(3) Type any valid python code and press SHIFT+ENTER to run it.  Or
you can press the PLAY button along the top.

(4) Click at the top where it says "Untitled" and give the notebook a
name, like "Data Science Class 2"

(5) Go back to "localhost:8888/tree" and click on "Running".  You
should see your notebook listed.

(6) Stop it by clicking "Shutdown"

(7) Kill the web browser and re-run it, connected to the server
again.  Scroll down.  You should see your notebook.  Click to open it,
and you should see everything that you did in the last session there.

(8) Kill the notebook server with CTRL-C in the terminal where you
started it.

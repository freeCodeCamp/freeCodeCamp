---
title: Bottle
---


The bottle framework allows us to very quickly and easily get up and running with a basic web application.

The following details how to write and run a simple greeting web app where we can enter our name in a form, press submit and get back a greeting.


1. Use `pip` to install the bottle package.
    ```
    pip install bottle
    ```

2. Create a `html` file to be served when loading the site. For example `index.html`.
   
    Let's add a heading and a basic form to this page.

    ```html
    <h3>Say Hello</h3>

    <form action="/hello" method="get">
    Name:
        <input type="text" name="name"><br><br>
        <input type="submit">
    </form>
    ```

3. Create a new python file, example `main.py`.

4. In the first line of the file we need to import get, request, and run functions from the bottle module.
    ```python
    from bottle import get, request, run
    ```

5. Now we define our function to serve our html file when the root page is accessed.

    Here we use the `@get` decorator, which specifies this function should respond to `HTTP GET` requests and pass in `'/'` as the path that the function will be invoked by.

    Next we  define then `index()` function using the `def` keyword.

    To read and return the html file we created in step 2, we use what is called a context manager. This handles opening and closing the file for us, allowing us to read the files and contents and return them with the `return` statement.

    ```python
    @get('/')
    def index():
        with open('./index.html') as f:
            return f.read()
    ```

6. To get the site to run and listen for requests we need to add a call to the bottle frameworks `run` function as follows.

    Here we pass in the host that the web application will run on, in this case `localhost`, and the port that it should listen for HTTP requests.


7. Run the application and load it up in your browser http://localhost:8080/, you should see the html file we created eariler rendered in the browser.

    If we enter our name and press submit now we will get a `HTTP 404` error though as we have not yet defined the function to respond to this request.


    ```python
    run(host='localhost', port=8080)
    ```


8. Back in our `main.py` file we now need to define the function to respond when sumbitting our form.

    Again we use the `@get` decorator here, however this time we pass in `'/.hello'` as the path. You may notice that this is the same path that we defined in the action attribute of our form in `index.html`.

    Next we retrieve the `name` value from the url, when submitting the form the form data is url encoded like this http://localhost:8080/hello?name=Jon+Snow

    Finally we return our greeting, appending the name entered in our form.

    ```python
    @get('/hello')
    def hello():
        name = request.query['name']
        return f'Hello {name}'
    ```

### Sources
https://bottlepy.org/docs/dev/

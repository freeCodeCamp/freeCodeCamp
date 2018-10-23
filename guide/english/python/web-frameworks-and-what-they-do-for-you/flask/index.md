Flask (source code) is a Python web framework built with a small core and easy-to-extend philosophy.

Why is Flask a good web framework choice?
Flask is considered more Pythonic than the Django web framework because in common situations the equivalent Flask web application is more explicit. Flask is also easy to get started with as a beginner because there is little boilerplate code for getting a simple app up and running.

For example, here is a valid "Hello, world!" web application with Flask:

    from flask import Flask
    app = Flask(__name__)


    @app.route('/')
    def hello_world():
        return 'Hello, World!'

    if __name__ == '__main__':
        app.run()

The above code shows "Hello, World!" on localhost port 5000 in a web browser when run with the python app.py command and the Flask library installed.

Flask was originally designed and developed by Armin Ronacher as an April Fool's Day joke in 2010. Despite the origin as a joke, the Flask framework became wildly popular as an alternative to Django projects with their monolithic structure and dependencies.

Flask's success created a lot of additional work in issue tickets and pull requests. Armin eventually created The Pallets Projects collection of open source code libraries after he had been managing Flask under his own GitHub account for several years. The Pallets Project now serves as the community-driven organization that handles Flask and other related Python libraries such as Lektor, Jinja and several others.

Source: https://www.fullstackpython.com/flask.html

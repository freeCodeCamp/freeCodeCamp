---
title: REST APIs with Falcon
---


## Introduction

RESTful APIs are a major component of any well-architected stack, and Python happens to have some brilliant frameworks for quickly composing APIs. One of these frameworks is called [Falcon](https://falconframework.org) - and it's great! Essentially a microframework, it ships with a sizable number of advantages:

1. It's fast. Really fast. Check out the benchmarks [here](https://falconframework.org/#sectionBenchmarks).

2. HTTP Resources are defined as classes, with class methods being used for different REST operations on these resources. This helps maintaining a clean codebase.

3. It's quite extensible - check out [this section](https://github.com/falconry/falcon/wiki/Complementary-Packages) on their wiki, to get a feel for it. 

4. It's based on WSGI - the Pythonic standard for web apps - so it works with Python 2.6, 2.7, and 3.3+. And if you need more performance, run it using PyPy!


## Getting started

First, let's prepare our environment. Personally, it's always great to work in virtual environments - you can use `virtualenv`, `virtualenvwrapper` or `venv`. Next, install Falcon using `pip`: `pip install falcon`.

We're going to develop a small sample API that does very basic time-zone manipulations for us. It will display the current time in UTC, as well as the corresponding epoch time. To that end, we'll grab a nifty library called `arrow`: `pip install arrow`.

You can find the finished sample at [https://github.com/rudimk/freecodecamp-guides-rest-api-falcon](https://github.com/rudimk/freecodecamp-guides-rest-api-falcon).

## Resources

Think of a resource as an entity that your API needs to manipulate. In our case, the best resource would be a `Timestamp`. Our routing would typically be something like this:

```
GET /timestamp
```

Here, `GET` is the HTTP verb used to call this endpoint, and `/timestamp` is the URL itself. Now that we've gotten this bit out of the way, let's create a module!

`$ touch timestamp.py`

Time to import the Falcon library:

```python

import json

import falcon

import arrow

```

Note we've also import the `json` package and the `arrow` library. Now, let's define a class for our resource:

```python

class Timestamp(object):

	def on_get(self, req, resp):
		payload = {}
		payload['utc'] = arrow.utcnow().format('YYYY-MM-DD HH:mm:SS')
		payload['unix'] = arrow.utcnow().timestamp

		resp.body = json.dumps(payload)
		resp.status = falcon.HTTP_200

```

Let's go through this snippet. We've defined a `Timestamp` class, and defined a class method called `on_get` - this function tells Falcon that when a `GET` request is issued to an endpoint for this resource, run the `on_get` function and provide the request and response objects as parameters. After that, it's smooth sailing - we create an empty dictionary, fill it up with the current UTC and UNIX timestamps, convert it to JSON and attach it to the response object. 

Pretty simple, right? But sadly, that's not all. We now need to create a Falcon server and hook up the resource class we've just defined to an actual endpoint. 

`$ touch app.py`

Now, add the code below:

```python

import falcon

from timestamp import Timestamp

api = application = falcon.API()

timestamp = Timestamp()

api.add_route('/timestamp', timestamp)

```

Here, we've defined a Falcon API, and initialized an instance of the resource class we created earlier. Then, we've hooked up the `/timestamp` endpoint with the class instance - and now we're good to go! To test this API install `gunicorn`(`pip install gunicorn`), and run `gunicorn app`. Use Postman or simple `cURL` to test this:

```

$ curl http://localhost:8000/timestamp                                                    
{"utc": "2017-10-20 06:03:14", "unix": 1508479437}

```

And that does it!

## Moving on

Once you've got the hang of Falcon, composing powerful RESTful APIs that interact with databases or messaging queues is very easy. Do check out the [Falcon docs](https://falcon.readthedocs.io/en/stable/index.html), as well as PyPI for interesting Falcon modules that keep popping up.
---
id: 6763583aa52577c04638337d
title: Web Directories Scanner
challengeType: 10
dashedName: web-directories-scanner
---

# --description--

Directory scanning is important in web penetration testing as it helps identify hidden files, directories, and entry points that could expose sensitive information or vulnerabilities.

To work on this project. Start from this <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-web-directories-scanner" target="_blank" rel="noopener noreferrer nofollow"> Gitpod starter code</a>.

We are still developing the interactive instructional part of the Python curriculum. For now, here are some videos on the freeCodeCamp.org YouTube channel that will teach you everything you need to know to complete this project:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Create a web directories scanner with Python.

In the `main.py` file, the `main` function parses the `-u` and `-w` arguments for the URL and wordlist respectively. The URL and wordlist are then passed to the `scan_directories` function in the `scanner.py` file.

The following below is an illustration of how the arguments are passed with the `main.py` file

```bash
python3 main.py -u "https://www.freecodecamp.org" -w "directory-list.txt"
```

The function `scan_directories` in the `scanner.py` file takes two arguments `url` and `wordlist` as passed from the main function.

Here is an example of how the function might be invoked:

```py
scan_directories("http://50.116.1.184", "directory-list.txt")
scan_directories("https://www.freecodecamp.org",  "directory-list.txt")
```

Your task is to complete the `scan_directories` function such that it returns the responses for each of the scanned directory path from the wordlist. The result should contain the status_code and path scanned.

Here is a sample response that should be returned:

```bash
python3 main.py -u "https://www.freecodecamp.org" -w "directory-list.txt"
200 https://www.freecodecamp.org/donate
302 https://www.freecodecamp.org/login
302 https://www.freecodecamp.org/about
200 https://www.freecodecamp.org/news
200 https://www.freecodecamp.org/user
```

We are only interested with those responses with status codes `200`, `301`, `302` or `403`.

## Testing

The unit tests for this project are in `tests.py`. To test your code you should run.

```bash
python3 -m unittest tests.py

# Expected result
Ran 2 tests in 15.051s

OK
```

## Submitting

Copy your project's URL and submit it to freeCodeCamp.

# --hints--

It should pass all Python tests.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

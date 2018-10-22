---
title: Phoenix
---

## What is Phoenix
Phoenix is a web development framework written in Elixir and created by Chris McCord.  This open source framework implements the server-side MVC pattern, and has many similarities to other web frameworks like Ruby on Rails or Django for Python. Phoenix was written with an emphasis on being developer friendly, while also boasting fantastic productivity and high application performance. The Phoenix framework includes some very powerful features such as 'channels' for handling real time communication and Ecto which is a fantastic tool for ORM (Object Relational Mapping).

## Installing Phoenix
Installation of Phoenix is relatively simple, but before we can do that we'll need to ensure that Elixir, the Hex package manager, and Erlang are already working on our system. The Elixir site has a fantastic [installation guide](https://elixir-lang.org/install.html) for both Elixir and Erlang. Once these have been successfully set up, simply run:

```shell
$ mix local.hex
```

To install the Hex package manager, and then to install the Phoenix archive run:

```shell
$ mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez
```
## Creating a Phoenix application:

1. After you install Phoenix, creating an application is simple:
```shell
$ mix phx.new <application_name>
```

2. Running this command wiil generate a directory structure and all the basic files needed with the *application_name* you used in the previous command. You will then be prompted to install basic dependencies for the application, so we'll say yes to that.

3. Next, we'll be prompted to change into our project directory:
```shell
$ cd <application_name>
```

4. By default, Phoenix assumes that we'll be using PostgreSQL for our application with a username and password of 'postgres'. If that isn't the case, you'll need to change your configuration - otherwise all we need to do is create our database:
```shell
$ mix ecto.create
```

5. Finally, we'll start our server up:
```shell
$ mix phx.server
```

6. Now, hop in your browser and navigate to localhost:4000 and see the welcome page! Congratulations, you've got a working Phoenix application.


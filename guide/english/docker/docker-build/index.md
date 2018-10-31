---
title: Docker build
---

## Docker build

`docker build` created a docker image from a Dockerfile and a "context". A context can be a URL or a local PATH. You can name the image using the optional `-t` tag.

A Dockerfile will install dependencies during the build command, from a specified URL or local PATH. Any dependencies necessary in your containers must be specified in the Dockerfile.

Your image is now stored in your machine’s local Docker image registry.

When you have Docker containers built, you can then run your app using the appropriate run commands.

#### More Information:
- [Docker CLI docs: build](https://docs.docker.com/engine/reference/commandline/rm/)
- [Docker Building Your App](https://docs.docker.com/get-started/part2/#build-the-app)

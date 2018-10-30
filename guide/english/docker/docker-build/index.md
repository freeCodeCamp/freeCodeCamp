---
title: Docker build
---

## Docker build

`docker build` creats a docker image from a Dockerfile and a "context". A context can be a URL or a local PATH. You can name the image using the optional `-t` tag.

A Dockerfile will install dependencies during the build command, from a specified URL or local PATH. Any dependencies necessary in your containers must be specified in the Dockerfile.

Your image is now stored in your machine’s local Docker image registry.

When you have Docker containers built, you can then run your app using the appropriate run commands.

For example: Running considering docker file exists in current directory, you can create a local docker image as below,

```html
docker build -t sampleimage:sampletag .
```

Here the sampleimage can be a string or a repository URL. If it is URL then it can be pushed to that repository targeted by URL using <a href='https://docs.docker.com/engine/reference/commandline/push/'>docker push</a> command.

#### More Information:
- [Docker CLI docs: build](https://docs.docker.com/engine/reference/commandline/rm/)
- [Docker Building Your App](https://docs.docker.com/get-started/part2/#build-the-app)

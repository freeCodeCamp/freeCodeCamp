---
title: Docker push
---

## Docker push

`docker push` command is used to push the docker image from local repository to remote repository,either to public Docker Hub Rigistry or to private repository.

For example: 

```html
docker push sampleimage:sampletag
```
Here the sampleimage can be a string or a repository URL. If it is a string then it is pushed to Docker Hub Rigistry. If it is URL then it gets pushed to that repository targeted by URL.

#### More Information:
- [Docker docs: push](https://docs.docker.com/engine/reference/commandline/push/)

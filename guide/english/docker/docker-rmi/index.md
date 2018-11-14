---
title: Docker rmi
---

## Docker rmi

`docker rmi` removes images by their ID.  

To remove the image, you first need to list all the images to get the Image IDs, Image name and other details. By running simple command `docker images -a` or `docker images`.

After that you make sure which image want to remove, to do that executing this simple command `docker rmi <your-image-id>`. Then you can confirm that image has been removed or not by list all the images and check.

### Remove multiple images

You may remove multiple images at the same time. The first thing you will want to do is, get the Image IDs by listing the images, then execute the following command:

`docker rmi <your-image-id> <your-image-id> ...`

Write Images IDs in the command followed by the spaces between them.

### Remove all images at once

To remove all images there is a simple command to do that. `docker rmi $(docker images -q)`

Here in the above command, there are two command the first which execute in the `$()` is shell syntax and returns the results whatever executed in that syntax. So in this `-q- is a option is used to provide to return the unique IDs, `$() returns the results of image IDs and then `docker rmi` removes all those images.

#### For More Information:
- [Docker CLI docs: rmi](https://docs.docker.com/engine/reference/commandline/rm/)

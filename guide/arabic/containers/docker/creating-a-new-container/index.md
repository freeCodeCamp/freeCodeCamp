---
title: Creating a new container
localeTitle: إنشاء حاوية جديدة
---
إنشاء حاوية باستخدام Docker CLI

```yaml
docker create [OPTIONS] IMAGE [COMMAND] [ARG...]
``` 

# أمثلة

إنشاء وبدء حاوية

```sh
$ docker create -t -i fedora bash
```
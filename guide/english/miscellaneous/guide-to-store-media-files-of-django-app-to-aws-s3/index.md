---
title: Django-file-storage
---
## Django Media Files and Static files Storage

#### Steps to create AWS S3 Bucket

* Open aws console and create IAM user for S3 bucket
* In services select S3
* Create new S3 buket in S3 console

#### Steps to do in django app

* install boto3 and Django-storages libraries. The commands to install these libraries are

```
pip install boto3
pip install django-storages
```
* Add storages to Installed Apps in ```settings.py```

* To work with satic assets only you have to add the following to your settings.py

```
AWS_ACCESS_KEY_ID = <your AWS acces key>
AWS_SECRET_ACCESS_KEY = <your AWS secret key>
AWS_STORAGE_BUCKET_NAME = <your AWS bucket name>
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'mysite/static'),
]
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

```
* To work with both static and media assets you have to add the following to your settings.py

```
AWS_ACCESS_KEY_ID = <your AWS acces key>
AWS_SECRET_ACCESS_KEY = <your AWS secret key>
AWS_STORAGE_BUCKET_NAME = <your AWS bucket name>
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'mysite/static'),
]
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

DEFAULT_FILE_STORAGE = 'mysite.storage_backends.MediaStorage'

```
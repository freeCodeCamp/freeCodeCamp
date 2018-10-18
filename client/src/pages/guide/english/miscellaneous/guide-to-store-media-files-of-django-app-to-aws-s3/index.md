---
title: Django-döküman-depolama
---
## Django Medya Dökümanları ve Statik döküman Depolama

#### Adım adım AWS S3 Bucket hazırlama


* Aws konsolu'nu açın ve S3 bucket için IAM kullanıcısı oluşturun.
* Servısler kısmında S3'ü seçin
* S3 konsolu içinde yeni bir S3 bucket oluşturun

#### Django app içinde yapılacaklar 

* boto3 ve Djang-storages kütüphanelerini yükleyin. Bu kütüphaneleri yükleme komutları şunlardır

```
pip install boto3
pip install django-storages
```
* Depoları Yüklü Uygulamalar içinde şuraya ekleyin ```settings.py```

* Sadece statik değerlerle çalışmak için aşağıdaki kodu settings.py içine eklemelisiniz.

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
* Hem statik hem de medya değerleri ile çalışmak için aşağıdaki kodu settings.py içine eklemelisiniz.

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

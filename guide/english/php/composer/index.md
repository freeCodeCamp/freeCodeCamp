---
title: Composer
---
## Composer

Composer is a package manager for PHP packages. You use a `composer.json` file to configure the packages for a PHP project, similar to the `package.json` file in NodeJS projects.

### Install Composer

To install Composer, you first have to download it from <a href='https://getcomposer.org/download/' target='_blank' rel='nofollow'>getcomposer.org</a>.

You can then install Composer locally or globally. 

### Install Packages

Install packages with `composer install`. Composer will install the packages listed in the `composer.json` file to the vendor/ folder. 

```shell
composer install
```
To install only a specific package, use `composer require <package_name>`. This will only download and install the latest version available to the selected package.

If you run this command without a `composer.json` file, composer will automatically create it the before the installation.

```shell
composer require <package_name>
```

### Updating Packages

Update packages with `composer update`, Composer will automatically download and install the latest versions of the packages listed in the `composer.json` file to the vendor/ folder.

```shell
composer update
```

To update a single package, use `composer update <package_name>`.

### Removing Packages

Removing is easy as installing packages with composer. Just enter `composer remove <package_name>` to uninstall the package from your vendor/ folder. This will automatically update your `composer.json` file.

```shell
composer remove 
``` 

### More Information:
* The Composer website: <a href='https://getcomposer.org/' target='_blank' rel='nofollow'>getcomposer.org</a>
* Composer's GitHub repo: <a href='https://github.com/composer/getcomposer.org' target='_blank' rel='nofollow'>composer/getcomposer</a>
* The popular PHP package repository that Composer uses to search for packages: <a href='https://packagist.org/' target='_blank' rel='nofollow'>Packagist</a>

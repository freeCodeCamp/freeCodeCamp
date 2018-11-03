---
title: Laravel
---
# Laravel

Laravel is a free and open-source PHP web framework available on [GitHub](https://github.com/laravel/laravel) and licensed under the terms of MIT License. It was created by Taylor Otwell who designed it with the objetive of enabling the development of web applications following the model–view–controller (MVC) architectural pattern and it is now the most starred PHP framework on GitHub. Some of the main features found in Laravel are different ways for accessing relational databases, utilities that aid in application deployment and maintenance and at last but not least modular packaging system with a dedicated dependency manager.

Because Laravel is open-source the community around it is very strong and so is the documentation where you can learn how to do almost everything, try taking a look at the [Laravel Documentation](https://laravel.com/docs/5.7/) to get a glimpse of the open source power!

### Featured Packages

Ready-to-use bundles provided by Laravel through Composer and Packagist include the following:

Cashier, introduced in Laravel 4.2, provides an interface for managing subscription billing services provided by Stripe, such as handling coupons and generating invoices.
SSH, introduced in Laravel 4.1, allows programmatic execution of CLI commands on remote servers using the Secure Shell (SSH) as an encrypted network protocol.
Scheduler, introduced in Laravel 5.0, is an addition to the Artisan command-line utility that allows programmatic scheduling of periodically executed tasks. Internally, Scheduler relies on the cron daemon to run a single Artisan job that, in turn, executes the configured tasks.
Flysystem, introduced in Laravel 5.0, is a file system abstraction layer that allows local file systems and cloud-based storage services provided by Amazon S3 and Rackspace Cloud to be used transparently and in the same way.
Socialite, introduced in Laravel 5.0 as an optional package, provides simplified mechanisms for authentication with different OAuth providers, including Facebook, Twitter, Google, GitHub and Bitbucket.:13

### Top Six Features of Laravel 5.0.1 Framework Most Useful for the Enterprise App Development
1. Entirely new directory structure
2. Route caching
3. Inbuilt Authentication System
4. Multiple file system support
5. Improved method injection
6. Contracts


##Installing Laravel
Laravel utilizes [Composer](https://getcomposer.org/) to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.

##Via Laravel Installer
First, download the Laravel installer using Composer:

>run-command: composer global require laravel/installer

Make sure to place composer's system-wide vendor bin directory in your $PATH so the laravel executable can be located by your system. This directory exists in different locations based on your operating system; however, some common locations include:

- macOS: $HOME/.composer/vendor/bin
- GNU / Linux Distributions: $HOME/.config/composer/vendor/bin

Once installed, the laravel new command will create a fresh Laravel installation in the directory you specify. For instance, laravel new blog will create a directory named blog containing a fresh Laravel installation with all of Laravel's dependencies already installed:

>run-command: laravel new blog

Via Composer Create-Project
Alternatively, you may also install Laravel by issuing the Composer create-project command in your terminal:

>run-command: composer create-project --prefer-dist laravel/laravel blog

Local Development Server
If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at http://localhost:8000:

>run-command: php artisan serve

Of course, more robust local development options are available via Homestead and Valet.

for detail visit [LARAVEL HOME](https://laravel.com/docs/5.7/installation).

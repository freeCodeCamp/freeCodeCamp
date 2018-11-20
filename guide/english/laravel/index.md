---
title: Laravel
---

# Laravel
[Laravel](https://laravel.com/) is a free and open-source PHP web framework available on [GitHub](https://github.com/laravel/laravel) and licensed under the terms of MIT License. It was created by Taylor Otwell and designed with the objective of enabling rapid development of web applications following the model–view–controller (MVC) architectural pattern. It has gained a lot of traction over the years and is now the most starred PHP framework on GitHub. 

Some of the main features found in Laravel are different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and a modular packaging system with a dedicated dependency manager. Laravel also simplifies a lot of common tasks found in web development and provides out of the box solutions for things like authentication, routing, and queues, allowing you to focus on your application.

Because Laravel is open-source, the community around it is very strong and the documentation is top-notch and example driven. Take a look at the [official documentation](https://laravel.com/docs/5.7/) to get a glimpse of how easy it is to use!

Laravel also has its own online learning platform, [Laracasts](https://laracasts.com/), which offers extensive video tutorials  (some free, some available with paid subscription) on Laravel as well as PHP, Javascript, and other web development topics. The free introductory series [Laravel 5.4 From Scratch](https://laracasts.com/series/laravel-from-scratch-2017) is a great place to start.

### Featured Packages
Ready-to-use bundles provided by Laravel through Composer and Packagist include the following:

- **Cashier** - introduced in Laravel 4.2, provides an interface for managing subscription billing services provided by Stripe, such as handling coupons and generating invoices.
- **SSH** - introduced in Laravel 4.1, allows programmatic execution of CLI commands on remote servers using the Secure Shell (SSH) as an encrypted network protocol.
- **Scheduler** - introduced in Laravel 5.0, is an addition to the Artisan command-line utility that allows programmatic scheduling of periodically executed tasks. Internally, Scheduler relies on the cron daemon to run a single Artisan job that, in turn, executes the configured tasks.
- **Flysystem** - introduced in Laravel 5.0, is a file system abstraction layer that allows local file systems and cloud-based storage services provided by Amazon S3 and Rackspace Cloud to be used transparently and in the same way.
- **Socialite** - introduced in Laravel 5.0 as an optional package, provides simplified mechanisms for authentication with different OAuth providers, including Facebook, Twitter, Google, GitHub and Bitbucket.:13

### Top Six Features of Laravel 5.0.1 Framework Most Useful for the Enterprise App Development
1. Entirely new directory structure
2. Route caching
3. Inbuilt Authentication System
4. Multiple file system support
5. Improved method injection
6. Contracts

### Laravel Ecosystem
One of the most powerful features of Laravel is the ecosystem of tools and extensions that surrounds it.

These include a range of services and software, some created by Laravel and some by the wider developer community:

- [Forge](https://forge.laravel.com/) - server management
- [Envoyer](https://envoyer.io/) - deployment
- [Horizon](https://horizon.laravel.com/) - queues / monitoring
- [Lumen](https://lumen.laravel.com/) - fast micro-framework
- [Nova](https://nova.laravel.com/) - administration panel
- [Spark](https://spark.laravel.com/) - application boilerplate / scaffolding
- [Echo](https://laravel.com/docs/5.7/broadcasting) - broadcasting / websockets
- [Homestead](https://laravel.com/docs/5.7/homestead) - virtual dev environment
- [Cashier](https://laravel.com/docs/5.7/billing) - subscription billing
- [Valet](https://laravel.com/docs/5.7/valet) - Mac dev environment
- [Mix](https://laravel.com/docs/5.7/mix) - build / asset compiling
- [Eloquent ORM](https://laravel.com/docs/5.7/eloquent) - database model
- [Cachet](https://cachethq.io/) - status page system
- [Statamic](https://statamic.com/) - CMS

### Server Requirements
The Laravel framework has a few system requirements. Of course, all of these requirements are satisfied by the Laravel Homestead virtual machine, so it's highly recommended that you use [Homestead](https://laravel.com/docs/5.7/homestead) as your local Laravel development environment.

However, if you are not using Homestead, you will need to make sure your server meets the following requirements:

- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension

---
title: Joomla
---

# Joomla

Joomla! is a free and open-source content management system (CMS) built on a model–view–controller web application framework that can be used independently of the CMS. It is developed by Open Source Matters, Inc.

Joomla! is written in object-oriented programming (OOP) PHP. It can store data in MySQL, PostgreSQL or MS SQL database. Features include page caching, RSS feeds, printable versions of pages, news flashes, blogs, search, and support for language internationalization.

Joomla! can be extended to fit almost any need with great amount of free and paid components and plugins.

Some advantages of using Joomla!:
* Access to your website's dashboard from any computer
* Lots of extensions avaliable
* Lots of website templates avaliable

### More Information

[Joomla Documentation: online collaborative community manual](https://docs.joomla.org/)

[Joomla! Developers Portal](https://docs.joomla.org/Portal:Developers)

### Installation 

#### Arch Linux 
1. Download Joomla! from https://downloads.joomla.org/
2. Extract archive file
3. Move the archive file to /srv/http
4. For **DEVELOPMENT** purposes, it is recommended to set file permissions of the Joomla! directory to 777. Note that the permission change is strictly for development purposes only. Execute the following command in the terminal. Remember to change the text within <> according to your Joomla! folder name:
```

sudo chmod -R 777 /srv/http/<insert Joomla! folder name here>
```

5. Open a browser
6. Navigate to localhost/<insert Joomla! folder name here>
7. Follow the graphical install process and you're all set.
